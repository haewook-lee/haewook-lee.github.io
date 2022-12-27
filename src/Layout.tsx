import React, { ReactNode } from "react"
import Head from "next/head"
import Container from "@mui/material/Container"
import NavBar from "../src/NavBar"
import ToolBar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import bg from "./img/background.jpg"
import Fade from "react-reveal/Fade"

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Haewook Lee</title>
        <meta name="description" content="Haewook Lee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <ToolBar />
      <Container maxWidth="lg" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <main>
          <Fade duration={1500} distance={"12%"} bottom>
            {children}
          </Fade>
        </main>
      </Container>
      <Box
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundPositionX: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "50vh",
        }}
      />
    </>
  )
}