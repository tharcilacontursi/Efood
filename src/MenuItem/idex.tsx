import React from 'react';
import { ButtonLink } from '../components/Button';
import { Descricao } from '../components/Restaurante/styles';
import { MenuButton, MenuCard, MenuImage, MenuTitulo } from './styles';

type Props = {
  image: string;
  description: string;
  title: string;
};

const Menu = ({ image, description, title }: Props) => (
  <MenuCard>
    <MenuImage src={image} alt={title} />
    <div>
      <MenuTitulo>{title}</MenuTitulo>
    </div>
    <Descricao>{description}</Descricao>
    <MenuButton to="#">Adicionar ao carrinho</MenuButton>
  </MenuCard>
);

export default Menu;
