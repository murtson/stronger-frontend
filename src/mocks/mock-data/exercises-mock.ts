import { CategoryColors } from '../../ts/enums/colors';
import { LogType } from '../../ts/enums/log-types';
import { Exercise } from '../../ts/interfaces/workout-interfaces';

export const exercises: Exercise[] = [
  // ------------- CHEST --------------
  {
    id: 101,
    categoryId: 1,
    name: 'Cable Crossover',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 102,
    categoryId: 1,
    name: 'Decline Barbell Bench Press',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 103,
    categoryId: 1,
    name: 'Decline Hammer Strength Chest Press',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 104,
    categoryId: 1,
    name: 'Flat Barbell Bench Press',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 105,
    categoryId: 1,
    name: 'Flat Dumbbell Bench Press',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 106,
    categoryId: 1,
    name: 'Flat Dumbbell Fly',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },

  {
    id: 107,
    categoryId: 1,
    name: 'Incline Barbell Bench Press',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 108,
    categoryId: 1,
    name: 'Incline Dumbbell Bench Press',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 109,
    categoryId: 1,
    name: 'Incline Dumbbell Fly',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 110,
    categoryId: 1,
    name: 'Incline Hammer Strength Chest Press',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 111,
    categoryId: 1,
    name: 'Seated Machine Fly',
    color: CategoryColors.CHEST_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },

  // ------------- Shoulders --------------

  {
    id: 201,
    categoryId: 2,
    name: 'Arnold Dumbbell Press',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 202,
    categoryId: 2,
    name: 'Behind The Neck Barbell Press',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 203,
    categoryId: 2,
    name: 'Cable Face Pull',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 204,
    categoryId: 2,
    name: 'Front Dumbbell Raise',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 205,
    categoryId: 2,
    name: 'Hammer Strength Shoulder Press',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 206,
    categoryId: 2,
    name: 'Lateral Dumbbell Raise',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 207,
    categoryId: 2,
    name: 'Log Press',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 208,
    categoryId: 2,
    name: 'One-Arm Standing Dumbbell Press',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 209,
    categoryId: 2,
    name: 'Overhead Press',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 210,
    categoryId: 2,
    name: 'Push Press',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 211,
    categoryId: 2,
    name: 'Rear Delt Dumbbell Raise',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 212,
    categoryId: 2,
    name: 'Rear Delt Machine Fly',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 213,
    categoryId: 2,
    name: 'Seated Dumbbell Lateral Raise',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 214,
    categoryId: 2,
    name: 'Seated Dumbbell Press',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 215,
    categoryId: 2,
    name: 'Smith Machine Overhead Press',
    color: CategoryColors.SHOULDER_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  // ------------- TRICEPS --------------
  {
    id: 301,
    categoryId: 3,
    name: 'Barbell Skullcrusher',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 302,
    categoryId: 3,
    name: 'Cable Overhead Triceps Extension',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 303,
    categoryId: 3,
    name: 'Close Grip Barbell Bench Press',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 304,
    categoryId: 3,
    name: 'Dips',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 305,
    categoryId: 3,
    name: 'Dumbbell Overhead Triceps Extension',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 306,
    categoryId: 3,
    name: 'EZ-bar Skullcrusher',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 307,
    categoryId: 3,
    name: 'Lying Triceps Extension',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 308,
    categoryId: 3,
    name: 'Parallell Bar Triceps Dip',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 309,
    categoryId: 3,
    name: 'Ring Dip',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 310,
    categoryId: 3,
    name: 'Rope Push Down',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 311,
    categoryId: 3,
    name: 'Smith Machine Close Grip Bench Press',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 312,
    categoryId: 3,
    name: 'V-Bar Push Down',
    color: CategoryColors.TRICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  // ------------- BACK --------------
  {
    id: 401,
    categoryId: 4,
    name: 'Back Extensions',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 402,
    categoryId: 4,
    name: 'Barbell Row',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },

  {
    id: 403,
    categoryId: 4,
    name: 'Barbell Shrug',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 404,
    categoryId: 4,
    name: 'Chin Up',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 405,
    categoryId: 4,
    name: 'Close Grip Lat Pulldown',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 406,
    categoryId: 4,
    name: 'Dumbell Row',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 407,
    categoryId: 4,
    name: 'Good Morning',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 408,
    categoryId: 4,
    name: 'Hammer Strength Row',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 409,
    categoryId: 4,
    name: 'Lat Pulldown',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 410,
    categoryId: 4,
    name: 'Machine Shrug',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 411,
    categoryId: 4,
    name: 'Neutral Chin Up',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 412,
    categoryId: 4,
    name: 'Pendlay Row',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 413,
    categoryId: 4,
    name: 'Pull Up',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 414,
    categoryId: 4,
    name: 'Rack Pull',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 415,
    categoryId: 4,
    name: 'Seated Cable Row',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 416,
    categoryId: 4,
    name: 'Straight-Arm Cable Pushdown',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 417,
    categoryId: 4,
    name: 'T-Bar Row',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 418,
    categoryId: 4,
    name: 'Straight-Arm Cable Pushdown',
    color: CategoryColors.BACK_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  // ------------- BICEPS ----------------
  {
    id: 501,
    categoryId: 5,
    name: 'Barbell Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 502,
    categoryId: 5,
    name: 'Cable Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 503,
    categoryId: 5,
    name: 'Dumbbell Concentration Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 504,
    categoryId: 5,
    name: 'Dumbbell Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 505,
    categoryId: 5,
    name: 'Dumbbell Hammer Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 506,
    categoryId: 5,
    name: 'Dumbbell Preacher Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 507,
    categoryId: 5,
    name: 'EZ-Bar Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 508,
    categoryId: 5,
    name: 'EZ-Bar Preacher Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 509,
    categoryId: 5,
    name: 'Overhand Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 510,
    categoryId: 5,
    name: 'Seated Incline Dumbbell Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 511,
    categoryId: 5,
    name: 'Seated Machine Curl',
    color: CategoryColors.BICEPS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  // ------------- LEGS ----------------
  {
    id: 601,
    categoryId: 6,
    name: 'Barbell Front Squat',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 602,
    categoryId: 6,
    name: 'Barbell Glute BrexerciseIdge',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 603,
    categoryId: 6,
    name: 'Barbell High-Bar Squat',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 604,
    categoryId: 6,
    name: 'Barbell Low-Bar Squat',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 605,
    categoryId: 6,
    name: 'Bulgarian Split Squat',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 606,
    categoryId: 6,
    name: 'Deadlift',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },

  {
    id: 607,
    categoryId: 6,
    name: 'Dumbbell Lunges',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 608,
    categoryId: 6,
    name: 'Glute-Ham Raise',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 609,
    categoryId: 6,
    name: 'Leg Extension Machine',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 610,
    categoryId: 6,
    name: 'Leg Press',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 611,
    categoryId: 6,
    name: 'Lying Leg Curl Machine',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 612,
    categoryId: 6,
    name: 'Romanian Deadlift',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 613,
    categoryId: 6,
    name: 'Seated Leg Curl Machine',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 614,
    categoryId: 6,
    name: 'Stiff-Legged Deadlift',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 615,
    categoryId: 6,
    name: 'Sumo Deadlift',
    color: CategoryColors.LEGS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  // ------------- CALVES ----------------
  {
    id: 701,
    categoryId: 7,
    name: 'Barbell Calf Raise',
    color: CategoryColors.CALVES_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 702,
    categoryId: 7,
    name: 'Donkey Calf Raise',
    color: CategoryColors.CALVES_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 703,
    categoryId: 7,
    name: 'Seated Calf Raise Machine',
    color: CategoryColors.CALVES_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 704,
    categoryId: 7,
    name: 'Smith Machine Calf Raise',
    color: CategoryColors.CALVES_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 705,
    categoryId: 7,
    name: 'Standing Calf Raise Machine',
    color: CategoryColors.CALVES_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  // ------------- ABS ----------------
  {
    id: 801,
    categoryId: 8,
    name: 'Ab-Wheel Rollout',
    color: CategoryColors.ABS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 802,
    categoryId: 8,
    name: 'Cable Crunch',
    color: CategoryColors.ABS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 803,
    categoryId: 8,
    name: 'Crunch',
    color: CategoryColors.ABS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 804,
    categoryId: 8,
    name: 'Crunch Machine',
    color: CategoryColors.ABS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 805,
    categoryId: 8,
    name: 'Decline Crunch',
    color: CategoryColors.ABS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 806,
    categoryId: 8,
    name: 'Dragon Flag',
    color: CategoryColors.ABS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 807,
    categoryId: 8,
    name: 'Hanging Knee Raise',
    color: CategoryColors.ABS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 808,
    categoryId: 8,
    name: 'Plank',
    color: CategoryColors.ABS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  {
    id: 809,
    categoryId: 8,
    name: 'SexerciseIde Plank',
    color: CategoryColors.ABS_COLOR,
    logType: LogType.WEIGHT_AND_REPS,
  },
  // ------------- CARDIO ----------------
  {
    id: 901,
    categoryId: 9,
    name: 'Cycling',
    color: CategoryColors.CARDIO_COLOR,
    logType: LogType.DISTANCE_AND_TIME,
  },
  {
    id: 902,
    categoryId: 9,
    name: 'Elliptical Trainer',
    color: CategoryColors.CARDIO_COLOR,
    logType: LogType.DISTANCE_AND_TIME,
  },
  {
    id: 903,
    categoryId: 9,
    name: 'Rowing Machine',
    color: CategoryColors.CARDIO_COLOR,
    logType: LogType.DISTANCE_AND_TIME,
  },
  {
    id: 904,
    categoryId: 9,
    name: 'Running (Outdoor)',
    color: CategoryColors.CARDIO_COLOR,
    logType: LogType.DISTANCE_AND_TIME,
  },
  {
    id: 905,
    categoryId: 9,
    name: 'Running (Treadmill)',
    color: CategoryColors.CARDIO_COLOR,
    logType: LogType.DISTANCE_AND_TIME,
  },
  {
    id: 906,
    categoryId: 9,
    name: 'Stationary Bike',
    color: CategoryColors.CARDIO_COLOR,
    logType: LogType.DISTANCE_AND_TIME,
  },
  {
    id: 907,
    categoryId: 9,
    name: 'Swimming',
    color: CategoryColors.CARDIO_COLOR,
    logType: LogType.DISTANCE_AND_TIME,
  },
  {
    id: 908,
    categoryId: 9,
    name: 'Walking',
    color: CategoryColors.CARDIO_COLOR,
    logType: LogType.DISTANCE_AND_TIME,
  },
];
