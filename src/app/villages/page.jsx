"use client"

import { useGetAllVillagesQuery } from '@/features/apiSlice'
import { Box, CircularProgress, Pagination } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const VillageCard = ({ data }) => {
    const router = useRouter()
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
                cursor: 'pointer'
            }}
            onClick={() => { router.push(`/villages/${data.id}`) }}
        >
            <h2>Name : {data.name} </h2>
            <h2>Village Members : {data.characters.length} </h2>
        </Box>
    )
}


const Villages = () => {

    const [totalPage, setTotalPage] = useState(10);
    const [page, setPage] = useState(1);
    const { data: villages, isLoading, refetch } = useGetAllVillagesQuery({ limit: 12, page: page });
    useEffect(() => {
        if (villages) setTotalPage(Math.ceil(villages.total / 12))
    }, [villages])

    useEffect(() => {
        refetch({ limit: 12, page: page })
    }, [page])

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
                            villages.villages.map((village, index) => (
                                <VillageCard data={village} key={index} />
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

export default Villages;