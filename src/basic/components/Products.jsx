import React, { useEffect, useState } from "react";

export default function Products() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const [products, setProducts] = useState([]);
	const [checked, setChecked] = useState(false);
	const handleChange = () => setChecked(!checked);

	useEffect(() => {
		setLoading(true);
		setError(undefined);
		fetch(`data/${checked ? "sale_" : ""}products.json`)
			.then((res) => res.json())
			.then((data) => {
				console.log("데이터를 네트워크에서 받아옴.");
				setProducts(data);
			})
			.catch((e) => setError("에러가 발생했음!"))
			.finally(() => setLoading(false));
		return () => {
			console.log("깨끗하게 청소함.");
		};
	}, [checked]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<>
			<input
				id="checkbox"
				type="checkbox"
				value={checked}
				onChange={handleChange}
			/>
			<label htmlFor="checkbox">Hot Only Sale 😊</label>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<p>{product.name}</p>
						<p>{product.price}</p>
					</li>
				))}
			</ul>
		</>
	);
}
