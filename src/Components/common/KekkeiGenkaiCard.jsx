import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'

const KekkeiGenkaiCard = ({ data }) => {
    const router = useRouter()
    return (
        <Box
            sx={{
                backgroundImage: 'linear-gradient(285.53deg, rgba(46, 46, 255, 0.6) -27.34%, rgba(253, 118, 48, 0.6) 112.3%)',
                borderRadius: '7px',
                width: {
                    md: '325px'
                },
                padding: 2,
                position: 'relative',
                cursor: 'pointer'
            }}
            onClick={() => { router.push(`/kekkei-genkai/${data.id}`) }}
        >
            <h2>Name : {data.name} </h2>
            <h2>User Number : {data.characters.length} </h2>
        </Box>
    )
}

export default KekkeiGenkaiCard;