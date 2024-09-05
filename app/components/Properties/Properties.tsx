"use client";
import React from "react";
import PropertyItem from "./PropertyItem";

import { useEffect, useState } from "react";
import apiService from "@/app/services/apiService";

type Props = { className?: string };
export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
}

const Properties: React.FC<Props> = ({ className }) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    const tmpProperties = await apiService.get('/api/properties/')
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
