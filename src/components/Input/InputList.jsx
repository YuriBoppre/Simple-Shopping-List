import { useState } from 'react';

export default function InputList({ listProd, setListProd }) {
  const [id, setId] = useState(0),
    [nomeProd, setNomeProd] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();

    setId(id + 1);

    setListProd([...listProd, { idProd: id, nomeProd: nomeProd }]);
    setNomeProd('');
  };

  return (
    <form
      className="form-add-item"
      action="#"
      method="post"
      onSubmit={onSubmitForm}
    >
      <fieldset>
        <div className="form-group mb-3">
          <label htmlFor="item">Adicionar novo item na lista:</label>
          <input
            type="text"
            className="form-control"
            id="item"
            value={nomeProd}
            onChange={(event) => setNomeProd(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Adicionar
        </button>
      </fieldset>
    </form>
  );
}
