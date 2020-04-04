import { Action } from '@ngrx/store';

export enum ListNewsActionTypes {
  ActionGetAllNews = 'ACTION_GET_ALL_NEWS',
  ActionGetAllNewsSuccess = 'ACTION_GET_ALL_NEWS_SUCCESS',
  ActionGetAllNewsFailure = 'ACTION_GET_ALL_NEWS_FAILURE',
  ActionAddNews = 'ACTION_ADD_NEWS',
  ActionAddNewsSuccess = 'ACTION_ADD_NEWS_SUCCUSS',
  ActionDeleteNewsById = 'ACTION_DETELE_NEWS_BY_ID',
  ActionDeleteNewsByIdSuccess = 'ACTION_DETELE_NEWS_BY_ID_SUCCESS',
  ActionEditNewsById = 'ACTION_EDIT_NEWS_BY_ID',
  ActionEditNewsByIdSuccess = 'ACTION_EDIT_NEWS_BY_ID_SUCCESS',
  ActionGetNewsById = 'ACTION_GET_NEWS_BY_ID',
  ActionGetNewsByIdSuccess = 'ACTION_GET_NEWS_BY_ID_SUCCESS',
}

export class GetAllNewsAction implements Action {
  readonly type = ListNewsActionTypes.ActionGetAllNews;
  public payload: { };

  constructor() {
    this.payload = { };
  }
}

export class GetAllNewsSuccessAction implements Action {
  readonly type = ListNewsActionTypes.ActionGetAllNewsSuccess;
  public payload: { news: any };

  constructor( news: any ) {
    this.payload = { news };
  }
}

export class GetAllNewsFailureAction implements Action {
  readonly type = ListNewsActionTypes.ActionGetAllNewsFailure;
  public payload: { };

  constructor(err: any) {
    this.payload = {
      err,
    };
  }
}

export class AddNewsAction implements Action {
  readonly type = ListNewsActionTypes.ActionAddNews;
  public payload: { name: string,  code: string, manuscript: string, info: string, bibliography: string};

  constructor( name: string,  code: string, manuscript: string, info: string, bibliography: string ) {
    this.payload = { name,  code, manuscript, info, bibliography };
  }
}

export class AddNewsSuccessAction implements Action {
  readonly type = ListNewsActionTypes.ActionAddNewsSuccess;
  public payload: { };

  constructor( ) {
    this.payload = { };
  }
}

export class DeleteNewsByIdAction implements Action {
  readonly type = ListNewsActionTypes.ActionDeleteNewsById;
  public payload: { id: any };

  constructor( id: any ) {
    this.payload = { id };
  }
}

export class DeleteNewsByIdSuccessAction implements Action {
  readonly type = ListNewsActionTypes.ActionDeleteNewsByIdSuccess;
  public payload: {  };

  constructor( ) {
    this.payload = {  };
  }
}

export class EditNewsByIdAction implements Action {
  readonly type = ListNewsActionTypes.ActionEditNewsById;
  public payload: { id: any, name: string, code: string, manuscript: string, info: string, bibliography: string};

  constructor( id: any, name: string, code: string, manuscript: string, info: string, bibliography: string ) {
    this.payload = { id, name, code, manuscript, info, bibliography };
  }
}

export class EditNewsByIdSuccessAction implements Action {
  readonly type = ListNewsActionTypes.ActionEditNewsByIdSuccess;
  public payload: {  };

  constructor( ) {
    this.payload = {  };
  }
}

export class GetNewsByIdAction implements Action {
  readonly type = ListNewsActionTypes.ActionGetNewsById;
  public payload: { id: any };

  constructor( id: any ) {
    this.payload = { id };
  }
}

export class GetNewsByIdSuccessAction implements Action {
  readonly type = ListNewsActionTypes.ActionGetNewsByIdSuccess;
  public payload: {row: any};

  constructor(row: any ) {
    this.payload = {row};
  }
}
