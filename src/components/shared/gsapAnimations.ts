
const start = "top-=370px center"
const duration = 1
const stagger = 0.2
// tween vars
const fadeIn: GSAPTweenVars = {
  opacity: 0,
  duration,
}
const fadeInUp: GSAPTweenVars = {
  opacity: 0,
  y: "100%",
  duration,
}

export {
  start,
  duration,
  stagger,
  fadeIn,
  fadeInUp
}