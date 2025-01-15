import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Work from "./Components/Work";
import { ThemeProvider } from "./Components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Home />
        <Work />
      </div>
    </ThemeProvider>
  );
}

export default App;
