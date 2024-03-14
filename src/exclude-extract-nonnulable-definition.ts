export {};

type MyExclude<T, U> = T extends U ? never : T;
type DebugType = () => void;
type Sometypes = string | number | DebugType;
type FunctopnType = Exclude<Sometypes, string | number>;
type MyFunctionType = MyExclude<Sometypes, string | number>;

type FunctipnTypeByExtract = Extract<Sometypes, DebugType>;

type NullableType = string | number | null | undefined;
type NonNullableType = NonNullable<NullableType>;

