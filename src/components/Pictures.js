import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


  import './Pictures.css';
  import img1 from './img/IMG_0298.GIF';
  import img2 from './img/IMG_0313.JPG';
  import img4 from './img/IMG_0466.JPG';
  import img5 from './img/IMG_0523.JPG';
  import img6 from './img/IMG_0524.JPG';
  import img7 from './img/IMG_1078.JPG';
  import img8 from './img/IMG_1334.JPG';
  import img9 from './img/IMG_1872.JPG';


class Pics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: [img1, img2, img4, img5, img6, img7, img8, img9],
            currentImage: 0};
        this.backwardClick = this.backwardClick.bind(this);
        this.forwardClick = this.forwardClick.bind(this);
    }

    componentDidMount(){
        document.title = "Pictures: Dock of the Bay Seafood";
    }

    backwardClick() {
        let j = (this.state.currentImage - 1) % 8;
        this.setState({currentImage: j});
    }

    forwardClick() {
        let j = (this.state.currentImage + 1) % 8;
        this.setState({currentImage: j});
    }

    render() {
        return (<main id = "pics">
        <div id = "picsPage">
            <img className = "picsImg" src = {this.state.images[this.state.currentImage]}></img><br />
            <button className = "picsButton" onClick = {this.backwardClick}>Back</button>
            <button className = "picsButton" onClick = {this.forwardClick}>Forward</button>
        </div>
    </main>);
    }
}


export default Pics;