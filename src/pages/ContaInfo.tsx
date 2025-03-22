import { Center, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const ContaInfo = () => {
  return (
    <>
      <Text fontSize='3xl' fontWeight='bold' color='white'>
        <Center>
          Informações da conta
        </Center>
      </Text>
      <Link to='/conta/1'>
        <Text fontSize='2xl' color='white' marginTop='20px'>
          <Center>
            Conta
          </Center>
        </Text>
      </Link>
    </>

  )
}