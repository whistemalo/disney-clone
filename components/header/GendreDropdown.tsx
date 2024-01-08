import { Genres } from "@/typings"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"


async function GendreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US"

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${process.env.TMDB_API_KEY}`
    },
    next: {
      revalidate: 60 * 60 * 24,// 24 hours
    },
  }

  const response = await fetch(url, options)
  const data = (await response.json())  as Genres
  console.log(data)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center
      items-center">
        Gendre
        <ChevronDown className="ml-1"/>

      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[15rem]">
        <DropdownMenuLabel>Movie</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map((genre) => (
          <Link href={`/genre/${genre.id}`} key={genre.id}>
            <DropdownMenuItem>{genre.name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>


      </DropdownMenu>
  )
}

export default GendreDropdown