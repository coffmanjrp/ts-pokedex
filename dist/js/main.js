"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var pokeContainer = document.getElementById('poke-container');
var pokemonCount = 151;
var colors = {
    fire: '#fddfdf',
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
};
var mainTypes = Object.keys(colors);
var createPokemonCard = function (pokemon) {
    var pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    var name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    var id = pokemon.id.toString().padStart(3, '0');
    var pokeTypes = pokemon.types.map(function (type) { return type.type.name; });
    var type = mainTypes.find(function (item) { return pokeTypes.indexOf(item) > -1; });
    var color = type !== undefined ? colors[type] : null;
    var image = pokemon.sprites.other['official-artwork'].front_default;
    pokemonEl.style.backgroundColor = color;
    var pokemonInnerHTML = "\n    <div class=\"img-container\">\n      <img\n        src=" + image + "\n        alt=\"" + name + "\"\n      />\n    </div>\n    <div class=\"info\">\n      <div class=\"number\"># " + id + "</div>\n      <h3 class=\"name\">" + name + "</h3>\n      <small class=\"type\">Type: <span>" + type + "</span></small>\n    </div>\n    ";
    pokemonEl.innerHTML = pokemonInnerHTML;
    pokeContainer === null || pokeContainer === void 0 ? void 0 : pokeContainer.appendChild(pokemonEl);
};
var getPokemon = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var url, res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://pokeapi.co/api/v2/pokemon/" + id;
                return [4 /*yield*/, fetch(url)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                createPokemonCard(data);
                return [2 /*return*/];
        }
    });
}); };
var fetchPokemons = function () { return __awaiter(void 0, void 0, void 0, function () {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 1;
                _a.label = 1;
            case 1:
                if (!(i <= pokemonCount)) return [3 /*break*/, 4];
                return [4 /*yield*/, getPokemon(i)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
fetchPokemons();
