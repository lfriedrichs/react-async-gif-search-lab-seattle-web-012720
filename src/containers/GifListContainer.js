import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs: {}
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=XWbjtKrZK3w75hR1UiIRaq7yYW8i89LN&rating=g')
        .then(resp => resp.json())
        .then(gifs => this.setState({gifs: gifs.data}))
    }

    handleSubmit = (text) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=XWbjtKrZK3w75hR1UiIRaq7yYW8i89LN&rating=g`)
        .then(resp => resp.json())
        .then(gifs => {this.setState({gifs: gifs.data}); console.log(gifs)})
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch callback={this.handleSubmit}/>
            </div>
        )
    }
}