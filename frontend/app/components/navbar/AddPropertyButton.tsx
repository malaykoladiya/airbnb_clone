"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import usePropertyModal from "@/app/hooks/usePropertyModal";

interface AddPropertyButtonProps {
  userId?: string | null;
}
const AddPropertyButton = ({ userId }: AddPropertyButtonProps) => {
  const addPropertyModal = usePropertyModal();
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
      className=" cursor-pointer p-2 text-xs lg:text-sm font-semibold rounded-full hover:bg-gray-200"
    >
      Airbnb Your Home
    </div>
  );
};

export default AddPropertyButton;
