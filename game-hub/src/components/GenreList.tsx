import { HStack, Text } from "@chakra-ui/react";
import React from "react";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface Props {
  genres: Genre[];
}

const GenreList = ({ genres }: Props) => {
  return (
    <HStack marginY={1}>
      {genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </HStack>
  );
};

export default GenreList;
