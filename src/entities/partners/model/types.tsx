export interface PartnerEntity {
  id: string;
  name: string;
  address: string;
  rating: number;
  distance: number;
  freeShipping: boolean;
  open: boolean;
  categories: string[];
}
