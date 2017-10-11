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
const Switch = resolve => require(['./pages/switch/index'], resolve);
const Card = resolve => require(['./pages/card/index'], resolve);
const Panel = resolve => require(['./pages/panel/index'], resolve);
const Tooltip = resolve => require(['./pages/tooltip/index'], resolve);
const MessageBox = resolve => require(['./pages/messagebox/index'], resolve);
const Dialog = resolve => require(['./pages/dialog/index'], resolve);
const Menu = resolve => require(['./pages/menu/index'], resolve);
const Tree = resolve => require(['./pages/tree/index'], resolve);
const Select = resolve => require(['./pages/select/index'], resolve);
const Table = resolve => require(['./pages/table/index'], resolve);
const Progress = resolve => require(['./pages/progress/index'], resolve);
const Slick = resolve => require(['./pages/slick/index'], resolve);
const Spin = resolve => require(['./pages/spin/index'], resolve);
const Uploadify = resolve => require(['./pages/uploadify/index'], resolve);
const Badge = resolve => require(['./pages/badge/index'], resolve);
const Dropdown = resolve => require(['./pages/dropdown/index'], resolve);
const Accordion = resolve => require(['./pages/accordion/index'], resolve);
const InputNumber = resolve => require(['./pages/inputnumber/index'], resolve);
const Notification = resolve => require(['./pages/notification/index'], resolve);
const PageList = resolve => require(['./pages/pagelist/index'], resolve);
const SimpleForm = resolve => require(['./pages/simpleform/index'], resolve);
const TableForm = resolve => require(['./pages/tableform/index'], resolve);

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
        {path: 'Switch', getComponent: (next, cb)=>{Switch((a)=>{cb(null, a.default);});}},
        {path: 'Card', getComponent: (next, cb)=>{Card((a)=>{cb(null, a.default);});}},
        {path: 'Panel', getComponent: (next, cb)=>{Panel((a)=>{cb(null, a.default);});}},
        {path: 'Tooltip', getComponent: (next, cb)=>{Tooltip((a)=>{cb(null, a.default);});}},
        {path: 'MessageBox', getComponent: (next, cb)=>{MessageBox((a)=>{cb(null, a.default);});}},
        {path: 'Dialog', getComponent: (next, cb)=>{Dialog((a)=>{cb(null, a.default);});}},
        {path: 'Menu', getComponent: (next, cb)=>{Menu((a)=>{cb(null, a.default);});}},
        {path: 'Tree', getComponent: (next, cb)=>{Tree((a)=>{cb(null, a.default);});}},
        {path: 'Select', getComponent: (next, cb)=>{Select((a)=>{cb(null, a.default);});}},
        {path: 'Table', getComponent: (next, cb)=>{Table((a)=>{cb(null, a.default);});}},
        {path: 'Progress', getComponent: (next, cb)=>{Progress((a)=>{cb(null, a.default);});}},
        {path: 'Slick', getComponent: (next, cb)=>{Slick((a)=>{cb(null, a.default);});}},
        {path: 'Spin', getComponent: (next, cb)=>{Spin((a)=>{cb(null, a.default);});}},
        {path: 'Uploadify', getComponent: (next, cb)=>{Uploadify((a)=>{cb(null, a.default);});}},
        {path: 'Badge', getComponent: (next, cb)=>{Badge((a)=>{cb(null, a.default);});}},
        {path: 'Dropdown', getComponent: (next, cb)=>{Dropdown((a)=>{cb(null, a.default);});}},
        {path: 'Accordion', getComponent: (next, cb)=>{Accordion((a)=>{cb(null, a.default);});}},
        {path: 'InputNumber', getComponent: (next, cb)=>{InputNumber((a)=>{cb(null, a.default);});}},
        {path: 'Notification', getComponent: (next, cb)=>{Notification((a)=>{cb(null, a.default);});}},
        {path: 'PageList', getComponent: (next, cb)=>{PageList((a)=>{cb(null, a.default);});}},
        {path: 'SimpleForm', getComponent: (next, cb)=>{SimpleForm((a)=>{cb(null, a.default);});}},
        {path: 'TableForm', getComponent: (next, cb)=>{TableForm((a)=>{cb(null, a.default);});}},
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
