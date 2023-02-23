import Link from "next/link";
import "./header.css";
import Image from "next/image";
/**
 *
 * @param title : 페이지이름
 * @param imgSrc : 이미지경로
 * @param imgWidth : 이미지가로
 * @param imgHeight : 이미지세로
 * @param alt : 이미지대체문자
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header({title, imgSrc, alt, imgWidth, imgHeight}) {
    if(!!imgSrc) {
        return (
            <>
                <header className="header">
                    <Link href="" className="headerLink">
                        <Image src={imgSrc} alt={alt} width={imgWidth} height={imgHeight}/>
                    </Link>
                    <h1 className="headerTitle">{title}</h1>
                </header>
            </>
        )
    }
    return (
        <>
            <header className="header">
                <h1 className="headerTitle">{title}</h1>
            </header>
        </>
    )
}
