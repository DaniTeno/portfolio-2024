import "./App.css";
import Main from "./components/Main";
import { HeaderProvider } from "./context/HeaderContext";

function App() {
  return (
    <div className="main-layout relative">
      <HeaderProvider>
        <Main />
      </HeaderProvider>
    </div>
  );
}

export default App;
