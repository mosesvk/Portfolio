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
      type: 'string'
    },
    {
      title: 'languages',
      name: 'Languages',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.unique()
    },
    {
      name: 'exerpt', 
      title: 'Exerpt',
      type: 'string'
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
