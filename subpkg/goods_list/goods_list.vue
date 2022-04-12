<template>
	<view>
		<view class="goods-list">
			<view v-for="(item,index) in goodsList" :key="index" @click="gotoDetail(item)">
				<view class="goods-item">
					<!-- 左侧的盒子 -->
					<view class="goods-item-left">
						<image :src="item.goods_small_logo || defaultPic" class="goods-pic" mode=""></image>
					</view>
					<!-- 右侧的盒子 -->
					<view class="goods-item-right">
						<!-- 商品名字 -->
						<view class="goods-name">{{item.goods_name}}</view>
						<view class="goods-info-box">
							<view class="goods-price">￥{{item.goods_price | tofixed}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				queryObj: {
					query: '',
					cid: '',
					pagenum: 1,
					pagesize: 10
				},
				goodsList: [],
				total: 0,
				defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
				isloading: false
			};
		},
		onLoad(option) {
			this.queryObj.query = option.query || ''
			this.queryObj.cid = option.cid || ''
			this.getGoodsList()
		},
		methods: {
			async getGoodsList(cb) {
				// 打开节流阀
				this.isloading = true
				const {
					data: res
				} = await uni.$http.get('/api/public/v1/goods/search', +this.queryObj)
				// 关闭节流阀
				this.isloading = false
				cb && cb()
				if (res.meta.status !== 200) return uni.$showMsg()

				this.goodsList = [...this.goodsList, ...res.message.goods]
				this.total = res.message.total
			},
			gotoDetail(item){
				uni.navigateTo({
					url:'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
				})
			}
		},
		filters: {
			tofixed(num) {
				return Number(num).toFixed(2)
			}
		},
		onReachBottom() {
			if(this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$showMsg("数据加载完毕...")
			if (this.isloading) return
			// 让页码值自增+1
			this.queryObj.pagenum++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.queryObj.pagenum = 1
			this.total = 0
			this.isloading = false
			this.goodsList = []
			// 重新发起请求
			this.getGoodsList(()=> uni.stopPullDownRefresh())
		}
	}
</script>

<style lang="scss">
	.goods-list {
		.goods-item {
			display: flex;
			padding: 10px 5px;
			border-bottom: 1px solid #f0f0f0;

			.goods-item-left {
				margin-right: 5px;

				.goods-pic {
					width: 100px;
					height: 100px;
					display: block;
				}
			}

			.goods-item-right {
				display: flex;
				flex-direction: column;
				justify-content: span;

				.goods-name {
					font-size: 13px;
				}

				.goods-info-box {
					.goods-price {
						color: #C00000;
						font-size: 16px;
					}
				}
			}
		}
	}
</style>
