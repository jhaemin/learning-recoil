import {
  elementIdsState,
  elementState,
  selectedElementIdState,
  selectedElementState,
} from '@/states/elements'
import { Trash } from 'framework7-icons-plus/react'
import { useRecoilCallback, useRecoilValue } from 'recoil'

const SelectionBoundary = () => {
  const selectedElementId = useRecoilValue(selectedElementIdState)
  const selectedElement = useRecoilValue(selectedElementState)

  const onClickDelete = useRecoilCallback(
    ({ snapshot, set, reset }) =>
      async () => {
        const elementId = await snapshot.getPromise(selectedElementIdState)

        set(selectedElementIdState, null)

        if (elementId) {
          reset(elementState(elementId))
          set(elementIdsState, (curr) => {
            const next = [...curr]
            next.splice(curr.indexOf(elementId), 1)
            return next
          })
        }
      }
  )

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
      <button
        onClick={onClickDelete}
        className="pointer-events-auto cursor-pointer absolute -top-2 -right-2 bg-white shadow-md border border-gray-200 rounded-full p-2 flex items-center justify-center text-red-600"
      >
        <Trash />
      </button>
    </div>
  )
}

export default SelectionBoundary
