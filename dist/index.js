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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrackInfo = void 0;
const node_fetch_1 = require("node-fetch");
const getTrackInfo = (trackId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://open.spotify.com/embed/track/${trackId}`;
        const resp = yield (0, node_fetch_1.default)(url);
        const text = yield resp.text();
        const match = text.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/s);
        if (match) {
            const jsonString = match[1];
            const jsonParse = JSON.parse(jsonString);
            const jsonData = jsonParse.props.pageProps.state.data;
            const data = Object.assign(Object.assign({}, jsonData.entity), { relatedUri: jsonData.entity.relatedEntityUri, embeded_uri: jsonData.embeded_entity_uri, backgroundColor: jsonData.backgroundColor });
            delete data["embeded_entity_uri"];
            delete data["defaultAudioFileObject"];
            delete data["relatedEntityUri"];
            return data;
        }
        else {
            return undefined;
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
});
exports.getTrackInfo = getTrackInfo;
