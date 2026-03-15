import { Check, ArrowRight } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      title: 'Pour le Responsable Maintenance',
      subtitle: 'Sérénité opérationnelle',
      points: [
        "Réduction significative des imprévus et crises",
        'Décisions basées sur des données fiables et temps réel',
        'Allègement de la pression opérationnelle quotidienne',
        'Visibilité complète sur le parc équipements'
      ]
    },
    {
      title: 'Pour la Direction Générale',
      subtitle: 'Performance financière',
      points: [
        'Réduction drastique des investissements CAPEX',
        "Baisse des coûts d'exploitation jusqu'à 40%",
        'Amélioration du ROI sur le parc équipements',
        'Planification budgétaire plus précise'
      ]
    }
  ]

  return (
    <section id="avantages" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Avantages</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Des bénéfices mesurables
          </h2>
          <p className="text-lg text-muted-foreground">
            Des résultats concrets pour chaque niveau de votre organisation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-8 rounded-xl bg-card border border-border/50">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-accent mt-1">{benefit.subtitle}</p>
              </div>
              <ul className="space-y-4">
                {benefit.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Positioning */}
        <div className="rounded-2xl bg-card border border-border/50 p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-3">Notre positionnement stratégique</h3>
            <p className="text-muted-foreground">
              Previmax ne concurrence pas les éditeurs GMAO. Elle augmente leur valeur en transformant les données en décisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="p-6 rounded-xl bg-background border border-border/50 text-center">
              <p className="font-semibold text-foreground mb-2">GMAO Traditionnelle</p>
              <p className="text-sm text-muted-foreground">Enregistre / Réagit / Préventif</p>
            </div>
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-accent" />
              </div>
            </div>
            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20 text-center">
              <p className="font-semibold text-accent mb-2">Previmax</p>
              <p className="text-sm text-muted-foreground">Analyse / Anticipe / Prédictif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
