import useWSR, { Fetcher } from 'swr';

import { ApiResponse, Tecnology } from '@/interfaces';
import http from '@/lib/http';

const fetcher: Fetcher<Tecnology[], string> = async (url) => {
  const { data } = await http.get<ApiResponse<Tecnology[]>>(url);
  return data.data;
};

export const useTecnologies = () => {
  const { data: tecnologies, error, isLoading, mutate } = useWSR('/api/tecnologies', fetcher);

  return { tecnologies, mutate };
};
