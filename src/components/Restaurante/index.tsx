import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Titulo, Descricao, Infos, ImagemRestaurante } from './styles';
import { ButtonLink } from '../Button';
import Tag from '../Tag';
import NotaAvaliada from '../Avaliacoes';

type Props = {
  image: string;
  description: string;
  title: string;
  infos: string[];
  nota: number;
  link: string;
};

const Restaurant = ({ image, description, title, infos, nota, link }: Props) => (
<Card>
    <ImagemRestaurante src={image} alt={title} />
    <Infos>
    {infos.map((info, index) => (
        <Tag key={index}>{info}</Tag>
    ))}
    </Infos>
    <div>
    <Titulo>{title}</Titulo>
    <NotaAvaliada>{nota}</NotaAvaliada>
    </div>
    <Descricao>{description}</Descricao>
    <ButtonLink to={link}>Saiba mais</ButtonLink>
    </Card>
);

export default Restaurant;
