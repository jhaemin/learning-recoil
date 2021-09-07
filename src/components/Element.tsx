import { elementState, selectedElementIdState } from '@/states/elements'
import { ElementType } from '@/types/elements'
import React from 'react'
import { DraggableCore, DraggableData, DraggableEvent } from 'react-draggable'
import { useRecoilCallback, useRecoilValue } from 'recoil'

export type RectangleProps = {
  elementId: ElementType['id']
}

const Element: React.FC<RectangleProps> = ({ elementId }) => {
  const { width, height, left, top, backgroundColor } = useRecoilValue(
    elementState(elementId)
  )

  const onMouseDownElement = useRecoilCallback(({ set }) => () => {
    set(selectedElementIdState, elementId)
  })

  const onDrag = useRecoilCallback(
    ({ set }) =>
      (e: DraggableEvent, { deltaX, deltaY }: DraggableData) => {
        set(elementState(elementId), (currState) => ({
          ...currState,
          left: currState.left + deltaX,
          top: currState.top + deltaY,
        }))
      }
  )

  return (
    <DraggableCore onDrag={onDrag} onMouseDown={onMouseDownElement}>
      <div
        data-element-id={elementId}
        style={{
          position: 'absolute',
          left,
          top,
          width,
          height,
          backgroundColor,
        }}
      />
    </DraggableCore>
  )
}

export default Element
