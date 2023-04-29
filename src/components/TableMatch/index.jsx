import { React } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Table = () => {
  return (
    <div className="container">
      <div className="table flex">
        <NavLink
          to="/seria"
          className={({ isActive }) =>
            isActive ? " active_table flex" : "table-liga flex"
          }
        >
          <img src="../../src/assets/icons/Seria-A.svg" alt="" /> Italiya.
          Seriya A
        </NavLink>
        <NavLink
          to="/apl"
          className={({ isActive }) =>
            isActive ? " active_table flex" : " table-liga flex"
          }
        >
          <img src="../../src/assets/icons/APL.svg" alt="" /> Premier Liga
        </NavLink>
        <NavLink
          to="/laliga"
          className={({ isActive }) =>
            isActive ? " active_table flex" : " table-liga flex"
          }
        >
          <img src="../../src/assets/icons/Laliga.svg" alt="" /> LaLiga
          
        </NavLink>
        <NavLink
          to="/bundesliga"
          className={({ isActive }) =>
            isActive ? " active_table flex" : " table-liga flex"
          }
        >
          <img src="../../src/assets/icons/Bundesliga.svg" alt="" /> Bundesliga
        </NavLink>
        <NavLink
          to="/ligue"
          className={({ isActive }) =>
            isActive ? " active_table flex" : " table-liga flex"
          }
        >
          <img src="../../src/assets/icons/FranceLiga.svg" alt="" /> Ligue 1 
        </NavLink>
      </div>
 <div className="table-wrapper flex">
 <div className="table-matches flex">
        <div className="table-match flex">
          <div className="first-club"></div>
          <img src="" alt="" />
          <h4>Barcelona</h4>
        </div>
        <div className="score flex">
          <h2>0</h2>
          <h2>:</h2>
          <h2>0</h2>
        </div>
        <div className="table-match flex">
          <div className="second-club"></div>
          <img src="" alt="" />
          <h4>Liverpool</h4>
        </div>
        <span>11.11.2021 23:59</span>
      </div>
 <div className="table-matches flex">
        <div className="table-match flex">
          <div className="first-club"></div>
          <img src="" alt="" />
          <h4>Barcelona</h4>
        </div>
        <div className="score flex">
          <h2>0</h2>
          <h2>:</h2>
          <h2>0</h2>
        </div>
        <div className="table-match flex">
          <div className="second-club"></div>
          <img src="" alt="" />
          <h4>Liverpool</h4>
        </div>
        <span>11.11.2021 23:59</span>
      </div>
 <div className="table-matches flex">
        <div className="table-match flex">
          <div className="first-club"></div>
          <img src="" alt="" />
          <h4>Barcelona</h4>
        </div>
        <div className="score flex">
          <h2>0</h2>
          <h2>:</h2>
          <h2>0</h2>
        </div>
        <div className="table-match flex">
          <div className="second-club"></div>
          <img src="" alt="" />
          <h4>Liverpool</h4>
        </div>
        <span>11.11.2021 23:59</span>
      </div>
 <div className="table-matches flex">
        <div className="table-match flex">
          <div className="first-club"></div>
          <img src="" alt="" />
          <h4>Barcelona</h4>
        </div>
        <div className="score flex">
          <h2>0</h2>
          <h2>:</h2>
          <h2>0</h2>
        </div>
        <div className="table-match flex">
          <div className="second-club"></div>
          <img src="" alt="" />
          <h4>Liverpool</h4>
        </div>
        <span>11.11.2021 23:59</span>
      </div>
 <div className="table-matches flex">
        <div className="table-match flex">
          <div className="first-club"></div>
          <img src="" alt="" />
          <h4>Barcelona</h4>
        </div>
        <div className="score flex">
          <h2>0</h2>
          <h2>:</h2>
          <h2>0</h2>
        </div>
        <div className="table-match flex">
          <div className="second-club"></div>
          <img src="" alt="" />
          <h4>Liverpool</h4>
        </div>
        <span>11.11.2021 23:59</span>
      </div>
 <div className="table-matches flex">
        <div className="table-match flex">
          <div className="first-club"></div>
          <img src="" alt="" />
          <h4>Barcelona</h4>
        </div>
        <div className="score flex">
          <h2>0</h2>
          <h2>:</h2>
          <h2>0</h2>
        </div>
        <div className="table-match flex">
          <div className="second-club"></div>
          <img src="" alt="" />
          <h4>Liverpool</h4>
        </div>
        <span>11.11.2021 23:59</span>
      </div>
 <div className="table-matches flex">
        <div className="table-match flex">
          <div className="first-club"></div>
          <img src="" alt="" />
          <h4>Barcelona</h4>
        </div>
        <div className="score flex">
          <h2>0</h2>
          <h2>:</h2>
          <h2>0</h2>
        </div>
        <div className="table-match flex">
          <div className="second-club"></div>
          <img src="" alt="" />
          <h4>Liverpool</h4>
        </div>
        <span>11.11.2021 23:59</span>
      </div>
 <div className="table-matches flex">
        <div className="table-match flex">
          <div className="first-club"></div>
          <img src="" alt="" />
          <h4>Barcelona</h4>
        </div>
        <div className="score flex">
          <h2>0</h2>
          <h2>:</h2>
          <h2>0</h2>
        </div>
        <div className="table-match flex">
          <div className="second-club"></div>
          <img src="" alt="" />
          <h4>Liverpool</h4>
        </div>
        <span>11.11.2021 23:59</span>
      </div>
 
 
      </div>

    </div>
  );
};

export default Table;
