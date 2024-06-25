import { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <h4>Products List</h4>
      <div>
        <table className={"w-full mx-auto"}>
          <thead>
            <tr>
              <th className={"p-2"}>Products</th>
              <th className={"p-2"}>Title</th>
              <th className={"p-2"}>Old Price</th>
              <th className={"p-2"}>New Price</th>
              <th className={"p-2"}>Category</th>
              <th className={"p-2"}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {allproducts.map((product, i) => (
              <tr key={i}>
                <td height={60} width={60}>
                  <img src={product.image} alt={""} />
                </td>
                <td>
                  <div>{product.name}</div>
                </td>
                <td className={"font-sans"}>RS. {product.old_price}</td>
                <td className={"font-sans"}>RS. {product.new_price}</td>
                <td>{product.category}</td>
                <td>
                  <div className={"text-red-700"}>
                    <TbTrash />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListProduct;
