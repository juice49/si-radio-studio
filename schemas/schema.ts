import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import playlist from './playlist'
import person from './person'
import curator from './curator'
import comment from './comment'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([person, playlist, curator, comment]),
})
