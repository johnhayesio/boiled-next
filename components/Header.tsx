// Import packages
import styled from '@emotion/styled'

// Import commons
import { Container } from 'components/common'

// Import consts
import { medium } from 'consts'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <h1 className="text-3xl">Next SpaceX Launch</h1>
      </StyledContainer>
    </StyledHeader>
  )
}

// Component styles
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${medium};
`

const StyledContainer = styled(Container)`
  padding: 1.5rem 3rem;
`

export default Header
