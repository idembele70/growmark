import { CSSObject, css } from "styled-components";

// XLarge devices breakpoint
const XLUp = (props: CSSObject) =>
  css`
@media only screen and (min-width:1400px) {
  ${props}
}
`
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
const MDUp = (props: CSSObject) =>
  css`
@media only screen and (min-width:992px) {
  ${props}
}`

const MDDown = (props: CSSObject) =>
  css`
@media only screen and (max-width:991px) {
  ${props}
}
`
// Small devices breakpoint
const SMUp = (props: CSSObject) =>
  css`
@media only screen and (min-width:768px) {
  ${props}
}`
const SMDown = (props: CSSObject) =>
  css`
@media only screen and (max-width:767px) {
  ${props}
}`
// XSmall devices breakpoint
const XSUp = (props: CSSObject) =>
  css`
@media only screen and (min-width:567px) {
  ${props}
}`
const XSDown = (props: CSSObject) =>
  css`
@media only screen and (max-width:567px) {
  ${props}
}`

export {
  XLUp,
  XLDown,
  LGDown,
  MDUp,
  MDDown,
  SMUp,
  SMDown,
  XSUp,
  XSDown,
}