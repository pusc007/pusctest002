const { gql } = require("apollo-server-express");
module.exports = gql`
  scalar Upload
  scalar Date
  input UserInput {
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
    postponedProve: Upload
    displayPages: String
  }
  input UserInput0 {
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
  }
  input EditUserInput {
    casenum: String
    carnum: String
    username: String
    idcard: String
    address: String
    redateBoundS: Date
    redateBoundE: Date
    exdateBoundS: Date
    exdateBoundE: Date
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
    postponedProve: Upload
    displayPages: String
  }
  type User {
    id: ID!
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

  input SiteInput {
    sitename: String!
    address: String!
  }
  input EditSiteInput {
    sitename: String
    address: String
  }
  type Site {
    id: ID!
    sitename: String!
    address: String!
    created: Date!
    updated: Date!
  }

  input OpentimeInput {
    site: String!
    dateS: Date!
    dateE: Date!
    maxcount: Int = 20
  }
  input EditOpentimeInput {
    dateS: Date
    dateE: Date
    maxcount: Int
  }
  type Opentime {
    id: ID!
    siteId: ID!
    dateS: Date!
    dateE: Date!
    maxcount: Int!
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
    sites: [Site!]!

    #搜尋驗車開放時間群
    searchOpentimes(site: String!, startDate: Date!, endDate: Date!): [Opentime!]!

    #驗證token
    verificationToken: Boolean

    #下載圖片
    download(fileSrc: String!): String
  }
  type Mutation {
    #密碼加密
    passwordEncrypt(password: String!): String!
    #登入
    login(account: String!, password: String!): Token!
    #建立驗車使用者
    createUser(input: UserInput!): String
    #匯入驗車使用者群
    importUsers(input: [UserInput0!]!): String
    #編輯驗車使用者
    editUser(id: String!, input: EditUserInput!): String
    #刪除驗車使用者
    deleteUser(id: String!): String
    #刪除驗車使用者群
    deleteUsers(id: [String!]!): String

    #建立驗車站點
    createSite(input: SiteInput!): String
    #匯入驗車站點群
    importSites(input: [SiteInput!]!): String
    #編輯驗車站點
    editSite(id: String!, input: EditSiteInput!): String
    #刪除驗車站點
    deleteSite(id: String!): String

    #建立驗車開放時間
    createOpentime(input: OpentimeInput!): String
    #建立驗車開放時間群
    createOpentimes(input: [OpentimeInput!]!): String
    #編輯驗車開放時間
    editOpentime(id: String!, input: EditOpentimeInput!): String
    #刪除驗車開放時間
    deleteOpentime(id: String!): String
    #刪除驗車開放時間群
    deleteOpentimes(id: [String!]!): String
  }
`;
