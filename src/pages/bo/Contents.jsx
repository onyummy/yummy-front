import React,{useState} from "react";
import {Space, Button, Input, Upload, message, Form} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";


const onChange = (e) => {
    console.log('Change:', e.target.fileList);
};
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

export default function Contents(props){

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                업로드
            </div>
        </div>
    );

    const removeContents = (event) => {
        let id = event.target.id;
        let countList = [...props.countList]
        console.log(id)
        countList.splice(id,1);
        props.setCountList(countList);
    }

    return (
        <Form.Item
            label=":"
            style={{
                marginBottom: 0,
            }}
        >
            {props.countList && props.countList.map((item, i) => (
                <Form.Item key={i}>
                    <Form.Item
                        name={i}
                        style={{
                            display: 'inline-block',
                            width: 'calc(65% - 8px)',
                        }}
                    >
                        <TextArea
                            showCount
                            maxLength={100}
                            style={{
                                height: 120,
                                resize: 'none',
                            }}
                            onChange={onChange}
                            placeholder=""
                        />
                    </Form.Item>
                    <Form.Item
                        name=""
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            display: 'inline-block',
                            width: 'calc(25% - 8px)',
                            margin: '0 8px',
                        }}
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        name=""
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            display: 'inline-block',
                            width: 'calc(5% - 8px)',
                            margin: '0 8px',
                        }}
                    >
                        <Button onClick={removeContents} id={i} type="primary" ghost>
                            -
                        </Button>
                    </Form.Item>
                </Form.Item>
            ))}
        </Form.Item>
    )
}