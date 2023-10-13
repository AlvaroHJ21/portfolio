import useWSR, { Fetcher } from 'swr';
import http from '@/lib/http';

import { ApiResponse, Category } from '@/interfaces';

const fetcher: Fetcher<Category[], string> = async (url) => {
  const { data } = await http.get<ApiResponse<Category[]>>(url);
  return data.data;
};

export const useCategories = () => {
  const api = '/api/categories';

  const { data: categories, error, isLoading, mutate } = useWSR(api, fetcher);

  const startAddCategory = async (category: Category) => {
    try {
      const { data } = await http.post<ApiResponse<Category>>(api, category);
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return { categories, mutate, startAddCategory };
};
