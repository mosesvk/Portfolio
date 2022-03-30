export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Desctiption',
      type: 'string',
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [
        {
          title: 'Languages',
          name: 'languages',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string'
            },
            {
              title: 'Icon',
              name: 'icon',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }, 

      ]
    },
    {
      name: 'exerpt',
      title: 'Exerpt',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    },
  ],
};
