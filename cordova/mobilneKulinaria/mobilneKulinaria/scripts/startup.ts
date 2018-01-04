import * as Application from './application';

declare var require: (modules: string[], ready: Function, errback: Function) => void;

// Spróbuj załadować kod dla określonej platformy z folderu /merges.
// Więcej informacji można znaleźć na stronie http://taco.visualstudio.com/pl-pl/docs/configure-app/#Content.
require(["./platformOverrides"],
    () => Application.initialize(),
    () => Application.initialize());