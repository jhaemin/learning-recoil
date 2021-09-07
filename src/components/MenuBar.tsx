import { elementIdsState, elementState } from '@/states/elements'
import { useRecoilCallback } from 'recoil'

const MenuBar = () => {
  const onClickJson = useRecoilCallback(({ snapshot }) => async () => {
    const elementIds = await snapshot.getPromise(elementIdsState)

    const elements = await Promise.all(
      elementIds.map(async (id) => snapshot.getPromise(elementState(id)))
    )

    console.log(JSON.stringify(elements, null, 2))
  })

  return (
    <div>
      <button onClick={onClickJson}>Save</button>
    </div>
  )
}

export default MenuBar
