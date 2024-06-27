"use client";

import { useState } from "react";
import MenuLinks from "./MenuLinks";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignUpModal from "@/app/hooks/useSignUpModal";
// import LogoutButton from "../LogoutButton";
import { useRouter } from "next/navigation";
import { resetAuthCookies } from "@/app/lib/actions";

interface UserNavProps {
  userId?: string | null;
}

const UserNav = ({ userId }: UserNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const loginModal = useLoginModal();
  const signUpModal = useSignUpModal();
  const submitLogout = async () => {
    resetAuthCookies();
    setIsOpen(false);
    router.push("/");
  };

  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
          {userId ? (
            <>
              <MenuLinks
                label="Inbox"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/inbox");
                }}
              />
              <MenuLinks
                label="My Properties"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/myproperties");
                }}
              />

              <MenuLinks
                label="My Reservations"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/myreservations");
                }}
              />
              <MenuLinks
                label="My Favorites"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/myfavorites");
                }}
              />

              {/* <LogoutButton /> */}

              <MenuLinks label="Log out" onClick={submitLogout} />
            </>
          ) : (
            <>
              <MenuLinks
                label="Log in"
                onClick={() => {
                  loginModal.open();
                  setIsOpen(false);
                }}
              />

              <MenuLinks
                label="Register"
                onClick={() => {
                  signUpModal.open();
                  setIsOpen(false);
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
