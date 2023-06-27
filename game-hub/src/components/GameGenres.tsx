import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Genre } from "../hooks/useGenre";

interface Props {
  genres: Genre[];
}

const GameGenre = ({ genres }: Props) => {
  return (
    <HStack marginY={1}>
      {genres.map((genre, index) => (
        <Text key={genre.id}>
          {genre.name}
          {index != genres.length - 1 && ","}
        </Text>
      ))}
    </HStack>
  );
};

export default GameGenre;
