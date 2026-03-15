'use client'

import { useEffect, useRef, useState } from 'react'
import { FileText, AlertTriangle, Table, Bell, Calendar, Wrench } from 'lucide-react'

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

export function Problem() {
  const { ref, isInView } = useInView(0.2)
  
  const issues = [
    { 
      icon: FileText, 
      title: 'Saisie manuelle chronophage', 
      desc: 'Des heures perdues en déclaration, recopie et traitement de données dispersées' 
    },
    { 
      icon: AlertTriangle, 
      title: 'Données peu fiables', 
      desc: 'Retards de saisie, oublis fréquents et approximations qui faussent les analyses' 
    },
    { 
      icon: Table, 
      title: 'Dépendance aux tableurs', 
      desc: 'Analyses statiques, non centralisées et impossibles à exploiter en temps réel' 
    },
    { 
      icon: Bell, 
      title: 'Alerting limité', 
      desc: 'Notifications par email uniquement, sans intelligence ni priorisation contextuelle' 
    },
    { 
      icon: Calendar, 
      title: 'Planning statique', 
      desc: 'Planifications rigides qui ignorent les conditions réelles du terrain' 
    },
    { 
      icon: Wrench, 
      title: 'Maintenance réactive', 
      desc: 'Interventions après panne au lieu de prévention et anticipation' 
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Le constat</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Les limites des GMAO traditionnelles
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Les solutions existantes enregistrent vos données mais ne les transforment pas en intelligence actionnable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, i) => {
            const Icon = issue.icon
            return (
              <div 
                key={i} 
                className="group p-8 rounded-xl bg-background border border-border/50 hover:border-border transition-all duration-500"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${i * 100}ms`
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 group-hover:bg-destructive/10 transition-colors">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-destructive/80 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{issue.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{issue.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
