import { useEffect } from "react"

const Usetitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Chicken`

    },[title])
}

export default Usetitle;