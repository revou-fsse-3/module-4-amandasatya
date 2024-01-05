import MultipleForm from "./components/Form";
import {
  RegiterUser,
  LoginUser,
  ProfileUser,
  ListCategory,
  UpdatedCategory,
} from "./components";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="flex flex-col justify-center items-center p-5 gap-1">
          <h1>Assignment module 2</h1>
          <Link
            to="/"
            className="bg-black w-32 text-white text-center rounded-md"
          >
            Check Point 1
          </Link>
          <NavLink
            to="login"
            className="bg-black w-32 text-white text-center rounded-md"
          >
            Module 2 final
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MultipleForm />} />
          <Route path="/checkpoint1" element={<MultipleForm />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<RegiterUser />} />
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/listCategory" element={<ListCategory />} />
          <Route path="/updateCategory" element={<UpdatedCategory />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
