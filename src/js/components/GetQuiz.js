import React from 'react';

import 'jquery';

export default class GetQuiz extends React.Component {
	constructor(){
        super();
        
        this.state = {
            value: 'https://assets.breatheco.de/apis/quiz/html'
        }
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.props.onSelect(this.state.value);
        this.setState({
            value: ''
        });
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }

	render () {
		return (
			<div className="container">
                <div className="row justify-content-center section-url">
                    <div className="col-12">
                        <h1 className="text-center">Get API</h1>
                    </div>
                    <div className="col-6">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label>URL JSON</label>
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    value={this.state.value} 
                                    onChange={this.handleChange.bind(this)} 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
		);
	}
}