import Link from 'next/link';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/spectacles', label: 'Spectacles' },
  { href: '/billetterie', label: 'Billetterie' },
  { href: '/saison', label: 'Saison' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-heading tracking-theatre-wide text-base sm:text-lg text-text hover:text-accent transition-colors"
        >
          Théâtre des Lumières
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-heading tracking-theatre text-text/85 hover:text-text transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/billetterie" className="btn-primary text-sm py-2 px-4">
            Réserver
          </Link>
        </div>
      </div>
    </header>
  );
}

