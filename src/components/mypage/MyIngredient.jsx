import Image from "next/image";

export default function MyIngredient(props) {
    // 아이콘 텍스트 분리 후 커스텀 필요
    return (
        <div>
            <Image  alt={props.name} width={100} height={100} src={props.imgUrl}/>
            <p>{props.name}</p>
        </div>
    )
}