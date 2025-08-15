"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const topic_route_1 = __importDefault(require("./topic.route"));
const song_route_1 = require("./song.route");
const favorite_song_route_1 = require("./favorite-song.route");
const search_route_1 = require("./search.route");
const clientRoutes = (app) => {
    app.use("/topics", topic_route_1.default);
    app.use("/songs", song_route_1.songRoutes);
    app.use("/favorite-songs", favorite_song_route_1.favoriteSong);
    app.use("/search", search_route_1.searchRoute);
};
exports.default = clientRoutes;
