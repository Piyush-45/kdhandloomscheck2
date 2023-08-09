import { defineField, defineType } from 'sanity';

export const product = defineType({
    name: 'product',
    title: 'products',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Name of the product',
            type: 'string'
        }),

        defineField({
            name: "slug",
            title: "slug",
            type: "slug",
            options: {
                source: "title", // Generate slug based on the "title" field
                maxLength: 200, // Set a maximum length for the generated slug
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            }
        }),

        defineField({
            name: 'description',
            title: 'Short Description of product',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Enable image hotspot for cropping
            },
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: "array",
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        // defineField({
        //     name: 'SKU',
        //     title: 'SKU',
        //     type: 'string',
        // }),
        defineField({
            name: 'Currency',
            title: 'Currency',
            type: 'string',
        }),

    ]
})