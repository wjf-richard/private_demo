/*
 * @Date: 2020-05-20 15:34:11
 * @LastEditors: Richard
 * @LastEditTime: 2020-05-20 15:58:50
 */ 

const reqCpt = require.context('./', false, /\.vue$/);
const install = (Vue) => {
  reqCpt.keys().forEach(name => {
    console.log('name', name);
    const cpt = reqCpt(name)
    const cptName = name.replace(/^\.\//, '').replace(/\.vue$/, '')
    console.log('cptName', cptName);
    // 使用文件的名称 进行全局组件注册
    Vue.component(cptName, cpt.default);
    console.log('component.name, component', cptName, cpt.default);
  })
};
export default { install };

// const contexts = require.context('./globalComponents', true, /\.vue$/);
// const install = (Vue) => {
//   contexts.keys().forEach(component => {
//     // debugger;
//     let componentEntity = contexts(component).default;
//     // 使用内置的组件名称 进行全局组件注册
//     Vue.component(componentEntity.name, componentEntity)
//     console.log('component.name, component', componentEntity.name, componentEntity);
//   })
// };
// export default { install };

// const modules = require.context('./globalComponents', true, /\.vue$/);
// const components = modules.keys().reduce((moduleArr, moduleKey) => {
//   // debugger;
//   moduleArr.push(modules(moduleKey).default);
//   return moduleArr;
// }, []);

// const install = (Vue) => {
//   components.forEach((component) => {
//     // 使用内置的组件名称 进行全局组件注册s
//     Vue.component(component.name, component);
//     console.log('component.name, component', component.name, component);
//   });
// }

// export default {
//   install
// };
