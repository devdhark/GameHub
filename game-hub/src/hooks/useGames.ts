import { Platform } from "../components/PlatformIconList";
import { Genre } from "./useGenres";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[]
}

const useGames = () => useData<Game>('/games')

export default useGames;