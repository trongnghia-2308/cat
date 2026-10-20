import React, { useState } from 'react';
import { ShieldAlert, Droplets, Calculator, BookOpen, Clock, ArrowRight, X, AlertTriangle, CheckCircle, HeartPulse, Search } from 'lucide-react';
import { HEALTH_ARTICLES, VACCINATION_TIMELINE, HealthArticle } from '../data/healthArticles';
import { calculateCatAgeToHumanYears, calculateDailyWaterRequirement, checkToxicSubstance, ToxicCheckResult } from '../utils/catUtils';

export const HealthBlog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<HealthArticle | null>(null);
  
  // Tool 1: Age Calculator
  const [catAgeInput, setCatAgeInput] = useState<number>(3);
  const humanYearsEquivalent = calculateCatAgeToHumanYears(catAgeInput);

  // Tool 2: Hydration Calculator
  const [catWeightInput, setCatWeightInput] = useState<number>(4.5);
  const dailyWaterMl = calculateDailyWaterRequirement(catWeightInput);

  // Tool 3: Toxicity Checker
  const [toxicQuery, setToxicQuery] = useState<string>('lily');
  const [toxicResult, setToxicResult] = useState<ToxicCheckResult>(checkToxicSubstance('lily'));

  const handleToxicitySearch = (name: string) => {
    setToxicQuery(name);
    setToxicResult(checkToxicSubstance(name));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-2">
          <span>Trang Bài Viết Chuyên Đề 02</span>
          <span aria-hidden="true">·</span>
          <span>Sức Khỏe & Dinh Dưỡng Khoa Học</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Cẩm nang y tế phòng ngừa & Dinh dưỡng lâm sàng
        </h2>
        <p className="mt-3 text-base text-stone-600 leading-relaxed">
          Tài liệu tổng hợp các nghiên cứu từ Đại học Thú y Cornell và Hiệp hội Thú y Hoa Kỳ (AVMA). Hướng dẫn thiết lập chế độ ăn bảo vệ thận, lịch tiêm vắc-xin định kỳ và tra cứu khẩn cấp các chất gây độc tính nguy hiểm.
        </p>
      </div>

      {/* Featured Interactive Health Tools Suite */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Tool 1: Cat Age Converter */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Quy đổi tuổi mèo</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Tính tuổi mèo sang tuổi người
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Theo chuẩn AAFP: năm đầu tiên tương đương 15 tuổi người, năm thứ hai 24 tuổi, sau đó mỗi năm tương ứng +4 tuổi.
            </p>

            <div className="space-y-2">
              <label htmlFor="cat-age-input" className="text-xs font-semibold text-stone-700 block">
                Tuổi hiện tại của bé: <span className="text-amber-700">{catAgeInput} tuổi</span>
              </label>
              <input
                id="cat-age-input"
                type="range"
                min="0.5"
                max="20"
                step="0.5"
                value={catAgeInput}
                onChange={(e) => setCatAgeInput(parseFloat(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 bg-amber-50/50 p-4 rounded-2xl text-center">
            <span className="text-xs text-stone-500 block">Tương đương người:</span>
            <span className="text-3xl font-serif font-bold text-amber-700 tabular-nums">
              {humanYearsEquivalent} tuổi
            </span>
            <p className="text-[11px] text-stone-600 mt-1">
              {catAgeInput <= 1
                ? 'Giai đoạn Mèo con (Kitten) - Cần dinh dưỡng phát triển xương'
                : catAgeInput <= 6
                ? 'Giai đoạn Trưởng thành (Adult) - Duy trì cân nặng lý tưởng'
                : 'Giai đoạn Lão niên (Senior) - Khám thận định kỳ 6 tháng/lần'}
            </p>
          </div>
        </div>

        {/* Tool 2: Hydration Calculator */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
              <Droplets className="w-4 h-4 text-sky-600" />
              <span>Nhu cầu bù nước</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Lượng nước cần thiết mỗi ngày
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Mèo cần tối thiểu 50-60mL nước trên mỗi kg trọng lượng cơ thể mỗi ngày để phòng ngừa sỏi bàng quang và suy thận.
            </p>

            <div className="space-y-2">
              <label htmlFor="cat-weight-input" className="text-xs font-semibold text-stone-700 block">
                Cân nặng của mèo: <span className="text-sky-700">{catWeightInput} kg</span>
              </label>
              <input
                id="cat-weight-input"
                type="range"
                min="1.5"
                max="10"
                step="0.1"
                value={catWeightInput}
                onChange={(e) => setCatWeightInput(parseFloat(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 bg-sky-50/50 p-4 rounded-2xl text-center">
            <span className="text-xs text-stone-500 block">Lượng nước tối thiểu:</span>
            <span className="text-3xl font-serif font-bold text-sky-700 tabular-nums">
              ~{dailyWaterMl} mL/ngày
            </span>
            <p className="text-[11px] text-stone-600 mt-1">
              Khuyến khích kết hợp ăn Pate ẩm 75% nước để đạt đủ chỉ tiêu tự nhiên.
            </p>
          </div>
        </div>

        {/* Tool 3: Emergency Toxicity Checker */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Tra cứu ngộ độc</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Kiểm tra nhanh chất gây độc
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Gõ tên thực phẩm hoặc cây cảnh để kiểm tra mức độ nguy hiểm đối với loài mèo.
            </p>

            {/* Quick search input */}
            <div className="flex items-center gap-1.5 flex-wrap mb-2">
              {['lily', 'chocolate', 'onion', 'paracetamol', 'catnip'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleToxicitySearch(item)}
                  className={`px-2 py-0.5 text-[11px] font-medium rounded-md cursor-pointer transition-colors ${
                    toxicQuery === item
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {item === 'lily' ? 'Hoa Ly' : item === 'chocolate' ? 'Socola' : item === 'onion' ? 'Hành tỏi' : item === 'paracetamol' ? 'Panadol' : 'Cỏ bạc hà'}
                </button>
              ))}
            </div>
          </div>

          <div className={`mt-4 p-4 rounded-2xl border text-xs ${
            toxicResult.severity === 'lethal'
              ? 'bg-rose-50 border-rose-200 text-rose-900'
              : toxicResult.severity === 'dangerous'
              ? 'bg-amber-50 border-amber-200 text-amber-900'
              : 'bg-emerald-50 border-emerald-200 text-emerald-900'
          }`}>
            <div className="flex items-center gap-1.5 font-bold mb-1">
              {toxicResult.isToxic ? (
                <AlertTriangle className="w-4 h-4 text-rose-600" />
              ) : (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              )}
              <span className="uppercase tracking-wider">
                {toxicResult.severity === 'lethal'
                  ? 'CỰC KỲ NGUY HIỂM / TỬ VONG'
                  : toxicResult.severity === 'dangerous'
                  ? 'NGUY HIỂM / GÂY ĐỘC'
                  : 'AN TOÀN CHO MÈO'}
              </span>
            </div>
            <p className="leading-relaxed">{toxicResult.notes}</p>
            {toxicResult.symptoms && (
              <p className="mt-1.5 font-medium text-[11px]">
                Triệu chứng: {toxicResult.symptoms}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Health Articles Grid */}
      <div className="mb-16">
        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">
          Các bài viết y khoa thú y chọn lọc
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEALTH_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 bg-stone-900/80 text-white rounded-lg backdrop-blur-sm">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span>{article.author}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="text-lg font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-400">{article.publishedDate}</span>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 cursor-pointer"
                  >
                    <span>Xem nội dung</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Vaccination & Deworming Timeline Guide */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 lg:p-10 shadow-sm mb-12">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-1">
            <HeartPulse className="w-4 h-4 text-amber-600" />
            <span>Phác Đồ Miễn Dịch Chủ Động</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-stone-900">
            Lịch tiêm phòng vắc-xin và tẩy giun định kỳ chuẩn thú y
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Tuân thủ lịch tiêm giúp bảo vệ mèo khỏi các bệnh truyền nhiễm nguy hiểm có tỷ lệ tử vong lên tới 90% như bệnh Giảm bạch cầu (FPV).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {VACCINATION_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  {item.age}
                </span>
                <h4 className="text-sm font-bold text-stone-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Bắt buộc theo chuẩn thú y</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Reading View Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                  <span>{selectedArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
                  {selectedArticle.title}
                </h3>
                <p className="text-xs text-amber-800 font-medium mt-1">
                  Tác giả: {selectedArticle.author} ({selectedArticle.authorRole})
                </p>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-100 cursor-pointer"
                aria-label="Đóng bài viết"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Featured Image */}
            <div className="my-6 aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Table of Contents */}
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 mb-8">
              <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">
                Mục lục chuyên đề:
              </h4>
              <ul className="space-y-1 text-xs text-stone-600 list-disc list-inside">
                {selectedArticle.tableOfContents.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-8 text-stone-700 leading-relaxed text-sm">
              {selectedArticle.contentSections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-lg font-bold font-serif text-stone-900">
                    {idx + 1}. {sec.heading}
                  </h4>
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx} className="text-stone-600 leading-relaxed">{p}</p>
                  ))}
                  {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-700 bg-stone-50 p-4 rounded-xl border border-stone-200">
                      {sec.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx}>{bp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors cursor-pointer"
              >
                Đóng bài viết
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
