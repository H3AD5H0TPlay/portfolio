import { useTranslation, Trans } from 'react-i18next';

export default function MyStory() {
  const { t } = useTranslation();

  return (
    <section id="my-story" className="py-24 relative bg-gray-50 dark:bg-[#111]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-16">
          <div className="h-px bg-gray-300 dark:bg-white/10 flex-1"></div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            {t('story.title')}
          </h2>
          <div className="h-px bg-gray-300 dark:bg-white/10 flex-1"></div>
        </div>

        {/* Content */}
        <div className="space-y-10 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          
          <p>{t('story.p1')}</p>

          <p>
            <Trans 
              i18nKey="story.p2" 
              components={{ 1: <span className="text-gray-900 dark:text-white font-bold" /> }} 
            />
          </p>

          {/* Blockquote Style */}
          <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-12 bg-indigo-50/50 dark:bg-white/5 rounded-r-2xl italic font-serif text-2xl text-gray-900 dark:text-white shadow-sm">
            {t('story.q1')}
          </blockquote>

          <p>
            <Trans 
              i18nKey="story.p3" 
              components={{ 1: <span className="text-indigo-600 dark:text-indigo-400 font-bold" /> }} 
            />
          </p>

          <p>{t('story.p4')}</p>

          <blockquote className="border-l-4 border-purple-500 pl-6 py-2 my-12 bg-purple-50/50 dark:bg-white/5 rounded-r-2xl italic font-serif text-2xl text-gray-900 dark:text-white shadow-sm">
            {t('story.q2')}
          </blockquote>

          <p>{t('story.p5')}</p>

        </div>
      </div>
    </section>
  );
}
