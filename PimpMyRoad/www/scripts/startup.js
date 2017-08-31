define(["require", "exports", "./application"], function (require, exports, Application) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Tente de charger du code spécifique à la plateforme à partir du dossier /merges.
    // Plus d'informations sur http://taco.visualstudio.com/fr-fr/docs/configure-app/#Content.
    require(["./platformOverrides"], function () { return Application.initialize(); }, function () { return Application.initialize(); });
});
//# sourceMappingURL=startup.js.map