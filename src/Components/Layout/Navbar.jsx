"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import { AnimatePresence, motion, } from 'framer-motion'

const navLinks = [
    {
        title: 'Akatuski',
        link: '/akatsuki',
    },
    {
        title: 'Characters',
        link: '/characters',
    },
    {
        title: 'Clans',
        link: '/clans',
    },
    {
        title: 'Kekkei Genkai',
        link: '/kekkei-genkai',
    },
    {
        title: 'Tailed Beasts',
        link: '/tailed-beasts',
    },
    {
        title: 'Teams',
        link: '/teams',
    },
    {
        title: 'Villages',
        link: '/villages',
    },

]


const NavLink = ({ title, href }) => {
    const linkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: .5
            }
        },
        open: {
            y: 0,
            transition: {
                duration: .75
            }
        }
    }
    return (
        <div className='overflow-hidden'>
            <motion.div
                variants={linkVars}
                className='text-4xl uppercase text-white'>
                <Link href={href} style={{
                    fontFamily: 'serif',
                    textShadow: 'white 1px 0 10px',
                }}>{title}</Link>
            </motion.div>
        </div>
    )
}


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open)
    }

    const menuVers = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.12, 0, 0.39, 1]
            }
        }
    }

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            }
        },
        open: {
            transition: {
                staggerChildren: 0.09,
                delayChildren: 0.3,
                staggerDirection: 1,
            }
        }
    }

    return (
        <header>
            <nav>
                <div className='flex justify-between items-center py-8 lg:py-4 px-2'>
                    <div className='w-5 h-5 bg-orange-400 rounded-full'>
                        <span className='text-sm font-semibold tracking-widest'>NarutoDB</span>
                    </div>
                    <div
                        className='cursor-pointer text-md text-white'
                        onClick={toggleMenu}
                    >
                        Menu
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {open &&
                    <motion.div
                        variants={menuVers}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        className='fixed left-0 top-0 w-full h-screen p-10 origin-top bg-white text-black z-10'
                        style={{
                            backgroundImage: 'url("/nav.jpg")',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                    >
                        <div className='flex h-full flex-col'>
                            <div className='flex md:mx-24 justify-between text-white'>
                                <div className='w-5 h-5 bg-orange-400 rounded-full'>
                                    <span className='text-sm font-semibold tracking-widest'>NarutoDB</span>
                                </div>
                                <p
                                    className='cursor-pointer'
                                    onClick={toggleMenu}
                                >Close</p>
                            </div>
                            <motion.div
                                variants={containerVars}
                                initial='initial'
                                animate='open'
                                exit='initial'
                                className='flex flex-col h-full justify-center items-center gap-4'>
                                {
                                    navLinks.map((link, index) => (
                                        <NavLink key={index} title={link.title} href={link.link} />
                                    ))
                                }
                            </motion.div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </header>
    )
}

export default Navbar;