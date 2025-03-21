import {
  Box,
  ChakraProvider,
  Center,
  Input,
} from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { ButtonLogin } from "./Button/Button"

export const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#5d1b81' padding='25px'>
        <Center>
          <Header />
        </Center>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' marginTop='40px'>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Center>
            <ButtonLogin />
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  )
}