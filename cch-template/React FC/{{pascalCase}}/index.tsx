import React from 'react';
import classNames from 'classnames';

import './{{pascalCase}}.scss'

export interface {{pascalCase}}Props {
  className?: string

  children?: React.ReactNode
}

export const {{pascalCase}}: React.FC<{{pascalCase}}Props> = ({
  className = "",
  children = "some...",
}) => {
  const {{pascalCase}}Class = classNames(
    '{{kebabCase}}',

    className,
  )

  return (
    <div className={{{pascalCase}}Class}>
      {children}
    </div>
  );
};