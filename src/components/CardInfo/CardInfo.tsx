import { Box, Text} from "@chakra-ui/react"

interface ICardInfo {
  mainContent: string,
  content: string
}

export const CardInfo = ({ mainContent, content}: ICardInfo) => {
  return (
    <Box backgroundColor='#ffffff' minHeight='120px' padding='20px' borderRadius='25px'>
      <Text fontSize='2xl' fontWeight='bold'>
        {mainContent}
      </Text>
      <Text fontSize='xl'>
        {content}
      </Text>
    </Box>
  )
}