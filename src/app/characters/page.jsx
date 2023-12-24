"use client"
import CharacterCard from '@/Components/common/CharacterCard';
import { useGetAllCharactersQuery } from '@/features/apiSlice';
import { CircularProgress, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Characters = () => {
    const [totalPage, setTotalPage] = useState(10);
    const [page, setPage] = useState(1);
    const { data: characters, isLoading, refetch } = useGetAllCharactersQuery({ limit: 12, page: page });
    useEffect(() => {
        if (characters) setTotalPage(Math.ceil(characters.total / 12))
    }, [characters])

    useEffect(() => {
        refetch({ limit: 12, page: page })
    }, [page])

    return (
        <div className=''>
            <div className='text-[20px] md:text-[40px] font-bold italic mt-5'>All Characters :</div>
            <div className=''>
                {isLoading ?
                    <div className='flex items-center justify-center h-96'>
                        <CircularProgress />
                    </div>
                    :
                    <div className='flex flex-wrap gap-3 justify-center'>
                        {
                            characters.characters.map((character, index) => (
                                <CharacterCard data={character} key={index} />
                            ))
                        }
                    </div>
                }
            </div>
            <div className='flex justify-center mt-5'>
                <Pagination
                    count={totalPage}
                    page={page}
                    onChange={(e, newPage) => setPage(newPage)}
                    variant="outlined"
                    color="secondary"
                />
            </div>
        </div>
    )
}

export default Characters;