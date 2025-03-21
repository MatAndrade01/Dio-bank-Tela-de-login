import {
  Box,
  ChakraProvider,
  Center,
  Input,
} from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { ButtonLogin } from "./Button/Button"
import {  useState, useEffect} from "react"
import { login } from "../services/login"
import { api } from "../api"

interface UserData {
  email: string,
  password: string,
  name: string
}

export const Card = () => {
  const [email, setEmail] = useState<string>('')
  const [userData, setUseData] = useState<null | UserData>()

  useEffect(() => {
    const getData = async () => {
      const data:any | UserData= await api
      setUseData(data)
    }
    getData()
  }, [])

  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#5d1b81' padding='25px'>
        <Center>
          <Header />
        </Center>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' marginTop='40px'>
          <Center>
          {userData === null || userData === undefined ?
            <h1>Loading...</h1> :
            <h1>Informações carregadas</h1>
          }
          </Center>
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