import React from "react"

const details = () => {
  const order = {
    status: "pending",
  }
  return (
    <div className="p-4 grid grid-cols-3 gap-4 min-h-screen   bg-gray-50">
      <div className="col-span-2 space-y-4">
        <div className="w-full min-h-fit h-fit shadow p-4 bg-white rounded">
          <div className="flex justify-between items-center">
            <div className="mb-1">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Order Number
              </h3>
              <p className="max-w-2xl text-sm text-gray-500 font-medium">
                #12ADSS5
              </p>
            </div>
            <div>
              <span
                className={`px-2 inline-flex uppercase text-xs leading-5 font-semibold rounded-full ${
                  order.status === "pending"
                    ? "bg-red-200 text-red-800 "
                    : order.status === "delivered"
                    ? "bg-green-200 text-green-800"
                    : "bg-blue-200 text-blue-800"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>

          <div className=" border-t border-gray-200">
            <dl>
              <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">
                  Product Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Goat Roaster
                </dd>
              </div>
              <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Quantity</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  2
                </dd>
              </div>
              <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Price</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  $4.75
                </dd>
              </div>
              <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">
                  Ordered By
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  John Doe
                </dd>
              </div>
              <div className="py-2  sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">
                  Ordered Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  2022-01-30
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="w-full min-h-fit h-fit shadow p-4 bg-white rounded">
          <h3 className="text-lg leading-6 font-medium text-gray-900 underline">
            Shipping & Delivery
          </h3>
          <dl>
            <div className="py-2  sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                John Doe
              </dd>
            </div>
            <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">City</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Wilmington
              </dd>
            </div>
            <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                State/province/area
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                North Carolina
              </dd>
            </div>
            <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Phone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                +1 910-362-2097
              </dd>
            </div>
            <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Zip Code</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                28401
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="w-full h-60 bg-white p-1 shadow rounded-md">
        <img
          src="https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29hdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          className="h-full w-full rounded-md"
        />
      </div>
    </div>
  )
}

export default details
