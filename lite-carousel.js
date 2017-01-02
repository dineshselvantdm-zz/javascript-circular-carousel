var CircularCarousel = {   
	start_time : 0,
	list_obj : {},
	position : "Right",
	delay: 500,
	width: 20,
	margin_Right: -3,
	computed_width: 23,
	init : function(position,ul_selector,delay){
		CircularCarousel.position = position;
		CircularCarousel.delay = delay;
		var li_array = document.querySelectorAll(ul_selector + ' li');
		CircularCarousel.width = li_array[0].offsetWidth;
		CircularCarousel.computed_width = CircularCarousel.width-CircularCarousel.margin_Right;
		CircularCarousel.list_obj = {li_array: li_array,selector:ul_selector};
	},
	animateCarousel : function(timestamp){
		if(!CircularCarousel.start_time){CircularCarousel.start_time = timestamp;}
		var li_array = CircularCarousel.list_obj.li_array;
		var selector = CircularCarousel.list_obj.selector;
		var progress = timestamp - CircularCarousel.start_time;
		if(CircularCarousel.position == 'Left'){
			var margin_Right = Math.max(CircularCarousel.computed_width-((progress*CircularCarousel.computed_width)/CircularCarousel.delay),CircularCarousel.margin_Right);
			document.querySelector(selector + ' li:first-child').style.marginRight = (margin_Right*-1).toString()+'px';
			if(margin_Right == CircularCarousel.margin_Right){
				f_child = document.querySelector(selector + ' li:last-child');
				f_child.parentNode.removeChild(f_child);
				CircularCarousel.start_time = 0;
				return;
			}
		}else if(CircularCarousel.position == 'Right'){
			var margin_Right = Math.min(((progress*CircularCarousel.computed_width)/CircularCarousel.delay),CircularCarousel.computed_width);
			document.querySelector(selector + ' li:first-child').style.marginRight = (margin_Right*-1).toString()+'px';
			if(margin_Right == CircularCarousel.computed_width){
				f_child = document.querySelector(selector + ' li:first-child');
				f_child.parentNode.removeChild(f_child);
				CircularCarousel.start_time = 0;
				return;
			}
		}
		if(progress<=(CircularCarousel.delay+20)){
			requestAnimationFrame(CircularCarousel.animateCarousel);
		}else{
			CircularCarousel.start_time = 0;
		}
	},
	cloneListNode: function(li_node){
		var li = document.createElement('li');
		li.innerHTML = li_node.innerHTML;
		li.classList = li_node.classList;
		return li;
	},
	shiftCarousel : function(position,ul_selector,delay){	
		if(!CircularCarousel.start_time){
			CircularCarousel.init(position,ul_selector,delay);
			var frag = document.createDocumentFragment();
			var li_array = CircularCarousel.list_obj.li_array;
			var selector = CircularCarousel.list_obj.selector;
			if(position == 'Left'){
				var arr_len = li_array.length;
				frag.appendChild(li_array[arr_len-1]);
				for(var i=0;i<arr_len-1;i++){
					frag.appendChild(li_array[i]);
				}
				var li = CircularCarousel.cloneListNode(li_array[arr_len-1]);
				frag.appendChild(li);
			}
			if(position == 'Right'){
				var li = CircularCarousel.cloneListNode(li_array[0]);
				frag.appendChild(li);
				for(var i=1;i<li_array.length;i++){
					frag.appendChild(li_array[i]);
				}
				frag.appendChild(li_array[0]);
			}
			document.querySelector(selector).innerHTML = "";
			document.querySelector(selector).appendChild(frag);
			if(position == 'Left'){
				document.querySelector(selector + ' li:first-child').style.marginRight = (CircularCarousel.computed_width*-1).toString() + "px";
			}
			requestAnimationFrame(CircularCarousel.animateCarousel);
		}	
	}	
}
