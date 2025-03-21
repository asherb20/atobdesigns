export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'string',
      name: 'description',
      title: 'Description',
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
    },
    {
      type: 'reference',
      name: 'author',
      title: 'Author',
      to: [{type: 'person'}],
    },
    {
      type: 'date',
      name: 'publishedDate',
      title: 'Published Date',
    },
    {
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      type: 'string',
      name: 'blogType',
      title: 'Type',
    },
  ],
}
