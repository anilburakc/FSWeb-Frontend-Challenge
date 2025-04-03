import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Contact = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="contact" className="py-20 bg-[#F9F9F9] dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[42px] text-[#1F2937] dark:text-[#AEBCCF] mb-12 max-w-[540px] text-left">
          {t.contact.title}
        </h2>
        <div className="flex flex-wrap justify-between items-center gap-8">
          <a
            href={`mailto:${t.contact.email}`}
            className="text-[18px] text-[#AF0C48] dark:text-[#BAB2E7]"
          >
            {t.contact.email}
          </a>
          <div className="flex gap-8">
            <a
              href="https://github.com/anilburakc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] text-[#00AB6B] dark:text-[#17D18B]"
            >
              {t.contact.links.github}
            </a>
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