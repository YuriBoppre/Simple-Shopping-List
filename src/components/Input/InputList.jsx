import { useState } from 'react';

export default function InputList({ listProd, setListProd, input, setInput }) {
  const [id, setId] = useState(0);

  const onSubmitForm = (e) => {
    e.preventDefault();

    setId(id + 1);

    setListProd([...listProd, { idProd: id, nomeProd: input }]);
    setInput('');
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
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Adicionar
        </button>
      </fieldset>
    </form>
  );
}
