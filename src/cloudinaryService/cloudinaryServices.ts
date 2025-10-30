import catchAsync from '../utils/catchAsync';
import cloudinary from '../lib/cloudinary_config';

export const cloudinaryUpload = async (file: any, folder = 'uploads') => {
  if (!file || !file.buffer) {
    throw new Error('No file provided');
  }
  const base64String = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
  const result = await cloudinary.uploader.upload(base64String, {
    folder,
    resource_type: 'auto',
  });

  console.log('Full Cloudinary Response:', JSON.stringify(result, null, 2));

  return {
    public_id: result.public_id,
    url: result.secure_url,
  };
};

export const cloudinaryRemoveBgUpload = async (file: any, folder = 'uploads') => {
  if (!file || !file.buffer) {
    throw new Error('No file provided');
  }
  const base64String = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
  const result = await cloudinary.uploader.upload(base64String, {
    folder,
    resource_type: 'auto',
    background_removal: 'cloudinary_ai',
  });

  return {
    public_id: result.public_id,
    url: result.secure_url,
  };
};

export const cloudinaryDelete = async (public_id: string) => {
  if (!public_id) {
    throw new Error('No image url provided');
  }
  const response = await cloudinary.uploader.destroy(public_id);
  if (response.result === 'not found') {
    throw new Error('Image not found');
  }
};
