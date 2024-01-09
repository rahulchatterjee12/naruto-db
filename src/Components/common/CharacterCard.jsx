import React from 'react'
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const CharacterCard = ({ data }) => {
    const router = useRouter();
    return (
        <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { router.push(`/characters/${data.id}`) }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Box
                sx={{
                    background: 'rgba(74, 40, 242, 0.05)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '7px',
                    border: '1px solid rgba(21,32,54,.4)',
                    width: '280px',
                    height: '253px',
                    overflow: 'hidden',
                    padding: 2,
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(159, 52, 255, 0.2), inset 0 0 10px rgba(159, 52, 255, 0.2)'
                }}
            >
                <div className='flex justify-between'>
                    <img
                        className='rounded-full w-[75px] h-[75px] bg-cover'
                        style={{
                            border: '1px solid rgba(21,32,54,.4)',
                            boxShadow: '0 6px 8px rgba(159, 52, 255, 0.2)'
                        }}
                        src={data.images[0] ? data.images[0] : "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"}
                        alt="image" />
                    <div className='text-white font-mono w-full mx-4'>
                        <h2>{data.name}</h2>
                        <div className='flex justify-between mt-1'>
                            <h3>{
                                data.personal.sex ?
                                    data.personal.sex
                                    :
                                    '-'}</h3>
                            <h3>{data?.personal?.clan ? data?.personal?.clan : '-'}</h3>
                        </div>
                    </div>
                </div>
                <div className='text-white font-serif'>
                    <h3>Rank : {data?.rank?.ninjaRank ? Object.entries(data?.rank?.ninjaRank)[0][1] : '-'}</h3>
                    <h3>Jutsu Count : {data.jutsu ? data?.jutsu.length : ''}</h3>
                    <h3>Chakra Nature : {data?.natureType ? data.natureType[0] : '-'}</h3>
                    <h3>Kekkei Genkai : {data.personal.kekkeiGenkai ? data?.personal?.kekkeiGenkai[0] : '-'}</h3>
                    <h3>Team : {data.personal.team ? data?.personal?.team[0] : '-'}</h3>
                </div>
                <img
                    className='absolute bottom-1 right-1 w-[70px] opacity-45'
                    src="/images/common/kurama.svg" alt="" />
            </Box>
        </motion.div>
    )
}

export default CharacterCard;
