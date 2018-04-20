import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import backStage from '@/components/backstage'
import mainbody from '@/components/mainbody'
import total from '@/components/total'
import equipment from '@/components/equipment'
import dictionary from '@/components/dictionary'
import organization from '@/components/organization'
import permission from '@/components/permission'
import record from '@/components/record'
import province from '@/components/province_total'
import city from '@/components/city_total'
import area from '@/components/area_total'
import manufacturer from '@/components/manufacturer_total'
import type from '@/components/type_total'
import equip from '@/components/equip'
import hospital from '@/components/hospital'
import dictionaryinfo from '@/components/dictionaryinfo'
import hospitaldetail from '@/components/hospitaldetail'
import singleequipdetail from '@/components/singleEquipInfo'


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/backStage',
      name: 'backStage',
      component: backStage,
      children: [{
          path: '',
          name: '',
          component: mainbody,
          props: true,
        },
        {
          path: 'total',
          name: total,
          component: total,
          children: [{
              path: 'province',
              name: 'province',
              component: province
            },
            {
              path: 'city',
              name: 'city',
              component: city
            },
            {
              path: 'area',
              name: 'area',
              component: area
            },
            {
              path: 'manufacturer',
              name: 'manufacturer',
              component: manufacturer
            },
            {
              path: 'type',
              name: 'type',
              component: type
            },
          ]
        },
        {
          path: 'organization',
          name: 'organization',
          component: organization,
          children: [{
            path: 'equip',
            name: 'equip',
            component: equip
          }]
        },
        {
          path: 'equipment',
          name: 'equipment',
          component: equipment,
          children: [{
              //city (string, optional): 市编码 ,
              //classification (string, optional): 单位类别 ,
              //district (string, optional): 区编码 ,
              //economicTypeCode (string, optional): 经济类型 ,
              //end (string, optional): 校验日期-结束，格式：yyyy-MM-dd ,
              //instId (integer, optional): 机构ID ,
              //instName (string, optional): 机构名称 ,
              //page (integer, optional): 页码 ,
              //province (string, optional): 省编码 ,
              //size (integer, optional): 每页大小 ,
              //start (string, optional): 校验日期-开始，格式：yyyy-MM-dd
              path: 'hospital/:city/:district/:classification/:economicTypeCode/:instId/:instName/:page/:size',
              name: 'hospital',
              component: hospital

            }, {
              path: 'hospitaldetail',
              name: 'hospitaldetail',
              component: hospitaldetail,

            },
            {
              path: 'singleequipdetail',
              name: 'singleequipdetail',
              component: singleequipdetail
            }
          ]
        },
        {
          path: 'dictionary',
          name: 'dictionary',
          component: dictionary,
          children: [{
            path: 'dictionaryinfo',
            name: 'dictionaryinfo',
            component: dictionaryinfo
          }]
        },
        {
          path: 'permission',
          name: 'permission',
          component: permission
        },
        {
          path: 'record',
          name: 'record',
          component: record
        }
      ]
    },
    {
      redirect: '/',
      path: '/*',
      component: Login
    },
  ]
})
