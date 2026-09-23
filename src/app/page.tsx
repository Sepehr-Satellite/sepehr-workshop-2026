// src/app/page.tsx
'use client';

import {
  Box,
} from '@mantine/core';

import WorkshopScrollShowcase from '@/shared/components/WorkshopScrollShowcase';
import WorkshopTimeline from '@/shared/components/WorkshopTimeline';
import HeroSection from '@/shared/components/HeroSection';
import WorkshopCards from '@/shared/components/WorkshopCards';
import AboutUsSection from '@/shared/components/AboutUsSection';


export default function HomePage() {
  return (
    <Box component="main" bg="#fcfcfd">
      <HeroSection/>


      {/* درباره ما */}
      <Box id='about'>
        <AboutUsSection />
      </Box>
      {/* 2. CATALOG GRID (کارت‌ها همراه با عکس و مشخصات) */}
      <Box id="workshops"> 
      <WorkshopCards  />
      </Box>



      {/* 3. DYNAMIC SCROLL SHOWCASE (ابتکار اسکرول تعاملی) */}
      <Box id="scroll-showcase">
        <WorkshopScrollShowcase />
      </Box>

      <Box id="schedule">
        <WorkshopTimeline />
      </Box>
    </Box>
  );
}
