import React from 'react';
import { Button, TableView, TableViewCell } from 'react-ratchet'

import * as actions from './actions'
import { controlTypes } from './config'

const renderControlType = {
  [controlTypes.button]: (deviceId, controlId, value) => (
    <Button
      key={controlId}
      onClick={(a) => console.log(deviceId, controlId, 'clicked')}
    >
      {value.label}
    </Button>
  ),
  [controlTypes.slider]: (deviceId, controlId, value, current = 50, onChange) => (
    <input
      key={controlId}
      type="range"
      min={0}
      max={100}
      step={1}
      value={current}
      onChange={(e) => onChange(deviceId, controlId, e.target.value)}
    />
  ),
  [controlTypes.select]: (deviceId, controlId, value, current = 0, onChange) => (
    <select
      key={controlId}
      value={current}
      onChange={(e) => onChange(deviceId, controlId, e.target.value)}
    >
      {value.options.map((label, i) => (
        <option key={i} value={i}>{label}</option>
      ))}
    </select>
  )
}


export default ({ params }) => {
  const { devices, devicesTypes } = window.store
  const device = devices[params.id]
  const { id: deviceId, typeId, controls = {} } = device
  const type = devicesTypes[typeId]

  return (
    <div>
      <div className="content-padded">
        <h4>{device.label}</h4>
      </div>
      <div className="card">
        <TableView>
          {Object.entries(type.controls || {}).map(([controlId, value]) =>
            <TableViewCell key={controlId}>
              {value.label}
              {renderControlType[value.type](
                deviceId,
                controlId,
                value,
                controls[controlId],
                actions.setControlValue
              )}
            </TableViewCell>
          )}
        </TableView>
      </div>
    </div>
  )
}