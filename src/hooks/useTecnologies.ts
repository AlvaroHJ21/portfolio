import axios from 'axios';
import useWSR, { Fetcher } from 'swr';

import { ApiResponse, Tecnology } from '@/interfaces';

const fetcher: Fetcher<Tecnology[], string> = async (url) => {
  const { data } = await axios.get<ApiResponse<Tecnology[]>>(url);
  return data.data;
};

export const useTecnologies = () => {
  const { data: tecnologies, error, isLoading, mutate } = useWSR('/api/tecnologies', fetcher);

  return { tecnologies, mutate };
};
