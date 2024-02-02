interface Product {
  id: string;
  name: string;
  description: string | null;
  image: string;
  price: number;
  availability: boolean;
  quantity: number;
  category_id: string;
  inventory_id: string;
  category_name: string;
}
export default Product;
