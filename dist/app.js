var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("framework/component", ["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function component(options) {
        return function (constructor) {
            if (options.template === undefined && options.templateUrl === undefined) {
                throw new Error('Either template or templateUrl must be specified');
            }
            // TODO: handle templateUrl        
            registerComponent(constructor, options.selector, options.template);
        };
    }
    exports.component = component;
    function registerComponent(constructor, selector, template) {
        if (!ko.components.isRegistered(selector)) {
            ko.components.register(selector, { viewModel: constructor, template: template });
        }
    }
});
define("components/Hello/Hello", ["require", "exports", "knockout", "framework/component"], function (require, exports, ko, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Hello = (function () {
        function Hello(params) {
            this.language = ko.observable(params.language);
            this.framework = ko.observable(params.framework);
        }
        return Hello;
    }());
    Hello = __decorate([
        component_1.component({
            selector: 'hello',
            template: "\n<p>\n    Hello from\n    <strong data-bind=\"text: language\">todo</strong>\n    and\n    <strong data-bind=\"text: framework\">todo</strong>!\n</p>\n\n<p>Language: <input data-bind=\"value: language\" /></p>\n<p>Framework: <input data-bind=\"value: framework\" /></p>\n\n    "
        })
    ], Hello);
    exports.Hello = Hello;
});
define("main", ["require", "exports", "knockout", "components/Hello/Hello"], function (require, exports, ko, Hello_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Hello_1.Hello;
    ko.applyBindings();
});
require.config({
    baseUrl: './',
    paths: {
        "knockout": "lib/knockout/dist/knockout"
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXdvcmsvY29tcG9uZW50LnRzIiwic3JjL2NvbXBvbmVudHMvSGVsbG8vSGVsbG8udHMiLCJzcmMvbWFpbi50cyIsInNyYy9yZXF1aXJlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFRQSxtQkFBMEIsT0FBeUI7UUFDL0MsTUFBTSxDQUFDLFVBQUMsV0FBcUI7WUFDekIsRUFBRSxDQUFDLENBQUUsT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLFdBQVcsS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7WUFDeEUsQ0FBQztZQUNELG1DQUFtQztZQUNuQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVJELDhCQVFDO0lBRUQsMkJBQTJCLFdBQXFCLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjtRQUNoRixFQUFFLENBQUMsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUM7SUFDTCxDQUFDOzs7OztJQ0pELElBQWEsS0FBSztRQUtkLGVBQVksTUFBVztZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVMLFlBQUM7SUFBRCxDQVZBLEFBVUMsSUFBQTtJQVZZLEtBQUs7UUFmakIscUJBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSx3UkFXVDtTQUNKLENBQUM7T0FDVyxLQUFLLENBVWpCO0lBVlksc0JBQUs7Ozs7O0lDZmxCLGFBQUssQ0FBQztJQUNOLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7QUNGbkIsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNYLE9BQU8sRUFBRSxJQUFJO0lBQ2IsS0FBSyxFQUFFO1FBQ0gsVUFBVSxFQUFFLDRCQUE0QjtLQUMzQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcblxuaW50ZXJmYWNlIENvbXBvbmVudE9wdGlvbnMge1xuICAgIHNlbGVjdG9yOiBzdHJpbmc7XG4gICAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gICAgdGVtcGxhdGVVcmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQob3B0aW9uczogQ29tcG9uZW50T3B0aW9ucyk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKGNvbnN0cnVjdG9yOiBGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoIG9wdGlvbnMudGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnRlbXBsYXRlVXJsID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VpdGhlciB0ZW1wbGF0ZSBvciB0ZW1wbGF0ZVVybCBtdXN0IGJlIHNwZWNpZmllZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSB0ZW1wbGF0ZVVybCAgICAgICAgXG4gICAgICAgIHJlZ2lzdGVyQ29tcG9uZW50KGNvbnN0cnVjdG9yLCBvcHRpb25zLnNlbGVjdG9yLCBvcHRpb25zLnRlbXBsYXRlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50KGNvbnN0cnVjdG9yOiBGdW5jdGlvbiwgc2VsZWN0b3I6IHN0cmluZywgdGVtcGxhdGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICggIWtvLmNvbXBvbmVudHMuaXNSZWdpc3RlcmVkKHNlbGVjdG9yKSApIHtcbiAgICAgICAga28uY29tcG9uZW50cy5yZWdpc3RlcihzZWxlY3Rvciwge3ZpZXdNb2RlbDogY29uc3RydWN0b3IsIHRlbXBsYXRlOiB0ZW1wbGF0ZX0pO1xuICAgIH0gXG59XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50XCI7XG5cbkBjb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGVsbG8nLFxuICAgIHRlbXBsYXRlOiBgXG48cD5cbiAgICBIZWxsbyBmcm9tXG4gICAgPHN0cm9uZyBkYXRhLWJpbmQ9XCJ0ZXh0OiBsYW5ndWFnZVwiPnRvZG88L3N0cm9uZz5cbiAgICBhbmRcbiAgICA8c3Ryb25nIGRhdGEtYmluZD1cInRleHQ6IGZyYW1ld29ya1wiPnRvZG88L3N0cm9uZz4hXG48L3A+XG5cbjxwPkxhbmd1YWdlOiA8aW5wdXQgZGF0YS1iaW5kPVwidmFsdWU6IGxhbmd1YWdlXCIgLz48L3A+XG48cD5GcmFtZXdvcms6IDxpbnB1dCBkYXRhLWJpbmQ9XCJ2YWx1ZTogZnJhbWV3b3JrXCIgLz48L3A+XG5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEhlbGxvIHtcblxuICAgIGxhbmd1YWdlOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPlxuICAgIGZyYW1ld29yazogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz5cblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogYW55KSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBrby5vYnNlcnZhYmxlKHBhcmFtcy5sYW5ndWFnZSk7XG4gICAgICAgIHRoaXMuZnJhbWV3b3JrID0ga28ub2JzZXJ2YWJsZShwYXJhbXMuZnJhbWV3b3JrKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7SGVsbG99IGZyb20gXCIuL2NvbXBvbmVudHMvSGVsbG8vSGVsbG9cIjtcblxuSGVsbG87XG5rby5hcHBseUJpbmRpbmdzKCk7XG4iLCJkZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5cbnJlcXVpcmUuY29uZmlnKHtcbiAgICBiYXNlVXJsOiAnLi8nLFxuICAgIHBhdGhzOiB7XG4gICAgICAgIFwia25vY2tvdXRcIjogXCJsaWIva25vY2tvdXQvZGlzdC9rbm9ja291dFwiXG4gICAgfVxufSk7XG4iXX0=
