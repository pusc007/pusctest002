const { gql } = require("apollo-server-express");
module.exports = gql`
  scalar Date
  input UserInput {
    casenum: String!
    carnum: String!
    username: String!
    idcard: String!
    address: String!
    redate: Date = null
    exdate: Date = null
    city: String = ""
    site: String = ""
    result: String = ""
  }
  input EditUserInput {
    casenum: String
    carnum: String
    username: String
    idcard: String
    address: String
    redate: Date
    exdate: Date
    city: String
    site: String
    result: String
  }
  type User {
    id: ID!
    casenum: String!
    carnum: String!
    username: String!
    idcard: String!
    address: String!
    redate: Date
    exdate: Date
    city: String
    site: String
    result: String
    created: Date!
    updated: Date!
  }
  type Token {
    token: String!
  }

  input OpentimeInput {
    city: String!
    site: String!
    date: Date!
    maxcount: Int = 20
  }
  input EditOpentimeInput {
    date: Date
    maxcount: Int
  }
  type Opentime {
    id: ID!
    siteId: ID!
    date: Date!
    maxcount: Int!
    created: Date!
    updated: Date!
  }

  input SiteInput {
    city: String!
    sitename: String!
  }
  input EditSiteInput {
    sitename: String
  }
  type Site {
    id: ID!
    city: String!
    sitename: String!
    created: Date!
    updated: Date!
  }

  type Query {
    #取得驗車使用者群
    users: [User!]!
    #取得驗車使用者
    user(id: String!): User!
    #搜尋驗車使用者
    searchUser(casenum: String!, carnum: String!): User!
    #搜尋驗車使用者群
    searchUsers(startDate: Date!, endDate: Date!, state: String!): [User!]!

    #搜尋驗車站點群
    searchSites(city: String!): [Site!]!
    #取得可驗車縣市
    citys: [String!]!

    #搜尋驗車開放時間
    searchOpentime(city: String!, site: String!, date: Date!): Opentime!
    #搜尋驗車開放時間群
    searchOpentimes(city: String!, site: String!, startDate: Date!, endDate: Date!): [Opentime!]!

    #驗證token
    verificationToken: Boolean
  }
  type Mutation {
    #密碼加密
    passwordEncrypt(password: String!): String!
    #登入
    login(account: String!, password: String!): Token!
    #建立驗車使用者
    createUser(input: UserInput!): String
    #匯入驗車使用者群
    importUsers(input: [UserInput!]!): String
    #編輯驗車使用者
    editUser(id: String!, input: EditUserInput!): String
    #刪除驗車使用者
    deleteUser(id: String!): String
    #刪除驗車使用者群
    deleteUsers(id: [String!]!): String

    #建立驗車站點
    createSite(input: SiteInput!): String
    #編輯驗車站點
    editSite(id: String!, input: EditSiteInput!): String
    #刪除驗車站點
    deleteSite(id: String!): String

    #建立驗車開放時間
    createOpentime(input: OpentimeInput!): String
    #編輯驗車開放時間
    editOpentime(id: String!, input: EditOpentimeInput!): String
    #刪除驗車開放時間
    deleteOpentime(id: String!): String
  }
`;
