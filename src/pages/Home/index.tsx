import RestaurantClass from "../../models/restaurant";
import RestaurantsList from "../../components/RestaurantsList";

import sushi from '../../assets/images/sushi.png'
import marguerita from '../../assets/images/marguerita.png'
import Header from "../../components/Header";

const todosRestaurantes: RestaurantClass[] = [
    {
        id: 1,
        nota: 4.9,
        image: sushi,
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        title: 'Hioki Sushi',
        infos: ["Destaque da semana", "Japonesa"]
    },
    {
        id: 2,
        nota: 4.6,
        image: marguerita,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        title: 'La Dolce Vita Trattoria',
        infos: ["Italiana"]
    }
    ,
    {
        id: 3,
        nota: 4.6,
        image: marguerita,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        title: 'La Dolce Vita Trattoria',
        infos: ["Italiana"]
    }
    ,
    {
        id: 4,
        nota: 4.6,
        image: marguerita,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        title: 'La Dolce Vita Trattoria',
        infos: ["Italiana"]
    }
    ,
    {
        id: 5,
        nota: 4.6,
        image: marguerita,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        title: 'La Dolce Vita Trattoria',
        infos: ["Italiana"]
    }
    ,
    {
        id: 6,
        nota: 4.6,
        image: marguerita,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        title: 'La Dolce Vita Trattoria',
        infos: ["Italiana"]
    }
];



const Home = () => (
    <>
    <Header />
    <div className="container">
        <RestaurantsList restaurantes={todosRestaurantes} />
      </div>
    </>
)

export default Home