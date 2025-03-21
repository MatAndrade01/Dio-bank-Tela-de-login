import { 
  ChakraProvider,
  Button 
} from "@chakra-ui/react"
import { MouseEventHandler } from "react"


interface IDButton {
  onClick: MouseEventHandler
}

export const ButtonLogin = ({onClick}: IDButton) => {
  return (
    <ChakraProvider>
      <Button colorScheme='green' variant='outline' width='100%' marginTop='20px' onClick={onClick}>
        Button
      </Button>
    </ChakraProvider>
  )
}