import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Profile = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="profile" className="py-20 border-t border-secondary">
      {/* İçerik container - Maksimum genişlik ve otomatik kenar boşlukları */}
      <div className="max-w-7xl mx-auto">
        {/* Profil başlığı */}
        <h2 className="text-5xl leading-none font-semibold text-light-text dark:text-dark-text mb-12 text-left">
          {t.profile.title}
        </h2>
        {/* Grid yapısı - Mobilde tek sütun, masaüstünde iki sütun */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sol sütun - Profil bilgileri */}
          <div>
            {/* Profil alt başlığı */}
            <h3 className="text-[30px] text-primary dark:text-secondary mb-8">
              {t.profile.profile}
            </h3>
            {/* Profil bilgileri listesi */}
            <div className="flex flex-col gap-6">
              {Object.entries(t.profile.info).map(([key, value]) => (
                <div key={key} className="grid grid-cols-[140px_1fr] items-start">
                  {/* Bilgi etiketi */}
                  <span className="text-[14px] font-bold text-light-text dark:text-light-bg">
                    {key}
                  </span>
                  {/* Bilgi değeri */}
                  <span className="text-[14px] text-light-text dark:text-light-bg">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Sağ sütun - Hakkında bilgisi */}
          <div>
            {/* Hakkında alt başlığı */}
            <h3 className="text-[30px] text-primary dark:text-secondary mb-8">
              {t.profile.about}
            </h3>
            {/* Hakkında açıklaması */}
            <p className="text-[14px] text-light-text dark:text-light-bg">
              {t.profile.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;