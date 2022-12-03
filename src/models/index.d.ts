import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRanking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ranking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rank?: number | null;
  readonly name?: string | null;
  readonly demo?: string | null;
  readonly desc?: string | null;
  readonly desc2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRanking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ranking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rank?: number | null;
  readonly name?: string | null;
  readonly demo?: string | null;
  readonly desc?: string | null;
  readonly desc2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ranking = LazyLoading extends LazyLoadingDisabled ? EagerRanking : LazyRanking

export declare const Ranking: (new (init: ModelInit<Ranking>) => Ranking) & {
  copyOf(source: Ranking, mutator: (draft: MutableModel<Ranking>) => MutableModel<Ranking> | void): Ranking;
}

type EagerWorkout2x2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout2x2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly demo?: string | null;
  readonly rep?: string | null;
  readonly area?: string | null;
  readonly name2?: string | null;
  readonly demo2?: string | null;
  readonly rep2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkout2x2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout2x2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly demo?: string | null;
  readonly rep?: string | null;
  readonly area?: string | null;
  readonly name2?: string | null;
  readonly demo2?: string | null;
  readonly rep2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Workout2x2 = LazyLoading extends LazyLoadingDisabled ? EagerWorkout2x2 : LazyWorkout2x2

export declare const Workout2x2: (new (init: ModelInit<Workout2x2>) => Workout2x2) & {
  copyOf(source: Workout2x2, mutator: (draft: MutableModel<Workout2x2>) => MutableModel<Workout2x2> | void): Workout2x2;
}

type EagerWorkout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly demo?: string | null;
  readonly steps?: string | null;
  readonly area?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly demo?: string | null;
  readonly steps?: string | null;
  readonly area?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Workout = LazyLoading extends LazyLoadingDisabled ? EagerWorkout : LazyWorkout

export declare const Workout: (new (init: ModelInit<Workout>) => Workout) & {
  copyOf(source: Workout, mutator: (draft: MutableModel<Workout>) => MutableModel<Workout> | void): Workout;
}