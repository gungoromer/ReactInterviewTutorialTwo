import ListGroup from './components/ListGroup';

function App() {
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'İzmir'
  ];

  return <div>
    <ListGroup items={items} heading='Cities'></ListGroup>
  </div>
}

export default App;