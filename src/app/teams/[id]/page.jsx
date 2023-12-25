"use client"

import CharacterCard from '@/Components/common/CharacterCard'
import { useGetCharacterByIdQuery, useGetTeamByIdQuery } from '@/features/apiSlice'
import { usePathname } from 'next/navigation'
import React from 'react'

const TeamMembers = ({ id }) => {
    const { data } = useGetCharacterByIdQuery({ id: id });;

    return (
        <>
            {data && <CharacterCard data={data} />}
        </>
    )
}


const TeamDetails = () => {
    const id = usePathname().split('/').pop();
    const { data } = useGetTeamByIdQuery({ id: id });
    return (
        <div>
            {data && <>
                <div className='text-[20px] md:text-[40px] font-bold italic mt-5'>All Characters of {data.name} clan :</div>
                <div className='flex gap-6 flex-wrap mt-10 justify-center'>
                    {data.characters.map(id => <TeamMembers id={id} key={id} />)}
                </div>
            </>}
        </div>
    )
}

export default TeamDetails;