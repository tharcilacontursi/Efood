
class RestaurantClass {
    title: string
    description: string
    nota: number
    image: string
    infos: string[]
    id: number

    constructor (id: number, title: string, description: string, nota: number, image: string, infos: string[]){
        this.id = id
        this.title = title
        this.description = description
        this.nota = nota
        this.image = image
        this.infos = infos
    }
}



export default RestaurantClass



