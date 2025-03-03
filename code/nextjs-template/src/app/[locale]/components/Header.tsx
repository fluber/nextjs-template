'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import { Menu } from 'lucide-react'  // 引入 lucide-react 的 Menu 圖示

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  const [menuOpen, setMenuOpen] = useState(false)  // 添加 useState 來控制菜單的開關狀態

  // 點擊任何連結後關閉菜單
  const handleMenuItemClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-background shadow-sm z-50 transition-colors">
      <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
        <Link lang={locale} href='/'>
          <div className='flex flex-row items-center'>
            <div className='mb-2 h-14 w-14'>
              <LogoIcon />
            </div>
            <strong className='mx-2 select-none'>Winerva</strong>
          </div>
        </Link>
        <div className="flex flex-row items-center gap-3">
          {/* Desktop Nav (Hidden on small screens) */}
          <nav className="mr-10 hidden md:inline-flex gap-5">
            <a href="https://blog.winerva.com" target="_blank">
              {t('Blog')}
            </a>
            <a href="https://github.com/fluber/" target="_blank">
              GitHub
            </a>
            <a href="https://hub.docker.com/search?q=winerva" target="_blank">
              DockerHub
            </a>
            <Link lang={locale} href="/about">
              {t('About')}
            </Link>
            <Link lang={locale} href="/portfolio">
              {t('Practical_examples')}
            </Link>
            <Link lang={locale} href="/contact">
              {t('Support')}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center gap-3"
            onClick={() => setMenuOpen(!menuOpen)}  // 切換菜單的開關狀態
          >
            <Menu size={28} />  {/* 使用 lucide-react 的 Menu 圖示 */}
          </button>

          {/* Mobile Menu (Shown when menuOpen is true) */}
          {menuOpen && (
            <div className="md:hidden flex flex-col items-center gap-4 bg-background p-4 shadow-md">
              <a href="https://blog.winerva.com" target="_blank" onClick={handleMenuItemClick}>
                {t('Blog')}
              </a>
              <a href="https://github.com/fluber/" target="_blank" onClick={handleMenuItemClick}>
                GitHub
              </a>
              <a href="https://hub.docker.com/search?q=winerva" target="_blank" onClick={handleMenuItemClick}>
                DockerHub
              </a>
              <Link lang={locale} href="/about" onClick={handleMenuItemClick}>
                {t('About')}
              </Link>
              <Link lang={locale} href="/portfolio" onClick={handleMenuItemClick}>
                {t('Practical_examples')}
              </Link>
              <Link lang={locale} href="/contact" onClick={handleMenuItemClick}>
                {t('Support')}
              </Link>
            </div>
          )}

          {/* Right side icons */}
          <div className="flex items-center gap-3">
            <ThemeSwitch />
            <LangSwitcher />
            <a href="https://github.com/yahyaparvar/nextjs-template" target="_blank">
              <div className="size-8">
                <GithubIcon />
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
