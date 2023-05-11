import { useState, useTransition, useDeferredValue } from "react";

let arr = new Array(10000).fill('');

function App() {

  let [name, setName] = useState('');
  let [isPending, startTransition] = useTransition();  
  let state = useDeferredValue(state); // opposite to useTransition

  return (
    <div className="App">
      <input onChange={(e)=>{ 
        startTransition(()=> {
          setName(e.target.value) 
        })
      }}/>
      { /** The value entered by the user in the input box will be stored in the state 'name'.  */ }
      {/* In case of performance degradation... for examples I made a lot of <div> components...  */}
      {
        isPending ? 'now loading...' : 
        arr.map(()=> {
          return <div>{ name }</div>
        }) /**  if state 'name' has changed, this div components rendering must be performed again. */
        /** When users use a website, they perceive the website negatively if the response rate is slower than 0.2 seconds.  */
        /** When you must print more than 10000, slowing issue resolution : 
         *  1. It is also a way to divide 1,000 pieces and show them on different pages.
         *  2. use useTransition. (react 18) : New function in React 18 version for innovative performance improvements.
         *     a cause of delay  : setName(e.target.value) 
         *     Wrap state with startTransition.
         *  ★★★★★It improves speed by processing the code covered in 'startTransition' a little late.
         *  'isPending' changed to True when 'startTransition' is still processing.
        */
      }
    </div>
  );
}

export default App;
  