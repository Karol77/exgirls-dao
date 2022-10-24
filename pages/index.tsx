import { useEffect } from 'react'
import { useRouter } from 'next/router'
const Index = () => {
  const router = useRouter()
  
  useEffect(() => {
    const { REALM } = 'MNG'
    const mainUrl = REALM ? `/dao/${REALM}` : '/realms'
    router.replace(mainUrl)
  }, [])

  return null
}

export default Index
