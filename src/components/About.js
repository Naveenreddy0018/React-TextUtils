import React from "react";

export default function About(props) {
    // let myStyle = {
    //     color: 'white',
    //     backgroundColor: 'black'
    // }  without using useState


    // const [myStyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
      color: props.theme === 'dark' ? 'white' : '#070b25',
      backgroundColor: props.theme === 'dark' ? '#070b25' : 'white',
      border: '2px solid',
      boderColor: props.theme === 'dark' ? 'white' : '#070b25'
    }

    // const [theme, setTheme] = useState("Enable Dark Theme");

    // const toggle = () => {
    //     if(myStyle.color === 'white') {
    //         setStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setTheme("Enable Dark Theme")
    //     }
    //     else {
    //         setStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })

    //         setTheme("Enable White theme")
    //     }
    // }
    
    return (
    <>
        
      <div className="container">
        <h2 className="about us my-3" style={{color: props.theme === 'dark' ? 'white' : '#070b25'}}>About us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
              <strong>Analyze Your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or{" "}
                
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
              <strong>Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics
                for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text
                with word / character limit
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
              <strong>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
                It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggle} className="btn btn-primary">{theme}</button>
        </div> */}
        
      </div>
    </>
  );
}
