// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Workout2x2, Workout } = initSchema(schema);

export {
  Workout2x2,
  Workout
};