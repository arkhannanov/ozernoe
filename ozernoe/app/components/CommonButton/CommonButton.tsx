import { Button, StyledEngineProvider } from '@mui/material'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from "./styles.module.css"
import clsx from 'clsx'

const CommonButton = ({children}: { children: any}) => {
    return (
        <Button 
        classes={{
            root: clsx(
                styles['common-button']
            ),
        }}
        >
        {children}
    </Button>
    )
}

export default CommonButton;

