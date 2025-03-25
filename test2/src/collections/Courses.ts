import { CollectionConfig } from 'payload';
 import { User } from '../types'; 

const Courses: CollectionConfig = {
  slug: 'courses', 
  access: {
    read: () => true, 
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => {
      return req.user?.role !== 'viewer';
    },
    delete: ({ req }) => req.user?.role === 'admin',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Course Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Course Description',
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price',
      required: true,
    },
    {
      name: 'discountPrice',
      type: 'number',
      label: 'Discount Price',
    },
    {
      name:'rate',
      type: 'number',
      label:'Rate'
    },
    {
      name:'sales',
      type: 'number',
      label:'Sales'
    },
    {
      name: 'duration',
      type: 'text',
      label: 'Course Duration',
    },
    {
      name: 'lessons',
      type: 'number',
      label: 'Number of Lessons',
    },
    {
      name: 'progress',
      type: 'number',
      label: 'Progress (%)',
      min: 0,
      max: 100,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      options: [
        { label: 'Python', value: 'Python' },
        { label: 'Java', value: 'Java' },
        { label: 'C++', value: 'C++' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Course Image',
    },
  ],
};

export default Courses;