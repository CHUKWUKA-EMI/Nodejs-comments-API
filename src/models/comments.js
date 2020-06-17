import Sequelize from "sequelize";
import sequelize from "../DB/connection";

export default sequelize.define(
  "Comments",
  {
    comment_id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    body: {
      type: Sequelize.TEXT,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    replies: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      defaultValue: "{}",
      allowNull: true,
    },
  },
  { timestamps: false }
);
