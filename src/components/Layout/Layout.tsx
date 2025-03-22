import { Box, Center } from "@chakra-ui/react"
import { Header } from "../Header/Header"

export const Layout = ({children}: any) => {
  return (
    <Box minHeight='100vh' backgroundColor='#5d1b81' padding='25px'>
      <Center>
        <Header />
      </Center>
      { children }
    </Box>
  )
}