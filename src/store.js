import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    items: [
        {id:7,name:"item7",expanded:true,checked:false,parentId:5},
        {id:1,name:"item1",expanded:true,checked:false,parentId:null},
        {id:2,name:"item2",expanded:true,checked:false,parentId:null},
        {id:3,name:"item3",expanded:true,checked:false,parentId:null},
        {id:4,name:"item4",expanded:false,checked:false,parentId:2},
        {id:8,name:"item8",expanded:true,checked:false,parentId:4},
        {id:5,name:"item5",expanded:true,checked:false,parentId:4}
    ]
};

const mutations = {
    check_item(state,item){
        state.items.filter(i => i.id == item.id)[0].checked = item.value;
    },
    expanded_item(state,item){
        state.items.filter(i => i.id == item.id)[0].expanded = item.value;
    }
};

const actions = {

};

const getters = {
    get_items(state) {
        let makeTree = array => array.filter(item => {
            // создаем у каждого элемента массив из ссылок на его потомков
            item.children = array.filter(i => i.parentId === item.id);
            // оставляем в фильтруемом массиве только элементы верхнего уровня
            return item.parentId == null;
        });
        return makeTree(state.items.slice(0));
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});