import React from 'react'
import "./style.scss"

const Table = () => {
  return (
    <div className="league-table-wrapper">
      <h2 className="league-table-heading">Jadval</h2>
      <select name="" id="" className="choose-league">
        <option value="Premier Liga">Angilya. Premier Liga</option>
        <option value="La liga">ispaniya. La liga</option>
        <option value="Bundesliga">Germaniya. Bundesliga</option>
        <option value="Serie A">Italiya. Serie A</option>
        <option value="Liga 1">Fransiya. Liga 1</option>
      </select>
      <table className="league-table">
        <thead>
          <tr className="table-thead-tr">
            <th className="league-table-th">No</th>
            <th className="league-table-th">Komanda</th>
            <th className="league-table-th">W</th>
            {/* g'alabalar */}
            <th className="league-table-th">D</th>
            {/* duranglar */}
            <th className="league-table-th">L</th>
            {/* maglubiyatlar */}
            <th className="league-table-th">BR</th>
            {/* toplar nisbati */}
            <th className="league-table-th">GS</th>
            {/* urilgan gollar */}
            <th className="league-table-th">GC</th>
            {/* o'tkazilgan gollar */}
            <th className="league-table-th">S</th>
            {/* achkolar */}
          </tr>
        </thead>
        <tbody>
          <tr className="table-body-tr">
            <td className="league-table-td">1</td>
            <td className="league-table-td">
              <img src="" alt="" />
              Barcelona
            </td>
            <td className="league-table-td">8</td>
            <td className="league-table-td">4</td>
            <td className="league-table-td">2</td>
            <td className="league-table-td">15</td>
            <td className="league-table-td">31</td>
            <td className="league-table-td">16</td>
            <td className="league-table-td">28</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table