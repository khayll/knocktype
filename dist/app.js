var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("framework/koComponent", ["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function koComponent(options) {
        return function (constructor) {
            if (options.template === undefined && options.templateUrl === undefined) {
                throw new Error('Either template or templateUrl must be specified');
            }
            // TODO: handle templateUrl        
            registerKoComponent(constructor, options.selector, options.template);
        };
    }
    exports.koComponent = koComponent;
    function registerKoComponent(constructor, selector, template) {
        if (!ko.components.isRegistered(selector)) {
            ko.components.register(selector, { viewModel: constructor, template: template });
        }
    }
});
define("components/Hello/Hello", ["require", "exports", "knockout", "framework/koComponent"], function (require, exports, ko, koComponent_1) {
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
        koComponent_1.koComponent({
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXdvcmsva29Db21wb25lbnQudHMiLCJzcmMvY29tcG9uZW50cy9IZWxsby9IZWxsby50cyIsInNyYy9tYWluLnRzIiwic3JjL3JlcXVpcmUuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQVFBLHFCQUE0QixPQUEyQjtRQUNuRCxNQUFNLENBQUMsVUFBQyxXQUFxQjtZQUN6QixFQUFFLENBQUMsQ0FBRSxPQUFPLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLFNBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBQ0QsbUNBQW1DO1lBQ25DLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUE7SUFDTCxDQUFDO0lBUkQsa0NBUUM7SUFFRCw2QkFBNkIsV0FBcUIsRUFBRSxRQUFnQixFQUFFLFFBQWdCO1FBQ2xGLEVBQUUsQ0FBQyxDQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDbkYsQ0FBQztJQUNMLENBQUM7Ozs7O0lDSEQsSUFBYSxLQUFLO1FBS2QsZUFBWSxNQUFXO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUwsWUFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVlksS0FBSztRQWZqQix5QkFBVyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLHdSQVdUO1NBQ0osQ0FBQztPQUNXLEtBQUssQ0FVakI7SUFWWSxzQkFBSzs7Ozs7SUNoQmxCLGFBQUssQ0FBQztJQUVOLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7QUNIbkIsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNYLE9BQU8sRUFBRSxJQUFJO0lBQ2IsS0FBSyxFQUFFO1FBQ0gsVUFBVSxFQUFFLDRCQUE0QjtLQUMzQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcblxuaW50ZXJmYWNlIEtvQ29tcG9uZW50T3B0aW9ucyB7XG4gICAgc2VsZWN0b3I6IHN0cmluZztcbiAgICB0ZW1wbGF0ZT86IHN0cmluZztcbiAgICB0ZW1wbGF0ZVVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtvQ29tcG9uZW50KG9wdGlvbnM6IEtvQ29tcG9uZW50T3B0aW9ucyk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKGNvbnN0cnVjdG9yOiBGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoIG9wdGlvbnMudGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnRlbXBsYXRlVXJsID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VpdGhlciB0ZW1wbGF0ZSBvciB0ZW1wbGF0ZVVybCBtdXN0IGJlIHNwZWNpZmllZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSB0ZW1wbGF0ZVVybCAgICAgICAgXG4gICAgICAgIHJlZ2lzdGVyS29Db21wb25lbnQoY29uc3RydWN0b3IsIG9wdGlvbnMuc2VsZWN0b3IsIG9wdGlvbnMudGVtcGxhdGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJLb0NvbXBvbmVudChjb25zdHJ1Y3RvcjogRnVuY3Rpb24sIHNlbGVjdG9yOiBzdHJpbmcsIHRlbXBsYXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoICFrby5jb21wb25lbnRzLmlzUmVnaXN0ZXJlZChzZWxlY3RvcikgKSB7XG4gICAgICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoc2VsZWN0b3IsIHt2aWV3TW9kZWw6IGNvbnN0cnVjdG9yLCB0ZW1wbGF0ZTogdGVtcGxhdGV9KTtcbiAgICB9IFxufVxuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBrb0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsva29Db21wb25lbnRcIjtcbmRlY2xhcmUgdmFyIGluamVjdEh0bWw6IGFueTtcblxuQGtvQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hlbGxvJyxcbiAgICB0ZW1wbGF0ZTogYFxuPHA+XG4gICAgSGVsbG8gZnJvbVxuICAgIDxzdHJvbmcgZGF0YS1iaW5kPVwidGV4dDogbGFuZ3VhZ2VcIj50b2RvPC9zdHJvbmc+XG4gICAgYW5kXG4gICAgPHN0cm9uZyBkYXRhLWJpbmQ9XCJ0ZXh0OiBmcmFtZXdvcmtcIj50b2RvPC9zdHJvbmc+IVxuPC9wPlxuXG48cD5MYW5ndWFnZTogPGlucHV0IGRhdGEtYmluZD1cInZhbHVlOiBsYW5ndWFnZVwiIC8+PC9wPlxuPHA+RnJhbWV3b3JrOiA8aW5wdXQgZGF0YS1iaW5kPVwidmFsdWU6IGZyYW1ld29ya1wiIC8+PC9wPlxuXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBIZWxsbyB7XG5cbiAgICBsYW5ndWFnZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz5cbiAgICBmcmFtZXdvcms6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IGFueSkge1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0ga28ub2JzZXJ2YWJsZShwYXJhbXMubGFuZ3VhZ2UpO1xuICAgICAgICB0aGlzLmZyYW1ld29yayA9IGtvLm9ic2VydmFibGUocGFyYW1zLmZyYW1ld29yayk7XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge0hlbGxvfSBmcm9tIFwiLi9jb21wb25lbnRzL0hlbGxvL0hlbGxvXCI7XG5cbkhlbGxvO1xuXG5rby5hcHBseUJpbmRpbmdzKCk7XG4iLCJkZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5cbnJlcXVpcmUuY29uZmlnKHtcbiAgICBiYXNlVXJsOiAnLi8nLFxuICAgIHBhdGhzOiB7XG4gICAgICAgIFwia25vY2tvdXRcIjogXCJsaWIva25vY2tvdXQvZGlzdC9rbm9ja291dFwiXG4gICAgfVxufSk7XG4iXX0=
