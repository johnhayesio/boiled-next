// Import pacakges
import { GetServerSideProps, NextPage } from 'next'
import styled from '@emotion/styled'
import axios from 'axios'

// Import elements
import { Container } from 'components/common'

interface Props {
  launch: {
    mission: string
    details: string
    timestamp: string
    rocket: string
    site: string
  }
}

const Home: NextPage<Props> = ({ launch: { mission, site, timestamp, rocket, details } }) => {
  const date = new Date(timestamp)

  return (
    <StyledWrapper>
      <Container>
        <StyledTitle>Mission: {mission}</StyledTitle>
        <StyledContent>{details}</StyledContent>
        <StyledContent>
          {rocket} will take off from {site}
        </StyledContent>
        <StyledContent>
          This launch is scheduled for {date.toDateString()} at {date.toTimeString()}
        </StyledContent>
      </Container>
    </StyledWrapper>
  )
}

// Fetch next launch from SpaceX API
export const getServerSideProps: GetServerSideProps = async () => {
  const nextLaunch = await axios
    .get('https://spacelaunchnow.me/api/3.5.0/launch/upcoming/?search=SpaceX')
    .then(res => res.data.results[0])

  return {
    props: {
      launch: {
        mission: nextLaunch.mission.type,
        details: nextLaunch.mission.description,
        timestamp: nextLaunch.net,
        rocket: nextLaunch.rocket.configuration.name,
        site: nextLaunch.pad.location.name,
      },
    },
  }
}

// Component Styling
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StyledTitle = styled.h1`
  font-size: 5rem;
`

const StyledContent = styled.p`
  font-size: 2rem;
  padding: 1rem 0;
`

export default Home
