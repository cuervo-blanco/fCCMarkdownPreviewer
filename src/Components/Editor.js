import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';


class Editor extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            text: ""
        }
    }
    
    render(){  
        return(
                <div id="editor-wrap" style={this.props.size}> 
                    <div id="edit-toolbar" >
                    <i class="fa-brands fa-free-code-camp"></i>Editor<i class={this.props.class} onClick={this.props.handleClick}></i>
                    </div>
                    <textarea style={this.props.textAreaSize}id="editor" type="text" onChange={this.props.handleChange} value={this.props.text}></textarea>
                </div>
                
        )
    }
}

export default Editor;