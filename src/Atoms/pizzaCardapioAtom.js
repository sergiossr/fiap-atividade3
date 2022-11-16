import { atomWithStorage } from 'jotai/utils'

const pizzaCardapioAtom = atomWithStorage('pizzaCardapioAtomKey', []);

export { pizzaCardapioAtom };