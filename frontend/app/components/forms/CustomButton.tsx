type Props = {
  label: string;
  className?: string;
  onClick: () => void;
};

const CustomButton = ({ label, onClick, className }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 bg-airbnb-red hover:bg-airbnb-dark text-white text-center rounded-xl transition cursor-pointer ${className}`}
    >
      {label}
    </div>
  );
};

export default CustomButton;
