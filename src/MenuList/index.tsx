import MenuClass from "../models/menu";
import Menu from "../MenuItem/idex";
import { Container, List } from "../components/RestaurantsList/styles";
import { MenuUl } from "./styles";

type Props = {
    menu: MenuClass[]
}


const MenuList = ({menu} : Props) => (
    <Container>
    <div className="container">
    <MenuUl>
        {menu.map((item) => (
            <Menu 
            key={item.id} image={item.image} description={item.description} title={item.title}            />
        ))}
        </MenuUl>
    </div>
    </Container>
)

export default MenuList