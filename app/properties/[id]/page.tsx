import ReservationSidebar from "@/app/components/Properties/ReservationSidebar";
import Image from "next/image";
import React from "react";

type Props = {};

const PropertyDetailPage = (props: Props) => {
  return <main className="max-w-[1500px] mx-auto px-6 pb-6">
    <div className="w-full h-[64vh] overflow-hidden rounded-xl relative mb-4">
        <Image src='/images/beach-nature.jpg'
        fill
        className="object-cover w-full h-full"
        alt="beach"/>
    </div>

    <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3" >
            <h1 className="mb-4 text-4xl">Name</h1>
            <span className="mb-6 block text-lg text-gray-600">4 guests...</span>
            <hr />
            <div className="py-6 flex items-center space-x-4" >
                <Image src='/images/avatar.png'
                width={50}
                height={50}
                className="rounded-full"
                alt="user"
                />
                <p>Seven Me</p>
            </div>
            <hr />
            <p className="mt-6 text-lg" >
            Camper and Cabin prides itself as the first Airstream accommodation in the Philippines. With its seamless blend of thoughtful design and its location's natural surroundings, one can enjoy the spirit of camping while embracing the comforts of a luxury hotel.
            </p>
        </div>

        <div className="col-span-2">
            <ReservationSidebar/>
        </div>
    </div>
  </main>;
};

export default PropertyDetailPage;
