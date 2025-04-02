import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Switch = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];

  return (
    <div className="flex items-center justify-end space-x-4 py-4 max-w-7xl mx-auto w-full">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#4731D3] dark:bg-[#3A3A3A] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#4731D3] focus:ring-offset-2"
        >
          <span
            className={`${
              isDarkMode ? 'translate-x-1' : 'translate-x-6'
            } relative inline-block h-4 w-4 transform transition-all duration-500 ease-in-out`}
          >
            {isDarkMode ? (
              // Dark mode - Crescent moon
              <div className="relative h-full w-full">
                <div className="absolute h-4 w-4 rounded-full bg-[#FFE86E]" />
                <div className="absolute h-4 w-4 rounded-full bg-[#3A3A3A] translate-x-1" />
              </div>
            ) : (
              // Light mode - Full circle
              <div className="h-4 w-4 rounded-full bg-[#FFE86E]" />
            )}
          </span>
        </button>
        <button
          onClick={toggleTheme}
          className="w-[120px] text-[15px] font-medium text-gray-600 dark:text-gray-400 text-center whitespace-nowrap"
        >
          {isDarkMode ? t.nav.lightMode : t.nav.darkMode}
        </button>
      </div>

      {/* Separator */}
      <span className="text-gray-400">|</span>

      {/* Language Switch */}
      <button
        onClick={toggleLanguage}
        className="w-[120px] text-[15px] font-medium text-gray-600 dark:text-gray-400 text-center whitespace-nowrap"
      >
        {t.nav.language}
      </button>
    </div>
  );
};

export default Switch;