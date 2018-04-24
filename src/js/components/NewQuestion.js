import React from 'react';

export default class NewQuestion extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
    }
    
    newQuestion(){
        this.props.onClick();    
    }

	render () {
		return (
			<div className="">
                <button 
                type="button" 
                className="btn btn-primary"
                onClick={this.newQuestion.bind(this)}
                >Nueva Pregunta</button>
            </div>
		);
	}
}