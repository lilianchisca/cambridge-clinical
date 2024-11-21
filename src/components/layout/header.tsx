'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useRect } from '@reach/rect'
import { Squash as Hamburger } from 'hamburger-react'
import { ChevronLeft, ChevronRight, Search, ShoppingBag, User } from 'lucide-react'
import { useLockedBody } from 'usehooks-ts'

import { ThemeOptionsProps } from '@/lib/theme-options'

import LoginForm from '@/components/forms/login-form'

export default function Header({ menu }: { menu: ThemeOptionsProps['headerMenu'] }) {
  const [_locked, setLocked] = useLockedBody()
  const [showLogin, showLoginSet] = useState(false)
  const [headerHeight, setHeaderHeight] = useState<number | null>(null)
  const [headerHeightInitialized, headerHeightInitializedSet] = useState(false)
  const [isOpen, isOpenSet] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerRect = useRect(headerRef)
  const router = useRouter()
  const [hoveredParent, hoveredParentSet] = useState<string | null>(null)

  useEffect(() => {
    if (headerRect) {
      setHeaderHeight(headerRect.height)
    }
  }, [headerRect])

  useEffect(() => {
    if (headerHeight) {
      document.body.style.setProperty('--header-height', `${headerHeight / 16}rem`)
    }
    if (!headerHeightInitialized && headerHeight) {
      document.body.style.setProperty('--header-height-initial', `${headerHeight / 16}rem`)
      headerHeightInitializedSet(true)
    }
  }, [headerHeight, headerHeightInitialized])

  useEffect(() => {
    if (isOpen || showLogin) {
      setLocked(true)
    } else {
      setLocked(false)
    }
  }, [isOpen, setLocked, showLogin])

  function navigateAndClose(url: string) {
    isOpenSet(false)
    router.push(url)
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-100 bg-primary-600 pb-30 pt-header-height text-white transition-all ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {menu?.map((item) => (
          <div
            className="relative border-t border-white/20 last-of-type:border-b"
            key={item?.link?.title}
          >
            <button
              className="block w-full appearance-none px-15 py-20 text-left text-22 leading-none md:py-20 md:text-25"
              onClick={() => navigateAndClose(item?.link?.url ?? '/')}
            >
              <span dangerouslySetInnerHTML={{ __html: item?.link?.title ?? '' }}></span>
            </button>
            {item?.subMenu && item?.subMenu.length > 0 && (
              <button
                className="absolute inset-y-0 right-0 flex w-60 items-center justify-center border-l border-white/20 text-white"
                onClick={() => hoveredParentSet(item?.link?.title ?? '')}
                aria-label="Open sublinks"
              >
                <span
                  className={`transition-all ${
                    hoveredParent === item?.link?.title ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <ChevronRight className="w-20" />
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
      {menu?.map(
        (item) =>
          item?.subMenu &&
          item?.subMenu.length > 0 && (
            <div
              key={item?.link?.title}
              className={`fixed inset-0 z-100 bg-primary-600 pb-30 pt-header-height text-white transition-all lg:hidden ${
                hoveredParent === item?.link?.title ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="relative border-t border-white/20">
                <button
                  className="relative block w-full appearance-none py-20 pl-75 pr-15 text-left text-22 leading-none md:py-20 md:text-25"
                  onClick={() => hoveredParentSet(null)}
                >
                  <span className="absolute inset-y-0 left-0 flex w-60 items-center justify-center border-r border-white/20 text-white">
                    <ChevronLeft className="w-20" />
                  </span>
                  Back
                </button>
              </div>
              {item?.subMenu.map((sublink) => (
                <div
                  className="relative border-t border-white/20 last-of-type:border-b"
                  key={sublink?.link?.url ?? ''}
                >
                  <button
                    className="block w-full appearance-none px-15 py-20 text-left text-22 leading-none md:py-20 md:text-25"
                    onClick={() => navigateAndClose(sublink?.link?.url ?? '')}
                  >
                    <span dangerouslySetInnerHTML={{ __html: sublink?.link?.title ?? '' }}></span>
                  </button>
                </div>
              ))}
            </div>
          )
      )}
      {menu?.map(
        (item) =>
          item?.subMenu &&
          item?.subMenu.length > 0 && (
            <div
              key={item?.link?.title}
              onMouseEnter={() => hoveredParentSet(null)}
              className={`fixed inset-x-0 top-0 z-100 hidden bg-primary-400 p-20 text-white transition-all hover:translate-y-0 lg:block ${
                hoveredParent === item?.link?.title ? 'translate-y-0' : '-translate-y-full'
              }`}
            >
              <div className="flex items-center justify-center pt-header-height">
                {item?.subMenu?.map((sublink) => (
                  <Link
                    className="mx-15 text-12 font-bold uppercase transition-all hover:opacity-50 2lg:text-16 xl:mx-25"
                    href={sublink?.link?.url ?? '/'}
                    key={sublink?.link?.title}
                  >
                    <span dangerouslySetInnerHTML={{ __html: sublink?.link?.title ?? '' }}></span>
                  </Link>
                ))}
              </div>
            </div>
          )
      )}
      <header className="fixed inset-x-0 top-0 z-150">
        <div
          ref={headerRef}
          className="bg-primary-600 p-10 text-white shadow-header md:py-20 lg:px-20 xl:pr-30 2xl:pr-40"
        >
          <div className="flex justify-between">
            <Link href="/" className="inline-block shrink-0 xl:w-169 2xl:w-199">
              <Image
                src="/images/logo-white.png"
                alt="Cambridge Clinical"
                priority={true}
                className="h-55 w-120 lg:h-47 lg:w-100 2lg:h-55 2lg:w-120 xl:h-79 xl:w-169 2xl:h-93 2xl:w-199"
                width={199}
                height={93}
              />
            </Link>

            <nav className="hidden lg:flex">
              {menu?.map((item) => (
                <div
                  className="flex h-full items-center"
                  key={item?.link?.title}
                  onMouseEnter={() => hoveredParentSet(item?.link?.title ?? '')}
                >
                  <Link
                    className="c-linkline ml-20 text-12 font-bold uppercase leading-loose text-white 2lg:text-14 xl:ml-25 2xl:ml-35"
                    href={item?.link?.url ?? '/'}
                    dangerouslySetInnerHTML={{ __html: item?.link?.title ?? '' }}
                  />
                </div>
              ))}
            </nav>

            <nav className="flex items-center">
              <button
                className="ml-20 transition-all hover:opacity-80 xl:ml-30 2xl:ml-35"
                aria-label="Show Search"
              >
                <Search className="w-25 lg:w-20 xl:w-25" />
              </button>
              <button
                className="ml-20 transition-all hover:opacity-80 xl:ml-30 2xl:ml-35"
                aria-label="My Account"
                onClick={() => showLoginSet(true)}
              >
                <User className="w-25 lg:w-20 xl:w-25" />
              </button>
              <button
                className="ml-20 transition-all hover:opacity-80 xl:ml-30 2xl:ml-35"
                aria-label="Cart"
              >
                <ShoppingBag className="w-25 lg:w-20 xl:w-25" />
              </button>
              <span className="ml-15 lg:hidden">
                <Hamburger label="Open Menu" toggled={isOpen} toggle={isOpenSet} size={25} />
              </span>
            </nav>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-150 transition-all ${
          showLogin ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <LoginForm showLoginSet={showLoginSet} />
      </div>
    </>
  )
}
