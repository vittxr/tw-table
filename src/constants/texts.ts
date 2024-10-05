import { DeepPartial } from "../types/DeepPartial";

export const uiTexts = {
    empty: "Empty",
    sort: {
        by: "Sort by",
        dir: "Sort direction",
        desc: "Desc",
        asc: "Asc",  
    }, 
    search: {
        label: "Search",
        placeholder: "Search...",
    },
    pagination: {
        previous: "Previous",
        next: "Next",
        page: "Page",
        of: "of",
        show: "Show",
        showing: "Showing",
        rows: "rows",
    }
}

type _UITexts = typeof uiTexts;
export type UITexts = DeepPartial<_UITexts>;