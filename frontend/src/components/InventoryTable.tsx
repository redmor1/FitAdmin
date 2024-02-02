import fetchProductsFromInventory from "../functions/fetchProductsFromInventory";
import { useQuery } from "react-query";
import InventoryTableItem from "./InventoryTableItem";

const InventoryTable = () => {
  const inventoryId = "69c95852-23bc-4fb1-95c7-19d3522d7202";
  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(["productsFromInventory", fetchProductsFromInventory], () =>
    fetchProductsFromInventory({ inventoryId: inventoryId })
  );

  console.log(products);

  return (
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table className="min-w-full divide-y divide-gray-200 border-e-[1px] border-t-[1px] border-b-[1px]">
          <thead>
            <tr className="divide-x divide-gray-200">
              <th
                scope="col"
                className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Price
              </th>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Available
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {/* TODO: Add Loading and Error components */}
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error</p>}
            {isSuccess &&
              products.map((product) => (
                <InventoryTableItem key={product.id} product={product} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
