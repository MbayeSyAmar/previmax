import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-xl z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Previmax" width={44} height={44} className="rounded-lg" />
          <span className="text-xl font-bold tracking-tight text-foreground">Previmax</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-10">
          <a href="#solution" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solution</a>
          <a href="#fonctionnalites" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Fonctionnalités</a>
          <a href="#avantages" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Avantages</a>
          <a href="#tarifs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tarifs</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden sm:flex items-center h-11 px-6 text-sm font-semibold text-foreground border border-border hover:border-accent hover:text-accent transition-all rounded-md"
          >
            Nous contacter
          </a>
          <button className="lg:hidden p-2 text-muted-foreground hover:text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
