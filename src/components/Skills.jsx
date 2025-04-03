import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Skills = () => {
  const { language } = useLanguage();
  const t = content[language];

  const skills = [
    {
      title: t.skills.javascript.title,
      description: t.skills.javascript.description,
    },
    {
      title: t.skills.react.title,
      description: t.skills.react.description,
    },
    {
      title: t.skills.node.title,
      description: t.skills.node.description,
    },
  ];

  return (
    <section id="skills" className="py-20">
      {/* İçerik container - Maksimum genişlik ve otomatik kenar boşlukları */}
      <div className="max-w-7xl mx-auto">
        {/* Başlık - Skills */}
        <h2 className="text-5xl leading-none font-semibold text-light-text dark:text-dark-text mb-12 text-left">
          {t.skills.title}
        </h2>
        {/* Skills grid yapısı - 3 sütunlu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[120px]">
          {/* Her bir skill kartı */}
          {skills.map((skill) => (
            <div key={skill.title}>
              {/* Skill başlığı */}
              <h3 className="text-[30px] text-primary dark:text-secondary mb-4">
                {skill.title}
              </h3>
              {/* Skill açıklaması */}
              <p className="text-[12px] text-light-text dark:text-light-bg">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;