import React, { Component } from 'react';

class Display extends Component {
  slide = (num) => {
    let container = document.querySelector(".col-container")
    let dot1 = document.querySelector(".dot1")
    let dot2 = document.querySelector(".dot2")
    let dot3 = document.querySelector(".dot3")

    if (num === 1) {
      dot1.classList.add("active")
      dot1.classList.remove("inactive")
      dot2.classList.add("inactive")
      dot3.classList.add("inactive")
      dot2.classList.remove("active")
      dot3.classList.remove("active")
      container.classList.add("col-container-1")
      container.classList.remove("col-container-2")
      container.classList.remove("col-container-3")
    } else if (num === 2) {
      dot2.classList.add("active")
      dot2.classList.remove("inactive")
      dot1.classList.add("inactive")
      dot3.classList.add("inactive")
      dot1.classList.remove("active")
      dot3.classList.remove("active")
      container.classList.add("col-container-2")
      container.classList.remove("col-container-1")
      container.classList.remove("col-container-3")
    } else if (num === 3) {
      dot3.classList.add("active")
      dot3.classList.remove("inactive")
      dot1.classList.add("inactive")
      dot2.classList.add("inactive")
      dot1.classList.remove("active")
      dot2.classList.remove("active")
      container.classList.add("col-container-3")
      container.classList.remove("col-container-1")
      container.classList.remove("col-container-2")
    }
  }

  render() {
    return(
      <div className="display-wrapper">
        <div className="title-container">
          <h3 className="title">CATCH PHRASE OR SLOGAN <span className="title2">GOES HERE</span></h3>
        </div>
        <div className="viewport">
          <div className="col-container col-container-1">
            <div className="col col1">
              <div className="col-image-container">
                <img className="col-image" src="https://picsum.photos/id/102/350/300" alt="raspberries" />
              </div>
              <h4 className="col-title">Column 1 Title</h4>
              <p className="col-paragraph">Lorem ipsum dolor, sit amet consectetur psa modi omnis adipisicing elit. Aspernatur reprehenderit eius repellat harum, accusamus recusandae? Aspernatur quae beatae sunt eligendi ipsa modi omnis ad? Adipisci provident nesciunt psa modi omnis quos est rem.</p>
              <div className="col-text-container">
                <h6 className="col-text1">Column 1 Text1</h6>
                <p className="col-text2">Column 1 Text2</p>
              </div>
            </div>
            <div className="col col2">
              <div className="col-image-container">
                <img className="col-image" src="https://picsum.photos/id/239/350/300" alt="dandelion" />
              </div>
              <h4 className="col-title">Column 2 Title</h4>
              <p className="col-paragraph">Lorem ipsum dolor, sit amet consectetur psa modi omnis adipisicing elit. Aspernatur reprehenderit eius repellat harum, accusamus recusandae? Aspernatur quae beatae sunt eligendi ipsa modi omnis ad? Adipisci provident nesciunt psa modi omnis quos est rem.</p>
              <div className="col-text-container">
                <h6 className="col-text1">Column 2 Text1</h6>
                <p className="col-text2">Column 2 Text2</p>
              </div>
            </div>
            <div className="col col3">
              <div className="col-image-container">
                <img className="col-image" src="https://picsum.photos/id/337/350/300" alt="field" />
              </div>
              <h4 className="col-title">Column 3 Title</h4>
              <p className="col-paragraph">Lorem ipsum dolor, sit amet consectetur psa modi omnis adipisicing elit. Aspernatur reprehenderit eius repellat harum, accusamus recusandae? Aspernatur quae beatae sunt eligendi ipsa modi omnis ad? Adipisci provident nesciunt psa modi omnis quos est rem.</p>
              <div className="col-text-container">
                <h6 className="col-text1">Column 3 Text1</h6>
                <p className="col-text2">Column 3 Text2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dots-container">
          <div onClick={()=>{this.slide(1)}} className="dots dot1 active"></div>
          <div onClick={()=>{this.slide(2)}} className="dots dot2 inactive"></div>
          <div onClick={()=>{this.slide(3)}} className="dots dot3 inactive"></div>
        </div>
        <button className="button" type="button">Read More</button>
      </div>
    )
  }
}

export default Display;