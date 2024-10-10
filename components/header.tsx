"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">MJ</Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Button variant={pathname === '/' ? 'default' : 'ghost'} asChild>
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant={pathname === '/blog' ? 'default' : 'ghost'} asChild>
                <Link href="/blog">Blog</Link>
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header