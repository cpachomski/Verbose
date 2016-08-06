import React from 'react';
import NewForm from './NewForm';
import Task from './Task';
import './style.scss';

export default React.createClass({
	displayName: 'Todos',

	getInitialState() {
		return {
			newFormVisible: false
		}
	},

	toggleFormVisibility() {
		if (this.state.newFormVisible === false) {
			let input = document.getElementById('new-task');
			console.log(input);
			input.focus();
		}
		this.setState({
			newFormVisible: !this.state.newFormVisible
		})
	},


	render() {
		const { tasks } = this.props;
		const iconClass = this.state.newFormVisible ? 'material-icons light' : 'material-icons';
		const iconText = this.state.newFormVisible ? 'clear' : 'add';

		return (
			<div className='tasks'>
				<div className='tasks--header'>
					<NewForm visible={this.state.newFormVisible}/>		
					<h1 className='tasks--title'>Tasks</h1>	
					<i className={iconClass}
						onClick={this.toggleFormVisibility}>{iconText}</i>
				</div>
				<ul className='tasks--list'>
				{
					tasks.map((task, i )=> {
						return <Task key={i} description={task} /> 
					})
				}
				</ul>
			</div>
		)
	}
});
