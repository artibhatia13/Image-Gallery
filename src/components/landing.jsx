import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Landing extends Component {

    state = {
        pic: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=7')
            .then(res => {
                console.log(res)
                this.setState({
                    pic: res.data
                })
            })
    }


    render() {


        const { pic } = this.state;

        const picList = pic.map(pics => {
            return (
                <div className="" >
                    <div className="col s12 m7 l3">
                        <div className="card" >
                            <div className="card-image">
                                <img src={pics.url} alt="a" ></img>
                                <div className="card-content">
                                    <p>{pics.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        })

        return (
            <div className="row" >
                {picList}
                <div className="col s12 m4 l3" id="curve_border">
                    <div style={{ 'height': '50vh', 'width': '80%', 'text-align': 'center', 'background-color': '#C33427', 'color': 'white', 'margin-top': '0' }} className="card-panel waves-effect" id="curve_border">
                        <Link to="/gallery" className="material-icons right" style={{ 'margin-right': '45%', 'margin-top': '35%' }}>arrow_forward</Link>
                        <p style={{ 'margin-right': 'auto', 'margin-top': '55%' }}>More</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Landing;