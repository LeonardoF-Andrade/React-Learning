import {Routes, Route} from 'react-router-dom';

import {Home} from "../Home"
import {New} from "../New"
import {Profile} from "../Profile"
import {Details} from "../Details"


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
