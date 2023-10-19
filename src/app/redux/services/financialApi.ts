import { Financial } from '@/app/models/financial.model'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const financialApi = createApi({
  reducerPath: 'financialAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  endpoints: builder => {
    return {
      getHistory: builder.query<Financial[], null>({
        query: () => ''
      }),
      postSaveFinancial: builder.mutation({
        query: body => ({
          url: '',
          method: 'POST',
          body
        })
      })
    }
  }
})

export const { useGetHistoryQuery, usePostSaveFinancialMutation } = financialApi