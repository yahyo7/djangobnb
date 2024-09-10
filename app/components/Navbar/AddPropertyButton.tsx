"use client"

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import React from "react";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({userId}) => {
  const addPropertyModal = useAddPropertyModal();

  const loginModal = useLoginModal();

  const airbnbYourHome = () => {
    if (userId) {
      addPropertyModal.open();
    } else {
      loginModal.open();
    }
  };

  return (
    <div
      onClick={airbnbYourHome}
      className="p-3 mx-2 text-sm font-semibold rounded-full hover:bg-gray-200 cursor-pointer"
    >
      Djangobnb your home
    </div>
  );
};

export default AddPropertyButton;
