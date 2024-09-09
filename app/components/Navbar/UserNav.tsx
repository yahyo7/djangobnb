"use client";
import { CiUser } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import React, { useState } from "react";
import MenuLink from "./MenuLink";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";
import LogOutButton from "../LogOutButton";

interface UserNavProps {
  userId?: string | null;
}

const UserNav: React.FC<UserNavProps> = ({userId}) => {
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <IoMdMenu className="h-9 w-9" />
        <CiUser className="h-8 w-8" />
      </button>

      {isOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
          {userId ? (
            <LogOutButton />
          ) : (
            <>
              <MenuLink
                label="Log In"
                onClick={() => {
                  setIsOpen(false);
                  loginModal.open();
                }}
              />
              <MenuLink
                label="Sign Up"
                onClick={() => {
                  setIsOpen(false);
                  signupModal.open();
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserNav;
