import { TouchableOpacity, Text} from "react-native";

import {styles} from "./styles"

interface Props {
    title: string
}

export function Button({title, ...rest} : Props){
    return (

    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    )
}