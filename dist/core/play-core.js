"use strict";
/*
 *    Copyright (C) 2021 Mohamed Belkamel
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as published
 *   by the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.play = exports.getTitleYoutube = exports.getRecommended = void 0;
var axios_1 = __importDefault(require("axios"));
var ytdl_core_discord_1 = __importStar(require("ytdl-core-discord"));
// import {} from './get-data-youtube';
var ytsr_1 = __importDefault(require("ytsr"));
var get_spotify_track_1 = require("../utils/get-spotify-track");
var get_token_1 = require("../utils/get-token");
var get_data_youtube_1 = require("./get-data-youtube");
var getRecommended = function (tmpUrl) { return __awaiter(void 0, void 0, void 0, function () {
    var itemId, Link, _a, _b, _c, _d;
    var _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                itemId = tmpUrl.split('/')[4];
                if (itemId.indexOf('?') !== -1) {
                    itemId = itemId.slice(0, itemId.indexOf('?'));
                }
                _b = (_a = axios_1.default)
                    .get;
                _c = ["https://api.spotify.com/v1/recommendations?seed_tracks=" + itemId + "&limit=1"];
                _e = {};
                _f = {};
                _d = "Bearer ";
                return [4 /*yield*/, get_token_1.getAccessToken()];
            case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([(_e.headers = (_f.Authorization = _d + (_g.sent()),
                        _f),
                        _e)]))
                    .then(function (res) {
                    return res.data.tracks[0].external_urls.spotify;
                })];
            case 2:
                Link = _g.sent();
                return [2 /*return*/, {
                        spotifyLink: Link,
                    }];
        }
    });
}); };
exports.getRecommended = getRecommended;
var getTitleYoutube = function (link) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = link;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, ytdl_core_discord_1.getInfo(link).then(function (info) { return info.videoDetails.title; })];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2: return [2 /*return*/, (_a)];
        }
    });
}); };
exports.getTitleYoutube = getTitleYoutube;
function play(connection, queue, id, message, servers, title) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var trackUrl, searchUri, finalTitle, _b, search, title_1, _c, _d, url, title_2, _e, _f, _g, _h, firstUrl_1, _j, search, title_3, _k, url, _l, _m, _o, error_1, _p, search, title_4, _q, url, _r, _s, _t, title_5, _u, _v, _w, qq, tmpQ, spotifyLink, video_url;
        var _this = this;
        return __generator(this, function (_x) {
            switch (_x.label) {
                case 0:
                    if (!servers[id].loop) return [3 /*break*/, 11];
                    trackUrl = servers[id].loop;
                    searchUri = void 0, finalTitle = void 0;
                    if (!trackUrl.startsWith(get_data_youtube_1.SPOTIFY_URI)) return [3 /*break*/, 3];
                    _c = get_spotify_track_1.getSpotifyTrack;
                    return [4 /*yield*/, get_token_1.getAccessToken()];
                case 1: return [4 /*yield*/, _c.apply(void 0, [_x.sent(), trackUrl])];
                case 2:
                    _b = _x.sent(), search = _b.search, title_1 = _b.title;
                    searchUri = search;
                    finalTitle = title_1;
                    _x.label = 3;
                case 3:
                    if (!searchUri) return [3 /*break*/, 5];
                    return [4 /*yield*/, ytsr_1.default(searchUri, { pages: 1, limit: 1 }).then(function (res) { return res.items[0]; })];
                case 4:
                    _e = _x.sent();
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, get_data_youtube_1.getData(trackUrl, message)];
                case 6:
                    _e = _x.sent();
                    _x.label = 7;
                case 7:
                    _d = _e, url = _d.url, title_2 = _d.title;
                    message.react('🔁');
                    message.channel.send("Now playing | " + (finalTitle || title_2));
                    if (!(connection === null || connection === void 0)) return [3 /*break*/, 8];
                    _f = void 0;
                    return [3 /*break*/, 10];
                case 8:
                    _h = (_g = connection).play;
                    return [4 /*yield*/, ytdl_core_discord_1.default(url, {
                            filter: 'audioonly',
                        })];
                case 9:
                    _f = _h.apply(_g, [_x.sent(), {
                            type: 'opus',
                        }]).on('finish', function () {
                        (function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = servers[id];
                                        return [4 /*yield*/, play(connection, queue, id, message, servers)];
                                    case 1:
                                        _a.setDispatcher = (_b.sent());
                                        return [2 /*return*/];
                                }
                            });
                        }); })();
                    });
                    _x.label = 10;
                case 10: return [2 /*return*/, _f];
                case 11:
                    if (!queue.length) return [3 /*break*/, 31];
                    servers[id].setQueue = queue;
                    firstUrl_1 = queue[0];
                    if (!firstUrl_1.startsWith(get_data_youtube_1.SPOTIFY_URI)) return [3 /*break*/, 26];
                    _x.label = 12;
                case 12:
                    _x.trys.push([12, 19, , 26]);
                    _k = get_spotify_track_1.getSpotifyTrack;
                    return [4 /*yield*/, get_token_1.getAccessToken()];
                case 13: return [4 /*yield*/, _k.apply(void 0, [_x.sent(), firstUrl_1])];
                case 14:
                    _j = _x.sent(), search = _j.search, title_3 = _j.title;
                    title_3 && message.react('😳');
                    title_3 && message.channel.send("Now playing | " + title_3);
                    return [4 /*yield*/, ytsr_1.default(search, { pages: 1, limit: 1 })
                            .then(function (__res) { return __res.items[0]; })
                            .catch(function (err) {
                            console.log(err.message);
                            return {
                                url: null,
                            };
                        })];
                case 15:
                    url = (_x.sent()).url;
                    if (!(connection === null || connection === void 0)) return [3 /*break*/, 16];
                    _l = void 0;
                    return [3 /*break*/, 18];
                case 16:
                    _o = (_m = connection).play;
                    return [4 /*yield*/, ytdl_core_discord_1.default(url, {
                            filter: 'audioonly',
                        })];
                case 17:
                    _l = _o.apply(_m, [_x.sent(), {
                            type: 'opus',
                        }]).on('finish', function () {
                        var _a;
                        if ((_a = servers[id]) === null || _a === void 0 ? void 0 : _a.autoplay) {
                            servers[id].setAuto = firstUrl_1;
                        }
                        // queue.shift();
                        var tmpQueue = queue.slice(1);
                        console.log(tmpQueue.length);
                        // tmpQueue.shift();
                        servers[id].setQueue = tmpQueue;
                        (function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = servers[id];
                                        return [4 /*yield*/, play(connection, tmpQueue, id, message, servers, title_3)];
                                    case 1:
                                        _a.setDispatcher = (_b.sent());
                                        return [2 /*return*/];
                                }
                            });
                        }); })();
                    });
                    _x.label = 18;
                case 18: return [2 /*return*/, _l];
                case 19:
                    error_1 = _x.sent();
                    console.log(error_1.message);
                    queue.shift();
                    _q = get_spotify_track_1.getSpotifyTrack;
                    return [4 /*yield*/, get_token_1.getAccessToken()];
                case 20: return [4 /*yield*/, _q.apply(void 0, [_x.sent(), queue[0]])];
                case 21:
                    _p = _x.sent(), search = _p.search, title_4 = _p.title;
                    title_4 && message.react('😳');
                    title_4 && message.channel.send("Now playing | " + title_4);
                    return [4 /*yield*/, ytsr_1.default(search, { pages: 1, limit: 1 })
                            .then(function (__res) { return __res.items[0]; })
                            .catch(function (err) {
                            console.log(error_1.message);
                            return { url: null };
                        })];
                case 22:
                    url = (_x.sent()).url;
                    if (!(connection === null || connection === void 0)) return [3 /*break*/, 23];
                    _r = void 0;
                    return [3 /*break*/, 25];
                case 23:
                    _t = (_s = connection).play;
                    return [4 /*yield*/, ytdl_core_discord_1.default(url, {
                            filter: 'audioonly',
                        })];
                case 24:
                    _r = _t.apply(_s, [_x.sent(), {
                            type: 'opus',
                        }]).on('finish', function () {
                        if (servers[id].autoplay) {
                            servers[id].setAuto = queue[0];
                        }
                        // queue.shift();
                        var x = queue[0], tmpQueue = queue.slice(1);
                        servers[id].setQueue = tmpQueue;
                        (function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = servers[id];
                                        return [4 /*yield*/, play(connection, tmpQueue, id, message, servers, title_4)];
                                    case 1:
                                        _a.setDispatcher = (_b.sent());
                                        return [2 /*return*/];
                                }
                            });
                        }); })();
                    });
                    _x.label = 25;
                case 25: return [2 /*return*/, _r];
                case 26: return [4 /*yield*/, exports.getTitleYoutube(queue[0])];
                case 27:
                    title_5 = _x.sent();
                    title_5 && message.react('😳');
                    title_5 && message.channel.send("Now playing | " + title_5);
                    if (!(connection === null || connection === void 0)) return [3 /*break*/, 28];
                    _u = void 0;
                    return [3 /*break*/, 30];
                case 28:
                    _w = (_v = connection).play;
                    return [4 /*yield*/, ytdl_core_discord_1.default(queue[0], {
                            filter: 'audioonly',
                        })];
                case 29:
                    _u = _w.apply(_v, [_x.sent(), {
                            type: 'opus',
                        }]).on('finish', function () {
                        var firstUrl = queue[0], tmpQueue = queue.slice(1);
                        servers[id].setQueue = tmpQueue;
                        if (servers[id].autoplay) {
                            servers[id].setAuto = firstUrl;
                        }
                        // queue.shift();
                        (function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = servers[id];
                                        return [4 /*yield*/, play(connection, tmpQueue, id, message, servers, title_5)];
                                    case 1:
                                        _a.setDispatcher = (_b.sent());
                                        return [2 /*return*/];
                                }
                            });
                        }); })();
                    });
                    _x.label = 30;
                case 30: return [2 /*return*/, _u];
                case 31:
                    if (!servers[id].autoplay) return [3 /*break*/, 37];
                    qq = servers[id].autoplay;
                    tmpQ = [];
                    if (!qq.startsWith(get_data_youtube_1.SPOTIFY_URI)) return [3 /*break*/, 33];
                    return [4 /*yield*/, exports.getRecommended(qq)];
                case 32:
                    spotifyLink = (_x.sent()).spotifyLink;
                    console.log('Used spotify recommendation');
                    servers[id].setAuto = spotifyLink;
                    tmpQ = queue;
                    tmpQ.push(spotifyLink);
                    return [3 /*break*/, 35];
                case 33: return [4 /*yield*/, ytdl_core_discord_1.getInfo(servers[id].autoplay).then(function (info) { return __awaiter(_this, void 0, void 0, function () {
                        var videoId;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    videoId = info.related_videos[Math.floor(Math.random() * 2)].id;
                                    return [4 /*yield*/, ytdl_core_discord_1.getInfo(videoId).then(function (_info) { return _info.videoDetails; })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
                case 34:
                    video_url = (_x.sent()).video_url;
                    servers[id].setAuto = video_url;
                    tmpQ = queue;
                    tmpQ.push(video_url);
                    _x.label = 35;
                case 35: return [4 /*yield*/, play(connection, tmpQ, id, message, servers)];
                case 36: return [2 /*return*/, (_x.sent())];
                case 37:
                    (_a = servers[id].getConnection) === null || _a === void 0 ? void 0 : _a.disconnect();
                    delete servers[id];
                    return [2 /*return*/, null];
            }
        });
    });
}
exports.play = play;
