import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const totalCount = 5701

const serverList = options => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: '測試用例描述-' + tmpKey,
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}

const projects = () => {
  return builder({
    data: [
      {
        id: 1,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        title: 'VIP2.0 Web',
        description: 'VIP2.0 Web for e2e test',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 2,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
        title: 'VIP3.0 Web',
        description: 'VIP3.0 Web for e2e test',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 3,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
        title: 'VIP3.0 API',
        description: 'VIP3.0 API for e2e test',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 4,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
        title: 'VIP3.0 APP',
        description: 'VIP3.0 APP for e2e test',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      },
      {
        id: 5,
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
        title: 'VIP3.0 API Monitor',
        description: 'VIP3.0 API Monitor for e2e test',
        status: 1,
        updatedAt: '2018-07-26 00:00:00'
      }
    ],
    pageSize: 10,
    pageNo: 0,
    totalPage: 5,
    totalCount: 57
  })
}

const activity = () => {
  return builder([
    {
      id: 1,
      user: {
        nickname: 'ice',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
      },
      project: {
        name: 'VIP3.0 Web',
        action: '進行',
        event: '測試'
      },
      time: '2018-08-23 14:47:00'
    },
    {
      id: 1,
      user: {
        nickname: 'jack',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
      },
      project: {
        name: 'VIP3.0 API',
        action: '更新',
        event: '測試用例'
      },
      time: '2018-08-23 09:35:37'
    },
    {
      id: 1,
      user: {
        nickname: 'ice',
        avatar: '@image(64x64)'
      },
      project: {
        name: 'VIP3.0 Web',
        action: '創建',
        event: '測試用例'
      },
      time: '2017-05-27 00:00:00'
    },
    {
      id: 1,
      user: {
        nickname: 'kiwi',
        avatar: '@image(64x64)'
      },
      project: {
        name: 'VIP3.0 API Monitor',
        action: '更新',
        event: 'Cron Job 設定'
      },
      time: '2018-08-23 14:47:00'
    },
    {
      id: 1,
      user: {
        nickname: 'tod',
        avatar: '@image(64x64)'
      },
      project: {
        name: 'VIP3.0 APP',
        action: '刪除',
        event: '測試用例'
      },
      time: '2018-08-23 14:47:00'
    },
    {
      id: 1,
      user: {
        nickname: 'hank',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
      },
      project: {
        name: 'VIP2.0 Web',
        action: '刪除',
        event: '測試'
      },
      time: '2018-08-23 14:47:00'
    }
  ])
}

const teams = () => {
  return builder([
    {
      id: 1,
      name: '測試團隊',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    {
      id: 2,
      name: '開發團隊',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
    },
    {
      id: 1,
      name: '維運團隊',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
    },
    {
      id: 1,
      name: '資安團隊',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
    },
    {
      id: 1,
      name: 'XX團隊',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
    }
  ])
}

const radar = () => {
  return builder([
    {
      item: '引用',
      个人: 70,
      团队: 30,
      部门: 40
    },
    {
      item: '口碑',
      个人: 60,
      团队: 70,
      部门: 40
    },
    {
      item: '产量',
      个人: 50,
      团队: 60,
      部门: 40
    },
    {
      item: '贡献',
      个人: 40,
      团队: 50,
      部门: 40
    },
    {
      item: '热度',
      个人: 60,
      团队: 70,
      部门: 40
    },
    {
      item: '引用',
      个人: 70,
      团队: 50,
      部门: 40
    }
  ])
}

Mock.mock(/\/service/, 'get', serverList)
Mock.mock(/\/list\/search\/projects/, 'get', projects)
Mock.mock(/\/workplace\/activity/, 'get', activity)
Mock.mock(/\/workplace\/teams/, 'get', teams)
Mock.mock(/\/workplace\/radar/, 'get', radar)
