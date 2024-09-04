"use client";
import React from "react";
import PropertyItem from "./PropertyItem";

import { useEffect, useState } from "react";

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
    const url = "http://localhost:8000/api/properties/";

    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProperties(json.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
