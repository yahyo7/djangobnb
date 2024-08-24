import Image from "next/image";
import React from "react";

type Props = {};

const PropertyItem = (props: Props) => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          alt="beach"
          fill
          src="/images/beach-nature.jpg"
          sizes="(max-width: 768px): 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">Property name</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">Price 200$</p>
      </div>
    </div>
  );
};

export default PropertyItem;
