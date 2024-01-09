"use client";

import { Menu, MenuItem } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <motion.nav
            variants={{
                hidden: { opacity: 0, x: 0, y: -100 },
                enter: { opacity: 1, x: 0, y: 0 },
            }}
            initial="hidden"
            animate="enter"
            transition={{ type: "linear" }}
            className='h-16  bg-[#FFFFFF] bg-opacity-[16%] blur-50 -mx-[5vw] md:-mx-[12vw] lg:-mx-[15vw] '>
            <div className='mx-[12vw] flex justify-between'>
                <Link href='/' className='flex'>
                    <img className='pt-2' src="/logo.svg" alt="Logo" width={50} />
                    <h2 className='mt-[13px] font-bold font-serif text-2xl bg-gradient-to-tl from-[#ea00ff] to-[#00d0ff] text-transparent bg-clip-text'>NARUTO DB</h2>
                </Link>
                <div className='flex gap-3 mt-[1.25rem]'>
                    <div onClick={handleClick} className='h-fit p-1 hover:text-orange-400 cursor-pointer'>
                        View <span>{!open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
                    </div>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        variant='menu'
                        sx={{
                            '.MuiMenu-paper': {
                                backgroundColor: 'rgba(0,0,0,0)',
                                border: '1px solid rgba(234,0 ,225,0.2)'
                            }
                        }}
                    >
                        <MenuItem
                            sx={{
                                background: 'rgba(232, 107, 39, 0)',
                                marginTop: -1,
                                color: 'black',
                                ":hover": {
                                    background: 'rgba(232, 107, 39, 0)',
                                    color: 'blue'
                                }
                            }}
                            onClick={() => {
                                router.push('/akatsuki')
                                handleClose()
                            }}
                        >
                            Akatsuki</MenuItem>
                        <MenuItem
                            sx={{
                                background: 'rgba(232, 107, 39, 0)',
                                color: 'black',
                                ":hover": {
                                    background: 'rgba(232, 107, 39, 0)',
                                    color: 'blue'
                                }
                            }}
                            onClick={() => {
                                router.push('/characters')
                                handleClose()
                            }}
                        >Characters</MenuItem>
                        <MenuItem
                            sx={{
                                background: 'rgba(232, 107, 39, 0)',
                                color: 'black',
                                ":hover": {
                                    background: 'rgba(232, 107, 39, 0)',
                                    color: 'blue'
                                }
                            }}
                            onClick={() => {
                                router.push('/clans')
                                handleClose()
                            }}
                        >Clans</MenuItem>
                        <MenuItem
                            sx={{
                                color: 'black',
                                ":hover": {
                                    color: 'blue'
                                }
                            }}
                            onClick={() => {
                                router.push('/kekkei-genkai')
                                handleClose()
                            }}
                        >Kekkei Genkai</MenuItem>
                        <MenuItem
                            sx={{
                                color: 'black',
                                ":hover": {
                                    color: 'blue'
                                }
                            }}
                            onClick={() => {
                                router.push('/tailed-beasts')
                                handleClose()
                            }}
                        >Tailed Beasts</MenuItem>
                        <MenuItem
                            sx={{
                                color: 'black',
                                ":hover": {
                                    color: 'blue'
                                }
                            }}
                            onClick={() => {
                                router.push('/teams')
                                handleClose()
                            }}
                        >Teams</MenuItem>
                        <MenuItem
                            sx={{
                                color: 'black',
                                marginBottom: -1,
                                ":hover": {
                                    color: 'blue'
                                }
                            }}
                            onClick={() => {
                                router.push('/villages')
                                handleClose()
                            }}
                        >Villages</MenuItem>
                    </Menu>
                </div>
            </div>
        </motion.nav >
    )
}

export default Navbar;