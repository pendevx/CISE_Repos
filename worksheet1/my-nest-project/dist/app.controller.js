"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const ARTICLES = [
    {
        _id: "1",
        title: "An experimental evaluation of test driven development vs. test-last development with industry professionals",
        authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
        source: "EASE",
        pubyear: "2014",
        doi: "https://doi.org/10.1145/2601248.2601267",
        claim_evidence: [["code improvement", "strong support"], ["product improvement", "weak against"], ["team improvement", "none"]],
    },
    {
        _id: "2",
        title: "Realizing quality improvement through test driven development: results and experiences of four industrial teams",
        authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
        source: " Empirical Software Engineering, 13(3), 289–302",
        pubyear: "2008",
        doi: "https://doi.org/10.1007/s10664-008-9062-z",
        claim_evidence: [["code improvement", "weak support"], ["product improvement", "weak against"], ["team improvement", "low support"]],
    },
    {
        _id: "3",
        title: "Does Test-Driven Development Really Improve Software Design Quality?",
        authors: "Janzen, D. S.",
        source: "Software, IEEE, 25(2) 77-84",
        pubyear: "2008",
        doi: "",
        claim_evidence: [["code improvement", "strong support"], ["product improvement", "weak support"], ["team improvement", "none"]],
    },
    {
        _id: "4",
        title: "A Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage",
        authors: "Siniaalto, M., Abrahamsson, P.",
        source: "ArXiv.Org, cs.SE, arXiv:1711.05082-284",
        pubyear: "2017",
        doi: "https://doi.org/10.1109/esem.2007.35",
        claim_evidence: [["code improvement", "weak support"], ["product improvement", "weak support"], ["team improvement", "none"]],
    },
];
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    get() {
        return ARTICLES;
    }
    getById(id) {
        return ARTICLES.find((article) => article._id === id.toString());
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getById", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)("api/articles/"),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map