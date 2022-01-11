// import FarmHouseDescription from "../farm-house-description/farm-house-description";
import { Fragment, useState, useRef } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XIcon, CheckIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import AddItemForm from "../components/AddItemForm/addItemForm";
import { useHistory } from "react-router-dom";
// import FarmHouseDataService from "../actions/farmhouse-actions";
import { useEffect } from "react";
import GetAllFarmHouse from "../actions/farmhouse-actions";
import NavSidebar from "../components/nav-sidebar/nav-sidebar";
import { firestore } from "firebase";
const db = firestore().collection("/farmhouse");
export default function FarmHouse() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [open, setOpen] = useState(false);
  const [farmHouses, setFarmHouses] = useState([]);
  async function mount() {
    GetAllFarmHouse()
      .orderBy("name", "asc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setFarmHouses([doc.data(), ...farmHouses]);
        });
      });
  }
  function handleDelete(id) {
    console.log(id);
    console.log(farmHouseDetails.id);
    db.doc(farmHouseDetails.id).update({
      products: firestore.FieldValue.arrayRemove(farmHouseDetails.products[id]),
    });
    setOpen(false);
  }
  function handleUpdate() {}
  useEffect(() => {
    mount();
  }, []);
  const [farmHouseDetails, setFarmHouseDetails] = useState({});

  const [openDialog, setDialogOpen] = useState(false);
  const router = useHistory();

  return (
    <>
      <NavSidebar>
        <Transition.Root show={openDialog} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={setDialogOpen}
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className=" inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[50rem] sm:w-full sm:p-6">
                  <AddItemForm
                    id={farmHouseDetails.id}
                    onClose={() => setDialogOpen(false)}
                    products={farmHouseDetails.products}
                  />
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden"
            onClose={setOpen}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Dialog.Overlay className="absolute inset-0" />
              <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="w-screen max-w-3xl">
                    <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                      <div className="px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Profile
                          </Dialog.Title>
                          <div className="ml-3 h-7 flex items-center">
                            <button
                              type="button"
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Main */}
                      <div className="divide-y divide-gray-200">
                        <div className="pb-6">
                          <div className=" h-24 sm:h-20 lg:h-10" />
                          <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15">
                            <div className="mt-8  sm:flex-1">
                              <div>
                                <div className="flex items-left">
                                  <h3 className="font-bold text-xl text-gray-900 sm:text-2xl">
                                    {farmHouseDetails.name}
                                  </h3>
                                </div>
                                <p className="text-sm text-gray-500">
                                  {farmHouseDetails.email}
                                </p>
                              </div>
                              <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                                <button
                                  type="button"
                                  className="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-1"
                                >
                                  Message
                                </button>
                                <button
                                  type="button"
                                  className="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Call
                                </button>
                                <span className="ml-3 inline-flex sm:ml-0">
                                  <Menu
                                    as="div"
                                    className="relative inline-block text-left"
                                  >
                                    <Menu.Button className="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      <span className="sr-only">
                                        Open options menu
                                      </span>
                                      <DotsVerticalIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </Menu.Button>
                                    <Transition
                                      as={Fragment}
                                      enter="transition ease-out duration-100"
                                      enterFrom="transform opacity-0 scale-95"
                                      enterTo="transform opacity-100 scale-100"
                                      leave="transition ease-in duration-75"
                                      leaveFrom="transform opacity-100 scale-100"
                                      leaveTo="transform opacity-0 scale-95"
                                    >
                                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                          <Menu.Item>
                                            {({ active }) => (
                                              <a
                                                href="#"
                                                className="bg-gray-100 text-gray-900 block px-4 py-2 text-sm"
                                              >
                                                Disable Profile
                                              </a>
                                            )}
                                          </Menu.Item>
                                        </div>
                                      </Menu.Items>
                                    </Transition>
                                  </Menu>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-5 sm:px-0 sm:py-0">
                          <dl className="space-y-8 sm:divide-y sm:divide-gray-200 sm:space-y-0">
                            <div className="sm:flex sm:px-6 sm:py-5">
                              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                Location
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                {farmHouseDetails.location}
                              </dd>
                            </div>
                            <div className="sm:flex sm:px-6 sm:py-5">
                              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                Phone
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                {farmHouseDetails.phone}
                              </dd>
                            </div>
                            <div className="sm:flex sm:px-6 sm:py-5">
                              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                Email
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                <time dateTime="1982-06-23">
                                  {farmHouseDetails.email}
                                </time>
                              </dd>
                            </div>
                          </dl>

                          <div className="relative">
                            <div
                              className="absolute inset-0 flex items-center"
                              aria-hidden="true"
                            >
                              <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center">
                              <span className="px-3 bg-white text-lg font-medium text-gray-900">
                                Inventories
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 mt-10 ml-10">
                            <button
                              type="button"
                              onClick={() => {
                                setDialogOpen(true);
                              }}
                              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              + Add Product
                            </button>
                          </div>
                          {/* Inventory start */}
                          <div className="bg-white">
                            <div className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                                {farmHouseDetails.products &&
                                  farmHouseDetails.products.map(
                                    (product, index) => (
                                      <a key={product.id} className="group">
                                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                          <img
                                            src={product.imageSrc}
                                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                                          />
                                        </div>
                                        <div className="flex flex-row item-start justify-between  py-2 ">
                                          <h3 className="mt-4 text-sm text-gray-700">
                                            {product.name}
                                          </h3>
                                          {/* Dropdown Start */}
                                          <span className="ml-3 inline-flex sm:ml-0">
                                            <Menu
                                              as="div"
                                              className="relative inline-block text-left"
                                            >
                                              <Menu.Button className="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span className="sr-only">
                                                  Open options menu
                                                </span>
                                                <DotsVerticalIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </Menu.Button>
                                              <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                              >
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                  <div className="py-1">
                                                    <Menu.Item>
                                                      <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                      >
                                                        Update
                                                      </a>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                      <a
                                                        // href="#"
                                                        onClick={() =>
                                                          handleDelete(index)
                                                        }
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                      >
                                                        Remove
                                                      </a>
                                                    </Menu.Item>
                                                  </div>
                                                </Menu.Items>
                                              </Transition>
                                            </Menu>
                                          </span>
                                          {/* Dropdown End */}
                                        </div>
                                        <div className="flex flex-row item-start justify-between  py-2 ">
                                          <p className="mt-1 text-lg font-medium text-gray-900">
                                            {product.price}
                                          </p>
                                          <p className="mt-1 text-lg font-medium text-gray-900">
                                            Quantity: {product.quantity}
                                          </p>
                                        </div>
                                      </a>
                                    )
                                  )}
                              </div>
                            </div>
                          </div>
                          {/* Inventory End */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="m-5">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Farm Houses
              </h2>
            </div>
            <button
              type="button"
              onClick={() => router.push("/create-farmhouse")}
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              + Add Farm House
            </button>
          </div>
          <div className="flex flex-col m-5">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Farm House Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        ></th>
                        <th
                          scope="col"
                          className="px-6 py-1  text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                        {/* <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Update</span>
                    </th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {farmHouses.map((farmHouse) => (
                        <tr key={farmHouse.email}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {farmHouse.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {farmHouse.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {farmHouse.location}
                            </div>
                            <div className="text-sm text-gray-500">
                              {farmHouse.country}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {farmHouse.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Update
                            </a>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                setFarmHouseDetails(farmHouse);
                                setOpen(true);
                              }}
                              type="button"
                              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavSidebar>
    </>
  );
}
