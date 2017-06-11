import React, { Component } from 'react';
import styled from 'styled-components'


class CV extends Component {
    
   
    render() {
    const Cvv = styled.div`
     font: 300 14px/1.4 'Helvetica Neue', Helvetica, Arial, sans-serif;
     color: white;
     display: inline-block;
     float:left;
     background: ${this.props.color};
     width:${this.props.procent};
     `;
     const Procent = styled.div`
     font-weight: bold;

     `;
        return (
            <Cvv>
                {this.props.skill} <Procent>{this.props.procent}</Procent>
            </Cvv>
        );
    }
    
};
CV.PropTypes={
    skill: React.PropTypes.string.isRequired,
    procent: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
};
export default CV;