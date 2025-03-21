import {
  Box,
  ChakraProvider,
  Center,
  Input,
} from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { ButtonLogin } from "./Button/Button"
import {  useState } from "react"
import { login } from "../services/login"

export const Card = () => {
  const [email, setEmail] = useState('')


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
          <Input placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Input placeholder="Password" type="password" />
          <Center>
            <ButtonLogin onClick={() => {login(email)}}/>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  )
}