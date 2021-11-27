import "./App.css";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Bodycontent } from "./Bodycontent";

export const drawerWidth = 240;

export default function App() {
  return (
    <div className="App">
      {/* making the sidebar */}
      <Sidebar />
      {/* making the appbar */}
      <Navbar />
      {/* making the body content */}
      <Bodycontent />
    </div>
  );
}
