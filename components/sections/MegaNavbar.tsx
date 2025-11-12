// components/Navigation/MegaNavbar.tsx
'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import ThemeToggle from '../theme-toggle'

// Types
interface NavLinks {
    label: string;
    href: string;
}

// Navigation Data
const navLinks: NavLinks[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Mission & Vision', href: '/mission&vision' },
    { label: 'Student Projects', href: '/projects' },
    { label: 'Faculties', href: '/faculty' },
    { label: 'Courses', href: '/courses' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Videos', href: '/videos' },
    { label: 'Contact', href: '/contact' },
];


// NavLink Component
const NavLink: React.FC<{ item: NavLinks; onClick: () => void }> = ({ item, onClick }) => {
    const pathname = usePathname()

    return (
        <li className='w-full'>
            <Link
                href={item.href}
                onClick={onClick}
                className={`block px-6 py-5 text-xl   transition-all duration-300 border-b border-black/10 dark:border-white/10 ${pathname === item.href
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
            >
                {item.label}
            </Link>
        </li>
    )
}

// Logo Component
const Logo: React.FC = () => {
    return (
        <Link href='/' className='flex items-center'>
            <div className="w-15 h-15 flex items-center justify-center">
                <img
                    src="/u-robo.png"
                    alt="U-Fill Academy Logo"
                    className="w-full h-full object-contain select-none"
                />
            </div>
            <span className="flex items-center">
                {/* Big U */}
                <span className="text-blue-500 text-7xl font-extrabold leading-none mr-1">
                    U
                </span>

                {/* FILL + ACADEMY stacked closely */}
                <span className="flex flex-col leading-[0.9]">
                    <span className="text-black dark:text-white text-2xl font-bold">
                        FILL
                    </span>
                    <span className="text-black dark:text-white text-sm font-medium tracking-tight">
                        ACADEMY
                    </span>
                </span>
            </span>

        </Link>
    )
}

// Main Header Component
const MegaNavbar: React.FC = () => {
    const [sticky, setSticky] = useState(false)
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()

    const sideMenuRef = useRef<HTMLDivElement>(null)

    // Ensure component is mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    const handleClickOutside = (event: MouseEvent) => {
        if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
            setNavbarOpen(false)
        }
    }

    const handleScroll = useCallback(() => {
        setSticky(window.scrollY >= 50)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handleScroll])

    const isHomepage = pathname === '/'

    // Theme toggle handler
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    // Close mobile menu
    const closeMobileMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <header
            className={`fixed h-20 py-1 z-50 w-full transition-all duration-700 ease-in-out lg:px-0 px-4 ${sticky ? "top-3" : "top-0"
                }`}
        >
            <nav
                className={`container mx-auto max-w-8xl flex items-center justify-between py-3 duration-500 ${sticky
                    ? "bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-2xl top-5 px-6 shadow-lg"
                    : "bg-transparent top-0  rounded-xl w-full px-6 py-2 bg-white/10 dark:bg-black/10 backdrop-blur-l"
                    }`}
            >
                <div className='flex justify-between items-center gap-2 w-full'>
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <Logo />
                    </div>

                    {/* Right side actions */}
                    <div className='flex items-center gap-3 sm:gap-4'>
                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Phone Number - Desktop */}
                        <div className='hidden md:block'>
                            <Link
                                href='tel:+1-212-456-789'
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl   transition-all duration-300 text-sm border ${isHomepage && !sticky
                                    ? 'text-white border-white/30 hover:bg-white/10'
                                    : 'text-black dark:text-white border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5'
                                    }`}
                            >
                                <Icon icon={'ph:phone-bold'} width={16} height={16} />
                                +1-212-456-789
                            </Link>
                        </div>

                        {/* Auth Buttons - Desktop */}
                        <div className='hidden md:flex items-center gap-2'>
                            {/* <Link
                                href="/signin"
                                className={`px-4 py-3 rounded-xl   transition-all duration-300 text-sm border ${isHomepage && !sticky
                                        ? 'text-white border-white/30 hover:bg-white/10'
                                        : 'text-black dark:text-white border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5'
                                    }`}
                            >
                                Sign In
                            </Link> */}
                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLScG3nDXAdVCfPN0fZbw_i72XbvapbCYzYSBtxlm6o2IHPQygg/viewform?pli=1"
                                className={`px-4 py-3 rounded-xl   transition-all duration-300 text-sm bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 border border-black dark:border-white`}
                            >
                                Register
                            </Link>
                        </div>

                        {/* Hamburger Menu Button - Always Visible */}
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className={`flex items-center gap-2 p-3 rounded-xl   transition-all duration-300 border ${isHomepage && !sticky
                                ? 'text-white border-white/30 hover:bg-white/10'
                                : 'text-black dark:text-white border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5'
                                }`}
                            aria-label='Toggle mobile menu'
                        >
                            <Icon icon={'ph:list'} width={20} height={20} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {navbarOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300'
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Menu - Pure Black & White with Climate Crisis Font */}
            <div
                ref={sideMenuRef}
                className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-black shadow-2xl transition-transform duration-500 ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
                    } z-50 overflow-hidden border-l border-black/10 dark:border-white/10`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10">
                        <Link href='/' className='flex items-center'>
                            <div className="w-15 h-15 flex items-center justify-center">
                                <img
                                    src="/u-robo.png"
                                    alt="U-Fill Academy Logo"
                                    className="w-full h-full object-contain select-none"
                                />
                            </div>
                            <span className="flex items-center">
                                {/* Big U */}
                                <span className="text-blue-500 text-7xl font-extrabold leading-none mr-1">
                                    U
                                </span>

                                {/* FILL + ACADEMY stacked closely */}
                                <span className="flex flex-col leading-[0.9]">
                                    <span className="text-black dark:text-white text-2xl font-bold">
                                        FILL
                                    </span>
                                    <span className="text-black dark:text-white text-sm font-medium tracking-tight">
                                        ACADEMY
                                    </span>
                                </span>
                            </span>
                        </Link>
                        <button
                            onClick={closeMobileMenu}
                            aria-label='Close mobile menu'
                            className='p-2 rounded-lg bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300'
                        >
                            <Icon icon={'ph:x-bold'} width={20} height={20} />
                        </button>
                    </div>

                    {/* Navigation Links - Climate Crisis Font */}
                    <nav className='flex-1 overflow-y-auto'>
                        <ul className='w-full'>
                            {navLinks.map((item, index) => (
                                <NavLink key={index} item={item} onClick={closeMobileMenu} />
                            ))}
                        </ul>

                        {/* Mobile Auth Buttons */}
                        {/* <div className='flex gap-2 p-6 border-t border-black/10 dark:border-white/10'>
                            <Link
                                href="/signin"
                                onClick={closeMobileMenu}
                                className='flex-1 py-4 text-center bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-xl   hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 border border-black/10 dark:border-white/10'
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                onClick={closeMobileMenu}
                                className='flex-1 py-4 text-center bg-black dark:bg-white text-white dark:text-black rounded-xl   hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-300 border border-black dark:border-white'
                            >
                                Sign Up
                            </Link>
                        </div> */}
                    </nav>

                    {/* Footer Contact Info */}
                    <div className='p-6 border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5'>
                        <p className='text-black/60 dark:text-white/60   text-sm mb-3'>
                            Contact Us
                        </p>
                        <div className='space-y-2'>
                            <Link
                                href="mailto:U-fillacademy@gmail.com"
                                className='flex items-center gap-2 text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors duration-300   text-sm'
                                onClick={closeMobileMenu}
                            >
                                <Icon icon={'ph:envelope-simple-bold'} width={14} height={14} />
                                Ufillacademy@gmail.com
                            </Link>
                            <Link
                                href="tel: +91 8939976607
"
                                className='flex items-center gap-2 text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors duration-300   text-sm'
                                onClick={closeMobileMenu}
                            >
                                <Icon icon={'ph:phone-bold'} width={14} height={14} />
                                +91 8939976607

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MegaNavbar