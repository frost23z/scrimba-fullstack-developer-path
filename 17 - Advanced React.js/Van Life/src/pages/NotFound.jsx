import { Link } from "react-router"

export default function NotFound() {
	return (
		<div className="not-found-container">
			<h1>Sorry, the page you were looking for was not found.</h1>
			<Link to="/" className="link-button">
				Return to Home
			</Link>
		</div>
	)
}
