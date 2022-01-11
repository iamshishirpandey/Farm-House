import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";

import GetAllFarmHouse from "../actions/farmhouse-actions";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "../components/Footer/footer";
toast.configure();

export default function UserHomepage() {
  const [farmHouses, setFarmHouses] = useState([]);

  async function mount() {
    GetAllFarmHouse()
      .orderBy("name", "asc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setFarmHouses([doc.data(), ...farmHouses]);
        });
      });
    console.log(farmHouses[0].products);
  }
  useEffect(() => {
    mount();
  }, []);
  const [prod] = useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car",
  });
  const [openDialog, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, prod }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  return (
    <>
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
                <div className="m-5">
                  <div className="md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Order Item
                      </h2>
                    </div>

                    <img
                      src={selectedProduct.imageSrc}
                      className="w-24 h-24 object-center object-cover group-hover:opacity-75"
                    />
                  </div>

                  <form className="space-y-8 divide-y divide-gray-200 ">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                      <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                        <div className="space-y-6 sm:space-y-5">
                          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                              Product Name
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                              <input
                                type="text"
                                name="first-name"
                                value={selectedProduct.name}
                                id="first-name"
                                readOnly={true}
                                autoComplete="given-name"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label
                              htmlFor="quantity"
                              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                              Name
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                              <input
                                type="text"
                                name="name"
                                id="first-name"
                                autoComplete="first-name"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                              Email
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                              <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label
                              htmlFor="quantity"
                              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                              Quantity
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                              <input
                                type="number"
                                name="quantity"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label
                              htmlFor="suffix"
                              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                              Suffix
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                              <input
                                type="text"
                                name="quantity"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label
                              htmlFor="suffix"
                              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                              Total Price:
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                              <input
                                type="text"
                                name="price"
                                id="postal-code"
                                autoComplete="price"
                                readOnly={true}
                                value={
                                  selectedProduct.price *
                                  selectedProduct.quantity
                                }
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          //   onClick={() => history.push("/farm-houses")}
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cancel
                        </button>
                        <StripeCheckout
                          stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                          token={handleToken}
                          amount={1000}
                          name="Farm House"
                          billingAddress
                          shippingAddress
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="m-5">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6  text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900 items-center flex-1">
            Available Products
          </h3>
        </div>
        <div className="mt-5"></div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {farmHouses &&
            farmHouses.map((farmHouse, index) => {
              {
                return (
                  farmHouse.products &&
                  farmHouse.products.map((product) => (
                    <li
                      key={product.name}
                      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                    >
                      <div className="flex-1 flex flex-col p-8">
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-5 xl:aspect-h-4">
                          <img
                            src={product.imageSrc}
                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                          />
                        </div>
                        <h3 className="mt-6 text-gray-900 text-lm font-medium">
                          {product.name}
                        </h3>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                          <dt className="sr-only">Title</dt>
                          <dd className="text-gray-500 text-lm">
                            {product.title}
                          </dd>
                          <dt className="sr-only">Email</dt>
                          <dd className="text-gray-500 text-lm">
                            {product.name}
                          </dd>
                          <dt className="sr-only">Price</dt>
                          <dd className="text-gray-500 text-lm">
                            <b> Price: </b> {product.price} / {product.suffix}
                          </dd>
                        </dl>
                      </div>
                      <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                          <div className="w-0 flex-1 flex">
                            <button
                              onClick={() => {
                                setSelectedProduct(product);
                                setDialogOpen(true);
                              }}
                              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                            >
                              <span className="ml-3">Order Now</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                );
              }
            })}
        </ul>
        <Footer />
      </div>
    </>
  );
}
