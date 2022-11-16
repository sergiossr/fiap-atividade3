import { atomWithStorage } from 'jotai/utils'

const pizzaMontadaAtom = atomWithStorage('pizzaMontadaAtomKey', []);

export { pizzaMontadaAtom };