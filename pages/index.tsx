import { useEffect } from 'react'
import { useRouter } from 'next/router'
const Index = () => {
  const router = useRouter()
  
  const { REALM } = process.env
  const mainUrl = REALM ? `/dao/MNGO` : '/dao/MNGO'
  router.replace(mainUrl)
  
  useEffect(() => {
    const { REALM } = process.env
    const mainUrl = REALM ? `/dao/MNGO` : '/dao/MNGO'
    router.replace(mainUrl)
  }, [])

  return null
}

export default Index
