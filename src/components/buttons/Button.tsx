'use client';
import { removeKeys } from '@/lib/utils/helper';

import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';

interface DefaultProps {
  children: React.ReactNode | string;
  className?: string;
  size?: 'lg' | 'sm';
  center?: boolean;
  disabled?: boolean;
}

interface LinkProps extends DefaultProps {
  href: string;
  sameTab?: boolean;
}

interface ButtonProps extends DefaultProps {
  onClick?: (event: React.MouseEvent) => void;
}

type Props =
  | ({
    type?: 'button' | 'submit';
  } & ButtonProps)
  | ({
    type: 'link';
  } & LinkProps);

// For separating animation props from button props
const buttonProps: Array<keyof Props | keyof LinkProps> = [
  'center',
  'children',
  'className',
  'size',
  'type',
  'href',
];

const Button = (props: Props & MotionProps) => {
  const {
    className,
    children,
    type = 'button',
    size = 'sm',
    center = false,
    disabled = false,
  } = props as any;

  const classes = `$${size === 'sm'
      ? 'p-2 px-4 text-sm border-[1.5px] '
      : 'text-sm p-4 px-6 border-2'
    } block ${center ? 'mx-auto' : ''
    } w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer ${className}`;

  // TODO: Needs to improve this framer motion logic
  if ((props as any).type === 'link') {
    const { sameTab, ...motionProps } = props as any;
    removeKeys<Props & LinkProps>(motionProps, buttonProps as any);

    return (
      <motion.span {...motionProps}>
        <Link
          className={classes}
          href={(props as any).href}
          target={sameTab ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      </motion.span>
    );
  }

  if (type === 'button' || type === 'submit') {
    return (
      <button type={type} className={classes} onClick={(props as any).onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return <></>;
};

export default Button;
