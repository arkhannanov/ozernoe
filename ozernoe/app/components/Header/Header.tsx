"use client";
import { Box, Button, StyledEngineProvider } from '@mui/material'
import Image from 'next/image'
import logo from './../../assets/logo.svg'
import { useState } from 'react';
import NavButton from '../NavButton/NavButton';
import styles from "./styles.module.css"

const pages = ['Информация о доме', 'ТСЖ и правление', 'Недвижимость в доме', 'О Красково', 'Контакты'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div className={styles['header']}>
            <Image
                src={logo}
                width={226}
                alt="Logo Kraskovo"
            />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => <NavButton key={page}>{page}</NavButton>)}
            </Box>

        </div>
    )
}

export default Header;

