import { PlusCircleIcon } from "@heroicons/react/20/solid";

import InventoryTable from "../components/InventoryTable";

const Inventory = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="flex justify-end mb-12 items-center">
          <p className="font-medium">Want to add a product?</p>
          <button
            type="button"
            className="ml-4 inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            <PlusCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Add product
          </button>
        </div>
        <InventoryTable />
      </div>
    </div>
  );
};

export default Inventory;
