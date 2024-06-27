import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories = ({ dataCategory, setCategory }: CategoriesProps) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div
          onClick={() => {
            setCategory("Amazing View");
          }}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Amazing View" ? "border-gray-900" : "border-white"
          } border-white opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/icn_cat_amazingview.jpg"
            alt="Category-amazingview"
            width={20}
            height={20}
          />
          <span className="text-xs">Amazing View</span>
        </div>
        <div
          onClick={() => {
            setCategory("Beach");
          }}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Beach" ? "border-gray-900" : "border-white"
          } border-white opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/icn_cat_beach.jpg"
            alt="Category-beach"
            width={20}
            height={20}
          />
          <span className="text-xs">Beach</span>
        </div>
        <div
          onClick={() => setCategory("Cabins")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Cabins" ? "border-gray-900" : "border-white"
          } border-white opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/icn_cat_cabins.jpg"
            alt="Category-cabins"
            width={20}
            height={20}
          />
          <span className="text-xs">Cabins</span>
        </div>
        <div
          onClick={() => setCategory("Tiny Homes")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Tiny Homes" ? "border-gray-900" : "border-white"
          } border-white opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/icn_cat_tinyhomes.jpg"
            alt="Category-tinyhomes"
            width={20}
            height={20}
          />
          <span className="text-xs">Tiny Homes</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
