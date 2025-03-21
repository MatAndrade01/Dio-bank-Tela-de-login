import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { CardInfo } from "../components/CardInfo/CardInfo"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { AppContext } from "../App"

interface UserData {
  email: string,
  password: string,
  name: string,
  balance: number,
  id: string
}

export const Conta = () => {

  const context = useContext(AppContext)
  console.log('Retorno da pagina conta', context)

  const [userData, setUseData] = useState<null | UserData>()

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUseData(data)
    }
    getData()
  }, [])

  const actualData = new Date()

  const { id } = useParams()
  const navigate = useNavigate()

  if(userData && id !== userData.id) {
    navigate('/')
  }

  return(
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {
          userData === undefined || userData === null ?
          (
            <Center>
              <Spinner size='xl' color="white"/>
            </Center>
          ) :
          (
            <>
              <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDate()}/${actualData.getMonth() + 1}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>

              <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`}/>
            </>
          )
        }
      </SimpleGrid>
    </Center>
  )
}