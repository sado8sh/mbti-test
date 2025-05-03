
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { personalityTypes } from '@/data/mbtiData';
import { useLanguage } from '@/context/LanguageContext';

interface ResultCardProps {
  result: typeof personalityTypes[0];
  scores: Record<string, number>;
  onRetake: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, scores, onRetake }) => {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';
  
  const dimensionPairs = [
    { first: 'E', second: 'I', label: language === 'ar' ? 'منفتح - متحفظ' : 'Extroverted - Introverted' },
    { first: 'S', second: 'N', label: language === 'ar' ? 'واقعي - حدسي' : 'Sensing - Intuitive' },
    { first: 'T', second: 'F', label: language === 'ar' ? 'مفكر - شعوري' : 'Thinking - Feeling' },
    { first: 'J', second: 'P', label: language === 'ar' ? 'منظم - مستكشف' : 'Judging - Perceiving' },
  ];

  return (
    <div className={`animate-fade-in space-y-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Card className="glass border-2 border-mbti-light-purple/50 shadow-lg">
        <CardHeader className="text-center">
          <div className="bg-gradient-to-r from-mbti-purple to-mbti-blue bg-clip-text text-transparent mb-2">
            <h2 className="text-3xl font-bold">{result.type}</h2>
            <h3 className="text-xl font-semibold">
              {language === 'ar' ? result.nameAr : result.name}
            </h3>
          </div>
          <CardTitle className="text-mbti-dark-purple text-lg">
            {language === 'ar' ? result.descriptionAr : result.description}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Personality Scores */}
          <div className="space-y-4">
            <h4 className="font-semibold text-mbti-dark-purple">
              {language === 'ar' ? 'نتائج الشخصية' : 'Personality Scores'}
            </h4>
            {dimensionPairs.map((pair, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-xs text-mbti-dark-purple">
                  <span>{pair.first} {scores[pair.first]}%</span>
                  <span>{pair.label}</span>
                  <span>{pair.second} {scores[pair.second]}%</span>
                </div>
                <Progress 
                  value={scores[pair.first]} 
                  className="h-2 bg-mbti-light-purple/30"
                />
              </div>
            ))}
          </div>

          {/* Strengths and Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <h4 className="font-semibold text-mbti-dark-purple mb-2">
                {language === 'ar' ? 'نقاط القوة' : 'Strengths'}
              </h4>
              <ul className="list-inside space-y-1">
                {(language === 'ar' && result.strengthsAr ? result.strengthsAr : result.strengths).map((strength, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-mbti-dark-purple mb-2">
                {language === 'ar' ? 'نقاط الضعف' : 'Weaknesses'}
              </h4>
              <ul className="list-inside space-y-1">
                {(language === 'ar' && result.weaknessesAr ? result.weaknessesAr : result.weaknesses).map((weakness, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Careers */}
          {(result.careers || result.careersAr) && (
            <div>
              <h4 className="font-semibold text-mbti-dark-purple mb-2">
                {language === 'ar' ? 'المهن المناسبة' : 'Suitable Careers'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(language === 'ar' && result.careersAr ? result.careersAr : result.careers || []).map((career, i) => (
                  <span key={i} className="bg-mbti-light-purple/20 text-mbti-dark-purple px-3 py-1 rounded-full text-sm">
                    {career}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Famous People */}
          {(result.famousPeople || result.famousPeopleAr) && (
            <div>
              <h4 className="font-semibold text-mbti-dark-purple mb-2">
                {language === 'ar' ? 'شخصيات مشهورة' : 'Famous People'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(language === 'ar' && result.famousPeopleAr ? result.famousPeopleAr : result.famousPeople || []).map((person, i) => (
                  <span key={i} className="bg-mbti-light-purple/20 text-mbti-dark-purple px-3 py-1 rounded-full text-sm">
                    {person}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Retake Button */}
          <div className="flex justify-center pt-6">
            <Button 
              onClick={onRetake}
              className="bg-gradient-to-r from-mbti-purple to-mbti-blue hover:opacity-90"
            >
              {language === 'ar' ? 'إعادة الاختبار' : 'Retake Test'} 
              <ArrowRight className={`ml-2 h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultCard;
