"use client"
import TeamCard from '@/Components/common/TeamCard';
import { useGetAllTeamsQuery } from '@/features/apiSlice';
import { CircularProgress, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Teams = () => {
    const [totalPage, setTotalPage] = useState(10);
    const [page, setPage] = useState(1);
    const { data: teams, isLoading, refetch } = useGetAllTeamsQuery({ limit: 12, page: page });
    useEffect(() => {
        if (teams) setTotalPage(Math.ceil(teams.total / 12))
    }, [teams])

    useEffect(() => {
        refetch({ limit: 12, page: page })
    }, [page])

    return (
        <div className=''>
            <div className='text-[20px] md:text-[40px] font-bold italic mt-5'>All Teams :</div>
            <div className=''>
                {isLoading ?
                    <div className='flex items-center justify-center h-96'>
                        <CircularProgress />
                    </div>
                    :
                    <div className='flex flex-wrap gap-3 justify-center'>
                        {
                            teams.teams.map((team, index) => (
                                <TeamCard data={team} key={index} />
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

export default Teams;