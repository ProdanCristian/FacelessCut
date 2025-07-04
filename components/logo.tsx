import Link from 'next/link'
import { Major_Mono_Display } from 'next/font/google'

const majorMonoDisplay = Major_Mono_Display({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center gap-2 text-foreground hover:opacity-80 transition-opacity cursor-pointer">
      <span className={`text-3xl ${majorMonoDisplay.className}`}>VidsReels</span> 
    </Link>
  );  
}