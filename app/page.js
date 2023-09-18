import { Article } from '@/components/Article'
import { SubSection } from '@/components/SubSection'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Article
        title={'Título Inicial'}
        resume={'Resumenasdjkasdkasdhashuipasdhuiasdhioasuhasduioasuiodhaiosuhdasuiodhasuiohasduio'}
      >
        <SubSection
          subtitle={'Subtitulo1'}
          resume={'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'}
        >
        </SubSection>
      </Article>
    </>
  )
}
