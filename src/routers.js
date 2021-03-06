import App from './app';
// import menu from './menu';

// let page = './pages/';

const Radio = resolve => require(['./pages/radio/index'], resolve);
const Icon = resolve => require(['./pages/icon/index'], resolve);
const Grids = resolve => require(['./pages/grids/index'], resolve);
const Layout = resolve => require(['./pages/layout/index'], resolve);
const Breadcrumb = resolve => require(['./pages/breadcrumb/index'], resolve);
const DateTime = resolve => require(['./pages/datetime/index'], resolve);
const DateRange = resolve => require(['./pages/daterange/index'], resolve);
const ScrollDateTime = resolve => require(['./pages/scrolldatetime/index'], resolve);
const ScrollRangeDateTime = resolve => require(['./pages/scrollrangedatetime/index'], resolve);
const Pagination = resolve => require(['./pages/pagination/index'], resolve);
const Input = resolve => require(['./pages/input/index'], resolve);
const InputGroup = resolve => require(['./pages/inputGroup/index'], resolve);
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
// const SimpleForm = resolve => require(['./pages/simpleform/index'], resolve);
const TableForm = resolve => require(['./pages/tableform/index'], resolve);
const Tab = resolve => require(['./pages/tab/index'], resolve);
const Slider = resolve => require(['./pages/slider/index'], resolve);
const Transfer = resolve => require(['./pages/transfer/index'], resolve);
const Avatar = resolve => require(['./pages/avatar/index'], resolve);
const List = resolve => require(['./pages/list/index'], resolve);
const Tag = resolve => require(['./pages/tag/index'], resolve);
const Grid = resolve => require(['./pages/grid/index'], resolve);
const Contacts = resolve => require(['./pages/contacts/index'], resolve);
const ContextMenu = resolve => require(['./pages/contextmenu/index'], resolve);
const ConfirmButton = resolve => require(['./pages/confirmButton/index'], resolve);
const SubmitButton = resolve => require(['./pages/submitButton/index'], resolve);

