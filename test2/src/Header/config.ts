import type { GlobalConfig } from 'payload'
import { PayloadRequest } from 'payload'; // Import PayloadRequest for typing
import { revalidateHeader } from './hooks/revalidateHeader';
import { link } from '@/fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
      read: () => true, // 👈 Allows public access to GET requests
      update: ({ req }: { req: PayloadRequest }) => req.user?.role !== 'viewer',
    },
  // access: {
  //     // Allow all users to read the Footer global
  //     read: () => true,
  //     // Only allow admins to update the Footer global
  //     update: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
  //   },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
