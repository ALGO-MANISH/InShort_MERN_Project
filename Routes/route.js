import express from "express";
import { getNews } from "../controller/get_news_controller.js";

const route = express.Router();
route.get('/news', getNews);

export default route;