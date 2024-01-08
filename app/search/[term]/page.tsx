import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
    if (!term) notFound();

    const termToUse = decodeURI(term);

    // API call to get the movies
    // API call to get the Pupular movies

    
    
  return (
    <div>
      <h1>Search Page {termToUse}</h1>
    </div>
  );
}

export default SearchPage;
