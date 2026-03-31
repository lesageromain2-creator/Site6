import Link from 'next/link';

const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/spectacles', label: 'Spectacles' },
  { href: '/saison', label: 'Saison' },
  { href: '/billetterie', label: 'Billetterie' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur">
      <div className="container-site flex items-center justify-between py-4">
        <Link href="/" className="font-heading tracking-theatre-wide text-lg sm:text-xl">
          Théâtre des Lumières
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm text-text/85">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/billetterie" className="btn-primary hidden sm:inline-flex">
          Réserver
        </Link>
      </div>
    </header>
  );
}

