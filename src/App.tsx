import {TopShelf} from './TopShelf'
import {BottomShelf} from './BottomShelf'
import "tailwindcss/tailwind.css"

function App() {


  return (
    <div className="flex flex-col h-screen justify-around align-middle">
<TopShelf/>
<BottomShelf>hi</BottomShelf>
</div>

  )
}

export default App
