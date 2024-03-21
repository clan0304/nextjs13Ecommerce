'use client';

import useCreateProductModal from '@/app/hooks/useCreateProductModal';
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import Heading from '../Heading';

import { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

declare global {
  var cloudinary: any;
}

const CreateProductModal = () => {
  const createProductModal = useCreateProductModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      price: 0,
      descriptions: [''],
      category: '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'descriptions',
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const raw_image = data.image[0];
    const formData = new FormData();

    formData.append('file', raw_image);
    formData.append('upload_preset', 'eProject');

    try {
      setIsLoading(true);

      const uploadResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/dbkenzbif/image/upload',
        formData
      );

      if (!uploadResponse.data) {
        throw new Error('Something went wrong!');
      }

      const imageUrl = uploadResponse.data.secure_url;

      const productData = { ...data, image: imageUrl };

      await axios.post('/api/products', productData);
      reset();
      toast.success('A new product is created!');
      createProductModal.onClose();
    } catch (error) {
      toast.error('Somethis went wrong!');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <Heading title="Add a new Product" />
      </div>
      <label htmlFor="name">Name</label>
      <input {...register('name', { required: true })} className="border-2" />
      <label htmlFor="price">Price</label>
      <input
        {...register('price', { required: true, valueAsNumber: true })}
        className="border-2"
      />
      <label htmlFor="descriptions">Descriptions</label>
      {fields.map((field, index) => (
        <div key={field.id}>
          <textarea
            {...register(`descriptions[${index}]`, { required: true })}
            className="border-2"
            placeholder={`Description ${index + 1}`}
          />
          {index > 0 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="remove-button"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => append('')} className="add-button">
        Add Description
      </button>
      <label htmlFor="category ">Category</label>
      <select
        {...register('category', { required: true })}
        className="border-2"
      >
        <option value="wiredHeadphone">Wired Headphones</option>
        <option value="wirelessHeadphone">Wireless Headphones</option>
        <option value="earphone">EarPhones</option>
        <option value="wirelessEarphone">Wireless Earphones</option>
      </select>

      <input
        type="file"
        accept="image/*"
        {...register('image', { required: true })}
        className="border-2"
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={createProductModal.isOpen}
      title="Add Product"
      actionLabel="Create"
      onClose={createProductModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default CreateProductModal;
