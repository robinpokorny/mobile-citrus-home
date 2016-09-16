import React from 'react';
import { TableView, TableViewCell } from 'react-ratchet'
import { Link } from 'react-router'

export default () => (
  <div className="card">
    <TableView>
      {Object.entries(window.store.devices).map(([key, value]) =>
        <TableViewCell key={key}>
          <Link to={`/device/${key}`} className="navigate-right">
            {value.label}
          </Link>
        </TableViewCell>
      )}
    </TableView>
  </div>
)
