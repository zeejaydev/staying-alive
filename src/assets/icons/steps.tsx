import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={23}
      height={20}
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.436 17.5h6.346a1.25 1.25 0 000-2.5h-5.508c-.472 0-.922-.2-1.238-.552L4.86 7.586a1.174 1.174 0 10-1.741 1.576l7.084 7.792c.316.348.764.546 1.233.546z"
        stroke="#865A19"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.958 10.95l3.24 4.05h-6.666L4.62 7.32a.833.833 0 00-1.209-.032l-.212.212 3.054-4.887c.4-.64 1.376-.462 1.524.278L8.199 5h1.54a.417.417 0 00.231-.07l.58-.386a1.667 1.667 0 012.505.86l1.764 5.288c.03.094.078.18.14.257zM13.199 7.5l-3.334.833"
        stroke="#865A19"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.547 9.394a.625.625 0 10.303 1.212l-.303-1.212zm3.333-.834l-3.333.834.303 1.212 3.334-.833-.303-1.213z"
        fill="#865A19"
      />
      <Path
        d="M6.532 17.5H2.365M4.032 15H2.365"
        stroke="#865A19"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
