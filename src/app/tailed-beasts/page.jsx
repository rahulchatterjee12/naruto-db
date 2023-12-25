"use client"

import CharacterCard from '@/Components/common/CharacterCard';
import { useGetAllTailedBeastsQuery } from '@/features/apiSlice'
import { CircularProgress, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'



const TailedBeasts = () => {

    const [totalPage, setTotalPage] = useState(10);
    const [page, setPage] = useState(1);
    const { data: beasts, isLoading, refetch } = useGetAllTailedBeastsQuery({ limit: 12, page: page });
    useEffect(() => {
        if (beasts) setTotalPage(Math.ceil(beasts.total / 12))
    }, [beasts])

    useEffect(() => {
        refetch({ limit: 12, page: page })
    }, [page])

    return (
        <div>
            <div className='text-[20px] md:text-[40px] font-bold italic mt-5'>All Tailed Beasts:</div>

            <div className=''>
                {isLoading ?
                    <div className='flex items-center justify-center h-96'>
                        <CircularProgress />
                    </div>
                    :
                    <div className='flex flex-wrap gap-3 justify-center'>
                        {
                            beasts['tailed-beasts'].map((beast, index) => (
                                <CharacterCard data={beast} key={index} />
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

export default TailedBeasts;