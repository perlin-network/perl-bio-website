import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Slide from '@mui/material/Slide';

const timeout = 350;

const ScrollAnchor = (props) => (
  <Box
    onClick={props.onClick}
    sx={{
      position: 'absolute',
      right: -42,
      bottom: -12,
      width: 42,
      height: 388,
      cursor: 'pointer',
    }}
  >
    <Zoom
      direction="up"
      in={props.in}
      timeout={timeout}
      easing={{
        enter: 'cubic-bezier(0, 1.5, .8, 1)',
        exit: 'linear',
      }}
      style={{
        transformOrigin: 'center bottom',
      }}
    >
      <svg
        width="42"
        height="388"
        viewBox="0 0 42 388"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute' }}
      >
        <g opacity="0.34">
          <path
            d="M20.6636 387.895L0.261963 376.12V352.561L20.6636 340.785L41.0653 352.561V376.12L20.6636 387.895ZM3.06761 374.503L20.6636 384.662L38.2597 374.503V354.177L20.6636 344.018L3.06761 354.177V374.503Z"
            fill="white"
          />
        </g>
        <path
          d="M18.762 371.785C18.762 372.614 19.4335 373.285 20.262 373.285C21.0904 373.285 21.762 372.614 21.762 371.785L18.762 371.785ZM18.762 356.785L18.762 371.785L21.762 371.785L21.762 356.785L18.762 356.785Z"
          fill="white"
        />
        <path
          d="M12.762 361.785L20.762 356.785L27.762 361.785"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </Zoom>
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        bottom: 48,
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 10,
          background: 'linear-gradient(rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 100%)',
          zIndex: 1,
        },
      }}
    >
      <Slide
        direction="up"
        in={props.in}
        timeout={timeout}
        style={{
          transitionDelay: props.in ? `${timeout - 100}ms` : '0ms',
        }}
      >
        <svg
          width="42"
          height="388"
          viewBox={`0 0 42 ${388 - 48}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute' }}
        >
          <path
            opacity="0.7"
            d="M12.262 266.785L20.262 261.785L27.262 266.785"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            opacity="0.4"
            d="M12.262 133.785L20.262 128.785L27.262 133.785"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            opacity="0.6"
            x1="19.762"
            y1="329.785"
            x2="19.762"
            y2="0.785156"
            stroke="url(#paint0_linear_120_591)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_120_591"
              x1="20.262"
              y1="329.785"
              x2="20.262"
              y2="5.78516"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Slide>
    </Box>
  </Box>
);

export default ScrollAnchor;
