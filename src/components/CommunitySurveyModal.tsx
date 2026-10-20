import React, { useState } from 'react';
import { X, CheckCircle2, Send, Star, HelpCircle } from 'lucide-react';

interface CommunitySurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommunitySurveyModal: React.FC<CommunitySurveyModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    catCount: '1 - 2 bé mèo',
    favTopic: 'Cẩm nang chải chuốt & Trị búi lông',
    feedback: '',
    wantsNewsletter: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('feliscare_survey_responses') || '[]');
    existing.push({
      ...formData,
      rating,
      date: new Date().toISOString(),
    });
    localStorage.setItem('feliscare_survey_responses', JSON.stringify(existing));
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xl">
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Cảm ơn bạn đã đóng góp ý kiến!
            </h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              Ý kiến khảo sát của bạn giúp đội ngũ FelisCare cải thiện chất lượng cẩm nang và kết nối thêm nhiều trạm cứu hộ mèo trên toàn quốc.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors cursor-pointer"
              >
                Đóng khảo sát
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-start justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-widest">
                  Thành phần mở rộng: Khảo sát & Góp ý
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                  Khảo sát cộng đồng yêu mèo FelisCare
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg cursor-pointer"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-stone-700">
              <div>
                <label className="block font-semibold mb-1">
                  Đánh giá độ hữu ích của website FelisCare:
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                      aria-label={`Đánh giá ${star} sao`}
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-stone-500 font-medium">{rating}/5 sao</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Họ và tên bạn *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Email liên lạc</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ban@example.com"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Số lượng mèo đang nuôi</label>
                  <select
                    value={formData.catCount}
                    onChange={(e) => setFormData({ ...formData, catCount: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl"
                  >
                    <option value="Chưa nuôi, đang chuẩn bị">Chưa nuôi, đang chuẩn bị</option>
                    <option value="1 - 2 bé mèo">1 - 2 bé mèo</option>
                    <option value="3 - 5 bé mèo">3 - 5 bé mèo</option>
                    <option value="Trên 5 bé mèo">Trên 5 bé mèo</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Chủ đề bạn quan tâm nhất</label>
                  <select
                    value={formData.favTopic}
                    onChange={(e) => setFormData({ ...formData, favTopic: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl"
                  >
                    <option value="Cẩm nang chải chuốt & Trị búi lông">Cẩm nang chải chuốt & Spa</option>
                    <option value="Sức khỏe & Phòng bệnh cho mèo">Sức khỏe & Dinh dưỡng</option>
                    <option value="Tra cứu giống mèo thuần chủng">Tra cứu giống mèo</option>
                    <option value="Nhận nuôi mèo cứu hộ">Nhận nuôi mèo cứu hộ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Góp ý để cải thiện trang web (nội dung muốn tìm đọc thêm):
                </label>
                <textarea
                  rows={3}
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  placeholder="Tôi muốn tìm hiểu thêm về cách huấn luyện mèo đi vệ sinh vào bồn cầu, thức ăn tự nấu (Barf)..."
                  className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.wantsNewsletter}
                  onChange={(e) => setFormData({ ...formData, wantsNewsletter: e.target.checked })}
                  className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                />
                <label htmlFor="newsletter" className="text-stone-600 text-[11px] cursor-pointer">
                  Nhận bản tin cập nhật cẩm nang chăm sóc mèo hàng tháng
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 active:scale-98 rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi phiếu khảo sát</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
