import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <h3>Blog Appication</h3>
      </Link>
      <Link to="/">หน้าแรก</Link>
      <Link to="/blogs">บทความทั้งหมด</Link>
      <Link to="/about">เกี่ยวกับ</Link>
    </nav>
  );
}
export default Navbar;
