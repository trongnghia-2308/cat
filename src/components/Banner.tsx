import React from 'react';
import { Search, Heart, Sparkles, BookOpen } from 'lucide-react';
import { TabId } from './Navbar';

interface BannerProps {
  onNavigate: (tab: TabId) => void;
  onOpenSurvey: () => void;
}

export const Banner: React.FC<BannerProps> = ({ onNavigate, onOpenSurvey }) => {
  return (
    <div className="relative overflow-hidden bg-stone-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-6 shadow-xl">
      {/* Background Image with Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cat_hero_banner.jpg"
          alt="Mèo tam thể ngồi bên bậu cửa sổ ngập tràn ánh nắng"
          className="w-full h-full object-cover object-center filter brightness-90 transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/75 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl space-y-6">
          {/* Subtle text kicker without pill badges */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-amber-300 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Cổng Thông Tin & Cẩm Nang Mèo
            </span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="text-amber-200/90">Chuẩn Thú Y 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight tracking-tight text-balance">
            Thấu hiểu, yêu thương & chăm sóc mèo chuẩn khoa học
          </h1>

          <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
            Tra cứu hơn 10 giống mèo thuần chủng, kết nối mái ấm cứu hộ nhận nuôi nhân đạo, và khám phá trọn bộ cẩm nang chải chuốt spa cùng dinh dưỡng phòng bệnh từ chuyên gia thú y.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('breeds')}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <Search className="w-4 h-4" />
              <span>Tra cứu giống mèo</span>
            </button>
            <button
              onClick={() => onNavigate('adoption')}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 active:scale-98 backdrop-blur-md border border-white/20 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              <Heart className="w-4 h-4 text-amber-400" />
              <span>Nhận nuôi cứu trợ</span>
            </button>
            <button
              onClick={() => onNavigate('grooming')}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-200 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4" />
              <span>Đọc cẩm nang Spa</span>
            </button>
          </div>

          {/* Adjacency Proof Strip */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-6 text-stone-300 text-xs">
            <div>
              <p className="text-xl sm:text-2xl font-bold font-serif text-white tabular-nums">10+</p>
              <p className="text-stone-400 mt-0.5">Giống mèo quốc tế</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-serif text-white tabular-nums">100%</p>
              <p className="text-stone-400 mt-0.5">Y tế & tiêm phòng trạm</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-serif text-white tabular-nums">4.9/5</p>
              <p className="text-stone-400 mt-0.5">Đánh giá cộng đồng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
