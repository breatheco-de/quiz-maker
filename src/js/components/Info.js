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
            <div className="section-question">
                <h2 className="text-center title-info">Principal Info</h2>
                <div className="form-group">
                    <label>Name Quiz</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.nameInfo}
                        onChange={this.handleChangeName.bind(this)}
                    />
                </div>
                    <div className="form-group">
                        <label>Main Quiz</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.mainInfo}
                            onChange={this.handleChangeMain.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Result Quiz</label>
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