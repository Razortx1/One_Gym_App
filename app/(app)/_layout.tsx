import { Redirect, Slot } from "expo-router";

export default function IndexLayout() {
    const hola = false
    if (!hola) {
        return <Redirect href="/initial" />
    }
    else{
        return <Slot />
    }
}