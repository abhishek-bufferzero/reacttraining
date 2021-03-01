import React, { Component } from "react";
class Calculator extends Component {
	state = {
		count: 0,
		// visible: "block",
		// btn: true,
	};

	// disableBtn() {
	// 	if (this.state.count > 0) {
	// 		this.setState({ btn: false });
	// 	} else {
	// 		this.setState({ btn: true });
	// 	}
	// }

	add = () => {
		this.setState(
			{
				count: this.state.count + 1,
			},
			() => {
				this.disableBtn();
			}
		);
	};
	subtract = () => {
		this.setState(
			{
				count: this.state.count - 1,
			},
			() => {
				this.disableBtn();
			}
		);
	};

	handleDelete = () => {
		this.setState({ visible: "none" });
	};
	render() {
		return (
			<div style={{ display: this.state.visible }}>
				<br />
				<br />
				<span style={{ display: "inline-block", width: "50px" }}>
					{this.state.count || "zero"}
				</span>

				<button onClick={this.add}>add</button>
				<button disabled={this.state.btn} onClick={this.subtract}>
					subtract{" "}
				</button>
				<button onClick={this.handleDelete}>Delete</button>
			</div>
		);
	}
}

export default Calculator;