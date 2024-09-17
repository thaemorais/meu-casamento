import React from "react";
import tjLogo from "../../assets/images/tjLogo.png";

export default function Header() {
	return (
		<div className="my-3">
			<img src={tjLogo} className="w-20" />
		</div>
	);
}
