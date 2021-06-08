export interface IFeature2State {
  title: string;
}

interface IAction<T> {
  type: string;
  payload: T;
}

const initialState: IFeature2State = {
  title: "Feature 2 State",
};

export function feature2Reducer(
  state = initialState,
  action: IAction<string>
) {
  return state;
}
