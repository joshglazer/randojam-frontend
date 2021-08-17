import { jamsInitialState } from "./initialState";
import { IJamsContextData } from "./types";

export type Actions = { type: "loadJams" } | { type: "reset" };

export const JamsReducer = (
  state: IJamsContextData,
  action: Actions
): IJamsContextData => {
  switch (action.type) {
    // Accept an array of File objects and transform them into the structure used by the Queue components
    case "loadJams":
      // TODO: api call to get jam data
      return {
        ...state,
        myJams: [
          {
            name: "Ska Jam",
            description: "A ska song I thought of back in 1997",
            creatorUserID: "1234",
            collabUserIDs: ["2234", "3234"],
            tags: ["ska", "fast"],
          },
          {
            name: "Reggae Jam",
            description: "A reggae song",
            creatorUserID: "1234",
            collabUserIDs: ["2234"],
            tags: ["reggae", "mellow", "upbeat"],
          },
        ],
        collabJams: [
          {
            name: "Hip Hop Jam",
            description:
              "A real banger of a hip hop song, it should be on the radio",
            creatorUserID: "2234",
            collabUserIDs: ["1234"],
            tags: ["hip hop", "rap", "catchy"],
          },
          {
            name: "reggae jam 2",
            description: "A reggae song inspired by the ocean",
            creatorUserID: "3234",
            collabUserIDs: ["1234", "2234"],
            tags: ["reggae", "mellow", "slow"],
          },
        ],
        users: {
          "1234": {
            id: "1234",
            firstName: "Ringo",
            lastName: "Starr",
            username: "ringo",
          },
          "2234": {
            id: "2234",
            firstName: "John",
            lastName: "Lennon",
            username: "johnlennon",
          },
          "3234": {
            id: "3234",
            firstName: "Paul",
            lastName: "McCartney",
            username: "paulmccartney",
          },
        },
      };

    case "reset":
      return jamsInitialState;

    default:
      return state;
  }
};
