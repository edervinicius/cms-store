"use client";

import React, { useState, useEffect } from "react";
import { Card, Textfield, Textarea, Select } from "@/components";

interface ICuisine {
  name: string;
  id: number;
}
interface ICuisineOptions {
  value: number;
  label: string;
}
interface IStore {
  id: number;
  name: string;
}

export const StoresForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [stores, setStores] = useState<IStore[]>();
  const [cuisines, setCuisines] = useState<ICuisineOptions[]>();
  const [cuisineId, setCuisineId] = useState<number>(0);

  const getStores = async () => {
    fetch("/api/stores")
      .then((res) => res.json())
      .then((data) => {
        setStores(data);
      });
  };

  const getCuisines = async () => {
    fetch("/api/cuisines")
      .then((res) => res.json())
      .then((data: ICuisine[]) => {
        const cuisineOptions = data.map((v) => {
          return { value: v.id, label: v.name };
        });
        if (cuisineOptions.length) {
          setCuisineId(cuisineOptions[0].value);
          setCuisines(cuisineOptions);
        }
      });
  };
  const deleteStore = async (id: number) => {
    fetch(`/api/stores/${id}`, {
      method: "DELETE",
    })
      .then(async (res) => await getStores())
      .then((data) => {});
  };
  const handleAddStore = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("cuisineId", cuisineId);
    fetch(`/api/stores`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, image, address, cuisineId }),
    })
      .then(async (res) => {
        setName("");
        setDescription("");
        setImage("");
        setAddress("");
        await getCuisines();
        await getStores();
      })
      .then((data) => {});
  };

  useEffect(() => {
    getCuisines();
    getStores();
  }, []);

  return (
    <div className="flex gap-2">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Add Restaurant</h2>

        <form onSubmit={handleAddStore}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-gray-700 block mb-1 font-semibold"
            >
              Cuisine:
            </label>
            <Select
              onChange={(e) => setCuisineId(parseInt(e.target.value, 10))}
              options={cuisines}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-gray-700 block mb-1 font-semibold"
            >
              Name:
            </label>
            <Textfield
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="text-gray-700 block mb-1 font-semibold"
            >
              Description:
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="text-gray-700 block mb-1 font-semibold"
            >
              Image URL:
            </label>
            <Textfield
              type="url"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="text-gray-700 block mb-1 font-semibold"
            >
              Address:
            </label>
            <Textfield
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </Card>
      <Card>
        <h2 className="text-2xl font-bold mb-4">Restaurant list</h2>
        {stores && stores.map((s) => <p key={s.id}>{s.name}</p>)}
      </Card>
    </div>
  );
};
