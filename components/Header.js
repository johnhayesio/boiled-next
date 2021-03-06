// Import packages
import tw, { css, styled, theme } from 'twin.macro' // eslint-disable-line

const Header = () => {
  return (
    <div tw="fixed top-0 left-0 w-full bg-gray-200">
      <div css={css([theme`container`, tw`py-3`])}>
        <h1 tw="text-xl">Next SpaceX Launch</h1>
      </div>
    </div>
  )
}

export default Header
