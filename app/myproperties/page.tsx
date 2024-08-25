import React from "react";
import Properties from "../components/Properties/Properties";

type Props = {};

const MyPropertiesPage = (props: Props) => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My Properties</h1>

      <Properties className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6" />
    </main>
  );
};

export default MyPropertiesPage;
