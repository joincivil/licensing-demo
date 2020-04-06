import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { ContentDetail } from "./components/Content/ContentDetail";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<></>}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/:contentId?" component={ContentDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
