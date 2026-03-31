import Image from 'next/image';
import Link from 'next/link';

import { getSiteContent } from '@/lib/content';

export const metadata = {
  title: 'À propos',
};

export default function AboutPage() {
  const { address, imagesMap } = getSiteContent();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-site py-16 sm:py-20">
          <p className="font-heading tracking-theatre text-text/70">Théâtre</p>
          <h1 className="mt-3 font-heading text-h1 tracking-theatre-wide">À propos</h1>
          <p className="mt-5 max-w-2xl text-text/80">
            Un lieu de création et de partage au cœur de Lyon, pensé pour offrir une expérience
            fluide, de la billetterie à la salle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/saison" className="btn-primary">
              Découvrir la saison
            </Link>
            <Link href="/contact" className="btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-glow-sm">
            <Image
              src={imagesMap.about}
              alt="Le théâtre — ambiance"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl tracking-theatre-wide">
              Au service du public
            </h2>
            <p className="text-text/80">
              Programmation, billetterie, privatisation, ateliers : le Théâtre des Lumières propose
              des formats variés pour tous les publics.
            </p>
            <div className="card p-6">
              <p className="font-heading tracking-theatre-wide">Infos pratiques</p>
              <p className="mt-3 text-text/80">
                {address.address}
                <br />
                Horaires billetterie : {address.hours}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
