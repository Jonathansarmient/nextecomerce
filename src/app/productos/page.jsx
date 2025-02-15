import Carta from "../components/Carta";


export default async function Page() {

  const respuesta = await fetch('https://fakestoreapi.in/api/products');
  const datos = await respuesta.json();
  const { products } = datos;


  return (
    <>
      <div className="flex flex-wrap">
        {products.map(
          producto => (
            <Carta price= {producto.price} imagen={producto.image} key={producto.id} title={producto.title} />
          )
        )}

      </div>

    </>
  )
}