// Import pacakges
import styled from '@emotion/styled'
import axios from 'axios'
import PropTypes from 'prop-types'

// Import elements
import { Container } from 'components/common'

const Home = ({ launch: { mission, site, timestamp, rocket, details } }) => {
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
export const getServerSideProps = async () => {
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

// Declare prop type validation
Home.propTypes = {
  launch: PropTypes.object.isRequired,
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
