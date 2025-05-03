
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Question, PersonalityDimension } from '@/data/mbtiData';
import { useLanguage } from '@/context/LanguageContext';

interface QuestionCardProps {
  question: Question;
  onAnswer: (dimension: PersonalityDimension, strength: number) => void;
  selectedAnswer: number | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, selectedAnswer }) => {
  const { t, language } = useLanguage();
  const [optionA, optionB] = question.dimension;
  
  const answerOptions = [
    { value: 2, label: t('answer.stronglyAgree'), dimension: optionA },
    { value: 1, label: t('answer.agree'), dimension: optionA },
    { value: 0, label: t('answer.neutral'), dimension: null },
    { value: -1, label: t('answer.disagree'), dimension: optionB },
    { value: -2, label: t('answer.stronglyDisagree'), dimension: optionB },
  ];

  const handleOptionSelect = (index: number) => {
    const option = answerOptions[index];
    const dimension = option.value > 0 ? optionA : option.value < 0 ? optionB : option.value === 0 ? (Math.random() < 0.5 ? optionA : optionB) : optionA;
    const strength = Math.abs(option.value);
    
    onAnswer(dimension, strength);
  };
  
  // Make sure question text is complete
  const questionText = language === 'ar' 
    ? (question.textAr || question.text) 
    : question.text;
    
  return (
    <Card className={`w-full glass animate-fade-in card-hover shadow-lg border-2 border-mbti-light-purple/50 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <CardContent className="pt-6">
        <h3 className="text-xl font-display mb-8 text-center text-mbti-dark-purple">
          {questionText}
        </h3>
        
        <div className="grid gap-4">
          <RadioGroup className="space-y-4" value={selectedAnswer !== null ? selectedAnswer.toString() : undefined}>
            {answerOptions.map((option, index) => (
              <div 
                key={index}
                className={`relative flex items-center space-x-2 rounded-md border p-4 transition-all hover:bg-mbti-light-purple/20 ${selectedAnswer === index ? 'bg-mbti-light-purple/20 border-mbti-purple' : 'border-mbti-light-purple'} cursor-pointer ${language === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}
                onClick={() => handleOptionSelect(index)}
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} className="text-mbti-purple" />
                <label 
                  htmlFor={`option-${index}`} 
                  className="grow cursor-pointer font-medium text-sm"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
