import { SearchResults } from "@/typings";

async function fetthFromTMDB(url:URL, cacheTime?:number) {
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");    

    const options: RequestInit= {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
            accept: "application/json"
        },
        next:{
            revalidate: cacheTime || 60 * 60 * 24 // 24 hours default
        }
    };

    const response = await fetch(url.toString(), options);
    const data = await response.json() as SearchResults;
    return data;
}

export async function getUpcomingMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
    const data= await fetthFromTMDB(url);
    return data.results;
}

export async function getPopularMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/popular");
    const data= await fetthFromTMDB(url);
    return data.results;
}

export async function getTopRatedMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
    const data= await fetthFromTMDB(url);
    return data.results;
}

export async function getDiscoverMovies(id?:string, keywords?:string) {
    const url = new URL("https://api.themoviedb.org/3/discover/movie");
    if (id) url.searchParams.set("with_genres", id);
    if (keywords) url.searchParams.set("with_keywords", keywords);
    const data= await fetthFromTMDB(url);
    return data.results;
}

export async function getSearchedMovies(query:string) {
    const url = new URL("https://api.themoviedb.org/3/search/movie");
    url.searchParams.set("query", query);
    const data= await fetthFromTMDB(url);
    return data.results;
}