/**
 * Utility functions for feline calculations, breed search filtering, and veterinary advice tools.
 */

export interface Breed {
  id: string;
  name: string;
  vietnameseName: string;
  origin: string;
  coatLength: 'short' | 'semi-long' | 'long' | 'hairless';
  size: 'small' | 'medium' | 'large';
  sheddingLevel: 1 | 2 | 3 | 4 | 5; // 1 lowest, 5 highest
  energyLevel: 1 | 2 | 3 | 4 | 5;
  affectionLevel: 1 | 2 | 3 | 4 | 5;
  lifespan: string;
  temperament: string[];
  description: string;
  groomingTips: string;
  bestFor: string;
  image: string;
}

export const FALLBACK_CAT_IMAGE = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80';

export const FALLBACK_CAT_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="100%" height="100%" fill="%23fef3c7"/><circle cx="300" cy="180" r="75" fill="%23f59e0b"/><polygon points="245,130 260,70 295,115" fill="%23d97706"/><polygon points="355,130 340,70 305,115" fill="%23d97706"/><circle cx="275" cy="170" r="10" fill="%2378350f"/><circle cx="325" cy="170" r="10" fill="%2378350f"/><polygon points="300,190 292,182 308,182" fill="%23b45309"/><path d="M292,198 Q300,206 308,198" stroke="%2378350f" stroke-width="2.5" fill="none"/><text x="300" y="300" font-family="sans-serif" font-size="22" font-weight="600" fill="%2392400e" text-anchor="middle">FelisCare</text></svg>`;

/**
 * Resolves local image URLs against the Vite BASE_URL (e.g. ./ or /cat/ or / locally)
 */
export function getAssetUrl(path: string): string {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}

export interface ToxicCheckResult {
  isToxic: boolean;
  severity: 'safe' | 'caution' | 'dangerous' | 'lethal';
  notes: string;
  symptoms?: string;
}

/**
 * Calculates human age equivalent according to standard American Association of Feline Practitioners (AAFP) guidelines:
 * - 1st cat year ~ 15 human years
 * - 2nd cat year ~ 24 human years (total)
 * - Each subsequent year ~ +4 human years
 */
export function calculateCatAgeToHumanYears(catAgeYears: number): number {
  if (catAgeYears <= 0) return 0;
  if (catAgeYears <= 1) {
    return Math.round(catAgeYears * 15);
  }
  if (catAgeYears <= 2) {
    return Math.round(15 + (catAgeYears - 1) * 9);
  }
  return Math.round(24 + (catAgeYears - 2) * 4);
}

/**
 * Calculates recommended daily water intake in milliliters (mL)
 * Standard veterinary baseline: ~50-60mL per kg body weight per day
 */
export function calculateDailyWaterRequirement(catWeightKg: number): number {
  if (catWeightKg <= 0) return 0;
  return Math.round(catWeightKg * 55);
}

/**
 * Filters a list of cat breeds based on text query and optional category facets
 */
export function filterBreeds(
  breeds: Breed[],
  query: string = '',
  filters: {
    coatLength?: string;
    size?: string;
    temperamentTag?: string;
  } = {}
): Breed[] {
  const normalizedQuery = query.trim().toLowerCase();

  return breeds.filter((breed) => {
    // Text search in name, vietnameseName, origin, or description
    if (normalizedQuery) {
      const matchName = breed.name.toLowerCase().includes(normalizedQuery);
      const matchVietnamese = breed.vietnameseName.toLowerCase().includes(normalizedQuery);
      const matchOrigin = breed.origin.toLowerCase().includes(normalizedQuery);
      const matchDesc = breed.description.toLowerCase().includes(normalizedQuery);
      const matchTemperament = breed.temperament.some((t) => t.toLowerCase().includes(normalizedQuery));

      if (!matchName && !matchVietnamese && !matchOrigin && !matchDesc && !matchTemperament) {
        return false;
      }
    }

    // Filter by coat length
    if (filters.coatLength && filters.coatLength !== 'all') {
      if (breed.coatLength !== filters.coatLength) return false;
    }

    // Filter by size
    if (filters.size && filters.size !== 'all') {
      if (breed.size !== filters.size) return false;
    }

    // Filter by temperament tag
    if (filters.temperamentTag && filters.temperamentTag !== 'all') {
      const tagLower = filters.temperamentTag.toLowerCase();
      const hasTag = breed.temperament.some((t) => t.toLowerCase().includes(tagLower));
      if (!hasTag) return false;
    }

    return true;
  });
}

/**
 * Toxicity database checker for common household plants and human foods
 */
const TOXIC_DATABASE: Record<string, ToxicCheckResult> = {
  lily: {
    isToxic: true,
    severity: 'lethal',
    notes: 'Hoa ly (Lilies) cực kỳ độc hại! Chỉ cần một hạt phấn hay liếm nước cắm hoa có thể gây suy thận cấp tử vong trong 36-72 giờ.',
    symptoms: 'Nôn mửa, chán ăn, hôn mê, co giật, vô niệu.',
  },
  chocolate: {
    isToxic: true,
    severity: 'dangerous',
    notes: 'Chứa Theobromine và Caffeine mà mèo không thể chuyển hóa.',
    symptoms: 'Tim đập nhanh, thở gấp, run rẩy, co giật.',
  },
  onion: {
    isToxic: true,
    severity: 'dangerous',
    notes: 'Hành, tỏi, hẹ phá hủy hồng cầu dẫn đến chứng thiếu máu tan máu (Heinz body anemia).',
    symptoms: 'Yếu ớt, niêm mạc nhợt nhạt, nước tiểu màu đỏ sẫm.',
  },
  garlic: {
    isToxic: true,
    severity: 'dangerous',
    notes: 'Tỏi độc gấp 5 lần hành đối với họ mèo.',
    symptoms: 'Đau bụng, nôn mửa, tiêu chảy, thiếu máu.',
  },
  grape: {
    isToxic: true,
    severity: 'dangerous',
    notes: 'Nho tươi và nho khô có thể dẫn đến suy thận cấp tính ở mèo.',
    symptoms: 'Nôn mửa trong vòng 12h, tiêu chảy, mệt mỏi.',
  },
  paracetamol: {
    isToxic: true,
    severity: 'lethal',
    notes: 'Thuốc hạ sốt Paracetamol/Panadol tuyệt đối CẤM cho mèo. Một viên nhỏ có thể phá hủy gan và tế bào máu gây tử vong.',
    symptoms: 'Khó thở, phù mặt, nướu tím tái, suy gan cấp.',
  },
  catnip: {
    isToxic: false,
    severity: 'safe',
    notes: 'Cỏ bạc hà mèo (Nepeta cataria) an toàn 100%, tạo cảm giác thư giãn, phấn chấn tự nhiên nhờ hợp chất Nepetalactone.',
  },
  cooked_chicken: {
    isToxic: false,
    severity: 'safe',
    notes: 'Ức gà luộc không gia vị là nguồn đạm tuyệt hảo, dễ tiêu hóa cho mèo.',
  },
  cooked_salmon: {
    isToxic: false,
    severity: 'safe',
    notes: 'Cá hồi chín giàu Omega-3, rất tốt cho lông và da mèo. Tránh ăn sống để ngừa vi khuẩn.',
  },
  milk: {
    isToxic: true,
    severity: 'caution',
    notes: 'Hầu hết mèo trưởng thành bất dung nạp Lactose trong sữa bò thông thường, gây rối loạn tiêu hóa.',
    symptoms: 'Đầy hơi, tiêu chảy, đau bụng.',
  },
};

export function checkToxicSubstance(inputName: string): ToxicCheckResult {
  const key = inputName.trim().toLowerCase().replace(/[\s-]+/g, '_');
  
  for (const [dbKey, result] of Object.entries(TOXIC_DATABASE)) {
    if (key.includes(dbKey) || dbKey.includes(key)) {
      return result;
    }
  }

  return {
    isToxic: false,
    severity: 'caution',
    notes: 'Không tìm thấy trong cơ sở dữ liệu khẩn cấp. Luôn tham vấn bác sĩ thú y trước khi cho mèo ăn bất kỳ thực phẩm lạ nào.',
  };
}
