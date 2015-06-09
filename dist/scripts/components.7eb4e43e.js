!function(a){var b;window.UIkit&&(b=a(UIkit)),"function"==typeof define&&define.amd&&define("uikit-datepicker",["uikit"],function(){return b||a(UIkit)})}(function(a){"use strict";var b,c,d=!1;return a.component("datepicker",{defaults:{mobile:!1,weekstart:1,i18n:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},format:"DD.MM.YYYY",offsettop:5,maxDate:!1,minDate:!1,pos:"auto",template:function(b,d){var e,f,g,h="";if(d.maxDate!==!1&&(e=isNaN(d.maxDate)?c(d.maxDate,d.format):c().add(d.maxDate,"days")),d.minDate!==!1&&(f=isNaN(d.minDate)?c(d.minDate,d.format):c().add(d.minDate-1,"days")),h+='<div class="uk-datepicker-nav">',h+='<a href="" class="uk-datepicker-previous"></a>',h+='<a href="" class="uk-datepicker-next"></a>',a.formSelect){var i,j,k,l,m=(new Date).getFullYear(),n=[];for(g=0;g<d.i18n.months.length;g++)g==b.month?n.push('<option value="'+g+'" selected>'+d.i18n.months[g]+"</option>"):n.push('<option value="'+g+'">'+d.i18n.months[g]+"</option>");for(i='<span class="uk-form-select">'+d.i18n.months[b.month]+'<select class="update-picker-month">'+n.join("")+"</select></span>",n=[],k=f?f.year():m-50,l=e?e.year():m+20,g=k;l>=g;g++)g==b.year?n.push('<option value="'+g+'" selected>'+g+"</option>"):n.push('<option value="'+g+'">'+g+"</option>");j='<span class="uk-form-select">'+b.year+'<select class="update-picker-year">'+n.join("")+"</select></span>",h+='<div class="uk-datepicker-heading">'+i+" "+j+"</div>"}else h+='<div class="uk-datepicker-heading">'+d.i18n.months[b.month]+" "+b.year+"</div>";for(h+="</div>",h+='<table class="uk-datepicker-table">',h+="<thead>",g=0;g<b.weekdays.length;g++)b.weekdays[g]&&(h+="<th>"+b.weekdays[g]+"</th>");for(h+="</thead>",h+="<tbody>",g=0;g<b.days.length;g++)if(b.days[g]&&b.days[g].length){h+="<tr>";for(var o=0;o<b.days[g].length;o++)if(b.days[g][o]){var p=b.days[g][o],q=[];p.inmonth||q.push("uk-datepicker-table-muted"),p.selected&&q.push("uk-active"),e&&p.day>e&&q.push("uk-datepicker-date-disabled uk-datepicker-table-muted"),f&&f>p.day&&q.push("uk-datepicker-date-disabled uk-datepicker-table-muted"),h+='<td><a href="" class="'+q.join(" ")+'" data-date="'+p.day.format()+'">'+p.day.format("D")+"</a></td>"}h+="</tr>"}return h+="</tbody>",h+="</table>"}},boot:function(){a.$win.on("resize orientationchange",function(){d&&d.hide()}),a.$html.on("focus.datepicker.uikit","[data-uk-datepicker]",function(b){var c=a.$(this);c.data("datepicker")||(b.preventDefault(),a.datepicker(c,a.Utils.options(c.attr("data-uk-datepicker"))),c.trigger("focus"))}),a.$html.on("click.datepicker.uikit",function(c){var e=a.$(c.target);!d||e[0]==b[0]||e.data("datepicker")||e.parents(".uk-datepicker:first").length||d.hide()})},init:function(){if(!a.support.touch||"date"!=this.element.attr("type")||this.options.mobile){var e=this;this.current=this.element.val()?c(this.element.val(),this.options.format):c(),this.on("click focus",function(){d!==e&&e.pick(this.value?this.value:e.options.minDate?e.options.minDate:"")}).on("change",function(){e.element.val()&&!c(e.element.val(),e.options.format).isValid()&&e.element.val(c().format(e.options.format))}),b||(b=a.$('<div class="uk-dropdown uk-datepicker"></div>'),b.on("click",".uk-datepicker-next, .uk-datepicker-previous, [data-date]",function(e){e.stopPropagation(),e.preventDefault();var f=a.$(this);return f.hasClass("uk-datepicker-date-disabled")?!1:void(f.is("[data-date]")?(d.element.val(c(f.data("date")).format(d.options.format)).trigger("change"),b.hide(),d=!1):d.add(1*(f.hasClass("uk-datepicker-next")?1:-1),"months"))}),b.on("change",".update-picker-month, .update-picker-year",function(){var b=a.$(this);d[b.is(".update-picker-year")?"setYear":"setMonth"](Number(b.val()))}),b.appendTo("body"))}},pick:function(e){var f=this.element.offset(),g={left:f.left,right:""};this.current=e?c(e,this.options.format):c(),this.initdate=this.current.format("YYYY-MM-DD"),this.update(),"right"==a.langdirection&&(g.right=window.innerWidth-(g.left+this.element.outerWidth()),g.left="");var h=f.top-this.element.outerHeight()+this.element.height()-this.options.offsettop-b.outerHeight(),i=f.top+this.element.outerHeight()+this.options.offsettop;g.top=i,"top"==this.options.pos?g.top=h:"auto"==this.options.pos&&window.innerHeight-i-b.outerHeight()<0&&h>=0&&(g.top=h),b.css(g).show(),this.trigger("show.uk.datepicker"),d=this},add:function(a,b){this.current.add(a,b),this.update()},setMonth:function(a){this.current.month(a),this.update()},setYear:function(a){this.current.year(a),this.update()},update:function(){var a=this.getRows(this.current.year(),this.current.month()),c=this.options.template(a,this.options);b.html(c),this.trigger("update.uk.datepicker")},getRows:function(a,b){var d=this.options,e=c().format("YYYY-MM-DD"),f=[31,a%4===0&&a%100!==0||a%400===0?29:28,31,30,31,30,31,31,30,31,30,31][b],g=new Date(a,b,1).getDay(),h={month:b,year:a,weekdays:[],days:[]},i=[];h.weekdays=function(){for(var a=0,b=[];7>a;a++){for(var c=a+(d.weekstart||0);c>=7;)c-=7;b.push(d.i18n.weekdays[c])}return b}(),d.weekstart&&d.weekstart>0&&(g-=d.weekstart,0>g&&(g+=7));for(var j=f+g,k=j;k>7;)k-=7;j+=7-k;for(var l,m,n,o,p,q=0,r=0;j>q;q++)l=new Date(a,b,1+(q-g)),m=d.mindate&&l<d.mindate||d.maxdate&&l>d.maxdate,p=!(g>q||q>=f+g),l=c(l),n=this.initdate==l.format("YYYY-MM-DD"),o=e==l.format("YYYY-MM-DD"),i.push({selected:n,today:o,disabled:m,day:l,inmonth:p}),7===++r&&(h.days.push(i),i=[],r=0);return h},hide:function(){d&&d===this&&(b.hide(),d=!1,this.trigger("hide.uk.datepicker"))}}),c=function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return wa.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){sa.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){nb[a]||(e(b),nb[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=sa.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Fa.length>0)for(c in Fa)d=Fa[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=sa.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&na(a,"Date",ma(a,"Date")+f*c),g&&la(a,ma(a,"Month")+g*c),d&&sa.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=gb[a]||hb[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}sa[b]=function(e,f){var g,h,i=sa._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=sa().utc().set(d,a);return i.call(sa._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return ha(sa([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[ya]<0||a._a[ya]>11?ya:a._a[za]<1||a._a[za]>B(a._a[xa],a._a[ya])?za:a._a[Aa]<0||a._a[Aa]>23?Aa:a._a[Ba]<0||a._a[Ba]>59?Ba:a._a[Ca]<0||a._a[Ca]>59?Ca:a._a[Da]<0||a._a[Da]>999?Da:-1,a._pf._overflowDayOfYear&&(xa>b||b>za)&&(b=za),a._pf.overflow=b)}function G(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Ea[a]&&Ga)try{b=sa.locale(),require("./locale/"+a),sa.locale(b)}catch(c){}return Ea[a]}function K(a,b){return b._isUTC?sa(a).zone(b._offset||0):sa(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Ka);for(b=0,c=d.length;c>b;b++)d[b]=mb[d[b]]?mb[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),ib[b]||(ib[b]=M(b)),ib[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(La.lastIndex=0;d>=0&&La.test(a);)a=a.replace(La,c),La.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Wa;case"DDDD":return Ya;case"YYYY":case"GGGG":case"gggg":return d?Za:Oa;case"Y":case"G":case"g":return _a;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?$a:Pa;case"S":if(d)return Wa;case"SS":if(d)return Xa;case"SSS":if(d)return Ya;case"DDD":return Na;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ra;case"a":case"A":return b._locale._meridiemParse;case"X":return Ua;case"Z":case"ZZ":return Sa;case"T":return Ta;case"SSSS":return Qa;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Xa:Ma;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Ma;case"Do":return Va;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Sa)||[],c=b[b.length-1]||[],d=(c+"").match(eb)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[ya]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[ya]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b),null!=d?e[ya]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[za]=A(b));break;case"Do":null!=b&&(e[za]=A(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[xa]=sa.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[xa]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"H":case"HH":case"h":case"hh":e[Aa]=A(b);break;case"m":case"mm":e[Ba]=A(b);break;case"s":case"ss":e[Ca]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Da]=A(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=sa.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[xa],ha(sa(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[xa],ha(sa(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ia(d,e,f,h,g),a._a[xa]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[za]&&null==a._a[ya]&&S(a),a._dayOfYear&&(f=b(a._a[xa],e[xa]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=da(f,0,a._dayOfYear),a._a[ya]=d.getUTCMonth(),a._a[za]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?da:ca).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(a){if(a._f===sa.ISO_8601)return void $(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=""+a._i,h=g.length,i=0;for(d=O(a._f,a._locale).match(Ka)||[],b=0;b<d.length;b++)e=d[b],c=(g.match(P(e,a))||[])[0],c&&(f=g.substr(0,g.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),g=g.slice(g.indexOf(c)+c.length),i+=c.length),mb[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),R(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=h-i,g.length>0&&a._pf.unusedInput.push(g),a._isPm&&a._a[Aa]<12&&(a._a[Aa]+=12),a._isPm===!1&&12===a._a[Aa]&&(a._a[Aa]=0),T(a),F(a)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(NaN));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=ab.exec(d);if(e){for(a._pf.iso=!0,b=0,c=cb.length;c>b;b++)if(cb[b][1].exec(d)){a._f=cb[b][0]+(e[6]||" ");break}for(b=0,c=db.length;c>b;b++)if(db[b][1].exec(d)){a._f+=db[b][0];break}d.match(Sa)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,sa.createFromInputFallback(a))}function aa(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function ba(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Ha.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=aa(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):sa.createFromInputFallback(b)}function ca(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function da(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ea(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fa(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ga(a,b,c){var d=sa.duration(a).abs(),e=va(d.as("s")),f=va(d.as("m")),g=va(d.as("h")),h=va(d.as("d")),i=va(d.as("M")),j=va(d.as("y")),k=e<jb.s&&["s",e]||1===f&&["m"]||f<jb.m&&["mm",f]||1===g&&["h"]||g<jb.h&&["hh",g]||1===h&&["d"]||h<jb.d&&["dd",h]||1===i&&["M"]||i<jb.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fa.apply({},k)}function ha(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=sa(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ia(a,b,c,d,e){var f,g,h=da(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function ja(b){var c=b._i,d=b._f;return b._locale=b._locale||sa.localeData(b._l),null===c||d===a&&""===c?sa.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=b._locale.preparse(c)),sa.isMoment(c)?new k(c,!0):(d?u(d)?Z(b):W(b):ba(b),new k(b)))}function ka(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return sa();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function la(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function ma(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function na(a,b,c){return"Month"===b?la(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function oa(a,b){return function(c){return null!=c?(na(this,a,c),sa.updateOffset(this,b),this):ma(this,a)}}function pa(a){return 400*a/146097}function qa(a){return 146097*a/400}function ra(a){sa.duration.fn[a]=function(){return this._data[a]}}for(var sa,ta,ua="2.8.3",va=Math.round,wa=Object.prototype.hasOwnProperty,xa=0,ya=1,za=2,Aa=3,Ba=4,Ca=5,Da=6,Ea={},Fa=[],Ga="undefined"!=typeof module&&module.exports,Ha=/^\/?Date\((\-?\d+)/i,Ia=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ja=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Ka=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,La=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Ma=/\d\d?/,Na=/\d{1,3}/,Oa=/\d{1,4}/,Pa=/[+\-]?\d{1,6}/,Qa=/\d+/,Ra=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Sa=/Z|[\+\-]\d\d:?\d\d/gi,Ta=/T/i,Ua=/[\+\-]?\d+(\.\d{1,3})?/,Va=/\d{1,2}/,Wa=/\d/,Xa=/\d\d/,Ya=/\d{3}/,Za=/\d{4}/,$a=/[+-]?\d{6}/,_a=/[+-]?\d+/,ab=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,bb="YYYY-MM-DDTHH:mm:ssZ",cb=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],db=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],eb=/([\+\-]|\d\d)/gi,fb=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),gb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},hb={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},ib={},jb={s:45,m:45,h:22,d:26,M:11},kb="DDD w W M D d".split(" "),lb="M D H h m s w W".split(" "),mb={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},nb={},ob=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];kb.length;)ta=kb.pop(),mb[ta+"o"]=i(mb[ta],ta);for(;lb.length;)ta=lb.pop(),mb[ta+ta]=h(mb[ta],2);mb.DDDD=h(mb.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=sa.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=sa([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return ha(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),sa=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),ja(g)},sa.suppressDeprecationWarnings=!1,sa.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),sa.min=function(){var a=[].slice.call(arguments,0);return ka("isBefore",a)},sa.max=function(){var a=[].slice.call(arguments,0);return ka("isAfter",a)},sa.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),ja(g).utc()},sa.unix=function(a){return sa(1e3*a)},sa.duration=function(a,b){var d,e,f,g,h=a,i=null;return sa.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Ia.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[za])*d,h:A(i[Aa])*d,m:A(i[Ba])*d,s:A(i[Ca])*d,ms:A(i[Da])*d}):(i=Ja.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(sa(h.from),sa(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),sa.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},sa.version=ua,sa.defaultFormat=bb,sa.ISO_8601=function(){},sa.momentProperties=Fa,sa.updateOffset=function(){},sa.relativeTimeThreshold=function(b,c){return jb[b]===a?!1:c===a?jb[b]:(jb[b]=c,!0)},sa.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return sa.locale(a,b)}),sa.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?sa.defineLocale(a,b):sa.localeData(a),c&&(sa.duration._locale=sa._locale=c)),sa._locale._abbr},sa.defineLocale=function(a,b){return null!==b?(b.abbr=a,Ea[a]||(Ea[a]=new j),Ea[a].set(b),sa.locale(a),Ea[a]):(delete Ea[a],null)},sa.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return sa.localeData(a)}),sa.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return sa._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},sa.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},sa.isDuration=function(a){return a instanceof l};for(ta=ob.length-1;ta>=0;--ta)z(ob[ta]);sa.normalizeUnits=function(a){return x(a)},sa.invalid=function(a){var b=sa.utc(NaN);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},sa.parseZone=function(){return sa.apply(null,arguments).parseZone()},sa.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(sa.fn=k.prototype,{clone:function(){return sa(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=sa(this).utc();return 0<a.year()&&a.year()<=9999?N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?sa.utc(this._a):sa(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||sa.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-sa(this).startOf("month")-(g-sa(g).startOf("month")),f-=6e4*(this.zone()-sa(this).startOf("month").zone()-(g.zone()-sa(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return sa.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(sa(),a)},calendar:function(a){var b=a||sa(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=ea(a,this.localeData()),this.add(a-b,"d")):b},month:oa("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=x(a),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")},isAfter:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=sa.isMoment(a)?a:sa(a),+this>+a):+this.clone().startOf(b)>+sa(a).startOf(b)},isBefore:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=sa.isMoment(a)?a:sa(a),+a>+this):+this.clone().startOf(b)<+sa(a).startOf(b)},isSame:function(a,b){return b=x(b||"millisecond"),"millisecond"===b?(a=sa.isMoment(a)?a:sa(a),+this===+a):+this.clone().startOf(b)===+K(a,this).startOf(b)},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=sa.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=sa.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,sa.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,sa.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),
this},hasAlignedHourOffset:function(a){return a=a?sa(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=va((sa(this).startOf("day")-sa(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=ha(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=ha(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=ha(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=sa.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Use moment().localeData() instead.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),sa.fn.millisecond=sa.fn.milliseconds=oa("Milliseconds",!1),sa.fn.second=sa.fn.seconds=oa("Seconds",!1),sa.fn.minute=sa.fn.minutes=oa("Minutes",!1),sa.fn.hour=sa.fn.hours=oa("Hours",!0),sa.fn.date=oa("Date",!0),sa.fn.dates=f("dates accessor is deprecated. Use date instead.",oa("Date",!0)),sa.fn.year=oa("FullYear",!0),sa.fn.years=f("years accessor is deprecated. Use year instead.",oa("FullYear",!0)),sa.fn.days=sa.fn.day,sa.fn.months=sa.fn.month,sa.fn.weeks=sa.fn.week,sa.fn.isoWeeks=sa.fn.isoWeek,sa.fn.quarters=sa.fn.quarter,sa.fn.toJSON=sa.fn.toISOString,m(sa.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pa(e)),e-=o(qa(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=ga(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=sa.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=sa.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pa(b),"month"===a?c:c/12;switch(b=this._days+qa(this._months/12),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:sa.fn.lang,locale:sa.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),sa.duration.fn.toString=sa.duration.fn.toISOString;for(ta in fb)c(fb,ta)&&ra(ta.toLowerCase());return sa.duration.fn.asMilliseconds=function(){return this.as("ms")},sa.duration.fn.asSeconds=function(){return this.as("s")},sa.duration.fn.asMinutes=function(){return this.as("m")},sa.duration.fn.asHours=function(){return this.as("h")},sa.duration.fn.asDays=function(){return this.as("d")},sa.duration.fn.asWeeks=function(){return this.as("weeks")},sa.duration.fn.asMonths=function(){return this.as("M")},sa.duration.fn.asYears=function(){return this.as("y")},sa.locale("en",{ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),sa}.call(this),a.Utils.moment=c,a.datepicker});