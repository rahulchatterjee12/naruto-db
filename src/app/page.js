"use client"
import Hero from "@/Components/Home/Hero";
import CharacterCard from "@/Components/common/CharacterCard";
import CustomTab from "@/Components/common/CustomTab";
import TeamCard from "@/Components/common/TeamCard";
import { useGetAllCharactersQuery, useGetAllTeamsQuery } from "@/features/apiSlice";
import { CircularProgress } from "@mui/material";
import { useState } from "react";


const CharactersTab = () => {
  const { data, isLoading } = useGetAllCharactersQuery({ page: 1, limit: 12 })

  if (isLoading) return <div className="flex justify-center mt-[10vh] h-auto"> <CircularProgress /></div>

  return (
    <div className="flex gap-6 mt-4 flex-wrap ml-1 justify-center">
      {data && data.characters.map(data => <CharacterCard data={data} key={data.id} />)}
    </div>
  )
}

const TeamsTab = () => {
  const { data, isLoading } = useGetAllTeamsQuery({ page: 1, limit: 12 })

  if (isLoading) return <div className="flex justify-center mt-[10vh] h-auto"> <CircularProgress /></div>

  return (
    <div className="flex gap-6 mt-4 flex-wrap ml-1 justify-center">
      {data && data.teams.map(data => <TeamCard data={data} key={data.id} />)}
    </div>
  )
}

const tabs = [
  {
    index: 0,
    component: <CharactersTab />
  },
  {
    index: 1,
    component: <TeamsTab />
  },
]

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <main>
      <Hero />
      <CustomTab
        value={value}
        setValue={setValue}
        tabs={tabs}
      />
    </main>
  )
}
