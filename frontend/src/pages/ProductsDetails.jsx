import { useParams } from "react-router-dom";
import dataProducts from "../data/DataProducts";

function ProductsDetails() {
  const { id } = useParams();

  return (
    <main>
      <article className="flex justify-center pt-16">
        <h1 className="text-4xl">{dataProducts[parseInt(id - 1, 10)].name}</h1>
      </article>

      <section className="grid grid-cols-4">
        <div className="col-span-3 grid grid-rows-3 gap-1">
          {/* PRODUCT */}
          <article className="grid-span-2 border-2 relative m-3 mt-16 bg-white grid grid-cols-3 grid-rows-2 gap-1">
            <h2 className="absolute -top-7 left-10 text-2xl bg-white p-2 border rounded-sm">
              Le Produit
            </h2>

            <div className="col-span-2 order-1 p-10">
              <h3 className="text-2xl">Ingrédients</h3>
              <p>
                {dataProducts[0].ingredients}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                doloribus facilis aperiam obcaecati eaque exercitationem eius ad
                voluptate ipsa possimus quas consequuntur ex adipisci mollitia
                deleniti est, veritatis earum et praesentium ab quibusdam? Ut
                repellendus incidunt quos iure suscipit! Neque a aliquam rem
                numquam laborum nobis labore, doloremque distinctio excepturi.
              </p>
            </div>

            <div className="col-span-2 order-3 p-10">
              <h3 className="text-2xl">
                Conseils d{`'`}utilisation et de préparation
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia dolorum totam repudiandae odio velit ab autem
                consequatur veritatis provident dolores quis fugit, et aliquam
                corrupti quae aperiam possimus quia similique cumque atque
                soluta rem nesciunt. Architecto obcaecati nam ipsa ipsum earum.
                Dolor, totam exercitationem non asperiores similique ab error
                rem?
              </p>
            </div>

            <div className="col-span-1 order-2 p-10">
              <h3 className="text-2xl">Origine</h3>
              <p>LABAS</p>
            </div>

            <div className="col-span-1 order-4 grid grid-cols-2 p-10">
              <h3 className="text-2xl col-span-2">Labels</h3>

              <div className="w-9/12">
                <img src="../src/assets/label_ab.jpg" alt="label AB" />
              </div>

              <div className="w-9/12">
                <img
                  src="../src/assets/label_alsace_gold.jpg"
                  alt="label Alsace"
                />
              </div>

              <div className="w-9/12">
                <img src="../src/assets/label_spp.png" alt="label SPP" />
              </div>

              <div className="w-9/12">
                <img src="../src/assets/label_euro.jpg" alt="label Euro" />
              </div>
            </div>
          </article>

          {/* SUPPLIER */}
          <article className="border-2 relative m-3 mt-16 bg-white grid grid-cols-3 grid-rows-2">
            <h2 className="absolute -top-7 left-10 text-2xl bg-white z-10 p-2 border rounded-sm">
              Le Fabricant
            </h2>

            <div className="col-span-1 row-span-2 p-10 flex justify-center align-middle">
              <img
                src="../src/assets/logo_alt.jpg"
                alt=""
                className="object-contain"
              />
            </div>

            <div className="col-span-2 p-10">
              <h2 className="text-3xl pb-2">Moulin d{`'`}ici</h2>
              <div>
                <h3 className="text-2xl">Méthodes de fabrication</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  iusto fugiat sed, ratione sequi odit a magnam ipsum in
                  voluptates natus alias, vel saepe doloremque? Blanditiis
                  magnam perspiciatis rem dolore voluptate magni aperiam veniam
                  rerum placeat sit non in minima quisquam, harum iure eveniet
                  et earum excepturi nemo soluta. Possimus.
                </p>
              </div>
            </div>

            <div className="col-span-2 p-10 grid grid-cols-2 grid-rows-4">
              <p>Téléphone :</p>
              <a href="tel:+0000000000">+3300000000</a>

              <p>Mail :</p>
              <a href="mailto: aaa@bbb.ccc">MAIL</a>

              <p>Adresse :</p>
              <a href="https://www.openstreetmap.org/#map=16/47.2171/-1.5300">
                GO ON MAP
              </a>

              <p>Site web :</p>
              <a href="#Company">www.COMPANY.com</a>
            </div>
          </article>

          {/* COMPANY */}
          <article className="border-2 relative flex justify-between m-3 mt-16 h-max bg-white">
            <h2 className="absolute -top-7 left-10 text-2xl bg-white z-10 p-2 border rounded-sm">
              Mon commerce
            </h2>

            <div className="p-10">
              <h3 className="text-2xl pb-2">Astuces</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                molestias quia maiores commodi ipsum quos, et ad mollitia,
                impedit atque saepe maxime ullam, blanditiis velit delectus
                magnam? Vel repudiandae assumenda neque, quisquam, libero
                voluptatem animi beatae facere quam eos cum in? Dolorem officiis
                hic illo quam tempore odio voluptatem similique.
              </p>
            </div>

            <div className="p-10">
              <h3 className="text-2xl pb-2">Idées recettes</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                molestias quia maiores commodi ipsum quos, et ad mollitia,
                impedit atque saepe maxime ullam, blanditiis velit delectus
                magnam? Vel repudiandae assumenda neque, quisquam, libero
                voluptatem animi beatae facere quam eos cum in? Dolorem officiis
                hic illo quam tempore odio voluptatem similique.
              </p>
            </div>
          </article>
        </div>

        <aside className="col-span-1 border-2 m-8 mt-16 p-2 h-28 grid grid-cols-4 bg-white">
          <img src="../src/assets/icon_pencil.svg" alt="" className="w-6" />

          <a href="#Company" className="col-span-3">
            Éditer
          </a>

          <img
            src="../src/assets/icon_download_cloud.svg"
            alt=""
            className="w-6"
          />

          <a href="#Company" className="col-span-3">
            Télécharger
          </a>

          <img
            src="../src/assets/icon_arrows_rotate.svg"
            alt=""
            className="w-6"
          />

          <a href="#Company" className="col-span-3">
            Actualiser
          </a>
        </aside>
      </section>
    </main>
  );
}

export default ProductsDetails;
