/* eslint-disable react/display-name */
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { StyledButtonLink } from './styles'

type ButtonLinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (props, ref) => {
    return <StyledButtonLink {...props} ref={ref} />
  }
)

const Button = () => <ButtonLink to="/path-to-navigate">Clique aqui</ButtonLink>

export { Button, ButtonLink }
