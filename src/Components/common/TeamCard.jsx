import React from 'react';
import { useGetCharacterByIdQuery } from '@/features/apiSlice';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const TeamMember = ({ id }) => {
    const { data } = useGetCharacterByIdQuery({ id: id })
    return (<div>
        {data &&
            <>
                <img
                    className='rounded-full w-[75px] h-[75px] bg-cover'
                    src={data.images[0] ? data.images[0] : "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"}
                    alt="image"
                    style={{
                        border: '1px solid rgba(21,32,54,.4)',
                        boxShadow: '0 6px 8px rgba(159, 52, 255, 0.2)'
                    }}
                />
                <h2 className='text-center mt-1'>{data.name}</h2>
                <h2 className='text-center '>{data?.personal?.clan ? data?.personal?.clan : '-'}</h2>
            </>}
    </div>)
}


const TeamCard = ({ data }) => {
    const router = useRouter();
    return (
        <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => { router.push(`/teams/${data.id}`) }}
        >
            <Box
                sx={{
                    background: 'rgba(74, 40, 242, 0.05)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '7px',
                    border: '1px solid rgba(21,32,54,.4)',
                    width: '280px',
                    height: '225px',
                    padding: 2,
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(159, 52, 255, 0.2), inset 0 0 10px rgba(159, 52, 255, 0.2)',
                    overflow: 'hidden'
                }}
            >
                <h3 className='text-center font-bold  font-mono '>{data.name}({data.characters.length})</h3>
                <div className='flex gap-4 mt-4 font-serif'>
                    {data.characters.slice(0, 3).map(id => <TeamMember id={id} key={id} />)}
                </div>
            </Box>
        </motion.div>
    )
}

export default TeamCard;