import { CSSObject, css } from "styled-components";

// XLarge devices breakpoint
const XLDown = (props: CSSObject) =>
  css`
@media only screen and (max-width:1399px) {
  ${props}
}
`
// Large devices breakpoint
const LGDown = (props: CSSObject) =>
  css`
@media only screen and (max-width:1199px) {
  ${props}
}
`
// Medium devices breakpoint
const MDDown = (props: CSSObject) =>
  css`
@media only screen and (max-width:991px) {
  ${props}
}
`

export {
  XLDown,
  LGDown,
  MDDown
}