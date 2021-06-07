const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const AdminSchema = new Schema(
  { account: String, password: String, name: String },
  { timestamps: { createdAt: "created", updatedAt: "updated" } }
);
const Admin = Mongoose.model("admins", AdminSchema);
//const list = [];
const UserSchema = new Schema(
  {
    casenum: {
      type: String,
      /*lowercase: true,*/
      /*required: true,
      unique: true,*/
      /*validate: {
        isAsync: false,
        validator: async function (value) {
          const user = await this.constructor.findOne({ casenum: value });
          if (user) {
            if (this.id === user.id) {
              return true;
            }
            return false;
          }
          return true;
        },
        message: (props) => JSON.stringify({ type: "casenumExisted", text: "公文號已存在" }),
      },*/
    },
    carnum: String,
    username: String,
    idcard: String,
    address: String,
    redate: Date,
    exdate: Date,
    city: String,
    site: String,
    result: String,
  },
  { timestamps: { createdAt: "created", updatedAt: "updated" } }
);
UserSchema.index(
  {
    casenum: 1,
  },
  { unique: true }
);
const User = Mongoose.model("users", UserSchema);

const SiteSchema = new Schema(
  { city: String, sitename: String },
  { timestamps: { createdAt: "created", updatedAt: "updated" } }
);
SiteSchema.index(
  {
    city: 1,
    sitename: 1,
  },
  { unique: true }
);
const Site = Mongoose.model("sites", SiteSchema);

const OpentimeSchema = new Schema(
  { siteId: { type: Schema.Types.ObjectId, ref: "sites" }, date: Date, maxcount: Number },
  { timestamps: { createdAt: "created", updatedAt: "updated" } }
);
OpentimeSchema.index(
  {
    siteId: 1,
    date: 1,
  },
  { unique: true }
);
const Opentime = Mongoose.model("opentimes", OpentimeSchema);

module.exports = { Admin, User, Site, Opentime };
