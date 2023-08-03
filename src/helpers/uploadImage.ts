import { CloudinaryResponse } from '@/interfaces/CloudinaryResponse';
import axios from 'axios';

const uploadImage = async (file?: File) => {
  if (!file) return null;
  try {
    const formData = new FormData();
    formData.append('upload_preset', 'portfolio');
    formData.append('file', file);
    const url = 'https://api.cloudinary.com/v1_1/dthuporgb/image/upload';
    const { data } = await axios.post<CloudinaryResponse>(url, formData);
    // console.log(data);
    return data.secure_url;
  } catch (error) {
    console.log('Error al cargar');
    console.log(error);
    return null;
  }
};

export default uploadImage;
