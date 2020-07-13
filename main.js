window.onload = function(){
	const circle = document.querySelector('.circle')
	const imgitems = document.querySelectorAll('.img-item')
	const imgs = document.querySelector('.imgs')
	const rotation = document.querySelector('.rotation')
	const left = document.querySelector('.left')
	const right = document.querySelector('.right')
	let len = imgitems.length
	let  num = 0
	let movement = 0
	let flag = true

	//动态生成小圆圈
	for(let i = 0; i < len ; i++){
		let li = document.createElement('li')
		circle.appendChild(li)
	}

	//为了使过渡效果更好，不显得生硬，在最后一张图的后面加入第一张，第一张图的前面加入最后一张，使用克隆的手法
	const img_first = imgitems[0].cloneNode(true)
	imgs.appendChild(img_first)
	const img_last = imgitems[len - 1].cloneNode(true)
	imgs.insertBefore(img_last , imgitems[0])

	//点击左侧按钮、点击右侧按钮事件
	left.onclick = function(){
		pre_pic()
	}
	right.onclick = function(){
		console.log(imgs.offsetLeft)
		next_pic()
	}
	function pre_pic(){
		num --
		movement = imgs.offsetLeft + 600
		imgs.style.left = movement + 'px'
		if(num == -1){
			imgs.classList.remove('animator')
			num = len - 1
			movement = -(len * rotation.clientWidth)
			imgs.style.left = imgs.offsetLeft + movement  + 'px'
			imgs.classList.add('animator')
		}
	}
	function next_pic(){
		num ++ 
		movement = imgs.offsetLeft - 600
		imgs.style.left = movement + 'px'
		if (num == len ) {
			imgs.classList.remove('animator')
			num = 0
			movement = (len * rotation.clientWidth)
			imgs.style.left = imgs.offsetLeft +  movement + 'px'
			imgs.classList.add('animator')
		}
	}
	//自动播放功能，使用position的left位置
	// rotation.onload = function(){
	// 	setInterval(function(){
	// 		num ++
	// 		num = num % 6
	// 		movement = (-(num*600) )
	// 		imgs.style.left = movement + 'px'
	// 	},2000)
	// }

}