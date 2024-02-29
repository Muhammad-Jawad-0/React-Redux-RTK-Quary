import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../RTK-quary"


function Shop() {
  const { data, error, isLoading } = useGetAllProductsQuery('products')
  return (
    <div>
      <h1>Shop page</h1>
      <Link to="/">Go to Home</Link>
      {isLoading && <h2>Looooooodig.....</h2> }
      {data && data.map((v) => (
        <ul>
          <li key={v.id}>{v.title}</li>
        </ul>
      ))}
    </div>
  )
}

export default Shop;