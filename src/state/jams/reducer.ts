import { IJamsContextData } from "./types";

export type Actions = { type: "loadJams" };

export const JamsReducer = (
  state: IJamsContextData,
  action: Actions
): IJamsContextData => {
  switch (action.type) {
    // Accept an array of File objects and transform them into the structure used by the Queue components
    case "loadJams":
      // TODO: api call to get jam data
      return state;

    default:
      return state;
  }
};
