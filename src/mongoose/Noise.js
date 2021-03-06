const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const AdminSchema = new Schema(
  { account: Schema.Types.String, password: Schema.Types.String, name: Schema.Types.String },
  { timestamps: { createdAt: "created", updatedAt: "updated" } }
);
const Admin = Mongoose.model("admins", AdminSchema);
//const list = [];
const UserSchema = new Schema(
  {
    casenum: {
      type: Schema.Types.String,
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
    carnum: Schema.Types.String,
    username: Schema.Types.String,
    idcard: Schema.Types.String,
    address: Schema.Types.String,
    reDateBoundS: Schema.Types.Date,
    reDateBoundE: Schema.Types.Date,
    exDateBoundS: Schema.Types.Date,
    exDateBoundE: Schema.Types.Date,
    reDateS: Schema.Types.Date,
    reDateE: Schema.Types.Date,
    exDateS: Schema.Types.Date,
    exDateE: Schema.Types.Date,
    city: Schema.Types.String,
    reSite: Schema.Types.String,
    exSite: Schema.Types.String,
    result: Schema.Types.String,
    contactName: Schema.Types.String,
    contactPhone: Schema.Types.String,
    contactEmail: Schema.Types.String,
    postponedReason: Schema.Types.String,
    postponedYM: Schema.Types.String,
    postponedProve: Schema.Types.String,
    displayPages: Schema.Types.String,
    exReason: Schema.Types.String,
    exRequestStatus: Schema.Types.String,
    cityReason: Schema.Types.String,
    cityRequestStatus: Schema.Types.String,
    postponedRequestStatus: Schema.Types.String,
  },
  { timestamps: { createdAt: "created", updatedAt: "updated" } }
);
UserSchema.index(
  {
    casenum: 1,
    carnum: 1,
  },
  { unique: true }
);
const User = Mongoose.model("users", UserSchema);

const SiteSchema = new Schema(
  { sitename: Schema.Types.String, address: Schema.Types.String },
  { timestamps: { createdAt: "created", updatedAt: "updated" } }
);
SiteSchema.index(
  {
    sitename: 1,
  },
  { unique: true }
);
const Site = Mongoose.model("sites", SiteSchema);

const OpentimeSchema = new Schema(
  {
    siteId: { type: Schema.Types.ObjectId, ref: "sites" },
    dateS: Schema.Types.Date,
    dateE: Schema.Types.Date,
    maxcount: Schema.Types.Number,
  },
  { timestamps: { createdAt: "created", updatedAt: "updated" } }
);
OpentimeSchema.index(
  {
    siteId: 1,
    dateS: 1,
    dateE: 1,
  },
  { unique: true }
);
const Opentime = Mongoose.model("opentimes", OpentimeSchema);

module.exports = { Admin, User, Site, Opentime };
