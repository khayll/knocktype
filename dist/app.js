define("components/Hello/Hello", ["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Hello = (function () {
        function Hello(params) {
            this.language = ko.observable(params.language);
            this.framework = ko.observable(params.framework);
        }
        return Hello;
    }());
    Hello.template = "\n<p>\n    Hello from\n    <strong data-bind=\"text: language\">todo</strong>\n    and\n    <strong data-bind=\"text: framework\">todo</strong>!\n</p>\n\n<p>Language: <input data-bind=\"value: language\" /></p>\n<p>Framework: <input data-bind=\"value: framework\" /></p>\n\n    ";
    exports.Hello = Hello;
});
define("main", ["require", "exports", "knockout", "components/Hello/Hello"], function (require, exports, ko, Hello_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ko.components.register('hello', { viewModel: Hello_1.Hello, template: Hello_1.Hello.template });
    ko.applyBindings();
});
require.config({
    baseUrl: './',
    paths: {
        "knockout": "lib/knockout/dist/knockout"
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0hlbGxvL0hlbGxvLnRzIiwic3JjL21haW4udHMiLCJzcmMvcmVxdWlyZS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUE7UUFrQkksZUFBWSxNQUFXO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUwsWUFBQztJQUFELENBdkJBLEFBdUJDO0lBckJpQixjQUFRLEdBQVcsd1JBV2hDLENBQUM7SUFiTyxzQkFBSzs7Ozs7SUNEbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFFLGFBQUssRUFBRSxRQUFRLEVBQUUsYUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFL0UsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDOztBQ0huQixPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ1gsT0FBTyxFQUFFLElBQUk7SUFDYixLQUFLLEVBQUU7UUFDSCxVQUFVLEVBQUUsNEJBQTRCO0tBQzNDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuXG5kZWNsYXJlIHZhciBpbmplY3RIdG1sOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBIZWxsbyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHRlbXBsYXRlOiBzdHJpbmcgPSBgXG48cD5cbiAgICBIZWxsbyBmcm9tXG4gICAgPHN0cm9uZyBkYXRhLWJpbmQ9XCJ0ZXh0OiBsYW5ndWFnZVwiPnRvZG88L3N0cm9uZz5cbiAgICBhbmRcbiAgICA8c3Ryb25nIGRhdGEtYmluZD1cInRleHQ6IGZyYW1ld29ya1wiPnRvZG88L3N0cm9uZz4hXG48L3A+XG5cbjxwPkxhbmd1YWdlOiA8aW5wdXQgZGF0YS1iaW5kPVwidmFsdWU6IGxhbmd1YWdlXCIgLz48L3A+XG48cD5GcmFtZXdvcms6IDxpbnB1dCBkYXRhLWJpbmQ9XCJ2YWx1ZTogZnJhbWV3b3JrXCIgLz48L3A+XG5cbiAgICBgO1xuXG4gICAgbGFuZ3VhZ2U6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+XG4gICAgZnJhbWV3b3JrOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPlxuXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGtvLm9ic2VydmFibGUocGFyYW1zLmxhbmd1YWdlKTtcbiAgICAgICAgdGhpcy5mcmFtZXdvcmsgPSBrby5vYnNlcnZhYmxlKHBhcmFtcy5mcmFtZXdvcmspO1xuICAgIH1cblxufSIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtIZWxsb30gZnJvbSBcIi4vY29tcG9uZW50cy9IZWxsby9IZWxsb1wiO1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKCdoZWxsbycsIHt2aWV3TW9kZWw6IEhlbGxvLCB0ZW1wbGF0ZTogSGVsbG8udGVtcGxhdGUgfSk7XG5cbmtvLmFwcGx5QmluZGluZ3MoKTtcbiIsImRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcblxucmVxdWlyZS5jb25maWcoe1xuICAgIGJhc2VVcmw6ICcuLycsXG4gICAgcGF0aHM6IHtcbiAgICAgICAgXCJrbm9ja291dFwiOiBcImxpYi9rbm9ja291dC9kaXN0L2tub2Nrb3V0XCJcbiAgICB9XG59KTtcbiJdfQ==
