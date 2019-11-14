import React, { Component } from 'react'
import './../style/articlesList.css'
import { withRouter } from 'react-router-dom'



export class ArticlesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: [],
            searchArtcles: [],
        }
        this.callAPI();
    }

    goToDetails = (id,sectionName,webPublicationDate,webTitle,webUrl) => {
        this.props.history.push({
            pathname:"/details/" + id,
            state: { section: sectionName, date: webPublicationDate, title:webTitle, url:webUrl }
        });
        return id
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res , searchArtcles: res}));

    }


    handleInput = (event) => {

        const filterValues = (name) => {
            return this.state.apiResponse.filter(data => {
                return data.webTitle.toLowerCase().indexOf(name.toLowerCase()) > -1;
            });
        }
        console.log(filterValues(event.target.value));
        if(event.target.value === "" ){
            this.callAPI()
        }
        else{
            this.setState({searchArtcles: filterValues(event.target.value)})
        }

    }


    render() {
        console.log(this.state);
        const items = this.state.searchArtcles.map((item, key) =>
            <button key={item.id} className="button-8" onClick={() => { this.goToDetails(item.id,item.sectionName,item.webPublicationDate,item.webTitle,item.webUrl) }}>{item.webTitle}</button>

        );
        return (
            <div className="container">
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="search articles" onChange={this.handleInput} />
                        <span className="icon-search">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="articles-container">
                    <div className="articles-list" >
                        {items}
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(ArticlesList)
