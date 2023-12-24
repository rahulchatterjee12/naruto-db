"use client"
import CharacterCard from '@/Components/common/CharacterCard';
import { useGetCharacterByIdQuery, useGetClanByIdQuery } from '@/features/apiSlice';
import { CircularProgress } from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ClanMember = ({ id }) => {
    const { data } = useGetCharacterByIdQuery({ id: id });;

    return (
        <>
            {data && <CharacterCard data={data} />}
        </>
    )
}

const ClanDetails = () => {
    const pathname = usePathname().split('/').pop();
    const { data, isLoading } = useGetClanByIdQuery({ id: pathname });

    return (
        <>
            {isLoading ?
                <div className='flex items-center justify-center h-96'>
                    <CircularProgress />
                </div>
                :
                <div className=''>
                    <div className='text-[20px] md:text-[40px] font-bold italic mt-5'>All Characters of {data.name} clan :</div>
                    <div className='flex gap-6 flex-wrap mt-10 justify-center'>
                        {data.characters.map(id => <ClanMember id={id} key={id} />)}
                    </div>
                </div>
            }
        </>
    )
}

export default ClanDetails;