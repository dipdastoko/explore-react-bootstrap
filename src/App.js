import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './components/Card/Card';
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-02-27&sortBy=publishedAt&apiKey=f90846d9f2d34622870daf3acd2ad320')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className='App'>
      <Row xs={1} md={2} className="g-4">
        {
          news.map(nw => <News news={nw}></News>)
        }
      </Row>
    </div >
  );
}

export default App;