const routers = {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: 'Button',
            getComponent: (next, cb) => {
                require.ensure([], require => {
                    cb(null, require('./pages/button/index').default);
                });
            }
        },
        {
            path: 'CheckBox',
            getComponent: (next, cb) => {
                require.ensure([], require => {
                    cb(null, require('./pages/checkbox/index').default);
                });
            }
        },
        {
            path: 'Radio',
            getComponent: (next, cb) => {
                Radio((a) => {
                    cb(null, a.default);
                });
            }
        },
        {path: 'Icon', getComponent: (next, cb) => { Icon((a) => { cb(null, a.default); }); }},
        {path: 'Grids', getComponent: (next, cb) => { Grids((a) => { cb(null, a.default); }); }},
        {path: 'Layout', getComponent: (next, cb) => { Layout((a) => { cb(null, a.default); }); }},
        {path: 'Breadcrumb', getComponent: (next, cb) => { Breadcrumb((a) => { cb(null, a.default); }); }},
        {path: 'DateTime', getComponent: (next, cb) => { DateTime((a) => { cb(null, a.default); }); }},
        {path: 'DateRange', getComponent: (next, cb) => { DateRange((a) => { cb(null, a.default); }); }},
        {path: 'ScrollDateTime', getComponent: (next, cb) => { ScrollDateTime((a) => { cb(null, a.default); }); }},
        {path: 'ScrollRangeDateTime', getComponent: (next, cb) => { ScrollRangeDateTime((a) => { cb(null, a.default); }); }},
        {path: 'Pagination', getComponent: (next, cb) => { Pagination((a) => { cb(null, a.default); }); }},
        {path: 'Input', getComponent: (next, cb) => { Input((a) => { cb(null, a.default); }); }},
        {path: 'InputGroup', getComponent: (next, cb) => { InputGroup((a) => { cb(null, a.default); }); }},
        {path: 'Form', getComponent: (next, cb) => { Form((a) => { cb(null, a.default); }); }},
        {path: 'Steps', getComponent: (next, cb) => { Steps((a) => { cb(null, a.default); }); }},
        {path: 'Switch', getComponent: (next, cb) => { Switch((a) => { cb(null, a.default); }); }},
        {path: 'Card', getComponent: (next, cb) => { Card((a) => { cb(null, a.default); }); }},
        {path: 'Panel', getComponent: (next, cb) => { Panel((a) => { cb(null, a.default); }); }},
        {path: 'Tooltip', getComponent: (next, cb) => { Tooltip((a) => { cb(null, a.default); }); }},
        {path: 'MessageBox', getComponent: (next, cb) => { MessageBox((a) => { cb(null, a.default); }); }},
        {path: 'Dialog', getComponent: (next, cb) => { Dialog((a) => { cb(null, a.default); }); }},
        {path: 'Menu', getComponent: (next, cb) => { Menu((a) => { cb(null, a.default); }); }},
        {path: 'Tree', getComponent: (next, cb) => { Tree((a) => { cb(null, a.default); }); }},
        {path: 'Select', getComponent: (next, cb) => { Select((a) => { cb(null, a.default); }); }},
        {path: 'Table', getComponent: (next, cb) => { Table((a) => { cb(null, a.default); }); }},
        {path: 'Progress', getComponent: (next, cb) => { Progress((a) => { cb(null, a.default); }); }},
        {path: 'Slick', getComponent: (next, cb) => { Slick((a) => { cb(null, a.default); }); }},
        {path: 'Spin', getComponent: (next, cb) => { Spin((a) => { cb(null, a.default); }); }},
        {path: 'Uploadify', getComponent: (next, cb) => { Uploadify((a) => { cb(null, a.default); }); }},
        {path: 'Badge', getComponent: (next, cb) => { Badge((a) => { cb(null, a.default); }); }},
        {path: 'Dropdown', getComponent: (next, cb) => { Dropdown((a) => { cb(null, a.default); }); }},
        {path: 'Accordion', getComponent: (next, cb) => { Accordion((a) => { cb(null, a.default); }); }},
        {path: 'InputNumber', getComponent: (next, cb) => { InputNumber((a) => { cb(null, a.default); }); }},
        {path: 'Notification', getComponent: (next, cb) => { Notification((a) => { cb(null, a.default); }); }},
        {path: 'PageList', getComponent: (next, cb) => { PageList((a) => { cb(null, a.default); }); }},
        // {path: 'SimpleForm', getComponent: (next, cb) => { SimpleForm((a) => { cb(null, a.default); }); }},
        {path: 'TableForm', getComponent: (next, cb) => { TableForm((a) => { cb(null, a.default); }); }},
        {path: 'Tab', getComponent: (next, cb) => { Tab((a) => { cb(null, a.default); }); }},
        {path: 'Slider', getComponent: (next, cb) => { Slider((a) => { cb(null, a.default); }); }},
        {path: 'Transfer', getComponent: (next, cb) => { Transfer((a) => { cb(null, a.default); }); }},
        {path: 'Avatar', getComponent: (next, cb) => { Avatar((a) => { cb(null, a.default); }); }},
        {path: 'List', getComponent: (next, cb) => { List((a) => { cb(null, a.default); }); }},
        {path: 'Tag', getComponent: (next, cb) => { Tag((a) => { cb(null, a.default); }); }},
        {path: 'Grid', getComponent: (next, cb) => { Grid((a) => { cb(null, a.default); }); }},
        {path: 'Contacts', getComponent: (next, cb) => { Contacts((a) => { cb(null, a.default); }); }},
        {path: 'ContextMenu', getComponent: (next, cb) => { ContextMenu((a) => { cb(null, a.default); }); }},
        {path: 'ConfirmButton', getComponent: (next, cb) => { ConfirmButton((a) => { cb(null, a.default); }); }},
        {path: 'SubmitButton', getComponent: (next, cb) => { SubmitButton((a) => { cb(null, a.default); }); }}
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
