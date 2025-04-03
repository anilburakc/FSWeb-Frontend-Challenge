import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import projectImage from '../assets/pizza-project/pizza-nd.png';
const Projects = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="projects" className="py-20 border-t border-secondary">
      {/* İçerik container - Maksimum genişlik ve otomatik kenar boşlukları */}
      <div className="max-w-7xl mx-auto">
        {/* Proje başlığı */}
        <h2 className="text-5xl leading-none font-semibold text-light-text dark:text-dark-text mb-12 text-left">
          {t.projects.title}
        </h2>
        {/* Proje kartı container */}
        <div className="w-[300px] h-[449px] flex flex-col gap-[18px]">
          {/* Proje görseli */}
          <div className="flex justify-end">
            <img
              src={projectImage}
              alt="Profile"
              className="w-[300px] h-[180px] object-cover rounded-[18px] shadow-lg"
            />
          </div>
          {/* Proje başlığı */}
          <h3 className="text-[30px] text-primary dark:text-secondary">
            {t.projects.project.title}
          </h3>
          {/* Proje açıklaması */}
          <p className="text-[14px] text-light-text dark:text-light-bg">
            {t.projects.project.description}
          </p>
          {/* Kullanılan teknolojiler */}
          <div className="flex flex-wrap gap-4">
            {t.projects.project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[14px] px-3 py-1 text-primary dark:text-secondary bg-light-bg dark:bg-dark-border border border-primary dark:border-secondary rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Proje linkleri */}
          <div className="flex justify-between items-center mt-auto">
            <a
              href={t.projects.project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-primary dark:text-secondary underline"
            >
              GitHub
            </a>
            <a
              href={t.projects.project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-primary dark:text-secondary underline"
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
