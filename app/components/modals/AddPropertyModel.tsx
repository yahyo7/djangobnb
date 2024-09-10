"use client";

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import Modal from "./Modal";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import Categories from "../addproperties/Categories";
import SelectCountry, { SelectCountryType } from "../forms/SelectCountry";

type Props = {};

function AddPropertyModel({}: Props) {
  const addPropertyModal = useAddPropertyModal();
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState(0);
  const [dataBedrooms, setDataBedrooms] = useState(0);
  const [dataBathrooms, setDataBathrooms] = useState(0);
  const [dataGuests, setDataGuests] = useState(0);
  const [dataCountry, setDataCountry] = useState<SelectCountryType>();

  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose Category</h2>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="mb-6 text-2xl">Describe your place</h2>
          <div className="pt-3 pb-6 space-y-4 ">
            <div className="flex flex-col space-y-2">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="h-[200px] w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <CustomButton
              className="bg-black hover:bg-gray-800"
              label="Previous"
              onClick={() => setCurrentStep(1)}
            />
            <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
          </div>
        </>
      ) : currentStep == 3 ? (
        <>
          <h2 className="mb-6 text-2xl">Details</h2>

          <div className="pt-3 pb-6 space-y-4 ">
            <div className="flex flex-col space-y-2">
              <label>Price</label>
              <input
                type="number"
                value={dataPrice}
                onChange={(e) => setDataPrice(parseInt(e.target.value))}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Maximum number of Guests</label>
              <input
                type="number"
                value={dataGuests}
                onChange={(e) => setDataGuests(parseInt(e.target.value))}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Bedrooms</label>
              <input
                type="number"
                value={dataBedrooms}
                onChange={(e) => setDataBedrooms(parseInt(e.target.value))}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Bathrooms</label>
              <input
                type="number"
                value={dataBathrooms}
                onChange={(e) => setDataBathrooms(parseInt(e.target.value))}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <CustomButton
              className="bg-black hover:bg-gray-800"
              label="Previous"
              onClick={() => setCurrentStep(2)}
            />
            <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
          </div>
        </>
      ) : currentStep == 4 ? (
        <>
          <h2 className="mb-6 text-2xl">Location</h2>

          <div className="pt-3 pb-6 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryType)}
            />
          </div>

          <div className="flex gap-4">
            <CustomButton
              className="bg-black hover:bg-gray-800"
              label="Previous"
              onClick={() => setCurrentStep(3)}
            />
            <CustomButton label="Next" onClick={() => setCurrentStep(5)} />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        label="Add Property"
        content={content}
      />
    </>
  );
}

export default AddPropertyModel;
