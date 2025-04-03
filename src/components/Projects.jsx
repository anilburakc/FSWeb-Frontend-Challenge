import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Projects = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="projects" className="py-20 border-t border-[#BAB2E7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl leading-none font-semibold text-[#1F2937] dark:text-[#AEBCCF] mb-12 text-left">
          {t.projects.title}
        </h2>
        <div className="w-[300px] h-[449px] flex flex-col gap-[18px]">
          <h3 className="text-[30px] text-[#4338CA] dark:text-[#CFCBFF]">
            {t.projects.project.title}
          </h3>
          <p className="text-[14px] text-[#6B7280] dark:text-white">
            {t.projects.project.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {t.projects.project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[14px] px-3 py-1 text-[#3730A3] dark:text-[#8F88FF] bg-white dark:bg-[#383838] border border-[#3730A3] dark:border-[#8F88FF] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center mt-auto">
            <a
              href={t.projects.project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-[#3730A3] dark:text-[#E1E1FF] underline"
            >
              GitHub
            </a>
            <a
              href={t.projects.project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-[#3730A3] dark:text-[#E1E1FF] underline"
            >
              View Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
