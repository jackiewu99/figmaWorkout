// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Back, Workout } = initSchema(schema);

export {
  Back,
  Workout
};