import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FromScatteredAshes extends Component {
  render() {
    return (
      <div className="FSAbackground">
        <div className="container flex-container">
          <div className="col m6 s12">
            <p className="FSAsnipit">
              "As far as anyone in Missouri was concerned, I was praying too; putting my trust in God’s plan, and relying on him for hope and comfort. After all, that’s what good Christians do. 
            </p>
            <p className="FSAsnipit">
              And yet, there I was, facing a harsh ultimatum: accept God for the bully he was or fall headlong into a godless oblivion.” 
            </p>
            <br />
            <br />
            <a 
              className="btn amber darken-1"
              href="https://www.amazon.com/Scattered-Ashes-Mark-Garnett/dp/1978355076/ref=sr_1_1?ie=UTF8&qid=1513826729&sr=8-1&keywords=from+scattered+ashes"
              style={{ marginRight: '10px', marginBottom: '10px' }}
            >
              Buy on Amazon
            </a>
            <Link
              className="btn"
              to="/Chapter1"
              style={{ marginBottom: '10px' }}
            >
              Chapter One
            </Link>
          </div>
          <div className="col m6 s12">
            <img 
              className="FSA" 
              src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/22448397_10210183927056830_4137496625934223388_n.jpg?oh=110d123aa4cac0113936e4b3a23bcc64&oe=5ABA1BDB" 
              height="460"
              width="auto"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FromScatteredAshes;
