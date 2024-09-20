import Image from "next/image";
import React from "react";
import { PropertyType } from "./Properties";
import { useRouter } from "next/navigation";

interface PropertyProps {
  property: PropertyType;
}

const PropertyItem: React.FC<PropertyProps> = ({ property }) => {

  const router = useRouter()

  return (
    <div
    onClick={() => router.push(`/property/${property.id}`)} 
    className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          priority
          alt="beach"
          fill
          src={property.image_url}
          sizes="(max-width: 768px): 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">${property.price_per_night}</p>
      </div>
    </div>
  );
};

export default PropertyItem;
