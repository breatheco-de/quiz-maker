import React from 'react';
import Info from './Info';
import Questions from './Questions';
import NewQuestion from './NewQuestion';

import 'jquery';

export default class ShowQuiz extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			apiBadges: [],
			apiInfo: [],
			apiQuestions: [],
			json: []
		}
	}

	componentWillMount(){
		this.getApi();
	}

	getApi(){
		fetch(this.props.data)
		.then(function(response) {
			return response.json();
		})
		.then((data) => {
			this.setState({
				apiInfo: data.info,
				apiQuestions: data.questions,
				apiBadges: data.info.badges
			});
		})
		.catch(function(error){
			console.log('error', error);
		})
	}

	handleNewQuestion(){
		const newQuestion = {
			q: '',
			a: [
				{
					option: '',
					correct: false
				},
				{
					option: '',
					correct: false
				},
				{
					option: '',
					correct: false
				}
			]
		}
		this.setState({
			apiQuestions: [...this.state.apiQuestions, newQuestion]
		});
		setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 500);
		
	}

	handleDeleteQuestion(data, i){
		let filteredQuestions = this.state.apiQuestions.filter(el => el != data );
		this.setState(({
			apiQuestions: filteredQuestions
		}));
	}
	
	//recibo los datos que cambio en Info.js
	
	getValueFromInfo(data, type, key){
		const api = this.state.apiQuestions;
		const dataFromComponent = data;

		if(type.typeRequest == 'question'){
			//recorremos el api
			let result = this.state.apiQuestions.map((value, i) =>{
				if(key == i){
					return {q: dataFromComponent, a: value.a}
				}else{
					return {q: value.q, a: value.a}
				}
			})
			this.setState({
				apiQuestions: result
			})
		}else if(type.typeRequest == 'info'){

		}
	}

	download(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}
	  

	render () {
		
		const results = this.state.apiQuestions.map((value, key) =>
														<Questions 
														key={key} 
														data={value}
														answer={value.a}
														onJson={(data, type)=>this.getValueFromInfo(data, type, key)}
														onSelect={()=>this.handleDeleteQuestion(value, key)}/>);
		return (
			<div className="container-fluid p-0">
				<button className="btn btn-primary download-btn" onClick={()=>this.download("quiz.json",JSON.stringify(this.state.apiQuestions))}>
					<i className="fas fa-download"></i> download progress
				</button>
    			<nav className="navbar navbar-dark bg-dark">
    				<a className="navbar-brand" href="#">
    					General Quiz Information
    				</a>
    			</nav>
				<Info data={this.state.apiInfo} onJson={(data, type) => this.getValueFromInfo(data, type)}/>
    			<nav className="questions-nav navbar sticky-top navbar-dark bg-dark">
    				<a className="navbar-brand" href="#">
    					Questions
    				</a>
    				<div className="ml-auto">
    					<NewQuestion onClick={this.handleNewQuestion.bind(this)}/>
    				</div>
    			</nav>
                <div className="row">
                    <div className="col-10 mx-auto">
						{results}
                    </div>
                </div>
            </div>
		);
	}
}