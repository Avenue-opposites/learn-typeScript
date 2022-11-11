"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a, _b;
exports.__esModule = true;
var _6_extends_1 = require("./6.extends");
//Generics(泛型)
//泛型类
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
//在使用时指定类型
var pair1 = new KeyValuePair(1, "Apple");
var pair2 = new KeyValuePair("2", "pear");
//泛型函数
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.wrapInArray = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        return rest;
    };
    return ArrayUtils;
}());
var arr = ArrayUtils.wrapInArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr);
function fetch(url) {
    console.log("fetching --> ".concat(url));
    return {
        data: null,
        error: null
    };
}
var user = fetch("https://www.bilibili.com/video");
var product = fetch("https://www.bilibili.com/video");
(_a = user.data) === null || _a === void 0 ? void 0 : _a.username;
(_b = product.data) === null || _b === void 0 ? void 0 : _b.brand;
function echo(value) {
    console.log(value);
    return value;
}
;
echo(1);
echo({ username: "pzj", password: "123456789" });
echo(new _6_extends_1.Teacher("只", "因"));
//泛型类和继承
var Store = /** @class */ (function () {
    function Store() {
        this._shelfGoods = [];
    }
    Object.defineProperty(Store.prototype, "shelfGoods", {
        get: function () {
            return this._shelfGoods;
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.add = function (goods) {
        this.shelfGoods.push(goods);
    };
    return Store;
}());
var CompressibleStore = /** @class */ (function (_super) {
    __extends(CompressibleStore, _super);
    function CompressibleStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompressibleStore.prototype.compress = function () {
        console.log("compressing...");
    };
    return CompressibleStore;
}(Store));
var SearchableStore = /** @class */ (function (_super) {
    __extends(SearchableStore, _super);
    function SearchableStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchableStore.prototype.find = function (name) {
        return this._shelfGoods.find(function (goods) { return goods.name === name; });
    };
    return SearchableStore;
}(Store));
var store = new SearchableStore();
store.add({ brand: "Apple", name: "iPhone13", price: 5400 });
console.log(store.find("iPhone13"));
