import { CloudinaryResponse } from '@/interfaces/CloudinaryResponse';

const uploadImage = async (file?: File): Promise<string | null> => {
  if (!file) return null;
  try {
    const formData = new FormData();
    formData.append('upload_preset', 'portfolio');
    formData.append('file', file);
    const url = 'https://api.cloudinary.com/v1_1/dthuporgb/image/upload';

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error al cargar');
    }

    const data: CloudinaryResponse = await response.json();
    return data.secure_url;
  } catch (error) {
    console.log('Error al cargar');
    console.log(error);
    return null;
  }
};

export default uploadImage;
