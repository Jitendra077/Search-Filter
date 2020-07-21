import React from 'react';
import "./Search.css";
const jsonData = require("./project.json");




function searchingFor(term) {
    return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class Search extends React.Component {

    state = {
        jsonData: jsonData,
        term: ""
    }

    searchHandler = (event) => {
        this.setState({ term: event.target.value })
    }

    render() {
        const { jsonData, term } = this.state;

        return (
            <div>

                <form style={{margin:"3%", textAlign:"center" }}className ="form" >
                    <input type="text"
                        onChange={this.searchHandler}
                        value={term}
                    />
                </form>
                <h1 style={{ textAlign: "center" }}>Flowers !</h1>
                <h4 style={{ textAlign: "center" }}> ( Beauty of Nature )</h4>
                <hr />
                {jsonData.filter(searchingFor(term)).map(function (data) {
                    return (
                        <div className="styles">
                        <ion-icon name="close-circle"></ion-icon>
                            <h2>{data.url} </h2>
                            <h3>{data.name} </h3>
                            <h4>{data.description} </h4>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Search