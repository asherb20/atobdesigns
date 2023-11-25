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
