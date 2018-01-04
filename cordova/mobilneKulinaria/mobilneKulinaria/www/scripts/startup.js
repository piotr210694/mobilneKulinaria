define(["require", "exports", "./application"], function (require, exports, Application) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Spróbuj załadować kod dla określonej platformy z folderu /merges.
    // Więcej informacji można znaleźć na stronie http://taco.visualstudio.com/pl-pl/docs/configure-app/#Content.
    require(["./platformOverrides"], function () { return Application.initialize(); }, function () { return Application.initialize(); });
});
//# sourceMappingURL=startup.js.map