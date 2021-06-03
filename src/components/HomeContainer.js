import React from 'react';
import Card from  './Card';
import Button from './Button'

export default class HomeContainer extends React.Component {

    state = {
        items: []
    }
    fetchAPI = () => {
        fetch("https://api.spacexdata.com/v4/launches/past")
        .then(resp => resp.json())
        .then((data) => { 
            const trimmedArray = data.slice(24, 25)
            this.setState({
                    items: trimmedArray
                    })
                    // console.log(this.state.items)
                }
                
            )
            .catch(error => console.log(error))
        }
    render() {
        return (
            <div>
                    {this.fetchAPI()}
                    {this.state.items.map((el) => {
                        return <Card 
                                title={el.name}
                                padding="2rem" 
                                >
                                </Card>
                    })}
                    <Button hasVariant="Primary">Morning James </Button>
            </div>
        )
    }
}