import { 
  ChakraProvider,
  Button 
} from "@chakra-ui/react"
import { login } from "../../services/login"

export const ButtonLogin = () => {
  return (
    <ChakraProvider>
      <Button colorScheme='green' variant='outline' width='100%' marginTop='20px' onClick={login}>
        Button
      </Button>
    </ChakraProvider>
  )
}