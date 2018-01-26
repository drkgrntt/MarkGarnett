import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FromScatteredAshes extends Component {
  render() {
    return (
      <div className="FSAbackground">
        <div className="container">
          <div className="row">
            <div className="col m5 s12">
              <p className="FSAsnipit">
                "As far as anyone in Missouri was concerned, I was praying too; putting my trust in God’s plan, and relying on him for hope and comfort. After all, that’s what good Christians do. 
              </p>
              <p className="FSAsnipit">
                And yet, there I was, facing a harsh ultimatum: accept God for the bully he was or fall headlong into a godless oblivion.” 
              </p>
              <br />
              <Link
                className="btn indigo lighten-1"
                to="/Chapter1"
                style={{ display: 'block', marginBottom: '20px' }}
              >
                Chapter One
              </Link>
            </div>
            <div className="col m1"></div>
            <div className="col m6 s12">
              <img 
                className="FSA" 
                src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/22448397_10210183927056830_4137496625934223388_n.jpg?oh=110d123aa4cac0113936e4b3a23bcc64&oe=5ABA1BDB" 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FromScatteredAshes;
