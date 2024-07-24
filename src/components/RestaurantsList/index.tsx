import RestaurantClass from "../../models/restaurant";
import Restaurant from "../Restaurante";


import { Container, List } from "./styles"


export type Props = {
    restaurantes: RestaurantClass[]
}

const RestaurantList = ({ restaurantes }: Props) => (
<Container>
<div className="container">
<List>
    {restaurantes.map((restaurante) => (
        <Restaurant 
            key={restaurante.id}
            nota={restaurante.nota} 
            image={restaurante.image} 
            description={restaurante.description}
            title={restaurante.title}
            infos={restaurante.infos} 
            link={restaurante.link} />
    )) }
    </List>
</div>
</Container>
)

export default RestaurantList