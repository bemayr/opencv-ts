declare module Range {
    interface Range {
        new(): Range;
        new(start: number, end: number): Range;
        size(): number;
        empty(): boolean;
        all(): Range;
        start: number,
        end: number
    }
}
export = Range;