"use client";

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import Modal from "./Modal";
import { ChangeEvent, useState } from "react";
import CustomButton from "../forms/CustomButton";
import Categories from "../addproperties/Categories";
import SelectCountry, { SelectCountryType } from "../forms/SelectCountry";
import Image from "next/image";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";

type Props = {};

function AddPropertyModel({}: Props) {
  const router = useRouter();

  const addPropertyModal = useAddPropertyModal();
  const [errors, setErrors] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState('');
  const [dataBedrooms, setDataBedrooms] = useState('');
  const [dataBathrooms, setDataBathrooms] = useState('');
  const [dataGuests, setDataGuests] = useState('');
  const [dataCountry, setDataCountry] = useState<SelectCountryType>();
  const [dataImage, setDataImage] = useState<File | null>(null);

  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setDataImage(event.target.files[0]);
    }
  };

  const submitForm = async () => {

    if (
        dataCategory &&
        dataTitle &&
        dataDescription &&
        dataPrice &&
        dataCountry &&
        dataImage
    ) {
        const formData = new FormData();
        formData.append('category', dataCategory);
        formData.append('title', dataTitle);
        formData.append('description', dataDescription);
        formData.append('price_per_night', dataPrice);
        formData.append('bedrooms', dataBedrooms);
        formData.append('bathrooms', dataBathrooms);
        formData.append('guests', dataGuests);
        formData.append('country', dataCountry.label);
        formData.append('country_code', dataCountry.value);
        formData.append('image', dataImage);

        const response = await apiService.post('/api/properties/create', formData);

        if (response.success) {
            console.log('SUCCESS :-D');

            router.push('/?added=true');

            addPropertyModal.close();
        } else {
            console.log(errors);

            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })

            setErrors(tmpErrors)
        }
    }
}

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
                onChange={(e) => setDataPrice(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Maximum number of Guests</label>
              <input
                type="number"
                value={dataGuests}
                onChange={(e) => setDataGuests(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Bedrooms</label>
              <input
                type="number"
                value={dataBedrooms}
                onChange={(e) => setDataBedrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Bathrooms</label>
              <input
                type="number"
                value={dataBathrooms}
                onChange={(e) => setDataBathrooms(e.target.value)}
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
        <>
          <h2 className="mb-6 text-2xl">Property Image</h2>

          <div className="pt-3 pb-6 space-y-4">
            <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
              <input type="file" accept="image/*" onChange={setImage} />
            </div>
            {dataImage && (
              <div className="w-[200px] h-[150px] relative ">
                <Image
                  fill
                  alt="Uploaded image"
                  src={URL.createObjectURL(dataImage)}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            )}
          </div>

          {errors.map((error, index) => {
            return (
                <div
                key={index}
                className="p-5 bg-airbnb text-white rounded-xl opacity-70"
                >
                    {error}
                </div>
            )
          })}

          <div className="flex gap-4">
            <CustomButton
              className="bg-black hover:bg-gray-800"
              label="Previous"
              onClick={() => setCurrentStep(4)}
            />
            <CustomButton label="Submit" onClick={submitForm} />
          </div>
        </>
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
