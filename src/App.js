import React from "react";

class App extends React.Component {
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({
          memelist: memes,
        });
      });
  }

  constructor() {
    super();
    this.state = {
      toptext: "",
      bottomtext: "",
      randomimage: "https://i.imgflip.com/1bij.jpg",
      memelist: [],
    };
    this.generateMeme = this.generateMeme.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  generateMeme = (event)=>
  {
       event.preventDefault();
       const randnum = Math.floor(Math.random() * this.state.memelist.length);
       const randimg = this.state.memelist[randnum].url;
       console.log(randimg);
       this.setState({
            randomimage:randimg
       });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.generateMeme}>
          <input
            type="text"
            value={this.state.toptext}
            onChange={this.handleChange}
            name="toptext"
            placeholder="Top Text"
          />
          <input
            type="text"
            value={this.state.bottomtext}
            onChange={this.handleChange}
            name="bottomtext"
            placeholder="Bottom Text"
          />
          <button>Generate</button>
        </form>
        <div className="memes">
          <h1 className="Toptext">{this.state.toptext}</h1>
          <img className="meme" src={this.state.randomimage} alt="img" />
          <h1 className="bottomtext">{this.state.bottomtext}</h1>
        </div>
      </div>
    );
  }
}
export default App;