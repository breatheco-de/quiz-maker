import React from 'react';

import 'jquery';

export default class BannerHeader extends React.Component {
	constructor(){
		super();
	}

	render () {
		return (
			<div className="row">
                <div className="col-sm-12 banner-header">
					{
						(this.props.titleBanner) ? 
						<h1 className="text-center title no-margin">{this.props.titleBanner}</h1> : <h1 className="text-center title no-margin">QUIZ 4Geeks</h1>
					}
                </div>
			</div>
		);
	}
}