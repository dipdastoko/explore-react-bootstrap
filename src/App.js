import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './components/Card/Card';
import { Button, Spinner } from 'react-bootstrap';

function App() {
  const items = [
    {
      name: 'first item',
      description: 'slkf',
      img: 'https://thumbs.dreamstime.com/b/concrete-mixer-classic-big-rig-semi-truck-evening-road-white-red-wings-straight-abutting-horizon-their-49976228.jpg'
    },
    {
      name: 'first item',
      description: 'slkf',
      img: 'https://thumbs.dreamstime.com/b/concrete-mixer-classic-big-rig-semi-truck-evening-road-white-red-wings-straight-abutting-horizon-their-49976228.jpg'
    },
    {
      name: 'first item',
      description: 'slkf',
      img: 'https://thumbs.dreamstime.com/b/concrete-mixer-classic-big-rig-semi-truck-evening-road-white-red-wings-straight-abutting-horizon-their-49976228.jpg'
    },
    {
      name: 'first item',
      description: 'slkf',
      img: 'https://thumbs.dreamstime.com/b/concrete-mixer-classic-big-rig-semi-truck-evening-road-white-red-wings-straight-abutting-horizon-their-49976228.jpg'
    },
  ]
  return (
    <div className='App'>
      <Button variant='warning'>Hello Me</Button>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div >
  );
}

export default App;
// <div className="row row-cols-1 row-cols-md-4 g-4">
    //   {
    //     items.map(item => <Card
    //       item={item}
    //     ></Card>)
    //   }
    // </div>