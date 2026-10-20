import React, { useState } from 'react';
import { Navbar, TabId } from './components/Navbar';
import { HomeOverview } from './components/HomeOverview';
import { BreedDatabase } from './components/BreedDatabase';
import { AdoptionResources } from './components/AdoptionResources';
import { GroomingBlog } from './components/GroomingBlog';
import { HealthBlog } from './components/HealthBlog';
import { CommunitySurveyModal } from './components/CommunitySurveyModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [surveyOpen, setSurveyOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-800">
      {/* Synchronized Header Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSurvey={() => setSurveyOpen(true)}
      />

      {/* Main Tab Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeOverview
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenSurvey={() => setSurveyOpen(true)}
          />
        )}

        {activeTab === 'breeds' && (
          <BreedDatabase />
        )}

        {activeTab === 'adoption' && (
          <AdoptionResources />
        )}

        {activeTab === 'grooming' && (
          <GroomingBlog />
        )}

        {activeTab === 'health' && (
          <HealthBlog />
        )}
      </main>

      {/* Interactive Google Form Style Community Survey Modal */}
      <CommunitySurveyModal
        isOpen={surveyOpen}
        onClose={() => setSurveyOpen(false)}
      />

      {/* Synchronized Footer with Citations & References */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSurvey={() => setSurveyOpen(true)}
      />
    </div>
  );
}
