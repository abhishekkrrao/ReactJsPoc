import loader from '../assets/images/loader.gif'
import React,{ Component } from 'react';
import './style.scss'
class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <img key={new Date().getTime()} alt={new Date().getTime()} src={loader}></img>
            </div>
        );
    }
}
export default Loading;