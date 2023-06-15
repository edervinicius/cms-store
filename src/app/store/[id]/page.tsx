"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import {
  Page,
  CountingStars,
  Alert,
  Textarea,
  Textfield,
  Button,
  Pill,
  Loading,
  Select,
} from "@/components";
import { formatPrice, roundRating } from "@/utils";

interface IComment {
  comment: string;
  createdAt: string;
  id: number;
  rating: number;
  storeId: number;
  updatedAt: string;
  user: { id: number; name: string; createdAt: string; updatedAt: string };
  product?: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}
interface IMenu {
  name: string;
  description: string;
  price: number;
  image: string;
}
interface IProduct {
  name: string;
  id: number;
}
interface IProductOptions {
  label: string;
  value: number;
}

export default function Store({ params }: { params: { id: number } }) {
  const [name, setName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [menu, setMenu] = useState<IMenu[]>();
  const [comment, setComment] = useState<string>("");
  const [ratingValue, setRatingValue] = useState<number>(0.5);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const [productId, setProductId] = useState<number>(0);
  const [productOptions, setProductOptions] = useState<IProductOptions[]>();

  const getRating = async () => {
    fetch(`/api/ratings/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        const sum = data.reduce(
          (accumulator: number, item: any) => accumulator + item.rating,
          0
        );
        setRating(roundRating(sum / data.length));
      });
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitted(true);
    fetch(`/api/ratings`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        comment,
        rating: ratingValue,
        storeId: params.id,
        productId,
      }),
    })
      .then(async (res) => {
        await getRating();
      })
      .then((data) => {});
  };

  const getStores = async () => {
    fetch(`/api/stores/${params.id}`)
      .then((res) => res.json())
      .then(async (data) => {
        setName(data.name);
        setAddress(data.address);
        setDescription(data.description);
        setImage(data.image);
        setMenu(data.products);
        let prodOpts = [{ value: 0, label: "none" }];
        data.products.map((v: IProduct) => {
          prodOpts.push({ value: v.id, label: v.name });
        });
        setProductOptions(prodOpts);
        await getRating();
      });
  };

  useEffect(() => {
    getStores();
  }, []);

  if (!name)
    return (
      <div className="flex justify-center items-center py-96">
        <Loading />
      </div>
    );

  return (
    <Page
      header={{
        title: name,
        breadcrumbItems: [
          {
            label: "Store",
            link: "",
          },
        ],
      }}
      content={
        <div className="flex flex-col md:flex-row p-8 bg-white rounded-md">
          <div className="md:w-1/2">
            <img className="w-full h-auto rounded-lg" src={image} alt={name} />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-2xl font-bold mb-4">{name}</h1>
            <div className="flex items-center mb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {rating}
              </span>
              <CountingStars rating={rating} />
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Address:</span> {address}
            </p>
            <hr className="my-6" />

            <h2 className="text-xl font-bold mb-2">Menu</h2>
            {menu && menu.length > 0 ? (
              <ul className="grid grid-cols-2 gap-4">
                {menu.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 mb-2 flex items-center"
                  >
                    <img
                      className="w-12 h-12 rounded-lg mr-4"
                      src={item.image}
                      alt={item.name}
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>{item.description}</p>
                      <p className="text-gray-600">{formatPrice(item.price)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No items on the menu.</p>
            )}

            <hr className="my-6" />

            <h2 className="text-xl font-bold mb-2">Leave a Review</h2>
            {submitted ? (
              <Alert message="Review submitted successfully!" type="success" />
            ) : (
              <form onSubmit={handleSubmit} className="max-w-min">
                <div className="mb-4">
                  <label
                    htmlFor="comment"
                    className="text-gray-700 block mb-1 font-semibold"
                  >
                    Your name:
                  </label>
                  <Textfield
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="text-gray-700 block mb-1 font-semibold"
                  >
                    Product:
                  </label>
                  <Select
                    options={productOptions}
                    onChange={(e) => setProductId(parseInt(e.target.value, 10))}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="comment"
                    className="text-gray-700 block mb-1 font-semibold"
                  >
                    Comment:
                  </label>
                  <Textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="rating"
                    className="text-gray-700 block mb-1 font-semibold"
                  >
                    Rating:
                  </label>
                  <Textfield
                    type="number"
                    id="rating"
                    min={0.5}
                    max={5}
                    step={0.5}
                    value={ratingValue}
                    onChange={(e) => setRatingValue(parseFloat(e.target.value))}
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            )}

            <hr className="my-6" />

            <h2 className="text-xl font-bold mb-2">Comments</h2>
            {comments && comments.length > 0 ? (
              <ul className="mb-4 divide-y divide-slate-100">
                {comments.map((comment, index) => (
                  <li key={index} className="text-gray-700 py-2">
                    <p className="flex items-center gap-4 mb-2">
                      <b>{comment.user.name}</b>
                      <small className="bg-slate-100 text-xs py-1 px-2 rounded-lg">
                        {moment(comment.createdAt).format("YYYY-MM-DD")}
                      </small>
                    </p>
                    {comment.product ? (
                      <div className="flex items-start justify-start space-x-4">
                        <div className="w-1/6">
                          <img
                            src={comment.product.image}
                            alt="Imagem"
                            className="h-auto max-w-full rounded-md"
                          />
                        </div>
                        <div className="w-2/3">
                          <h2 className="text-sm font-bold">
                            {comment.product.name}
                          </h2>
                          <p className="text-gray-600">{comment.comment}</p>
                        </div>
                      </div>
                    ) : (
                      <p>{comment.comment}</p>
                    )}

                    <div className="flex items-center py-2 gap-1">
                      <Pill
                        text={comment.rating.toString()}
                        color={
                          comment.rating > 4
                            ? "success"
                            : comment.rating > 2.5
                            ? "warning"
                            : comment.rating > 0.5
                            ? "error"
                            : "light"
                        }
                      />
                      <CountingStars rating={comment.rating} />
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No comments yet.</p>
            )}
          </div>
        </div>
      }
    />
  );
}
