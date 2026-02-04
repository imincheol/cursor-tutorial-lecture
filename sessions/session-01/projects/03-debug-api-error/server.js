// 간단한 테스트 서버 (선택 사항)
// Node.js로 실행: node server.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const users = [
  { id: 1, name: '김철수', email: 'kim@example.com' },
  { id: 2, name: '이영희', email: 'lee@example.com' },
  { id: 3, name: '박민수', email: 'park@example.com' }
];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // CORS 헤더
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // API 라우트
  if (req.url === '/api/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
    return;
  }
  
  // 잘못된 경로 (/api/user)
  if (req.url === '/api/user' && req.method === 'GET') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found. Did you mean /api/users?' }));
    return;
  }
  
  // 정적 파일 서빙
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }
  
  const extname = path.extname(filePath);
  const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
  }[extname] || 'text/plain';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('올바른 API: http://localhost:${PORT}/api/users');
  console.log('잘못된 API: http://localhost:${PORT}/api/user (404)');
});
