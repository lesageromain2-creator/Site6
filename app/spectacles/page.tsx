import Image from 'next/image';
import Link from 'next/link';

import { getSiteContent } from '@/lib/content';

export const metadata = {
  title: 'Spectacles',
};

export default function SpectaclesPage() {
  const { imagesMap } = getSiteContent();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-site py-16 sm:py-20">
          <p className="font-heading tracking-theatre text-text/70">Programmation</p>
          <h1 className="mt-3 font-heading text-h1 tracking-theatre-wide">Spectacles</h1>
          <p className="mt-5 max-w-2xl text-text/80">
            Retrouvez les spectacles et temps forts de la saison. Réservation via la billetterie.
          </p>
          <div className="mt-8">
            <Link href="/billetterie" className="btn-primary">
              Réserver
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="card overflow-hidden">
            <div className="relative h-72">
              <Image
                src={imagesMap.hero}
                alt="Spectacles — affiche"
                fill
                className="object-cover opacity-75"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-background/10" />
            </div>
            <div className="p-8 sm:p-10">
              <p className="font-heading tracking-theatre-wide text-xl">À venir</p>
              <p className="mt-3 text-text/75">
                Cette page affichera la liste des spectacles (titre, date, durée, tarifs) dès que le
                catalogue est branché au backend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
