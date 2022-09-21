import { ACTION_TYPES } from "./postActionTypes";

export const INITIAL_STATE = {
   loading: false,
   post: {},
   error: null,
   name: '1',
   username: '',
   email: '',
};
export const postReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case ACTION_TYPES.POST_REQUEST:
         return {
            ...state,
            loading: true,
         };
      case ACTION_TYPES.POST_SUCCESS:
         return {
            ...state,
            loading: false,
            name: action.name,
            username: action.username,
            email: action.email,
            error: '',
         };
      case ACTION_TYPES.POST_FAILURE:
         return {
            ...state,
            loading: false,
            post: {},
            error: action.payload,
         };
      case ACTION_TYPES.POST_NAME:
         return state.post.name;
      case ACTION_TYPES.POST_USERNAME:
         return state.username;
      case ACTION_TYPES.POST_EMAIL:
         return state.email;
      case ACTION_TYPES.POST_STATE:
         return state;
      default:
         return state;
   }
}
