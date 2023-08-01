import { Image } from "./Image";
import { Category } from "./Category";
import { Tecnology } from './Tecnology';

export interface Project {
  id: number;
  name: string;
  description: string;
  categories: Category[];
  tecnologies: Tecnology[];
  cover: Image;
  url?: string;
}
