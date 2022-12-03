// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ranking, Workout2x2, Workout } = initSchema(schema);

export {
  Ranking,
  Workout2x2,
  Workout
};