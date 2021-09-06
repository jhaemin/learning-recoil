import Canvas from '@/components/Canvas'
import Inspector from '@/components/Inspector'
import MenuBar from '@/components/MenuBar'
import Toolbar from '@/components/Toolbar'

const Home = () => {
  return (
    <div>
      <MenuBar />
      <div className="flex flex-row">
        <Toolbar />
        <Canvas />
        <Inspector />
      </div>
    </div>
  )
}

export default Home
