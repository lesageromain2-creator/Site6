import HomeSections from '@/components/sections/Home';
import { getSiteContent } from '@/lib/content';

export default function HomePage() {
  const { brands, imagesMap, reviews } = getSiteContent();

  return (
    <main>
      <HomeSections brands={brands} images={imagesMap} reviews={reviews} />
    </main>
  );
}

