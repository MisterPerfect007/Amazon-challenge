/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

/**
 * @function Slide
 */
const Slide = ({ content }) => (
  <div
    css={css`
      width: 100%;
      
      `}
  >
    <img css={css`
      max-width: 100%;
      // object-fit: contain;
    `}
          src={content} alt=""/>
  </div>
)

export default Slide;