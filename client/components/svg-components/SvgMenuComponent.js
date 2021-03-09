import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuComponent(props) {
  return (
    <Svg
      width={30}
      height={40}
      viewBox="0 0 36 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4 35h27v-3.833H4V35zm0-9.583h27v-3.834H4v3.834zM4 12v3.833h27V12H4z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgMenuComponent;