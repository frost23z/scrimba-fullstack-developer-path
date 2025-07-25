import React from "react"
import { Link, useLoaderData, useLocation, useParams } from "react-router"
import { getVan } from "../../api"

export async function loader({ params }) {
	return getVan(params.id)
}

export default function VanDetail() {
	const van = useLoaderData()
	const location = useLocation()

	const search = location.state?.search || ""
	const type = location.state?.type || "all"

	return (
		<div className="van-detail-container">
			<Link to={`..${search}`} relative="path" className="back-button">
				&larr; <span>Back to {type} vans</span>
			</Link>

			{van && (
				<div className="van-detail">
					<img src={van.imageUrl} />
					<i className={`van-type ${van.type} selected`}>{van.type}</i>
					<h2>{van.name}</h2>
					<p className="van-price">
						<span>${van.price}</span>/day
					</p>
					<p>{van.description}</p>
					<button className="link-button">Rent this van</button>
				</div>
			)}
		</div>
	)
}
