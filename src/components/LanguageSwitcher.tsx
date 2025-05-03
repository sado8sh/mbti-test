
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="bg-transparent border-mbti-light-purple hover:bg-mbti-light-purple hover:text-mbti-purple transition-colors"
      title={language === 'en' ? 'عربي' : 'English'}
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
};

export default LanguageSwitcher;
