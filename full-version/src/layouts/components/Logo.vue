<template>
  <div class="container">
    <svg width="55px" height="55px"  viewBox="0 0 139 95"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%" id="linearGradient-1">
                    <stop stop-color="#000000" offset="0%"></stop>
                    <stop stop-color="#FFFFFF" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%" id="linearGradient-2">
                    <stop stop-color="#EEEEEE" stop-opacity="0" offset="0%"></stop>
                    <stop stop-color="#FFFFFF" offset="100%"></stop>
                </linearGradient>
            </defs>
      <sodipodi:namedview
        id="base"
        pagecolor="#ffffff"
        bordercolor="#666666"
        borderopacity="1.0"
        inkscape:pageopacity="0.0"
        inkscape:pageshadow="2"
        inkscape:zoom="1.4422836"
        inkscape:cx="-73.537593"
        inkscape:cy="34.503052"
        inkscape:document-units="mm"
        inkscape:current-layer="svg895"
        showgrid="false"
        inkscape:window-width="1920"
        inkscape:window-height="1017"
        inkscape:window-x="-8"
        inkscape:window-y="-8"
        inkscape:window-maximized="1"
        fit-margin-top="0"
        fit-margin-left="0"
        fit-margin-right="0"
        fit-margin-bottom="0" />
      <g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="Page-1"
        transform="translate(-40.203894,-55.805083)">
        <g
          id="Artboard"
          transform="translate(-14.498521,-2.8348214)"
          style="stroke-width:5.56699991;stroke-miterlimit:4;stroke-dasharray:none">
          <path  id="Path" class="text-primary fill-current"></path>
          <path  id="Path" fill="url(#linearGradient-1)" opacity="0.2"></path>
          <path
            inkscape:connector-curvature="0"
            id="Path-2"
            class="text-primary fill-current"
            fill="url(#linearGradient-2)"
            style="fill-rule:evenodd;stroke-width:5.56699991;stroke-miterlimit:4;stroke-dasharray:none"
            d="m 79.319505,128.97295 h -6.76656 L 87.392366,96.122281 h 6.76656 z" />
          <path
            inkscape:connector-curvature="0"
            id="Path-3"
            class="text-primary fill-current"
            fill="url(#linearGradient-2)"
            style="fill-rule:evenodd;stroke-width:5.56699991;stroke-miterlimit:4;stroke-dasharray:none"
            d="M 102.22811,120.00273 96.17013,106.6204 h -6.761322 l 6.047185,13.38233 H 91.34667 l 10.46393,8.96593 4.04122,-8.96593 z" />
        </g>
        <circle

          id="rect1" fill="url(#linearGradient-1)" opacity="0.2"
          stroke="url(#linearGradient-2)"
          style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#006b37;stroke-width:5.56699991;stroke-linecap:butt;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"

          cx="74.703865"
          cy="112.30505"
          r="24.716471" />
      </g>
    </svg>
  </div>
</template>


<style scoped>
  .container {
    width:35%;
    height:35%;
  }

  #Path-2,  #Path-3,  #rect1 {
    fill-opacity:0;
    fill:#008080;

  }
  #Path-2 {
    animation:anLeft  0.3s ease forwards;
    animation-iteration-count: 3;
    animation-delay: 0.1s;
  }

  @keyframes anLeft {
    100% {
      fill-opacity:1;

    }
  }
  #Path-3{
    animation:anRight  0.3s ease forwards;
    animation-delay: 1.9s;
  }

  @keyframes anRight {
    /*100% {*/
    /*  fill-opacity:1;*/
    /*}*/
    from {
      fill-opacity: .3;
    }
    50% {
      fill-opacity: .7;
    }
    to {
      fill-opacity: 1;
    }

  }

  #rect1 {
    animation:anRect  0.3s ease forwards;
    animation-delay:1.4s;
  }

  @keyframes anRect {
    /*100% {*/
    /*  fill-opacity:1;*/
    /*}*/
    from {
      fill-opacity: .3;
    }
    50% {
      fill-opacity: .7;
    }
    to {
      fill-opacity: 1;
    }
  }
</style>
