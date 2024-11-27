import React, { useState, useEffect } from 'react';
import { List, message, Spin } from 'antd';
import githubApi from '../api/githubApi';
import IssueFilter from './IssueFilter';

interface Issue {
  id: number;
  number: number;
  title: string;
  state: string;
  html_url: string;
}

interface IssueListProps {
  owner: string;
  repo: string;
}

const IssueList: React.FC<IssueListProps> = ({ owner, repo }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [stateFilter, setStateFilter] = useState<'open' | 'closed' | 'all'>('all');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalIssues, setTotalIssues] = useState(0);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await githubApi.get(
          `/repos/${owner}/${repo}/issues`,
          {
            params: {
              state: stateFilter,
              page: currentPage,
              per_page: 10, // Items per page
            },
          }
        );
        // Exclude pull requests
        const issuesOnly = response.data.filter((issue: any) => !issue.pull_request);
        setIssues(issuesOnly);
        // Estimate total issues (GitHub API doesn't provide total count here)
        setTotalIssues(issuesOnly.length < 10 ? (currentPage - 1) * 10 + issuesOnly.length : currentPage * 10 + 1);
      } catch (error) {
        message.error('Error fetching issues');
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, [owner, repo, stateFilter, currentPage]);

  const handleFilterChange = (value: 'open' | 'closed' | 'all') => {
    setStateFilter(value);
    setCurrentPage(1);
    setLoading(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setLoading(true);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <IssueFilter value={stateFilter} onChange={handleFilterChange} />
      {loading ? (
        <Spin style={{ marginTop: '20px' }} />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={issues}
          pagination={{
            current: currentPage,
            pageSize: 10,
            total: totalIssues,
            onChange: handlePageChange,
            showSizeChanger: false,
          }}
          renderItem={(issue) => (
            <List.Item key={issue.id}>
              <List.Item.Meta
                title={
                  <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                    #{issue.number} {issue.title}
                  </a>
                }
                description={`State: ${issue.state}`}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default IssueList;
