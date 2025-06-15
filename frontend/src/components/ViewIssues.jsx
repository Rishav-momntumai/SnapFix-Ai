import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, CircularProgress } from '@mui/core';
import axios from 'axios';

const ViewIssues = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/issues', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setIssues(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching issues:', err);
        setLoading(false);
      }
    };
    fetchIssues();
  }, []);

  if (loading) return <CircularProgress style={{ display: 'block', margin: '20px auto' }} />;

  return (
    <Container maxWidth="md">
      <Typography variant="h4" className="page-title">All Issues</Typography>
      <Paper style={{ padding: '20px' }}>
        <Typography variant="body1">Total Issues: {issues.length}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Issue Type</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {issues.map(issue => (
              <TableRow key={issue.id}>
                <TableCell>{issue.report_id}</TableCell>
                <TableCell>{issue.issue_type}</TableCell>
                <TableCell>{issue.timestamp}</TableCell>
                <TableCell>{issue.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default ViewIssues;