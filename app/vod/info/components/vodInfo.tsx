import React from "react";
import { API_KEY } from "@/app/data/secret";
import InfoBtn from "./infoBtn";

export default async function VodInfo(props: any) {
  const { id } = props.params;
  const url = `https://omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}`;
  const resp = await fetch(url);
  const data = await resp.json();

  return (
    <div className="container text-center col-md-9">
      <img
        src={data.Poster}
        alt={data.Title}
        className="img-fluid col-3 my-3"
      />
      <h2 className="center">{data.Title}</h2>
      <div>Runtime: {data.Runtime}</div>
      <div>Rating: {data.Rating}</div>
      <div>Genre: {data.Genre}</div>
      <p>Plot: {data.Plot}</p>
      <InfoBtn />
    </div>
  );
}
