import React from 'react';
import { TableView, TableViewCell } from 'react-ratchet'
import { Link } from 'react-router'

export default ({ store }) => (
  store.devices
  ? <div className="card">
      <TableView>
        {Object.entries(store.devices || {}).map(([key, value]) =>
          <TableViewCell key={key}>
            <Link to={`/device/${key}`} className="navigate-right">
              {value.label}
            </Link>
          </TableViewCell>
        )}
      </TableView>
    </div>
  : <div className="content-padded"><h2>Loading…</h2></div>
)
