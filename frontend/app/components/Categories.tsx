"use client";

import Image from "next/image";
import { useState } from "react";
import useSearchModal, { SearchQuery } from "../hooks/useSearchModal";

const Categories = () => {
  const searchModal = useSearchModal();
  const [category, setCategory] = useState("");

  const _setCategory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
      country: searchModal.query.country,
      checkIn: searchModal.query.checkIn,
      checkOut: searchModal.query.checkOut,
      guests: searchModal.query.guests,
      bedrooms: searchModal.query.bedrooms,
      bathrooms: searchModal.query.bathrooms,
      category: _category,
    };

    searchModal.setQuery(query);
  };
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div
        onClick={() => _setCategory("")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_cat_beach.jpg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">All</span>
      </div>
      <div
        onClick={() => _setCategory("Amazing View")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Amazing View" ? "border-black" : "border-white"
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
        onClick={() => _setCategory("Beach")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Beach" ? "border-black" : "border-white"
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
        onClick={() => _setCategory("Cabins")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Cabins" ? "border-black" : "border-white"
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
        onClick={() => _setCategory("Tiny Homes")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Tiny Homes" ? "border-black" : "border-white"
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
  );
};

export default Categories;
