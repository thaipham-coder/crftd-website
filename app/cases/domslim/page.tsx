import Landing from '@/components/sections/cases/landing'
import FullImage from '@/components/sections/fullImage'
import ContainerImage from '@/components/sections/containerImage'
import mika from '@/public/images/BuiteNOM_Exterieur07_LR.jpg'
import Context from '@/components/sections/cases/context'
import Intro from '@/components/sections/cases/intro'
import Description from '@/components/sections/cases/description'

export default function Domslim() {
  return (
    <main>
      <Landing />
      <FullImage src={mika} alt="ik ben mika" />
      <Intro />
      <Context />
      <ContainerImage src={mika} alt="ik ben mika" padding="pb" />
      <FullImage src={mika} alt="ik ben mika" />
      <ContainerImage src={mika} alt="ik ben mika" bg="light" padding="pt" />
      <Description bg="light" padding="py" />
      <FullImage src={mika} alt="ik ben mika" />
      <FullImage src={mika} alt="ik ben mika" />
    </main>
  )
}
