import { Button, StyledEngineProvider } from '@mui/material'
import Image from 'next/image'
import Header from './components/Header/Header'
import MainWrapper from './components/MainWrapper/MainWrapper'
import banner from "./assets/banner.png"
import styles from "./styles.module.css"
import ApplicationForm from './components/ApplicationForm/ApplicationForm'

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>
      <MainWrapper>
        <Header />
        <Image
          src={banner}
          width={1440}
          height={600}
          alt="Logo Kraskovo"
        />
        <div className={styles['description']}>
          Это официальный сайт дома, находящегося по адресу пгт Красково, 2-ая Заводская, 20/1.
          Здесь вы можете ознакомиться с уставными документами ТСЖ "Озёрное", изучить финансовый отчёт правления, а также оставить заявку на ремонт коммуникаций в вашей квартире
          или прилегающей к дому территории, оставить жалобу или связаться с членами правления.
        </div>
      <ApplicationForm/>
      </MainWrapper>
    </StyledEngineProvider>
  )
}





