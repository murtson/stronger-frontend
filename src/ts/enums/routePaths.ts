export enum MainRoutePaths {
  HOME = 'home',
  WORKOUT = 'workout',
  PROFILE = 'profile',
  LOG = 'log',
  REGISTER = 'register',
  LOGIN = 'login',
}

export enum HomeSubRoutes {
  STATS = 'stats',
  MUSCLES = 'muscles',
}

export enum WorkoutSubRoutes {
  EXERCISES = 'exercises',
  OVERVIEW = 'overview',
}

export enum LogSubRoutes {
  SELECT_CATEGORY = 'category',
  SELCECT_EXERCISE = 'category/:id',
  LOG_EXERCISE = ':id',
}
