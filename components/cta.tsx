'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
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

    const duration = 1500
    const steps = 40
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

  return <span ref={ref}>{count}{suffix}</span>
}

export function CTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
                Prêt à optimiser votre maintenance ?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Discutons de vos enjeux et découvrez comment Previmax peut transformer 
                vos opérations de maintenance.
              </p>
              <a 
                href="mailto:contact@previmax.com" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors group"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  <AnimatedCounter target={2} suffix="sem" />
                </p>
                <p className="text-xs text-muted-foreground">Déploiement</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  <AnimatedCounter target={100} suffix="%" />
                </p>
                <p className="text-xs text-muted-foreground">ROI garanti</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">24/7</p>
                <p className="text-xs text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
