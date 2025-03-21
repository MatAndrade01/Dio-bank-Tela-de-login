import { ChakraProvider, Center} from "@chakra-ui/react"

export const Header = () => {
  return (
    <ChakraProvider>
      <Center backgroundColor='teal' color='white' width='100px' height='100px' borderRadius='100%'>Dio Bank</Center>
    </ChakraProvider>
  )
}