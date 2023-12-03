import "./App.css";
import Container from "@mui/material/Container";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

function App() {
  const breadcrumbList = ["PAGES", "GALLERY"];
  const heading = "Gallery";

  return (
    <Container className="py-4">
      <Header heading={heading} breadcrumbList={breadcrumbList} />
      <Gallery />
    </Container>
  );
}

export default App;
