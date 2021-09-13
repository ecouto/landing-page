import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { AgendaProps } from 'types/api'

const SectionAgenda = ({ title, description }: AgendaProps) => (
  <Container id="agenda">
    <Heading reverseColor>Curso 100% completo!</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
)

export default SectionAgenda
