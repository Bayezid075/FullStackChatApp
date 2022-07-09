import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/chat" component={Chatpage} />
      </div>
    </ChakraProvider>
  );
}

export default App;
