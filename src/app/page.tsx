"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Alert, RestaurantCard, Select } from "@/components";
import { roundRating } from "@/utils";
import { Loading } from "@/components";

interface IRating {
  rating: number;
}
interface IStore {
  id: number;
  image: string;
  name: string;
  description: string;
  ratings: IRating[];
  rating: number;
  cuisine: { name: string };
}
interface ICuisineOptions {
  value: string;
  label: string;
}
interface ICuisine {
  name: string;
  id: number;
}
export default function Home() {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [stores, setStores] = useState<IStore[] | null>(null);
  const [cuisines, setCuisines] = useState<ICuisineOptions[]>();

  const filteredStores =
    selectedCuisine && stores
      ? stores.filter((store) => store.cuisine.name === selectedCuisine)
      : stores;

  const getCuisines = async () => {
    fetch("/api/cuisines")
      .then((res) => res.json())
      .then((data) => {
        let cuisineOptions = [
          {
            value: "",
            label: "all",
          },
        ];
        data.map((v: ICuisine) => {
          cuisineOptions.push({ value: v.name, label: v.name });
        });
        if (cuisineOptions.length) {
          setCuisines(cuisineOptions);
        }
      });
  };
  const getStores = async () => {
    fetch("/api/stores")
      .then((res) => res.json())
      .then((data: IStore[]) => {
        const storeFormated = data.map((s) => {
          const sum = s.ratings.reduce(
            (accumulator: number, item: any) => accumulator + item.rating,
            0
          );
          return {
            ...s,
            rating: roundRating(sum / s.ratings.length),
            cuisine: s.cuisine,
          };
        });
        setStores(storeFormated);
      });
  };

  useEffect(() => {
    (async () => {
      await getCuisines();
      await getStores();
    })();
  }, []);

  if (!cuisines)
    return (
      <div className="flex justify-center items-center py-96">
        <Loading />
      </div>
    );

  return (
    <main className="flex justify-center">
      <div className="max-w-5xl w-full p-4">
        <h1 className="text-2xl font-bold mb-4 text-violet-800">
          Eat Restaurants
        </h1>

        <div className="mb-4 max-w-sm">
          <label
            htmlFor="cuisine"
            className="text-gray-700 block mb-1 font-semibold"
          >
            Cuisine:
          </label>
          <Select
            options={cuisines}
            onChange={(e) => setSelectedCuisine(e.target.value)}
          />
        </div>
        {filteredStores && filteredStores.length > 0 ? (
          <div className="flex flex-col md:flex-row md:flex-wrap">
            {filteredStores.map((s) => (
              <div key={s.id} className="w-full md:w-1/4 p-4 ">
                <Link href={`/store/${s.id}`}>
                  <RestaurantCard
                    name={s.name}
                    cuisine={s.cuisine.name}
                    rating={s.rating}
                    image={s.image}
                    description={s.description}
                  />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <Alert message="No restaurants found" type="secondary" />
        )}
      </div>
    </main>
  );
}
