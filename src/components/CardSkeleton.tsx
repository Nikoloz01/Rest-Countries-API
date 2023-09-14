import Skeleton from "react-loading-skeleton"

const CardSkeleton = () => {
    return (
        <div className="block skeletonBox dark:bg-gray-850">
            <div className="pb-3 skeletonImg  ">
                <Skeleton  baseColor="#9e9e9e" highlightColor="#dbdbdb" height={200} />
            </div>
            <div className="pb-3 pl-5 pr-5">
                <Skeleton  baseColor="#9e9e9e"  height={40} />
            </div>
            <div className=" flex flex-col gap-2 pb-5 pl-5 pr-14">
                <Skeleton baseColor="#9e9e9e" height={25} />
                <Skeleton baseColor="#9e9e9e" height={25}/>
                <Skeleton baseColor="#9e9e9e"  height={25}/>
            </div>
        </div>
    )
}
export default CardSkeleton