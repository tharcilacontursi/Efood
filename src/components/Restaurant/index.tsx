import NotaAvaliada from "../Avaliacoes";
import { ButtonLink } from "../Button";
import Tag from "../Tag";
import { Card, Descricao, ImagemRestaurante, Infos, Titulo } from "./styles";

type Props = {
  image: string;
  description: string;
  title: string;
  infos: string[];
  nota: number;
  id: number;
};

function Restaurant({ image, description, title, infos, nota, id }: Props) {
  return (
    <Card>
      <ImagemRestaurante src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={id}>{info}</Tag>
        ))}
      </Infos>
      <div>
        <Titulo>{title}</Titulo>
        <NotaAvaliada>{nota}</NotaAvaliada>
      </div>
      <Descricao>{description}</Descricao>
      <ButtonLink to={`/restaurante/${id}`}>Saiba mais</ButtonLink>
    </Card>
  );
}

export default Restaurant;
