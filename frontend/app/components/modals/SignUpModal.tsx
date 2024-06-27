"use client";

import { useState } from "react";

import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignUpModal = () => {
  // variables

  const router = useRouter();
  const signUpModal = useSignUpModal();

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  //Submit Functionality

  const submitSignup = async () => {
    const formData = {
      // usernname: "malay",
      email: email,
      password1: password1,
      password2: password2,
    };

    const response = await apiService.postWithoutToken(
      "/api/auth/register/",
      JSON.stringify(formData)
    );
    if (response.access) {
      //handlelogin
      handleLogin(response.user.pk, response.access, response.refresh);

      signUpModal.close();

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
      <form action={submitSignup} className="space-y-4">
        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          onChange={(e) => setPassword1(e.target.value)}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          onChange={(e) => setPassword2(e.target.value)}
        />

        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb-red text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}

        <CustomButton label="Submit" onClick={submitSignup} />
      </form>
    </>
  );
  return (
    <Modal
      label="Register"
      content={content}
      isOpen={signUpModal.isOpen}
      close={signUpModal.close}
    />
  );
};
export default SignUpModal;
