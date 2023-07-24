import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import MemberPage from "./pages/MemberPage/MemberPage";
import GroupPage from "./pages/GroupPage/GroupPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/group" element={<GroupPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default AppRouter;
