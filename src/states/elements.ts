import type { ElementType } from '@/types/elements'
import { atom, atomFamily, selector } from 'recoil'

export const elementIdsState = atom<string[]>({
  key: 'ElementIdsState',
  default: [],
})

export const elementState = atomFamily<ElementType, ElementType['id']>({
  key: 'ElementState',
  default: (param) => {
    return {
      id: param,
      left: 0,
      top: 0,
      width: 200,
      height: 200,
      backgroundColor: 'red',
    }
  },
})

export const selectedElementIdState = atom<ElementType['id'] | null>({
  key: 'SelectedElementIdState',
  default: null,
})

export const selectedElementState = selector<ElementType | null>({
  key: 'SelectedElementState',
  get: ({ get }) => {
    const selectedElementId = get(selectedElementIdState)

    if (selectedElementId === null) return null

    const element = get(elementState(selectedElementId))

    return get(elementState(selectedElementId))
  },
  set: ({ get, set }, newValue) => {
    const selectedElementId = get(selectedElementIdState)

    if (selectedElementId === null || newValue === null) return

    set(elementState(selectedElementId), newValue)
  },
})
