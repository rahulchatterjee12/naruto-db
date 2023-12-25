"use client"

import CharacterCard from '@/Components/common/CharacterCard';
import { useGetCharacterByIdQuery, useGetKekkeiGenkaiByIdQuery } from '@/features/apiSlice';
import { CircularProgress } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react'


const KekkeiGenkaiUser = ({ id }) => {
    const { data } = useGetCharacterByIdQuery({ id: id });;

    return (
        <>
            {data && <CharacterCard data={data} />}
        </>
    )
}


const KekkeiGenkaiDetails = () => {
    const pathname = usePathname().split('/').pop();
    const { data, isLoading } = useGetKekkeiGenkaiByIdQuery({ id: pathname });

    return (
        <>
            {isLoading ?
                <div className='flex items-center justify-center h-96'>
                    <CircularProgress />
                </div>
                :
                <div className=''>
                    <div className='text-[20px] md:text-[40px] font-bold italic mt-5'>All Users of {data.name} :</div>
                    <div className='flex gap-6 flex-wrap mt-10 justify-center'>
                        {data.characters.map(id => <KekkeiGenkaiUser id={id} key={id} />)}
                    </div>
                </div>
            }
        </>
    )
}

export default KekkeiGenkaiDetails;