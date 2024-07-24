import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Titulo, Descricao, Infos, ImagemRestaurante } from './styles';
import { ButtonLink } from '../Button';
import Tag from '../Tag';
import NotaAvaliada from '../Avaliacoes';
import { url } from 'inspector';

type Props = {
  image: string;
  description: string;
  title: string;
  infos: string[];
  nota: number;
};

const Restaurant = ({ image, description, title, infos, nota }: Props) => (
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
    <ButtonLink to={'/ladolcevita'}>Saiba mais</ButtonLink>
    </Card>
);

export default Restaurant;
