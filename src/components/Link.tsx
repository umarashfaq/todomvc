import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export interface LinkProps {
  filter?: string;
  active?: boolean;
  children?: ReactNode;
  setFilter?(): void;
}

export const Link: React.FC<LinkProps> = ({ active, children, setFilter }) =>
  (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer' }}
      onClick={() => setFilter && setFilter()}
    >
      {children}
    </a>
  )


