import { useEffect } from 'react'
import { server } from '../config'

export default function Home() {


    useEffect(() => {
        const fetchByCatagory = async () => {
            const sendRequest = await fetch(`${server}/data/db.json`)
            const data = await sendRequest.json()
            console.log(data);
        }

        fetchByCatagory()

    }, [])




    return (
        <>


        </>
    )
}
