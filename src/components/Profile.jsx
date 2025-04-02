import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Profile = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="profile" className="py-20 border-t border-[#BAB2E7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl leading-none font-semibold text-[#1F2937] dark:text-[#AEBCCF] mb-12 text-left">
          {t.profile.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[30px] text-[#4338CA] dark:text-[#B7AAFF] mb-8">
              {t.profile.profile}
            </h3>
            <div className="flex flex-col gap-6">
              {Object.entries(t.profile.info).map(([key, value]) => (
                <div key={key} className="grid grid-cols-[140px_1fr] items-start">
                  <span className="text-[14px] font-bold text-[#000000] dark:text-[#FFFFFF]">
                    {key}
                  </span>
                  <span className="text-[14px] text-[#000000] dark:text-[#FFFFFF]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[30px] text-[#4338CA] dark:text-[#B7AAFF] mb-8">
              {t.profile.about}
            </h3>
            <p className="text-[14px] text-[#6B7280] dark:text-[#FFFFFF]">
              {t.profile.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;