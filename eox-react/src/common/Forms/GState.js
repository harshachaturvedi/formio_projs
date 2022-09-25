// import { ACTION_TYPES } from "./postActionTypes";
import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  fullname: 'Bat man',
  screen: 'initialScreen',
});
export { useGlobalState, setGlobalState };