import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      style={{ display: 'flex', marginBottom: '20px' }}
    >
      <label htmlFor="search-input" style={{ display: 'none' }}>
        Search Repositories
      </label>
      <Input
        id="search-input"
        placeholder="Search GitHub repositories"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '10px' }}
        aria-label="Search GitHub repositories"
      />
      <Button type="primary" htmlType="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
