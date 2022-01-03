import React, {useState, useEffect, useContext} from 'react';
import {render} from 'react-dom';

const FishContext = React.createContext('trout');

function FishingDemoApp() {
  const [fishState, setFishState] = useState('trout');
  return (
    <FishContext.Provider value={fishState}>
      <FishingBucket changeFish={setFishState}/>
      <CaughtFish/>
    </FishContext.Provider>
  )
}

function CaughtFish() {
  const fishContext = useContext(FishContext);
  return (<p>Caught 12 {fishContext}</p>)
}

function FishingBucket(props) {
  const {changeFish} = props;
  const fishType = useContext(FishContext);
  const [baitType, setBaitType] = useState();
  useEffect(() => {
    switch (fishType) {
      case 'trout':
        setBaitType('smelly-stuff');
        break;
      case 'salmon':
        setBaitType('roe');
        break;
      default:
        break;
    }
  }, [fishType]);
  return (
    <>
    <button onClick={() => changeFish('trout')}>Fish for Trout</button>
    <button onClick={() => changeFish('salmon')}>Fish for Salmon</button>
    <p>We are fishing for {fishType} using {baitType}</p>
    </>
  )
}


render(<FishingDemoApp />, document.getElementById('root'));
