import Image from 'next/image';
import Link from 'next/link';

import { getSiteContent } from '@/lib/content';

export const metadata = {
  title: 'Services',
};

const services = [
  {
    title: 'Programmation',
    desc: 'Une sélection de spectacles et d’événements tout au long de la saison.',
    img: '/images/service-1.jpg',
    cta: { href: '/spectacles', label: 'Voir les spectacles' },
  },
  {
    title: 'Billetterie',
    desc: 'Réservez en ligne ou au guichet, avec accompagnement du public.',
    img: '/images/service-2.jpg',
    cta: { href: '/billetterie', label: 'Accéder à la billetterie' },
  },
  {
    title: 'Privatisation',
    desc: 'Un cadre élégant pour vos conférences, soirées et événements.',
    img: '/images/service-3.jpg',
    cta: { href: '/contact', label: 'Demander une info' },
  },
  {
    title: 'Ateliers',
    desc: 'Médiation, ateliers et rencontres pour tous les âges.',
    img: '/images/service-1.jpg',
    cta: { href: '/contact', label: 'Nous contacter' },
  },
] as const;

export default function ServicesPage() {
  const { imagesMap } = getSiteContent();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-site py-16 sm:py-20">
          <p className="font-heading tracking-theatre text-text/70">Offres</p>
          <h1 className="mt-3 font-heading text-h1 tracking-theatre-wide">Services</h1>
          <p className="mt-5 max-w-2xl text-text/80">
            De la programmation à la billetterie, découvrez les services proposés par le Théâtre
            des Lumières.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="card overflow-hidden">
              <div className="relative h-56">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover opacity-85"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-background/10" />
              </div>
              <div className="p-7">
                <p className="font-heading tracking-theatre-wide text-xl">{s.title}</p>
                <p className="mt-3 text-text/75">{s.desc}</p>
                <div className="mt-6">
                  <Link href={s.cta.href} className="btn-outline">
                    {s.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site">
          <div className="card overflow-hidden">
            <div className="relative h-64">
              <Image
                src={imagesMap.hero}
                alt="Scène — Théâtre des Lumières"
                fill
                className="object-cover opacity-70"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-background/10" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-heading tracking-theatre text-text/70">Billetterie</p>
                <p className="mt-2 font-heading text-2xl tracking-theatre-wide">Réserver vos places</p>
              </div>
              <Link href="/billetterie" className="btn-primary">
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
