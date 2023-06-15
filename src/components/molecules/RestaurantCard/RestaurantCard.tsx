import React, { FC } from "react";
import { Button, IconStar, IconStarHalf, Pill } from "@/components";

interface ICountingStarsProps {
  rating: number;
}
interface IRestaurantCardProps {
  name: string;
  rating: number;
  image: string;
  description: string;
  cuisine: string;
}
export const CountingStars: FC<ICountingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<IconStar key={i} className="text-yellow-500 mr-1" />);
  }

  if (hasHalfStar) {
    stars.push(
      <IconStarHalf key={fullStars} className="text-yellow-500 mr-1" />
    );
  }

  return stars;
};
export const RestaurantCard: FC<IRestaurantCardProps> = ({
  name,
  rating,
  image,
  description,
  cuisine,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 cursor-pointer ">
      <div className="relative h-44">
        <img
          src={image}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="px-6 py-4">
        <Button
          onClick={() => console.log()}
          size="x-small"
          color="secondary"
          intensity="soft"
        >
          {cuisine}
        </Button>
        <div className="font-bold text-xl mb-2 pt-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex items-center justify-start gap-2">
        <Pill
          text={rating.toString()}
          color={
            rating > 4
              ? "success"
              : rating > 2.5
              ? "warning"
              : rating > 0.5
              ? "error"
              : "light"
          }
        />
        <div className="flex gap-1">{<CountingStars rating={rating} />}</div>
      </div>
    </div>
  );
};
