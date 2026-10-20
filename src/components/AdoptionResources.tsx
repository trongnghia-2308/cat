import React, { useState } from 'react';
import { MapPin, Phone, Clock, Heart, ShieldCheck, CheckCircle2, Send, ExternalLink, Sparkles } from 'lucide-react';
import { ADOPTABLE_CATS, SHELTER_PARTNERS, ADOPTION_STEPS, AdoptableCat, ShelterPartner } from '../data/adoptionData';

interface AdoptionResourcesProps {
  onOpenAdoptionFormForCat?: (cat: AdoptableCat) => void;
}

export const AdoptionResources: React.FC<AdoptionResourcesProps> = ({ onOpenAdoptionFormForCat }) => {
  const [selectedShelter, setSelectedShelter] = useState<ShelterPartner>(SHELTER_PARTNERS[0]);
  const [selectedCatForModal, setSelectedCatForModal] = useState<AdoptableCat | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [targetCat, setTargetCat] = useState<AdoptableCat | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Hà Nội',
    housingType: 'Căn hộ chung cư (đã lắp lưới ban công)',
    experience: 'Đang hoặc từng nuôi mèo',
    financialReadiness: 'Đã sẵn sàng kinh phí thú y định kỳ',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenApply = (cat?: AdoptableCat) => {
    if (cat) {
      setTargetCat(cat);
    }
    setShowApplyModal(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }
    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('feliscare_adoption_apps') || '[]');
    existing.push({
      ...formData,
      catName: targetCat?.name || 'Nguyện vọng chung',
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem('feliscare_adoption_apps', JSON.stringify(existing));
    setFormSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-2">
          <span>Nhận Nuôi Nhân Đạo (Adopt, Don&apos;t Shop)</span>
          <span aria-hidden="true">·</span>
          <span>Cứu Hộ & Mái Ấm Mèo</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Cổng tài nguyên nhận nuôi & Trạm cứu hộ
        </h2>
        <p className="mt-3 text-base text-stone-600 leading-relaxed">
          Mỗi bé mèo được giải cứu đều xứng đáng có một cơ hội sống thứ hai trong tình yêu thương. Tất cả các bé tại mạng lưới FelisCare đều đã được khám thú y, tiêm phòng vắc-xin và triệt sản an toàn trước khi về nhà mới.
        </p>
      </div>

      {/* 4-Step Adoption Pipeline */}
      <div className="mb-14">
        <h3 className="text-xl font-bold font-serif text-stone-900 mb-6">
          Quy trình 4 bước nhận nuôi trách nhiệm
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADOPTION_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-sm hover:border-amber-300 transition-colors"
            >
              <div>
                <span className="text-2xl font-bold font-serif text-amber-600 block mb-2">
                  {step.step}
                </span>
                <h4 className="text-base font-semibold text-stone-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Adoptable Cats Catalog */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-stone-900">
              Các bé mèo đang tìm kiếm mái ấm yêu thương
            </h3>
            <p className="text-xs text-stone-500 mt-1">Đã được kiểm tra sức khỏe và sàng lọc hành vi chuẩn thú y</p>
          </div>
          <button
            onClick={() => handleOpenApply()}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Đăng ký nhận nuôi chung</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADOPTABLE_CATS.map((cat) => (
            <article
              key={cat.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/cat_adoption_shelter.jpg';
                  }}
                />
                <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 bg-stone-900/80 text-white rounded-lg backdrop-blur-sm">
                  {cat.status}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                    <span>{cat.gender}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cat.age}</span>
                  </div>
                  <h4 className="text-lg font-bold font-serif text-stone-900">
                    {cat.name}
                  </h4>
                  <p className="text-xs text-stone-500 mb-3">{cat.breedEstimate}</p>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {cat.rescueStory}
                  </p>

                  {/* Health Verification Badges */}
                  <div className="space-y-1 text-[11px] text-stone-600 mb-4 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                    <div className="flex items-center gap-1.5 text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Đã tiêm phòng & triệt sản</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-600">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Âm tính FeLV/FIV & sổ giun đầy đủ</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCatForModal(cat)}
                    className="text-xs font-semibold text-stone-700 hover:text-stone-900 cursor-pointer"
                  >
                    Xem câu chuyện
                  </button>
                  <button
                    onClick={() => handleOpenApply(cat)}
                    className="px-3 py-1.5 text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Gửi đơn đón bé
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* THÀNH PHẦN MỞ RỘNG: Tích hợp Google Maps (Vị trí thực tế / liên hệ) */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm">
        <div className="max-w-2xl mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-1">
            <span>Tích hợp Bản đồ Trực quan (Google Maps)</span>
            <span aria-hidden="true">·</span>
            <span>Vị Trí Thực Tế</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-stone-900">
            Mạng lưới Trạm cứu hộ & Phòng khám liên kết
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Ghé thăm trực tiếp trạm cứu hộ để gặp gỡ các bé mèo sau khi hoàn tất hồ sơ xét duyệt.
          </p>
        </div>

        {/* Shelter Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {SHELTER_PARTNERS.map((shelter) => (
            <button
              key={shelter.id}
              onClick={() => setSelectedShelter(shelter)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedShelter.id === shelter.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Trạm {shelter.city}: {shelter.name.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Grid: Shelter details + Responsive Google Map Iframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
              <h4 className="text-base font-bold text-stone-900 font-serif">
                {selectedShelter.name}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {selectedShelter.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-200 text-xs text-stone-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{selectedShelter.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href={`tel:${selectedShelter.phone}`} className="hover:text-amber-700 font-medium">
                    {selectedShelter.phone} (Hotline tiếp nhận)
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{selectedShelter.hours}</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => handleOpenApply()}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors cursor-pointer text-center"
                >
                  Đặt lịch hẹn đến thăm trạm
                </button>
              </div>
            </div>
          </div>

          {/* Embedded Google Maps Container */}
          <div className="lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-stone-300 shadow-inner bg-stone-100">
            <iframe
              title={`Bản đồ vị trí ${selectedShelter.name}`}
              src={selectedShelter.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Story Detail Modal */}
      {selectedCatForModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-5">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <img
                src={selectedCatForModal.image}
                alt={selectedCatForModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span>{selectedCatForModal.gender}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedCatForModal.age}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedCatForModal.shelterLocation}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                {selectedCatForModal.name}
              </h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-100">
              {selectedCatForModal.rescueStory}
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedCatForModal(null)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  const cat = selectedCatForModal;
                  setSelectedCatForModal(null);
                  handleOpenApply(cat);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl"
              >
                Gửi đơn nhận nuôi bé này
              </button>
            </div>
          </div>
        </div>
      )}

      {/* THÀNH PHẦN MỞ RỘNG: Google Form / Biểu mẫu Đăng ký Nhận nuôi & Khảo sát tương tác */}
      {showApplyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Đã tiếp nhận hồ sơ nhận nuôi thành công!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Cảm ơn tấm lòng của bạn với {targetCat ? targetCat.name : 'các bé mèo cứu hộ'}. Tình nguyện viên của trạm cứu trợ sẽ liên hệ phỏng vấn qua số điện thoại <strong>{formData.phone}</strong> trong vòng 24 giờ.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setShowApplyModal(false);
                      setFormSubmitted(false);
                      setTargetCat(null);
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors"
                  >
                    Hoàn tất & Đóng biểu mẫu
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="border-b border-stone-200 pb-3">
                  <div className="text-[11px] font-semibold text-amber-700 uppercase tracking-widest">
                    Biểu Mẫu Khảo Sát & Đăng Ký Trực Tuyến
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                    Đơn đăng ký nhận nuôi mèo có trách nhiệm
                  </h3>
                  {targetCat && (
                    <p className="text-xs text-amber-800 font-medium mt-1">
                      Ứng tuyển nhận nuôi: <strong>{targetCat.name}</strong> ({targetCat.age})
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Họ và tên của bạn *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 text-stone-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Số điện thoại liên hệ *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0912 345 678"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 text-stone-900"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 text-stone-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Khu vực sinh sống
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800"
                      >
                        <option value="Hà Nội">Hà Nội & Miền Bắc</option>
                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh & Miền Nam</option>
                        <option value="Đà Nẵng">Đà Nẵng & Miền Trung</option>
                        <option value="Tỉnh thành khác">Tỉnh thành khác</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Loại hình nhà ở & ban công
                      </label>
                      <select
                        value={formData.housingType}
                        onChange={(e) => setFormData({ ...formData, housingType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800"
                      >
                        <option value="Căn hộ chung cư có lưới chắn an toàn">Chung cư (đã lắp lưới an toàn)</option>
                        <option value="Nhà mặt đất khép kín">Nhà mặt đất khép kín</option>
                        <option value="Nhà thuê/phòng trọ">Phòng trọ / căn hộ dịch vụ</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Kinh nghiệm nuôi thú cưng
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800"
                    >
                      <option value="Đang hoặc từng nuôi mèo">Đang hoặc từng nuôi mèo</option>
                      <option value="Lần đầu nuôi mèo nhưng đã tìm hiểu kỹ">Lần đầu nuôi mèo, đã trang bị kiến thức</option>
                      <option value="Đang nuôi các thú cưng khác (chó, chim...)">Đang nuôi thú cưng khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Lời nhắn gửi thêm đến trạm cứu hộ
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Mô tả thêm về thời gian rảnh rỗi hoặc mong muốn đặc biệt của bạn..."
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplyModal(false);
                      setTargetCat(null);
                    }}
                    className="px-4 py-2.5 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl cursor-pointer"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 active:scale-98 rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Gửi hồ sơ đăng ký</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
