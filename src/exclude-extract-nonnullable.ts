export {};

type DebugType = () => void;
type Sometypes = string | number | DebugType;

//SomeTypesから、stringとnumberを取り除いた方を作りたい
//Excludeは除外
type FunctopnType = Exclude<Sometypes, string | number>;
//Functionを指定すると、関数定義しているものを除外してくれる
type TypeExcludingFunction = Exclude<Sometypes, Function>;

type NunFunctipnType = Exclude<Sometypes, DebugType>;

//Extractは抽出する
type FunctipnTypeByExtract = Extract<Sometypes, DebugType>;
type NonFunctipnTypeByExtract = Extract<Sometypes, string | number>;
type FunctipnTypeExtractingFunction = Extract<Sometypes, Function>;

//nonnullableはunion型からnullやundefinedを除外してくれる
type NullableType = string | number | null | undefined;
type NonNullableType = NonNullable<NullableType>;

