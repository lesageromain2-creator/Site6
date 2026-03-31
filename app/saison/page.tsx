import Image from 'next/image';
import Link from 'next/link';

import { getSiteContent } from '@/lib/content';

export const metadata = {
  title: 'Saison',
};

export default function SaisonPage() {
  const { imagesMap } = getSiteContent();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-site py-16 sm:py-20">
          <p className="font-heading tracking-theatre text-text/70">Saison culturelle</p>
          <h1 className="mt-3 font-heading text-h1 tracking-theatre-wide">Saison</h1>
          <p className="mt-5 max-w-2xl text-text/80">
            Explorez la saison et retrouvez les temps forts. Réservation via la billetterie.
          </p>
          <div className="mt-8">
            <Link href="/billetterie" className="btn-primary">
              Réserver vos places
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <div className="card p-8">
            <p className="font-heading tracking-theatre-wide text-xl">Temps forts</p>
            <p className="mt-3 text-text/75">
              Cette page présentera les spectacles par période (mois, thématiques) dès que les
              événements sont disponibles côté backend.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/spectacles" className="btn-outline">
                Spectacles
              </Link>
              <Link href="/contact" className="btn-outline">
                Infos pratiques
              </Link>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="relative h-72">
              <Image
                src={imagesMap.services.service1}
                alt="Saison — scène"
                fill
                className="object-cover opacity-85"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-background/10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
