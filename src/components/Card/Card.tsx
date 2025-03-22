import {
  Box,
  ChakraProvider,
  Center,
  Input,
} from "@chakra-ui/react"
import { ButtonLogin } from "../Button/Button"
import { useState } from "react"
import { login } from "../../services/login"


export const Card = () => {
  const [email, setEmail] = useState<string>('')

  return (
    <ChakraProvider>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' marginTop='40px'>
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <Input placeholder="Password" type="password" />
        <Center>
          <ButtonLogin onClick={() => { login(email) }} />
        </Center>
      </Box>
    </ChakraProvider>
  )
}