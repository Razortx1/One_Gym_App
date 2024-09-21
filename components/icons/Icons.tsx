import { FontAwesome } from "@expo/vector-icons";


export const Ajuste = (props:any) => {
    return <FontAwesome name="cog" size={24} color="black" {... props} style={{marginRight: 5}}/>
}


export const Home = (props:any) => {
    return <FontAwesome name="home" size={24} color="black" {... props} />
}

export const User = (props:any) => {
    return <FontAwesome name="user" size={24} color="black" {... props} />
}

export const Calendario = (props:any) => {
    return <FontAwesome name="calendar" size={24} color="black" {... props}/>
}

export const Pago = (props:any) => {
    return <FontAwesome name="dollar" size={24} color="black" {... props}/>
}