import Skeleton from "react-loading-skeleton"

const CardSkeleton = () => {
    return (
        <div className="block skeletonBox">
            <div className="pb-3">
                <Skeleton  height={200} />
            </div>
            <div className="pb-3 pl-5 pr-5">
                <Skeleton  height={40} />
            </div>
            <div className="flex flex-col gap-2 pb-5 pl-5 pr-14">
                <Skeleton height={25} />
                <Skeleton height={25}/>
                <Skeleton  height={25}/>
            </div>
        </div>
    )
}
export default CardSkeleton