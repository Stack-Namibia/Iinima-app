import { Action, Store } from "@reduxjs/toolkit";

const logger: any = (store: Store) => (next: any) => (action: Action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const result = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
