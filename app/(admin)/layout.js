import "./admin.css";

export const metadata = {
  title: "ANAKYNGEMS Admin - Content Management System",
  description: "Admin panel for managing ANAKYNGEMS content with Sanity Studio",
};

export default function AdminLayout({ children }) {
  return <div className="admin-layout">{children}</div>;
}
