import { Category } from './Category';
import { Tecnology } from './Tecnology';

export interface Project {
  id?: number;
  name: string;
  description: string;
  url?: string;
  images: string[];
  categories: Category[];
  tecnologies: Tecnology[];
  priority?: number;
  published?: boolean;
}
