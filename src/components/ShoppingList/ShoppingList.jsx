export default function ShoppingList({ listProd }) {
  return (
    <div className="lista-compras-container">
      <ul className="lista-items">
        {listProd.map((item) => (
          <li key={item.idProd}>{item.nomeProd}</li>
        ))}
      </ul>
    </div>
  );
}
