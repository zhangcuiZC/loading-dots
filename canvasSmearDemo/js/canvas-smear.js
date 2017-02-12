// 将矩形区域的像素向右进行涂抹
// 来产生动态模糊效果，就好像物体正在从右到左移动
// n必须要大于或者等于2，该值越大，涂抹区域就越大
// 矩形是在默认坐标系中指定的
function smear(c,n,x,y,w,h){
	// 获取表示矩形区域内像素的ImageData对象来实现涂抹效果
	var pixels=c.getImageData(x,y,w,h);

	// 就地实现涂抹效果并且只需要ImageData对象数据
	// 一些图片处理算法要求额外的ImageData对象来存储变换后的像素值
	// 如果需要输出缓冲区，可以以如下方式创建一个新的同样尺寸的ImageData对象
	// var output_pixels=c.createImageData(pixels);

	// 这些尺寸可以和w和h之类的参数不同：有可能是每个CSS像素要表示多个设备像素
	var width=pixels.width,
		height=pixels.height;

	// data变量包含所有原始的像素信息：从左到右，从上到下
	// 每个像素按照RGBA的顺序占据四个字节
	var data=pixels.data;

	// 每一行第一个像素之后的像素都通过将其色值替换成
	// 其色素值的1/n+原色素值的m/n
	var m=n-1;
	for(var row=0;row<height;row++){
		var i=row*width*4+4;
		for(var col=1;col<width;col++,i+=4){
			data[i]=(data[i]+data[i-4]*m)/n;
			data[i+1]=(data[i+1]+data[i-3]*m)/n;
			data[i+2]=(data[i+2]+data[i-2]*m)/n;
			data[i+3]=(data[i+3]+data[i-1]*m)/n;
		}
	}

	// 现在将涂抹过的图片数据复制回画布相同的位置
	c.putImageData(pixels,x,y);
}