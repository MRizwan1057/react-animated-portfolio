import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ color: "#FF5B22" }}
        >
          Riz1_Tech
        </motion.span>
        <div className="social">
          <motion.a whileHover={{ scale: 0.8 }} href="javascript:;">
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a whileHover={{ scale: 0.8 }} href="javascript:;">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a whileHover={{ scale: 0.8 }} href="javascript:;">
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.a whileHover={{ scale: 0.8 }} href="javascript:;">
            <img src="/dribbble.png" alt="" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
