import axios from 'axios';
import useWSR, { Fetcher } from 'swr';

import { ApiResponse, Category } from '@/interfaces';

const fetcher: Fetcher<Category[], string> = async (url) => {
  const { data } = await axios.get<ApiResponse<Category[]>>(url);
  return data.data;
};

export const useCategories = () => {
  const api = '/api/categories';

  const { data: categories, error, isLoading, mutate } = useWSR(api, fetcher);

  const startAddCategory = async (category: Category) => {
    try {
      
      const { data } = await axios.post<ApiResponse<Category>>(api, category);
      
      return data.data;

    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return { categories, mutate, startAddCategory };
};
