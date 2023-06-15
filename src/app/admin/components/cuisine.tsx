"use client";

import React, { useState, useEffect } from "react";
import { Card, Textfield, Textarea } from "@/components";

interface ICuisine {
  name: string;
  id: number;
}

export const CuisineForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [cuisines, setCuisines] = useState<ICuisine[] | null>(null);

  const getCuisines = async () => {
    fetch("/api/cuisines")
      .then((res) => res.json())
      .then((data) => {
        setCuisines(data);
      });
  };

  const handleAddCuisine = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch(`/api/cuisines`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then(async (res) => {
        setName("");
        setDescription("");
        setImage("");
        setAddress("");
        await getCuisines();
      })
      .then((data) => {});
  };

  useEffect(() => {
    getCuisines();
  }, []);

  return (
    <div className="flex gap-2">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Add Cuisine</h2>

        <form onSubmit={handleAddCuisine}>
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
        <h2 className="text-2xl font-bold mb-4">Cuisine list</h2>
        {cuisines && cuisines.map((s) => <p key={s.id}>{s.name}</p>)}
      </Card>
    </div>
  );
};
