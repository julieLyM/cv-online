import React from 'react';

export const Contact = () => {
  return (
    <div>
      <h1>contactez moi</h1>
      <div>
        <TextField
          id="standard-name"
          label="Name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          id="standard-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
        />
      </div>
      <div>
        <TextField
          id="filled-name"
          label="Name"
          value={name}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="filled-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          variant="filled"
        />
      </div>
    </div>
  );
};
