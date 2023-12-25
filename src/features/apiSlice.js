import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "@/constents/api"
export const dataApi = createApi({
    reducerPath: "dataApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        // Characters
        getAllCharacters: builder.query({
            query: ({ limit, page }) => `/characters?page=${page}&limit=${limit}`
        }),
        getCharacterById: builder.query({
            query: ({ id }) => `/characters/${id}`
        }),

        // Clans
        getAllClans: builder.query({
            query: ({ page, limit }) => `/clans?page=${page}&limit=${limit}`
        }),
        getClanById: builder.query({
            query: ({ id }) => `/clans/${id}`
        }),

        // Villages
        getAllVillages: builder.query({
            query: ({ limit, page }) => `/villages?page=${page}&limit=${limit}`
        }),
        getVillagesrById: builder.query({
            query: ({ id }) => `/villages/${id}`
        }),

        // Kekkei-Genkai
        getAllKekkeiGenkais: builder.query({
            query: ({ limit, page }) => `/kekkei-genkai?page=${page}&limit=${limit}`
        }),

        getKekkeiGenkaiById: builder.query({
            query: ({ id }) => `/kekkei-genkai/${id}`
        }),

        // Tailed-Beasts
        getAllTailedBeasts: builder.query({
            query: ({ limit, page }) => `/tailed-beasts?page=${page}&limit=${limit}`
        }),
        getTailedBeastById: builder.query({
            query: ({ id }) => `/tailed-beasts/${id}`
        }),

        // Teams
        getAllTeams: builder.query({
            query: ({ limit, page }) => `/teams?page=${page}&limit=${limit}`
        }),
        getTeamById: builder.query({
            query: ({ id }) => `/teams/${id}`
        }),

        // Akatsuki
        getAllAkatsukis: builder.query({
            query: ({ limit, page }) => `/akatsuki?page=${page}&limit=${limit}`
        }),
        getAkatsukiById: builder.query({
            query: ({ id }) => `/akatsuki/${id}`
        }),
    })
});


export const {
    useGetAllCharactersQuery,
    useGetCharacterByIdQuery,
    useGetAllClansQuery,
    useGetClanByIdQuery,
    useGetAllVillagesQuery,
    useGetVillagesrByIdQuery,
    useGetAllKekkeiGenkaisQuery,
    useGetKekkeiGenkaiByIdQuery,
    useGetAllTailedBeastsQuery,
    useGetTailedBeastByIdQuery,
    useGetAllTeamsQuery,
    useGetTeamByIdQuery,
    useGetAllAkatsukisQuery,
    useGetAkatsukiByIdQuery
} = dataApi;