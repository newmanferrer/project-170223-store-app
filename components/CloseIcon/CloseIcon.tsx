'use client'

import { Container, Span } from './StyledComponents'

interface IProps {
  colorPrimary?: boolean
  mediaQueries?: boolean
  onClickFunction?: () => void
}

export function CloseIcon({ colorPrimary, mediaQueries, onClickFunction }: IProps) {
  return (
    <Container className='container' mediaQueries={mediaQueries} onClick={onClickFunction}>
      <Span colorPrimary={colorPrimary} className='container__span' />
      <Span colorPrimary={colorPrimary} className='container__span' />
    </Container>
  )
}
