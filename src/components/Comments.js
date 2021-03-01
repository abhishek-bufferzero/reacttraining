import React, { useEffect, useState } from "react";
// import "./Comment-style.css";

class Table extends React.Component {
	state = {
		visible: "",
	};

	hideHandler = () => {
		this.setState({ visible: "none" });
	};
	render() {
		return (
			<div	
				className={`table ${this.state.visible}`}
				onClick={this.hideHandler}
			>
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}

class Parent extends React.Component {
	constructor() {
		super();

		this.state = {
			tableData: ["one", "two", "three", "four"],
		};
	}

	render() {
		const mappedTable = this.state.tableData.map((tab, id) => {
			return <Table title={tab} key={id} />;
		});
		return <div className="text">{mappedTable}</div>;
	}
}

export default Parent;
