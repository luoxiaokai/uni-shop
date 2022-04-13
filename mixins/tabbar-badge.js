import {
	mapGetters
} from 'vuex'
export default {
	computed: {
		...mapGetters('m_cart', ['total'])
	},
	watch:{
		// 监听购物车数字徽标的值
		total(){
			this.setBadge()
		}
	},
	onShow() {
		this.setBadge()
	},
	methods: {
		setBadge() {
			uni.setTabBarBadge({
				index: 2,
				text: this.total + '',
			})
		}
	}
}
