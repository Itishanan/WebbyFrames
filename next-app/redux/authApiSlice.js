//authapislice
import { apiSlice } from "@/utils/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
    }),

    profile: builder.query({
      query: () => "/profile",
    }),

    logout: builder.mutation({
      query: () => "/logout",
    }),
  }),
});
