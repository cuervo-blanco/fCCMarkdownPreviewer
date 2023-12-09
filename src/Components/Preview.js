import React from "react";
import {marked}  from 'marked';
import '@fortawesome/fontawesome-free/css/all.css';


class Preview extends React.Component{

    
    
    
    render(){  
        const markdownText = this.props.newText;
        const html = marked(markdownText, { sanitize: true });

        return(
                <div id="preview-wrap" style={this.props.size}>
                
                    <div id="preview-toolbar">
                    <i class="fa-brands fa-free-code-camp"></i>Previewer<i class={this.props.class} onClick={this.props.handleClick}></i>
                    </div>
                    <div id="preview" dangerouslySetInnerHTML={{ __html: html }} >
                        
                    </div>
                </div>
                
        )
    }
}

export default Preview;