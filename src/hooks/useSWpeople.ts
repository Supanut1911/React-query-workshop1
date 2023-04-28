import { useQuery } from '@tanstack/react-query'

import { queryKeys } from '@/constant/queryKeys'

import { SwPeople } from '@/types/SwPeople.interface'

const swpeopleURL = 'https://swapi.dev/api/people'

const swPeopleFetcher = async () => {
  const response = await fetch(swpeopleURL)
  const responseJSON = await response.json()

  return responseJSON.results
}

const useSWPeople = () => {
  const fallback: SwPeople[] = []
  const { data = fallback, isLoading } = useQuery(
    [queryKeys['sw-people']],
    () => {
      return swPeopleFetcher()
    }
  )
  // console.log('1111 =>', data)

  const swpeoples = data as SwPeople[]
  return { swpeoples, isLoading }
}

export default useSWPeople
