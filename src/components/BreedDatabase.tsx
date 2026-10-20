import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Info, X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { CAT_BREEDS } from '../data/breedsData';
import { filterBreeds, Breed } from '../utils/catUtils';

interface BreedDatabaseProps {
  onSelectBreedForGrooming?: (breed: Breed) => void;
}

export const BreedDatabase: React.FC<BreedDatabaseProps> = ({ onSelectBreedForGrooming }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCoat, setSelectedCoat] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
  const [comparisonBreeds, setComparisonBreeds] = useState<Breed[]>([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const filteredBreeds = useMemo(() => {
    return filterBreeds(CAT_BREEDS, searchQuery, {
      coatLength: selectedCoat,
      size: selectedSize,
    });
  }, [searchQuery, selectedCoat, selectedSize]);

  const toggleComparison = (breed: Breed) => {
    if (comparisonBreeds.some((b) => b.id === breed.id)) {
      setComparisonBreeds(comparisonBreeds.filter((b) => b.id !== breed.id));
    } else {
      if (comparisonBreeds.length >= 2) {
        setComparisonBreeds([comparisonBreeds[1], breed]);
      } else {
        setComparisonBreeds([...comparisonBreeds, breed]);
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header section */}
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-2">
          <span>Hệ Thống Phân Loại Giống Mèo</span>
          <span aria-hidden="true">·</span>
          <span>Chuẩn CFA & TICA Quốc Tế</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Cơ sở dữ liệu các giống mèo phổ biến
        </h2>
        <p className="mt-3 text-base text-stone-600 leading-relaxed">
          Tìm hiểu nguồn gốc lịch sử, đặc tính tính cách, độ dài lông và yêu cầu chăm sóc chải chuốt của từng giống mèo để lựa chọn người bạn đồng hành phù hợp nhất với gia đình bạn.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 mb-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Box */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên giống (vd: Scottish, Ba Tư, Ragdoll, lông dài...)"
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all text-stone-900 placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                aria-label="Xóa từ khóa tìm kiếm"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Coat Length Filter */}
          <div className="md:col-span-3">
            <label htmlFor="coat-filter" className="sr-only">Độ dài lông</label>
            <select
              id="coat-filter"
              value={selectedCoat}
              onChange={(e) => setSelectedCoat(e.target.value)}
              className="w-full py-2.5 px-3 text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 cursor-pointer"
            >
              <option value="all">Tất cả kiểu lông</option>
              <option value="short">Lông ngắn (Shorthair)</option>
              <option value="long">Lông dài (Longhair)</option>
              <option value="hairless">Không lông (Hairless)</option>
            </select>
          </div>

          {/* Size Filter */}
          <div className="md:col-span-3">
            <label htmlFor="size-filter" className="sr-only">Kích thước</label>
            <select
              id="size-filter"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full py-2.5 px-3 text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 cursor-pointer"
            >
              <option value="all">Mọi kích cỡ cơ thể</option>
              <option value="medium">Cỡ vừa (Trung bình 3.5 - 5.5 kg)</option>
              <option value="large">Cỡ lớn (Trên 6 kg)</option>
            </select>
          </div>
        </div>

        {/* Comparison Floating Sticky Banner */}
        {comparisonBreeds.length > 0 && (
          <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-900">So sánh giống mèo ({comparisonBreeds.length}/2):</span>
              {comparisonBreeds.map((b) => (
                <span key={b.id} className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-md">
                  {b.name}
                  <button onClick={() => toggleComparison(b)} className="hover:text-amber-700">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            {comparisonBreeds.length === 2 ? (
              <button
                onClick={() => setShowComparisonModal(true)}
                className="px-3 py-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium transition-colors"
              >
                Mở bảng so sánh trực quan
              </button>
            ) : (
              <span className="text-stone-500 italic">Chọn thêm 1 giống để kích hoạt so sánh</span>
            )}
          </div>
        )}
      </div>

      {/* Breed Cards Grid */}
      {filteredBreeds.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
          <p className="text-base text-stone-600">Không tìm thấy giống mèo nào phù hợp với bộ lọc hiện tại.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCoat('all');
              setSelectedSize('all');
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors cursor-pointer"
          >
            Đặt lại tất cả bộ lọc
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBreeds.map((breed) => {
            const isComparing = comparisonBreeds.some((b) => b.id === breed.id);
            return (
              <article
                key={breed.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-md transition-all flex flex-col group"
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={breed.image}
                    alt={`Giống mèo ${breed.name} - ${breed.vietnameseName}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if external fails
                      (e.target as HTMLImageElement).src = '/images/cat_scottish_fold.jpg';
                    }}
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={() => toggleComparison(breed)}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-lg backdrop-blur-md transition-colors ${
                        isComparing
                          ? 'bg-amber-600 text-white shadow-sm'
                          : 'bg-stone-900/60 text-white hover:bg-stone-900/80'
                      }`}
                      title="Thêm vào bảng so sánh"
                    >
                      {isComparing ? '✓ Đang so sánh' : '+ So sánh'}
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata line without pills */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
                      <span>{breed.origin}</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{breed.coatLength === 'short' ? 'Lông ngắn' : breed.coatLength === 'long' ? 'Lông dài' : 'Không lông'}</span>
                      <span aria-hidden="true">·</span>
                      <span>{breed.lifespan}</span>
                    </div>

                    <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors">
                      {breed.name}
                    </h3>
                    <p className="text-xs text-amber-800 font-medium mb-3">
                      {breed.vietnameseName}
                    </p>

                    <p className="text-sm text-stone-600 line-clamp-3 leading-relaxed mb-4">
                      {breed.description}
                    </p>

                    {/* Temperament traits tags as clean text */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {breed.temperament.map((trait) => (
                        <span
                          key={trait}
                          className="text-[11px] font-medium px-2 py-0.5 bg-stone-100 text-stone-700 rounded-md"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action footer */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div className="text-xs text-stone-500">
                      <span>Rụng lông: </span>
                      <span className="font-semibold text-stone-800 tabular-nums">
                        {breed.sheddingLevel}/5
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedBreed(breed)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 cursor-pointer"
                    >
                      <span>Hồ sơ chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Breed Detail Modal */}
      {selectedBreed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-stone-200">
            <div className="relative aspect-[16/9] bg-stone-100">
              <img
                src={selectedBreed.image}
                alt={selectedBreed.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedBreed(null)}
                className="absolute top-4 right-4 p-2 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Đóng bảng chi tiết"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                  <span>Xuất xứ: {selectedBreed.origin}</span>
                  <span aria-hidden="true">·</span>
                  <span>Tuổi thọ: {selectedBreed.lifespan}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                  {selectedBreed.name} ({selectedBreed.vietnameseName})
                </h3>
              </div>

              {/* Trait meters */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 text-center">
                <div>
                  <span className="block text-xs text-stone-500">Mức độ rụng lông</span>
                  <span className="text-lg font-bold text-stone-900 font-serif tabular-nums">{selectedBreed.sheddingLevel}/5</span>
                </div>
                <div>
                  <span className="block text-xs text-stone-500">Mức độ năng động</span>
                  <span className="text-lg font-bold text-stone-900 font-serif tabular-nums">{selectedBreed.energyLevel}/5</span>
                </div>
                <div>
                  <span className="block text-xs text-stone-500">Mức độ tình cảm</span>
                  <span className="text-lg font-bold text-stone-900 font-serif tabular-nums">{selectedBreed.affectionLevel}/5</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-2">Đặc điểm & Lịch sử giống</h4>
                <p className="text-sm text-stone-600 leading-relaxed">{selectedBreed.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-2">Lời khuyên chăm sóc chải chuốt</h4>
                <p className="text-sm text-stone-600 leading-relaxed bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                  {selectedBreed.groomingTips}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-1">Phù hợp nhất với</h4>
                <p className="text-sm text-stone-700 font-medium">{selectedBreed.bestFor}</p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedBreed(null)}
                  className="px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2-Breed Comparison Modal */}
      {showComparisonModal && comparisonBreeds.length === 2 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-stone-200 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <h3 className="text-2xl font-serif font-bold text-stone-900">So sánh đối sánh giống mèo</h3>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="p-2 text-stone-500 hover:text-stone-900 rounded-lg"
                aria-label="Đóng bảng so sánh"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              {comparisonBreeds.map((b) => (
                <div key={b.id} className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
                    <img src={b.image} alt={b.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif text-stone-900">{b.name}</h4>
                    <p className="text-xs text-amber-700 font-medium">{b.vietnameseName}</p>
                  </div>
                  <dl className="space-y-2 text-xs divide-y divide-stone-100">
                    <div className="pt-2 flex justify-between">
                      <dt className="text-stone-500">Xuất xứ</dt>
                      <dd className="font-medium text-stone-800">{b.origin}</dd>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <dt className="text-stone-500">Kiểu lông</dt>
                      <dd className="font-medium text-stone-800 capitalize">{b.coatLength}</dd>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <dt className="text-stone-500">Tuổi thọ</dt>
                      <dd className="font-medium text-stone-800">{b.lifespan}</dd>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <dt className="text-stone-500">Mức độ rụng lông</dt>
                      <dd className="font-bold text-amber-700 tabular-nums">{b.sheddingLevel}/5</dd>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <dt className="text-stone-500">Năng lượng vận động</dt>
                      <dd className="font-bold text-stone-800 tabular-nums">{b.energyLevel}/5</dd>
                    </div>
                    <div className="pt-2">
                      <dt className="text-stone-500 mb-1">Mẹo chải chuốt</dt>
                      <dd className="text-stone-700 text-xs leading-relaxed">{b.groomingTips}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setShowComparisonModal(false)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
