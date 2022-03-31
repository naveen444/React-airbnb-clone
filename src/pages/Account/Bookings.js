import React from "react";

function Bookings(props) {
	console.log(props);
	return (
		<table className="booking">
			<thead>
				<tr>
					<th>Status</th>
					<th>Dates and location</th>
					<th>Details</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{/* {bookings} */}
			</tbody>
		</table>
	)
}

export default Bookings;