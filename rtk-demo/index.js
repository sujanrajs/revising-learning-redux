const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial state", store.getState());

// replaced by redux logger
/* const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
}); */

// redux logger is removed for extra reducer
// const unsubscribe = store.subscribe(() => {});
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(fetchUsers());

// commented for asyncThunk (fetching: user)
/* store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(2));

unsubscribe();
 */
