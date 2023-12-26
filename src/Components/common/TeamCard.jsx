import { useGetCharacterByIdQuery } from '@/features/apiSlice';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation'
import React from 'react'


const TeamMember = ({ id }) => {
    const { data } = useGetCharacterByIdQuery({ id: id })
    return (<div>
        {data &&
            <>
                <img
                    className='rounded-full w-[75px] h-[75px] bg-cover'
                    src={data.images[0] ? data.images[0] : "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"}
                    alt="image" />
                <h2 className='text-center mt-1'>{data.name}</h2>
                <h2 className='text-center '>{data?.personal?.clan ? data?.personal?.clan : '-'}</h2>
            </>}
    </div>)
}


const TeamCard = ({ data }) => {
    const router = useRouter();
    return (
        <Box
            sx={{
                backgroundImage: 'linear-gradient(285.53deg, rgba(46, 46, 255, 0.6) -27.34%, rgba(253, 118, 48, 0.6) 112.3%)',
                borderRadius: '7px',
                width: '325px',
                padding: 2,
                position: 'relative',
                cursor: 'pointer',
                color: 'black'
            }}
            onClick={() => { router.push(`/teams/${data.id}`) }}
        >
            <h3 className='text-center font-bold  font-mono '>{data.name}({data.characters.length})</h3>
            <div className='flex gap-4 mt-4 font-serif'>
                {data.characters.slice(0, 3).map(id => <TeamMember id={id} key={id} />)}
            </div>
        </Box>
    )
}

export default TeamCard;