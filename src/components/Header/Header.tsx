import { ChakraProvider, Center} from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../../App"

export const Header = () => {

  const context = useContext(AppContext)
  console.log('retorno do Header', context)


  return (
    <ChakraProvider>
      <Center backgroundColor='teal' color='white' width='100px' height='100px' borderRadius='100%'>Dio Bank</Center>
    </ChakraProvider>
  )
}