import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: () => true, 
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => {
      return req.user?.role !== 'viewer';
    },
    delete: ({ req }) => req.user?.role === 'admin',
  },
  
  admin: {
    defaultColumns: ['name', 'email', 'role'], 
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true, 
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Viewer', value: 'viewer' },
      ],
      defaultValue: 'editor', 
      required: true,
    },
  ],
  timestamps: true,
};