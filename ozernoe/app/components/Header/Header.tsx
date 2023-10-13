"use client";
import { Box, Button, StyledEngineProvider } from '@mui/material'
import Image from 'next/image'
import logo from './../../assets/logo.svg'
import { useState } from 'react';
import NavButton from '../NavButton/NavButton';
import styles from "./styles.module.css"
import CommonButton from '../CommonButton/CommonButton';

const pages = ['Информация о доме', 'ТСЖ и правление', 'Недвижимость в доме', 'О Красково', 'Контакты'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div className={styles['header']}>
            <div className={styles['top-wrapper']}>
                <Image
                    src={logo}
                    width={226}
                    alt="Logo Kraskovo"
                />
                <Box>
                    {pages.map((page, index) => <NavButton key={page} index={index}>{page}</NavButton>)}
                </Box>
            </div>
            <CommonButton>Обратная связь</CommonButton>

        </div>
    )
}

export default Header;

