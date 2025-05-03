
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { BookOpen, ArrowRight, Users, Lightbulb, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Index = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  return (
    <Layout>
      <div className={`space-y-12 py-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center justify-center p-3 bg-mbti-light-purple rounded-full animate-pulse-soft">
            <BookOpen className="h-10 w-10 text-mbti-purple" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold max-w-3xl leading-tight">
            <span className="bg-gradient-to-r from-mbti-purple to-mbti-blue bg-clip-text text-transparent">{t('app.title')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            {t('app.subtitle')}
          </p>
          
          <Button 
            size="lg" 
            onClick={() => navigate('/test')}
            className="mt-4 text-lg px-8 bg-gradient-to-r from-mbti-purple to-mbti-blue hover:opacity-90 transition-opacity"
          >
            {t('app.startButton')}
            <ArrowRight className={`ml-2 h-5 w-5 ${language === 'ar' ? 'rotate-180 mr-2 ml-0' : ''}`} />
          </Button>
        </section>
        
        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="glass card-hover">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
              <div className="p-2 bg-mbti-light-purple rounded-full">
                <Lightbulb className="h-6 w-6 text-mbti-purple" />
              </div>
              <h3 className="font-display font-semibold text-xl">{t('app.feature1.title')}</h3>
              <p className="text-muted-foreground">
                {t('app.feature1.desc')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass card-hover">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
              <div className="p-2 bg-mbti-light-purple rounded-full">
                <Users className="h-6 w-6 text-mbti-purple" />
              </div>
              <h3 className="font-display font-semibold text-xl">{t('app.feature2.title')}</h3>
              <p className="text-muted-foreground">
                {t('app.feature2.desc')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass card-hover">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
              <div className="p-2 bg-mbti-light-purple rounded-full">
                <Star className="h-6 w-6 text-mbti-purple" />
              </div>
              <h3 className="font-display font-semibold text-xl">{t('app.feature3.title')}</h3>
              <p className="text-muted-foreground">
                {t('app.feature3.desc')}
              </p>
            </CardContent>
          </Card>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-mbti-purple to-mbti-blue p-8 rounded-2xl text-white text-center space-y-6">
          <h2 className="text-3xl font-display font-bold">{t('app.cta.title')}</h2>
          <p className="text-lg opacity-90 max-w-lg mx-auto">
            {t('app.cta.desc')}
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/test')}
            className="mt-2"
          >
            {t('app.cta.button')}
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
