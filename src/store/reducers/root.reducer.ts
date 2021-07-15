import { combineReducers } from "redux";
// import { feature1Reducer } from "../../../lib/feature1/store/reducers/feature1.reducer";
// import { feature2Reducer } from "../../../lib/feature2/store/reducers/feature2.reducer";

export interface IRootState {
  title: string;
}

interface IAction<T> {
  type: string;
  payload: T;
}

const initialState: IRootState = {
  title: "Root Stae",
};

export function appReducer(state = initialState, action: IAction<string>) {
  return state;
}

export const reducer = combineReducers({
  app: appReducer,
  // feature1: feature1Reducer,
  // feature2: feature2Reducer,
});
