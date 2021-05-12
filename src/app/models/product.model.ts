export class Product {
  id?: number;
  name: string;
  description?: string;
  quantity: number;
  price: number;
  sku: string;
  image?: string;
  available?: boolean;
  featured?: boolean;
  category_id: number;
}
