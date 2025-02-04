import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <nav className="p-4 bg-gray-900 text-white flex gap-4">
        <Link to="/">
          <h1 className="text-2xl font-semibold text-white">
            📚 Book Inventory System
          </h1>
        </Link>
      </nav>
      <main className="p-4 flex justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
