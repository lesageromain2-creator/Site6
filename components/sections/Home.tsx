import Image from 'next/image';
import Link from 'next/link';

import type { BrandsContent, ImagesMapContent, ReviewsContent } from '@/lib/content';

type Props = {
  brands: BrandsContent;
  images: ImagesMapContent;
  reviews: ReviewsContent;
};

export default function HomeSections({ brands, images, reviews }: Props) {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src={images.hero}
          alt="Affiche — Théâtre des Lumières"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/10" />
        <div className="relative container-site pt-20 sm:pt-28 pb-14">
          <div className="max-w-2xl">
            <p className="font-heading tracking-theatre-wide text-accent/95">
              Théâtre & Spectacle • Lyon Presqu&apos;île
            </p>
            <h1 className="mt-4 font-heading text-hero tracking-theatre-wide">
              Théâtre des Lumières
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-text/80">
              Programmation, billetterie et privatisation au cœur de la Presqu&apos;île culturelle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/billetterie" className="btn-primary">
                Réserver vos places
              </Link>
              <Link href="/spectacles" className="btn-outline">
                Voir les spectacles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-heading text-2xl sm:text-3xl tracking-theatre-wide">
              {brands.title}
            </h2>
            <span className="hidden sm:inline text-text/60">Partenaires</span>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {brands.items.map((b) => (
              <a
                key={b.name}
                href={b.href}
                className="card px-4 py-3 text-center text-text/75 hover:text-text transition-colors"
              >
                <span className="font-heading text-sm tracking-theatre">{b.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-border bg-surface/20">
        <div className="container-site">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-theatre-wide">
            Services
          </h2>
          <p className="mt-3 text-text/75 max-w-2xl">
            Une expérience fluide, de la programmation à la billetterie, avec des formats adaptés
            aux entreprises et aux publics.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              {
                title: 'Programmation',
                text: 'Une sélection de spectacles et d’événements culturels tout au long de la saison.',
              },
              {
                title: 'Billetterie',
                text: 'Réservation simple et rapide, guichet et accompagnement du public.',
              },
              {
                title: 'Privatisation',
                text: 'Un lieu iconique pour vos événements, conférences et soirées.',
              },
              {
                title: 'Ateliers',
                text: 'Rencontres, médiation et ateliers pour tous les âges.',
              },
            ].map((s) => (
              <div key={s.title} className="card p-6">
                <p className="font-heading tracking-theatre-wide text-lg">{s.title}</p>
                <p className="mt-3 text-text/75">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl tracking-theatre-wide">
              À propos
            </h2>
            <p className="mt-4 text-text/75">
              Théâtre des Lumières est un lieu de création et de partage, ancré à Lyon sur la
              Presqu&apos;île. Découvrez la saison, les spectacles, et réservez vos places en quelques
              clics.
            </p>
            <div className="mt-6">
              <Link href="/a-propos" className="btn-outline">
                Découvrir le théâtre
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-glow-sm">
            <Image
              src={images.about}
              alt="Le lieu — Théâtre des Lumières"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-theatre-wide">
            Une relation de confiance
          </h2>
          <p className="mt-3 text-text/75 max-w-2xl">
            Accueil, accompagnement, accessibilité : tout est pensé pour une expérience sereine.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {images.confiance.map((src, idx) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
                <Image
                  src={src}
                  alt={`Confiance — visuel ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-border bg-surface/20">
        <div className="container-site">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-heading text-2xl sm:text-3xl tracking-theatre-wide">
              {reviews.title}
            </h2>
            {reviews.items.length === 0 ? (
              <span className="text-text/60">À venir</span>
            ) : null}
          </div>

          {reviews.items.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {reviews.items.map((r) => (
                <div key={r.id} className="card p-6">
                  <p className="font-heading tracking-theatre text-lg">{r.title}</p>
                  <p className="mt-3 text-text/75">{r.text}</p>
                  <p className="mt-5 text-text/60">{r.author}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 card p-6">
              <p className="text-text/75">
                Cette section sera alimentée avec des retours du public et des partenaires.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl tracking-theatre-wide">
              Presqu&apos;île culturelle
            </h2>
            <p className="mt-4 text-text/75">
              Au cœur du 2e arrondissement, à deux pas des axes majeurs, profitez d’une sortie
              théâtre et d’une promenade entre les lieux culturels emblématiques de Lyon.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-outline">
                Accès & contact
              </Link>
              <Link href="/saison" className="btn-primary">
                Découvrir la saison
              </Link>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Image
                src={images.lyon[0]}
                alt="Lyon — Presqu'île"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Image
                src={images.lyon[1]}
                alt="Lyon — ambiance"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border sm:col-span-2">
              <Image
                src={images.lyon[2]}
                alt="Lyon — quartier culturel"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-theatre-wide">Nous trouver</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="card overflow-hidden">
              <iframe
                title="Carte — Théâtre des Lumières"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.8219%2C45.7505%2C4.8325%2C45.7569&layer=mapnik&marker=45.7537%2C4.8279"
              />
            </div>
            <div className="card p-6">
              <p className="font-heading tracking-theatre-wide text-lg">Accès</p>
              <p className="mt-3 text-text/75">
                Métro, tram et parkings à proximité. Le guichet est ouvert Mar-Sam 11h-19h.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn-outline w-full">
                  Voir les infos pratiques
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="card p-8 sm:p-10 bg-gradient-to-b from-secondary/20 to-surface/40">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl tracking-theatre-wide">
                  Réserver vos places
                </h2>
                <p className="mt-3 text-text/80 max-w-2xl">
                  Réservez en ligne ou contactez la billetterie pour un accompagnement personnalisé.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/billetterie" className="btn-primary">
                  Réserver vos places
                </Link>
                <Link href="/spectacles" className="btn-outline">
                  Programmation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

