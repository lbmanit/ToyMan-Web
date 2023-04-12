import React, { Suspense, lazy } from 'react';
import '../../../index.css';
import './index.css';
const SectionTitle = lazy(() => import('./titles/SectionTitle'));
const SectionItems = lazy(() => import('./items/SectionItems'));
const SectionFeedBack = lazy(() => import('./feedback/SectionFeedBack'));
const Animated = lazy(() => import('./animated/Animated'));
function Main() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <SectionItems />
        <SectionTitle />
        <Animated />
        <SectionFeedBack />
      </Suspense>
    </main>
  );
}

export default Main;
