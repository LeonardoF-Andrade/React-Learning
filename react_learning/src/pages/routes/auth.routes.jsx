import { Routes, Route } from "react-router-dom";

import { SignIn } from "../Signin";
import { SignUp } from "../Signup";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}
