import Image from 'next/image';

import ContactForm from '@/components/forms/ContactForm';
import { getSiteContent } from '@/lib/content';

export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  const { address, imagesMap, brand } = getSiteContent();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-site py-16 sm:py-20">
          <p className="font-heading tracking-theatre text-text/70">Billetterie & informations</p>
          <h1 className="mt-3 font-heading text-h1 tracking-theatre-wide">Contact</h1>
          <p className="mt-5 max-w-2xl text-text/80">
            Une question sur un spectacle, un tarif, ou une demande de privatisation ? Écrivez-nous.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="card p-6 sm:p-8">
              <p className="font-heading tracking-theatre-wide text-lg">Infos pratiques</p>
              <p className="mt-3 text-text/80">
                {address.address}
                <br />
                {address.hours}
              </p>
              <div className="mt-6 grid gap-2 text-text/80">
                <a className="hover:text-text" href={`tel:${address.phone.replace(/\s/g, '')}`}>
                  {address.phone}
                </a>
                <a className="hover:text-text" href={`mailto:${address.email}`}>
                  {address.email}
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-glow-sm">
              <Image
                src={imagesMap.lyon[0]}
                alt="Lyon — Presqu'île"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <div className="space-y-6">
            <ContactForm siteId={brand.slug} />
            <div className="card overflow-hidden">
              <iframe
                title="Carte — Théâtre des Lumières"
                className="h-[380px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.8219%2C45.7505%2C4.8325%2C45.7569&layer=mapnik&marker=45.7537%2C4.8279"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

