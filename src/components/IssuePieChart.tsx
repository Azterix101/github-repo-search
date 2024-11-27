import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { message, Spin } from 'antd';
import githubApi from '../api/githubApi';

interface IssuePieChartProps {
  owner: string;
  repo: string;
}

const COLORS = ['#0088FE', '#FFBB28'];

const IssuePieChart: React.FC<IssuePieChartProps> = ({ owner, repo }) => {
  const [data, setData] = useState<{ name: string; value: number }[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssueCounts = async () => {
      try {
        const [openIssues, closedIssues] = await Promise.all([
          githubApi.get(`/search/issues`, {
            params: {
              q: `repo:${owner}/${repo} is:issue is:open`,
            },
          }),
          githubApi.get(`/search/issues`, {
            params: {
              q: `repo:${owner}/${repo} is:issue is:closed`,
            },
          }),
        ]);

        setData([
          { name: 'Open Issues', value: openIssues.data.total_count },
          { name: 'Closed Issues', value: closedIssues.data.total_count },
        ]);
      } catch (error) {
        message.error('Error fetching issue counts');
      } finally {
        setLoading(false);
      }
    };

    fetchIssueCounts();
  }, [owner, repo]);

  if (loading || !data) {
    return <Spin style={{ marginTop: '20px' }} />;
  }

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            aria-label="Issue distribution pie chart"
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IssuePieChart;
