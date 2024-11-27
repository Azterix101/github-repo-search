import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Descriptions, message, Spin, Row, Col } from 'antd';
import githubApi from '../api/githubApi';
import IssueList from '../components/IssueList';
import IssuePieChart from '../components/IssuePieChart';

const { Title } = Typography;

interface Repository {
  html_url: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  full_name: string;
}

const RepositoryPage: React.FC = () => {
  const { owner, repo } = useParams<{ owner: string; repo: string }>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await githubApi.get(`/repos/${owner}/${repo}`);
        setRepository(response.data);
      } catch (error) {
        message.error('Error fetching repository details');
      } finally {
        setLoading(false);
      }
    };

    fetchRepository();
  }, [owner, repo]);

  if (loading) {
    return <Spin style={{ margin: '20px' }} />;
  }

  if (!repository) {
    return <div>Repository not found.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Title level={2}>{repository.full_name}</Title>
        </Col>
        <Col xs={24} md={16}>
          <Descriptions
            bordered
            column={{ xs: 1, sm: 1, md: 1, lg: 3 }}
            aria-label="Repository details"
          >
            <Descriptions.Item label="URL" span={3}>
              <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                {repository.html_url}
              </a>
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>
              {repository.description || 'No description'}
            </Descriptions.Item>
            <Descriptions.Item label="Forks Count">
              {repository.forks_count}
            </Descriptions.Item>
            <Descriptions.Item label="Stargazers Count">
              {repository.stargazers_count}
            </Descriptions.Item>
            <Descriptions.Item label="Open Issues Count">
              {repository.open_issues_count}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col xs={24} md={8}>
          <IssuePieChart owner={owner!} repo={repo!} />
        </Col>
        <Col xs={24}>
          <IssueList owner={owner!} repo={repo!} />
        </Col>
      </Row>
    </div>
  );
};

export default RepositoryPage;
