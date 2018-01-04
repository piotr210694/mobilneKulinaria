define(["require", "exports"], function (require, exports) {
    // Aby obejrzeć wprowadzenie do pustego szablonu, zobacz następującą dokumentację:
    // http://go.microsoft.com/fwlink/?LinkID=397705
    // Aby debugować kod ładowania strony w narzędziu cordova-simulate, na urządzeniach z systemem Android lub w emulatorach systemu Android: uruchom aplikację, ustaw punkty przerwania, 
    // a następnie uruchom polecenie „window.location.reload()” w konsoli języka JavaScript.
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function initialize() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
    exports.initialize = initialize;
    function onDeviceReady() {
        document.addEventListener('pause', onPause, false);
        document.addEventListener('resume', onResume, false);
        // TODO: Załadowano oprogramowanie Cordova. Wykonaj tutaj wszystkie wymagane kroki inicjowania tego oprogramowania.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
    function onPause() {
        // TODO: Ta aplikacja została zawieszona, Zapisz tutaj stan aplikacji.
    }
    function onResume() {
        // TODO: Ta aplikacja została ponownie aktywowana. Przywróć tutaj stan aplikacji.
    }
});
//# sourceMappingURL=application.js.map