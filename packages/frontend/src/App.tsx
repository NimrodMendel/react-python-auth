import { Container, Header, Content, Footer } from "rsuite";
import { DefaultFooter } from "./Components/DefaultFooter/DefaultFooter";
import { DefaultNavbar } from "./Components/Navbar/DefaultNavbar";


function App() {
  return (
    <>
      <Container>
        <Header>
          <DefaultNavbar />
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
