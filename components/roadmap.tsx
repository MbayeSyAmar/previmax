export function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Connecteurs & Centralisation',
      desc: 'APIs universelles, webhooks bidirectionnels, Data Lake centralisé',
      status: 'active'
    },
    {
      phase: 'Phase 2',
      title: 'Alerting & Dashboard',
      desc: "Notifications multi-canal, intelligence contextuelle, centre d'alertes unifié",
      status: 'planned'
    },
    {
      phase: 'Phase 3',
      title: 'Prédictif simple',
      desc: 'Analyse conditionnelle, prédiction probabiliste basique, scoring risque',
      status: 'planned'
    },
    {
      phase: 'Phase 4',
      title: 'IA prescriptive avancée',
      desc: 'Recommandations optimales, simulation budgétaire, planification dynamique',
      status: 'roadmap'
    },
    {
      phase: 'Phase 5',
      title: 'Optimisation multi-sites',
      desc: 'Synchronisation inter-sites, optimisation globale, benchmarking sectoriel',
      status: 'roadmap'
    }
  ]

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'En cours'
      case 'planned': return 'Planifié'
      default: return 'Feuille de route'
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Roadmap</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Notre feuille de route
          </h2>
          <p className="text-lg text-muted-foreground">
            Un déploiement progressif et structuré de la plateforme Previmax
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {phases.map((item, i) => (
            <div 
              key={i} 
              className={`relative flex gap-6 p-6 rounded-xl border transition-all duration-300 ${
                item.status === 'active'
                  ? 'bg-accent/5 border-accent/30'
                  : 'bg-background border-border/50 hover:border-border'
              }`}
            >
              {/* Number indicator */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm ${
                item.status === 'active' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-card border border-border text-muted-foreground'
              }`}>
                {i + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">{item.phase}</p>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    item.status === 'active'
                      ? 'bg-accent/10 text-accent'
                      : item.status === 'planned'
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'bg-muted/50 text-muted-foreground'
                  }`}>
                    {getStatusLabel(item.status)}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
