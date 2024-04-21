import { API_KEY } from "@/app/data/secret";
import VodItem from "./vodItem";

export default async function VodList(props: any) {
  const searchQ = props.searchParams?.s || "lego";
  const url = `https://omdbapi.com/?s=${searchQ}&apikey=${process.env.API_KEY}`;
  const resp = await fetch(url);
  const data = await resp.json();
  const vod_ar = data.Search;

  // Demo Loading
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log("Loaded");
  //     resolve("Loaded");
  //   }, 2500);
  // });

  if (!vod_ar) {
    return (
      <div className="container">
        <h2>Movies Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>List Of Shows:</h1>

      <div className="row">
        {vod_ar.map((item: any) => {
          return <VodItem key={item.imdbID} item={item} />;
        })}
      </div>
    </div>
  );
}
