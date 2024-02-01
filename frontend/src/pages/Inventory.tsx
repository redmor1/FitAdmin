import {
  CheckCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

const Inventory = () => {
  const products = [
    {
      id: "1234",
      name: "Coca-Cola",
      category: "Bebidas",
      price: 3300,
      quantity: 6,
      availability: true,
      image:
        "https://superlago.com.ar/wp-content/uploads/2022/05/COCA-COLA-X-225-L..png",
    },
    {
      id: "1234",
      name: "Fanta",
      category: "Bebidas",
      price: 3250,
      quantity: 2,
      availability: true,
      image:
        "https://dcdn.mitiendanube.com/stores/001/721/112/products/fanta-naranja2-251-d48d311fe0798b8f2816294204041007-640-0.png",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="flex justify-end mb-12 items-center">
          <p className="font-medium">Want to add a product?</p>
          <button
            type="button"
            className="ml-4 inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Add product
          </button>
        </div>
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
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
                {products.map((product) => (
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
                        <div className="font-medium text-gray-900 ml-4">
                          {product.name}
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      {product.category}
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
                        <XCircleIcon
                          className="h-5 w-5 text-red-400"
                          aria-hidden="true"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
