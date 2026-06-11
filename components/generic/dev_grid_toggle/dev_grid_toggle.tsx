'use client'

import { useState } from 'react'
import DevGrid from '../dev_grid/dev_grid'
import styles from './dev_grid_toggle.module.scss'

const DevGridToggle = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      {visible && <DevGrid />}
      <label className={styles.toggle}>
        <input type="checkbox" checked={visible} onChange={(e) => setVisible(e.target.checked)} />
        grid
      </label>
    </>
  )
}

export default DevGridToggle
