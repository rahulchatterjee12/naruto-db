"use client"
import { useGetCharacterByIdQuery } from '@/features/apiSlice';
import { Chip, CircularProgress } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react'

const Hero = () => {
    const pathname = usePathname().split('/').pop();
    const { data, isLoading } = useGetCharacterByIdQuery({ id: pathname });

    return (
        <>
            {!isLoading ?
                <div
                    className='h-[60vh] mt-5 md:mt-[10%]'
                    style={{
                        background: 'radial-gradient(136.26% 206.75% at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 0%, rgba(233, 131, 82, 0.8) 0.01%, rgba(233, 132, 84, 0.791746) 0.02%, rgba(244, 110, 46, 0.783655) 1.04%, rgba(255, 255, 255, 0) 100%)',
                        borderRadius: '10px',
                        position: 'relative'
                    }}
                >
                    <img src={data?.images[0] ? data?.images[0] : ''} className='w-[25vw] mt-2 md:w-[20vw]   md:h-[260px] rounded absolute top-0 -md:top-16 right-2 md:right-16 lg:right-36 bg-white object-cover' />
                    <div className='md:w-[400px] font-serif italic p-6 text-black gap-6'>
                        <h2 className='text-3xl'>{data.name}</h2>
                        <h2 className='text-lg '>Clan : {data?.personal?.clan ? data?.personal?.clan : '-'}</h2>
                        <h2 className='text-lg'>Birthday: {data.personal.birthdate ? data.personal.birthdate : '-'}</h2>
                        <h2 className='text-lg'>Rank : {data?.rank?.ninjaRank ? Object.entries(data?.rank?.ninjaRank)[0][1] : '-'}</h2>
                        <h2 className='text-lg '>Chakra Nature : {data?.natureType ? data.natureType[0] : '-'} {data?.natureType?.length >= 2 ? `(${data.natureType.length - 1} more)` : ''}</h2>
                        <div className='flex gap-3 justify-evenly mt-3'>
                            {
                                Array.isArray(data?.personal?.classification) > 0 &&
                                data.personal.classification.map(item => (
                                    <Chip key={item} variant="" color="warning" label={item} />
                                ))
                            }
                        </div>
                    </div>
                    <hr className='border mx-4 border-black' />
                </div>
                :
                <div className='flex items-center justify-center h-96'>
                    <CircularProgress />
                </div>
            }
        </>
    )
}

export default Hero;