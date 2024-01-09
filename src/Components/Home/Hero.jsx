import React from 'react'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";


const Hero = () => {
    const router = useRouter();
    return (
        <div className='flex flex-col md:flex-row justify-between'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -200, y: 0 },
                    enter: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear" }}
                className='ml-5 md:w-[45%] lg:w-[35%] lg:mt-16'
            >
                <h1
                    style={{
                        lineHeight: '103%'
                    }}
                    className='overflow-hidden whitespace-nowraps font-[700] text-[25px] text-center md:text-left md:text-[35px] lining-[105%] mt-[5%] text-[#FFD2B1]'
                >
                    Unlock the Hidden Jutsu: Your Ultimate Naruto Database
                </h1>
                <h4 className='text-[#FFC179]  text-[20px] mt-1 text-center md:text-left'>
                    Dive into the ninja realm with our Naruto Database. Uncover iconic
                    characters, powerful jutsu, and village secrets. Immerse yourself
                    in the essence of the Hidden Leaf and beyond.
                </h4>
                <div className='mt-[10%] flex gap-5 justify-center md:justify-start mb-10'>
                    <Button
                        onClick={() => router.push('/clans')}
                        variant='contained'
                        color='warning'
                        sx={{ borderRadius: 50 }}
                    >Clans</Button>
                    <Button
                        onClick={() => router.push('/characters')}
                        variant='outlined'
                        color='warning'
                        sx={{ borderRadius: 50 }}
                    >Characters</Button>
                </div>
            </motion.div>

            <motion.img
                variants={{
                    hidden: { opacity: 0, x: 200, y: 0 },
                    enter: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear" }}
                className=' w-[80%] mx-auto md:mx-0 md:w-[35%] lg:w-[23%]'
                src="/images/home/hero.svg"
                alt="Hero"
            />
        </div>
    )
}

export default Hero;

