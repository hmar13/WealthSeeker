import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgBigLogoComponent(props) {
  return (
    <Svg width={200} height={200} viewBox="0 0 200 200" fill="none" {...props}>
      <Circle cx={100} cy={100} r={100} fill="#00ADEF" />
      <Path
        d="M150 100c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50z"
        fill="#fff"
      />
      <Path
        transform="matrix(-.9063 -.42262 .5002 -.8659 54.595 192.001)"
        fill="#fff"
        d="M0 0H15V55.0427H0z"
      />
      <Circle cx={100} cy={100} r={31} fill="#FFBB02" />
    </Svg>
  )
}

export default SvgBigLogoComponent