import React from "react";

const HeroGlow: React.FC = () => {
  return (
    <svg
      width="1440"
      height="822"
      viewBox="0 0 1440 822"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        opacity="0.1"
        filter="url(#filter0_f_144_69)"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M665.007 1249.73C832.252 1261.65 1022.58 1313.43 1148.91 1228.26C1277.71 1141.43 1253.63 987.642 1249.16 855.924C1244.86 729.065 1240.52 592.565 1124.28 502.535C1007.8 412.31 829.626 392.063 665.007 403.469C515.019 413.862 376.23 470.776 281.61 560.922C195.79 642.683 193.299 750.857 190.093 855.924C186.771 964.793 166.907 1085.29 263.174 1165.11C361.369 1246.54 521.258 1239.48 665.007 1249.73Z"
          fill="#F6A91C"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_144_69"
          x="-213.833"
          y="0.580566"
          width="1867.67"
          height="1675.64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="200"
            result="effect1_foregroundBlur_144_69"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HeroGlow;
