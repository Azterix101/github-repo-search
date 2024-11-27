import React, { useState } from 'react';
import { Typography, message, Row, Col, Layout } from 'antd';
import githubApi from '../api/githubApi';
import SearchBar from '../components/SearchBar';
import RepositoryList from '../components/RepositoryList';

const { Title } = Typography;
const { Content } = Layout;

const HomePage: React.FC = () => {
  const [repositories, setRepositories] = useState([]);

  const handleSearch = async (query: string) => {
    if (!query) {
      message.warning('Please enter a search term');
      return;
    }
    try {
      const response = await githubApi.get(
        `/search/repositories?q=${encodeURIComponent(query)}`
      );
      setRepositories(response.data.items);
    } catch (error) {
      message.error('Error fetching repositories');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '20px' }}>
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Title level={2}>GitHub Repository Search</Title>
            <SearchBar onSearch={handleSearch} />
            <RepositoryList repositories={repositories} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HomePage;
