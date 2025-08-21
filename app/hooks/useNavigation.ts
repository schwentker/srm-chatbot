'use client'
import { useRouter } from 'next/navigation'

export function useNavigation() {
  const router = useRouter()
  
  const push = (path: string) => {
    // Always prefix with /srm-chatbot when we're on sandboxlabs.ai
    if (typeof window !== 'undefined' && window.location.hostname === 'sandboxlabs.ai') {
      const fullPath = `/srm-chatbot${path}`
      window.location.href = fullPath  // Force full page navigation to trigger Worker
    } else {
      router.push(path)  // Normal client-side routing for direct Cloudflare Pages
    }
  }
  
  return { push }
}