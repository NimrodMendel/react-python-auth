import React, { ReactElement } from "react";
import { Nav, Navbar } from "rsuite";
import CharacterAuthorizeIcon from "@rsuite/icons/CharacterAuthorize";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { login, logout } from "../../app/features/auth/authSlice";

export const DefaultNavbar: React.FC = (): ReactElement => {
  const isLoggedIn: boolean = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  const handleLogin = (): void => {
    dispatch(login());
  };

  const handleLogout = (): void => {
    dispatch(logout());
  };

  return (
    <Navbar appearance="inverse">
      <Navbar.Brand>
        <a style={{ color: "#fff" }}>
          <CharacterAuthorizeIcon style={{ fontSize: "2em", marginRight: 10 }} />
        </a>
      </Navbar.Brand>
      <Nav>
        {isLoggedIn ? (
          <>
            <Nav.Item>Home</Nav.Item>
            <Nav.Item>About</Nav.Item>
          </>
        ) : null}
      </Nav>
      <Nav pullRight>
        {!isLoggedIn ? (
          <>
            <Nav.Item onClick={handleLogin}>Login</Nav.Item>
          </>
        ) : (
          <Nav.Item onClick={handleLogout}>Logout</Nav.Item>
        )}
      </Nav>
    </Navbar>
  );
};
