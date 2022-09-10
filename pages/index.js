import { useGetVideosQuery } from "../features/api/apiSlice"
export default function Home() {

    const { data: videos, isLoading, isError } = useGetVideosQuery();
    console.log(videos);
    // useEffect(() => {
    //     const fetchByCatagory = async () => {
    //         const sendRequest = await fetch(`${server}/data/db.json`)
    //         const data = await sendRequest.json()
    //         console.log(data);
    //     }
    //     fetchByCatagory()

    // }, [])
 



    return (
        <>


        </>
    )
}
