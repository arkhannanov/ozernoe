import { Button, StyledEngineProvider } from '@mui/material'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from "./styles.module.css"
import clsx from 'clsx'

const NavButton = ({children, index}: { children: any, index?: number}) => {
    return (
        <Button 
            classes={{
                root: clsx(
					styles['navbutton'],
					index === 0 && styles['left-button'],
                    index === 4 && styles['right-button']
				),
			}}
            >
            {children}
        </Button>
    )
}

export default NavButton;

