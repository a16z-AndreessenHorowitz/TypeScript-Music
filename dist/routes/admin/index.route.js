"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const dashboard_route_1 = require("./dashboard.route");
const system_1 = require("../../config/system");
const topic_route_1 = require("./topic.route");
const song_route_1 = require("./song.route");
const upload_route_1 = require("./upload.route");
const adminRoutes = (app) => {
    const PATH_ADMIN = `${system_1.systemConfig.prefixAdmin}`;
    app.use(`${PATH_ADMIN}/dashboard`, dashboard_route_1.DashBoardRoute);
    app.use(`${PATH_ADMIN}/topics`, topic_route_1.TopicRoutes);
    app.use(`${PATH_ADMIN}/songs`, song_route_1.SongRoutes);
    app.use(`${PATH_ADMIN}/upload`, upload_route_1.UploadRoutes);
};
exports.adminRoutes = adminRoutes;
