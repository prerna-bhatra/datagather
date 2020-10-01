import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> “Without a systematic way to start and keep data clean, bad data will happen.” — Donato Diorio <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
