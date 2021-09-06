import { selectedElementIdState, selectedElementState } from '@/states/elements'
import { Trash } from 'framework7-icons-plus/react'
import { useRecoilValue } from 'recoil'

const SelectionBoundary = () => {
  const selectedElementId = useRecoilValue(selectedElementIdState)
  const selectedElement = useRecoilValue(selectedElementState)

  if (selectedElementId === null) return null

  return (
    <div
      className="pointer-events-none"
      style={{
        position: 'absolute',
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 0 4px black',
        left: selectedElement?.left,
        top: selectedElement?.top,
        width: selectedElement?.width,
        height: selectedElement?.height,
      }}
    >
      <div className="absolute top-0 right-0">
        <Trash />
      </div>
    </div>
  )
}

export default SelectionBoundary
