'use client';
import React from 'react';

export default function Form() {
  return (
    <form action="">
      <div className="mb-4 form-control">
        <label htmlFor="" className="label">
          Nombre
        </label>
        <input type="text" name="name" className="input input-bordered" />
      </div>
      <button className="btn btn-primary">Guardar</button>
    </form>
  );
}
