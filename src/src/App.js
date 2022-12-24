import React from "react";

import Header from './Header'

function App() {
  const [scroll,setScroll] = React.useState(0)
  React.useEffect(()=>{

    window.addEventListener("scroll" , ()=>{
      setScroll(window.pageYOffset)
    })

  })
  return (
    <div className="App" >
      <Header scroll={scroll} />
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <button >tttttttttttt</button>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1 >text</h1>
    </div>
  );
}

export default App;
