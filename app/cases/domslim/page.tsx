import Landing from '@/components/sections/cases/landing'
import FullImage from '@/components/sections/fullImage'
import ContainerImage from '@/components/sections/containerImage'
import mika from '@/public/images/BuiteNOM_Exterieur07_LR.jpg'
import Context from "@/components/sections/cases/context";
import Intro from "@/components/sections/cases/intro";


export default function Domslim() {
  return (
      <main>
      <Landing />
          <FullImage src={mika} alt="ik ben mika" />
          <Intro />
          <Context />
          <ContainerImage src={mika} alt="ik ben mika" />
      </main>
  )
}
