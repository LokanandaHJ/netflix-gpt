const VideoTitle = ({ title, overView }) => {
    return (
        <div className="pt-[25%] pl-16 absolute text-white bg-gradient-to-r from-black to-transparent w-screen aspect-video">
            <h1 className="text-6xl font-bold">{title}</h1>
            <h1 className="py-6 text-lg font-bold w-1/4">{overView}</h1>
            <div className="">
                <button className="rounded-md mx-1  bg-red-700 text-white bg-opacity-90 px-10 py-2 hover:bg-opacity-50">Play</button>
                <button className="rounded-md mx-1  bg-white text-black bg-opacity-50 px-10 py-2">More Info</button>
            </div>
        </div>
    );
}
export default VideoTitle;