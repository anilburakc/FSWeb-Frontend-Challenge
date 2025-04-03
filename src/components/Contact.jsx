import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { FaHandPointRight } from 'react-icons/fa';
const Contact = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="contact" className="py-20 bg-light-surface dark:bg-dark-bg">
      {/* İçerik container - Maksimum genişlik ve otomatik kenar boşlukları */}
      <div className="max-w-7xl mx-auto">
        {/* İletişim başlığı */}
        <h2 className="text-[42px] text-light-text dark:text-dark-text mb-12 max-w-[540px] text-left">
          {t.contact.title}
        </h2>
        {/* İletişim bilgileri ve sosyal medya linkleri */}
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* E-posta linki */}
          <a
            href={`mailto:${t.contact.email}`}
            className="text-[18px] text-[#AF0C48] dark:text-secondary"
          >
            <FaHandPointRight className="text-xl inline-block mr-2 text-[#FFE86E] dark:text-[#FFE86E] dark:bg-dark-bg shadow-lg shadow-gray-950 bg-light-surface" /> {t.contact.email}
          </a>
          {/* Sosyal medya linkleri */}
          <div className="flex gap-8">
            {/* GitHub linki */}
            <a
              href="https://github.com/anilburakc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] text-[#00AB6B] dark:text-[#17D18B]"
            >
              {t.contact.links.github}
            </a>
            {/* LinkedIn linki */}
            <a
              href="https://www.linkedin.com/in/anilburakcavdir/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] text-[#0077B5] dark:text-[#0BA6F6]"
            >
              {t.contact.links.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 