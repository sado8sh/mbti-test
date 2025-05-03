
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'ar';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    'app.title': 'Discover Your Personality Type',
    'app.subtitle': 'Take our scientifically designed MBTI personality test to gain insights into your natural preferences, strengths, and potential areas for growth.',
    'app.startButton': 'Start Your Journey',
    'app.feature1.title': 'Self-Discovery',
    'app.feature1.desc': 'Gain valuable insights into your thinking preferences, communication style, and decision-making process.',
    'app.feature2.title': 'Improve Relationships',
    'app.feature2.desc': 'Better understand how you relate to others and learn to appreciate different personality styles.',
    'app.feature3.title': 'Personal Growth',
    'app.feature3.desc': 'Identify your natural strengths and opportunities for personal and professional development.',
    'app.cta.title': 'Ready to Learn About Yourself?',
    'app.cta.desc': 'Our quick test takes just 5 minutes and provides immediate insights into your personality type.',
    'app.cta.button': 'Take the Test Now',
    'test.backToHome': 'Back to Home',
    'test.prevQuestion': 'Previous Question',
    'test.question': 'Question',
    'test.of': 'of',
    'answer.stronglyAgree': 'Strongly Agree',
    'answer.agree': 'Agree',
    'answer.neutral': 'Neutral',
    'answer.disagree': 'Disagree',
    'answer.stronglyDisagree': 'Strongly Disagree',
  },
  ar: {
    'app.title': 'اكتشف نوع شخصيتك',
    'app.subtitle': 'خذ اختبار الشخصية MBTI المصمم علمياً للحصول على رؤى حول تفضيلاتك الطبيعية ونقاط قوتك ومجالات النمو المحتملة.',
    'app.startButton': 'ابدأ رحلتك',
    'app.feature1.title': 'اكتشاف الذات',
    'app.feature1.desc': 'احصل على رؤى قيمة حول تفضيلات التفكير وأسلوب التواصل وعملية اتخاذ القرار.',
    'app.feature2.title': 'تحسين العلاقات',
    'app.feature2.desc': 'فهم أفضل لكيفية تفاعلك مع الآخرين وتعلم تقدير أنماط الشخصية المختلفة.',
    'app.feature3.title': 'النمو الشخصي',
    'app.feature3.desc': 'حدد نقاط قوتك الطبيعية وفرص التطوير الشخصي والمهني.',
    'app.cta.title': 'هل أنت مستعد للتعرف على نفسك؟',
    'app.cta.desc': 'اختبارنا السريع يستغرق 5 دقائق فقط ويوفر رؤى فورية حول نوع شخصيتك.',
    'app.cta.button': 'خذ الاختبار الآن',
    'test.backToHome': 'العودة إلى الصفحة الرئيسية',
    'test.prevQuestion': 'السؤال السابق',
    'test.question': 'السؤال',
    'test.of': 'من',
    'answer.stronglyAgree': 'أوافق بشدة',
    'answer.agree': 'أوافق',
    'answer.neutral': 'محايد',
    'answer.disagree': 'لا أوافق',
    'answer.stronglyDisagree': 'لا أوافق بشدة',
  },
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translate function
  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
