import React from 'react';

class Footer extends React.Component {
    render() { 
        return (
            <div style={{height: "6rem", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <p style={{textAlign: "center"}}>Ⓒ Hecho por programa desde tu casa</p>
            </div>
        );
    }
}
 
export default Footer;