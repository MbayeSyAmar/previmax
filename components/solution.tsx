'use client'

import { useEffect, useRef, useState } from 'react'
import { Layers, Plug, Cpu, GitBranch, ArrowRight } from 'lucide-react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

export function Solution() {
  const { ref, isInView } = useInView(0.15)
  
  const pillars = [
    {
      icon: Plug,
      title: 'Connectivité universelle',
      desc: 'Intégration API avec toutes vos GMAO. Connecteurs natifs pour les solutions majeures du marché.'
    },
    {
      icon: Cpu,
      title: 'Automatisation complète',
      desc: 'Capteurs IoT natifs. Élimination de la saisie manuelle. Horodatage certifié.'
    },
    {
      icon: Layers,
      title: 'Intelligence prédictive',
      desc: 'Analyse temps réel. Prédiction probabiliste des défaillances. Recommandations contextuelles.'
    },
    {
      icon: GitBranch,
      title: 'Orchestration intelligente',
      desc: 'Planning auto-adaptatif. Priorisation dynamique. Optimisation des interventions.'
    },
  ]

  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-6">
            <p className="text-sm font-medium text-accent uppercase tracking-widest">Notre approche</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              La surcouche intelligente pour vos GMAO
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Previmax ne remplace pas votre GMAO. Elle augmente sa valeur en transformant 
              vos données en intelligence opérationnelle.
            </p>
            <a 
              href="#fonctionnalites" 
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
            >
              Explorer les fonctionnalités
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <div 
                  key={i} 
                  className="group p-6 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${i * 100}ms`
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Architecture diagram */}
        <div 
          className="rounded-2xl bg-card border border-border/50 p-8 lg:p-12"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
            transitionDelay: '400ms'
          }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">Architecture modulaire</h3>
            <p className="text-muted-foreground">Structure en 3 couches, évolutive et extensible</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background border border-border/50 text-center hover:border-border transition-colors">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <span className="text-foreground font-semibold text-sm">01</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Connectivité</h4>
              <p className="text-sm text-muted-foreground">APIs, webhooks, IoT, Data Lake centralisé</p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-accent/40 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                Core
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-semibold text-sm">02</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Intelligence</h4>
              <p className="text-sm text-muted-foreground">Moteur prédictif, algorithmes ML</p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border/50 text-center hover:border-border transition-colors">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <span className="text-foreground font-semibold text-sm">03</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Interface</h4>
              <p className="text-sm text-muted-foreground">Dashboards, alerting, planning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
