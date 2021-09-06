import { elementIdsState } from '@/states/elements'
import { nanoid } from 'nanoid'
import React, { useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const Toolbar: React.FC = () => {
  const elementIds = useRecoilValue(elementIdsState)
  const setElementIds = useSetRecoilState(elementIdsState)

  const onClickSquare = useCallback(() => {
    setElementIds((prev) => [...prev, nanoid(7)])
  }, [setElementIds])

  return (
    <div className="w-60">
      <button onClick={onClickSquare}>Add</button>
    </div>
  )
}

export default Toolbar
