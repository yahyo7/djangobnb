"use client";
import React from "react";
import PropertyItem from "./PropertyItem";

import { useEffect, useState } from "react";
import apiService from "@/app/services/apiService";

type Props = { className?: string, landlord_id?: string | null };
export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
}

const Properties: React.FC<Props> = ({ className, landlord_id }) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    let url = '/api/properties/'
    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`
    }
    const tmpProperties = await apiService.get(url)
    setProperties(tmpProperties.data);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className={className}>
      {properties.map((property) => (
        <PropertyItem key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Properties;
