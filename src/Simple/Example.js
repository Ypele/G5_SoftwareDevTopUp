import React, { Component } from 'react';
import styled from 'styled-components';
import Cv from './CV'

class CVS extends Component {
    render() {
    var Div = styled.div`
    margin: 20px;
    padding:10px;
    background-color: #fff;
    `;
    return (
      <Div>
        {/*<TinyMCE
          content="<p>This is a story about a man who wanted to learn to develop code again. He started off with learning ReactJS which is just awesome :)</p>"
          config={{
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
          }}
          onChange={this.handleEditorChange}
        />*/}
        {/*<MyEditor />*/}
        {/*//<Tab />*/}
        <h1>My Skills</h1>
        <Div>
        <Cv skill="Programming" color="#cc0000" procent="90%"/>
        </Div>
        <Div>
        <Cv skill="Testing" color="royalblue" procent="70%"/>
        </Div>
        <Div>
        <Cv skill="Designing" color="DarkGreen " procent="60%"/>
        </Div>
      </Div>
        );
    }
}

export default CVS;