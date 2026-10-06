/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EmergencyBanner } from './components/EmergencyBanner.tsx';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { SectionNavigator } from './components/SectionNavigator.tsx';
import { VirtualCounsellingSection } from './components/Sections/VirtualCounsellingSection.tsx';
import { VideoTutorialSection } from './components/Sections/VideoTutorialSection.tsx';
import { InhalerPamphletSection } from './components/Sections/InhalerPamphletSection.tsx';
import { ChecklistKeyakinanSection } from './components/Sections/ChecklistKeyakinanSection.tsx';
import { EmergencyRedFlagsSection } from './components/Sections/EmergencyRedFlagsSection.tsx';
import { AboutHospitalSection } from './components/Sections/AboutHospitalSection.tsx';
import { BottomMobileNav } from './components/BottomMobileNav.tsx';
import { Footer } from './components/Footer.tsx';
import { GitHubDeployModal } from './components/GitHubDeployModal.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('sec-checklist');
  const [showDeployModal, setShowDeployModal] = useState<boolean>(false);

  const switchSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const topOffset = 130;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - topOffset,
          behavior: 'smooth',
        });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      {/* 1. TOP EMERGENCY ADVISORY BAR */}
      <EmergencyBanner onGoToEmergency={() => switchSection('sec-tanda-bahaya')} />

      {/* 2. NAVIGATION HEADER */}
      <Header
        onOpenInfo={() => switchSection('sec-maklumat')}
        onOpenDeployModal={() => setShowDeployModal(true)}
        onGoHome={() => switchSection('sec-tempah')}
      />

      {/* 3. HERO SECTION */}
      <HeroSection onNavigateSection={(secId) => switchSection(secId)} />

      {/* 4. STICKY INTERACTIVE SECTION NAVIGATOR */}
      <SectionNavigator
        activeSection={activeSection}
        onSelectSection={(secId) => switchSection(secId)}
      />

      {/* 5. MAIN CONTENT VIEWPORT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        {/* SECTION 1: TEMPAH KAUNSELING */}
        <section
          id="sec-tempah"
          className={`${activeSection === 'sec-tempah' ? 'block' : 'hidden'} transition-all`}
        >
          <VirtualCounsellingSection />
        </section>

        {/* SECTION 2: VIDEO TUTORIAL */}
        <section
          id="sec-video"
          className={`${activeSection === 'sec-video' ? 'block' : 'hidden'} transition-all`}
        >
          <VideoTutorialSection />
        </section>

        {/* SECTION 3: RISALAH PENGGUNAAN INHALER */}
        <section
          id="sec-panduan"
          className={`${activeSection === 'sec-panduan' ? 'block' : 'hidden'} transition-all`}
        >
          <InhalerPamphletSection />
        </section>

        {/* SECTION 4: UJI KEYAKINAN (8 LANGKAH) */}
        <section
          id="sec-checklist"
          className={`${activeSection === 'sec-checklist' ? 'block' : 'hidden'} transition-all`}
        >
          <ChecklistKeyakinanSection onGoToBooking={() => switchSection('sec-tempah')} />
        </section>

        {/* SECTION 5: TANDA-TANDA BAHAYA */}
        <section
          id="sec-tanda-bahaya"
          className={`${activeSection === 'sec-tanda-bahaya' ? 'block' : 'hidden'} transition-all`}
        >
          <EmergencyRedFlagsSection />
        </section>

        {/* SECTION 6: MAKLUMAT HTA */}
        <section
          id="sec-maklumat"
          className={`${activeSection === 'sec-maklumat' ? 'block' : 'hidden'} transition-all`}
        >
          <AboutHospitalSection />
        </section>
      </main>

      {/* 6. FOOTER */}
      <Footer
        onSelectSection={(secId) => switchSection(secId)}
        onOpenDeployModal={() => setShowDeployModal(true)}
      />

      {/* 7. BOTTOM MOBILE NAVIGATION BAR */}
      <BottomMobileNav
        activeSection={activeSection}
        onSelectSection={(secId) => switchSection(secId)}
      />

      {/* 8. GITHUB DEPLOYMENT GUIDANCE MODAL */}
      <GitHubDeployModal
        isOpen={showDeployModal}
        onClose={() => setShowDeployModal(false)}
      />
    </div>
  );
}
