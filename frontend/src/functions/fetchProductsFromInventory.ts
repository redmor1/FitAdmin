import { supabase } from "../supabaseClient";

interface fetchProductsFromInventoryParams {
  inventoryId: string;
}

async function fetchProductsFromInventory({
  inventoryId,
}: fetchProductsFromInventoryParams) {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        *,
        categories:category_id (name)
      `
      )
      .eq("inventory_id", inventoryId);
    if (error) {
      throw new Error(error.message);
    }
    // Map over the data to include category_name in each product object and exclude categories
    const dataWithCategoryName = data.map(({ categories, ...product }) => ({
      ...product,
      category_name: categories.name,
    }));
    return dataWithCategoryName;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch data");
  }
}

export default fetchProductsFromInventory;
