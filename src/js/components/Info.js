import React from 'react';

import 'jquery';

export default class Info extends React.Component {
	constructor(props){
        super(props);
		this.state = {
            nameInfo: '',
            mainInfo: '',
            resultInfo: '',
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            nameInfo: props.data.name,
            mainInfo: props.data.main,
            resultInfo: props.data.results
        })
    }
    
    handleChangeName(event){
		this.setState({
			nameInfo: event.target.value
        });

        this.props.onJson({
            name: event.target.value,
            main: this.state.mainInfo,
            result: this.state.resultInfo
        }, {typeRequest: 'info'});
    }
    
    handleChangeMain(event){
		this.setState({
			mainInfo: event.target.value
        });

        this.props.onJson({
            name: this.state.nameInfo,
            main: event.target.value,
            result: this.state.resultInfo
        }, {typeRequest: 'info'});
    }

    handleChangeResult(event){
		this.setState({
			resultInfo: event.target.value
        });

        this.props.onJson({
            name: this.state.nameInfo,
            main: this.state.mainInfo,
            result: event.target.value
        }, {typeRequest: 'info'});
    }

	render () {
		return (
            <div className="section-question p-4">
                <div className="form-group">
                    <label>Quiz title</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.nameInfo}
                        onChange={this.handleChangeName.bind(this)}
                    />
                </div>
                    <div className="form-group">
                        <label>Description shown to the student before starting the quiz</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.mainInfo}
                            onChange={this.handleChangeMain.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last message once the quiz is over</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.resultInfo}
                            onChange={this.handleChangeResult.bind(this)}
                        />
                    </div>
            </div>
		);
	}
}