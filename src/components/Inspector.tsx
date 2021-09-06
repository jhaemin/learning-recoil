import { selectedElementState } from '@/states/elements'
import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'

const Inspector = () => {
  const [selectedElementProperties, setSelectedElementProperties] =
    useRecoilState(selectedElementState)

  const onChangeWidth = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const width = Number(e.target.value)

      setSelectedElementProperties({
        ...selectedElementProperties!,
        width,
      })
    },
    [setSelectedElementProperties, selectedElementProperties]
  )

  const onChangeHeight = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const height = Number(e.target.value)

      setSelectedElementProperties({
        ...selectedElementProperties!,
        height,
      })
    },
    [setSelectedElementProperties, selectedElementProperties]
  )

  return (
    <div className="w-60">
      {selectedElementProperties && (
        <>
          <input
            type="number"
            placeholder="Width"
            value={selectedElementProperties.width}
            onChange={onChangeWidth}
          />
          <input
            type="number"
            placeholder="Height"
            value={selectedElementProperties.height}
            onChange={onChangeHeight}
          />
        </>
      )}
    </div>
  )
}

export default Inspector
