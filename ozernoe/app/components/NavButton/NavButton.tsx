import { Button, StyledEngineProvider } from '@mui/material'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from "./styles.module.css"

const NavButton = ({children}: { children: any}) => {
    console.log(children)
    return (
        <Button 
            classes={{
				root: styles['navbutton'],
			}}
            >
            {children}
        </Button>
    )
}

export default NavButton;

