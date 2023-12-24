"use client";

import { Button, Menu, MenuItem } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useRouter } from 'next/navigation';

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
        <nav className='h-16  bg-[#FFFFFF] bg-opacity-[16%] blur-50 -mx-[5vw] md:-mx-[12vw] lg:-mx-[15vw] '>
            <div className='mx-[12vw] flex justify-between'>
                <Link href='/' className='flex'>
                    <img className='pt-2' src="/logo.svg" alt="Logo" width={50} />
                    <h2 className='mt-[1.25rem]'>NARUTO DB</h2>
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
                    >
                        <MenuItem
                            sx={{
                                background: 'rgba(232, 107, 39, 0.8)',
                                marginTop: -1,
                                color: 'black',
                                ":hover": {
                                    background: 'rgba(232, 107, 39, 0.5)',
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
                                background: 'rgba(232, 107, 39, 0.8)',
                                color: 'black',
                                ":hover": {
                                    background: 'rgba(232, 107, 39, 0.5)',
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
                                background: 'rgba(232, 107, 39, 0.8)',
                                color: 'black',
                                ":hover": {
                                    background: 'rgba(232, 107, 39, 0.5)',
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
                                background: 'rgba(232, 107, 39, 0.8)',
                                color: 'black',
                                ":hover": {
                                    background: 'rgba(232, 107, 39, 0.5)',
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
                                background: 'rgba(232, 107, 39, 0.8)',
                                color: 'black',
                                ":hover": {
                                    background: 'rgba(232, 107, 39, 0.5)',
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
                                background: 'rgba(232, 107, 39, 0.8)',
                                color: 'black',
                                ":hover": {
                                    background: 'rgba(232, 107, 39, 0.5)',
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
                                background: 'rgba(232, 107, 39, 0.8)',
                                color: 'black',
                                marginBottom: -1,
                                ":hover": {
                                    background: 'rgba(232, 107, 39, 0.5)',
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
        </nav >
    )
}

export default Navbar;