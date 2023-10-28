import {TopShelf} from './TopShelf'
import {BottomShelf} from './BottomShelf'
import "tailwindcss/tailwind.css"

function App() {


  return (
    <div className="flex flex-col h-screen">
<TopShelf/>
<BottomShelf>hi</BottomShelf>
</div>

  )
}

export default App
