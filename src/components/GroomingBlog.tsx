import React, { useState } from 'react';
import { Play, BookOpen, Clock, Calendar, Check, ArrowRight, X, Sparkles, Youtube, Scissors, ShieldAlert } from 'lucide-react';
import { GROOMING_ARTICLES, GROOMING_VIDEO_TUTORIAL, GroomingArticle } from '../data/groomingArticles';
import { CatImage } from './CatImage';

export const GroomingBlog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<GroomingArticle | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  
  // Interactive Grooming Planner State
  const [coatType, setCoatType] = useState<'short' | 'long' | 'hairless'>('short');
  const [planGenerated, setPlanGenerated] = useState(false);

  const categories = ['all', 'Chải lông', 'Tắm & Vệ sinh', 'Móng & Răng'];

  const filteredArticles = selectedFilter === 'all'
    ? GROOMING_ARTICLES
    : GROOMING_ARTICLES.filter((a) => a.category === selectedFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-2">
          <span>Trang Bài Viết Chuyên Đề 01</span>
          <span aria-hidden="true">·</span>
          <span>Cẩm Nang Chải Chuốt & Spa Thú Cưng</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Nghệ thuật chăm sóc lông, móng & vệ sinh cho mèo
        </h2>
        <p className="mt-3 text-base text-stone-600 leading-relaxed">
          Tổng hợp các bài viết hướng dẫn chuyên sâu từ các chuyên gia pet grooming và bác sĩ thú y. Khám phá kỹ thuật chải lông ngừa tắc ruột do búi lông, cách tắm thư giãn không sợ nước và lịch vệ sinh tai móng định kỳ.
        </p>
      </div>

      {/* THÀNH PHẦN MỞ RỘNG: Video YouTube Hướng Dẫn Chải Lông & Spa Thực Tế */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 mb-14 shadow-xl border border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Youtube className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Video Hướng Dẫn Trực Quan (YouTube)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
              {GROOMING_VIDEO_TUTORIAL.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {GROOMING_VIDEO_TUTORIAL.description}
            </p>
            
            {/* Time-stamped Key Moments */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                Các mốc thời gian quan trọng:
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {GROOMING_VIDEO_TUTORIAL.keyMoments.map((moment) => (
                  <li key={moment.time} className="flex items-start gap-2">
                    <span className="font-mono text-amber-400 font-semibold">{moment.time}</span>
                    <span className="text-stone-300">{moment.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Responsive YouTube Embed Container */}
          <div className="lg:col-span-7 aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
            <iframe
              src={GROOMING_VIDEO_TUTORIAL.youtubeEmbedUrl}
              title={GROOMING_VIDEO_TUTORIAL.title}
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs for Articles */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              selectedFilter === cat
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            {cat === 'all' ? 'Tất cả bài viết chải chuốt' : cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-md transition-all flex flex-col group"
          >
            <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
              <CatImage
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

                <h3 className="text-lg font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {article.title}
                </h3>

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
                  <span>Đọc trọn vẹn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Tool: Trình Lên Lịch Chải Chuốt Tùy Chỉnh (Grooming Schedule Generator) */}
      <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-3xl border border-amber-200/70 p-6 sm:p-8 lg:p-10 shadow-sm">
        <div className="max-w-2xl mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Tiện Ích Tương Tác</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-stone-900">
            Trình tạo lịch trình chải chuốt theo loại lông
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Chọn đặc điểm bộ lông của mèo nhà bạn để nhận thời gian biểu chăm sóc chi tiết kèm dụng cụ khuyến nghị.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 max-w-xl">
          {[
            { id: 'short', label: 'Lông ngắn (Mèo Ta, BSH, Nga)' },
            { id: 'long', label: 'Lông dài (Ba Tư, Ragdoll, Maine Coon)' },
            { id: 'hairless', label: 'Không lông (Mèo Sphynx)' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCoatType(item.id as any);
                setPlanGenerated(true);
              }}
              className={`p-3 text-xs font-semibold rounded-xl text-center border transition-all cursor-pointer ${
                coatType === item.id
                  ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Generated Schedule Result */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <h4 className="text-base font-bold font-serif text-stone-900 mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-600" />
            <span>
              Lịch trình khuyến nghị cho:{' '}
              {coatType === 'short'
                ? 'Mèo lông ngắn'
                : coatType === 'long'
                ? 'Mèo lông dài & bán dài'
                : 'Mèo không lông Sphynx'}
            </span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-stone-50 rounded-xl space-y-1.5 border border-stone-100">
              <span className="font-bold text-stone-900 block">Tần suất chải lông</span>
              <p className="text-stone-600 leading-relaxed">
                {coatType === 'short'
                  ? '2 - 3 lần mỗi tuần (dùng găng tay cao su hoặc lược răng khít)'
                  : coatType === 'long'
                  ? 'Hàng ngày 15 phút (bắt buộc dùng lược gỡ rối kim loại & cào lông rụng)'
                  : 'Không cần chải lông; lau mình bằng khăn ẩm ấm 2-3 ngày/lần'}
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl space-y-1.5 border border-stone-100">
              <span className="font-bold text-stone-900 block">Tần suất tắm nước</span>
              <p className="text-stone-600 leading-relaxed">
                {coatType === 'short'
                  ? '6 - 8 tuần một lần hoặc chỉ khi bị bẩn'
                  : coatType === 'long'
                  ? '4 - 6 tuần một lần kèm xả dưỡng mượt lông'
                  : '2 - 3 tuần một lần để loại bỏ bã nhờn tiết trên da'}
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl space-y-1.5 border border-stone-100">
              <span className="font-bold text-stone-900 block">Móng & Tai & Răng</span>
              <p className="text-stone-600 leading-relaxed">
                Bấm móng mỗi 2 tuần một lần, kiểm tra vệ sinh tai 1 lần/tuần, đánh răng hoặc xịt men tiêu vôi răng 2-3 lần/tuần.
              </p>
            </div>
          </div>
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
              <CatImage
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Table of Contents */}
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 mb-8">
              <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">
                Mục lục bài viết:
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
                  {sec.tips && sec.tips.length > 0 && (
                    <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl space-y-1.5 my-3">
                      <span className="text-xs font-bold text-amber-900 block">Lời khuyên từ chuyên gia:</span>
                      {sec.tips.map((tip, tIdx) => (
                        <p key={tIdx} className="text-xs text-amber-800">💡 {tip}</p>
                      ))}
                    </div>
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
                Đã đọc xong
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
