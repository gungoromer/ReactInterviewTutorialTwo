import Alert from './components/Alert';
import ListGroup from './components/ListGroup';

function App() {
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'İzmir'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div>
    <Alert>
      Long messageasdasd<b>asd</b>
    </Alert>
    <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}></ListGroup>
  </div>
}

export default App;