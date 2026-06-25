import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';

const languages = ['EN', 'HU', 'DE', 'JP', 'KR'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  
  const activeLang = lang?.toUpperCase() || 'EN';

  const navItems = [
    { id: 'my-story', label: t('nav.myStory') },
    { id: 'resume', label: t('nav.resume') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'cv', label: 'CV', isRoute: true },
    { id: 'contact', label: t('nav.contact') }
  ];

  const handleLanguageChange = (selectedLang: string) => {
    navigate(`/${selectedLang.toLowerCase()}`);
  };

  // Add a nice shadow and blur when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 shadow-lg shadow-black/5' 
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Logo / Name */}
        <a 
          href="/portfolio/" 
          className="relative group text-2xl font-black tracking-tighter"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80">
            Varga Péter
          </span>
          {/* Animated underline effect */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
        </a>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            item.isRoute ? (
              <Link
                key={item.id}
                to={`/${activeLang.toLowerCase()}/${item.id}`}
                target="_blank"
                rel="noreferrer"
                className="relative px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300 rounded-full hover:bg-gray-100/50 dark:hover:bg-white/5"
              >
                {item.label}
              </Link>
            ) : (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="relative px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300 rounded-full hover:bg-gray-100/50 dark:hover:bg-white/5"
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* Right: Language Selector */}
        <div className="flex items-center space-x-1 bg-gray-100/50 dark:bg-white/5 p-1 rounded-xl border border-gray-200/50 dark:border-white/10 backdrop-blur-sm">
          {languages.map((l) => (
            <button 
              key={l}
              onClick={() => handleLanguageChange(l)}
              className={`relative px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 ${
                activeLang === l 
                  ? 'text-white shadow-md' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/10'
              }`}
            >
              {/* Active state background with gradient */}
              {activeLang === l && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg -z-10" />
              )}
              {l}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}
