import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Header = () => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[language];

  const navItems = [
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
  ];

  return (
    <header className="bg-light-bg dark:bg-dark-bg">
      {/* İçerik container - Maksimum genişlik ve otomatik kenar boşlukları */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Header içerik wrapper - Flex yapısı ve yükseklik */}
        <div className="flex items-center justify-between h-16">
          {/* Logo bölümü - Sol taraf */}
          <div className="flex items-center">
            {/* Logo container - Yuvarlak arka plan ve kenarlık */}
            <div className="w-[64px] h-[62px] rounded-full bg-primary dark:bg-secondary border border-secondary dark:border-primary flex items-center justify-center">
              {/* Logo metni - 30 derece döndürülmüş */}
              <span className="text-white font-bold text-[24px] transform rotate-[30deg]">AB</span>
            </div>
          </div>

          {/* Masaüstü navigasyon*/}
          <nav className="hidden md:flex items-center space-x-20">
            {/* Navigasyon linkleri - Skills ve Projects */}
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[18px] text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            {/* İletişim butonu - Sağ taraf */}
            <a
              href="#contact"
              className="px-4 py-2 text-primary dark:text-primary border border-primary dark:border-primary rounded-[6px] dark:bg-light-bg hover:bg-primary dark:hover:bg-primary hover:text-light-bg dark:hover:text-light-bg transition-colors text-[18px]"
            >
              {t.nav.hire}
            </a>
          </nav>

          {/* Mobil menü butonu - Sağ taraf (sadece mobilde görünür) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
          >
            {/* Menü ikonu - Açık/kapalı durumuna göre değişir */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobil navigasyon menüsü - Alt kısım (sadece mobilde ve açıkken görünür) */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {/* Mobil navigasyon linkleri */}
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-[18px] text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {/* Mobil iletişim butonu */}
            <a
              href="#contact"
              className="block px-4 py-2 text-primary dark:text-primary border border-primary dark:border-primary rounded-[6px] dark:bg-light-bg hover:bg-primary dark:hover:bg-primary hover:text-light-bg dark:hover:text-light-bg transition-colors text-center text-[18px]"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.hire}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 