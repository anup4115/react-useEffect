import { useEffect } from "react"

function App() {
  const fetchedData=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await response.json()
    console.log(data)
  }
  useEffect(()=>{
    fetchedData()
  },[])
  return (
    <div className="App">
      <h2>useEffect is a react hook used in function based react componsnts to perform side effects, such as fetching
        data, subscription...
      </h2>
      <h2>
        useEffects are triggered from certain action or changes which are called dependencies. However if there is
        no dependency then this runs right after the component mounts. This means useEffect runs atleast once wheteher
        it has dependency or not.
       </h2>
    </div>
  );
}

export default App;
