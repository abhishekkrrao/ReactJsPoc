import React,{ Component } from 'react'
import './style.css'
import assets from '../../assets/index'
import Loader from '../../componet/loading'
import back from '../../assets/images/back.png'
import logout from '../../assets/images/logout.png'
import firebase from 'firebase/app';
import 'firebase/auth';
const url = "https://api.github.com/users/web-flow/followers";

export default class landingpage extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [],loading: false };
    }

    onClick = () => {
        console.log('called')
        this.props.history.push('/joblist');
    };
    render() {
        return (
            <div className="login">
                <header className="login-header"><p>Home</p>
                    {/* <img onClick={() => { this.props.history.goBack(); }} className="leftIcon" key={new Date().getTime()} src={back}></img> */}
                    <img onClick={() => {

                        firebase.auth()
                            .signOut()
                            .then(() => {
                                this.props.history.goBack();
                            })
                            .catch(() => {
                                this.props.history.goBack();
                            });

                    }} className="rightIcon" key={new Date().getTime()} src={logout}></img>
                </header>
                <div className="container">
                    {/* { <Loader></Loader>} */}
                    {this.state.loading && <Loader></Loader>}
                    <div className="grid-container">

                        {this.state.list.map((obj,index) => {
                            return (
                                <div onClick={() => { this.onClick() }} className="grid-item" key={index}>
                                    <div key={index} className="grid-item">
                                        <img key={index + new Date().getTime()} src={obj.avatar_url} alt={index + new Date().getTime()}></img>
                                        {obj.title ? obj.title : "Others"}
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
        this.setState({ loading: true },() => { });
        this.showList();
        this.callApi();
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

    }

    async getJobist(list) {
        let clist = [];
        clist = await list
            .map((obj,index) => {
                if (index == 0) {
                    obj.title = "Web , Mobile & Software Dev";
                } else if (index == 1) {
                    obj.title = "Design & Creative";
                } else if (index == 2) {
                    obj.title = "Writing";
                } else if (index == 3) {
                    obj.title = "Sales & Marketing";
                } else if (index == 4) {
                    obj.title = "Admin Support";
                } else if (index == 5) {
                    obj.title = "Customer Support";
                } else if (index == 6) {
                    obj.title = "Data Science & Analytics";
                } else if (index == 7) {
                    obj.title = "Engineering & Architecture";
                }else{
                    obj.title = "Others";
                }
                return obj;
            });
        console.log(clist);
        this.setState({ list: clist },() => { });
    }
    callApi = () => {
        console.log(url)
        fetch(url,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((data) => data.json())
            .then((response) => {
                this.getJobist(response)
                    .then(() => {
                        this.setState({ loading: false },() => { });
                    })
                    .catch(() => {
                        this.setState({ loading: false },() => { });
                    });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false },() => { });
            })
    }
}
