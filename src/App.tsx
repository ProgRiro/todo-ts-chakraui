import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CSSReset />
      </ThemeProvider>
    </div>
  );
}

export default App;
