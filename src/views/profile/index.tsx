import React, { useContext } from "react";
import { Grid, Header, Image, Item } from "semantic-ui-react";
import { AuthenticationContext } from "../../state/authentication/context";

function Profile() {
  const { state } = useContext(AuthenticationContext);

  return (
    <>
      <Header as="h2">My Profile</Header>
      {state.user && (
        <Item.Group>
          <Item>
            <Item.Image size="small" src={state.user?.imageUrl} circular />
            <Item.Content>
              <Item.Header as="a">
                {state.user.firstName} {state.user.lastName}
              </Item.Header>
              {/* <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src={state.user?.imageUrl} size="medium" circular />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra> */}
            </Item.Content>
          </Item>
        </Item.Group>
      )}
    </>
  );
}

export default Profile;
