import Link from 'next/link';

import LsdevFooterCredit from '@/components/LsdevFooterCredit';
import { getSiteContent } from '@/lib/content';

export default function Footer() {
  const { address } = getSiteContent();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-site py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <p className="font-heading tracking-theatre-wide text-lg text-text">
              Théâtre des Lumières
            </p>
            <p className="text-text/75">
              {address.address}
              <br />
              {address.hours}
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-heading tracking-theatre text-text">Navigation</p>
            <ul className="space-y-2 text-text/80">
              <li>
                <Link className="hover:text-text" href="/spectacles">
                  Spectacles
                </Link>
              </li>
              <li>
                <Link className="hover:text-text" href="/billetterie">
                  Billetterie
                </Link>
              </li>
              <li>
                <Link className="hover:text-text" href="/saison">
                  Saison
                </Link>
              </li>
              <li>
                <Link className="hover:text-text" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-heading tracking-theatre text-text">Contact</p>
            <ul className="space-y-2 text-text/80">
              <li>
                <a className="hover:text-text" href={`tel:${address.phone.replace(/\s/g, '')}`}>
                  {address.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-text" href={`mailto:${address.email}`}>
                  {address.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <LsdevFooterCredit />
      </div>
    </footer>
  );
}

