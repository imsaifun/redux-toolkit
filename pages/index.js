import Video from "../components/Video";
import { useGetVideosQuery } from "../features/api/apiSlice"
export default function Home() {

    const { data: videos, isLoading, isError } = useGetVideosQuery();
    // decide what to render
    let content = null;

    if (isLoading) {
        content = "Loading"
    }

    if (!isLoading && isError) {
        content = "There was an error";
    }

    if (!isLoading && !isError && videos?.length === 0) {
        content = "No videos found!";
    }

    if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map((video) => <Video key={video.id} video={video} />);
    }
    return (
        <>
            {content}
Hello
        </>
    )
}
