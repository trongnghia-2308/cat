import React from 'react';
import { Search, Heart, Sparkles, BookOpen, ShieldCheck, ArrowRight, Play, CheckCircle2, Award } from 'lucide-react';
import { Banner } from './Banner';
import { TabId } from './Navbar';
import { CAT_BREEDS } from '../data/breedsData';
import { ADOPTABLE_CATS } from '../data/adoptionData';
import { GROOMING_ARTICLES } from '../data/groomingArticles';
import { HEALTH_ARTICLES } from '../data/healthArticles';
import { CatImage } from './CatImage';

interface HomeOverviewProps {
  onNavigate: (tab: TabId) => void;
  onOpenSurvey: () => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({ onNavigate, onOpenSurvey }) => {
  const featuredBreeds = CAT_BREEDS.slice(0, 3);
  const featuredRescueCat = ADOPTABLE_CATS[0];
  const featuredGrooming = GROOMING_ARTICLES[0];
  const featuredHealth = HEALTH_ARTICLES[0];

  return (
    <div className="space-y-16 pb-16">
      {/* Thematic Hero Banner */}
      <Banner onNavigate={onNavigate} onOpenSurvey={onOpenSurvey} />

      {/* Feature Pillar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Cơ sở dữ liệu giống mèo
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Hồ sơ chi tiết hơn 10 giống mèo phổ biến theo chuẩn CFA & TICA, hỗ trợ bộ lọc tính cách, mức độ rụng lông và tính năng so sánh trực quan.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-stone-100">
              <button
                onClick={() => onNavigate('breeds')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 cursor-pointer"
              >
                <span>Khám phá các giống mèo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700">
                <Heart className="w-6 h-6 fill-rose-100" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Nhận nuôi & Trạm cứu trợ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Cầu nối nhân đạo đến các trạm cứu hộ uy tín tại Hà Nội & TP.HCM. Tích hợp bản đồ Google Maps và form đăng ký đón mèo về nhà.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-stone-100">
              <button
                onClick={() => onNavigate('adoption')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-800 cursor-pointer"
              >
                <span>Xem danh sách mèo cần nhà</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Cẩm nang Spa & Sức khỏe
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                2 chuyên trang bài viết thú y: Kỹ thuật chải chuốt spa kèm video YouTube trực quan và cẩm nang dinh dưỡng chống sỏi thận cho mèo.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-stone-100">
              <button
                onClick={() => onNavigate('grooming')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
              >
                <span>Đọc bài viết chăm sóc</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Breed Spotlight Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-1">
              <span>Tiêu Điểm Giống Mèo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Các giống mèo được yêu thích nhất
            </h2>
          </div>
          <button
            onClick={() => onNavigate('breeds')}
            className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Xem tất cả 10+ giống</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBreeds.map((breed) => (
            <div
              key={breed.id}
              onClick={() => onNavigate('breeds')}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] bg-stone-100 overflow-hidden">
                <CatImage
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 mb-1">
                    {breed.origin} · {breed.lifespan}
                  </div>
                  <h4 className="text-lg font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors">
                    {breed.name}
                  </h4>
                  <p className="text-xs text-amber-800 font-medium mb-2">{breed.vietnameseName}</p>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {breed.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-stone-100 text-xs font-semibold text-amber-700 flex items-center gap-1">
                  <span>Khám phá đặc tính</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rescue Spotlight Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-900/90 text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <CatImage
              src={featuredRescueCat.image}
              alt={featuredRescueCat.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Gương Mặt Cần Tìm Mái Ấm Trong Tuần</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {featuredRescueCat.name} ({featuredRescueCat.age})
            </h3>
            <p className="text-sm text-stone-200 leading-relaxed">
              {featuredRescueCat.rescueStory}
            </p>
            <div className="py-2 text-xs text-amber-200 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Đã kiểm tra sức khỏe, tiêm phòng và triệt sản</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Tính cách cực kỳ quấn người và thích trẻ nhỏ</span>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('adoption')}
                className="px-5 py-2.5 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl transition-all shadow-md cursor-pointer"
              >
                Tìm hiểu thêm & Gửi đơn nhận nuôi
              </button>
              <button
                onClick={onOpenSurvey}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors cursor-pointer"
              >
                Góp ý & Khảo sát cộng đồng
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles Double-Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Bài viết kiến thức nổi bật từ chuyên gia
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Được kiểm duyệt chuyên môn bởi các bác sĩ thú y từ Cornell Feline Health Center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Article 1: Grooming */}
          <article className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-amber-300 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold uppercase tracking-wider mb-2">
                <span>Chuyên mục: Chải Chuốt & Spa</span>
                <span aria-hidden="true">·</span>
                <span>{featuredGrooming.readTime}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">
                {featuredGrooming.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                {featuredGrooming.summary}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">{featuredGrooming.author}</span>
              <button
                onClick={() => onNavigate('grooming')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 cursor-pointer"
              >
                <span>Xem cẩm nang chải lông</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

          {/* Article 2: Health */}
          <article className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-amber-300 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-xs text-sky-700 font-semibold uppercase tracking-wider mb-2">
                <span>Chuyên mục: Sức Khỏe & Dinh Dưỡng</span>
                <span aria-hidden="true">·</span>
                <span>{featuredHealth.readTime}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">
                {featuredHealth.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                {featuredHealth.summary}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">{featuredHealth.author}</span>
              <button
                onClick={() => onNavigate('health')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 cursor-pointer"
              >
                <span>Xem cẩm nang dinh dưỡng</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
