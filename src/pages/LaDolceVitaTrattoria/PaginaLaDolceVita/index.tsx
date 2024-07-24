import React from "react";
import MenuClass from "../../../models/menu";
import MenuList from "../../../MenuList";
import marguerita from "../../../assets/images/marguerita.png";
import HeaderLaDolceVita from "../HeaderLaDolceVita";

export const itensDoMenu: MenuClass[] = [
  {
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    id: 1
  },
  {
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    id: 2
  },
  {
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    id: 3
  },  
  {
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    id: 4
  },  
  {
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    id: 5
  },  
  {
    title: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    id: 6
  }
];

const LaDolceVitaTrattoria = () => (
  <>
  <HeaderLaDolceVita />
  <div className="container">
    <MenuList menu={itensDoMenu} />
  </div></>
);

export default LaDolceVitaTrattoria;
