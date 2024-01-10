import React from 'react'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import ShuffleHero from './ShuffleHero';


const Hero = () => {
    const router = useRouter();
    return (
        <ShuffleHero />
    )
}

export default Hero;

