import React, { Component } from 'react'
import { Card } from 'antd'
const { Meta } = Card;

class Picture extends Component {
    render() {
        return (
            <Card
                hoverable
                style={{ width:240 }}
                cover={<img alt="img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
            >
                <Meta
                    title="Europe Street Beat"
                    description="this is a example"
                />
            </Card>
        )
    }

}

export default Picture;