var slideTxt={
	thisBox:$('.pbox'),//�������ʽ��Ҫ������������һ��
	btnLeft:$('a.left_btn'),
	btnRight:$('a.right_btn'),
	thisEle:$('.pbox ul'),
	init:function(){
		slideTxt.thisBox.width(slideTxt.thisEle.length*202);//������ȵ����������Ŀ��ȣ��������Ƴ�ȥ�Ŀ���
		slideTxt.slideAuto();
		slideTxt.btnLeft.click(slideTxt.slideLeft).hover(slideTxt.slideStop,slideTxt.slideAuto);
		slideTxt.btnRight.click(slideTxt.slideRight).hover(slideTxt.slideStop,slideTxt.slideAuto);
		slideTxt.thisBox.hover(slideTxt.slideStop,slideTxt.slideAuto);
		},
	slideLeft:function(){
		slideTxt.btnLeft.unbind('click',slideTxt.slideLeft);
		slideTxt.thisBox.find('ul:last').prependTo(slideTxt.thisBox);
		slideTxt.thisBox.css('marginLeft',-202);//������ȵ����������Ŀ��ȣ��������Ƴ�ȥ�Ŀ���
		slideTxt.thisBox.animate({'marginLeft':0},350,function(){
			slideTxt.btnLeft.bind('click',slideTxt.slideLeft);
			});
		return false;
		},
	slideRight:function(){
		slideTxt.btnRight.unbind('click',slideTxt.slideRight);//�����Ҫ��꾭��ʱ�͹������ɸĳ�mouseover����js���������click����Ҫ����mouseover
		slideTxt.thisBox.animate({'marginLeft':-202},350,function(){
			slideTxt.thisBox.css('marginLeft','0');
			slideTxt.thisBox.find('ul:first').appendTo(slideTxt.thisBox);
			slideTxt.btnRight.bind('click',slideTxt.slideRight);
			});
		return false;
		},
	slideAuto:function(){
		slideTxt.intervalId=window.setInterval(slideTxt.slideRight,3000);//�������ʱ��
		},
	slideStop:function(){
		window.clearInterval(slideTxt.intervalId);
		}
	}
$(function(){
	slideTxt.init();

});
