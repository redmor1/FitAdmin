import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import Product from "../interfaces/Product";

interface InventoryTableItemProps {
  product: Product;
}

const InventoryTableItem = ({ product }: InventoryTableItemProps) => {
  return (
    <tr key={product.id} className="divide-x divide-gray-200">
      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
        <div className="flex items-center">
          <div className="h-11 w-11 flex-shrink-0">
            <img
              className="h-11 w-11 rounded-full"
              src={product.image}
              alt=""
            />
          </div>
          <div className="font-medium text-gray-900 ml-4">{product.name}</div>
        </div>
      </td>
      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
        {product.category_name}
      </td>
      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
        ${product.price}
      </td>
      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
        {product.quantity}
      </td>
      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
        {product.availability ? (
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        ) : (
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        )}
      </td>
    </tr>
  );
};

export default InventoryTableItem;
