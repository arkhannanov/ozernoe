import { Button, StyledEngineProvider } from '@mui/material'
import Image from 'next/image'
import styles from "./styles.module.css"

const MainWrapper = ({children}) => {
  return (
        <div className={styles['mainWrapper']}>
            {children}
        </div>
  )
}

export default MainWrapper;

