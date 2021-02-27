// Import packages
import tw, { css, styled, theme } from 'twin.macro' // eslint-disable-line

// Import commons
import { Container } from 'common'

const Header = () => {
  return (
    <div tw="fixed top-0 left-0 w-full bg-gray-200">
      <StyledContainer>
        <h1 tw="text-3xl">Next SpaceX Launch</h1>
      </StyledContainer>
    </div>
  )
}

// Component styles
const StyledContainer = styled(Container)`
  padding: 1.5rem;
`

export default Header
