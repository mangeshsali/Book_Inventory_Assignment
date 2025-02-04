import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Home</Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
