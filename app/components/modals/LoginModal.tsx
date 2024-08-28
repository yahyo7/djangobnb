"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

type Props = {};

const LoginModal = (props: Props) => {
  const loginModal = useLoginModal();

  const content = (
    <>

      <form action="submit" className="space-y-4">
        <input placeholder="Email" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
        <input placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-70" >error</div>

        <CustomButton label="Log In" onClick={()=> console.log('logged in')}/>
      </form>
    </>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log In"
      content={content}
    />
  );
};

export default LoginModal;
