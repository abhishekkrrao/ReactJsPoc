import React,{ Component } from 'react'
import './style.css'
import assets from '../../assets/index'
import { Row,Col } from 'react-bootstrap'
export default class landingpage extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] };
    }

    onClick = () => {
        console.log('called')
        this.props.history.push('/joblist');
      };
    render() {
        return (
            <div className="login">
                <header className="login-header"><p>Home</p></header>
                <div className="container">
                    <div className="grid-container">
                        {this.state.list.map((obj,index) => {
                            return (
                                <div onClick={()=>{this.onClick()}} className="grid-item" key={index}>
                                    <div key={index} className="grid-item">
                                        <img key={index + new Date().getTime()} src={obj.img}></img>
                                        {obj.title}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.showList();
    }
    showList = () => {
        let list = [
            { img: assets.images.jobtab,title: "Web , Mobile & Software Dev" },
            { img: assets.images.jobtab,title: "Design & Creative" },
            { img: assets.images.jobtab,title: "Writing" },
            { img: assets.images.jobtab,title: "Sales & Marketing" },
            { img: assets.images.jobtab,title: "Admin Support" },
            { img: assets.images.jobtab,title: "Customer Support" },
            { img: assets.images.jobtab,title: "Data Science & Analytics" },
            { img: assets.images.jobtab,title: "Engineering & Architecture" }
        ];
        this.setState({ list: list },() => { });
    }
}
