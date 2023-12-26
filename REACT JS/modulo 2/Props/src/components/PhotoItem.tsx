import { Photo } from "@/types/Photo"

type Props = {
    photo: Photo;
    onClick: ()=> void;

}
export const PhotoItem = ({photo, onClick}:Props) => {
    return (
        <div className="hover:opacity-50 cursor-pointer" onClick={onClick}>
            <img src={`/assets/${photo.url}`}  alt=""  className="w-full" />
        </div>
    )
}