export default {
  name: 'playlist',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: rule => rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      validation: rule => rule.required(),
      options: {
        source: 'name',
      },
    },
    {
      name: 'curators',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'curator' }],
        },
      ],
    },
    {
      name: 'tracks',
      type: 'array',
      of: [
        {
          name: 'track',
          type: 'reference',
          to: [{ type: 'track' }],
        },
        {
          name: 'comment',
          type: 'comment',
        },
      ],
    },
  ],
}
