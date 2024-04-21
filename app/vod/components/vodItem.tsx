import Link from "next/link";

export default function VodItem(props: any) {
  const item = props.item;

  return (
    <div className="col-md-6 p-2 border">
      <img src={item.Poster} className="float-start me-2 w-25" />
      <h4>{item.Title}</h4>
      <div>Year: {item.Year}</div>
      <Link href={`/vod/info/${item.imdbID}`} className="btn btn-dark">
        More Info
      </Link>
    </div>
  );
}
