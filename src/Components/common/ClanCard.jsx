import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'

const ClanCard = ({ data }) => {
    const router = useRouter()
    return (
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
            onClick={() => { router.push(`/clans/${data.id}`) }}
        >
            <h2>Name : {data.name} </h2>
            <h2>Clan Members : {data.characters.length} </h2>
        </Box>
    )
}

export default ClanCard;