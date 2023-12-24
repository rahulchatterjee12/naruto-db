"use client"
import React, { useEffect, useState } from 'react'
import { useGetAllClansQuery } from '@/features/apiSlice';
import { CircularProgress, Pagination } from '@mui/material';
import ClanCard from '@/Components/common/ClanCard';

const Clans = () => {
    const [totalPage, setTotalPage] = useState(10);
    const [page, setPage] = useState(1);
    const { data: clans, isLoading, refetch } = useGetAllClansQuery({ limit: 12, page: page });
    useEffect(() => {
        if (clans) setTotalPage(Math.ceil(clans.total / 12))
    }, [clans])

    useEffect(() => {
        refetch({ limit: 12, page: page })
    }, [page])

    console.log(clans)
    return (
        <div>
            <div className='text-[20px] md:text-[40px] font-bold italic mt-5'>All Clans:</div>

            <div className=''>
                {isLoading ?
                    <div className='flex items-center justify-center h-96'>
                        <CircularProgress />
                    </div>
                    :
                    <div className='flex flex-wrap gap-3 justify-center'>
                        {
                            clans.clans.map((clan, index) => (
                                <ClanCard data={clan} key={index} />
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

export default Clans;