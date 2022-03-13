import { useEffect, useState } from "react"
import { getGigfs } from "../helpers/GetGifs"

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({

        data:[],
        loading: true

    })
        useEffect(() => {
            

            getGigfs (category)
                .then(imgs => {

                    setTimeout (() => {
                        
                        setstate({
                                data: imgs,
                                loading:false
                            })

                    })
                    
                })
        }, [category])


        return state
}
