import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Header, Image, Menu } from "semantic-ui-react";
import { AuthenticationContext } from "../../state/authentication/context";

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
  const { state, dispatch } = useContext(AuthenticationContext);

  const handleLogout = () => {
    dispatch({ type: "logout" });
    // history.push("/");
  };

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to="/" header>
          {/* <Image
              size="mini"
              src="/logo.png"
              style={{ marginRight: "1.5em" }}
            /> */}
          <Header as="h1" inverted>
            Rando Jam
          </Header>
        </Menu.Item>

        <Menu.Menu position="right">
          {state.user ? (
            <Menu.Item>
              <Dropdown
                trigger={
                  <span>
                    <Image
                      src={state.user.imageUrl}
                      alt=""
                      style={{
                        boxShadow: "0px 0px 5px 2px rgb(255, 255, 255, 0.2)",
                      }}
                      className="ui avatar image"
                    />
                    {state.user.username}
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
