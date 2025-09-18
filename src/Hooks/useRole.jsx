import React, { useContext } from 'react';
import { AuthContext } from '../Layout/AuthLayout/Authprovider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {

    const {user, loading} = useContext(AuthContext)
    const email = user.email
    const axiosPublic = useAxiosPublic()

   const { data: role, isLoading } = useQuery({
    queryKey: ["role", email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${email}`);
      console.log(res);
      return res.data?.role;
    },
    enabled: !!user?.email && !loading
  });

  return [role, isLoading];

};

export default useRole;