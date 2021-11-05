import React from 'react'
import {Row, Col, Typography,Button} from 'antd'
import firebase,{auth, db} from '../../firebase/config'
import addDocument from '../../firebase/service';
const {Title} = Typography
const fbProvider = new firebase.auth.FacebookAuthProvider();
export default function Login() {
    const handleFbLogin = async() => {
        const {additionalUserInfo, user} = await auth.signInWithPopup(fbProvider)
        if(additionalUserInfo?.isNewUser) {
            addDocument('users',{
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                projectId: additionalUserInfo.providerId,
            })
        }
    }
    return (
        <div>
            <Row justify="center" style={{height: 800}}>
                <Col span={8}>
                    <Title style={{textAlign: 'center'}} Level={3}>Fun Chat</Title>
                    <Button style={{width: '100%', marginBottom: 5}}>
                        Đăng nhập bằng Google
                    </Button>
                    <Button 
                    style={{width: '100%'}}
                    onClick={handleFbLogin}
                    >
                        Đăng nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
