"use client";

import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

type Props = {};

const SignupModal = (props: Props) => {
  const signupModal = useSignupModal();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSignUp = async () => {
    const formData = { name, email, password1, password2 };
    console.log(formData)

    const response = await apiService.postWithoutToken(
      "/api/auth/register/",
      formData
    );
    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);

      signupModal.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });
      setErrors(tmpErrors);
    }
  };

  const content = (
    <>
      <form action="submit" className="space-y-4">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          onChange={(e) => setPassword1(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Retype Password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />

        {errors.map((error, index) => {
          return (
            <div
              key={index}
              className="p-5 bg-airbnb text-white rounded-xl opacity-70"
            >
              {error}
            </div>
          );
        })}

        <CustomButton label="Sign Up" onClick={handleSignUp} />
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
