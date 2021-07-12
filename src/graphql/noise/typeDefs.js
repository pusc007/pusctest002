const { gql } = require("apollo-server-express");
module.exports = gql`
  scalar Upload
  scalar Date
  type User {
    casenum: String!
    carnum: String!
    username: String!
    idcard: String!
    address: String!
    reDateBoundS: Date!
    reDateBoundE: Date!
    exDateBoundS: Date!
    exDateBoundE: Date!
    reDateS: Date
    reDateE: Date
    exDateS: Date
    exDateE: Date
    city: String
    reSite: String
    exSite: String
    result: String
    contactName: String
    contactPhone: String
    contactEmail: String
    postponedReason: String
    postponedYM: String
    postponedProve: String
    displayPages: String
    exReason: String
    exRequestStatus: String
    cityReason: String
    cityRequestStatus: String
    postponedRequestStatus: String
    created: Date!
    updated: Date!
  }
  type Token {
    token: String!
  }
  type Site {
    sitename: String!
    address: String!
    created: Date!
    updated: Date!
  }
  type Opentime {
    siteId: ID!
    dateS: Date!
    dateE: Date!
    maxcount: Int!
    count: Int
    created: Date!
    updated: Date!
  }
  type Query {
    #取得個人資訊
    user: User!
    #搜尋驗車站點群
    sites: [Site!]!
    #搜尋驗車開放時間群
    searchOneDateOpentimes(type: String!, site: String!, date: Date!): [Opentime!]!
    #搜尋驗車開放時間群
    searchOpentimes(type: String!, site: String!, dateS: Date!, dateE: Date!): [Opentime!]!
    #驗證token
    verificationToken: Boolean
    #下載圖片
    postponedProveDownload: String
  }
  type Mutation {
    #登入
    login(casenum: String!, carnum: String!): Token!
    #預約驗車
    reservation(reSite: String!, reDateS: Date!, reDateE: Date!): String
    #展延驗車
    extension(exSite: String!, exDateS: Date!, exDateE: Date!, exReason: String!): String
    #移轉縣市
    transfer(city: String!, cityReason: String!): String
    #其他展延
    otherExtension(postponedReason: String!, postponedYM: String!, postponedProve: Upload!): String
    #編輯聯絡資訊
    editContact(contactName: String!, contactPhone: String!, contactEmail: String!): String
  }
`;
