import React from "react";
import Navbar from "../components/navbar/navbar";
function Layout({ children }) {
  return (
    <div>
      <header>
        <Navbar
          person={{
            username:
              typeof window !== "undefined"
                ? localStorage.getItem("user") !== null
                  ? JSON.parse(localStorage.getItem("user")).username
                  : "Unknowen"
                : "Unknowen",
            porofile_img:
              typeof window !== "undefined"
                ? localStorage.getItem("user") !== null
                  ? JSON.parse(localStorage.getItem("user")).porofile_img
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAA1BMVEWFhYWbov8QAAAASElEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A8XAAAG6+KQCAAAAAElFTkSuQmCC"
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAA1BMVEWFhYWbov8QAAAASElEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A8XAAAG6+KQCAAAAAElFTkSuQmCC",
          }}
        />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
