import React from 'react'
import { Collapse, Typography, Button } from 'antd'
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

const PanelStyled = styled(Panel)`

    &&& {
        .ant-collapse-header, p {
            color: white;
        }
        .ant-collapse-content-box {
            padding: 0 48px;
        }
        .add-room {
            color: white;
            padding: 0;
        }
    }
`
const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;

`;
export default function RoomList() {
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Danh sách các phòng" key='1'>
                <LinkStyled>Room X</LinkStyled>
                <LinkStyled>Room X</LinkStyled>
                <LinkStyled>Room X</LinkStyled>
                <Button
                    type='text'
                    icon={<PlusSquareOutlined />}
                    className='add-room'
                >
                    Thêm phòng
                </Button>
            </PanelStyled>
        </Collapse>
    )
}
