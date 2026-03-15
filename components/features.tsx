'use client'

import { useEffect, useRef, useState } from 'react'
import { Database, Bell, TrendingUp, BarChart3, Smartphone, Calculator } from 'lucide-react'

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

export function Features() {
  const { ref, isInView } = useInView(0.1)
  
  const features = [
    {
      icon: Database,
      title: 'Centralisation',
      items: ['Data Lake unifié', 'Normalisation multi-sources', 'Historique immuable', 'Traçabilité audit']
    },
    {
      icon: Bell,
      title: 'Alerting multi-canal',
      items: ['SMS & Push natifs', 'WhatsApp Business API', 'Teams / Slack', 'Temps réel']
    },
    {
      icon: TrendingUp,
      title: 'Prédiction',
      items: ['Anticipation pannes', 'Analyse conditionnelle', 'Estimation délais', 'Recommandations']
    },
    {
      icon: BarChart3,
      title: 'Reporting',
      items: ['KPIs automatiques', 'MTTR / MTBF', 'Taux disponibilité', 'Coûts équipement']
    },
    {
      icon: Smartphone,
      title: 'Mobile offline',
      items: ['Mode hors réseau', 'Sync automatique', 'Scan QR codes', 'Capture média']
    },
    {
      icon: Calculator,
      title: 'Optimisation',
      items: ['Stock intelligent', 'Budget prévisionnel', 'Audit auto', 'Simulation ROI']
    }
  ]

  return (
    <section id="fonctionnalites" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-widest">Fonctionnalités</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Plateforme complète
          </h2>
          <p className="text-lg text-muted-foreground">
            Tous les outils pour optimiser votre maintenance industrielle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((group, i) => {
            const Icon = group.icon
            return (
              <div 
                key={i} 
                className="p-8 rounded-xl bg-background border border-border/50 hover:border-accent/20 transition-all duration-500"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${i * 80}ms`
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
