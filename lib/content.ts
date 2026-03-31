import address from '../../content/address.json';
import brands from '../../content/brands.json';
import imagesMap from '../../content/images-map.json';
import reviews from '../../content/reviews.json';
import brand from '../../brand.json';

export type AddressContent = typeof address;
export type BrandsContent = typeof brands;
export type ImagesMapContent = typeof imagesMap;
export type ReviewItem = {
  id: string;
  title: string;
  text: string;
  author: string;
};
export type ReviewsContent = {
  title: string;
  items: ReviewItem[];
};
export type BrandConfig = typeof brand;

export function getSiteContent() {
  return {
    brand,
    address,
    brands,
    imagesMap,
    reviews: reviews as unknown as ReviewsContent,
  };
}

