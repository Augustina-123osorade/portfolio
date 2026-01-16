import type { ProjectDetails } from '@/data/project-details';
import {atom} from 'jotai';


export const sidebarOpenAtom = atom(false);
export const projectModalOpenAtom = atom(false);
export const selectedProjectAtom = atom<ProjectDetails | null>(null);
export const contactFormAtom = atom({
    name: '',
    email: '',
    message: ''
});
export const formSubmittingAtom = atom(false);