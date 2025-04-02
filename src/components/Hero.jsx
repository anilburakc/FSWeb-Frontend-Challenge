import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[104px] items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-[64px] bg-[#4338CA] dark:bg-[#B7AAFF]"></div>
              <h2 className="text-[18px] text-[#4338CA] dark:text-[#B7AAFF]">
                Almila Su
              </h2>
            </div>
            <div className="mb-8">
              <h1 className="text-[64px] leading-[72px] font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-6">
                {t.hero.title}
              </h1>
              <p className="text-[18px] text-[#1F2937] dark:text-[#FFFFFF]">
                {t.hero.description}
              </p>
            </div>
            <div className="flex gap-[10px]">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#3730A3] dark:bg-[#E1E1FF] text-[#FFFFFF] dark:text-[#000000] rounded-[6px] border border-[#3730A3] dark:border-[#E1E1FF] hover:bg-[#3730A3]/90 dark:hover:bg-[#E1E1FF]/90 transition-colors"
              >
                {t.nav.hire}
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white dark:bg-[#383838] text-[#3730A3] dark:text-[#E1E1FF] border border-[#3730A3] dark:border-[#E1E1FF] rounded-[6px] hover:bg-[#3730A3] dark:hover:bg-[#E1E1FF] hover:text-white dark:hover:text-[#383838] transition-colors"
              >
                Github
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white dark:bg-[#383838] text-[#3730A3] dark:text-[#E1E1FF] border border-[#3730A3] dark:border-[#E1E1FF] rounded-[6px] hover:bg-[#3730A3] dark:hover:bg-[#E1E1FF] hover:text-white dark:hover:text-[#383838] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-[480px] h-[480px] object-cover rounded-[18px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
