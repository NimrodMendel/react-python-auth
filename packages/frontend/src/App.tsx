import { Container, Header, Content, Footer, Navbar, Nav } from "rsuite";
import { DefaultFooter } from "./Components/DefaultFooter/DefaultFooter";
import CharacterAuthorizeIcon from "@rsuite/icons/CharacterAuthorize";

function App() {
  return (
    <>
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Brand>
              <a style={{ color: "#fff" }}>
                <CharacterAuthorizeIcon style={{ fontSize: "2em", marginRight: 10 }} />
              </a>
            </Navbar.Brand>
            <Nav>
              <Nav.Item>Home</Nav.Item>
              <Nav.Item>News</Nav.Item>
              <Nav.Item>Products</Nav.Item>
              <Nav.Menu title="About">
                <Nav.Item>Company</Nav.Item>
                <Nav.Item>Team</Nav.Item>
                <Nav.Item>Contact</Nav.Item>
              </Nav.Menu>
            </Nav>
            <Nav pullRight>
              <Nav.Item>Settings</Nav.Item>
            </Nav>
          </Navbar>
        </Header>

        <div style={{ border: "1px solid blue" }}>
          <Content>
            <h1>Content</h1>
          </Content>
        </div>

        <Footer>
          <DefaultFooter text="2024 - Nimrod Mendel" />
        </Footer>
      </Container>
    </>
  );
}

export default App;
