import Image from 'next/image'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const links = [
    {
      title: 'Produit',
      items: ['Fonctionnalités', 'Intégrations', 'Tarifs', 'Roadmap']
    },
    {
      title: 'Ressources',
      items: ['Documentation', 'API', 'Études de cas', 'Blog']
    },
    {
      title: 'Entreprise',
      items: ['À propos', 'Carrières', 'Presse', 'Contact']
    },
    {
      title: 'Légal',
      items: ['Confidentialité', 'CGU', 'Sécurité', 'RGPD']
    }
  ]

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & description */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt="Previmax" width={36} height={36} className="rounded-lg" />
              <span className="font-bold text-lg text-foreground">Previmax</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              La plateforme intelligente pour une maintenance prédictive et prescriptive de nouvelle génération.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link sections */}
          {links.map((section, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Previmax. Tous droits réservés. Dakar, Sénégal.
            </p>
            <p className="text-sm text-muted-foreground">
              Conçu pour transformer la maintenance industrielle en Afrique.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
