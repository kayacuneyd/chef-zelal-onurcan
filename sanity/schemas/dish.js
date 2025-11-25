export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Dish Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Ingredients story or flavor profile.'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Dish Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'season',
      title: 'Season',
      type: 'string',
      options: {
        list: [
          {title: 'Winter', value: 'winter'},
          {title: 'Spring', value: 'spring'},
          {title: 'Summer', value: 'summer'},
          {title: 'Autumn', value: 'autumn'},
          {title: 'All Year', value: 'all-year'}
        ],
      }
    }
  ],
}
