import { React } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
// qwqswswdwe


const Table = () => {
  return (
    <div className="container">
      <div className="table flex">
        <NavLink
          to="/dver"
          className={({ isActive }) =>
            isActive ? " active_table flex" : "table-liga flex"
          }
        >
          <img src="../../src/assets/icons/Seria-A.svg" alt="" /> Italiya.
          Seriya A
        </NavLink>
        <NavLink to="/sdcd"    className={({ isActive }) =>
            isActive ? " active_table flex" : " table-liga flex"
          }>
          <img src="../../src/assets/icons/APL.svg" alt="" /> Italiya. Seriya A
        </NavLink>
        <NavLink to="/wdcwe" className={({ isActive }) =>
            isActive ? " active_table flex" : " table-liga flex"
          }>
          <img src="../../src/assets/icons/Laliga.svg" alt="" /> Italiya. Seriya
          A
        </NavLink>
        <NavLink to="/wfwef" className={({ isActive }) =>
            isActive ? " active_table flex" : " table-liga flex"
          }>
          <img src="../../src/assets/icons/Bundesliga.svg" alt="" /> Italiya.
          Seriya A
        </NavLink>
        <NavLink to="/dwf" className={({ isActive }) =>
            isActive ? " active_table flex" : " table-liga flex"
          }>
          <img src="../../src/assets/icons/FranceLiga.svg" alt="" /> Italiya.
          Seriya A
        </NavLink>
      </div>
    </div>
  );
};

export default Table;
