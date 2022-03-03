import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './features/contentSlice';
import { fetchAppContent } from './features/contentSlice';
import { fetchContent } from './features/contentSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

// store.dispatch(fetchAppContent({ id: 'test', color: 'test', type: 'test' }));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
