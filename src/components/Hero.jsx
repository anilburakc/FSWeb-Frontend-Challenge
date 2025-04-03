import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import profileImage from '../assets/profile.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    // Ana bölüm
    <section className="py-20">
      {/* İçerik container'ı */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* İki sütunlu grid yapısı */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[104px] items-center">
          {/* Sol sütun - Metin içeriği */}
          <div className="flex flex-col order-2 lg:order-1">
            {/* İsim ve dekoratif çizgi */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-[64px] bg-primary dark:bg-secondary"></div>
              <h2 className="text-[18px] text-primary dark:text-secondary">
                Anıl Burak Çavdır
              </h2>
            </div>
            {/* Başlık ve açıklama */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-tight lg:leading-[72px] font-bold text-light-text dark:text-dark-text mb-6">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg text-light-text dark:text-light-bg">
                {t.hero.description}
              </p>
            </div>
            {/* Sosyal medya ve iletişim butonları */}
            <div className="flex flex-wrap gap-[10px]">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary dark:bg-secondary text-light-bg dark:text-light-text rounded-[6px] border border-primary dark:border-secondary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors"
              >
                {t.nav.hire}
              </a>
              <a
                href="https://github.com/anilburakc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-light-bg dark:bg-dark-border text-primary dark:text-secondary border border-primary dark:border-secondary rounded-[6px] hover:bg-primary dark:hover:bg-secondary hover:text-light-bg dark:hover:text-dark-border transition-colors"
              >
                <FaGithub className="text-xl inline-block mr-2" /> Github
              </a>
              <a
                href="https://www.linkedin.com/in/anilburakcavdir/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-light-bg dark:bg-dark-border text-primary dark:text-secondary border border-primary dark:border-secondary rounded-[6px] hover:bg-primary dark:hover:bg-secondary hover:text-light-bg dark:hover:text-dark-border transition-colors"
              >
                <FaLinkedin className="text-xl inline-block mr-2" /> LinkedIn
              </a>
            </div>
          </div>
          {/* Sağ sütun - Profil resmi */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <img
              src={profileImage}
              alt="Profile"
              className="w-[476px] h-[450px] object-cover rounded-[18px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
