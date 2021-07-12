import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import AdminPage from "./views/admin/Tables.js";
import DashboardLayout from "./views/Dashboard/DashboardLayout.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProjectPage from "./views/UploadProjectPage/UploadProjectPage";
import DetailProjectPage from "./views/DetailProjectPage/DetailProjectPage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/admin" component={Auth(AdminPage, true)} />
          <Route exact path="/dashboard" component={Auth(DashboardLayout, true)} />
          <Route
            exact
            path="/project/upload"
            component={Auth(UploadProjectPage, true)}
          />
          <Route
            exact
            path="/project/:projectId"
            component={Auth(DetailProjectPage, null)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
