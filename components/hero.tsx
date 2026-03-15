'use client'

import { useEffect, useState, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,169,98,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,98,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      />
      
      {/* Gradient orbs */}
      <div 
        className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[150px] -z-10"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm text-muted-foreground">Plateforme opérationnelle</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] tracking-tight">
              La maintenance industrielle,{' '}
              <span className="text-accent">réinventée</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Previmax connecte vos systèmes GMAO existants pour centraliser les données, 
              anticiper les pannes et réduire drastiquement vos coûts opérationnels.
            </p>

            {/* Single CTA - scroll indicator */}
            <div className="pt-8">
              <a 
                href="#solution" 
                className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </span>
                Découvrir la solution
              </a>
            </div>
          </div>

          {/* Right - Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: 40, suffix: '%', prefix: '-', label: 'Coûts de maintenance', desc: 'Réduction moyenne constatée' },
              { value: 80, suffix: '%', prefix: '+', label: 'Disponibilité', desc: 'Temps de fonctionnement' },
              { value: 5, suffix: 'x', prefix: '', label: 'Diagnostic', desc: 'Plus rapide' },
              { value: 98, suffix: '%', prefix: '', label: 'Précision', desc: 'Prédiction des pannes' },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/30 transition-colors group"
              >
                <p className="text-3xl sm:text-4xl font-bold text-accent">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries strip */}
        <div className="mt-24 pt-12 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <p className="text-sm text-muted-foreground">
              Solution déployée dans les secteurs exigeants
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {['Logistique', 'Transport', 'Industrie', 'Énergie', 'Mines'].map((industry) => (
                <span 
                  key={industry} 
                  className="text-sm font-medium text-muted-foreground/70 tracking-wide uppercase hover:text-foreground transition-colors cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
