import { Button } from "antd"
export default function MemberBtn(props) {
    return (
        <>
            <Button type="primary">{props.name}</Button>
        </>  
    )
}