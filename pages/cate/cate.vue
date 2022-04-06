<template>
	<view>
		<view class="scroll-view-container">
			<!-- 左侧的滑动区域 -->
			<scroll-view class="left-scroll-view" scroll-y="true" :style="{height: wh + 'px'}">
				<block v-for="(item,index) in cateList" :key="index">
					<view :class="['left-scroll-view-item',index === active ? 'active' : ''] "
						@click="activeChanged(index)">{{item.cat_name}}</view>
				</block>
			</scroll-view>
			<!-- 右侧滑动区域 -->
			<scroll-view scroll-y="true" :style="{height: wh + 'px'}" :scroll-top="scrollTop">
				<view class="cate-lv2" v-for="(item1,index1) in cateLevel2" :key="index1">
					<view class="cate-lv2-title">
						/ {{item1.cat_name}} /
					</view>
					<!-- 三级分类列表 -->
					<view class="cate-lv3-list">
						<!-- 三级分类item项 -->
						<view class="cate-lv3-item" v-for="(item2,index2) in item1.children" :key="index2"
							@click="getoGoodsList(item2)">
							<!-- 三级分级分类图片 -->
							<image :src="item2.cat_icon" mode=""></image>
							<!-- 三级分类文本 -->
							<text>{{item2.cat_name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 当前设备可用的高度
				wh: 0,
				// tabbar的数据
				cateList: [],
				// tabbar下标
				active: 0,
				// 二级分类数组
				cateLevel2: [],
				scrollTop: 0
			};
		},
		onLoad() {
			const sysInfo = uni.getSystemInfoSync()
			console.log(sysInfo)
			this.wh = sysInfo.windowHeight

			this.getCateList()
		},
		methods: {
			async getCateList() {
				const {
					data: res
				} = await uni.$http.get('/api/public/v1/categories')
				if (res.meta.status !== 200) return uni.$showMsg()
				this.cateList = res.message

				// 拿到二级分类
				this.cateLevel2 = res.message[0].children
			},
			activeChanged(index) {
				this.active = index
				// 重新为二级分类赋值
				this.cateList[index].children.forEach(item => {
					// console.log('item', item)
					item.children.forEach(ite => {
						// console.log('ite', ite)
						ite.cat_icon = 'http://api-ugo-web.' + ite.cat_icon.split("v.")[1]
						// console.log('截取的数据',ite.cat_icon)
					})
				})
				this.cateLevel2 = this.cateList[index].children
				// console.log(this.cateLevel2)
				this.scrollTop = this.scrollTop === 0 ? '1' : '0'

			},
			getoGoodsList(item2) {
				// console.log(item2)
				uni.navigateTo({
					url: '/subpkg/goods_list/goods_list?cid=' + item2.cat_id
				})
			}
		}
	}
</script>

<style lang="scss">
	.scroll-view-container {
		display: flex;

		.left-scroll-view {
			width: 120px;

			.left-scroll-view-item {
				background-color: #F7F7F7;
				line-height: 60px;
				text-align: center;
				font-size: 12px;

				&.active {
					background-color: #FFFFFF;
					position: relative;

					&::before {
						content: ' ';
						display: block;
						width: 3px;
						height: 30px;
						background-color: #C00000;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translateY(-50%);
					}
				}

			}
		}

		.cate-lv2-title {
			font-size: 12px;
			font-weight: bold;
			text-align: center;
			padding: 15px 0;
		}
	}

	.cate-lv3-list {
		display: flex;
		flex-wrap: wrap;

		.cate-lv3-item {
			width: 33.33%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			image {
				width: 60px;
				height: 60px;
			}

			text {}
		}
	}
</style>
