import { elementIdsState } from '@/states/elements'
import React from 'react'
import { useRecoilValue } from 'recoil'
import Element from './Element'
import SelectionBoundary from './SelectionBoundary'

const Canvas: React.FC = () => {
  const elementIds = useRecoilValue(elementIdsState)

  return (
    <div id="canvas" className="flex-1 relative">
      {elementIds.map((elementId) => (
        <Element key={elementId} elementId={elementId} />
      ))}
      <SelectionBoundary />
    </div>
  )
}

export default Canvas
