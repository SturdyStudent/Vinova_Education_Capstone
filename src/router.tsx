import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import MemberPage from "./pages/MemberPage/MemberPage";
import GroupPage from "./pages/GroupPage/GroupPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EducationPage from "./pages/EducationPage/EducationPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function AppRouter() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/group" element={<GroupPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default AppRouter;
