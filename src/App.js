import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

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
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {
        items.map(item => <Card
          item={item}
        ></Card>)
      }
    </div>
  );
}

export default App;
