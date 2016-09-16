import ref from './firebase'
import { controlTypes } from './config'

export const setControlValue = (deviceId, controlId, value) =>
  ref
    .child(`devices/${deviceId}/controls/${controlId}/`)
    .set(value)
