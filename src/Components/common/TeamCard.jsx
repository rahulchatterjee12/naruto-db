import { Box } from '@mui/material';
import { useRouter } from 'next/navigation'
import React from 'react'

const TeamCard = ({ data }) => {
    const router = useRouter();
    console.log(data)
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
                cursor: 'pointer',
                color: 'black'
            }}
            onClick={() => { router.push('/teams/5') }}
        >
            <h3 className='text-center font-bold  font-mono '>Name of the Team</h3>
            <div className='flex justify-between mt-4 font-serif'>
                <div>
                    <img
                        className='rounded-full w-[75px] h-[75px] bg-cover'
                        src="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
                        alt="image" />
                    <h2 className='text-center mt-1'>Name</h2>
                    <h2 className='text-center '>Clan Name</h2>
                </div>
                <div>
                    <img
                        className='rounded-full w-[75px] h-[75px] bg-cover'
                        src="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
                        alt="image" />
                    <h2 className='text-center mt-1'>Name</h2>
                    <h2 className='text-center '>Clan Name</h2>
                </div>
                <div>
                    <img
                        className='rounded-full w-[75px] h-[75px] bg-cover'
                        src="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
                        alt="image" />
                    <h2 className='text-center mt-1'>Name</h2>
                    <h2 className='text-center '>Clan Name</h2>
                </div>
            </div>
        </Box>
    )
}

export default TeamCard;