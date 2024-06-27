"use client";

type MenuProps = {
  label: string;
  onClick: () => void;
};

const MenuLinks = ({ label, onClick }: MenuProps) => {
  return (
    <div onClick={onClick} className="px-5 py-4 hover:bg-gray-100 transition">
      {label}
    </div>
  );
};

export default MenuLinks;
