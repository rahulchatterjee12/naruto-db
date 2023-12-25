"use client"
import { useGetCharacterByIdQuery } from '@/features/apiSlice';
import { Chip, CircularProgress } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react'

const Hero = () => {
    const pathname = usePathname().split('/').pop();
    const { data, isLoading } = useGetCharacterByIdQuery({ id: pathname });

    console.log(data)

    return (
        <>
            {!isLoading ?
                <>
                    <div
                        className='h-[60vh] md:mt-[10%]'
                        style={{
                            background: 'radial-gradient(136.26% 206.75% at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 0%, rgba(233, 131, 82, 0.8) 0.01%, rgba(233, 132, 84, 0.791746) 0.02%, rgba(244, 110, 46, 0.783655) 1.04%, rgba(255, 255, 255, 0) 100%)',
                            borderRadius: '10px',
                            position: 'relative'
                        }}
                    >
                        <img src={data?.images[0] ? data?.images[0] : ''} className='md:w-[20vw]  md:h-[260px] rounded absolute -top-20 md:left-16 lg:left-36 bg-white object-cover' />
                        <div className=' rounded absolute font-serif italic  md:right-5 lg:right-10 top-6 text-black gap-6'>
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
                    </div>
                </>
                :
                <div className='flex items-center justify-center h-96'>
                    <CircularProgress />
                </div>
            }
        </>
    )
}

export default Hero;