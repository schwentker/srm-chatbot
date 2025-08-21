import { useRouter } from 'next/navigation'

export function useNavigation() {
  const router = useRouter()
  
  const push = (path: string) => {
    // Detect if we're in subpath environment
    const isSubpath = window.location.pathname.startsWith('/srm-chatbot')
    const fullPath = isSubpath ? `/srm-chatbot${path}` : path
    router.push(fullPath)
  }
  
  return { push }
}