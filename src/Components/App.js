import React, { Component } from 'react';
import Quote from './Quote';
import '../Styles/Styles.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: "Human===Selfish",
      author: 'Sab'
    }
  }

  //Fetch Quotes 
  fetchData = () => {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      }
    })
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        let quotesData = data['quotes'][Math.floor(Math.random() * 102)];
        //let randomNumber = Math.floor(Math.random()*102)
        console.log(quotesData['author']);
        console.log(quotesData['quote']);
        this.setState(
          {
            quote: quotesData['quote'],
            author: quotesData['author']
          }
        )
      })
      .catch((error) => {
        console.log(error, "catch the hoop")
      })
  }

  render() {
    return (
      <div className="container d-flex h-100">
        <Quote quote={this.state.quote} author={this.state.author} fetchdata={this.fetchData} />
      </div>
    )
  }
}

export default App;