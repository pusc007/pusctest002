const { gql } = require("apollo-server-express");
module.exports = gql`
  scalar Date
  type User {
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
  type Site {
    city: String!
    sitename: String!
    created: Date!
    updated: Date!
  }
  type Opentime {
    date: Date!
    count: Int
    maxcount: Int!
    created: Date!
    updated: Date!
  }
  type Query {
    #取得個人資訊
    user: User!
    #取得可驗車縣市
    citys: [String!]!
    #搜尋驗車站點群
    searchSites(city: String!): [Site!]!
    #搜尋驗車開放時間群
    searchOpentimes(type: String, city: String!, site: String!, startDate: Date!, endDate: Date!): [Opentime!]!
  }
  type Mutation {
    #登入
    login(casenum: String!, carnum: String!): Token!
    #預約驗車
    reservation(city: String!, site: String!, date: Date!): String
    #更改展延日期
    extend(date: Date!): String
  }
`;
