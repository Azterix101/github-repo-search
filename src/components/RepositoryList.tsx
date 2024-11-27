import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
  };
  name: string;
}

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => (
  <List
    itemLayout="vertical"
    dataSource={repositories}
    pagination={{
      pageSize: 10, // Items per page
      showSizeChanger: true,
      pageSizeOptions: ['5', '10', '20'],
      defaultPageSize: 10,
    }}
    renderItem={(repo) => (
      <List.Item key={repo.id}>
        <List.Item.Meta
          title={
            <Link to={`/repository/${repo.owner.login}/${repo.name}`}>
              {repo.full_name}
            </Link>
          }
          description={repo.description}
        />
      </List.Item>
    )}
  />
);

export default RepositoryList;
