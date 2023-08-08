import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import MemberPage from "./pages/MemberPage/MemberPage";
import GroupPage from "./pages/GroupPage/GroupPage";
import EducationPage from "./pages/EducationPage/EducationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import EventPage from "./pages/EventPage/EventPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import EditProduct from "./pages/EditProduct/EditProduct";
import ProductPage from "./pages/ProductPage/ProductPage";

const Wrapper = ({ children }: any): any => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function AppRouter() {
  return (
    <React.Fragment>
      <Router>
        <Wrapper>
          <Routes>
            <Route index element={<HomePage />} key={"home"} />
            <Route path="/member" element={<MemberPage />} key={"member"} />
            <Route path="/group" element={<GroupPage />} key={"group"} />
            <Route path="/event" element={<EventPage />} key={"event"} />
            <Route path="/product" element={<ProductPage />} key={"product"} />
            <Route
              path="/dashboard"
              element={<DashboardPage />}
              key={"dashboard"}
            />
            <Route
              path="/education"
              element={<EducationPage />}
              key={"education"}
            />
            <Route path="/edit" element={<EditProduct />}>
              <Route path=":id" element={<EditProduct />} />
            </Route>
            <Route path="/auth" element={<AuthPage />} key={"auth"} />
            <Route path="/login" element={<LoginPage />} key={"login"} />
            <Route path="/signup" element={<RegisterPage />} key={"signup"} />
          </Routes>
        </Wrapper>
      </Router>
    </React.Fragment>
  );
}

export default AppRouter;
