import { routerReducer } from '@ngrx/router-store';
import { newsListReducer } from './list-news';

export function reducers() {
  return {
    router: routerReducer,
    newsList: newsListReducer,
  };
}
