import { Outlet } from "react-router-dom";

function Root() {
  return (
    <main className="antialiased text-slate-500 text-slate-400 bg-slate-900 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold pb-8 text-white">
          Art Institute of Chicago Gallery
        </h1>
        <Outlet />
      </div>
    </main>
  );
}

export default Root;
