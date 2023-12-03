import Alert from './components/Alert';
import Button from './components/Button';
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
    <br />
    <br />
    <Button text='Kaydet1' />
    <Button text='Kaydet2' />
    <Button text='aasdasd' />

    <br />
    <br />
    <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}></ListGroup>
  </div>
}

export default App;