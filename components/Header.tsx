// Import packages
import tw, { css, theme } from 'twin.macro' // eslint-disable-line

const Header: React.FC = () => {
  return (
    <div tw="fixed top-0 left-0 w-full bg-gray-200">
      <div css={css([theme`container`, tw`py-6`])}>
        <h1 tw="text-3xl">Next SpaceX Launch</h1>
      </div>
    </div>
  )
}

export default Header
