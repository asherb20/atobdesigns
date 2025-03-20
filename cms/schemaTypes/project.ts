export default {
  type: 'document',
  name: 'project',
  title: 'Project',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'url',
      name: 'url',
      title: 'URL',
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      fields: [
        {
          type: 'string',
          name: 'altText',
          title: 'Alternative Text',
        },
      ],
    },
    {
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
}
