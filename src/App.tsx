import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { ContentView } from "./components/Content/ContentView";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<></>}>
        <Switch>
          <Route path="/dashboard/:activeTab?" component={Dashboard} />
          <Route path="/content/:contentId?" component={ContentView} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
