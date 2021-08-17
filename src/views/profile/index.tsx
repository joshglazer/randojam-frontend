import React, { useContext } from "react";
import { Header, Item } from "semantic-ui-react";
import { GlobalContext } from "state/GlobalProvider";

function Profile() {
  const { authenticationState } = useContext(GlobalContext);

  return (
    <>
      <Header as="h2">My Profile</Header>
      {authenticationState.user && (
        <Item.Group>
          <Item>
            <Item.Image
              size="small"
              src={authenticationState.user?.imageUrl}
              circular
            />
            <Item.Content>
              <Item.Header as="a">
                {authenticationState.user.firstName}{" "}
                {authenticationState.user.lastName}
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      )}
    </>
  );
}

export default Profile;
