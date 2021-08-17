import React, { useContext } from "react";
import { Item } from "semantic-ui-react";
import { GlobalContext } from "../../state/GlobalProvider";
import { IJam } from "../../types";

interface Props {
  jam: IJam;
}

export const Jam: React.FC<Props> = ({ jam }) => {
  const { jamsState } = useContext(GlobalContext);

  return (
    <Item.Group>
      <Item>
        <Item.Content>
          <Item.Header as="h4">{jam.name}</Item.Header>
          <Item.Meta>
            {jamsState.users[jam.creatorUserID].username} feat.{" "}
            {jam.collabUserIDs.map(
              (userId, index, userIds) =>
                `${jamsState.users[userId].username}${
                  index !== userIds.length - 1 ? ", " : ""
                }`
            )}
          </Item.Meta>
          <Item.Description>
            <p>{jam.description}</p>
            <p>{jam.tags.join(", ")}</p>
          </Item.Description>
          <Item.Meta></Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};
