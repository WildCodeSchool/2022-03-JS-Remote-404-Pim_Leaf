import { useParams } from "react-router-dom";

import DetailsSuppliers from "../components/DetailsSuppliers";
import SearchBarSuppliersDetails from "../components/SearchBarSupppliersDetails";
import ButtonFunction from "../components/ButtonFunction";
import dataSuppliers from "../data/MaxData";
import dataProducts from "../data/DataProducts";

function SuppliersDetails() {
  const { id } = useParams();
  return (
    <main>
      <p className="text-5xl flex justify-center pt-10">
        {dataSuppliers[parseInt(id, 10)].name}
      </p>
      <div className="bg-middleBlue/70 relative m-10 mt-16">
        <article className="relative grid grid-cols-3 ">
          <h1 className="absolute -top-10 text-4xl">Description</h1>
          <div className="col-span-2 order-1 p-10">
            <p className="text-3xl mb-4 flex grid-span-2 relative">
              {dataSuppliers[parseInt(id, 10)].speciality}
            </p>
            <p className="text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              reiciendis rem esse laboriosam excepturi alias consectetur, hic
              fuga quos ipsum doloremque non itaque minus tempore similique nemo
              ipsa. Fugit, et? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tempore voluptatibus blanditiis modi omnis
              cumque quaerat nobis atque? Porro, quia molestiae vel
              reprehenderit possimus minima laudantium. Qui nisi dicta
              repudiandae molestiae?
            </p>
          </div>
          <div className="col-span-2 order-1 p-10">
            <h3 className="text-3xl uppercase mb-4 flex grid-span-2 relative">
              Certification
            </h3>
          </div>
        </article>
      </div>
      <div className="bg-middleBlue/70 relative m-10 mt-16">
        <div className="col-span-2 order-1 ">
          <h3 className=" absolute -top-10 text-4xl">Coordonees</h3>
          <a
            href="https://www.openstreetmap.org/search?query=mulhouse#map=13/47.7443/7.3457"
            className="text-3xl flex grid-span-2 relative p-10"
          >
            {dataSuppliers[parseInt(id, 10)].coordonees}
          </a>
        </div>
      </div>
      <SearchBarSuppliersDetails />
      <ButtonFunction />
      <DetailsSuppliers products={dataProducts} />
    </main>
  );
}

export default SuppliersDetails;
