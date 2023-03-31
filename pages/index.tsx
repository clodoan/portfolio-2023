import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "styled-components";
import content from "../content/content.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <h1>{content.home.title}</h1>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
`;
