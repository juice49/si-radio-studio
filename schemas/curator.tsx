import React from 'react'

export default {
  name: 'curator',
  type: 'document',
  icon: () => <span style={{ fontSize: '1.5rem' }}>👤</span>,
  fields: [
    {
      name: 'person',
      type: 'person',
    },
  ],
  preview: {
    select: {
      firstName: 'person.firstName',
      lastName: 'person.lastName',
    },
    prepare({ firstName, lastName }) {
      return {
        title: [firstName, lastName].join(' '),
        media: <span style={{ fontSize: '1.5rem' }}>👤</span>,
      }
    },
  },
}
