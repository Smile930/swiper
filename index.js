window.onload = function(){
	const rotation = document.querySelector('.rotation')
	const img = document.querySelector('#img')
	const images = ['./images/徐州会议.jpg','./images/团代会.jpg',
					'./images/毕业典礼.jpg','./images/羽毛球比赛.jpg','./images/运动服.jpg']
	let num = 0 //标志当前显示的图片的编号
	function changeImg(){
		num ++
		num = num % 5
		img.src = images[num]
	}
	function autoplay(){
		setInterval(function(){
			changeImg()
		},2000)
	}
	rotation.onload = autoplay()

}