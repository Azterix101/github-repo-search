import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface IssueFilterProps {
  value: 'open' | 'closed' | 'all';
  onChange: (value: 'open' | 'closed' | 'all') => void;
}

const IssueFilter: React.FC<IssueFilterProps> = ({ value, onChange }) => (
  <Select
    value={value}
    onChange={onChange}
    style={{ width: 200 }}
    aria-label="Filter issues by state"
  >
    <Option value="all">All Issues</Option>
    <Option value="open">Open Issues</Option>
    <Option value="closed">Closed Issues</Option>
  </Select>
);

export default IssueFilter;
