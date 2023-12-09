import './styles/App.scss';
import React from 'react';
import Editor from './Components/Editor.js';
import Preview from './Components/Preview.js';

const initialText = "# Welcome to my React Markdown Previewer!\n\n" +
"## This is a sub-heading...\n" +
"### And here's some other cool stuff:\n\n" +
"Here's some code, `<div></div>`, between 2 backticks.\n\n" +
"```\n" +
"// this is multi-line code:\n\n" +
"function anotherExample(firstLine, lastLine) {\n" +
"  if (firstLine == '```' && lastLine == '```') {\n" +
"    return multiLineCode;\n" +
"  }\n" +
"}\n" +
"```\n\n" +
"You can also make text **bold**... whoa!\n" +
"Or _italic_.\n" +
"Or... wait for it... **_both!_**\n" +
"And feel free to go crazy ~~crossing stuff out~~.\n\n" +
"There's also [links](https://www.freecodecamp.org), and\n" +
"> Block Quotes!\n\n" +
"And if you want to get really crazy, even tables:\n\n" +
"Wild Header | Crazy Header | Another Header?\n" +
"------------ | ------------- | -------------\n" +
"Your content can | be here, and it | can be here....\n" +
"And here. | Okay. | I think we get it.\n\n" +
"- And of course there are lists.\n" +
"  - Some are bulleted.\n" +
"     - With different indentation levels.\n" +
"        - That look like this.\n\n" +
"1. And there are numbered lists too.\n" +
"1. Use just 1s if you want!\n" +
"1. And last but not least, let's not forget embedded images:\n\n" +
"![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"


const windowExtend = {
  height: "100vh",
  display: "flex"
}

const windowShrink = {
  height: "0vh",
  display: "none"
}

const windowDefault = {
  height: "auto",
  display: "flex"
}

const textAreaDefault = {
  resize: "vertical",
  height: '416px'
}

const textAreaResize = {
  resize: "none",
  height: '100%'
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClickA = this.handleClickA.bind(this);
    this.handleClickB = this.handleClickB.bind(this);
    this.handleClickC = this.handleClickC.bind(this);

    this.state = {
      text: "",
      w1Size: windowDefault,
      w2Size: windowDefault,
      class: "fa-solid fa-maximize",
      w1Function: this.handleClickA,
      w2Function: this.handleClickC,
      textAreaSize: textAreaDefault
       
    }

    
  }

  componentDidMount(){
    this.setState({
      text: initialText
    });
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    });
  }
  
  handleClickA(){
    this.setState({
      w1Size: windowExtend,
      w2Size: windowShrink,
      class: "fa-solid fa-minimize",
      w1Function: this.handleClickB,
      textAreaSize: textAreaResize
    });
  }

  handleClickB(){
    this.setState({
      w1Size: windowDefault,
      w2Size: windowDefault,
      class: "fa-solid fa-maximize",
      w1Function: this.handleClickA,
      w2Function: this.handleClickC,
      textAreaSize: textAreaDefault
    });
  }

  handleClickC(){
    this.setState({
      w1Size: windowShrink,
      w2Size: windowExtend,
      class: "fa-solid fa-minimize",
      w2Function: this.handleClickB
    });
  }

  render(){

  return (
    
    <div className="App">
    <Editor handleChange={this.handleChange} text={this.state.text} handleClick={this.state.w1Function} class={this.state.class} size={this.state.w1Size} textAreaSize={this.state.textAreaSize}/>
    <Preview newText={this.state.text} handleClick={this.state.w2Function} class={this.state.class} size={this.state.w2Size}/>
      
    </div>
  );
  }
}

export default App;
