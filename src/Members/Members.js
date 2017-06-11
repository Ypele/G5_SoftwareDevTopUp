import React, { Component } from 'react';
import { createMember, listMembers, listenMembers } from '../data/api/members';

class Members extends Component {
	constructor(props) {
		super(props);
		this.state = {
			members: [],
			alert: null
		};
	}

	componentDidMount() {
		this.getMembers();
		listenMembers(() => { this.getMembers() }, () => { this.getMembers() })
	}

	render() {
		let membersData = this.state.members;
		let membersForm = this.getForm();
		return (
			<div className="container members">
				<h2 className="members-title"> Members list </h2>
				<div className="col-md-12">
					<div className="panel panel-default">
						<div className="panel-heading">Add member</div>
						<div className="panel-body">{membersForm}</div>
					</div>
				</div>
				<div className="col-md-12">
					<div className="panel panel-default members-list">
						<div className="panel-heading">Members list</div>
						<div className="panel-body">
							<table className="table table-striped">
								<thead>
									<tr>
										<th>Name</th>
										<th>Email</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody> {membersData.map(el => { return this.getItem(el) })} </tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}

	getMembers() {
		listMembers(response => {
			this.setState({ members: response });
		})
	}

	create() {
		let data = {
			name: this.refs.name.value,
			email: this.refs.email.value
		};
		if (this.isValid(data)) {
			this.alert("Member is creating...", "warning");
			createMember(data, () => {
				this.getMembers();
				this.resetForm();
				this.alert("Member created!", "success");
			}, error => {
				this.alert("Cannot create member!", "danger");
			});
		} else {
			this.alert("Please complete all fields!", "danger");
		}
	}

	delete(ref) {
		ref.remove(error => {
			if (!error) this.getMembers();
		});
	}

	resetForm() {
		this.refs.name.value = "";
		this.refs.email.value = "";
	}

	isValid() {
		if (this.refs.email.value === "" || this.refs.name.value === "") return false;
		return true;
	}

	getForm() {
		let alert = this.state.alert, alertClassname;
		if (alert) {
			alertClassname = "alert alert-add alert-" + alert.type;
		}
		return (
			<div className="members-form">
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label for="name">Name:</label>
							<input type="text" className="form-control" ref="name"/>
						</div>
						<div className="form-group">
							<label for="name">Email:</label>
							<input type="text" className="form-control" ref="email"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<button className="btn btn-success" onClick={this.create.bind(this)}>Add</button>
					</div>
					<div className="col-md-5 pull-right">
						{this.state.alert ? (
							<div className={alertClassname}>
								{alert.text}
							</div>
						) : null}
					</div>
				</div>
			</div>
		);
	}

	getItem(el) {
		return (
			<tr key={el.key}>
				<td> {el.data.name} </td>
				<td> {el.data.email} </td>
				<td>
					<button className="btn btn-danger" onClick={this.delete.bind(this, el.ref)}>
						<span className="glyphicon glyphicon-remove-sign"></span>
					</button>
				</td>
			</tr>
		);
	}

	alert(text, type) {
		if (this.state.alert) {
			clearTimeout(this.state.alert.to)
		}
		let to = setTimeout(() => {
			this.setState({ alert: null });
		}, 2000);
		this.setState({
			alert: {
				text: text,
				type: type,
				to
			}
		});
	}
}

export default Members;