// Write your code here
import {useState} from 'react'
import {
  Image,
  Button,
  Container,
  BgContainer,
  Paragraph,
  Heading,
} from './styledComponents'

const ReadMore = props => {
  const [Data, setData] = useState(true)

  const OnEventOccur = () => {
    setData(!Data)
  }

  const {reactHooksDescription} = props

  return (
    <>
      <BgContainer>
        <Container>
          <Heading>React Hooks</Heading>
          <Paragraph>Hooks are a new addition to React</Paragraph>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          {Data ? (
            <>
              <Paragraph>{reactHooksDescription.slice(0, 170)}</Paragraph>
              <Button onClick={() => setData(prev => !prev)} active={Data}>
                Read More
              </Button>
            </>
          ) : (
            <>
              <Paragraph>{reactHooksDescription}</Paragraph>
              <Button onClick={OnEventOccur} active={Data}>
                Read Less
              </Button>
            </>
          )}
        </Container>
      </BgContainer>
    </>
  )
}
export default ReadMore
