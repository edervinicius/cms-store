"use client";

import React, { useState, useEffect } from "react";
import { Card, Textarea, Textfield, Select } from "@/components";

export const MenuForm = () => {
  const [products, setProducts] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [stores, setStores] = useState();
  const [storeId, setStoreId] = useState<number>(0);

  const getProducts = async () => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  const getStores = async () => {
    fetch("/api/stores")
      .then((res) => res.json())
      .then((data) => {
        const cuisineOptions = data.map((v) => {
          return { value: v.id, label: v.name };
        });
        if (cuisineOptions.length) {
          setStoreId(cuisineOptions[0].value);
          setStores(cuisineOptions);
        }
      });
  };
  const deleteProduct = async (id: number) => {
    fetch(`/api/products/${id}`, {
      method: "DELETE",
    })
      .then(async (res) => await getProducts())
      .then((data) => {});
  };
  const handleAddProduct = async (e) => {
    e.preventDefault();
    fetch(`/api/products`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, storeId, image, description }),
    })
      .then(async (res) => {
        setName("");
        setImage("");
        setPrice(0);
        setDescription("");
        await getProducts();
      })
      .then((data) => {});
  };

  useEffect(() => {
    getProducts();
    getStores();
  }, []);

  return (
    <div className="flex gap-2">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>

        <form onSubmit={handleAddProduct}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-gray-700 block mb-1 font-semibold"
            >
              Restaurant:
            </label>
            <Select
              onChange={(e) => setStoreId(parseInt(e.target.value, 10))}
              options={stores}
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
              htmlFor="price"
              className="text-gray-700 block mb-1 font-semibold"
            >
              Price:
            </label>
            <Textfield
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value, 10))}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="text-gray-700 block mb-1 font-semibold"
            >
              Image:
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
        <h2 className="text-2xl font-bold mb-4">Product list</h2>
        {products && products.map((s) => <p key={s.id}>{s.name}</p>)}
      </Card>
    </div>
  );
};
