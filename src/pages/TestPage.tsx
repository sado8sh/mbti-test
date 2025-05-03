
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { questions, personalityTypes, PersonalityDimension, PersonalityType } from '@/data/mbtiData';
import ResultCard from '@/components/ResultCard';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<{ dimension: PersonalityDimension, strength: number }>>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Array<number | null>>(Array(questions.length).fill(null));
  const [testComplete, setTestComplete] = useState(false);
  const [result, setResult] = useState<typeof personalityTypes[0] | null>(null);
  const [dimensionScores, setDimensionScores] = useState<Record<string, number>>({});
  const [showQuestions, setShowQuestions] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  // Animation effect when changing questions
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }
    
    setShowQuestions(false);
    const timer = setTimeout(() => {
      setShowQuestions(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [currentQuestion]);
  
  // Handle answer selection
  const handleAnswer = (dimension: PersonalityDimension, strength: number) => {
    const newAnswers = [...answers];
    
    // Update the answer if it exists, otherwise add it
    if (currentQuestion < newAnswers.length) {
      newAnswers[currentQuestion] = { dimension, strength };
    } else {
      newAnswers.push({ dimension, strength });
    }
    
    // Update selected answers for radio buttons
    const newSelectedAnswers = [...selectedAnswers];
    const selectedIndex = dimension === questions[currentQuestion].dimension[0]
      ? strength === 2 ? 0 : strength === 1 ? 1 : 2
      : strength === 2 ? 4 : strength === 1 ? 3 : 2;
    
    newSelectedAnswers[currentQuestion] = selectedIndex;
    
    setAnswers(newAnswers);
    setSelectedAnswers(newSelectedAnswers);
    
    // Move to next question or calculate result
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResult(newAnswers);
      }
    }, 400);
  };

  // Calculate the MBTI result based on answers
  const calculateResult = (newAnswers: Array<{ dimension: PersonalityDimension, strength: number }>) => {
    // Initialize weighted dimensions
    const weights: Record<PersonalityDimension, number> = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };
    
    // Calculate weighted scores
    newAnswers.forEach(({ dimension, strength }) => {
      weights[dimension] += strength;
    });
    
    // Determine personality type with weighted preference
    const calculatePercentage = (a: number, b: number) => {
      const total = a + b;
      return total > 0 ? Math.round((a / total) * 100) : 50;
    };
    
    // Calculate dimension scores for the result display
    const scores: Record<string, number> = {
      E: calculatePercentage(weights.E, weights.I),
      I: calculatePercentage(weights.I, weights.E),
      S: calculatePercentage(weights.S, weights.N),
      N: calculatePercentage(weights.N, weights.S),
      T: calculatePercentage(weights.T, weights.F),
      F: calculatePercentage(weights.F, weights.T),
      J: calculatePercentage(weights.J, weights.P),
      P: calculatePercentage(weights.P, weights.J),
    };
    
    setDimensionScores(scores);
    
    // Determine personality type
    const type = [
      weights.E > weights.I ? 'E' : 'I',
      weights.S > weights.N ? 'S' : 'N',
      weights.T > weights.F ? 'T' : 'F',
      weights.J > weights.P ? 'J' : 'P',
    ].join('') as PersonalityType;
    
    // Find matching personality type info
    const matchedType = personalityTypes.find(pt => pt.type === type);
    
    if (matchedType) {
      setResult(matchedType);
      setTestComplete(true);
    }
  };

  // Navigate to previous question
  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigate('/');
    }
  };

  // Reset the test
  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswers(Array(questions.length).fill(null));
    setTestComplete(false);
    setResult(null);
    setShowQuestions(true);
  };

  return (
    <Layout>
      <div className={`max-w-4xl mx-auto py-8 px-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
        
        {!testComplete ? (
          <>
            <div className="mb-8 flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={goToPrevious}
                className="flex items-center gap-2"
              >
                <ArrowLeft className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                {currentQuestion === 0 ? t('test.backToHome') : t('test.prevQuestion')}
              </Button>
              
              <div className="text-sm font-medium text-mbti-dark-purple">
                {t('test.question')} {currentQuestion + 1} {t('test.of')} {questions.length}
              </div>
            </div>
            
            <ProgressBar current={currentQuestion + 1} total={questions.length} />
            
            <div className={`transition-all duration-300 ${showQuestions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <QuestionCard 
                question={questions[currentQuestion]} 
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswers[currentQuestion]}
              />
            </div>
          </>
        ) : (
          result && <ResultCard result={result} scores={dimensionScores} onRetake={handleRetake} />
        )}
      </div>
    </Layout>
  );
};

export default TestPage;
