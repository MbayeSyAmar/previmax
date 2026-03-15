'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Solution } from '@/components/solution'
import { Features } from '@/components/features'
import { Benefits } from '@/components/benefits'
import { Roadmap } from '@/components/roadmap'
import { Pricing } from '@/components/pricing'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Benefits />
      <Roadmap />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
