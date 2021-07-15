export interface IFeature1State {
  title: string;
}

interface IAction<T> {
  type: string;
  payload: T;
}

const initialState: IFeature1State = {
  title: "Feature 1 State",
};

export function feature1Reducer(state = initialState, action: IAction<string>) {
  return state;
}
