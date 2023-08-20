import React from "react"
import memeData from "../assets/memeData"

function Meme() {
    const [allMemesUrl, setAllMemesUrl] = React.useState([])
    const [meme, setMeme] = React.useState({topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg"})
    /** 
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then(apiDatas => {
            setAllMemesUrl(apiDatas.data.memes);
        });
    }, [])

    function handleForm(e) {
        const {value, name} = e.target
        setMeme(prevState =>
            ({
                ...prevState,
                [name]: value
            })
        )
    }
    
    function getNewImage() {
        const url = allMemesUrl[Math.floor(Math.random() * allMemesUrl.length)].url
        setMeme(prevState => ({
                ...prevState,
                randomImage: url
            }) 
        )
    }
    return (
        <main>
            <div className="meme--form">
                <input type="text" value={meme.topText} name="topText" className="meme--input" placeholder="Top Text" onChange={handleForm} />
                <input type="text" value={meme.bottomText} name="bottomText" className="meme--input" placeholder="Bottom Text" onChange={handleForm} />
                <button onClick={getNewImage} className="meme--button">Get a new image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
export default Meme