import { Container, Header, Content, Footer } from "rsuite";
import { DefaultFooter } from "./Components/DefaultFooter/DefaultFooter";
import { DefaultNavbar } from "./Components/Navbar/DefaultNavbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world!</div>,
  },
  {
    path: "/about",
    element: (
      <>
        <h1>ABOUT</h1>
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <Container>
        <Header>
          <DefaultNavbar />
        </Header>

        <div style={{ border: "1px solid blue" }}>
          <Content>
            <RouterProvider router={router} />
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
