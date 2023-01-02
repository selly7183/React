import React, { useState } from "react";
import useProducts from "../hooks/use-products";

export default function Products() {
	const [checked, setChecked] = useState(false);
	const [loading, error, products] = useProducts({ checked });
	const handleChange = () => setChecked(!checked);

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
