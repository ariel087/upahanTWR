import HeroComponent from "./components/HeroComponent";
import NavBarComponent from "./components/NavBarComponent";

function App() {
  return (
    <>
      <body className="w-full h-screen bg-primary">
      <NavBarComponent/>
      <HeroComponent/>
      </body>
    </>
  );
}

export default App;
