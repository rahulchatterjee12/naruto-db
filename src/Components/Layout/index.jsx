"use client"

import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { dataApi } from '@/features/apiSlice';


const Layout = ({ children }) => {
    return (
        <>
            <ApiProvider api={dataApi}>
                <ThemeProvider theme={theme}>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </ApiProvider>
        </>
    )
}

export default Layout;