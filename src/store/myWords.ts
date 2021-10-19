import { Subject } from "rxjs";

export const subject = new Subject();

export type Data = {
    person: string;
    text: string;
    favorited: boolean;
};

export type IModel = {
    data: Data[];
    newDataCount: number;
};

export type IFavorite = {};

export enum IAction {
    Send,
    Clear,
    Favorite,
}

export type IUpdate = IAction;

export const initialState: IModel = {
    data: [],
    newDataCount: 0,
};

let state = initialState;

const wordsStore = {
    init: () => subject.next(state),
    subscribe: (setState: any) => subject.subscribe(setState),
    initialState,
};

export const update = (update: IUpdate, data: Data, index?: number) => {
    console.log(state);
    switch (update) {
        case IAction.Clear:
            state = initialState;
            subject.next(state);
            break;
        case IAction.Send:
            state = {
                ...state,
                data: [...state.data, data],
                newDataCount: state.newDataCount + 1,
            };
            subject.next(state);
            break;
        case IAction.Favorite:
            if (index !== undefined) {
                state.data[index].favorited = !state.data[index].favorited;
                state = {
                    ...state,
                };
            }
            subject.next(state);
            break;
        default:
            throw new Error("Need to be exhaustive");
    }
};

export default wordsStore;
