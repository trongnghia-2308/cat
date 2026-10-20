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
