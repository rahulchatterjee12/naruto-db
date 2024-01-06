"use client"

import KekkeiGenkaiCard from '@/Components/common/KekkeiGenkaiCard';
import { useGetAllKekkeiGenkaisQuery } from '@/features/apiSlice';
import { CircularProgress, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'

const KekkeiGenkai = () => {
    const [totalPage, setTotalPage] = useState(10);
    const [page, setPage] = useState(1);
    const { data: kekkeiGenkais, isLoading, refetch } = useGetAllKekkeiGenkaisQuery({ limit: 12, page: page });
    useEffect(() => {
        if (kekkeiGenkais) setTotalPage(Math.ceil(kekkeiGenkais.total / 12))
    }, [kekkeiGenkais])

    useEffect(() => {
        refetch({ limit: 12, page: page })
    }, [page])

    return (
        <div>
            <div className='text-[20px] md:text-[40px] font-bold italic mt-5'>All Kekkei Genkais:</div>

            <div className=''>
                {isLoading ?
                    <div className='flex items-center justify-center h-96'>
                        <CircularProgress />
                    </div>
                    :
                    <div className='flex flex-wrap gap-3 justify-center'>
                        {
                            kekkeiGenkais['kekkei-genkai'].map((clan, index) => (
                                <KekkeiGenkaiCard data={clan} key={index} />
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

export default KekkeiGenkai;