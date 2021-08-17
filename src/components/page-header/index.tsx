import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Header, Image, Menu } from "semantic-ui-react";
import { GlobalContext } from "state/GlobalProvider";

interface INavItem {
  name: string;
  path: string;
}

const loggedOutNavItems: INavItem[] = [
  {
    name: "Login",
    path: "/login",
  },
  { name: "Sign Up", path: "/signup" },
];

function PageHeader(): JSX.Element {
  const { authenticationState, authenticationDispatch } =
    useContext(GlobalContext);

  const handleLogout = () => {
    authenticationDispatch({ type: "logout" });
  };

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to="/" header>
          <Header as="h1" inverted>
            Rando Jam
          </Header>
        </Menu.Item>

        <Menu.Menu position="right">
          {authenticationState.user ? (
            <Menu.Item>
              <Dropdown
                trigger={
                  <span>
                    <Image
                      src={authenticationState.user.imageUrl}
                      alt=""
                      style={{
                        boxShadow: "0px 0px 5px 2px rgb(255, 255, 255, 0.2)",
                      }}
                      className="ui avatar image"
                    />
                    {authenticationState.user.username}
                  </span>
                }
                className="icon"
              >
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile" text="My Profile" />
                  <Dropdown.Item onClick={handleLogout} text="Logout" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          ) : (
            loggedOutNavItems.map((navItem) => (
              <Menu.Item
                as={Link}
                to={navItem.path}
                key={navItem.path}
                name={navItem.name}
              />
            ))
          )}
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default PageHeader;
