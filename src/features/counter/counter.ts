import { v4 } from "uuid";

export function createCounter(
    label: string,
    count: number
): Counter {
    return {
        id: v4(),
        label,
        count
    }
}

export default interface Counter {
    id: string
    label: string,
    count: number
}
