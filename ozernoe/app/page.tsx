import { Button, StyledEngineProvider } from '@mui/material'
import Image from 'next/image'
import Header from './components/Header/Header'
import MainWrapper from './components/MainWrapper/MainWrapper'
import banner from "./assets/banner.png"

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
        
      </MainWrapper>
    </StyledEngineProvider>
  )
}





