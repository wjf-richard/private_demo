<!--
 * @Date: 2020-05-20 15:35:46
 * @LastEditors: Richard
 * @LastEditTime: 2020-05-20 16:55:37
-->

### 组件解耦

#### 方法一

```
  const contexts = require.context('./', false, /\.vue$/);
  const install = (Vue) => {
    contexts.keys().forEach(component => {
      // debugger;
      let componentEntity = contexts(component).default;
      // 使用内置的组件名称 进行全局组件注册
      Vue.component(componentEntity.name, componentEntity)
    })
  };
  export default { install };
```

```
  const modules = require.context('./globalComponents', true, /\.vue$/);
  const components = modules.keys().reduce((moduleArr, moduleKey) => {
    // debugger;
    moduleArr.push(modules(moduleKey).default);
    return moduleArr;
  }, []);

  const install = (Vue) => {
    components.forEach((component) => {
      // 使用内置的组件名称 进行全局组件注册s
      Vue.component(component.name, component);
    });
  }

  export default { install };
```

上述代码中写的是一个全局注册的组件，用到了 keys 属性，返回一个数组，通过遍历，来完成组件注册，contexts 方法，内部就是返回引用 webpack_require 来加载模块，
使用 componentEntity.name，来作为组件名

#### 方法二、改良版（文件名命名组件名，和组件内 default.name 解耦）

```
// autoLoadCpt.js
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

// main.js
import autoLoadCpt from "./components/autoLoadCpt";
Vue.use(autoLoadCpt)

```

#### 最后

在 main.js 中引入 index.js，改目录下的组件就全部被全局注册，可以在容易 vue 中使用这些组件！
