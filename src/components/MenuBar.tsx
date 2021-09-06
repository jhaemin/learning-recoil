import { elementIdsState, elementState } from '@/states/elements'
import { useRecoilCallback } from 'recoil'

const MenuBar = () => {
  const onClickJson = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const elementIds = await snapshot.getPromise(elementIdsState)

        const elements = await Promise.all(
          elementIds.map(async (id) => snapshot.getPromise(elementState(id)))
        )

        console.log(elements)
      },
    []
  )

  return (
    <div>
      <button onClick={onClickJson}>JSON</button>
    </div>
  )
}

export default MenuBar
