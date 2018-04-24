import React from 'react';
import BannerHeader from './BannerHeader';
import GetQuiz from './GetQuiz';
import ShowQuiz from './ShowQuiz';

import 'jquery';

export default class App extends React.Component {
	constructor(props){
        super(props);
        this.state = {
            url: '',
            titleBanner: ''
        }
    }

    urlAPI(url){
        this.setState({ url });
    }

	render () {
		return (
            <div>
                <BannerHeader titleBanner={this.state.titleBanner}/>
                {
                    (this.state.url) ? 
                        <ShowQuiz data={this.state.url}/>
                        : 
                        <GetQuiz onSelect={this.urlAPI.bind(this)}/>    
                }
            </div>
		);
	}
}
