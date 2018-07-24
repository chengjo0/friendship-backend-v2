import { merge } from 'lodash';
import { getEndpointDescription } from '../utils/endpointDescriptionGenerator';
import { getTags, getUserTags } from '../handlers/tags';
import { getAuthWithScope } from '../utils/auth';

const tags = [
  {
    method: 'GET',
    path: '/api/tags',
    config: merge({}, getEndpointDescription('Get all the interests', 'tags')),
    handler: getTags,
  },
  {
    method: 'GET',
    path: '/api/tagsForUser',
    config: merge(
      {},
      getAuthWithScope('user'),
      getEndpointDescription('Get the tags for a specific user by id', 'tags'),
    ),
    handler: getUserTags,
  },
];

export default tags;
