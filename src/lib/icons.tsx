import * as React from 'react';

interface IconProps {
  height: number;
  width: number;
  color: string;
}

export const MenuIcon = (props: IconProps) => {
  return (
    <svg height={props.height} viewBox='0 0 512 512' width={props.width} xmlns='http://www.w3.org/2000/svg'>
      <title />
      <line style={{ fill: 'none', stroke: props.color, strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '48px' }} x1='88' x2='424' y1='152' y2='152' />
      <line style={{ fill: 'none', stroke: props.color, strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '48px' }} x1='88' x2='424' y1='256' y2='256' />
      <line style={{ fill: 'none', stroke: props.color, strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '48px' }} x1='88' x2='424' y1='360' y2='360' />
    </svg>
  );
};

export const CloseIcon = (props: IconProps) => {
  return (
    <svg height={props.height} version='1.1' viewBox='0 0 512 512' width={props.width}>
      <path
        fill={props.color}
        d='M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z'
      />
    </svg>
  );
};

export const CaretDownIcon = (props: IconProps) => {
  return (
    <svg height={props.height} width={props.width} viewBox='0 0 320 512'>
      <path
        fill={props.color}
        d='M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z'
      />
    </svg>
  );
};

export const CaretUpIcon = (props: IconProps) => {
  return (
    <svg height={props.height} width={props.width} viewBox='0 0 320 512'>
      <path
        fill={props.color}
        d='M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z'
      />
    </svg>
  );
};

export const ArrowRightIcon = (props: IconProps) => {
  return (
    <svg height={props.height} viewBox='0 0 512 512' width={props.width}>
      <path
        fill={props.color}
        d='M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z'
      />
    </svg>
  );
};

export const FacebookIcon = (props: IconProps) => {
  return (
    <svg enableBackground='new 0 0 56.693 56.693' height={props.height} viewBox='0 0 56.693 56.693' width={props.width}>
      <path
        fill={props.color}
        d='M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z'
      />
    </svg>
  );
};

export const InstagramIcon = (props: IconProps) => {
  return (
    <svg x='0px' y='0px' viewBox='0 0 56.7 56.7' enableBackground='new 0 0 56.7 56.7' height={props.height} width={props.width}>
      <g>
        <path
          fill={props.color}
          d='M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z'
        />
        <circle fill={props.color} cx='41.5' cy='16.4' r='2.9' />
        <path
          fill={props.color}
          d='M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z'
        />
      </g>
    </svg>
  );
};

export const XIcon = (props: IconProps) => {
  return (
    <svg width={props.width} height={props.height} viewBox='0 0 24 24'>
      <path
        fill={props.color}
        d='M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z'
      />
    </svg>
  );
};

export const URLIcon = (props: IconProps) => {
  return (
    <svg width={props.width} height={props.height} viewBox='0 0 24 24'>
      <title />
      <path
        d='M17.3,13.35a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.41l2.12-2.12a2,2,0,0,0,0-2.83L17.3,5.28a2.06,2.06,0,0,0-2.83,0L12.35,7.4A1,1,0,0,1,10.94,6l2.12-2.12a4.1,4.1,0,0,1,5.66,0l1.41,1.41a4,4,0,0,1,0,5.66L18,13.06A1,1,0,0,1,17.3,13.35Z'
        fill={props.color}
      />
      <path
        d='M8.11,21.3a4,4,0,0,1-2.83-1.17L3.87,18.72a4,4,0,0,1,0-5.66L6,10.94A1,1,0,0,1,7.4,12.35L5.28,14.47a2,2,0,0,0,0,2.83L6.7,18.72a2.06,2.06,0,0,0,2.83,0l2.12-2.12A1,1,0,1,1,13.06,18l-2.12,2.12A4,4,0,0,1,8.11,21.3Z'
        fill={props.color}
      />
      <path d='M8.82,16.18a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l6.37-6.36a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L9.52,15.89A1,1,0,0,1,8.82,16.18Z' fill={props.color} />
    </svg>
  );
};
