import { useLanguage } from '../context/LanguageContext';
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
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl leading-none font-semibold text-[#1F2937] dark:text-[#AEBCCF] mb-12 text-left">
          {t.skills.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[120px]">
          {skills.map((skill) => (
            <div key={skill.title}>
              <h3 className="text-[30px] text-[#4338CA] dark:text-[#B7AAFF] mb-4">
                {skill.title}
              </h3>
              <p className="text-[12px] text-[#6B7280] dark:text-white">
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