import styled from 'styled-components'
import content from '../content/content.json'
import { css } from 'styled-components'

export default function Home() {
  return (
    <Container>
      <Card>
        <h1>{content.home.title}</h1>
        <h2>{content.home.subtitle}</h2>
        <h3>
          Labore laborum culpa incididunt irure dolore consequat nulla id quis
          reprehenderit dolore id proident.
        </h3>
        <p>
          Incididunt occaecat mollit incididunt eiusmod adipisicing qui laboris
          ullamco aliqua velit. Deserunt incididunt veniam culpa. Dolore
          pariatur aliqua commodo commodo enim nulla aliquip consequat consequat
          anim dolor elit eiusmod cupidatat. Consequat voluptate proident
          ullamco consequat sunt ut. Pariatur id eu qui in consequat minim ad ex
          amet enim occaecat.
        </p>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.background.primary};
  `}
`

const Card = styled.div`
  ${({ theme }) => css`
    width: 80%;
    background-color: ${theme.background.secondary};
    border: 1px solid ${theme.border.primary};
    box-shadow: ${theme.shadow.secondary};
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `}
`
