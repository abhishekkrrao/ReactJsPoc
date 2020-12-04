import React,{ Component,useState } from 'react'
import logo from '../../logo.svg';
import './style.css'
import Button from '../../componet/button'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import useStyle from './material'
import assets from '../../assets/index'
export default class landingpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { list: [] };
    }
    render() {
        return (
            <div className="login">
                <header className="login-header"><p>Home</p></header>
                <div className="container">
                    <div className={useStyle.root}>
                        <GridList className={useStyle.gridList} cols={2}>
                            {this.state.list.map((tile,index) => (
                                <GridListTile
                                    style={{ fontSize: 11 }}
                                    key={index}>
                                    <img style={{ width: 120,height: 120,alignSelf: "flex-start" }} src={tile.img} alt={index} />
                                    <GridListTileBar
                                        title={tile.title}
                                        style={{ fontSize: 11 }}
                                        actionIcon={
                                            <IconButton style={{ fontSize: 11 }} aria-label={`star ${tile.title}`}>
                                                <StarBorderIcon className={useStyle.title} />
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
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
