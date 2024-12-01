import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li>
          <input type="checkbox" id="genomics" />
          <label htmlFor="genomics">Genomics</label>
        </li>
        <li>
          <input type="checkbox" id="proteomics" />
          <label htmlFor="proteomics">Proteomics</label>
        </li>
        <li>
          <input type="checkbox" id="metabolomics" />
          <label htmlFor="metabolomics">Metabolomics</label>
        </li>
        <li>
          <input type="checkbox" id="drug-design" />
          <label htmlFor="drug-design">Drug Design</label>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
