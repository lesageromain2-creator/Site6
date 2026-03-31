import Link from 'next/link';

import LsdevFooterCredit from './LsdevFooterCredit';

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-site py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading tracking-theatre-wide text-xl">Théâtre des Lumières</p>
            <p className="mt-3 text-text/75">
              20 Rue Victor Hugo, 69002 Lyon
              <br />
              Mar–Sam 11h–19h
            </p>
          </div>
          <div>
            <p className="font-heading tracking-theatre text-sm uppercase text-text/80">Navigation</p>
            <ul className="mt-3 space-y-2 text-text/80">
              <li>
                <Link href="/spectacles" className="hover:text-accent transition-colors">
                  Spectacles
                </Link>
              </li>
              <li>
                <Link href="/saison" className="hover:text-accent transition-colors">
                  Saison
                </Link>
              </li>
              <li>
                <Link href="/billetterie" className="hover:text-accent transition-colors">
                  Billetterie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-heading tracking-theatre text-sm uppercase text-text/80">Contact</p>
            <ul className="mt-3 space-y-2 text-text/80">
              <li>
                <a href="tel:+33478374490" className="hover:text-accent transition-colors">
                  04 78 37 44 90
                </a>
              </li>
              <li>
                <a href="mailto:billetterie@theatre-des-lumieres.fr" className="hover:text-accent transition-colors">
                  billetterie@theatre-des-lumieres.fr
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/billetterie" className="btn-outline">
                Réserver vos places
              </Link>
            </div>
          </div>
        </div>
        <LsdevFooterCredit />
      </div>
    </footer>
  );
}

