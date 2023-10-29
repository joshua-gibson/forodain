import {TopShelf} from './components/TopShelf'
import {BottomShelf} from './components/BottomShelf'
import {StoryWrapper} from './components/StoryWrapper'
import "tailwindcss/tailwind.css"

function App() {


  return (
    <div className="flex flex-col h-screen">
<TopShelf/>
<BottomShelf>
<StoryWrapper stringSelector="ch1"/>
</BottomShelf>
</div>

  )
}

export default App
