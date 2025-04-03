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
    <header className="bg-white dark:bg-[#252128]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[64px] h-[62px] rounded-full bg-[#7B61FF] dark:bg-[#8F88FF] border border-[#EEEBFF] dark:border-[#4731D3] flex items-center justify-center">
              <span className="text-white font-bold text-[24px] transform rotate-[30deg]">AB</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-20">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[18px] text-[#6B7280] dark:text-[#6B7280] hover:text-[#3730A3] dark:hover:text-[#3730A3] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 text-[#3730A3] dark:text-[#3730A3] border border-[#3730A3] dark:border-[#3730A3] rounded-[6px] dark:bg-white hover:bg-[#3730A3] dark:hover:bg-[#3730A3] hover:text-white dark:hover:text-white transition-colors text-[18px]"
            >
              {t.nav.hire}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-[18px] text-[#6B7280] dark:text-[#6B7280] hover:text-[#3730A3] dark:hover:text-[#3730A3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 text-[#3730A3] dark:text-[#3730A3] border border-[#3730A3] dark:border-[#3730A3] rounded-[6px] dark:bg-white hover:bg-[#3730A3] dark:hover:bg-[#3730A3] hover:text-white dark:hover:text-white transition-colors text-center text-[18px]"
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