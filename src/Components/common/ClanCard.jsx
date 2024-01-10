import React from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const ClanCard = ({ data }) => {
    const router = useRouter()
    return (
        <motion.div

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => { router.push(`/clans/${data.id}`) }}
        >
            <Box
                sx={{
                    backgroundImage: 'rgba(74, 40, 242, 0.05)',
                    backdropFilter: 'blur(5px)',
                    boxShadow: '0 4px 6px rgba(159, 52, 255, 0.2), inset 0 0 5px rgba(159, 52, 255, 0.2)',
                    borderRadius: '7px',
                    width: '325px',
                    padding: 2,
                    position: 'relative',
                    cursor: 'pointer'
                }}
            >
                <h2>Name : {data.name} </h2>
                <h2>Clan Members : {data.characters.length} </h2>
            </Box>
        </motion.div>
    )
}

export default ClanCard;