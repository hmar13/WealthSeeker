import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAccountComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 10c2.762 0 5-2.237 5-5s-2.238-5-5-5C7.237 0 5 2.237 5 5s2.237 5 5 5zm0 2.5c-3.338 0-10 1.675-10 5V20h20v-2.5c0-3.325-6.662-5-10-5z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgAccountComponent;