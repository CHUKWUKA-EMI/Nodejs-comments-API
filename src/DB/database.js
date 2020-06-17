"use strict";

import Sequelize from "sequelize";
import sequelize from "./connection";

import users from "../models/users";
import comments from "../models/comments";

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = users;
db.comments = comments;

export default db;
