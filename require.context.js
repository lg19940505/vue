import Vue from 'Vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent=require.context(
    //其组件目录的相对路径
    './components',
    //是否查询其子目录
    false,
    //匹配基础组件文件名的正则表达式
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName=>{
    //获取组件配置
    const componentConfig=requireComponent(fileName);
    //获取组件的PascalCase命名
    const componentName=upperFirst(
        camelCase(
            //获取和目录深度无关的文件名
            fileName.split('/').pop().replace(/\.\w+$/,'')
        )
    )
    Console.log(componentName) ;
    //全局注册组件
    Vue.component(
        componentName,
        componentConfig.defaule||componentConfig
    )
})