import { Button, StyledEngineProvider } from '@mui/material'
import Image from 'next/image'
import styles from "./styles.module.css"
import { ReactNode } from 'react'

const MainWrapper = ({children}: { children: ReactNode}) => {
  return (
        <div className={styles['mainWrapper']}>
            {children}
        </div>
  )
}

export default MainWrapper;

