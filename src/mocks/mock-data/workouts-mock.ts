import { Workout, Exercise, ExerciseSet } from '../../ts/interfaces/workout-interfaces';
import { exercises } from './exercises-mock';

const cableCrossOver: Exercise = exercises[0];
const benchPress: Exercise = exercises[3];
const ArnoldDumbbellPress: Exercise = exercises[13];
const barbellRow: Exercise = exercises[39];

const exerciseSetMock1: ExerciseSet = {
  setId: 'some-set-id-1',
  exercise: cableCrossOver,
  sets: [
    { weight: 8.5, reps: 12 },
    { weight: 8.5, reps: 12 },
    { weight: 8.5, reps: 12 },
  ],
};

const exerciseSetMock2: ExerciseSet = {
  setId: 'some-set-id-2',
  exercise: benchPress,
  sets: [
    { weight: 80, reps: 8 },
    { weight: 80, reps: 8 },
    { weight: 85, reps: 6 },
    { weight: 85, reps: 6 },
  ],
};

const exerciseSetMock3: ExerciseSet = {
  setId: 'some-set-id-3',
  exercise: ArnoldDumbbellPress,
  sets: [
    { weight: 18, reps: 10 },
    { weight: 18, reps: 10 },
    { weight: 18, reps: 10 },
    { weight: 18, reps: 10 },
  ],
};

const exerciseSetMock4: ExerciseSet = {
  setId: 'some-set-id-4',
  exercise: barbellRow,
  sets: [
    { weight: 80, reps: 6 },
    { weight: 80, reps: 6 },
    { weight: 80, reps: 6 },
  ],
};

export const workoutMock1: Workout = {
  _id: 'some-workout-id-1',
  name: 'some-workout-name-1',
  userId: 'some-user-id',
  exercises: [exerciseSetMock1, exerciseSetMock2, exerciseSetMock3],
  isCompleted: true,
  time: {
    createdAt: '2022-05-25T13:54:47.000Z',
  },
};

export const workoutMock2: Workout = {
  _id: 'some-workout-id-2',
  name: 'some-workout-name-2',
  userId: 'some-user-id',
  exercises: [exerciseSetMock4],
  isCompleted: false,
  time: {
    createdAt: '2022-06-12T13:54:47.000Z',
  },
};

export const workoutsMock1: Workout[] = [workoutMock1, workoutMock2];
