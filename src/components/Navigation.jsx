import React from 'react';


function Navigation() {
    return (
        <div className="row" style={styleHeader}>
            <h3>Image Gallery</h3>
        </div>
    )

}

const styleHeader = {
    color: 'white',
    backgroundColor: 'black',
    padding: '0em',
    textAlign: 'center'
};

export default Navigation;