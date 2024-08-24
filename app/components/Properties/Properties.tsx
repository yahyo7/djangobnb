import React from "react";
import PropertyItem from "./PropertyItem";

type Props = {className?: string};

const Properties: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
    </div>
  );
};

export default Properties;
