import Item from "./Item";
import { useEffect, useState } from "react";

const Latest = () => {
  const [new_collection, setNew_collection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcllections")
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);
  return (
    <section className={"bg-teal-50 "}>
      <div className={"max_padd_container py-12 xl:py-28 xl:w-[88%]"}>
        <h3 className={"h3 text-start mr-1 font-bold"}>LATEST</h3>
        <hr
          className={
            "h-[3px]  max-auto bg-gradient-to-l from-transparent  to-transparent md-16"
          }
        />
        {/*container*/}
        <div
          className={
            "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
          }
        >
          {new_collection.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;
