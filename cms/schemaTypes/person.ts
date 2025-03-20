export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
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
  ],
}
