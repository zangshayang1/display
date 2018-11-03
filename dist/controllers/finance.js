"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpm = __importStar(require("typed-rest-client/HttpClient"));
/**
 * GET /finance
 *
 */
exports.stock = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=demo";
    const _http = new httpm.HttpClient("stock");
    const result = yield _http.get(url);
    const body = yield result.readBody();
    // const obj: any = JSON.parse(body);
    res.render("stock", {
        pass: {
            data: 1,
            title: "title",
            result: body,
        }
    });
});
//# sourceMappingURL=finance.js.map