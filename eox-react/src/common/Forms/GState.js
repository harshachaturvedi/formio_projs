// import { ACTION_TYPES } from "./postActionTypes";
import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  fullname: 'Bat man',
  username: 'bats',
  email: 'bruce@bats.com',
  screen: 'initialScreen',
});
export { useGlobalState, setGlobalState };