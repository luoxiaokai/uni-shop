export default {
	namespaced: true,
	state: () => ({
		// 获取storage里面缓存好的数据
		cart: JSON.parse(uni.getStorageSync('cart') || '[]')
	}),
	mutations: {
		addToCart(state, goods) {
			const findResult = state.cart.find(x => x.goods_id === goods.goods_id)
			if (!findResult) {
				state.cart.push(goods)
			} else {
				findResult.goods_count++
			}
			this.commit('m_cart/saveToStoreage')
		},
		// 使用小程序自带的方法把数据缓存到storage里面
		saveToStoreage(state) {
			// 转换成字符串
			uni.setStorageSync('cart', JSON.stringify(state.cart))
		},
		// 更新购物车中商品的勾选状态
		updateGoodsState(state, goods) {
			// 根据goods_id查询购物车中对应的商品信息对象
			const findResult = state.cart.find(x => x.goods_id === goods.goods_id)

			if (findResult) {
				// 更新对应商品的勾选
				findResult.goods_state = goods.goods_state
				// 持久化存储到本地
				this.commit('m_cart/saveToStoreage')
			}
		},
		// 更新商品数量
		updateGoodsCount(state, goods) {
			// 根据goods_id查询购物车中对应的商品信息对象
			const findResult = state.cart.find(x => x.goods_id === goods.goods_id)
			if (findResult) {
				// 更新对应商品的数量
				findResult.goods_count = goods.goods_count
				// 持久化存储到本地
				this.commit('m_cart/saveToStoreage')
			}
		},
		// 购物车删除
		removeGoodsById(state, goods_id) {
			console.log('state', state)
			console.log('goods_id', goods_id)
			state.cart = state.cart.filter(x => x.goods_id !== goods_id)

			this.commit('m_cart/saveToStoreage')
		},
		// 购物车中全选的状态
		updateAllGoodsState(state, newState) {
			state.cart.forEach(x => x.goods_state = newState)

			this.commit('m_cart/saveToStoreage')
		}
	},
	getters: {
		// 购物车中所有商品的总数量
		total(state) {
			// let c = 0
			// state.cart.forEach(x => c += x.goods_count)
			// return c

			return state.cart.reduce((total, item) => total += item.goods_count, 0)
		},
		// 购物车中已勾选的总数量
		checkedCount(state) {
			return state.cart.filter(x => x.goods_state).reduce((total, item) => total += item.goods_count, 0)
		},
		// 已勾选商品的总价格
		checkedGoodsAmount(state) {
			return state.cart.filter(x => x.goods_state).reduce((total, item) => total += item.goods_count * item.goods_price,
				0).toFixed(2)
		}
	}
}
