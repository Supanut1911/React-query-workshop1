import { useEffect } from 'react'

import useSWPeople from '@/hooks/useSWpeople'

const SwpeopleView = () => {
  const { swpeoples, isLoading } = useSWPeople()

  useEffect(() => {
    console.log('swpeoples', swpeoples)
  }, [])

  if (isLoading) return <div>loading...</div>

  return (
    <>
      <div>
        {swpeoples.map((item) => {
          return <li key={item.name}>{JSON.stringify(item)}</li>
        })}
      </div>
    </>
  )
}

export default SwpeopleView
