
import React from "react";
import { useToast } from "@/hooks/use-toast";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-mbti-light-purple">
      <header className="w-full p-4 flex justify-center">
        <div className="container max-w-7xl flex justify-between items-center">
          <div className="text-2xl font-display font-bold bg-gradient-to-r from-mbti-purple to-mbti-blue bg-clip-text text-transparent">
            MBTI Test
          </div>
        </div>
      </header>
      <main className="flex-1 w-full flex flex-col items-center justify-center p-4">
        <div className="container max-w-5xl">
          {children}
        </div>
      </main>
      <footer className="w-full p-4 text-center text-sm text-muted-foreground">
        <div className="container max-w-7xl">
          <p>© 2025 MBTI Test | Discover Your Personality Type</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
