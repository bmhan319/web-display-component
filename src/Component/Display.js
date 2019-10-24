import React, { Component } from 'react';

class Display extends Component {
  render() {
    return(
      <div className="display-wrapper">
        <div className="title-container">
          <h3>WINNING COMPANIES CHOOSE HIGHSPOT</h3>
        </div>
        <div className="col-container">
          <div className="col1">
            <img src="https://picsum.photos/id/102/400/300" alt="raspberries" />
            <h4>Column Title</h4>
            <div className="text-container">
              <h6>Text1</h6>
              <p>Text2</p>
            </div>
          </div>
          <div className="col2">
            <img src="https://picsum.photos/id/239/400/300" alt="dandelion" />
            <h4>Column Title</h4>
            <div className="text-container">
              <h6>Text1</h6>
              <p>Text2</p>
            </div>
          </div>
          <div className="col3">
            <img src="https://picsum.photos/id/337/400/300" alt="field" />
            <h4>Column Title</h4>
            <div className="text-container">
              <h6>Text1</h6>
              <p>Text2</p>
            </div>
          </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur reprehenderit eius repellat harum, accusamus recusandae? Aspernatur quae beatae sunt eligendi ipsa modi omnis ad? Adipisci provident nesciunt quos est rem.</p>
        <button type="button">Read More</button>
      </div>
    )
  }
}

export default Display;