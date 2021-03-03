import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgLogoComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={12} fill="#00ADEF" />
      <Path d="M18 12a6 6 0 11-12 0 6 6 0 0112 0z" fill="#fff" />
      <Path fill="#fff" d="M6.551 23.04l-1.631-.76 3.304-5.72 1.631.76z" />
      <Circle cx={12} cy={12} fill="#FFBB02" r={3.72} />
    </Svg>
  )
}

export default SvgLogoComponent