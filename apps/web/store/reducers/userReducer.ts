import { ReduxActionProps } from "../interfaces";
import { SAVE_DATA_USER } from "../types";

export interface User {
  name?: string;
  email?: string;
  photoUrl?: string | null;
  uid?: string;
  createdAt?: number;
  updatedAt?: number;
  totalAverageWeightRatings?: number;
  numberOfRents?: number;
  recentlyActive?: number;
}
interface UserReduxProps {
  user: User;
}

const initialState: UserReduxProps = {
  user: {},
};

const UserReducer = (
  state = initialState,
  action: ReduxActionProps<User>
) => {
  switch (action.type) {
    case SAVE_DATA_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
