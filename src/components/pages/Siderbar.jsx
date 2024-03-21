import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdBuild } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Siderbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-burger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="icon">{isOpen ? <IoClose /> : <IoMenu />}</span>
            </button>
          </header>
          <nav className={isOpen ? "" : "notxt"}>
          <button ><IoMdHome /><span>Home</span></button>
          <button className=""><IoMdSettings/> <span>Settings</span></button>
          <button><IoMdBuild/> <span>Build</span></button>
          <button><BsFillTelephoneFill/><span>Contact</span></button>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Siderbar;
