import App from './app';
// import menu from './menu';

// let page = './pages/';

const Radio = resolve => require(['./pages/radio/index'], resolve);
const Icon = resolve => require(['./pages/icon/index'], resolve);
const Grid = resolve => require(['./pages/grid/index'], resolve);
const Layout = resolve => require(['./pages/layout/index'], resolve);
const Breadcrumb = resolve => require(['./pages/breadcrumb/index'], resolve);
const DateTime = resolve => require(['./pages/datetime/index'], resolve);
const DateRange = resolve => require(['./pages/daterange/index'], resolve);
const Pagination = resolve => require(['./pages/pagination/index'], resolve);
const Input = resolve => require(['./pages/input/index'], resolve);
const Form = resolve => require(['./pages/form/index'], resolve);
const Steps = resolve => require(['./pages/steps/index'], resolve);

let routers = {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: 'Button',
            getComponent: (next, cb)=>{
                require.ensure([], require => {
                    cb(null, require('./pages/button/index').default);
                });
            }
        },
        {
            path: 'CheckBox',
            getComponent: (next, cb)=>{
                require.ensure([], require => {
                    cb(null, require('./pages/checkbox/index').default);
                });
            }
        },
        {
            path: 'Radio',
            getComponent: (next, cb)=>{
                Radio((a)=>{
                    cb(null, a.default);
                });
            }
        },
        {path: 'Icon', getComponent: (next, cb)=>{Icon((a)=>{cb(null, a.default);});}},
        {path: 'Grid', getComponent: (next, cb)=>{Grid((a)=>{cb(null, a.default);});}},
        {path: 'Layout', getComponent: (next, cb)=>{Layout((a)=>{cb(null, a.default);});}},
        {path: 'Breadcrumb', getComponent: (next, cb)=>{Breadcrumb((a)=>{cb(null, a.default);});}},
        {path: 'DateTime', getComponent: (next, cb)=>{DateTime((a)=>{cb(null, a.default);});}},
        {path: 'DateRange', getComponent: (next, cb)=>{DateRange((a)=>{cb(null, a.default);});}},
        {path: 'Pagination', getComponent: (next, cb)=>{Pagination((a)=>{cb(null, a.default);});}},
        {path: 'Input', getComponent: (next, cb)=>{Input((a)=>{cb(null, a.default);});}},
        {path: 'Form', getComponent: (next, cb)=>{Form((a)=>{cb(null, a.default);});}},
        {path: 'Steps', getComponent: (next, cb)=>{Steps((a)=>{cb(null, a.default);});}},
    ]
};

// let links = [];
// getLinks(menu.data);
// function getLinks(items){
//     items.forEach((item)=>{
//         if(item.comp){
//             links.push({
//                 path: item.link,
//                 comp: item.comp
//             });
//         }

//         if(item.children){
//             getLinks(item.children);
//         }
//     });
// }

// // buildRoutes(routers, links);

// function buildRoutes(r, items){
//     r.childRoutes = items.map((item)=>{
//         return buildRoute(item);
//     });
// }

// function buildRoute(item){
//     let r = {
//         path: item.path,
//         getComponent: (nextState, cb)=>{
//             require.ensure([], require=>{
//                 cb(null, require('./pages/'+item.comp).default)
//             });
//         }
//     };
//     return r;
// }

export default routers;
