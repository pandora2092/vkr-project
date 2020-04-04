import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ListNewsActionTypes, GetAllNewsSuccessAction, GetNewsByIdSuccessAction } from '../actions/list-news';

export interface StateUnits {
  newsList: any;
  oneNews: any;
}

const initialState: StateUnits = {
  newsList: '',
  oneNews: '',
};

export function newsListReducer(state = initialState, action: Action) {

  switch (action.type) {
    case ListNewsActionTypes.ActionGetAllNewsSuccess: {
      const payload = (action as GetAllNewsSuccessAction).payload;
      return {
        ...state,
        newsList: payload.news
      };
    }

    case ListNewsActionTypes.ActionGetNewsByIdSuccess: {
      const payload = (action as GetNewsByIdSuccessAction).payload;
      return {
        ...state,
        oneNews: payload.row
      };
    }

    default:
      return state;
  }
}

export const getUnits = (state: StateUnits) => state.newsList;
export const getOneUnits = (state: StateUnits) => state.oneNews;

export const getUnitsState = createFeatureSelector<StateUnits>('newsList');
export const gettUnits = createSelector(
  getUnitsState,
  getUnits,
);

export const getOneUnitsState = createFeatureSelector<StateUnits>('oneNews');
export const gettOneUnits = createSelector(
  getUnitsState,
  getOneUnits,
);
