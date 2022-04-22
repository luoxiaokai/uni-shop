export default {
	// 开启命名空间
	namespaced: true,

	// 数据 
	state: () => ({
		// getStorageSync  读取
		address: JSON.parse(uni.getStorageSync('address') || '{}'),
		// 读取token的值 没有就为空
		// token: uni.getStorageSync('token') || '',
		// 虚拟token
		token: uni.getStorageSync('token') || '',
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
		// 重定向的 object对象
		redirectInfo: null
	}),

	// 方法
	mutations: {
		updateAddress(state, address) {
			state.address = address

			this.commit('m_user/saveAddressToStorage')
		},
		// 持久化存储 address
		saveAddressToStorage(state) {
			// setStorageSync  存储
			uni.setStorageSync('address', JSON.stringify(state.address))
		},
		updateUserInfo(state, userinfo) {
			state.userinfo = userinfo

			this.commit('m_user/saveUserInfoToStorage')
		},
		saveUserInfoToStorage(state) {
			uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
		},
		updateToken(state, token) {
			state.token = token
			this.commit('m_user/saveTokenToStorage')
		},
		saveTokenToStorage(state) {
			uni.setStorageSync('token', state.token)
		},
		updateRedirctInfo(state, info) {
			state.redirectInfo = info
		}
	},

	getters: {
		addstr(state) {
			if (!state.address.provinceName) return ''
			return state.address.provinceName + state.address.cityName + state.address.countyName + state.address
				.detailInfo
		}
	}
}
