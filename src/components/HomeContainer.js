import React from 'react';
import Card from  './Card';

export default class HomeContainer extends React.Component {

    fetchAPI = () => {
        fetch("https://api.spacexdata.com/v4/launches/past")
        .then(resp => resp.json())
        .then(data => this.displayResults(data))
        .catch(error => console.log(error))
    }

    displayResults = (array) => {
        console.log(array)
        const trimmedArray = array.slice(0, 20)
        console.log(trimmedArray)
        trimmedArray.map((el) => {
        return (

            <Card title={el.name}></Card>

            )
        })
    }
    render() {
        return (
            <div>
                {this.fetchAPI()}
                <Card title={"James"} imgSrc={"./James"} body={"Hi James"}></Card>
            </div>
        )
    }
}