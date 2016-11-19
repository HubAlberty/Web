$(document).ready(function(){
    $("#moreproduct").hover(function(){
        $("#morepr").css("display","block");
    });
    $("#morepr").hover(function(){
        $("#morepr").css("display","block");
    },function(){
        $("#morepr").css("display","none");
    });
});

$(function(){
	$("#spantext").hover(function(){
        $("#spantext").addClass("inputspansethover");
        $("#inputtext").focus(function(){
        	$("#spantext").removeClass("inputspansethover");
            $("#spantext").addClass("inputspanset");
        }).blur(function(){
            $("#spantext").removeClass("inputspanset");
        });
    },function(){
        $("#spantext").removeClass("inputspansethover");
    });
});

$(document).click(function(e){
    e = window.event || e; // 兼容IE7 是获取事件对象，这里是IE下的，event是window的一个属性；
    obj = $(e.srcElement || e.target);//是获取发生事件的那个元素，这个元素是一个对象，这也是IE下的。
    if($(obj).is("#uploadpicture,#uploadpicture *")){
    	$("#upbox").addClass("add-displayupbox");
    }else if ($(obj).is("#upbox,#upbox *")){
         //
    } else {
        $("#upbox").removeClass("add-displayupbox");
    }
});

$(document).ready(function(){
	$("#close-click").click(function(){
		$("#upbox").removeClass("add-displayupbox");
	});
});


function loginshow(){
	document.getElementById("transparentbg").style.display = "block";
	document.getElementById("loginid").style.display="block";
}
function loginclose(){
	document.getElementById("transparentbg").style.display = "none";
	document.getElementById("loginid").style.display="none";
}


$(function(){
  $("#account").focus(function(){
  		$("#idaccount-icon").addClass("account-iconfocus");
        $("#paccountid").addClass("inputpadd");
    }).blur(function(){
    	$("#idaccount-icon").removeClass("account-iconfocus");
        $("#paccountid").removeClass("inputpadd");
    });
});

$(function(){
  $("#password").focus(function(){
  	        $("#idpassword-icon").addClass("password-iconfocus");
            $("#ppasswordid").addClass("inputpadd");
    }).blur(function(){
    	$("#idpassword-icon").removeClass("password-iconfocus");
        $("#ppasswordid").removeClass("inputpadd");
    });
});

var MobileArea=false;
$(document).ready(function(){
  $("#loginheadid").mousedown(function(){
    MobileArea=true;
  });
});

window.onload=function(){
    var obox=document.getElementById("transparentbg");
    var odrag=document.getElementById("loginid");
    var flag=false;
    var x,y;
    var ol,ot;
    odrag.onmousedown=function(ev){
        var ev=window.event||ev;
        flag=true;
        x=ev.clientX;
        y=ev.clientY;
        ol=odrag.offsetLeft;
        ot=odrag.offsetTop;
    }
    document.onmousemove=function(ev){
	    if(flag==false) return;
	    if(MobileArea){
	    var ev=window.event||ev;
	    var _x,_y;
	    _x=ev.clientX-x+ol;
	    _y=ev.clientY-y+ot;
	    if(_x<0) _x=0;
	    if(_y<0) _y=0;
	    if(_x>obox.offsetWidth-odrag.offsetWidth)
	        _x=obox.offsetWidth-odrag.offsetWidth;
	    if(_y>obox.offsetHeight-odrag.offsetHeight)
	        _y=obox.offsetHeight-odrag.offsetHeight;
	         
	    odrag.style.left=_x+"px";
	    odrag.style.top=_y+"px";
    }}
    document.onmouseup=function(){
    	flag=false;
    	MobileArea=false;
    }
}