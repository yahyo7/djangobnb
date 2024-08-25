import Image from "next/image";
import React from "react";

type Props = {};

const MyReservationsPage = (props: Props) => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My reservations</h1>

      <div className="space-y-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl" >
            <div className="col-span-1" >
                <div className="relative overflow-hidden aspect-square rounded--xl" >
                    <Image
                    fill
                    src='/images/palace.jpg'
                    alt="palace"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    />
                </div>
            </div>

            <div className="cols-span-1 md:col-span-3 space-y-2 " >
                <h2 className="mb-4 text-2xl" >Property name</h2>
                <p className="text-gray-500" > <strong>Check in date:</strong> 14/04/24</p>
                <p className="text-gray-500" > <strong>Check out date:</strong> 14/04/24</p>
                <p className="text-gray-500" > <strong>Number of nights:</strong> 4</p>
                <p className="text-gray-500" > <strong>Total Price:</strong> 500$</p>

                <div className="!mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl" >Go to Property</div>
            </div>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl" >
            <div className="col-span-1" >
                <div className="relative overflow-hidden aspect-square rounded--xl" >
                    <Image
                    fill
                    src='/images/palace.jpg'
                    alt="palace"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    />
                </div>
            </div>

            <div className="cols-span-1 md:col-span-3 space-y-2 " >
                <h2 className="mb-4 text-2xl" >Property name</h2>
                <p className="text-gray-500" > <strong>Check in date:</strong> 14/04/24</p>
                <p className="text-gray-500" > <strong>Check out date:</strong> 14/04/24</p>
                <p className="text-gray-500" > <strong>Number of nights:</strong> 4</p>
                <p className="text-gray-500" > <strong>Total Price:</strong> 500$</p>

                <div className="!mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl" >Go to Property</div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservationsPage;
