import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import listBook from '@/components/listBook'
import {
	concat
} from 'lodash'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'listBook',
		component: listBook
	}]
})