import Image from 'next/image';
import Link from 'next/link';

import { getSiteContent } from '@/lib/content';

export const metadata = {
  title: 'Billetterie',
};

export default function BilletteriePage() {
  const { address, imagesMap } = getSiteContent();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-site py-16 sm:py-20">
          <p className="font-heading tracking-theatre text-text/70">Réservation</p>
          <h1 className="mt-3 font-heading text-h1 tracking-theatre-wide">Billetterie</h1>
          <p className="mt-5 max-w-2xl text-text/80">
            Réservez en ligne ou contactez la billetterie. Horaires guichet : {address.hours}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/spectacles" className="btn-outline">
              Voir les spectacles
            </Link>
            <Link href="/contact" className="btn-primary">
              Contacter la billetterie
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <div className="card p-8">
            <p className="font-heading tracking-theatre-wide text-xl">Réservation en ligne</p>
            <p className="mt-3 text-text/75">
              Cette page sera reliée à la liste des spectacles et à un parcours de réservation
              (places, tarif, paiement) lorsque le backend billetterie sera activé.
            </p>
            <div className="mt-6">
              <Link href="/spectacles" className="btn-outline">
                Voir la programmation
              </Link>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="relative h-72">
              <Image
                src={imagesMap.services.service2}
                alt="Billetterie — accueil"
                fill
                className="object-cover opacity-85"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-background/10" />
            </div>
            <div className="p-8 text-text/80">
              <p className="font-heading tracking-theatre-wide">Guichet</p>
              <p className="mt-2">{address.hours}</p>
              <p className="mt-4 text-text/75">{address.address}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
