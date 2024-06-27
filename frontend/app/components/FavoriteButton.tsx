"use client";

import apiService from "../services/apiService";

interface FavoriteButtonProps {
  id: string;
  is_favorite: boolean;
  markFavorite: (is_favorite: boolean) => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  id,
  is_favorite,
  markFavorite,
}) => {
  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const response = await apiService.post(
      `/api/properties/${id}/toggle_favorite/`,
      {}
    );

    markFavorite(response.is_favorite);
  };

  return (
    <div
      onClick={toggleFavorite}
      className={`absolute top-2 right-2 ${
        is_favorite ? "text-airbnb-red" : "text-white"
      } hover:text-airbnb-red`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={is_favorite ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </svg>
    </div>
  );
};

export default FavoriteButton;
