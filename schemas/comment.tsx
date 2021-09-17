import React from 'react'

export default {
  name: 'comment',
  type: 'object',
  fields: [
    {
      name: 'curator',
      type: 'reference',
      to: [{ type: 'curator' }],
    },
    {
      name: 'comment',
      type: 'text',
    },
  ],
  preview: {
    select: {
      comment: 'comment',
      firstName: 'curator.person.firstName',
      lastName: 'curator.person.lastName',
    },
    prepare({ comment, firstName, lastName }) {
      return {
        title: comment,
        subtitle: [firstName, lastName].join(' '),
        media: <span style={{ fontSize: '1.5rem' }}>💬</span>,
      }
    },
  },
}
