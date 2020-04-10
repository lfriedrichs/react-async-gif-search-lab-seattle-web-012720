import React, {Component} from 'react'

export default class GifSearch extends Component {

    state = {
        text: ''
    }

    render() {
        return (
            <form onSubmit={() => this.props.callback(this.state.text)}>
                <input type='text'/>
                <input type='submit'/>
            </form>
        )
    }
}