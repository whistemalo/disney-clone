import React from "react";

type Props = {
  params: {
    id: string;
  };
    searchParams: {
        genre: string;
    };
};

function page({ params: { id } , searchParams: {genre} }: Props) {
  return <div>
        <h1>Genre Page: {id}</h1>
        <h2>Genre: {genre}</h2>

  </div>;
}

export default page;
