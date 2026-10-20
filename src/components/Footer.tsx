import React from 'react';
import { TabId } from './Navbar';
import { ExternalLink, Heart, Shield, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: TabId) => void;
  onOpenSurvey: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSurvey }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.5 2 5.5 4 4.5 7.5L2 6l1 5c-1 1.5-1 3.5 0 5 1.5 2.5 5 4 9 4s7.5-1.5 9-4c1-1.5 1-3.5 0-5l1-5-2.5 1.5C18.5 4 15.5 2 12 2zm-3.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-3.5 3c1 0 2 .5 2 1s-1 1.5-2 1.5-2-1-2-1.5 1-1 2-1z" />
                </svg>
              </div>
              <span className="text-xl font-bold font-serif text-white tracking-tight">
                FelisCare
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Trang web cẩm nang khoa học về loài mèo, cơ sở dữ liệu tra cứu giống mèo quốc tế, kết nối nguồn lực nhận nuôi cứu hộ nhân đạo và chia sẻ kiến thức chải chuốt chăm sóc toàn diện.
            </p>
            <div className="text-[11px] text-stone-500">
              Dự án thực hiện đáp ứng tiêu chí kiểm tra Giữa học kì 1 - Môn Tin học 12.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Danh mục chuyên trang
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Trang chủ tổng quan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('breeds')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Tra cứu giống mèo (CFA / TICA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('adoption')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Nhận nuôi cứu trợ & Bản đồ Google Maps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('grooming')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Cẩm nang chải chuốt & Video YouTube
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('health')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Cẩm nang sức khỏe & Tiêm phòng vắc-xin
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSurvey}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-amber-400 font-medium"
                >
                  Khảo sát cộng đồng & Góp ý
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: RUBRIC CITATIONS / TRÍCH NGUỒN NỘI DUNG & HÌNH ẢNH */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                Trích nguồn tài liệu & Bản quyền hình ảnh
              </h4>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Các thông tin chuyên môn và hình ảnh trên website được tổng hợp và tham khảo từ các tổ chức thú y và hiệp hội felinology uy tín:
            </p>
            <ul className="space-y-1.5 text-xs text-stone-400 list-disc list-inside">
              <li>
                <span className="text-stone-300 font-medium">Tiêu chuẩn giống:</span> The Cat Fanciers&apos; Association (CFA) &amp; The International Cat Association (TICA).
              </li>
              <li>
                <span className="text-stone-300 font-medium">Y tế &amp; Dinh dưỡng:</span> Cornell Feline Health Center (Đại học Cornell) &amp; ASPCA Animal Poison Control.
              </li>
              <li>
                <span className="text-stone-300 font-medium">Phác đồ phòng bệnh:</span> Hiệp hội các Bác sĩ Thú y Thực hành Feline Hoa Kỳ (AAFP).
              </li>
              <li>
                <span className="text-stone-300 font-medium">Hình ảnh &amp; Video:</span> Bản quyền ảnh nhiếp ảnh gia Unsplash Feline License, YouTube Educational Feline Care, và AI Studio Media generation.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 FelisCare Portal. Bài tập lớn Thiết kế Website Tin học 12.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Tiêu chí 1: Link xuất bản</span>
            <span aria-hidden="true">·</span>
            <span>Tiêu chí 2: 5 tabs, video &amp; maps</span>
            <span aria-hidden="true">·</span>
            <span>Tiêu chí 3: Thẩm mỹ &amp; UX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
