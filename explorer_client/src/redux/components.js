import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import {actionTypes} from "./reducer";
import PropTypes from 'prop-types'
import "../App.css"
import Actions from './action'

export class FileUpload extends Component{
    constructor(props){
        super(props);
        this.state = {...props};
        console.log('--------------------------');
        console.log(this.state);
    }
    render(){
        return <div className='App'>
            <h3>File upload:</h3>
            <div id="see">
                <label> Please select a file to upload:</label>
                <input type="file" className="form-control-file" name="image" id="imageZone" size="200" ref='input'/>
                <Button bsStyle="success" bsSize={"large"} onClick={(e)=>this.handleClick(e)}>Submit </Button>
            </div>
        </div>;

    }

    handleClick(e){
        const node = this.refs.input;
        const fileName = node.value;
        console.log(node,fileName);
        // this.props.onAddClick(file);
        node.value='';
    }
}

FileUpload.propTypes={
    // onAddClick: PropTypes.func.isRequired
};