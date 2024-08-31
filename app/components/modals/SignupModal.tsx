"use client";

import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";

type Props = {};

const SignupModal = (props: Props) => {
  const signupModal = useSignupModal();

  const content = (
    <>

      <form action="submit" className="space-y-4">
        <input placeholder="Email" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
        <input placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
        <input placeholder="Retype Password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-70" >error</div>

        <CustomButton label="Sign Up" onClick={()=> console.log('signed in')}/>
      </form>
    </>
  );
  return (
    <Modal 
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign Up"
      content={content}
    />
  );
};

export default SignupModal;
