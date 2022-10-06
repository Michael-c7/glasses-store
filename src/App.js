import React from 'react';

function App() {
  const [data, setData] = React.useState(null)

  const fetchData = _ => {
    let url = process.env.REACT_APP_GLASSES_DATA_URL

    fetch(url)
      .then(res => res.json())
      .then(data => setData(data)); 
  }

  React.useEffect(() => {
    fetchData()
  }, [])


  React.useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
