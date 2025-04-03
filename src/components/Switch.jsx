import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Switch = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];

  return (
    <div className="flex items-center justify-end space-x-2 sm:space-x-4 py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={toggleTheme}
          className="relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full bg-primary dark:bg-dark-border transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <span
            className={`${
              isDarkMode ? 'translate-x-1' : 'translate-x-5 sm:translate-x-6'
            } relative inline-block h-3 w-3 sm:h-4 sm:w-4 transform transition-all duration-500 ease-in-out`}
          >
            {isDarkMode ? (
              // Dark mode - Crescent moon
              <div className="relative h-full w-full">
                <div className="absolute h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#FFE86E]" />
                <div className="absolute h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-dark-border translate-x-1" />
              </div>
            ) : (
              // Light mode - Full circle
              <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#FFE86E]" />
            )}
          </span>
        </button>
        <button
          onClick={toggleTheme}
          className="w-[100px] sm:w-[120px] text-xs sm:text-[15px] font-medium text-light-text dark:text-dark-text text-center whitespace-nowrap"
        >
          {isDarkMode ? t.nav.lightMode : t.nav.darkMode}
        </button>
      </div>

      {/* Separator */}
      <span className="text-dark-text">|</span>

      {/* Language Switch */}
      <button
        onClick={toggleLanguage}
        className="w-[100px] sm:w-[120px] text-xs sm:text-[15px] font-medium text-light-text dark:text-dark-text text-center whitespace-nowrap"
      >
        {language === 'en' ? (
          <>
            <span className="text-primary">TÜRKÇE</span>
            <span className="hidden sm:inline">'YE GEÇ</span>
          </>
        ) : (
          <>
            <span className="hidden sm:inline">SWITCH TO </span>
            <span className="text-primary">ENGLISH</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Switch;