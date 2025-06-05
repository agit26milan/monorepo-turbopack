export interface ReduxActionProps<T> {
  type: string;
  payload: T;
}