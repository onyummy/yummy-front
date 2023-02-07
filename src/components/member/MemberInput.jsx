import { Input } from "antd"

export default function MemberInput(props) {
    return (
        <>
            <Input placeholder={props.placeholder} name={props.name} />
        </>  
    )
}