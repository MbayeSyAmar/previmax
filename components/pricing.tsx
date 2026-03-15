import { Button } from '@/components/ui/button'
import { Check, ArrowRight } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: 'Essentiel',
      price: '29 000',
      currency: 'FCFA',
      period: '/équipement/mois',
      desc: 'Pour démarrer la maintenance intelligente',
      features: [
        'Suivi IoT temps réel',
        'Alerting multi-canal',
        'Historique 12 mois',
        'Dashboard analytique',
        'Support standard'
      ]
    },
    {
      name: 'Entreprise',
      price: '1 750 000',
      currency: 'FCFA',
      period: '/site/mois',
      desc: 'Solution complète pour un site industriel',
      featured: true,
      features: [
        'Équipements illimités',
        'Maintenance prédictive IA',
        'Planning intelligent',
        'Reporting avancé',
        'API complète',
        'Support prioritaire 24/7',
        'Formation équipes'
      ]
    },
    {
      name: 'Partenaire',
      price: 'Sur mesure',
      currency: '',
      period: '',
      desc: 'Pour intégrateurs et grands comptes',
      features: [
        'Déploiement personnalisé',
        'White-label disponible',
        'SLA garanti',
        'Équipe dédiée',
        'Développements spécifiques'
      ]
    }
  ]

  return (
    <section id="tarifs" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Tarification</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Des offres adaptées à votre échelle
          </h2>
          <p className="text-lg text-muted-foreground">
            Choisissez le modèle qui correspond à vos besoins opérationnels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative rounded-2xl border transition-all duration-300 ${
                plan.featured 
                  ? 'bg-card border-accent shadow-xl shadow-accent/10 lg:scale-105' 
                  : 'bg-card/50 border-border/50 hover:border-border'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                    Recommandé
                  </span>
                </div>
              )}

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
                </div>

                <div className="pb-6 border-b border-border/50">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.currency && (
                      <span className="text-lg font-semibold text-muted-foreground">{plan.currency}</span>
                    )}
                  </div>
                  {plan.period && (
                    <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                  )}
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full h-12 font-semibold ${
                    plan.featured
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : 'bg-transparent border border-border text-foreground hover:bg-card'
                  }`}
                >
                  {plan.featured ? 'Commencer maintenant' : 'Contacter les ventes'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Tous les prix sont en Francs CFA (FCFA). Facturation mensuelle ou annuelle disponible.
        </p>
      </div>
    </section>
  )
}
