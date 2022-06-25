import { useState } from 'react';
import { FormContainer, Form, Input, Button } from './SearchForm.styled';
import PropTypes from 'prop-types';

export default function SearchForm({ formSubmit, errorMessage }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      errorMessage();
      return;
    }

    formSubmit(query);
    setQuery('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value.toLowerCase().trim())}
          autoComplete="off"
          placeholder="Давайте знайдемо"
        />
        <Button type="submit"></Button>
      </Form>
    </FormContainer>
  );
}

SearchForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.func.isRequired,
};
