import axios from 'axios';
import useWSR, { Fetcher } from 'swr';

import { ApiResponse, Project } from '@/interfaces';

const fetcher: Fetcher<Project[], string> = async (url) => {
  const { data } = await axios.get<ApiResponse<Project[]>>(url);
  return data.data;
};

export const useProjects = () => {
  const api = '/api/projects';

  const { data: projects, error, isLoading, mutate } = useWSR(api, fetcher);

  const startAddProject = async (project: Project) => {
    try {
      const { data } = await axios.post<ApiResponse<Project>>(api, project);
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const startUpdateProject = async (project: Project) => {
    try {
      const { data } = await axios.put<ApiResponse<Project>>(`${api}/${project.id}`, project);
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const startGetProjectById = async (id: number) => {
    try {
      const { data } = await axios.get<ApiResponse<Project>>(`${api}/${id}`);
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return {
    projects,
    error,
    isLoading,
    mutate,
    startAddProject,
    startUpdateProject,
    startGetProjectById,
  };
};
