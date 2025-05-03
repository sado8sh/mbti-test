
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/context/LanguageContext';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  const { language } = useLanguage();
  
  return (
    <div className="relative w-full mb-8">
      <div className="flex justify-between mb-1 text-xs font-medium text-mbti-dark-purple">
        <span>{language === 'ar' ? 'البداية' : 'Start'}</span>
        <span>{language === 'ar' ? 'النهاية' : 'Finish'}</span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2.5 bg-mbti-light-purple"
      />
      <div className="absolute -bottom-6 left-0 right-0 text-center">
        <span className="inline-block px-2 py-1 bg-white rounded-full text-xs font-medium text-mbti-dark-purple shadow-sm">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
