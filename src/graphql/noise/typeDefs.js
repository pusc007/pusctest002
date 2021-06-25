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
    redateBoundS: Date!
    redateBoundE: Date!
    exdateBoundS: Date!
    exdateBoundE: Date!
    redateS: Date
    redateE: Date
    exdateS: Date
    exdateE: Date
    city: String
    resite: String
    exsite: String
    result: String
    contactName: String
    contactPhone: String
    contactEmail: String
    postponedContent: String
    postponedYM: String
    postponedProve: String
    displayPages: String
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
    reservation(site: String!, dateS: Date!, dateE: Date!): String
    #展延驗車
    extension(site: String!, dateS: Date!, dateE: Date!): String
    #移轉縣市
    transfer(city: String!): String
    #其他展延
    otherExtension(postponedContent: String!, postponedYM: String!, postponedProve: Upload!): String
    #編輯聯絡資訊
    editContact(contactName: String!, contactPhone: String!, contactEmail: String!): String
  }
`;
