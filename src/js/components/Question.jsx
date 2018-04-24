import React from 'react';
export default class Question extends React.Component{
    
    constructor(){
        super();
        this.state = {
            q: '',
            a: []
        }
    }
    
    componentWillMount(){
        this.setState({
            q: this.props.data.q,
            a: this.props.data.a
        })
    }
    
    handleChange(scope, value){
        switch(scope)
        {
            case "q": this.setState({ q: value }); break;
        }
    }
    
    render(){
        const answers = this.state.a.map((answer) => 
            (<div className="row">
                <div className="col-8">
    				<input 
    					className="form-control" 
    					type="text"
    					value={this.state.data.q} 
    					onChange={(e) => this.handleChange('q',e.target.value)}
    				/>
    			</div>
    			<div className="col-2">
    				<label className="float-right">Correct? </label>
    				<input 
    					type="checkbox" checked={answer.correct} value={answer.correct}
    					onChange={(e) => this.handleChange('correct', e.target.value)}
    				/>
    			</div>
    			<div className="col-2">
    			    <button className="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
    			</div>
			</div>)
		);
        return (
            <div className="row">
                <div className="col-12">
                    <h2>{this.state.q}</h2>
                    {answers}
                </div>
		    </div>
	    );
    }
}