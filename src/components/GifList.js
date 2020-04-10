import React from 'react'

const GifList = props => {
    return (
        <ul>
            {console.log(props.gif) //props.gifs.map(gif => <li>url: {gif.images.original.url}</li>)
            }
        </ul>
    )
}

export default GifList