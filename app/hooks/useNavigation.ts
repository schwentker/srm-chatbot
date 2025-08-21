'use client'
import { useRouter } from 'next/navigation'

export function useNavigation() {
  const router = useRouter()
  
  const push = (path: string) => {
    console.log('Navigation Debug:', {
      hostname: window.location.hostname,
      pathname: window.location.pathname,
      originalPath: path
    })
    
    // Always prefix with /srm-chatbot when we're on sandboxlabs.ai
    if (typeof window !== 'undefined' && window.location.hostname === 'sandboxlabs.ai') {
      const fullPath = `/srm-chatbot${path}`
      console.log('Using sandboxlabs.ai logic, navigating to:', fullPath)
      window.location.href = fullPath  // Force full page navigation to trigger Worker
    } else {
      console.log('Using direct pages logic, navigating to:', path)
      router.push(path)  // Normal client-side routing for direct Cloudflare Pages
    }
  }
  
  return { push }
}
