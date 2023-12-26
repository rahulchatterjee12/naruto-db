import React from 'react'

const TailedBeastCard = ({ data }) => {
    return (
        <Box
            sx={{
                backgroundImage: 'linear-gradient(285.53deg, rgba(46, 46, 255, 0.6) -27.34%, rgba(253, 118, 48, 0.6) 112.3%)',
                borderRadius: '7px',
                width: '325px',
                padding: 2,
                position: 'relative',
                cursor: 'pointer'
            }}
            onClick={() => { router.push(`/characters/${data.id}`) }}
        >
            <div className='flex justify-between'>
                <img
                    className='rounded-full w-[75px] h-[75px] bg-cover'
                    src={data.images[0] ? data.images[0] : "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"}
                    alt="image" />
                <div className='text-black font-mono w-full mx-4'>
                    <h2>{data.name}</h2>
                    <div className='flex justify-between mt-1'>
                        <h3>{
                            data.personal.sex ?
                                data.personal.sex
                                :
                                '-'}</h3>
                        <h3>{data?.personal?.clan ? data?.personal?.clan : '-'}</h3>
                    </div>
                </div>
            </div>
            <div className='text-black font-serif'>
                <h3>Rank : {data?.rank?.ninjaRank ? Object.entries(data?.rank?.ninjaRank)[0][1] : '-'}</h3>
                <h3>Jutsu Count : {data.jutsu ? data?.jutsu.length : ''}</h3>
                <h3>Chakra Nature : {data?.natureType ? data.natureType[0] : '-'}</h3>
                <h3>Kekkei Genkai : {data.personal.kekkeiGenkai ? data?.personal?.kekkeiGenkai[0] : '-'}</h3>
                <h3>Team : {data.personal.team ? data?.personal?.team[0] : '-'}</h3>
            </div>
            <img
                className='absolute bottom-1 right-1 w-[70px] opacity-45'
                src="/images/common/kurama.svg" alt="" />
        </Box>
    )
}

export default TailedBeastCard