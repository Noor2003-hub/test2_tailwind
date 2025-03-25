import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true, 
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => {
      return req.user?.role !== 'viewer';
    },
    delete: ({ req }) => req.user?.role === 'admin',
  },
 
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
}
