import React, { useState } from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';

export type TabId = 'home' | 'breeds' | 'adoption' | 'grooming' | 'health';

interface NavbarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  onOpenSurvey: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onOpenSurvey }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'breeds', label: 'Tra cứu giống mèo' },
    { id: 'adoption', label: 'Nhận nuôi & Cứu trợ' },
    { id: 'grooming', label: 'Cẩm nang chải chuốt' },
    { id: 'health', label: 'Sức khỏe & Dinh dưỡng' },
  ];

  const handleNavClick = (id: TabId) => {
    onTabChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark & Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg group shrink-0"
            aria-label="FelisCare Trang chủ"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-sm group-hover:bg-amber-700 transition-colors">
              {/* Bespoke Cat Face SVG Logo */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 5.5 4 4.5 7.5L2 6l1 5c-1 1.5-1 3.5 0 5 1.5 2.5 5 4 9 4s7.5-1.5 9-4c1-1.5 1-3.5 0-5l1-5-2.5 1.5C18.5 4 15.5 2 12 2zm-3.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-3.5 3c1 0 2 .5 2 1s-1 1.5-2 1.5-2-1-2-1.5 1-1 2-1z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-stone-900 font-serif">
                FelisCare
              </span>
              <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">
                Cẩm Nang & Tra Cứu Mèo
              </span>
            </div>
          </button>

          {/* Zone 2: 5 Clean Single-Line Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Điều hướng chính">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer text-sm font-medium ${
                    isActive
                      ? 'text-amber-700 font-semibold'
                      : 'text-stone-600 hover:text-stone-950'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSurvey}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-700 active:scale-98 transition-all shadow-sm shadow-amber-600/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Đăng ký Nhận nuôi & Khảo sát</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#faf8f5] px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-50 text-amber-800 font-semibold border-l-4 border-amber-600'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-stone-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSurvey();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-700 active:scale-98 transition-all shadow-sm"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Đăng ký Nhận nuôi & Khảo sát</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
