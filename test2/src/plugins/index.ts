import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { searchPlugin } from '@payloadcms/plugin-search'
import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { searchFields } from '@/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/search/beforeSync'
import { buildConfig, PayloadRequest } from 'payload';
import { Page, Post } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Payload Website Template` : 'Payload Website Template'
}

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      access: {
        // Allow both admins and viewers to read redirects
        read: ({ req }: { req: PayloadRequest }) => {
          const userRole = req.user?.role;
          return userRole === 'admin' || userRole === 'viewer';
        },
        // Only admins can create, update, or delete redirects
        create: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
        update: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
        delete: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
      },
    
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
    formOverrides: {
      access: {
        read: () => true, // Public access to GET requests
        create: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
        update: ({ req }: { req: PayloadRequest }) => req.user?.role !== 'viewer',
        delete: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
      },
      // access: {
      //   // Allow both admins and viewers to read forms
      //   read: ({ req }: { req: PayloadRequest }) => {
      //     const userRole = req.user?.role;
      //     return userRole === 'admin' || userRole === 'viewer';
      //   },
      //   // Only admins can create, update, or delete forms
      //   create: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
      //   update: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
      //   delete: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
      // },
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
     formSubmissionOverrides: {
      access: {
        read: () => true, // Public access to GET requests
        create: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
        update: ({ req }: { req: PayloadRequest }) => req.user?.role !== 'viewer',
        delete: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
      },
  //     access: {
  //       // Allow both admins and viewers to read form submissions
  //       read: ({ req }: { req: PayloadRequest }) => {
  //         const userRole = req.user?.role;
  //         return userRole === 'admin' || userRole === 'viewer';
  //       },
  //       // Only admins can create, update, or delete form submissions
  //       create: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
  //       update: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
  //       delete: ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin',
  //     },
  
  }
  }),
  searchPlugin({
    collections: ['posts'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
  payloadCloudPlugin(),
]
