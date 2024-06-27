"use client";

import { useState } from "react";

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = () => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };

    const response = await apiService.postWithoutToken(
      "/api/auth/login/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);

      loginModal.close();
      router.push("/");
    } else {
      setErrors(response.non_field_errors);
    }
  };

  const content = (
    <>
      <form action={submitLogin} className="space-y-4">
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
          onChange={(e) => setPassword(e.target.value)}
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

        <CustomButton label="Submit" onClick={submitLogin} />
      </form>
    </>
  );
  return (
    <Modal
      label="Login"
      content={content}
      isOpen={loginModal.isOpen}
      close={loginModal.close}
    />
  );
};
export default LoginModal;
