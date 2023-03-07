import React from 'react';
import { ChakraProvider, Heading, Text, Container, Button, Image, Input } from '@chakra-ui/react'
import { Route, Routes, Link } from "react-router-dom";

import Richard from "./assets/richard.svg";

export default function App() {
  return (
    <Routes>
      <Route index element={<Base />} />
      <Route path="explanation" element={<Explanation />} />
      <Route path="result" element={<Result />} />
      <Route path="*" element={<Base />} />
    </Routes>
  );
}

function Base() {
  return(
    <ChakraProvider>
    <Container>
      <center>

        <Container my="5">
        <Heading>I am Richard.</Heading>
        <Text>I am an artifical intelligence dedicated to...</Text>
        </Container>

        <Container my="5">
          <Image src={ Richard } alt="" />
        </Container>

        <Container my="5">
        <Container borderColor="gray.300" borderStyle="dashed" borderWidth="2px" rounded="md" shadow="sm" padding="5">
          <Heading fontSize="lg" color="gray.700" fontWeight="bold">Drop Image Here</Heading>
          <Text fontWeight="light">or click to upload</Text>
          <Input type="file" height="100%" width="100%" top="0" left="0" opacity="0" aria-hidden="true" accept="image/*" />
        </Container>
        </Container>

        <Button>Insult Me</Button>

        <Link to="/explanation">
          <Text fontWeight="light" fontSize="sm" color="gray.500">Learn More Here</Text>
        </Link>

      </center>
    </Container>
    </ChakraProvider>
  )
}

function Result() {
  return(
    <ChakraProvider>
    </ChakraProvider>
  );
}

function Explanation() {
  return(
    <ChakraProvider>
      <Container my="5">
        <Text>Here we will explain!! So much explanation! Explaining and explaining and explaining and explaining !! Not complaining !! Explaining !! Like there was plaining but then we broke up so now there is explaining. </Text>
      </Container>

      <Container>
        <Link to="/">
          <Text fontWeight="light" fontSize="sm" color="gray.500">Go Back</Text>
        </Link>
      </Container>
    </ChakraProvider>
  )
}
