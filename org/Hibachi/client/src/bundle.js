/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint browser:true */
	'use strict';
	__webpack_require__(1)();
	var slatwalladmin_module_1 = __webpack_require__(9);
	var logger_module_1 = __webpack_require__(138);
	//custom bootstrapper
	var bootstrapper = (function () {
	    function bootstrapper() {
	        var _this = this;
	        //should contain any data that is required by angular prior to bootstrapping
	        this.fetchData = function () {
	            var initInjector = angular.injector(["ng"]);
	            var $http = initInjector.get("$http");
	            var $q = initInjector.get("$q");
	            var deferred = $q.defer();
	            var urlString = '/index.cfm/?slatAction=api:main.getModel';
	            var params = {};
	            $http.get(urlString, {
	                params: params
	            }).success(function (data) {
	                deferred.resolve(data);
	            }).error(function (reason) {
	                deferred.reject(reason);
	            });
	            return deferred.promise;
	        };
	        this.bootstrapApplication = function () {
	            angular.element(document).ready(function () {
	                angular.bootstrap(document, [logger_module_1.loggermodule.name, slatwalladmin_module_1.slatwalladminmodule.name], {});
	            });
	        };
	        this.fetchData().then(function (data) {
	            slatwallAngular.modelConfig = data.data;
	            _this.bootstrapApplication();
	        });
	    }
	    return bootstrapper;
	})();
	module.exports = new bootstrapper();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function () {
	    /* JS */
	    __webpack_require__(2);
	    __webpack_require__(3);
	    __webpack_require__(4);
	    __webpack_require__(5);
	    __webpack_require__(6);
	    __webpack_require__(7);
	    __webpack_require__(8);
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|after|from)/i,subtract:/^(\-|before|ago)/i,yesterday:/^yesterday/i,today:/^t(oday)?/i,tomorrow:/^tomorrow/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^min(ute)?s?/i,hour:/^h(ou)?rs?/i,week:/^w(ee)?k/i,month:/^m(o(nth)?s?)?/i,day:/^d(ays?)?/i,year:/^y((ea)?rs?)?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a|p)/i},abbreviatedTimeZoneStandard:{GMT:"-000",EST:"-0400",CST:"-0500",MST:"-0600",PST:"-0700"},abbreviatedTimeZoneDST:{GMT:"-000",EDT:"-0500",CDT:"-0600",MDT:"-0700",PDT:"-0800"}},Date.getMonthNumberFromName=function(t){for(var e=Date.CultureInfo.monthNames,n=Date.CultureInfo.abbreviatedMonthNames,r=t.toLowerCase(),a=0;a<e.length;a++)if(e[a].toLowerCase()==r||n[a].toLowerCase()==r)return a;return-1},Date.getDayNumberFromName=function(t){for(var e=Date.CultureInfo.dayNames,n=Date.CultureInfo.abbreviatedDayNames,r=(Date.CultureInfo.shortestDayNames,t.toLowerCase()),a=0;a<e.length;a++)if(e[a].toLowerCase()==r||n[a].toLowerCase()==r)return a;return-1},Date.isLeapYear=function(t){return t%4===0&&t%100!==0||t%400===0},Date.getDaysInMonth=function(t,e){return[31,Date.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},Date.getTimezoneOffset=function(t,e){return e?Date.CultureInfo.abbreviatedTimeZoneDST[t.toUpperCase()]:Date.CultureInfo.abbreviatedTimeZoneStandard[t.toUpperCase()]},Date.getTimezoneAbbreviation=function(t,e){var n,r=e?Date.CultureInfo.abbreviatedTimeZoneDST:Date.CultureInfo.abbreviatedTimeZoneStandard;for(n in r)if(r[n]===t)return n;return null},Date.prototype.clone=function(){return new Date(this.getTime())},Date.prototype.compareTo=function(t){if(isNaN(this))throw new Error(this);if(t instanceof Date&&!isNaN(t))return this>t?1:t>this?-1:0;throw new TypeError(t)},Date.prototype.equals=function(t){return 0===this.compareTo(t)},Date.prototype.between=function(t,e){var n=this.getTime();return n>=t.getTime()&&n<=e.getTime()},Date.prototype.addMilliseconds=function(t){return this.setMilliseconds(this.getMilliseconds()+t),this},Date.prototype.addSeconds=function(t){return this.addMilliseconds(1e3*t)},Date.prototype.addMinutes=function(t){return this.addMilliseconds(6e4*t)},Date.prototype.addHours=function(t){return this.addMilliseconds(36e5*t)},Date.prototype.addDays=function(t){return this.addMilliseconds(864e5*t)},Date.prototype.addWeeks=function(t){return this.addMilliseconds(6048e5*t)},Date.prototype.addMonths=function(t){var e=this.getDate();return this.setDate(1),this.setMonth(this.getMonth()+t),this.setDate(Math.min(e,this.getDaysInMonth())),this},Date.prototype.addYears=function(t){return this.addMonths(12*t)},Date.prototype.add=function(t){if("number"==typeof t)return this._orient=t,this;var e=t;return(e.millisecond||e.milliseconds)&&this.addMilliseconds(e.millisecond||e.milliseconds),(e.second||e.seconds)&&this.addSeconds(e.second||e.seconds),(e.minute||e.minutes)&&this.addMinutes(e.minute||e.minutes),(e.hour||e.hours)&&this.addHours(e.hour||e.hours),(e.month||e.months)&&this.addMonths(e.month||e.months),(e.year||e.years)&&this.addYears(e.year||e.years),(e.day||e.days)&&this.addDays(e.day||e.days),this},Date._validate=function(t,e,n,r){if("number"!=typeof t)throw new TypeError(t+" is not a Number.");if(e>t||t>n)throw new RangeError(t+" is not a valid value for "+r+".");return!0},Date.validateMillisecond=function(t){return Date._validate(t,0,999,"milliseconds")},Date.validateSecond=function(t){return Date._validate(t,0,59,"seconds")},Date.validateMinute=function(t){return Date._validate(t,0,59,"minutes")},Date.validateHour=function(t){return Date._validate(t,0,23,"hours")},Date.validateDay=function(t,e,n){return Date._validate(t,1,Date.getDaysInMonth(e,n),"days")},Date.validateMonth=function(t){return Date._validate(t,0,11,"months")},Date.validateYear=function(t){return Date._validate(t,1,9999,"seconds")},Date.prototype.set=function(t){var e=t;return e.millisecond||0===e.millisecond||(e.millisecond=-1),e.second||0===e.second||(e.second=-1),e.minute||0===e.minute||(e.minute=-1),e.hour||0===e.hour||(e.hour=-1),e.day||0===e.day||(e.day=-1),e.month||0===e.month||(e.month=-1),e.year||0===e.year||(e.year=-1),-1!=e.millisecond&&Date.validateMillisecond(e.millisecond)&&this.addMilliseconds(e.millisecond-this.getMilliseconds()),-1!=e.second&&Date.validateSecond(e.second)&&this.addSeconds(e.second-this.getSeconds()),-1!=e.minute&&Date.validateMinute(e.minute)&&this.addMinutes(e.minute-this.getMinutes()),-1!=e.hour&&Date.validateHour(e.hour)&&this.addHours(e.hour-this.getHours()),-1!==e.month&&Date.validateMonth(e.month)&&this.addMonths(e.month-this.getMonth()),-1!=e.year&&Date.validateYear(e.year)&&this.addYears(e.year-this.getFullYear()),-1!=e.day&&Date.validateDay(e.day,this.getFullYear(),this.getMonth())&&this.addDays(e.day-this.getDate()),e.timezone&&this.setTimezone(e.timezone),e.timezoneOffset&&this.setTimezoneOffset(e.timezoneOffset),this},Date.prototype.clearTime=function(){return this.setHours(0),this.setMinutes(0),this.setSeconds(0),this.setMilliseconds(0),this},Date.prototype.isLeapYear=function(){var t=this.getFullYear();return t%4===0&&t%100!==0||t%400===0},Date.prototype.isWeekday=function(){return!(this.is().sat()||this.is().sun())},Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth())},Date.prototype.moveToFirstDayOfMonth=function(){return this.set({day:1})},Date.prototype.moveToLastDayOfMonth=function(){return this.set({day:this.getDaysInMonth()})},Date.prototype.moveToDayOfWeek=function(t,e){var n=(t-this.getDay()+7*(e||1))%7;return this.addDays(0===n?n+=7*(e||1):n)},Date.prototype.moveToMonth=function(t,e){var n=(t-this.getMonth()+12*(e||1))%12;return this.addMonths(0===n?n+=12*(e||1):n)},Date.prototype.getDayOfYear=function(){return Math.floor((this-new Date(this.getFullYear(),0,1))/864e5)},Date.prototype.getWeekOfYear=function(t){var e=this.getFullYear(),n=this.getMonth(),r=this.getDate(),a=t||Date.CultureInfo.firstDayOfWeek,o=8-new Date(e,0,1).getDay();8==o&&(o=1);var i=(Date.UTC(e,n,r,0,0,0)-Date.UTC(e,0,1,0,0,0))/864e5+1,s=Math.floor((i-o+7)/7);if(s===a){e--;var u=8-new Date(e,0,1).getDay();s=2==u||8==u?53:52}return s},Date.prototype.isDST=function(){return console.log("isDST"),"D"==this.toString().match(/(E|C|M|P)(S|D)T/)[2]},Date.prototype.getTimezone=function(){return Date.getTimezoneAbbreviation(this.getUTCOffset,this.isDST())},Date.prototype.setTimezoneOffset=function(t){var e=this.getTimezoneOffset(),n=-6*Number(t)/10;return this.addMinutes(n-e),this},Date.prototype.setTimezone=function(t){return this.setTimezoneOffset(Date.getTimezoneOffset(t))},Date.prototype.getUTCOffset=function(){var t,e=-10*this.getTimezoneOffset()/6;return 0>e?(t=(e-1e4).toString(),t[0]+t.substr(2)):(t=(e+1e4).toString(),"+"+t.substr(1))},Date.prototype.getDayName=function(t){return t?Date.CultureInfo.abbreviatedDayNames[this.getDay()]:Date.CultureInfo.dayNames[this.getDay()]},Date.prototype.getMonthName=function(t){return t?Date.CultureInfo.abbreviatedMonthNames[this.getMonth()]:Date.CultureInfo.monthNames[this.getMonth()]},Date.prototype._toString=Date.prototype.toString,Date.prototype.toString=function(t){var e=this,n=function(t){return 1==t.toString().length?"0"+t:t};return t?t.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,function(t){switch(t){case"hh":return n(e.getHours()<13?e.getHours():e.getHours()-12);case"h":return e.getHours()<13?e.getHours():e.getHours()-12;case"HH":return n(e.getHours());case"H":return e.getHours();case"mm":return n(e.getMinutes());case"m":return e.getMinutes();case"ss":return n(e.getSeconds());case"s":return e.getSeconds();case"yyyy":return e.getFullYear();case"yy":return e.getFullYear().toString().substring(2,4);case"dddd":return e.getDayName();case"ddd":return e.getDayName(!0);case"dd":return n(e.getDate());case"d":return e.getDate().toString();case"MMMM":return e.getMonthName();case"MMM":return e.getMonthName(!0);case"MM":return n(e.getMonth()+1);case"M":return e.getMonth()+1;case"t":return e.getHours()<12?Date.CultureInfo.amDesignator.substring(0,1):Date.CultureInfo.pmDesignator.substring(0,1);case"tt":return e.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator;case"zzz":case"zz":case"z":return""}}):this._toString()},Date.now=function(){return new Date},Date.today=function(){return Date.now().clearTime()},Date.prototype._orient=1,Date.prototype.next=function(){return this._orient=1,this},Date.prototype.last=Date.prototype.prev=Date.prototype.previous=function(){return this._orient=-1,this},Date.prototype._is=!1,Date.prototype.is=function(){return this._is=!0,this},Number.prototype._dateElement="day",Number.prototype.fromNow=function(){var t={};return t[this._dateElement]=this,Date.now().add(t)},Number.prototype.ago=function(){var t={};return t[this._dateElement]=-1*this,Date.now().add(t)},function(){for(var t,e=Date.prototype,n=Number.prototype,r="sunday monday tuesday wednesday thursday friday saturday".split(/\s/),a="january february march april may june july august september october november december".split(/\s/),o="Millisecond Second Minute Hour Day Week Month Year".split(/\s/),i=function(t){return function(){return this._is?(this._is=!1,this.getDay()==t):this.moveToDayOfWeek(t,this._orient)}},s=0;s<r.length;s++)e[r[s]]=e[r[s].substring(0,3)]=i(s);for(var u=function(t){return function(){return this._is?(this._is=!1,this.getMonth()===t):this.moveToMonth(t,this._orient)}},h=0;h<a.length;h++)e[a[h]]=e[a[h].substring(0,3)]=u(h);for(var c=function(t){return function(){return"s"!=t.substring(t.length-1)&&(t+="s"),this["add"+t](this._orient)}},d=function(t){return function(){return this._dateElement=t,this}},l=0;l<o.length;l++)t=o[l].toLowerCase(),e[t]=e[t+"s"]=c(o[l]),n[t]=n[t+"s"]=d(t)}(),Date.prototype.toJSONString=function(){return this.toString("yyyy-MM-ddThh:mm:ssZ")},Date.prototype.toShortDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern)},Date.prototype.toLongDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.longDatePattern)},Date.prototype.toShortTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern)},Date.prototype.toLongTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.longTimePattern)},Date.prototype.getOrdinal=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},function(){Date.Parsing={Exception:function(t){this.message="Parse error at '"+t.substring(0,10)+" ...'"}};for(var t=Date.Parsing,e=t.Operators={rtoken:function(e){return function(n){var r=n.match(e);if(r)return[r[0],n.substring(r[0].length)];throw new t.Exception(n)}},token:function(){return function(t){return e.rtoken(new RegExp("^s*"+t+"s*"))(t)}},stoken:function(t){return e.rtoken(new RegExp("^"+t))},until:function(t){return function(e){for(var n=[],r=null;e.length;){try{r=t.call(this,e)}catch(a){n.push(r[0]),e=r[1];continue}break}return[n,e]}},many:function(t){return function(e){for(var n=[],r=null;e.length;){try{r=t.call(this,e)}catch(a){return[n,e]}n.push(r[0]),e=r[1]}return[n,e]}},optional:function(t){return function(e){var n=null;try{n=t.call(this,e)}catch(r){return[null,e]}return[n[0],n[1]]}},not:function(e){return function(n){try{e.call(this,n)}catch(r){return[null,n]}throw new t.Exception(n)}},ignore:function(t){return t?function(e){var n=null;return n=t.call(this,e),[null,n[1]]}:null},product:function(){for(var t=arguments[0],n=Array.prototype.slice.call(arguments,1),r=[],a=0;a<t.length;a++)r.push(e.each(t[a],n));return r},cache:function(e){var n={},r=null;return function(a){try{r=n[a]=n[a]||e.call(this,a)}catch(o){r=n[a]=o}if(r instanceof t.Exception)throw r;return r}},any:function(){var e=arguments;return function(n){for(var r=null,a=0;a<e.length;a++)if(null!=e[a]){try{r=e[a].call(this,n)}catch(o){r=null}if(r)return r}throw new t.Exception(n)}},each:function(){var e=arguments;return function(n){for(var r=[],a=null,o=0;o<e.length;o++)if(null!=e[o]){try{a=e[o].call(this,n)}catch(i){throw new t.Exception(n)}r.push(a[0]),n=a[1]}return[r,n]}},all:function(){var t=arguments,e=e;return e.each(e.optional(t))},sequence:function(n,r,a){return r=r||e.rtoken(/^\s*/),a=a||null,1==n.length?n[0]:function(e){for(var o=null,i=null,s=[],u=0;u<n.length;u++){try{o=n[u].call(this,e)}catch(h){break}s.push(o[0]);try{i=r.call(this,o[1])}catch(c){i=null;break}e=i[1]}if(!o)throw new t.Exception(e);if(i)throw new t.Exception(i[1]);if(a)try{o=a.call(this,o[1])}catch(d){throw new t.Exception(o[1])}return[s,o?o[1]:e]}},between:function(t,n,a){a=a||t;var o=e.each(e.ignore(t),n,e.ignore(a));return function(t){var e=o.call(this,t);return[[e[0][0],r[0][2]],e[1]]}},list:function(t,n,r){return n=n||e.rtoken(/^\s*/),r=r||null,t instanceof Array?e.each(e.product(t.slice(0,-1),e.ignore(n)),t.slice(-1),e.ignore(r)):e.each(e.many(e.each(t,e.ignore(n))),px,e.ignore(r))},set:function(n,r,a){return r=r||e.rtoken(/^\s*/),a=a||null,function(o){for(var i=null,s=null,u=null,h=null,c=[[],o],d=!1,l=0;l<n.length;l++){u=null,s=null,i=null,d=1==n.length;try{i=n[l].call(this,o)}catch(y){continue}if(h=[[i[0]],i[1]],i[1].length>0&&!d)try{u=r.call(this,i[1])}catch(f){d=!0}else d=!0;if(d||0!==u[1].length||(d=!0),!d){for(var m=[],p=0;p<n.length;p++)l!=p&&m.push(n[p]);s=e.set(m,r).call(this,u[1]),s[0].length>0&&(h[0]=h[0].concat(s[0]),h[1]=s[1])}if(h[1].length<c[1].length&&(c=h),0===c[1].length)break}if(0===c[0].length)return c;if(a){try{u=a.call(this,c[1])}catch(g){throw new t.Exception(c[1])}c[1]=u[1]}return c}},forward:function(t,e){return function(n){return t[e].call(this,n)}},replace:function(t,e){return function(n){var r=t.call(this,n);return[e,r[1]]}},process:function(t,e){return function(n){var r=t.call(this,n);return[e.call(this,r[0]),r[1]]}},min:function(e,n){return function(r){var a=n.call(this,r);if(a[0].length<e)throw new t.Exception(r);return a}}},n=function(t){return function(){var e=null,n=[];if(arguments.length>1?e=Array.prototype.slice.call(arguments):arguments[0]instanceof Array&&(e=arguments[0]),!e)return t.apply(null,arguments);for(var r=0,a=e.shift();r<a.length;r++)return e.unshift(a[r]),n.push(t.apply(null,e)),e.shift(),n}},a="optional not ignore cache".split(/\s/),o=0;o<a.length;o++)e[a[o]]=n(e[a[o]]);for(var i=function(t){return function(){return arguments[0]instanceof Array?t.apply(null,arguments[0]):t.apply(null,arguments)}},s="each any all".split(/\s/),u=0;u<s.length;u++)e[s[u]]=i(e[s[u]])}(),function(){var t=function(e){for(var n=[],r=0;r<e.length;r++)e[r]instanceof Array?n=n.concat(t(e[r])):e[r]&&n.push(e[r]);return n};Date.Grammar={},Date.Translator={hour:function(t){return function(){this.hour=Number(t)}},minute:function(t){return function(){this.minute=Number(t)}},second:function(t){return function(){this.second=Number(t)}},meridian:function(t){return function(){this.meridian=t.slice(0,1).toLowerCase()}},timezone:function(t){return function(){var e=t.replace(/[^\d\+\-]/g,"");e.length?this.timezoneOffset=Number(e):this.timezone=t.toLowerCase()}},day:function(t){var e=t[0];return function(){this.day=Number(e.match(/\d+/)[0])}},month:function(t){return function(){this.month=3==t.length?Date.getMonthNumberFromName(t):Number(t)-1}},year:function(t){return function(){var e=Number(t);this.year=t.length>2?e:e+(e+2e3<Date.CultureInfo.twoDigitYearMax?2e3:1900)}},rday:function(t){return function(){switch(t){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0,this.now=!0}}},finishExact:function(t){t=t instanceof Array?t:[t];var e=new Date;this.year=e.getFullYear(),this.month=e.getMonth(),this.day=1,this.hour=0,this.minute=0,this.second=0;for(var n=0;n<t.length;n++)t[n]&&t[n].call(this);if(this.hour="p"==this.meridian&&this.hour<13?this.hour+12:this.hour,this.day>Date.getDaysInMonth(this.year,this.month))throw new RangeError(this.day+" is not a valid value for days.");var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);return this.timezone?r.set({timezone:this.timezone}):this.timezoneOffset&&r.set({timezoneOffset:this.timezoneOffset}),r},finish:function(e){if(e=e instanceof Array?t(e):[e],0===e.length)return null;for(var n=0;n<e.length;n++)"function"==typeof e[n]&&e[n].call(this);if(this.now)return new Date;var r=Date.today(),a=!(null==this.days&&!this.orient&&!this.operator);if(a){var o,i,s;return s="past"==this.orient||"subtract"==this.operator?-1:1,this.weekday&&(this.unit="day",o=Date.getDayNumberFromName(this.weekday)-r.getDay(),i=7,this.days=o?(o+s*i)%i:s*i),this.month&&(this.unit="month",o=this.month-r.getMonth(),i=12,this.months=o?(o+s*i)%i:s*i,this.month=null),this.unit||(this.unit="day"),(null==this[this.unit+"s"]||null!=this.operator)&&(this.value||(this.value=1),"week"==this.unit&&(this.unit="day",this.value=7*this.value),this[this.unit+"s"]=this.value*s),r.add(this)}return this.meridian&&this.hour&&(this.hour=this.hour<13&&"p"==this.meridian?this.hour+12:this.hour),this.weekday&&!this.day&&(this.day=r.addDays(Date.getDayNumberFromName(this.weekday)-r.getDay()).getDate()),this.month&&!this.day&&(this.day=1),r.set(this)}};var e,n=Date.Parsing.Operators,r=Date.Grammar,a=Date.Translator;r.datePartDelimiter=n.rtoken(/^([\s\-\.\,\/\x27]+)/),r.timePartDelimiter=n.stoken(":"),r.whiteSpace=n.rtoken(/^\s*/),r.generalDelimiter=n.rtoken(/^(([\s\,]|at|on)+)/);var o={};r.ctoken=function(t){var e=o[t];if(!e){for(var r=Date.CultureInfo.regexPatterns,a=t.split(/\s+/),i=[],s=0;s<a.length;s++)i.push(n.replace(n.rtoken(r[a[s]]),a[s]));e=o[t]=n.any.apply(null,i)}return e},r.ctoken2=function(t){return n.rtoken(Date.CultureInfo.regexPatterns[t])},r.h=n.cache(n.process(n.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),a.hour)),r.hh=n.cache(n.process(n.rtoken(/^(0[0-9]|1[0-2])/),a.hour)),r.H=n.cache(n.process(n.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),a.hour)),r.HH=n.cache(n.process(n.rtoken(/^([0-1][0-9]|2[0-3])/),a.hour)),r.m=n.cache(n.process(n.rtoken(/^([0-5][0-9]|[0-9])/),a.minute)),r.mm=n.cache(n.process(n.rtoken(/^[0-5][0-9]/),a.minute)),r.s=n.cache(n.process(n.rtoken(/^([0-5][0-9]|[0-9])/),a.second)),r.ss=n.cache(n.process(n.rtoken(/^[0-5][0-9]/),a.second)),r.hms=n.cache(n.sequence([r.H,r.mm,r.ss],r.timePartDelimiter)),r.t=n.cache(n.process(r.ctoken2("shortMeridian"),a.meridian)),r.tt=n.cache(n.process(r.ctoken2("longMeridian"),a.meridian)),r.z=n.cache(n.process(n.rtoken(/^(\+|\-)?\s*\d\d\d\d?/),a.timezone)),r.zz=n.cache(n.process(n.rtoken(/^(\+|\-)\s*\d\d\d\d/),a.timezone)),r.zzz=n.cache(n.process(r.ctoken2("timezone"),a.timezone)),r.timeSuffix=n.each(n.ignore(r.whiteSpace),n.set([r.tt,r.zzz])),r.time=n.each(n.optional(n.ignore(n.stoken("T"))),r.hms,r.timeSuffix),r.d=n.cache(n.process(n.each(n.rtoken(/^([0-2]\d|3[0-1]|\d)/),n.optional(r.ctoken2("ordinalSuffix"))),a.day)),r.dd=n.cache(n.process(n.each(n.rtoken(/^([0-2]\d|3[0-1])/),n.optional(r.ctoken2("ordinalSuffix"))),a.day)),r.ddd=r.dddd=n.cache(n.process(r.ctoken("sun mon tue wed thu fri sat"),function(t){return function(){this.weekday=t}})),r.M=n.cache(n.process(n.rtoken(/^(1[0-2]|0\d|\d)/),a.month)),r.MM=n.cache(n.process(n.rtoken(/^(1[0-2]|0\d)/),a.month)),r.MMM=r.MMMM=n.cache(n.process(r.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),a.month)),r.y=n.cache(n.process(n.rtoken(/^(\d\d?)/),a.year)),r.yy=n.cache(n.process(n.rtoken(/^(\d\d)/),a.year)),r.yyy=n.cache(n.process(n.rtoken(/^(\d\d?\d?\d?)/),a.year)),r.yyyy=n.cache(n.process(n.rtoken(/^(\d\d\d\d)/),a.year)),e=function(){return n.each(n.any.apply(null,arguments),n.not(r.ctoken2("timeContext")))},r.day=e(r.d,r.dd),r.month=e(r.M,r.MMM),r.year=e(r.yyyy,r.yy),r.orientation=n.process(r.ctoken("past future"),function(t){return function(){this.orient=t}}),r.operator=n.process(r.ctoken("add subtract"),function(t){return function(){this.operator=t}}),r.rday=n.process(r.ctoken("yesterday tomorrow today now"),a.rday),r.unit=n.process(r.ctoken("minute hour day week month year"),function(t){return function(){this.unit=t}}),r.value=n.process(n.rtoken(/^\d\d?(st|nd|rd|th)?/),function(t){return function(){this.value=t.replace(/\D/g,"")}}),r.expression=n.set([r.rday,r.operator,r.value,r.unit,r.orientation,r.ddd,r.MMM]),e=function(){return n.set(arguments,r.datePartDelimiter)},r.mdy=e(r.ddd,r.month,r.day,r.year),r.ymd=e(r.ddd,r.year,r.month,r.day),r.dmy=e(r.ddd,r.day,r.month,r.year),r.date=function(t){return(r[Date.CultureInfo.dateElementOrder]||r.mdy).call(this,t)},r.format=n.process(n.many(n.any(n.process(n.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(t){if(r[t])return r[t];throw Date.Parsing.Exception(t)}),n.process(n.rtoken(/^[^dMyhHmstz]+/),function(t){return n.ignore(n.stoken(t))}))),function(t){return n.process(n.each.apply(null,t),a.finishExact)});var i={},s=function(t){return i[t]=i[t]||r.format(t)[0]};r.formats=function(t){if(t instanceof Array){for(var e=[],r=0;r<t.length;r++)e.push(s(t[r]));return n.any.apply(null,e)}return s(t)},r._formats=r.formats(["yyyy-MM-ddTHH:mm:ss","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","d"]),r._start=n.process(n.set([r.date,r.time,r.expression],r.generalDelimiter,r.whiteSpace),a.finish),r.start=function(t){try{var e=r._formats.call({},t);if(0===e[1].length)return e}catch(n){}return r._start.call({},t)}}(),Date._parse=Date.parse,Date.parse=function(t){var e=null;if(!t)return null;try{e=Date.Grammar.start.call({},t)}catch(n){return null}return 0===e[1].length?e[0]:null},Date.getParseFunction=function(t){var e=Date.Grammar.formats(t);return function(t){var n=null;try{n=e.call({},t)}catch(r){return null}return 0===n[1].length?n[0]:null}},Date.parseExact=function(t,e){return Date.getParseFunction(e)(t)};

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.4.7
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(Q,X,w){'use strict';function I(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.7/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Za(b))return!1;var a="length"in Object(b)&&b.length;
	return b.nodeType===pa&&a?!0:G(b)||J(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(x(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(J(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(mc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
	a.call(c,b[d],d,b);else for(d in b)ta.call(b,d)&&a.call(c,b[d],d,b);return b}function nc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function oc(b){return function(a,c){b(c,a)}}function Ud(){return++nb}function pc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Mb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var h=a[e];if(C(h)||x(h))for(var g=Object.keys(h),l=0,k=g.length;l<k;l++){var n=g[l],p=h[n];c&&C(p)?ea(p)?b[n]=new Date(p.valueOf()):Oa(p)?
	b[n]=new RegExp(p):(C(b[n])||(b[n]=J(p)?[]:{}),Mb(b[n],[p],!0)):b[n]=p}}pc(b,d);return b}function P(b){return Mb(b,ua.call(arguments,1),!1)}function Vd(b){return Mb(b,ua.call(arguments,1),!0)}function Y(b){return parseInt(b,10)}function Nb(b,a){return P(Object.create(b),a)}function y(){}function $a(b){return b}function qa(b){return function(){return b}}function qc(b){return x(b.toString)&&b.toString!==Object.prototype.toString}function v(b){return"undefined"===typeof b}function A(b){return"undefined"!==
	typeof b}function C(b){return null!==b&&"object"===typeof b}function mc(b){return null!==b&&"object"===typeof b&&!rc(b)}function G(b){return"string"===typeof b}function V(b){return"number"===typeof b}function ea(b){return"[object Date]"===va.call(b)}function x(b){return"function"===typeof b}function Oa(b){return"[object RegExp]"===va.call(b)}function Za(b){return b&&b.window===b}function ab(b){return b&&b.$evalAsync&&b.$watch}function bb(b){return"boolean"===typeof b}function sc(b){return!(!b||!(b.nodeName||
	b.prop&&b.attr&&b.find))}function Wd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function wa(b){return F(b.nodeName||b[0]&&b[0].nodeName)}function cb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function ha(b,a,c,d){if(Za(b)||ab(b))throw Ea("cpws");if(tc.test(va.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];C(b)&&(c.push(b),d.push(a));var e;if(J(b))for(e=a.length=0;e<b.length;e++)a.push(ha(b[e],null,c,d));else{var f=a.$$hashKey;J(a)?
	a.length=0:m(a,function(b,c){delete a[c]});if(mc(b))for(e in b)a[e]=ha(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=ha(b[e],null,c,d));else for(e in b)ta.call(b,e)&&(a[e]=ha(b[e],null,c,d));pc(a,f)}}else if(a=b,C(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(J(b))return ha(b,[],c,d);if(tc.test(va.call(b)))a=new b.constructor(b);else if(ea(b))a=new Date(b.getTime());else if(Oa(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=
	b.lastIndex;else if(x(b.cloneNode))a=b.cloneNode(!0);else return e=Object.create(rc(b)),ha(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ja(b,a){if(J(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(C(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(J(b)){if(!J(a))return!1;if((c=b.length)==a.length){for(d=0;d<
	c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?ka(b.getTime(),a.getTime()):!1;if(Oa(b))return Oa(a)?b.toString()==a.toString():!1;if(ab(b)||ab(a)||Za(b)||Za(a)||J(a)||ea(a)||Oa(a))return!1;c=fa();for(d in b)if("$"!==d.charAt(0)&&!x(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c)&&"$"!==d.charAt(0)&&A(a[d])&&!x(a[d]))return!1;return!0}return!1}function db(b,a,c){return b.concat(ua.call(a,c))}function uc(b,a){var c=2<arguments.length?ua.call(arguments,2):[];
	return!x(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,db(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=w:Za(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":ab(a)&&(c="$SCOPE");return c}function eb(b,a){if("undefined"===typeof b)return w;V(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function vc(b){return G(b)?JSON.parse(b):b}function wc(b,
	a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Ob(b,a,c){c=c?-1:1;var d=wc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function xa(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===Pa?F(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+F(b)})}catch(d){return F(c)}}function xc(b){try{return decodeURIComponent(b)}catch(a){}}
	function yc(b){var a={};m((b||"").split("&"),function(b){var d,e,f;b&&(e=b=b.replace(/\+/g,"%20"),d=b.indexOf("="),-1!==d&&(e=b.substring(0,d),f=b.substring(d+1)),e=xc(e),A(e)&&(f=A(f)?xc(f):!0,ta.call(a,e)?J(a[e])?a[e].push(f):a[e]=[a[e],f]:a[e]=f))});return a}function Pb(b){var a=[];m(b,function(b,d){J(b)?m(b,function(b){a.push(la(d,!0)+(!0===b?"":"="+la(b,!0)))}):a.push(la(d,!0)+(!0===b?"":"="+la(b,!0)))});return a.length?a.join("&"):""}function ob(b){return la(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,
	"=").replace(/%2B/gi,"+")}function la(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Yd(b,a){var c,d,e=Qa.length;for(d=0;d<e;++d)if(c=Qa[d]+a,G(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};m(Qa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Qa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":",
	"\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,"strict-di"),a(c,d?[d]:[],e))}function zc(b,a,c){C(c)||(c={});c=P({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===X?"document":xa(b);throw Ea("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=fb(a,c.strictDi);d.invoke(["$rootScope",
	"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q&&e.test(Q.name)&&(c.debugInfoEnabled=!0,Q.name=Q.name.replace(e,""));if(Q&&!f.test(Q.name))return d();Q.name=Q.name.replace(f,"");da.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};x(da.resumeDeferredBootstrap)&&da.resumeDeferredBootstrap()}function $d(){Q.name="NG_ENABLE_DEBUG_INFO!"+Q.name;Q.location.reload()}
	function ae(b){b=da.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}function Ac(b,a){a=a||"_";return b.replace(be,function(b,d){return(d?a:"")+b.toLowerCase()})}function ce(){var b;if(!Bc){var a=pb();(ra=v(a)?Q.jQuery:a?Q[a]:w)&&ra.fn.on?(B=ra,P(ra.fn,{scope:Ra.scope,isolateScope:Ra.isolateScope,controller:Ra.controller,injector:Ra.injector,inheritedData:Ra.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var d;if(Qb)Qb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=
	ra._data(f,"events"))&&d.$destroy&&ra(f).triggerHandler("$destroy");b(a)}):B=R;da.element=B;Bc=!0}}function qb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Sa(b,a,c){c&&J(b)&&(b=b[b.length-1]);qb(x(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ta(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Cc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,h=0;h<f;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&
	x(b)?uc(e,b):b}function rb(b){for(var a=b[0],c=b[b.length-1],d,e=1;a!==c&&(a=a.nextSibling);e++)if(d||b[e]!==a)d||(d=B(ua.call(b,0,e))),d.push(a);return d||b}function fa(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=I("$injector"),d=I("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||I;return a(b,"module",function(){var b={};return function(f,h,g){if("hasOwnProperty"===f)throw d("badname","module");h&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,
	c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return E}}function b(a,c){return function(b,e){e&&x(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return E}}if(!h)throw c("nomod",f);var d=[],e=[],r=[],t=a("$injector","invoke","push",e),E={_invokeQueue:d,_configBlocks:e,_runBlocks:r,requires:h,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
	"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:t,run:function(a){r.push(a);return this}};g&&t(g);return E})}})}function ee(b){P(b,{bootstrap:zc,copy:ha,extend:P,merge:Vd,equals:ka,element:B,forEach:m,injector:fb,noop:y,bind:uc,toJson:eb,fromJson:vc,identity:$a,isUndefined:v,isDefined:A,isString:G,isFunction:x,isObject:C,isNumber:V,isElement:sc,isArray:J,
	version:fe,isDate:ea,lowercase:F,uppercase:sb,callbacks:{counter:0},getTestability:ae,$$minErr:I,$$csp:Fa,reloadWithDebugInfo:$d});Rb=de(Q);Rb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Dc).directive({a:he,input:Ec,textarea:Ec,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,
	ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Fc,ngPattern:Fc,required:Gc,ngRequired:Gc,minlength:Hc,ngMinlength:Hc,maxlength:Ic,ngMaxlength:Ic,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(tb).directive(Jc);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,
	$filter:Kc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,$httpBackend:ff,$xhrFactory:gf,$location:hf,$log:jf,$parse:kf,$rootScope:lf,$q:mf,$$q:nf,$sce:of,$sceDelegate:pf,$sniffer:qf,$templateCache:rf,$templateRequest:sf,$$testability:tf,$timeout:uf,$window:vf,$$rAF:wf,$$jqLite:xf,$$HashMap:yf,$$cookieReader:zf})}])}function gb(b){return b.replace(Af,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Bf,"Moz$1")}function Lc(b){b=b.nodeType;
	return b===pa||!b||9===b}function Mc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Cf.exec(b)||["",""])[1].toLowerCase();d=ma[d]||ma._default;c.innerHTML=d[1]+b.replace(Df,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=db(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";m(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;G(b)&&(b=T(b),
	a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=X;var c;b=(c=Ef.exec(b))?[a.createElement(c[1])]:(c=Mc(b,a))?c.childNodes:[]}Nc(this,b)}function Ub(b){return b.cloneNode(!0)}function ub(b,a){a||vb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)vb(c[d])}function Oc(b,a,c,d){if(A(d))throw Tb("offargs");var e=(d=wb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(" "),function(a){if(A(c)){var d=e[a];cb(d||[],c);if(d&&0<
	d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function vb(b,a){var c=b.ng339,d=c&&hb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Oc(b)),delete hb[c],b.ng339=w))}function wb(b,a){var c=b.ng339,c=c&&hb[c];a&&!c&&(b.ng339=c=++Ff,c=hb[c]={events:{},data:{},handle:w});return c}function Vb(b,a,c){if(Lc(b)){var d=A(c),e=!d&&a&&!C(a),f=!a;b=(b=wb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;
	if(e)return b&&b[a];P(b,a)}}}function xb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function yb(b,a){a&&b.setAttribute&&m(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function zb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&
	(c+=a+" ")});b.setAttribute("class",T(c))}}function Nc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Pc(b,a){return Ab(b,"$"+(a||"ngController")+"Controller")}function Ab(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=J(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if(A(c=B.data(b,a[d])))return c;b=b.parentNode||11===b.nodeType&&b.host}}function Qc(b){for(ub(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
	function Wb(b,a){a||ub(b);var c=b.parentNode;c&&c.removeChild(b)}function Gf(b,a){a=a||Q;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Rc(b,a){var c=Bb[a.toLowerCase()];return c&&Sc[wa(b)]&&c}function Hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],h=f?f.length:0;if(h){if(v(c.immediatePropagationStopped)){var g=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
	!0;c.stopPropagation&&c.stopPropagation();g&&g.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<h&&(f=ja(f));for(var l=0;l<h;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function xf(){this.$get=function(){return P(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return zb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;
	if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ud)():c+":"+b}function Ua(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function If(b){return(b=b.toString().replace(Tc,"").match(Uc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(b,a){function c(a){return function(b,c){if(C(b))m(b,oc(a));else return a(b,c)}}function d(a,b){Ta(a,"service");if(x(b)||J(b))b=r.instantiate(b);
	if(!b.$get)throw Ha("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=E.invoke(b,this);if(v(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function h(a){qb(v(a)||J(a),"modulesToLoad","not an array");var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{G(a)?(c=Rb(a),b=b.concat(h(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):
	x(a)?b.push(r.invoke(a)):J(a)?b.push(r.invoke(a)):Sa(a,"module")}catch(e){throw J(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=
	f,f=null);var h=[],k=fb.$$annotate(b,a,g),l,r,p;r=0;for(l=k.length;r<l;r++){p=k[r];if("string"!==typeof p)throw Ha("itkn",p);h.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}J(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((J(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return C(a)||x(a)?a:d},get:d,annotate:fb.$$annotate,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new Ua([],!0),p={$provide:{provider:c(d),
	factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,qa(b),!1)}),constant:c(function(a,b){Ta(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=E.invoke(d,c);return E.invoke(b,null,{$delegate:a})}}}},r=p.$injector=g(p,function(a,b){da.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),t={},E=t.$injector=g(t,function(a,b){var c=r.get(a+"Provider",b);
	return E.invoke(c.$get,c,w,a)});m(h(b),function(a){a&&E.invoke(a)});return E}function Qe(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=h.yOffset;x(c)?c=c():sc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,
	a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function h(a){a=G(a)?a:c.hash();var b;a?(b=g.getElementById(a))?f(b):(b=e(g.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Gf(function(){d.$evalAsync(h)})});return h}]}function ib(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;J(b)&&(b=b.join(" "));J(a)&&(a=a.join(" "));return b+" "+a}function Jf(b){G(b)&&(b=b.split(" "));var a=fa();m(b,function(b){b.length&&
	(a[b]=!0)});return a}function Ia(b){return C(b)?b:{}}function Kf(b,a,c,d){function e(a){try{a.apply(null,ua.call(arguments,1))}finally{if(E--,0===E)for(;K.length;)try{K.pop()()}catch(b){c.error(b)}}}function f(){ia=null;h();g()}function h(){a:{try{u=n.state;break a}catch(a){}u=void 0}u=v(u)?null:u;ka(u,L)&&(u=L);L=u}function g(){if(z!==l.url()||q!==u)z=l.url(),q=u,m(O,function(a){a(l.url(),u)})}var l=this,k=b.location,n=b.history,p=b.setTimeout,r=b.clearTimeout,t={};l.isMock=!1;var E=0,K=[];l.$$completeOutstandingRequest=
	e;l.$$incOutstandingRequestCount=function(){E++};l.notifyWhenNoOutstandingRequests=function(a){0===E?a():K.push(a)};var u,q,z=k.href,N=a.find("base"),ia=null;h();q=u;l.url=function(a,c,e){v(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=q===e;if(z===a&&(!d.history||f))return l;var g=z&&Ja(z)===Ja(a);z=a;q=e;if(!d.history||g&&f){if(!g||ia)ia=a;c?k.replace(a):g?(c=k,e=a.indexOf("#"),e=-1===e?"":a.substr(e),c.hash=e):k.href=a;k.href!==a&&(ia=a)}else n[c?"replaceState":
	"pushState"](e,"",a),h(),q=u;return l}return ia||k.href.replace(/%27/g,"'")};l.state=function(){return u};var O=[],H=!1,L=null;l.onUrlChange=function(a){if(!H){if(d.history)B(b).on("popstate",f);B(b).on("hashchange",f);H=!0}O.push(a);return a};l.$$applicationDestroyed=function(){B(b).off("hashchange popstate",f)};l.$$checkUrlChange=g;l.baseHref=function(){var a=N.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;E++;c=p(function(){delete t[c];e(a)},b||0);
	t[c]=!0;return c};l.defer.cancel=function(a){return t[a]?(delete t[a],r(a),e(y),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Kf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=p&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw I("$cacheFactory")("iid",b);var h=0,g=P({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,r=null;return a[b]=
	{put:function(a,b){if(!v(b)){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in l||h++;l[a]=b;h>k&&this.remove(r.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==r&&(r=b.n);f(b.n,b.p);delete n[a]}delete l[a];h--},removeAll:function(){l={};h=0;n={};p=r=null},destroy:function(){n=g=l=null;delete a[b]},info:function(){return P({},g,{size:h})}}}var a={};b.info=function(){var b=
	{};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function rf(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Dc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||
	b!==F(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Wd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function r(a,f){Ta(a,"directive");G(a)?(d(a),qb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];m(e[a],function(e,g){try{var h=b.invoke(e);x(h)?h={compile:qa(h)}:
	!h.compile&&h.link&&(h.compile=qa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,r=h.name,n={isolateScope:null,bindToController:null};C(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,r,!0),n.isolateScope={}):n.isolateScope=c(l.scope,r,!1));C(l.bindToController)&&(n.bindToController=c(l.bindToController,r,!0));if(C(n.bindToController)){var S=l.controller,E=l.controllerAs;if(!S)throw ga("noctrl",
	r);var ca;a:if(E&&G(E))ca=E;else{if(G(S)){var m=Vc.exec(S);if(m){ca=m[3];break a}}ca=void 0}if(!ca)throw ga("noident",r);}var s=k.$$bindings=n;C(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(w){d(w)}});return f}])),e[a].push(f)):m(a,oc(r));return this};this.aHrefSanitizationWhitelist=function(b){return A(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return A(b)?(a.imgSrcSanitizationWhitelist(b),
	this):a.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return A(a)?(n=a,this):n};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,q,z,N,ia,O,H){function L(a,b){try{a.addClass(b)}catch(c){}}function W(a,b,c,d,e){a instanceof B||(a=B(a));m(a,function(b,c){b.nodeType==Pa&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=
	S(a,b,a,c,d,e);W.$$addScopeClass(a);var g=null;return function(b,c,d){qb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Xb(g,B("<div>").append(a).html())):c?Ra.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);W.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,
	b,c,d,e,f){function g(a,c,d,e){var f,k,l,r,n,t,O;if(q)for(O=Array(c.length),r=0;r<h.length;r+=3)f=h[r],O[f]=c[f];else O=c;r=0;for(n=h.length;r<n;)if(k=O[h[r++]],c=h[r++],f=h[r++],c){if(c.scope){if(l=a.$new(),W.$$addScopeInfo(B(k),l),t=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",t)}else l=a;t=c.transcludeOnThisElement?ba(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ba(a,b):null;c(f,l,k,d,t,c)}else f&&f(a,k.childNodes,w,e)}for(var h=[],k,l,r,n,q,t=0;t<a.length;t++){k=new Z;
	l=ca(a[t],[],k,0===t?d:w,e);(f=l.length?D(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&W.$$addScopeClass(k.$$element);k=f&&f.terminal||!(r=a[t].childNodes)||!r.length?null:S(r,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(t,f,k),n=!0,q=q||f;f=null}return n?g:null}function ba(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ca(a,b,c,d,e){var g=
	c.$attr,k;switch(a.nodeType){case pa:na(b,ya(wa(a)),"E",d,e);for(var l,r,n,q=a.attributes,t=0,O=q&&q.length;t<O;t++){var K=!1,H=!1;l=q[t];k=l.name;r=T(l.value);l=ya(k);if(n=ja.test(l))k=k.replace(Wc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var S=l.replace(/(Start|End)$/,"");I(S)&&l===S+"Start"&&(K=k,H=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=ya(k.toLowerCase());g[l]=k;if(n||!c.hasOwnProperty(l))c[l]=r,Rc(a,l)&&(c[l]=!0);V(a,b,r,l,n);na(b,l,"A",d,e,K,H)}a=
	a.className;C(a)&&(a=a.animVal);if(G(a)&&""!==a)for(;k=h.exec(a);)l=ya(k[2]),na(b,l,"C",d,e)&&(c[l]=T(k[3])),a=a.substr(k.index+k[0].length);break;case Pa:if(11===Wa)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Pa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);Ka(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=ya(k[1]),na(b,l,"M",d,e)&&(c[l]=T(k[2]))}catch(E){}}b.sort(M);return b}function za(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",
	b,c);a.nodeType==pa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function s(a,b,c){return function(d,e,f,g,h){e=za(e[0],b,c);return a(d,e,f,g,h)}}function D(a,b,d,e,f,g,h,k,r){function n(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=D.require;a.directiveName=y;if(u===D||D.$$isolateScope)a=$(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=D.require;b.directiveName=y;if(u===D||D.$$isolateScope)b=$(b,{isolateScope:!0});k.push(b)}}
	function t(a,b,c,d){var e;if(G(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ga("ctreq",b,a);}else if(J(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=t(a,b[g],c,d);return e||null}function O(a,b,c,d,e,f){var g=fa(),h;for(h in d){var k=d[h],l={$scope:k===u||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},r=k.controller;"@"==r&&(r=b[k.name]);l=q(r,
	l,!0,k.controllerAs);g[k.name]=l;ia||a.data("$"+k.name+"Controller",l.instance)}return g}function K(a,c,e,f,g,l){function r(a,b,c){var d;ab(a)||(c=b,b=a,a=w);ia&&(d=ca);c||(c=ia?N.parent():N);return g(a,b,d,c,za)}var n,q,H,E,ca,z,N;b===e?(f=d,N=d.$$element):(N=B(e),f=new Z(N,d));u&&(E=c.$new(!0));g&&(z=r,z.$$boundTransclude=g);ba&&(ca=O(N,f,z,ba,E,c));u&&(W.$$addScopeInfo(N,E,!0,!(L&&(L===u||L===u.$$originalDirective))),W.$$addScopeClass(N,!0),E.$$isolateBindings=u.$$isolateBindings,Y(c,f,E,E.$$isolateBindings,
	u,E));if(ca){var Va=u||S,m;Va&&ca[Va.name]&&(q=Va.$$bindings.bindToController,(H=ca[Va.name])&&H.identifier&&q&&(m=H,l.$$destroyBindings=Y(c,f,H.instance,q,Va)));for(n in ca){H=ca[n];var D=H();D!==H.instance&&(H.instance=D,N.data("$"+n+"Controller",D),H===m&&(l.$$destroyBindings(),l.$$destroyBindings=Y(c,f,D,q,Va)))}}n=0;for(l=h.length;n<l;n++)q=h[n],aa(q,q.isolateScope?E:c,N,f,q.require&&t(q.directiveName,q.require,N,ca),z);var za=c;u&&(u.template||null===u.templateUrl)&&(za=E);a&&a(za,e.childNodes,
	w,g);for(n=k.length-1;0<=n;n--)q=k[n],aa(q,q.isolateScope?E:c,N,f,q.require&&t(q.directiveName,q.require,N,ca),z)}r=r||{};for(var H=-Number.MAX_VALUE,S=r.newScopeDirective,ba=r.controllerDirectives,u=r.newIsolateScopeDirective,L=r.templateDirective,z=r.nonTlbTranscludeDirective,N=!1,m=!1,ia=r.hasElementTranscludeDirective,v=d.$$element=B(b),D,y,M,Ka=e,na,I=0,F=a.length;I<F;I++){D=a[I];var P=D.$$start,R=D.$$end;P&&(v=za(b,P,R));M=w;if(H>D.priority)break;if(M=D.scope)D.templateUrl||(C(M)?(Q("new/isolated scope",
	u||S,D,v),u=D):Q("new/isolated scope",u,D,v)),S=S||D;y=D.name;!D.templateUrl&&D.controller&&(M=D.controller,ba=ba||fa(),Q("'"+y+"' controller",ba[y],D,v),ba[y]=D);if(M=D.transclude)N=!0,D.$$tlb||(Q("transclusion",z,D,v),z=D),"element"==M?(ia=!0,H=D.priority,M=v,v=d.$$element=B(X.createComment(" "+y+": "+d[y]+" ")),b=v[0],U(f,ua.call(M,0),b),Ka=W(M,e,H,g&&g.name,{nonTlbTranscludeDirective:z})):(M=B(Ub(b)).contents(),v.empty(),Ka=W(M,e));if(D.template)if(m=!0,Q("template",L,D,v),L=D,M=x(D.template)?
	D.template(v,d):D.template,M=ha(M),D.replace){g=D;M=Sb.test(M)?Xc(Xb(D.templateNamespace,T(M))):[];b=M[0];if(1!=M.length||b.nodeType!==pa)throw ga("tplrt",y,"");U(f,v,b);F={$attr:{}};M=ca(b,[],F);var Lf=a.splice(I+1,a.length-(I+1));u&&A(M);a=a.concat(M).concat(Lf);Yc(d,F);F=a.length}else v.html(M);if(D.templateUrl)m=!0,Q("template",L,D,v),L=D,D.replace&&(g=D),K=Mf(a.splice(I,a.length-I),v,d,f,N&&Ka,h,k,{controllerDirectives:ba,newScopeDirective:S!==D&&S,newIsolateScopeDirective:u,templateDirective:L,
	nonTlbTranscludeDirective:z}),F=a.length;else if(D.compile)try{na=D.compile(v,d,Ka),x(na)?n(null,na,P,R):na&&n(na.pre,na.post,P,R)}catch(V){c(V,xa(v))}D.terminal&&(K.terminal=!0,H=Math.max(H,D.priority))}K.scope=S&&!0===S.scope;K.transcludeOnThisElement=N;K.templateOnThisElement=m;K.transclude=Ka;r.hasElementTranscludeDirective=ia;return K}function A(a){for(var b=0,c=a.length;b<c;b++)a[b]=Nb(a[b],{$$isolateScope:!0})}function na(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;
	d=a.get(d+"Directive");for(var q=0,t=d.length;q<t;q++)try{n=d[q],(v(g)||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(k&&(n=Nb(n,{$$start:k,$$end:l})),b.push(n),h=n)}catch(H){c(H)}}return h}function I(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Yc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){"class"==
	f?(L(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Mf(a,b,c,e,f,g,h,k){var l=[],r,n,q=b[0],t=a.shift(),H=Nb(t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),O=x(t.templateUrl)?t.templateUrl(b,c):t.templateUrl,E=t.templateNamespace;b.empty();d(O).then(function(d){var K,u;d=ha(d);if(t.replace){d=Sb.test(d)?Xc(Xb(E,T(d))):
	[];K=d[0];if(1!=d.length||K.nodeType!==pa)throw ga("tplrt",t.name,O);d={$attr:{}};U(e,b,K);var z=ca(K,[],d);C(t.scope)&&A(z);a=z.concat(a);Yc(c,d)}else K=q,b.html(d);a.unshift(H);r=D(a,K,c,f,b,t,g,h,k);m(e,function(a,c){a==K&&(e[c]=b[0])});for(n=S(b[0].childNodes,f);l.length;){d=l.shift();u=l.shift();var N=l.shift(),W=l.shift(),z=b[0];if(!d.$$destroyed){if(u!==q){var za=u.className;k.hasElementTranscludeDirective&&t.replace||(z=Ub(K));U(N,B(u),z);L(B(z),za)}u=r.transcludeOnThisElement?ba(d,r.transclude,
	W):W;r(n,d,z,e,u,r)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(r.transcludeOnThisElement&&(a=ba(b,r.transclude,e)),r(n,b,c,d,a,r)))}}function M(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Q(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,xa(d));}function Ka(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
	a.parent();var b=!!a.length;b&&W.$$addBindingClass(a);return function(a,c){var e=c.parent();b||W.$$addBindingClass(e);W.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=F(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return ia.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||
	"ngSrc"==b))return ia.RESOURCE_URL}function V(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var l=b(d,!0,h,f);if(l){if("multiple"===e&&"select"===wa(a))throw ga("selmulti",xa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers=fa());if(k.test(e))throw ga("nodomevents");var r=g[e];r!==d&&(l=r&&b(r,!0,h,f),d=r);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,
	a)}))}}}})}}function U(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);B.hasData(d)&&(B(c).data(B(d).data()),ra?(Qb=!0,ra.cleanData([d])):delete B.cache[d[B.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function $(a,
	b){return P(function(){return a.apply(null,arguments)},a,b)}function aa(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,xa(d))}}function Y(a,c,d,e,f,g){var h;m(e,function(e,g){var k=e.attrName,l=e.optional,r,n,q,K;switch(e.mode){case "@":l||ta.call(c,k)||(d[g]=c[k]=void 0);c.$observe(k,function(a){G(a)&&(d[g]=a)});c.$$observers[k].$$scope=a;G(c[k])&&(d[g]=b(c[k])(a));break;case "=":if(!ta.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;n=u(c[k]);K=n.literal?ka:function(a,b){return a===b||a!==a&&b!==
	b};q=n.assign||function(){r=d[g]=n(a);throw ga("nonassign",c[k],f.name);};r=d[g]=n(a);l=function(b){K(b,d[g])||(K(b,r)?q(a,b=d[g]):d[g]=b);return r=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(u(c[k],l),null,n.literal);h=h||[];h.push(l);break;case "&":n=c.hasOwnProperty(k)?u(c[k]):y;if(n===y&&l)break;d[g]=function(b){return n(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:y;return g&&e!==y?(g.$on("$destroy",e),y):e}var Z=function(a,b){if(b){var c=Object.keys(b),
	d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Z.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Zc(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=Zc(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Rc(this.$$element[0],a),g=$c[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=
	b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Ac(a,"-"));f=wa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=H(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var r=2*l,f=f+H(T(g[r]),!0),f=f+(" "+T(g[r+1]));g=T(g[2*l]).split(/\s/);f+=H(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||v(b)?this.$$element.removeAttr(e):
	this.$$element.attr(e,b));(a=this.$$observers)&&m(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=fa()),e=d[a]||(d[a]=[]);e.push(b);z.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||v(c[a])||b(c[a])});return function(){cb(e,b)}}};var da=b.startSymbol(),ea=b.endSymbol(),ha="{{"==da||"}}"==ea?$a:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,ea)},ja=/^ngAttr[A-Z]/;W.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||
	[];J(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:y;W.$$addBindingClass=n?function(a){L(a,"ng-binding")}:y;W.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:y;W.$$addScopeClass=n?function(a,b){L(a,b?"ng-isolate-scope":"ng-scope")}:y;return W}]}function ya(b){return gb(b.replace(Wc,""))}function Zc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var h=d[f],g=0;g<e.length;g++)if(h==e[g])continue a;c+=(0<c.length?
	" ":"")+h}return c}function Xc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Nf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ta(a,"controller");C(a)?P(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!C(a.$scope))throw I("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,h,g,l){var k,n,p;g=!0===g;l&&G(l)&&(p=l);if(G(f)){l=f.match(Vc);if(!l)throw Of("ctrlfmt",f);
	n=l[1];p=p||l[3];f=b.hasOwnProperty(n)?b[n]:Cc(h.$scope,n,!0)||(a?Cc(d,n,!0):w);Sa(f,n,!0)}if(g)return g=(J(f)?f[f.length-1]:f).prototype,k=Object.create(g||null),p&&e(h,p,k,n||f.name),P(function(){var a=c.invoke(f,k,h,n);a!==k&&(C(a)||x(a))&&(k=a,p&&e(h,p,k,n||f.name));return k},{instance:k,identifier:p});k=c.instantiate(f,h,n);p&&e(h,p,k,n||f.name);return k}}]}function Ye(){this.$get=["$window",function(b){return B(b.document)}]}function Ze(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,
	arguments)}}]}function Yb(b){return C(b)?ea(b)?b.toISOString():eb(b):b}function df(){this.$get=function(){return function(b){if(!b)return"";var a=[];nc(b,function(b,d){null===b||v(b)||(J(b)?m(b,function(b,c){a.push(la(d)+"="+la(Yb(b)))}):a.push(la(d)+"="+la(Yb(b))))});return a.join("&")}}}function ef(){this.$get=function(){return function(b){function a(b,e,f){null===b||v(b)||(J(b)?m(b,function(b,c){a(b,e+"["+(C(b)?c:"")+"]")}):C(b)&&!ea(b)?nc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(la(e)+
	"="+la(Yb(b))))}if(!b)return"";var c=[];a(b,"",!0);return c.join("&")}}}function Zb(b,a){if(G(b)){var c=b.replace(Pf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(ad))||(d=(d=c.match(Qf))&&Rf[d[0]].test(c));d&&(b=vc(c))}}return b}function bd(b){var a=fa(),c;G(b)?m(b.split("\n"),function(b){c=b.indexOf(":");var e=F(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):C(b)&&m(b,function(b,c){var f=F(c),h=T(b);f&&(a[f]=a[f]?a[f]+", "+h:h)});return a}function cd(b){var a;
	return function(c){a||(a=bd(b));return c?(c=a[F(c)],void 0===c&&(c=null),c):a}}function dd(b,a,c,d){if(x(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function cf(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return C(a)&&"[object File]"!==va.call(a)&&"[object Blob]"!==va.call(a)&&"[object FormData]"!==va.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ja($b),put:ja($b),patch:ja($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",
	paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=function(b){return A(b)?(a=!!b,this):a};var c=!0;this.useLegacyPromiseExtensions=function(a){return A(a)?(c=!!a,this):c};var d=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,h,g,l,k){function n(a){function d(a){var b=P({},a);b.data=a.data?dd(a.data,a.headers,a.status,f.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:l.reject(b)}function e(a,b){var c,
	d={};m(a,function(a,e){x(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!da.isObject(a))throw I("$http")("badreq",a);var f=P({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);f.headers=function(a){var c=b.headers,d=P({},a.headers),f,g,h,c=P({},c.common,c[F(a.method)]);a:for(f in c){g=F(f);for(h in d)if(F(h)===g)continue a;d[f]=c[f]}return e(d,ja(a))}(a);f.method=sb(f.method);f.paramSerializer=G(f.paramSerializer)?k.get(f.paramSerializer):
	f.paramSerializer;var g=[function(a){var c=a.headers,e=dd(a.data,cd(c),w,a.transformRequest);v(e)&&m(c,function(a,b){"content-type"===F(b)&&delete c[b]});v(a.withCredentials)&&!v(b.withCredentials)&&(a.withCredentials=b.withCredentials);return p(a,e).then(d,d)},w],h=l.when(f);for(m(E,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var r=g.shift(),h=h.then(a,r)}c?(h.success=function(a){Sa(a,
	"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Sa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=ed("success"),h.error=ed("error"));return h}function p(c,d){function h(b,c,d,e){function f(){k(c,b,d,e)}L&&(200<=b&&300>b?L.put(ba,[b,c,bd(d),e]):L.remove(ba));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function k(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?O.resolve:O.reject)({data:a,status:b,headers:cd(d),config:c,statusText:e})}
	function p(a){k(a.data,a.status,ja(a.headers()),a.statusText)}function E(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var O=l.defer(),H=O.promise,L,m,S=c.headers,ba=r(c.url,c.paramSerializer(c.params));n.pendingRequests.push(c);H.then(E,E);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(L=C(c.cache)?c.cache:C(b.cache)?b.cache:t);L&&(m=L.get(ba),A(m)?m&&x(m.then)?m.then(p,p):J(m)?k(m[1],m[0],ja(m[2]),m[3]):k(m,200,{},"OK"):L.put(ba,H));v(m)&&((m=
	fd(c.url)?f()[c.xsrfCookieName||b.xsrfCookieName]:w)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=m),e(c.method,ba,d,h,S,c.timeout,c.withCredentials,c.responseType));return H}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var t=h("$http");b.paramSerializer=G(b.paramSerializer)?k.get(b.paramSerializer):b.paramSerializer;var E=[];m(d,function(a){E.unshift(G(a)?k.get(a):k.invoke(a))});n.pendingRequests=[];(function(a){m(arguments,function(a){n[a]=function(b,c){return n(P({},c||{},
	{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){n[a]=function(b,c,d){return n(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=b;return n}]}function gf(){this.$get=function(){return function(){return new Q.XMLHttpRequest}}}function ff(){this.$get=["$browser","$window","$document","$xhrFactory",function(b,a,c,d){return Sf(b,d,b.defer,a.angular.callbacks,c[0])}]}function Sf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),
	n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var h=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,h="error"===a.type?404:200);c&&c(h,t)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,g,l,k,n,p,r,t){function E(){q&&q();z&&z.abort()}function K(a,d,e,f,g){A(s)&&c.cancel(s);q=z=null;a(d,
	e,f,g);b.$$completeOutstandingRequest(y)}b.$$incOutstandingRequestCount();g=g||b.url();if("jsonp"==F(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var q=f(g.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){K(k,a,d[u].data,"",b);d[u]=y})}else{var z=a(e,g);z.open(e,g,!0);m(n,function(a,b){A(a)&&z.setRequestHeader(b,a)});z.onload=function(){var a=z.statusText||"",b="response"in z?z.response:z.responseText,c=1223===z.status?204:z.status;0===c&&(c=
	b?200:"file"==Aa(g).protocol?404:0);K(k,c,b,z.getAllResponseHeaders(),a)};e=function(){K(k,-1,null,null,"")};z.onerror=e;z.onabort=e;r&&(z.withCredentials=!0);if(t)try{z.responseType=t}catch(N){if("json"!==t)throw N;}z.send(v(l)?null:l)}if(0<p)var s=c(E,p);else p&&x(p.then)&&p.then(E)}}function af(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+
	a}function h(c){return c.replace(n,b).replace(p,a)}function g(f,g,n,p){function u(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var c;if(p&&!A(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=eb(a)}c=a}return c}catch(g){d(La.interr(f,g))}}p=!!p;for(var q,m,N=0,s=[],O=[],H=f.length,L=[],W=[];N<H;)if(-1!=(q=f.indexOf(b,N))&&-1!=(m=f.indexOf(a,q+l)))N!==q&&L.push(h(f.substring(N,q))),N=f.substring(q+l,m),s.push(N),O.push(c(N,u)),N=m+k,W.push(L.length),
	L.push("");else{N!==H&&L.push(h(f.substring(N)));break}n&&1<L.length&&La.throwNoconcat(f);if(!g||s.length){var S=function(a){for(var b=0,c=s.length;b<c;b++){if(p&&v(a[b]))return;L[W[b]]=a[b]}return L.join("")};return P(function(a){var b=0,c=s.length,e=Array(c);try{for(;b<c;b++)e[b]=O[b](a);return S(e)}catch(g){d(La.interr(f,g))}},{exp:f,expressions:s,$$watchDelegate:function(a,b){var c;return a.$watchGroup(O,function(d,e){var f=S(d);x(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,
	n=new RegExp(b.replace(/./g,f),"g"),p=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,g,l,k){var n=4<arguments.length,p=n?ua.call(arguments,4):[],r=a.setInterval,t=a.clearInterval,E=0,K=A(k)&&!k,u=(K?d:c).defer(),q=u.promise;l=A(l)?l:0;q.then(null,null,n?function(){e.apply(null,p)}:e);q.$$intervalId=r(function(){u.notify(E++);0<l&&E>=l&&(u.resolve(E),
	t(q.$$intervalId),delete f[q.$$intervalId]);K||b.$apply()},g);f[q.$$intervalId]=u;return q}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ob(b[a]);return b.join("/")}function gd(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=Y(c.port)||Tf[c.protocol]||null}function hd(b,a){var c="/"!==b.charAt(0);
	c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=yc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function sa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Cb(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b,a,c){this.$$html5=!0;c=c||"";gd(b,this);this.$$parse=function(b){var c=sa(a,
	b);if(!G(c))throw Db("ipthprfx",b,a);hd(c,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var b=Pb(this.$$search),c=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,h;A(f=sa(b,d))?(h=f,h=A(f=sa(c,f))?a+(sa("/",f)||f):b+h):A(f=sa(a,d))?h=a+f:a==d+"/"&&(h=a);h&&this.$$parse(h);return!!h}}function cc(b,a,c){gd(b,this);
	this.$$parse=function(d){var e=sa(b,d)||sa(a,d),f;v(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",v(e)&&(b=d,this.replace())):(f=sa(c,e),v(f)&&(f=e));hd(f,this);d=this.$$path;var e=b,h=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));h.exec(f)||(d=(f=h.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=
	function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function id(b,a,c){this.$$html5=!0;cc.apply(this,arguments);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,h;b==Ja(d)?f=d:(h=sa(a,d))?f=b+c+h:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Eb(b){return function(){return this[b]}}function jd(b,
	a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();return this}}function hf(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return A(a)?(b=a,this):b};this.html5Mode=function(b){return bb(b)?(a.enabled=b,this):C(b)?(bb(b.enabled)&&(a.enabled=b.enabled),bb(b.requireBase)&&(a.requireBase=b.requireBase),bb(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,
	d,e,f,h){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),r;if(a.enabled){if(!n&&a.requireBase)throw Db("nobase");r=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(n||"/");n=e.history?bc:id}else r=Ja(p),n=cc;var t=r.substr(0,Ja(r).lastIndexOf("/")+1);k=new n(r,t,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();
	var E=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=B(b.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");C(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=Aa(g.animVal).href);E.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(g,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),h.angular["ff-684208-preventDefault"]=
	!0))}});Cb(k.absUrl())!=Cb(p)&&d.url(k.absUrl(),!0);var K=!0;d.onUrlChange(function(a,b){v(sa(t,a))?h.location.href=a:(c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(K=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Cb(d.url()),b=Cb(k.absUrl()),f=d.state(),h=k.$$replace,r=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(K||r)K=!1,
	c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(r&&g(b,h,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function jf(){var b=!0,a=this;this.debugEnabled=function(a){return A(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=
	a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||y;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Xa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===
	b||"__proto__"===b)throw Z("isecfld",a);return b}function kd(b,a){b+="";if(!G(b))throw Z("iseccst",a);return b}function Ba(b,a){if(b){if(b.constructor===b)throw Z("isecfn",a);if(b.window===b)throw Z("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Z("isecdom",a);if(b===Object)throw Z("isecobj",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw Z("isecfn",a);if(b===Uf||b===Vf||b===Wf)throw Z("isecff",a);}}function md(b,a){if(b&&(b===(0).constructor||b===(!1).constructor||
	b==="".constructor||b==={}.constructor||b===[].constructor||b===Function.constructor))throw Z("isecaf",a);}function Xf(b,a){return"undefined"!==typeof b?b:a}function nd(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case s.Program:c=!0;m(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case s.Literal:b.constant=!0;b.toWatch=[];break;case s.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=
	b.argument.toWatch;break;case s.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case s.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case s.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case s.Identifier:b.constant=
	!1;b.toWatch=[b];break;case s.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case s.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case s.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;
	b.toWatch=[b];break;case s.ArrayExpression:c=!0;d=[];m(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case s.ObjectExpression:c=!0;d=[];m(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case s.ThisExpression:b.constant=!1,b.toWatch=[]}}function od(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:w}}
	function pd(b){return b.type===s.Identifier||b.type===s.MemberExpression}function qd(b){if(1===b.body.length&&pd(b.body[0].expression))return{type:s.AssignmentExpression,left:b.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function rd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===s.Literal||b.body[0].expression.type===s.ArrayExpression||b.body[0].expression.type===s.ObjectExpression)}function sd(b,a){this.astBuilder=b;this.$filter=a}function td(b,
	a){this.astBuilder=b;this.$filter=a}function Fb(b){return"constructor"==b}function dc(b){return x(b.valueOf)?b.valueOf():Yf.call(b)}function kf(){var b=fa(),a=fa();this.$get=["$filter",function(c){function d(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=dc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,c,e,f){var g=e.inputs,h;if(1===g.length){var k=d,g=g[0];return a.$watch(function(a){var b=g(a);d(b,k)||(h=e(a,w,w,[b]),k=b&&dc(b));return h},b,c,f)}for(var l=[],n=[],p=0,
	m=g.length;p<m;p++)l[p]=d,n[p]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!d(k,l[c])))n[c]=k,l[c]=k&&dc(k)}b&&(h=e(a,w,w,n));return h},b,c,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;x(b)&&b.apply(this,arguments);A(a)&&d.$$postDigest(function(){A(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;m(a,function(a){A(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,
	c,d){g=a;x(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function g(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){x(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==f?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return A(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,c.inputs=
	a.inputs?a.inputs:[a]);return c}var k=Fa().noUnsafeEval,n={csp:k,expensiveChecks:!1},p={csp:k,expensiveChecks:!0};return function(d,k,E){var m,u,q;switch(typeof d){case "string":q=d=d.trim();var s=E?a:b;m=s[q];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),E=E?p:n,m=new ec(E),m=(new fc(m,c,E)).parse(d),m.constant?m.$$watchDelegate=g:u?m.$$watchDelegate=m.literal?h:f:m.inputs&&(m.$$watchDelegate=e),s[q]=m);return l(m,k);case "function":return l(d,k);default:return y}}}]}function mf(){this.$get=
	["$rootScope","$exceptionHandler",function(b,a){return ud(function(a){b.$evalAsync(a)},a)}]}function nf(){this.$get=["$browser","$exceptionHandler",function(b,a){return ud(function(a){b.defer(a)},a)}]}function ud(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;
	c.processScheduled=!1;c.pending=w;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{x(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function h(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var g=I("$q",TypeError);P(d.prototype,{then:function(a,b,c){if(v(a)&&v(b)&&v(c))return this;var d=new h;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,
	a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});P(h.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(C(b)||x(b))d=b&&b.then;x(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],
	this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(x(b)?b(c):c)}catch(h){a(h)}}})}});
	var l=function(a,b){var c=new h;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{x(c)&&(d=c())}catch(e){return l(e,!1)}return d&&x(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new h;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!x(a))throw g("norslvr",a);if(!(this instanceof t))return new t(a);var b=new h;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new h};
	p.reject=function(a){var b=new h;b.reject(a);return b.promise};p.when=n;p.resolve=n;p.all=function(a){var b=new h,c=0,d=J(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function wf(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,
	e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function lf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=I("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=
	["$injector","$exceptionHandler","$parse","$browser",function(f,h,g,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(q.$$phase)throw c("inprog",q.$$phase);q.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=
	a.$parent)}function t(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function E(){}function s(){for(;w.length;)try{w.shift()()}catch(a){h(a)}e=null}function u(){null===e&&(e=l.defer(function(){q.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=
	d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var h=this,k=h.$$watchers,l={fn:b,last:E,get:f,exp:e||a,eq:!!c};d=null;x(b)||(l.fn=y);k||(k=h.$$watchers=[]);k.unshift(l);r(this,1);return function(){0<=cb(k,l)&&r(h,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;
	if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!v(e)){if(C(e))if(Da(e))for(f!==p&&(f=p,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],
	g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==r&&(f=r={},t=0,l++);a=0;for(b in e)ta.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,n=g(a,c),p=[],r={},q=!0,t=0;return this.$watch(n,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(k)if(C(e))if(Da(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h=
	{},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var b,f,g,k,n,r,t=a,m,u=[],D,v;p("$digest");l.$$checkUrlChange();this===q&&null!==e&&(l.defer.cancel(e),s());d=null;do{r=!1;for(m=this;z.length;){try{v=z.shift(),v.scope.$eval(v.expression,v.locals)}catch(w){h(w)}d=null}a:do{if(k=m.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(m))!==(g=b.last)&&!(b.eq?ka(f,g):"number"===typeof f&&"number"===typeof g&&isNaN(f)&&isNaN(g)))r=!0,d=b,b.last=b.eq?ha(f,null):f,b.fn(f,g===E?f:g,m),5>
	t&&(D=4-t,u[D]||(u[D]=[]),u[D].push({msg:x(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:g}));else if(b===d){r=!1;break a}}catch(y){h(y)}if(!(k=m.$$watchersCount&&m.$$childHead||m!==this&&m.$$nextSibling))for(;m!==this&&!(k=m.$$nextSibling);)m=m.$parent}while(m=k);if((r||z.length)&&!t--)throw q.$$phase=null,c("infdig",a,u);}while(r||z.length);for(q.$$phase=null;N.length;)try{N.shift()()}catch(A){h(A)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
	this.$$destroyed=!0;this===q&&l.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)t(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=y;this.$on=
	this.$watch=this.$watchGroup=function(){return y};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){q.$$phase||z.length||l.defer(function(){z.length&&q.$digest()});z.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){N.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{q.$$phase=null}}catch(b){h(b)}finally{try{q.$digest()}catch(c){throw h(c),
	c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&w.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,t(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,g={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},
	k=db([g],arguments,1),l,n;do{d=e.$$listeners[a]||c;g.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(p){h(p)}else d.splice(l,1),l--,n--;if(f)return g.currentScope=null,g;e=e.$parent}while(e);g.currentScope=null;return g},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=db([e],arguments,1),g,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||
	[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,f)}catch(l){h(l)}else d.splice(g,1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var q=new n,z=q.$$asyncQueue=[],N=q.$$postDigestQueue=[],w=q.$$applyAsyncQueue=[];return q}]}function ge(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return A(a)?
	(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return A(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Zf(b){if("self"===b)return b;if(G(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=vd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Oa(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function wd(b){var a=[];A(b)&&m(b,function(b){a.push(Zf(b))});
	return a}function pf(){this.SCE_CONTEXTS=oa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=wd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=wd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?fd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
	return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var h=e(),g={};g[oa.HTML]=e(h);g[oa.CSS]=e(h);g[oa.URL]=e(h);g[oa.JS]=e(h);g[oa.RESOURCE_URL]=e(g[oa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||v(b)||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||v(e)||""===e)return e;var h=g.hasOwnProperty(c)?g[c]:null;if(h&&e instanceof
	h)return e.$$unwrapTrustedValue();if(c===oa.RESOURCE_URL){var h=Aa(e.toString()),p,r,t=!1;p=0;for(r=b.length;p<r;p++)if(d(b[p],h)){t=!0;break}if(t)for(p=0,r=a.length;p<r;p++)if(d(a[p],h)){t=!1;break}if(t)return e;throw Ca("insecurl",e.toString());}if(c===oa.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof h?a.$$unwrapTrustedValue():a}}}]}function of(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
	8>Wa)throw Ca("iequirks");var d=ja(oa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=$a);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,h=d.trustAs;m(oa,function(a,b){var c=F(b);d[gb("parse_as_"+c)]=function(b){return e(a,b)};d[gb("get_trusted_"+c)]=function(b){return f(a,b)};d[gb("trust_as_"+
	c)]=function(b){return h(a,b)}});return d}]}function qf(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(F((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},h,g=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=g.exec(p)){h=k[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
	l);!d||k&&n||(k=G(l.webkitTransition),n=G(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Wa)return!1;if(v(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Fa(),vendorPrefix:h,transitions:k,animations:n,android:d}}]}function sf(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,h){e.totalPendingRequests++;G(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var g=a.defaults&&a.defaults.transformResponse;
	J(g)?g=g.filter(function(a){return a!==Zb}):g===Zb&&(g=null);return a.get(f,{cache:b,transformResponse:g})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,a.data);return a.data},function(a){if(!h)throw ga("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function tf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var h=[];m(a,function(a){var d=
	da.element(a).data("$binding");d&&m(d,function(d){c?(new RegExp("(^|\\s)"+vd(b)+"(\\s|\\||$)")).test(d)&&h.push(a):-1!=d.indexOf(b)&&h.push(a)})});return h},findModels:function(a,b,c){for(var h=["ng-","data-ng-","ng\\:"],g=0;g<h.length;++g){var l=a.querySelectorAll("["+h[g]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function uf(){this.$get=
	["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){x(f)||(k=l,l=f,f=y);var n=ua.call(arguments,3),p=A(k)&&!k,r=(p?d:c).defer(),t=r.promise,m;m=a.defer(function(){try{r.resolve(f.apply(null,n))}catch(a){r.reject(a),e(a)}finally{delete h[t.$$timeoutId]}p||b.$apply()},l);t.$$timeoutId=m;h[m]=r;return t}var h={};f.cancel=function(b){return b&&b.$$timeoutId in h?(h[b.$$timeoutId].reject("canceled"),delete h[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}
	function Aa(b){Wa&&($.setAttribute("href",b),b=$.href);$.setAttribute("href",b);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function fd(b){b=G(b)?Aa(b):b;return b.protocol===xd.protocol&&b.host===xd.host}function vf(){this.$get=qa(Q)}function yd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}
	var c=b[0]||{},d={},e="";return function(){var b,h,g,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},g=0;g<b.length;g++)h=b[g],l=h.indexOf("="),0<l&&(k=a(h.substring(0,l)),v(d[k])&&(d[k]=a(h.substring(l+1))));return d}}function zf(){this.$get=yd}function Kc(b){function a(c,d){if(C(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",zd);a("date",Ad);
	a("filter",$f);a("json",ag);a("limitTo",bg);a("lowercase",cg);a("number",Bd);a("orderBy",Cd);a("uppercase",dg)}function $f(){return function(b,a,c){if(!Da(b)){if(null==b)return b;throw I("filter")("notarray",b);}var d;switch(gc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=eg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function eg(b,a,c){var d=C(b)&&"$"in b;!0===a?a=ka:x(a)||(a=function(a,b){if(v(a))return!1;if(null===
	a||null===b)return a===b;if(C(b)||C(a)&&!qc(a))return!1;a=F(""+a);b=F(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!C(e)?Ma(e,b.$,a,!1):Ma(e,b,a,c)}}function Ma(b,a,c,d,e){var f=gc(b),h=gc(a);if("string"===h&&"!"===a.charAt(0))return!Ma(b,a.substring(1),c,d);if(J(b))return b.some(function(b){return Ma(b,a,c,d)});switch(f){case "object":var g;if(d){for(g in b)if("$"!==g.charAt(0)&&Ma(b[g],a,c,!0))return!0;return e?!1:Ma(b,a,c,!1)}if("object"===h){for(g in a)if(e=a[g],!x(e)&&!v(e)&&
	(f="$"===g,!Ma(f?b:b[g],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function gc(b){return null===b?"null":typeof b}function zd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){v(d)&&(d=a.CURRENCY_SYM);v(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Dd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Bd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Dd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Dd(b,
	a,c,d,e){if(C(b))return"";var f=0>b;b=Math.abs(b);var h=Infinity===b;if(!h&&!isFinite(b))return"";var g=b+"",l="",k=!1,n=[];h&&(l="\u221e");if(!h&&-1!==g.indexOf("e")){var p=g.match(/([\d\.]+)e(-?)(\d+)/);p&&"-"==p[2]&&p[3]>e+1?b=0:(l=g,k=!0)}if(h||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l),l=l.replace(hc,d));else{h=(g.split(hc)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var h=(""+b).split(hc),g=h[0],h=h[1]||"",p=0,
	r=a.lgSize,t=a.gSize;if(g.length>=r+t)for(p=g.length-r,k=0;k<p;k++)0===(p-k)%t&&0!==k&&(l+=c),l+=g.charAt(k);for(k=p;k<g.length;k++)0===(g.length-k)%r&&0!==k&&(l+=c),l+=g.charAt(k);for(;h.length<e;)h+="0";e&&"0"!==e&&(l+=d+h.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function aa(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<
	c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=sb(a?"SHORT"+b:b);return d[f][e]}}function Ed(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function ic(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function Ad(b){function a(a){var b;if(b=
	a.match(c)){a=new Date(0);var f=0,h=0,g=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Y(b[9]+b[10]),h=Y(b[9]+b[11]));g.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;h=Y(b[5]||0)-h;g=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,h,g,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var h="",g=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;G(c)&&(c=
	fg.test(c)?Y(c):a(c));V(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;for(;e;)(k=gg.exec(e))?(g=db(g,k,1),e=g.pop()):(g.push(e),e=null);var n=c.getTimezoneOffset();f&&(n=wc(f,c.getTimezoneOffset()),c=Ob(c,f,!0));m(g,function(a){l=hg[a];h+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return h}}function ag(){return function(b,a){v(a)&&(a=2);return eb(b,a)}}function bg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):Y(a);if(isNaN(a))return b;
	V(b)&&(b=b.toString());if(!J(b)&&!G(b))return b;c=!c||isNaN(c)?0:Y(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function Cd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,g=$a;if(x(a))g=a;else if(G(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(g=b(a),g.constant))var l=g(),g=function(a){return a[l]}}return{get:g,descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;
	default:return!1}}return function(b,e,f){if(!Da(b))return b;J(e)||(e=[e]);0===e.length&&(e=["+"]);var h=a(e,f);h.push({get:function(){return{}},descending:f?-1:1});b=Array.prototype.map.call(b,function(a,b){return{value:a,predicateValues:h.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(qc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});
	b.sort(function(a,b){for(var c=0,d=0,e=h.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],t=0;c.type===f.type?c.value!==f.value&&(t=c.value<f.value?-1:1):t=c.type<f.type?-1:1;if(c=t*h[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Na(b){x(b)&&(b={link:b});b.restrict=b.restrict||"AC";return qa(b)}function Gd(b,a,c,d,e){var f=this,h=[];f.$error={};f.$$success={};f.$pending=w;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=
	!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){m(h,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){m(h,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ta(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});
	m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,a)});cb(h,a);a.$$parentForm=Ib};Hd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(cb(d,c),0===d.length&&delete a[b])},$animate:d});f.$setDirty=function(){d.removeClass(b,Ya);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){d.setClass(b,Ya,Jb+" ng-submitted");f.$dirty=
	!1;f.$pristine=!0;f.$submitted=!1;m(h,function(a){a.$setPristine()})};f.$setUntouched=function(){m(h,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function jc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var h=F(a[0].type);if(!e.android){var g=!1;a.on("compositionstart",function(a){g=!0});a.on("compositionend",function(){g=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),
	k=null);if(!g){var e=a.val();b=b&&b.type;"password"===h||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){var b=d.$isEmpty(d.$viewValue)?
	"":d.$viewValue;a.val()!==b&&a.val(b)}}function Kb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(G(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(ig.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,
	f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,h,g,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function r(a){return A(a)&&!ea(a)?c(a)||w:a}Id(e,f,h,g);jb(e,f,h,g,l,k);var t=g&&g.$options&&g.$options.timezone,m;g.$$parserName=b;g.$parsers.push(function(b){return g.$isEmpty(b)?null:a.test(b)?(b=c(b,m),t&&(b=Ob(b,t)),b):w});g.$formatters.push(function(a){if(a&&!ea(a))throw lb("datefmt",a);if(p(a))return(m=a)&&t&&(m=Ob(m,t,!0)),
	n("date")(a,d,t);m=null;return""});if(A(h.min)||h.ngMin){var s;g.$validators.min=function(a){return!p(a)||v(s)||c(a)>=s};h.$observe("min",function(a){s=r(a);g.$validate()})}if(A(h.max)||h.ngMax){var u;g.$validators.max=function(a){return!p(a)||v(u)||c(a)<=u};h.$observe("max",function(a){u=r(a);g.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=C(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?w:b})}function Jd(b,a,c,d,e){if(A(d)){b=
	b(d);if(!b.constant)throw lb("constexpr",c,d);return b(a)}return e}function kc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return J(a)?(m(a,function(a){b=b.concat(e(a))}),b):G(a)?a.split(" "):C(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,h,g){function l(a,b){var c=h.data("$classCounts")||fa(),
	d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});h.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var m=l(k,1);g.$addClass(m)}else if(!ka(b,n)){var s=e(n),m=d(k,s),k=d(s,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(h,m);k&&k.length&&c.removeClass(h,k)}}n=ja(b)}var n;f.$watch(g[b],k,!0);g.$observe("class",function(a){k(f.$eval(g[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var h=c&1;if(h!==(d&1)){var k=
	e(f.$eval(g[b]));h===a?(h=l(k,1),g.$addClass(h)):(h=l(k,-1),g.$removeClass(h))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Ac(b,"-"):"";a(mb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},h=b.set,g=b.unset,l=b.$animate;f[Kd]=!(f[mb]=e.hasClass(mb));d.$setValidity=function(b,e,f){v(e)?(d.$pending||(d.$pending={}),h(d.$pending,b,f)):(d.$pending&&g(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=w));bb(e)?
	e?(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),g(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=d.$invalid=w,c("",null)):(a(Md,!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?w:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);d.$$parentForm.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var jg=/^\/(.+)\/([a-z]*)$/,F=function(b){return G(b)?b.toLowerCase():b},ta=Object.prototype.hasOwnProperty,
	sb=function(b){return G(b)?b.toUpperCase():b},Wa,B,ra,ua=[].slice,Nf=[].splice,kg=[].push,va=Object.prototype.toString,rc=Object.getPrototypeOf,Ea=I("ng"),da=Q.angular||(Q.angular={}),Rb,nb=0;Wa=X.documentMode;y.$inject=[];$a.$inject=[];var J=Array.isArray,tc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return G(b)?b.trim():b},vd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!A(Fa.rules)){var b=
	X.querySelector("[ng-csp]")||X.querySelector("[data-ng-csp]");if(b){var a=b.getAttribute("ng-csp")||b.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!a||-1!==a.indexOf("no-unsafe-eval"),noInlineStyle:!a||-1!==a.indexOf("no-inline-style")}}else{b=Fa;try{new Function(""),a=!1}catch(c){a=!0}b.rules={noUnsafeEval:a,noInlineStyle:!1}}}return Fa.rules},pb=function(){if(A(pb.name_))return pb.name_;var b,a,c=Qa.length,d,e;for(a=0;a<c;++a)if(d=Qa[a],b=X.querySelector("["+d.replace(":","\\:")+"jq]")){e=
	b.getAttribute(d+"jq");break}return pb.name_=e},Qa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Bc=!1,Qb,pa=1,Pa=3,fe={full:"1.4.7",major:1,minor:4,dot:7,codeName:"dark-luminescence"};R.expando="ng339";var hb=R.cache={},Ff=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var Af=/([\:\-\_]+(.))/g,Bf=/^moz([A-Z])/,lg={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=I("jqLite"),Ef=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,Cf=/<([\w:-]+)/,Df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	ma={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option;ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead;ma.th=ma.td;var Ra=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(Q).on("load",a))},
	toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:kg,sort:[].sort,splice:[].splice},Bb={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Bb[F(b)]=b});var Sc={};m("input select option textarea button form details".split(" "),function(b){Sc[b]=!0});var $c={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
	m({data:Vb,removeData:vb,hasData:function(b){for(var a in hb[b.ng339])return!0;return!1}},function(b,a){R[a]=b});m({data:Vb,inheritedData:Ab,scope:function(b){return B.data(b,"$scope")||Ab(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Pc,injector:function(b){return Ab(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:xb,css:function(b,a,c){a=gb(a);if(A(c))b.style[a]=c;else return b.style[a]},
	attr:function(b,a,c){var d=b.nodeType;if(d!==Pa&&2!==d&&8!==d)if(d=F(a),Bb[d])if(A(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||y).specified?d:w;else if(A(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?w:b},prop:function(b,a,c){if(A(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(v(b)){var d=a.nodeType;return d===pa||d===Pa?a.textContent:""}a.textContent=b}b.$dv="";return b}(),
	val:function(b,a){if(v(a)){if(b.multiple&&"select"===wa(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(v(a))return b.innerHTML;ub(b,!0);b.innerHTML=a},empty:Qc},function(b,a){R.prototype[a]=function(a,d){var e,f,h=this.length;if(b!==Qc&&v(2==b.length&&b!==xb&&b!==Pc?a:d)){if(C(a)){for(e=0;e<h;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;h=v(e)?Math.min(h,1):h;
	for(f=0;f<h;f++){var g=b(this[f],a,d);e=e?e+g:g}return e}for(e=0;e<h;e++)b(this[e],a,d);return this}});m({removeData:vb,on:function a(c,d,e,f){if(A(f))throw Tb("onargs");if(Lc(c)){var h=wb(c,!0);f=h.events;var g=h.handle;g||(g=h.handle=Hf(c,f));for(var h=0<=d.indexOf(" ")?d.split(" "):[d],l=h.length;l--;){d=h[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,lg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||g(a,d)}):"$destroy"!==d&&c.addEventListener(d,g,!1),
	k=f[d]);k.push(e)}}},off:Oc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;ub(a);m(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===pa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===pa||11===d){c=new R(c);for(var d=0,e=c.length;d<
	e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===pa){var d=a.firstChild;m(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Wb,detach:function(a){Wb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,h=c.length;f<h;f++){var g=c[f];e.insertBefore(g,d.nextSibling);d=g}},addClass:zb,removeClass:yb,toggleClass:function(a,c,d){c&&m(c.split(" "),function(c){var f=
	d;v(f)&&(f=!xb(a,c));(f?zb:yb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,h=c.type||c,g=wb(a);if(g=(g=g&&g.events)&&g[h])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
	!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:y,type:h,target:a},c.type&&(e=P(e,c)),c=ja(g),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var h,g=0,l=this.length;g<l;g++)v(h)?(h=a(this[g],c,e,f),A(h)&&(h=B(h))):Nc(h,a(this[g],c,e,f));return A(h)?h:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Ua.prototype={put:function(a,
	c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];return c}};var yf=[function(){this.$get=[function(){return Ua}]}],Uc=/^[^\(]*\(\s*([^\)]*)\)/m,mg=/,/,ng=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=I("$injector");fb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw G(d)&&d||(d=a.name||If(a)),Ha("strictdi",d);c=a.toString().replace(Tc,
	"");c=c.match(Uc);m(c[1].split(mg),function(a){a.replace(ng,function(a,c,d){e.push(d)})})}a.$inject=e}}else J(a)?(c=a.length-1,Sa(a[c],"fn"),e=a.slice(0,c)):Sa(a,"fn",!0);return e};var Nd=I("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=y;d.chain=y;d.prototype={end:y,cancel:y,resume:y,pause:y,complete:y,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Te=function(){var a=new Ua,c=[];this.$get=["$$AnimateRunner","$rootScope",
	function(d,e){function f(a,c,d){var e=!1;c&&(c=G(c)?c.split(" "):J(c)?c:[],m(c,function(c){c&&(e=!0,a[c]=d)}));return e}function h(){m(c,function(c){var d=a.get(c);if(d){var e=Jf(c.attr("class")),f="",h="";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:h+=(h.length?" ":"")+c)});m(c,function(a){f&&zb(a,f);h&&yb(a,h)});a.remove(c)}});c.length=0}return{enabled:y,on:y,off:y,pin:y,push:function(g,l,k,n){n&&n();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(l=k.addClass,
	n=k.removeClass,k=a.get(g)||{},l=f(k,l,!0),n=f(k,n,!1),l||n)a.put(g,k),c.push(g),1===c.length&&e.$$postDigest(h);return new d}}}]},Re=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Nd("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Nd("nongcls",
	"ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,h,g,l){h=h&&B(h);g=g&&B(g);h=h||g.parent();c(f,h,g);return a.push(f,"enter",Ia(l))},move:function(f,h,g,l){h=h&&B(h);g=g&&B(g);
	h=h||g.parent();c(f,h,g);return a.push(f,"move",Ia(l))},leave:function(c,e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,g){g=Ia(g);g.addClass=ib(g.addclass,e);return a.push(c,"addClass",g)},removeClass:function(c,e,g){g=Ia(g);g.removeClass=ib(g.removeClass,e);return a.push(c,"removeClass",g)},setClass:function(c,e,g,l){l=Ia(l);l.addClass=ib(l.addClass,e);l.removeClass=ib(l.removeClass,g);return a.push(c,"setClass",l)},animate:function(c,e,g,l,k){k=Ia(k);k.from=k.from?
	P(k.from,e):e;k.to=k.to?P(k.to,g):g;k.tempClasses=ib(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,c){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=c.defer());return this.defer.promise},then:function(a,c){return this.getPromise().then(a,c)},"catch":function(a){return this.getPromise()["catch"](a)},
	"finally":function(a){return this.getPromise()["finally"](a)}};return function(c,f){function h(){a(function(){f.addClass&&(c.addClass(f.addClass),f.addClass=null);f.removeClass&&(c.removeClass(f.removeClass),f.removeClass=null);f.to&&(c.css(f.to),f.to=null);g||l.done();g=!0});return l}f.cleanupStyles&&(f.from=f.to=null);f.from&&(c.css(f.from),f.from=null);var g,l=new d;return{start:h,end:h}}}]},ga=I("$compile");Dc.$inject=["$provide","$$sanitizeUriProvider"];var Wc=/^((?:x|data)[\:\-_])/i,Of=I("$controller"),
	Vc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(c){c?!c.nodeType&&c instanceof B&&(c=c[0]):c=a[0].body;return c.offsetWidth+1}}]},ad="application/json",$b={"Content-Type":ad+";charset=utf-8"},Qf=/^\[|^\{(?!\{)/,Rf={"[":/]$/,"{":/}$/},Pf=/^\)\]\}',?\n/,og=I("$http"),ed=function(a){return function(){throw og("legacy",a);}},La=da.$interpolateMinErr=I("$interpolate");La.throwNoconcat=function(a){throw La("noconcat",a);};La.interr=function(a,c){return La("interr",
	a,c.toString())};var pg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Tf={http:80,https:443,ftp:21},Db=I("$location"),qg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(v(a))return this.$$url;var c=pg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Eb("$$protocol"),host:Eb("$$host"),port:Eb("$$port"),path:jd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,
	c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||V(a))a=a.toString(),this.$$search=yc(a);else if(C(a))a=ha(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Db("isrcharg");break;default:v(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:jd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};m([id,cc,bc],function(a){a.prototype=Object.create(qg);a.prototype.state=
	function(c){if(!arguments.length)return this.$$state;if(a!==bc||!this.$$html5)throw Db("nostate");this.$$state=v(c)?null:c;return this}});var Z=I("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,Lb=fa();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var rg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},ec=function(a){this.options=a};ec.prototype={constructor:ec,lex:function(a){this.text=a;this.index=0;for(this.tokens=
	[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Lb[c],f=Lb[d];Lb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=
	a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
	a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=A(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Z("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=F(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
	e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var h=
	this.text.charAt(this.index),e=e+h;if(f)"u"===h?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=rg[h]||h,f=!1;else if("\\"===h)f=!0;else{if(h===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=h}this.index++}this.throwError("Unterminated quote",c)}};var s=function(a,c){this.lexer=a;this.options=c};s.Program="Program";s.ExpressionStatement=
	"ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";
	s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=
	this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,
	operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:c.text,
	left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},
	primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=ha(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},
	this.consume(")")):"["===c.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===c.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());
	while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
	c={type:s.Property,kind:"init"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,c){throw Z("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw Z("ueoe",this.text);var c=this.expect(a);
	c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw Z("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var h=a.text;if(h===c||h===d||h===e||h===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},
	"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:w},"this":{type:s.ThisExpression}}};sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",h;this.stage="assign";if(h=qd(e))this.state.computing="assign",f=this.nextId(),this.recurse(h,f),this.return_(f),f="fn.assign="+this.generateFunction("assign",
	"s,v,l");h=od(e.body);d.stage="inputs";m(h,function(a,c){var e="fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue",
	"ensureSafeAssignContext","ifDefined","plus","text",f))(this.$filter,Xa,Ba,ld,kd,md,Xf,nd,a);this.state=this.stage=w;f.literal=rd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=
	[],c=this;m(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,h){var g,l,k=this,n,p;e=e||y;if(!h&&A(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case s.Program:m(a.body,
	function(c,d){k.recurse(c.expression,w,w,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,";"):k.return_(l)});break;case s.Literal:p=this.escape(a.value);this.assign(c,p);e(p);break;case s.UnaryExpression:this.recurse(a.argument,w,w,function(a){l=a});p=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,p);e(p);break;case s.BinaryExpression:this.recurse(a.left,w,w,function(a){g=a});this.recurse(a.right,w,w,function(a){l=a});p="+"===a.operator?this.plus(g,l):"-"===a.operator?this.ifDefined(g,
	0)+a.operator+this.ifDefined(l,0):"("+g+")"+a.operator+"("+l+")";this.assign(c,p);e(p);break;case s.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case s.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case s.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",
	a.name)+"?l:s"),d.computed=!1,d.name=a.name);Xa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||
	this.nextId();c=c||this.nextId();k.recurse(a.object,g,w,function(){k.if_(k.notNull(g),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.getStringValue(l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(g,l)),k.lazyAssign(k.computedMember(g,l),"{}")),p=k.ensureSafeObject(k.computedMember(g,l)),k.assign(c,p),d&&(d.computed=!0,d.name=l);else{Xa(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),
	"{}"));p=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))p=k.ensureSafeObject(p);k.assign(c,p);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case s.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),p=l+"("+n.join(",")+")",k.assign(c,p),e(c)):(l=k.nextId(),g={},n=[],k.recurse(a.callee,l,g,function(){k.if_(k.notNull(l),
	function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),w,function(a){n.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),p=k.member(g.context,g.name,g.computed)+"("+n.join(",")+")"):p=l+"("+n.join(",")+")";p=k.ensureSafeObject(p);k.assign(c,p)},function(){k.assign(c,"undefined")});e(c)}));break;case s.AssignmentExpression:l=this.nextId();g={};if(!pd(a.left))throw Z("lval");this.recurse(a.left,w,g,function(){k.if_(k.notNull(g.context),
	function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);p=k.member(g.context,g.name,g.computed)+a.operator+l;k.assign(c,p);e(c||p)})},1);break;case s.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),w,function(a){n.push(a)})});p="["+n.join(",")+"]";this.assign(c,p);e(p);break;case s.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,k.nextId(),w,function(c){n.push(k.escape(a.key.type===
	s.Identifier?a.key.name:""+a.key.value)+":"+c)})});p="{"+n.join(",")+"}";this.assign(c,p);e(p);break;case s.ThisExpression:this.assign(c,"s");e("s");break;case s.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=
	this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,
	c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+
	a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,c,d,e,f,h){var g=this;return function(){g.recurse(a,c,d,e,f,h)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
	stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(G(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(V(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Z("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
	td.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,h;if(f=qd(e))h=this.recurse(f);f=od(e.body);var g;f&&(g=[],m(f,function(a,c){var e=d.recurse(a);a.input=e;g.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};h&&(f.assign=function(a,c,d){return h(a,d,c)});g&&(f.inputs=
	g);f.literal=rd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,h=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,c);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case s.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case s.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
	f,c);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case s.Identifier:return Xa(a.name,h.expression),h.identifier(a.name,h.expensiveChecks||Fb(a.name),c,d,h.expression);case s.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Xa(a.property.name,h.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,h.expression):this.nonComputedMember(e,f,
	h.expensiveChecks,c,d,h.expression);case s.CallExpression:return g=[],m(a.arguments,function(a){g.push(h.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,h){for(var r=[],m=0;m<g.length;++m)r.push(g[m](a,d,e,h));a=f.apply(w,r,h);return c?{context:w,name:w,value:a}:a}:function(a,d,e,p){var r=f(a,d,e,p),m;if(null!=r.value){Ba(r.context,h.expression);ld(r.value,h.expression);m=[];for(var s=0;s<g.length;++s)m.push(Ba(g[s](a,d,e,p),
	h.expression));m=Ba(r.value.apply(r.context,m),h.expression)}return c?{value:m}:m};case s.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,g,p){var r=e(a,d,g,p);a=f(a,d,g,p);Ba(r.value,h.expression);md(r.context);r.context[r.name]=a;return c?{value:a}:a};case s.ArrayExpression:return g=[],m(a.elements,function(a){g.push(h.recurse(a))}),function(a,d,e,f){for(var h=[],m=0;m<g.length;++m)h.push(g[m](a,d,e,f));return c?{value:h}:h};case s.ObjectExpression:return g=
	[],m(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:h.recurse(a.value)})}),function(a,d,e,f){for(var h={},m=0;m<g.length;++m)h[g[m].key]=g[m].value(a,d,e,f);return c?{value:h}:h};case s.ThisExpression:return function(a){return c?{value:a}:a};case s.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,h){d=a(d,e,f,h);d=A(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,
	f,h){d=a(d,e,f,h);d=A(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,h){d=!a(d,e,f,h);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,h,g){var l=a(e,f,h,g);e=c(e,f,h,g);l=nd(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,h,g){var l=a(e,f,h,g);e=c(e,f,h,g);l=(A(l)?l:0)-(A(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)*c(e,f,h,g);return d?{value:e}:e}},"binary/":function(a,c,
	d){return function(e,f,h,g){e=a(e,f,h,g)/c(e,f,h,g);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)%c(e,f,h,g);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)===c(e,f,h,g);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)!==c(e,f,h,g);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)==c(e,f,h,g);return d?{value:e}:e}},"binary!=":function(a,c,
	d){return function(e,f,h,g){e=a(e,f,h,g)!=c(e,f,h,g);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)<c(e,f,h,g);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)>c(e,f,h,g);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)<=c(e,f,h,g);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)>=c(e,f,h,g);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,
	f,h,g){e=a(e,f,h,g)&&c(e,f,h,g);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)||c(e,f,h,g);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,h,g,l){f=a(f,h,g,l)?c(f,h,g,l):d(f,h,g,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:w,name:w,value:a}:a}},identifier:function(a,c,d,e,f){return function(h,g,l,k){h=g&&a in g?g:h;e&&1!==e&&h&&!h[a]&&(h[a]={});g=h?h[a]:w;c&&Ba(g,f);return d?{context:h,name:a,value:g}:
	g}},computedMember:function(a,c,d,e,f){return function(h,g,l,k){var n=a(h,g,l,k),p,m;null!=n&&(p=c(h,g,l,k),p=kd(p),Xa(p,f),e&&1!==e&&n&&!n[p]&&(n[p]={}),m=n[p],Ba(m,f));return d?{context:n,name:p,value:m}:m}},nonComputedMember:function(a,c,d,e,f,h){return function(g,l,k,n){g=a(g,l,k,n);f&&1!==f&&g&&!g[c]&&(g[c]={});l=null!=g?g[c]:w;(d||Fb(c))&&Ba(l,h);return e?{context:g,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,h){return h?h[c]:a(d,e,f)}}};var fc=function(a,c,d){this.lexer=
	a;this.$filter=c;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new td(this.ast,c):new sd(this.ast,c)};fc.prototype={constructor:fc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};fa();fa();var Yf=Object.prototype.valueOf,Ca=I("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ga=I("$compile"),$=X.createElement("a"),xd=Aa(Q.location.href);yd.$inject=["$document"];Kc.$inject=["$provide"];zd.$inject=["$locale"];Bd.$inject=
	["$locale"];var hc=".",hg={yyyy:aa("FullYear",4),yy:aa("FullYear",2,0,!0),y:aa("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",1),ss:aa("Seconds",2),s:aa("Seconds",1),sss:aa("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=
	a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:ic,GG:ic,GGG:ic,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},gg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,fg=/^\-?\d+$/;Ad.$inject=["$locale"];var cg=qa(F),dg=qa(sb);Cd.$inject=["$parse"];var he=qa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===
	va.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),tb={};m(Bb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=ya("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});tb[e]=function(){return{restrict:"A",priority:100,link:f}}}});m($c,function(a,c){tb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(jg))){f.$set("ngPattern",
	new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m(["src","srcset","href"],function(a){var c=ya("ng-"+a);tb[c]=function(){return{priority:99,link:function(d,e,f){var h=a,g=a;"href"===a&&"[object SVGAnimatedString]"===va.call(e.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",h=null);f.$observe(c,function(c){c?(f.$set(g,c),Wa&&h&&e.prop(h,f[g])):"href"===a&&f.$set(g,null)})}}}});var Ib={$addControl:y,$$renameControl:function(a,c){a.$name=c},$removeControl:y,$setValidity:y,
	$setDirty:y,$setPristine:y,$setSubmitted:y};Gd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Od=function(a){return["$timeout","$parse",function(c,d){function e(a){return""===a?d('this[""]').assign:d(a).assign||y}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Gd,compile:function(d,h){d.addClass(Ya).addClass(mb);var g=h.name?"name":a&&h.ngForm?"ngForm":!1;return{pre:function(a,d,f,h){var m=h[0];if(!("action"in f)){var t=function(c){a.$apply(function(){m.$commitViewValue();
	m.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",t,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",t,!1)},0,!1)})}(h[1]||m.$$parentForm).$addControl(m);var s=g?e(m.$name):y;g&&(s(a,m),f.$observe(g,function(c){m.$name!==c&&(s(a,w),m.$$parentForm.$$renameControl(m,c),s=e(m.$name),s(a,m))}));d.on("$destroy",function(){m.$$parentForm.$removeControl(m);s(a,w);P(m,Ib)})}}}}}]},ie=Od(),ve=Od(!0),ig=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
	sg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,tg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ug=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Pd=/^(\d{4})-(\d{2})-(\d{2})$/,Qd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,lc=/^(\d{4})-W(\d\d)$/,Rd=/^(\d{4})-(\d\d)$/,Sd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,h){jb(a,c,d,e,f,h);jc(e)},date:kb("date",
	Pd,Kb(Pd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Qd,Kb(Qd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Sd,Kb(Sd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",lc,function(a,c){if(ea(a))return a;if(G(a)){lc.lastIndex=0;var d=lc.exec(a);if(d){var e=+d[1],f=+d[2],h=d=0,g=0,l=0,k=Ed(e),f=7*(f-1);c&&(d=c.getHours(),h=c.getMinutes(),g=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,h,g,l)}}return NaN},"yyyy-Www"),
	month:kb("month",Rd,Kb(Rd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,h){Id(a,c,d,e);jb(a,c,d,e,f,h);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ug.test(a)?parseFloat(a):w});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw lb("numfmt",a);a=a.toString()}return a});if(A(d.min)||d.ngMin){var g;e.$validators.min=function(a){return e.$isEmpty(a)||v(g)||a>=g};d.$observe("min",function(a){A(a)&&!V(a)&&(a=parseFloat(a,10));g=V(a)&&!isNaN(a)?a:w;e.$validate()})}if(A(d.max)||
	d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||v(l)||a<=l};d.$observe("max",function(a){A(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:w;e.$validate()})}},url:function(a,c,d,e,f,h){jb(a,c,d,e,f,h);jc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},email:function(a,c,d,e,f,h){jb(a,c,d,e,f,h);jc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||tg.test(d)}},radio:function(a,c,
	d,e){v(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,h,g,l){var k=Jd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Jd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,
	k)});e.$parsers.push(function(a){return a?k:n})},hidden:y,button:y,submit:y,reset:y,file:y},Ec=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,h,g,l){l[0]&&(Td[F(g.type)]||Td.text)(f,h,g,l[0],c,a,d,e)}}}}],vg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,c){return vg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",
	a)})}}}},ne=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=v(a)?"":a})}}}}],pe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,h){d=a(f.attr(h.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];h.$observe("ngBindTemplate",function(a){f.textContent=v(a)?"":a})}}}}],oe=["$sce","$parse",
	"$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var h=c(f.ngBindHtml),g=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(g,function(){e.html(a.getTrustedHtml(h(c))||"")})}}}}],Me=qa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),qe=kc("",!0),se=kc("Odd",0),re=kc("Even",1),te=Na({compile:function(a,c){c.$set("ngCloak",
	w);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Jc={},wg={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Jc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,h){var g=d(h[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){g(c,{$event:d})};
	wg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var xe=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,h){var g,l,k;c.$watch(e.ngIf,function(c){c?l||h(function(c,f){l=f;c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+" ");g={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),g&&(k=rb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],ye=["$templateRequest","$anchorScroll",
	"$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(e,f){var h=f.ngInclude||f.src,g=f.onload||"",l=f.autoscroll;return function(e,f,m,r,t){var s=0,v,u,q,z=function(){u&&(u.remove(),u=null);v&&(v.$destroy(),v=null);q&&(d.leave(q).then(function(){u=null}),u=q,q=null)};e.$watch(h,function(h){var m=function(){!A(l)||l&&!e.$eval(l)||c()},p=++s;h?(a(h,!0).then(function(a){if(p===s){var c=e.$new();r.template=a;a=t(c,function(a){z();
	d.enter(a,null,f).then(m)});v=c;q=a;v.$emit("$includeContentLoaded",h);e.$eval(g)}},function(){p===s&&(z(),e.$emit("$includeContentError",h))}),e.$emit("$includeContentRequested",h)):(z(),r.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Mc(f.template,X).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ze=Na({priority:450,
	compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",h="false"!==d.ngTrim,g=h?T(f):f;e.$parsers.push(function(a){if(!v(a)){var c=[];a&&m(a.split(g),function(a){a&&c.push(h?T(a):a)});return c}});e.$formatters.push(function(a){return J(a)?a.join(f):w});e.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",Kd="ng-invalid",Ya="ng-pristine",Jb="ng-dirty",Md=
	"ng-pending",lb=I("ngModel"),xg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,h,g,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=w;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
	w;this.$name=n(d.name||"",!1)(a);this.$$parentForm=Ib;var p=f(d.ngModel),r=p.assign,t=p,s=r,K=null,u,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);x(d)&&(d=c(a));return d};s=function(a,c){x(p(a))?g(a,{$$$p:q.$modelValue}):r(a,q.$modelValue)}}else if(!p.assign)throw lb("nonassign",d.ngModel,xa(e));};this.$render=y;this.$isEmpty=function(a){return v(a)||""===a||null===a||a!==a};var z=0;Hd({ctrl:this,$element:e,
	set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},$animate:h});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;h.removeClass(e,Jb);h.addClass(e,Ya)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;h.removeClass(e,Ya);h.addClass(e,Jb);q.$$parentForm.$setDirty()};this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;h.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;h.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=
	function(){g.cancel(K);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!V(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,c=q.$valid,d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,function(f){e||c===f||(q.$modelValue=f?a:w,q.$modelValue!==d&&q.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;m(q.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?
	!0:(m(q.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(q.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!x(k.then))throw lb("$asyncValidators",k);g(h,w);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},y):h(!0)}function g(a,c){l===z&&q.$setValidity(a,c)}function h(a){l===z&&d(a)}z++;var l=z;(function(){var a=q.$$parserName||"parse";if(v(u))g(a,null);else return u||(m(q.$validators,function(a,c){g(c,null)}),m(q.$asyncValidators,
	function(a,c){g(c,null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(K);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=q.$$lastCommittedViewValue;if(u=v(c)?w:!0)for(var d=0;d<q.$parsers.length;d++)if(c=q.$parsers[d](c),v(c)){u=!1;break}V(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=t(a));
	var e=q.$modelValue,f=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=c;f&&(q.$modelValue=c,q.$modelValue!==e&&q.$$writeModelToScope());q.$$runValidators(c,q.$$lastCommittedViewValue,function(a){f||(q.$modelValue=a?c:w,q.$modelValue!==e&&q.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,q.$modelValue);m(q.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(c)};
	this.$$debounceViewValueCommit=function(c){var d=0,e=q.$options;e&&A(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));g.cancel(K);d?K=g(function(){q.$commitViewValue()},d):l.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==q.$modelValue&&(q.$modelValue===q.$modelValue||c===c)){q.$modelValue=q.$$rawModelValue=c;u=w;for(var d=q.$formatters,e=d.length,f=c;e--;)f=d[e](f);q.$viewValue!==f&&(q.$viewValue=
	q.$$lastCommittedViewValue=f,q.$render(),q.$$runValidators(c,f,y))}return c})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:xg,priority:1,compile:function(c){c.addClass(Ya).addClass("ng-untouched").addClass(mb);return{pre:function(a,c,f,h){var g=h[0];c=h[1]||g.$$parentForm;g.$$setOptions(h[2]&&h[2].$options);c.$addControl(g);f.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},
	post:function(c,e,f,h){var g=h[0];if(g.$options&&g.$options.updateOn)e.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){g.$touched||(a.$$phase?c.$evalAsync(g.$setTouched):c.$apply(g.$setTouched))})}}}}}],yg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=ha(a.$eval(c.ngModelOptions));A(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(yg,
	function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=Na({terminal:!0,priority:1E3}),zg=I("ngOptions"),Ag=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=
	d;this.group=e;this.disabled=g}function n(a){var c;if(!s&&Da(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(Ag);if(!m)throw zg("iexp",a,xa(d));var r=m[5]||m[7],s=m[6];a=/ as /.test(m[0])&&m[1];var v=m[9];d=c(m[2]?m[1]:r);var w=a&&c(a)||d,u=v&&c(v),q=v?function(a,c){return u(e,c)}:function(a){return Ga(a)},z=function(a,c){return q(a,x(a,c))},y=c(m[2]||m[1]),A=c(m[3]||""),O=c(m[4]||""),H=c(m[8]),B={},x=s?function(a,c){B[s]=c;B[r]=a;return B}:
	function(a){B[r]=a;return B};return{trackBy:v,getTrackByValue:z,getWatchables:c(H,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=x(a[h],h),h=q(a[h],k);c.push(h);if(m[2]||m[1])h=y(e,k),c.push(h);m[4]&&(k=O(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=H(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var p=d===g?m:g[m],r=x(d[p],p),s=w(e,r),p=q(s,r),t=y(e,r),u=A(e,r),r=O(e,r),s=new f(p,s,t,u,r);a.push(s);c[p]=s}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[z(a)]},
	getViewValueFromOption:function(a){return v?da.copy(a.viewValue):a.viewValue}}}}}var e=X.createElement("option"),f=X.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,g,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.label!==c.label&&(c.label=a.label,c.textContent=a.label);a.value!==c.value&&(c.value=a.selectValue)}function p(a,c,d,e){c&&F(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function r(a){for(var c;a;)c=
	a.nextSibling,Wb(a),a=c}function s(a){var c=q&&q[0],d=H&&H[0];if(c||d)for(;a&&(a===c||a===d||c&&8===c.nodeType);)a=a.nextSibling;return a}function v(){var a=x&&u.readValue();x=C.getOptions();var c={},d=g[0].firstChild;O&&g.prepend(q);d=s(d);x.items.forEach(function(a){var h,k;a.group?(h=c[a.group],h||(h=p(g[0],d,"optgroup",f),d=h.nextSibling,h.label=a.group,h=c[a.group]={groupElement:h,currentOptionElement:h.firstChild}),k=p(h.groupElement,h.currentOptionElement,"option",e),n(a,k),h.currentOptionElement=
	k.nextSibling):(k=p(g[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement)});r(d);w.$render();if(!w.$isEmpty(a)){var h=u.readValue();(C.trackBy?ka(a,h):a===h)||(w.$setViewValue(h),w.$render())}}var w=k[1];if(w){var u=k[0];k=l.multiple;for(var q,z=0,y=g.children(),A=y.length;z<A;z++)if(""===y[z].value){q=y.eq(z);break}var O=!!q,H=B(e.cloneNode(!1));H.val("?");var x,C=d(l.ngOptions,g,c);k?(w.$isEmpty=function(a){return!a||0===a.length},u.writeValue=
	function(a){x.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=x.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],c=[];m(a,function(a){(a=x.selectValueMap[a])&&!a.disabled&&c.push(x.getViewValueFromOption(a))});return c},C.trackBy&&c.$watchCollection(function(){if(J(w.$viewValue))return w.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){w.$render()})):(u.writeValue=function(a){var c=x.getOptionFromViewValue(a);
	c&&!c.disabled?g[0].value!==c.selectValue&&(H.remove(),O||q.remove(),g[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||O?(H.remove(),O||g.prepend(q),g.val(""),q.prop("selected",!0),q.attr("selected",!0)):(O||q.remove(),g.prepend(H),g.val("?"),H.prop("selected",!0),H.attr("selected",!0))},u.readValue=function(){var a=x.selectValueMap[g.val()];return a&&!a.disabled?(O||q.remove(),H.remove(),x.getViewValueFromOption(a)):null},C.trackBy&&c.$watch(function(){return C.getTrackByValue(w.$viewValue)},
	function(){w.$render()}));O?(q.remove(),a(q)(c),q.removeClass("ng-scope")):q=B(e.cloneNode(!1));v();c.$watchCollection(C.getWatchables,v)}}}}],Be=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(h,g,l){function k(a){g.text(a||"")}var n=l.count,p=l.$attr.when&&g.attr(l.$attr.when),r=l.offset||0,s=h.$eval(p)||{},w={},A=c.startSymbol(),u=c.endSymbol(),q=A+n+"-"+r+u,z=da.noop,x;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+F(d[2]),s[d]=g.attr(l.$attr[c]))});
	m(s,function(a,d){w[d]=c(a.replace(e,q))});h.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in s||(e=a.pluralCat(e-r));e===x||f&&V(x)&&isNaN(x)||(z(),f=w[e],v(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+p),z=y,k()):z=h.$watch(f,k),x=e)})}}}],Ce=["$parse","$animate",function(a,c){var d=I("ngRepeat"),e=function(a,c,d,e,k,m,p){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",
	multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,h){var g=h.ngRepeat,l=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",g);var n=k[1],p=k[2],r=k[3],s=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var v=k[3]||k[1],y=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",
	r);var u,q,z,A,x={$id:Ga};s?u=a(s):(z=function(a,c){return Ga(c)},A=function(a){return a});return function(a,f,h,k,n){u&&(q=function(c,d,e){y&&(x[y]=c);x[v]=d;x.$index=e;return u(a,x)});var s=fa();a.$watchCollection(p,function(h){var k,p,t=f[0],u,x=fa(),C,G,J,M,I,F,L;r&&(a[r]=h);if(Da(h))I=h,p=q||z;else for(L in p=q||A,I=[],h)ta.call(h,L)&&"$"!==L.charAt(0)&&I.push(L);C=I.length;L=Array(C);for(k=0;k<C;k++)if(G=h===I?k:I[k],J=h[G],M=p(G,J,k),s[M])F=s[M],delete s[M],x[M]=F,L[k]=F;else{if(x[M])throw m(L,
	function(a){a&&a.scope&&(s[a.id]=a)}),d("dupes",g,M,J);L[k]={id:M,scope:w,clone:w};x[M]=!0}for(u in s){F=s[u];M=rb(F.clone);c.leave(M);if(M[0].parentNode)for(k=0,p=M.length;k<p;k++)M[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<C;k++)if(G=h===I?k:I[k],J=h[G],F=L[k],F.scope){u=t;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);F.clone[0]!=u&&c.move(rb(F.clone),null,B(t));t=F.clone[F.clone.length-1];e(F.scope,k,v,J,y,G,C)}else n(function(a,d){F.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
	null,B(t));t=f;F.clone=a;x[F.id]=F;e(F.scope,k,v,J,y,G,C)});s=x})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=Na(function(a,c,d){a.$watch(d.ngStyle,
	function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var h=[],g=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=rb(g[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}g.length=0;k.length=0;(h=f.cases["!"+
	c]||f.cases["?"])&&m(h,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ge=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),He=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
	c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Je=Na({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw I("ngTransclude")("orphan",xa(c));f(function(a){c.empty();c.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Bg={$setViewValue:y,$render:y},Cg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Ua;e.ngModelCtrl=Bg;e.unknownOption=B(X.createElement("option"));
	e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=y});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};
	e.addOption=function(a,c){Ta(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=w)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:Cg,link:function(a,c,d,e){var f=e[1];if(f){var h=e[0];h.ngModelCtrl=f;f.$render=function(){h.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(h.readValue())})});
	if(d.multiple){h.readValue=function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};h.writeValue=function(a){var d=new Ua(a);m(c.find("option"),function(a){a.selected=A(d.get(a.value))})};var g,l=NaN;a.$watch(function(){l!==f.$viewValue||ka(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},me=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(c,d){if(A(d.value))var e=a(d.value,
	!0);else{var f=a(c.text(),!0);f||d.$set("value",c.text())}return function(a,c,d){function k(a){p.addOption(a,c);p.ngModelCtrl.$render();c[0].hasAttribute("selected")&&(c[0].selected=!0)}var m=c.parent(),p=m.data("$selectController")||m.parent().data("$selectController");if(p&&p.ngModelCtrl){if(e){var r;d.$observe("value",function(a){A(r)&&p.removeOption(r);r=a;k(a)})}else f?a.$watch(f,function(a,c){d.$set("value",a);c!==a&&p.removeOption(c);k(a)}):k(d.value);c.on("$destroy",function(){p.removeOption(d.value);
	p.ngModelCtrl.$render()})}}}}}],le=qa({restrict:"E",terminal:!1}),Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,h=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw I("ngPattern")("noregexp",
	h,a,xa(c));f=a||w;e.$validate()});e.$validators.pattern=function(a,c){return e.$isEmpty(c)||v(f)||f.test(c)}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=Y(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Y(a)||0;e.$validate()});
	e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ce(),ee(da),da.module("ngLocale",[],["$provide",function(a){function c(a){a+="";var c=a.indexOf(".");return-1==c?0:a.length-c-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
	SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,
	maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,e){var f=a|0,h=e;w===h&&(h=Math.min(c(a),3));Math.pow(10,h);return 1==f&&0==h?"one":"other"}})}]),B(X).ready(function(){Zd(X,zc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
	//# sourceMappingURL=angular.min.js.map


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/

	 * Version: 0.11.2 - 2014-09-26
	 * License: MIT
	 */
	angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition",function(a,b,c){function d(){e();var c=+a.interval;!isNaN(c)&&c>=0&&(g=b(f,c))}function e(){g&&(b.cancel(g),g=null)}function f(){h?(a.next(),d()):a.pause()}var g,h,i=this,j=i.slides=a.slides=[],k=-1;i.currentSlide=null;var l=!1;i.select=a.select=function(e,f){function g(){if(!l){if(i.currentSlide&&angular.isString(f)&&!a.noTransition&&e.$element){e.$element.addClass(f);{e.$element[0].offsetWidth}angular.forEach(j,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{direction:f,active:!0,entering:!0}),angular.extend(i.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(e,i.currentSlide)}else h(e,i.currentSlide);i.currentSlide=e,k=m,d()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var m=j.indexOf(e);void 0===f&&(f=m>k?"next":"prev"),e&&e!==i.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){l=!0}),i.indexOfSlide=function(a){return j.indexOf(a)},a.next=function(){var b=(k+1)%j.length;return a.$currentTransition?void 0:i.select(j[b],"next")},a.prev=function(){var b=0>k-1?j.length-1:k-1;return a.$currentTransition?void 0:i.select(j[b],"prev")},a.isActive=function(a){return i.currentSlide===a},a.$watch("interval",d),a.$on("$destroy",e),a.play=function(){h||(h=!0,d())},a.pause=function(){a.noPause||(h=!1,e())},i.addSlide=function(b,c){b.$element=c,j.push(b),1===j.length||b.active?(i.select(j[j.length-1]),1==j.length&&a.play()):b.active=!1},i.removeSlide=function(a){var b=j.indexOf(a);j.splice(b,1),j.length>0&&a.active?i.select(b>=j.length?j[b-1]:j[b]):k>b&&k--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(e,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var e={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.parse=function(b,e){if(!angular.isString(b)||!e)return b;e=a.DATETIME_FORMATS[e]||e,this.parsers[e]||(this.parsers[e]=c(e));var f=this.parsers[e],g=f.regex,h=f.map,i=b.match(g);if(i&&i.length){for(var j,k={year:1900,month:0,date:1,hours:0},l=1,m=i.length;m>l;l++){var n=h[l-1];n.apply&&n.apply.call(k,i[l])}return d(k.year,k.month,k.date)&&(j=new Date(k.year,k.month,k.date,k.hours)),j}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),r.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);q.remove(),p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){var c=b.getToggleElement();a&&c&&c[0].contains(a.target)||b.$apply(function(){b.isOpen=!1})},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.getToggleElement=function(){return h.toggleElement},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{restrict:"CA",controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{restrict:"CA",require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b,c,d){b.backdropClass=d.backdropClass||"",b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].querySelectorAll("[autofocus]").length||d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();if(h>=0&&!k){l=e.$new(!0),l.index=h;var i=angular.element("<div modal-backdrop></div>");i.attr("backdrop-class",b.backdropClass),k=d(i)(l),f.append(k)}var j=angular.element("<div modal-window></div>");j.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var o=d(j)(b.scope);n.top().value.modalDomEl=o,f.append(o),f.addClass(m)},o.close=function(a,b){var c=n.get(a);c&&(c.value.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a);c&&(c.value.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()
	});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"Â« Previous",nextText:"Next Â»",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(e,f,g,h,i,j,k){return function(e,l,m){function n(a){var b=a||o.trigger||m,d=c[b]||b;return{show:b,hide:d}}var o=angular.extend({},b,d),p=a(e),q=k.startSymbol(),r=k.endSymbol(),s="<div "+p+'-popup title="'+q+"tt_title"+r+'" content="'+q+"tt_content"+r+'" placement="'+q+"tt_placement"+r+'" animation="tt_animation" is-open="tt_isOpen"></div>';return{restrict:"EA",scope:!0,compile:function(){var a=f(s);return function(b,c,d){function f(){b.tt_isOpen?m():k()}function k(){(!y||b.$eval(d[l+"Enable"]))&&(b.tt_popupDelay?v||(v=g(p,b.tt_popupDelay,!1),v.then(function(a){a()})):p()())}function m(){b.$apply(function(){q()})}function p(){return v=null,u&&(g.cancel(u),u=null),b.tt_content?(r(),t.css({top:0,left:0,display:"block"}),w?i.find("body").append(t):c.after(t),z(),b.tt_isOpen=!0,b.$digest(),z):angular.noop}function q(){b.tt_isOpen=!1,g.cancel(v),v=null,b.tt_animation?u||(u=g(s,500)):s()}function r(){t&&s(),t=a(b,function(){}),b.$digest()}function s(){u=null,t&&(t.remove(),t=null)}var t,u,v,w=angular.isDefined(o.appendToBody)?o.appendToBody:!1,x=n(void 0),y=angular.isDefined(d[l+"Enable"]),z=function(){var a=j.positionElements(c,t,b.tt_placement,w);a.top+="px",a.left+="px",t.css(a)};b.tt_isOpen=!1,d.$observe(e,function(a){b.tt_content=a,!a&&b.tt_isOpen&&q()}),d.$observe(l+"Title",function(a){b.tt_title=a}),d.$observe(l+"Placement",function(a){b.tt_placement=angular.isDefined(a)?a:o.placement}),d.$observe(l+"PopupDelay",function(a){var c=parseInt(a,10);b.tt_popupDelay=isNaN(c)?o.popupDelay:c});var A=function(){c.unbind(x.show,k),c.unbind(x.hide,m)};d.$observe(l+"Trigger",function(a){A(),x=n(a),x.show===x.hide?c.bind(x.show,f):(c.bind(x.show,k),c.bind(x.hide,m))});var B=b.$eval(d[l+"Animation"]);b.tt_animation=angular.isDefined(B)?!!B:o.animation,d.$observe(l+"AppendToBody",function(a){w=angular.isDefined(a)?h(a)(b):w}),w&&b.$on("$locationChangeSuccess",function(){b.tt_isOpen&&q()}),b.$on("$destroy",function(){g.cancel(u),g.cancel(v),A(),s()})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var d=c.indexOf(a);if(a.active&&c.length>1){var e=d==c.length-1?d-1:d+1;b.select(c[e])}c.splice(d,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=b(k.ngModel).assign,v=g.parse(k.typeahead),w=i.$new();i.$on("$destroy",function(){w.$destroy()});var x="typeahead-"+w.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":x});var y=angular.element("<div typeahead-popup></div>");y.attr({id:x,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&y.attr("template-url",k.typeaheadTemplateUrl);var z=function(){w.matches=[],w.activeIdx=-1,j.attr("aria-expanded",!1)},A=function(a){return x+"-option-"+a};w.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",A(a))});var B=function(a){var b={$viewValue:a};q(i,!0),c.when(v.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){w.activeIdx=0,w.matches.length=0;for(var e=0;e<c.length;e++)b[v.itemName]=c[e],w.matches.push({id:A(e),label:v.viewMapper(w,b),model:c[e]});w.query=a,w.position=t?f.offset(j):f.position(j),w.position.top=w.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else z();d&&q(i,!1)},function(){z(),q(i,!1)})};z(),w.query=void 0;var C,D=function(a){C=d(function(){B(a)},o)},E=function(){C&&d.cancel(C)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(E(),D(a)):B(a):(q(i,!1),E(),z()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[v.itemName]=a,b=v.viewMapper(i,d),d[v.itemName]=void 0,c=v.viewMapper(i,d),b!==c?b:a)}),w.select=function(a){var b,c,e={};e[v.itemName]=c=w.matches[a].model,b=v.modelMapper(i,e),u(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:v.viewMapper(i,e)}),z(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==w.matches.length&&-1!==h.indexOf(a.which)&&(a.preventDefault(),40===a.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===a.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===a.which||9===a.which?w.$apply(function(){w.select(w.activeIdx)}):27===a.which&&(a.stopPropagation(),z(),w.$digest()))}),j.bind("blur",function(){m=!1});var F=function(a){j[0]!==a.target&&(z(),w.$digest())};e.bind("click",F),i.$on("$destroy",function(){e.unbind("click",F)});var G=a(y)(w);t?e.find("body").append(G):j.after(G)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
	}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]);

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.4.7
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(p,c,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,d,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(c.isDefined(b&&b.$template)){var b=a.$new(),d=r.current;m=y(b,function(b){g.enter(b,null,m||f).then(function(){!c.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=d.scope=b;l.$emit("$viewContentLoaded");
	l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(c,h,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,d=b.locals;f.html(d.$template);var y=c(f.contents());b.controller&&(d.$scope=a,d=h(b.controller,d),b.controllerAs&&(a[b.controllerAs]=d),f.data("$ngControllerController",d),f.children().data("$ngControllerController",d));y(a)}}}p=c.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return c.extend(Object.create(a),
	f)}function h(a,c){var b=c.caseInsensitiveMatch,d={originalPath:a,regexp:a},g=d.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,c,b,d){a="?"===d?d:null;d="*"===d?d:null;g.push({name:b,optional:!!a});c=c||"";return""+(a?"":c)+"(?:"+(a?c:"")+(d&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");d.regexp=new RegExp("^"+a+"$",b?"i":"");return d}var g={};this.when=function(a,f){var b=c.copy(f);c.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
	c.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=c.extend(b,a&&h(a,b));if(a){var d="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[d]=c.extend({redirectTo:a},h(d,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,d,h,p,x){function l(b){var e=s.current;
	(v=(n=k())&&e&&n.$$route===e.$$route&&c.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,c.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(c.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),d.when(e).then(function(){if(e){var a=
	c.extend({},e.resolve),b,f;c.forEach(a,function(b,e){a[e]=c.isString(b)?h.get(b):h.invoke(b,null,null,e)});c.isDefined(b=e.template)?c.isFunction(b)&&(b=b(e.params)):c.isDefined(f=e.templateUrl)&&(c.isFunction(f)&&(f=f(e.params)),c.isDefined(f)&&(e.loadedTemplateUrl=x.valueOf(f),b=p(f)));c.isDefined(b)&&(a.$template=b);return d.all(a)}}).then(function(f){e==s.current&&(e&&(e.locals=f,c.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
	e,u,b)})}function k(){var a,b;c.forEach(g,function(d,g){var q;if(q=!b){var h=f.path();q=d.keys;var l={};if(d.regexp)if(h=d.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
	g=f[1];d.push(b[g]);d.push(f[2]||"");delete b[g]}});return d.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route)a=c.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return s}]});var B=c.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});
	p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
	//# sourceMappingURL=angular-route.min.js.map


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.4.7
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(G,t,Ra){'use strict';function va(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function wa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;W(a)&&(a=a.join(" "));W(b)&&(b=b.join(" "));return a+" "+b}function Ha(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function S(a,b,c){var d="";a=W(a)?a:a&&M(a)&&a.length?a.split(/\s+/):[];q(a,function(a,u){a&&0<a.length&&(d+=0<u?" ":"",d+=c?b+a:a+b)});return d}function Ia(a){if(a instanceof J)switch(a.length){case 0:return[];
	case 1:if(1===a[0].nodeType)return a;break;default:return J(la(a))}if(1===a.nodeType)return J(a)}function la(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ja(a,b,c){q(b,function(b){a.addClass(b,c)})}function Ka(a,b,c){q(b,function(b){a.removeClass(b,c)})}function P(a){return function(b,c){c.addClass&&(Ja(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ka(a,b,c.removeClass),c.removeClass=null)}}function ha(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
	L;a.domOperation=function(){a.$$domOperationFired=!0;b();b=L};a.$$prepared=!0}return a}function da(a,b){xa(a,b);ya(a,b)}function xa(a,b){b.from&&(a.css(b.from),b.from=null)}function ya(a,b){b.to&&(a.css(b.to),b.to=null)}function Q(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),g=(b.removeClass||"")+" "+(c.removeClass||"");a=La(a.attr("class"),d,g);c.preparationClasses&&(b.preparationClasses=X(c.preparationClasses,b.preparationClasses),delete c.preparationClasses);d=b.domOperation!==L?b.domOperation:
	null;za(b,c);d&&(b.domOperation=d);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function La(a,b,c){function d(a){M(a)&&(a=a.split(" "));var b={};q(a,function(a){a.length&&(b[a]=!0)});return b}var g={};a=d(a);b=d(b);q(b,function(a,b){g[b]=1});c=d(c);q(c,function(a,b){g[b]=1===g[b]?null:-1});var u={addClass:"",removeClass:""};q(g,function(b,c){var g,d;1===b?(g="addClass",d=!a[c]):-1===b&&(g="removeClass",d=a[c]);d&&(u[g].length&&(u[g]+=" "),u[g]+=c)});
	return u}function H(a){return a instanceof t.element?a[0]:a}function Ma(a,b,c){var d="";b&&(d=S(b,"ng-",!0));c.addClass&&(d=X(d,S(c.addClass,"-add")));c.removeClass&&(d=X(d,S(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function ia(a,b){var c=b?"-"+b+"s":"";ea(a,[fa,c]);return[fa,c]}function ma(a,b){var c=b?"paused":"",d=T+"PlayState";ea(a,[d,c]);return[d,c]}function ea(a,b){a.style[b[0]]=b[1]}function X(a,b){return a?b?a+" "+b:a:b}function Aa(a,b,c){var d=Object.create(null),
	g=a.getComputedStyle(b)||{};q(c,function(a,b){var c=g[a];if(c){var f=c.charAt(0);if("-"===f||"+"===f||0<=f)c=Na(c);0===c&&(c=null);d[b]=c}});return d}function Na(a){var b=0;a=a.split(/\s*,\s*/);q(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function na(a){return 0===a||null!=a}function Ba(a,b){var c=N,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function Ca(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},
	count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Da(a,b,c){q(c,function(c){a[c]=U(a[c])?a[c]:b.style.getPropertyValue(c)})}var L=t.noop,za=t.extend,J=t.element,q=t.forEach,W=t.isArray,M=t.isString,oa=t.isObject,pa=t.isUndefined,U=t.isDefined,Ea=t.isFunction,qa=t.isElement,N,ra,T,sa;pa(G.ontransitionend)&&U(G.onwebkittransitionend)?(N="WebkitTransition",ra="webkitTransitionEnd transitionend"):
	(N="transition",ra="transitionend");pa(G.onanimationend)&&U(G.onwebkitanimationend)?(T="WebkitAnimation",sa="webkitAnimationEnd animationend"):(T="animation",sa="animationend");var ja=T+"Delay",ta=T+"Duration",fa=N+"Delay";G=N+"Duration";var Oa={transitionDuration:G,transitionDelay:fa,transitionProperty:N+"Property",animationDuration:ta,animationDelay:ja,animationIterationCount:T+"IterationCount"},Pa={transitionDuration:G,transitionDelay:fa,animationDuration:ta,animationDelay:ja};t.module("ngAnimate",
	[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;t.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),z=0;z<b.length;z++)b[z]();g||a(function(){g||c()})}}var d,g;d=b.queue=[];b.waitUntilQuiet=function(b){g&&g();g=a(function(){g=
	null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$sniffer","$$animateAsyncRun",function(a,b,c){function d(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=c();this._state=0}d.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};d.all=function(a,b){function c(z){f=f&&z;++d===a.length&&b(f)}var d=0,f=!0;q(a,function(a){a.done(c)})};d.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?
	a():this._doneCallbacks.push(a)},progress:L,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();
	this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return d}]).factory("$$animateAsyncRun",["$$rAF",function(a){function b(b){c.push(b);1<c.length||a(function(){for(var a=0;a<c.length;a++)c[a]();c=[]})}var c=[];return function(){var a=
	!1;b(function(){a=!0});return function(c){a?c():b(c)}}}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a,b,c,q){return d[a].some(function(a){return a(b,c,q)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==
	c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});d.cancel.push(function(a,b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",
	"$$forceReflow",function(d,u,z,x,f,k,$,t,h,I){function A(){var a=!1;return function(b){a?b():u.$$postDigest(function(){a=!0;b()})}}function Y(a,b){var c=H(a),e=[],d=v[b];d&&q(d,function(a){a.node.contains(c)&&e.push(a.callback)});return e}function E(a,e,l){function n(b,c,e,v){z(function(){var b=Y(a,c);b.length&&d(function(){q(b,function(b){b(a,e,v)})})});b.progress(c,e,v)}function v(b){var c=a,e=l;e.preparationClasses&&(c.removeClass(e.preparationClasses),e.preparationClasses=null);e.activeClasses&&
	(c.removeClass(e.activeClasses),e.activeClasses=null);Ga(a,l);da(a,l);l.domOperation();f.complete(!b)}var s,C;if(a=Ia(a))s=H(a),C=a.parent();l=ha(l);var f=new $,z=A();W(l.addClass)&&(l.addClass=l.addClass.join(" "));l.addClass&&!M(l.addClass)&&(l.addClass=null);W(l.removeClass)&&(l.removeClass=l.removeClass.join(" "));l.removeClass&&!M(l.removeClass)&&(l.removeClass=null);l.from&&!oa(l.from)&&(l.from=null);l.to&&!oa(l.to)&&(l.to=null);if(!s)return v(),f;var h=[s.className,l.addClass,l.removeClass].join(" ");
	if(!Qa(h))return v(),f;var E=0<=["enter","move","leave"].indexOf(e),x=!F||D.get(s),h=!x&&m.get(s)||{},I=!!h.state;x||I&&1==h.state||(x=!ka(a,C,e));if(x)return v(),f;E&&w(a);C={structural:E,element:a,event:e,close:v,options:l,runner:f};if(I){if(b("skip",a,C,h)){if(2===h.state)return v(),f;Q(a,h.options,l);return h.runner}if(b("cancel",a,C,h))if(2===h.state)h.runner.end();else if(h.structural)h.close();else return Q(a,h.options,C.options),h.runner;else if(b("join",a,C,h))if(2===h.state)Q(a,l,{});else return Ma(a,
	E?e:null,l),e=C.event=h.event,l=Q(a,h.options,C.options),h.runner}else Q(a,l,{});(I=C.structural)||(I="animate"===C.event&&0<Object.keys(C.options.to||{}).length||c(C.options));if(!I)return v(),y(a),f;var t=(h.counter||0)+1;C.counter=t;r(a,1,C);u.$$postDigest(function(){var b=m.get(s),d=!b,b=b||{},h=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||c(b.options));if(d||b.counter!==t||!h){d&&(Ga(a,l),da(a,l));if(d||E&&b.event!==e)l.domOperation(),f.end();h||y(a)}else e=!b.structural&&c(b.options,
	!0)?"setClass":b.event,r(a,2),b=k(a,e,b.options),b.done(function(b){v(!b);(b=m.get(s))&&b.counter===t&&y(H(a));n(f,e,"close",{})}),f.setHost(b),n(f,e,"start",{})});return f}function w(a){a=H(a).querySelectorAll("[data-ng-animate]");q(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=m.get(a);switch(b){case 2:c.runner.end();case 1:c&&m.remove(a)}})}function y(a){a=H(a);a.removeAttribute("data-ng-animate");m.remove(a)}function e(a,b){return H(a)===H(b)}function ka(a,b,c){c=J(x[0].body);
	var d=e(a,c)||"HTML"===a[0].nodeName,v=e(a,z),n=!1,y;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){v||(v=e(b,z));a=b[0];if(1!==a.nodeType)break;var r=m.get(a)||{};n||(n=r.structural||D.get(a));if(pa(y)||!0===y)a=b.data("$$ngAnimateChildren"),U(a)&&(y=a);if(n&&!1===y)break;v||(v=e(b,z),v||(a=b.data("$ngAnimatePin"))&&(b=a));d||(d=e(b,c));b=b.parent()}return(!n||y)&&v&&d}function r(a,b,c){c=c||{};c.state=b;a=H(a);a.setAttribute("data-ng-animate",b);c=(b=m.get(a))?za(b,c):c;m.put(a,c)}var m=new f,
	D=new f,F=null,s=u.$watch(function(){return 0===t.totalPendingRequests},function(a){a&&(s(),u.$$postDigest(function(){u.$$postDigest(function(){null===F&&(F=!0)})}))}),v={},n=a.classNameFilter(),Qa=n?function(a){return n.test(a)}:function(){return!0},Ga=P(h);return{on:function(a,b,c){b=la(b);v[a]=v[a]||[];v[a].push({node:b,callback:c})},off:function(a,b,c){function e(a,b,c){var d=la(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=v[a];d&&(v[a]=1===arguments.length?
	null:e(d,b,c))},pin:function(a,b){va(qa(a),"element","not an element");va(qa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,e){c=c||{};c.domOperation=e;return E(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!F;else if(qa(a)){var e=H(a),d=D.get(e);1===c?b=!d:(b=!!b)?d&&D.remove(e):D.put(e,!0)}else b=F=!!a;return b}}}]}]).provider("$$animation",["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=
	[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,g,u,z,x,f){function k(a){function b(a){if(a.processed)return a;a.processed=!0;var e=a.domNode,d=e.parentNode;f.put(e,a);for(var r;d;){if(r=f.get(d)){r.processed||(r=b(r));break}d=d.parentNode}(r||c).children.push(a);return a}var c={children:[]},d,f=new x;for(d=0;d<a.length;d++){var g=a[d];f.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=
	[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var m=0,f=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=m,m=0,b.push(f),f=[]);f.push(g.fn);g.children.forEach(function(a){m++;c.push(a)});a--}f.length&&b.push(f);return b}(c)}var $=[],t=P(a);return function(h,x,A){function Y(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];q(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function E(a){var b=[],
	c={};q(a,function(a,e){var d=H(a.element),v=0<=["enter","move"].indexOf(a.event),d=a.structural?Y(d):[];if(d.length){var m=v?"to":"from";q(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][m]={animationID:e,element:J(a)}})}else b.push(a)});var e={},d={};q(c,function(c,m){var f=c.from,y=c.to;if(f&&y){var g=a[f.animationID],r=a[y.animationID],s=f.animationID.toString();if(!d[s]){var h=d[s]={structural:!0,beforeStart:function(){g.beforeStart();r.beforeStart()},close:function(){g.close();
	r.close()},classes:w(g.classes,r.classes),from:g,to:r,anchors:[]};h.classes.length?b.push(h):(b.push(g),b.push(r))}d[s].anchors.push({out:f.element,"in":y.element})}else f=f?f.animationID:y.animationID,y=f.toString(),e[y]||(e[y]=!0,b.push(a[f]))});return b}function w(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],e=0;e<a.length;e++){var d=a[e];if("ng-"!==d.substring(0,3))for(var m=0;m<b.length;m++)if(d===b[m]){c.push(d);break}}return c.join(" ")}function y(a){for(var b=c.length-1;0<=b;b--){var e=
	c[b];if(u.has(e)&&(e=u.get(e)(a)))return e}}function e(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function ka(){var a=b(h);!a||"leave"===x&&A.$$domOperationFired||a.end()}function r(b){h.off("$destroy",ka);h.removeData("$$animationRunner");t(h,A);da(h,A);A.domOperation();s&&a.removeClass(h,s);h.removeClass("ng-animate");D.complete(!b)}A=ha(A);var m=0<=["enter","move","leave"].indexOf(x),D=new z({end:function(){r()},cancel:function(){r(!0)}});
	if(!c.length)return r(),D;h.data("$$animationRunner",D);var F=wa(h.attr("class"),wa(A.addClass,A.removeClass)),s=A.tempClasses;s&&(F+=" "+s,A.tempClasses=null);$.push({element:h,classes:F,event:x,structural:m,options:A,beforeStart:function(){h.addClass("ng-animate");s&&a.addClass(h,s)},close:r});h.on("$destroy",ka);if(1<$.length)return D;g.$$postDigest(function(){var a=[];q($,function(c){b(c.element)?a.push(c):c.close()});$.length=0;var c=E(a),d=[];q(c,function(a){d.push({domNode:H(a.from?a.from.element:
	a.element),fn:function(){a.beforeStart();var c,d=a.close;if(b(a.anchors?a.from.element||a.to.element:a.element)){var m=y(a);m&&(c=m.start)}c?(c=c(),c.done(function(a){d(!a)}),e(a,c)):d()}})});f(k(d))});return D}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ca(),c=Ca();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$animate",function(a,g,u,z,x,f,k,t){function Fa(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=
	++E))+"-"+a.getAttribute("class")+"-"+b}function h(f,e,h,r){var m;0<b.count(h)&&(m=c.get(h),m||(e=S(e,"-stagger"),g.addClass(f,e),m=Aa(a,f,r),m.animationDuration=Math.max(m.animationDuration,0),m.transitionDuration=Math.max(m.transitionDuration,0),g.removeClass(f,e),c.put(h,m)));return m||{}}function I(a){w.push(a);k.waitUntilQuiet(function(){b.flush();c.flush();for(var a=x(),d=0;d<w.length;d++)w[d](a);w.length=0})}function A(c,e,f){e=b.get(f);e||(e=Aa(a,c,Oa),"infinite"===e.animationIterationCount&&
	(e.animationIterationCount=1));b.put(f,e);c=e;f=c.animationDelay;e=c.transitionDelay;c.maxDelay=f&&e?Math.max(f,e):f||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var Y=P(g),E=0,w=[];return function(a,c){function d(){m()}function r(){m(!0)}function m(b){if(!(E||ua&&l)){E=!0;l=!1;c.$$skipPreparationClasses||g.removeClass(a,Z);g.removeClass(a,X);ma(n,!1);ia(n,!1);q(w,function(a){n.style[a[0]]=""});Y(a,c);da(a,c);Object.keys(v).length&&q(v,function(a,
	b){a?n.style.setProperty(b,a):n.style.removeProperty(b)});if(c.onDone)c.onDone();G&&G.complete(!b)}}function D(a){p.blockTransition&&ia(n,a);p.blockKeyframeAnimation&&ma(n,!!a)}function F(){G=new u({end:d,cancel:r});I(L);m();return{$$willAnimate:!1,start:function(){return G},end:d}}function s(){function b(){if(!E){D(!1);q(w,function(a){n.style[a[0]]=a[1]});Y(a,c);g.addClass(a,X);if(p.recalculateTimingStyles){ga=n.className+" "+Z;aa=Fa(n,ga);B=A(n,ga,aa);V=B.maxDelay;C=Math.max(V,0);K=B.maxDuration;
	if(0===K){m();return}p.hasTransitions=0<B.transitionDuration;p.hasAnimations=0<B.animationDuration}p.applyAnimationDelay&&(V="boolean"!==typeof c.delay&&na(c.delay)?parseFloat(c.delay):V,C=Math.max(V,0),B.animationDelay=V,ca=[ja,V+"s"],w.push(ca),n.style[ca[0]]=ca[1]);M=1E3*C;P=1E3*K;if(c.easing){var s,k=c.easing;p.hasTransitions&&(s=N+"TimingFunction",w.push([s,k]),n.style[s]=k);p.hasAnimations&&(s=T+"TimingFunction",w.push([s,k]),n.style[s]=k)}B.transitionDuration&&h.push(ra);B.animationDuration&&
	h.push(sa);r=Date.now();var l=M+1.5*P;s=r+l;var k=a.data("$$animateCss")||[],x=!0;if(k.length){var F=k[0];(x=s>F.expectedEndTime)?z.cancel(F.timer):k.push(m)}x&&(l=z(d,l,!1),k[0]={timer:l,expectedEndTime:s},k.push(m),a.data("$$animateCss",k));a.on(h.join(" "),f);c.to&&(c.cleanupStyles&&Da(v,n,Object.keys(c.to)),ya(a,c))}}function d(){var b=a.data("$$animateCss");if(b){for(var c=1;c<b.length;c++)b[c]();a.removeData("$$animateCss")}}function f(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||
	b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-r,0)>=M&&b>=K&&(ua=!0,m())}if(!E)if(n.parentNode){var r,h=[],s=function(a){if(ua)l&&a&&(l=!1,m());else if(l=!a,B.animationDuration)if(a=ma(n,l),l)w.push(a);else{var b=w,c=b.indexOf(a);0<=a&&b.splice(c,1)}},k=0<U&&(B.transitionDuration&&0===R.transitionDuration||B.animationDuration&&0===R.animationDuration)&&Math.max(R.animationDelay,R.transitionDelay);k?z(b,Math.floor(k*U*1E3),!1):b();J.resume=function(){s(!0)};J.pause=function(){s(!1)}}else m()}
	var v={},n=H(a);if(!n||!n.parentNode||!t.enabled())return F();c=ha(c);var w=[],x=a.attr("class"),k=Ha(c),E,l,ua,G,J,C,M,K,P;if(0===c.duration||!f.animations&&!f.transitions)return F();var ba=c.event&&W(c.event)?c.event.join(" "):c.event,Q="",O="";ba&&c.structural?Q=S(ba,"ng-",!0):ba&&(Q=ba);c.addClass&&(O+=S(c.addClass,"-add"));c.removeClass&&(O.length&&(O+=" "),O+=S(c.removeClass,"-remove"));c.applyClassesEarly&&O.length&&Y(a,c);var Z=[Q,O].join(" ").trim(),ga=x+" "+Z,X=S(Z,"-active"),x=k.to&&0<
	Object.keys(k.to).length;if(!(0<(c.keyframeStyle||"").length||x||Z))return F();var aa,R;0<c.stagger?(k=parseFloat(c.stagger),R={transitionDelay:k,animationDelay:k,transitionDuration:0,animationDuration:0}):(aa=Fa(n,ga),R=h(n,Z,aa,Pa));c.$$skipPreparationClasses||g.addClass(a,Z);c.transitionStyle&&(k=[N,c.transitionStyle],ea(n,k),w.push(k));0<=c.duration&&(k=0<n.style[N].length,k=Ba(c.duration,k),ea(n,k),w.push(k));c.keyframeStyle&&(k=[T,c.keyframeStyle],ea(n,k),w.push(k));var U=R?0<=c.staggerIndex?
	c.staggerIndex:b.count(aa):0;(ba=0===U)&&!c.skipBlocking&&ia(n,9999);var B=A(n,ga,aa),V=B.maxDelay;C=Math.max(V,0);K=B.maxDuration;var p={};p.hasTransitions=0<B.transitionDuration;p.hasAnimations=0<B.animationDuration;p.hasTransitionAll=p.hasTransitions&&"all"==B.transitionProperty;p.applyTransitionDuration=x&&(p.hasTransitions&&!p.hasTransitionAll||p.hasAnimations&&!p.hasTransitions);p.applyAnimationDuration=c.duration&&p.hasAnimations;p.applyTransitionDelay=na(c.delay)&&(p.applyTransitionDuration||
	p.hasTransitions);p.applyAnimationDelay=na(c.delay)&&p.hasAnimations;p.recalculateTimingStyles=0<O.length;if(p.applyTransitionDuration||p.applyAnimationDuration)K=c.duration?parseFloat(c.duration):K,p.applyTransitionDuration&&(p.hasTransitions=!0,B.transitionDuration=K,k=0<n.style[N+"Property"].length,w.push(Ba(K,k))),p.applyAnimationDuration&&(p.hasAnimations=!0,B.animationDuration=K,w.push([ta,K+"s"]));if(0===K&&!p.recalculateTimingStyles)return F();if(null!=c.delay){var ca=parseFloat(c.delay);
	p.applyTransitionDelay&&w.push([fa,ca+"s"]);p.applyAnimationDelay&&w.push([ja,ca+"s"])}null==c.duration&&0<B.transitionDuration&&(p.recalculateTimingStyles=p.recalculateTimingStyles||ba);M=1E3*C;P=1E3*K;c.skipBlocking||(p.blockTransition=0<B.transitionDuration,p.blockKeyframeAnimation=0<B.animationDuration&&0<R.animationDelay&&0===R.animationDuration);c.from&&(c.cleanupStyles&&Da(v,n,Object.keys(c.from)),xa(a,c));p.blockTransition||p.blockKeyframeAnimation?D(K):c.skipBlocking||ia(n,!1);return{$$willAnimate:!0,
	end:d,start:function(){if(!E)return J={end:d,cancel:r,resume:null,pause:null},G=new u(J),I(s),G}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,g,u,z,x){function f(a){return a.replace(/\bng-\S+\b/g,"")}function k(a,b){M(a)&&(a=a.split(" "));M(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}
	function t(c,h,g){function x(a){var b={},c=H(a).getBoundingClientRect();q(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=I.scrollTop;break;case "left":d+=I.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function e(){var c=f(g.attr("class")||""),d=k(c,m),c=k(m,c),d=a(r,{to:x(g),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function z(){r.remove();h.removeClass("ng-animate-shim");g.removeClass("ng-animate-shim")}var r=
	J(H(h).cloneNode(!0)),m=f(r.attr("class")||"");h.addClass("ng-animate-shim");g.addClass("ng-animate-shim");r.addClass("ng-anchor");A.append(r);var D;c=function(){var c=a(r,{addClass:"ng-anchor-out",delay:!0,from:x(h)});return c.$$willAnimate?c:null}();if(!c&&(D=e(),!D))return z();var F=c||D;return{start:function(){function a(){c&&c.end()}var b,c=F.start();c.done(function(){c=null;if(!D&&(D=e()))return c=D.start(),c.done(function(){c=null;z();b.complete()}),c;z();b.complete()});return b=new d({end:a,
	cancel:a})}}}function G(a,b,c,f){var e=h(a,L),g=h(b,L),k=[];q(f,function(a){(a=t(c,a.out,a["in"]))&&k.push(a)});if(e||g||0!==k.length)return{start:function(){function a(){q(b,function(a){a.end()})}var b=[];e&&b.push(e.start());g&&b.push(g.start());q(k,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function h(c){var d=c.element,f=c.options||{};c.structural&&(f.event=c.event,f.structural=!0,f.applyClassesEarly=!0,"leave"===c.event&&(f.onDone=
	f.domOperation));f.preparationClasses&&(f.event=X(f.event,f.preparationClasses));c=a(d,f);return c.$$willAnimate?c:null}if(!u.animations&&!u.transitions)return L;var I=x[0].body;c=H(g);var A=J(c.parentNode&&11===c.parentNode.nodeType||I.contains(c)?c:I);P(z);return function(a){return a.from&&a.to?G(a.from,a.to,a.classes,a.anchors):h(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function g(c){c=W(c)?c:c.split(" ");
	for(var d=[],f={},g=0;g<c.length;g++){var q=c[g],u=a.$$registeredAnimations[q];u&&!f[q]&&(d.push(b.get(u)),f[q]=!0)}return d}var u=P(d);return function(a,b,d,k){function t(){k.domOperation();u(a,k)}function G(a,b,d,f,e){switch(d){case "animate":b=[b,f.from,f.to,e];break;case "setClass":b=[b,A,H,e];break;case "addClass":b=[b,A,e];break;case "removeClass":b=[b,H,e];break;default:b=[b,e]}b.push(f);if(a=a.apply(a,b))if(Ea(a.start)&&(a=a.start()),a instanceof c)a.done(e);else if(Ea(a))return a;return L}
	function h(a,b,d,e,f){var g=[];q(e,function(e){var h=e[f];h&&g.push(function(){var e,f,g=!1,k=function(a){g||(g=!0,(f||L)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=G(h,a,b,d,function(a){k(!1===a)});return e})});return g}function I(a,b,d,e,f){var g=h(a,b,d,e,f);if(0===g.length){var k,u;"beforeSetClass"===f?(k=h(a,"removeClass",d,e,"beforeRemoveClass"),u=h(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(k=h(a,"removeClass",d,e,"removeClass"),u=h(a,"addClass",
	d,e,"addClass"));k&&(g=g.concat(k));u&&(g=g.concat(u))}if(0!==g.length)return function(a){var b=[];g.length&&q(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){q(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&oa(d)&&(k=d,d=null);k=ha(k);d||(d=a.attr("class")||"",k.addClass&&(d+=" "+k.addClass),k.removeClass&&(d+=" "+k.removeClass));var A=k.addClass,H=k.removeClass,E=g(d),w,y;if(E.length){var e,J;"leave"==b?(J="leave",e="afterLeave"):(J="before"+b.charAt(0).toUpperCase()+
	b.substr(1),e=b);"enter"!==b&&"move"!==b&&(w=I(a,b,k,E,J));y=I(a,b,k,E,e)}if(w||y)return{start:function(){function b(c){f=!0;t();da(a,k);g.complete(c)}var d,e=[];w&&e.push(function(a){d=w(a)});e.length?e.push(function(a){t();a(!0)}):t();y&&e.push(function(a){d=y(a)});var f=!1,g=new c({end:function(){f||((d||L)(void 0),b(void 0))},cancel:function(){f||((d||L)(!0),b(!0))}});c.chain(e,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");
	this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),t=d(a.to);if(b||t)return{start:function(){function a(){return function(){q(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());t&&d.push(t.start());c.all(d,function(a){g.complete(a)});var g=new c({end:a(),cancel:a()});return g}}}else return d(a)}}]}])})(window,window.angular);
	//# sourceMappingURL=angular-animate.min.js.map


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.4.7
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
	1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
	b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
	a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
	"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
	I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
	n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
	p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
	!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
	c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
	//# sourceMappingURL=angular-sanitize.min.js.map


/***/ },
/* 8 */
/***/ function(module, exports) {

	;(function($, window, document, undefined) {

	    var pluginName = "metisMenu",
	        defaults = {
	            toggle: true,
	            doubleTapToGo: false
	        };

	    function Plugin(element, options) {
	        this.element = $(element);
	        this.settings = $.extend({}, defaults, options);
	        this._defaults = defaults;
	        this._name = pluginName;
	        this.init();
	    }

	    Plugin.prototype = {
	        init: function() {

	            var $this = this.element,
	                $toggle = this.settings.toggle,
	                obj = this;

	            if (this.isIE() <= 9) {
	                $this.find("li.active").has("ul").children("ul").collapse("show");
	                $this.find("li").not(".active").has("ul").children("ul").collapse("hide");
	            } else {
	                $this.find("li.active").has("ul").children("ul").addClass("collapse in");
	                $this.find("li").not(".active").has("ul").children("ul").addClass("collapse");
	            }

	            //add the "doubleTapToGo" class to active items if needed
	            if (obj.settings.doubleTapToGo) {
	                $this.find("li.active").has("ul").children("a").addClass("doubleTapToGo");
	            }

	            $this.find("li").has("ul").children("a").on("click" + "." + pluginName, function(e) {
	                e.preventDefault();

	                //Do we need to enable the double tap
	                if (obj.settings.doubleTapToGo) {

	                    //if we hit a second time on the link and the href is valid, navigate to that url
	                    if (obj.doubleTapToGo($(this)) && $(this).attr("href") !== "#" && $(this).attr("href") !== "") {
	                        e.stopPropagation();
	                        document.location = $(this).attr("href");
	                        return;
	                    }
	                }

	                $(this).parent("li").toggleClass("active").children("ul").collapse("toggle");

	                if ($toggle) {
	                    $(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide");
	                    $(this).find('.fa-angle-left').toggleClass('s-rotate');
	                }

	            });
	        },

	        isIE: function() { //https://gist.github.com/padolsey/527683
	            var undef,
	                v = 3,
	                div = document.createElement("div"),
	                all = div.getElementsByTagName("i");

	            while (
	                div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->",
	                all[0]
	            ) {
	                return v > 4 ? v : undef;
	            }
	        },

	        //Enable the link on the second click.
	        doubleTapToGo: function(elem) {
	            var $this = this.element;

	            //if the class "doubleTapToGo" exists, remove it and return
	            if (elem.hasClass("doubleTapToGo")) {
	                elem.removeClass("doubleTapToGo");
	                return true;
	            }

	            //does not exists, add a new class and return false
	            if (elem.parent().children("ul").length) {
	                 //first remove all other class
	                $this.find(".doubleTapToGo").removeClass("doubleTapToGo");
	                //add the class on the current element
	                elem.addClass("doubleTapToGo");
	                return false;
	            }
	        },

	        remove: function() {
	            this.element.off("." + pluginName);
	            this.element.removeData(pluginName);
	        }

	    };

	    $.fn[pluginName] = function(options) {
	        this.each(function () {
	            var el = $(this);
	            if (el.data(pluginName)) {
	                el.data(pluginName).remove();
	            }
	            el.data(pluginName, new Plugin(this, options));
	        });
	        return this;
	    };

	})(jQuery, window, document);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	/// <reference path="../../typings/slatwallTypeScript.d.ts" />
	var hibachi_module_1 = __webpack_require__(10);
	var slatwallinterceptor_1 = __webpack_require__(132);
	var ngslatwall_module_1 = __webpack_require__(133);
	var ngslatwallmodel_module_1 = __webpack_require__(135);
	//filters
	var entityrbkey_1 = __webpack_require__(136);
	var swcurrency_1 = __webpack_require__(137);
	var slatwalladminmodule = angular.module('slatwalladmin', [
	    //Angular Modules
	    'ngAnimate',
	    'ngRoute',
	    'ngSanitize',
	    //custom modules
	    hibachi_module_1.hibachimodule.name,
	    ngslatwall_module_1.ngslatwallmodule.name,
	    ngslatwallmodel_module_1.ngslatwallmodelmodule.name,
	    //3rdParty modules
	    'ui.bootstrap'
	])
	    .constant("baseURL", $.slatwall.getConfig().baseURL)
	    .config(["$provide", '$logProvider', '$filterProvider', '$httpProvider', '$routeProvider', '$injector', '$locationProvider', 'datepickerConfig', 'datepickerPopupConfig', 'pathBuilderConfig',
	    function ($provide, $logProvider, $filterProvider, $httpProvider, $routeProvider, $injector, $locationProvider, datepickerConfig, datepickerPopupConfig, pathBuilderConfig) {
	        //configure partials path properties
	        pathBuilderConfig.setBaseURL($.slatwall.getConfig().baseURL);
	        pathBuilderConfig.setBasePartialsPath('org/Hibachi/client/src/hibachi/');
	        datepickerConfig.showWeeks = false;
	        datepickerConfig.format = 'MMM dd, yyyy hh:mm a';
	        datepickerPopupConfig.toggleWeeksText = null;
	        if (slatwallAngular.hashbang) {
	            $locationProvider.html5Mode(false).hashPrefix('!');
	        }
	        //
	        //$provide.constant("baseURL", $.slatwall.getConfig().baseURL);
	        //  var _partialsPath = $.slatwall.getConfig().baseURL + '/admin/client/partials/';
	        //   $provide.constant("partialsPath", _partialsPath);
	        //  $provide.constant("productBundlePartialsPath", _partialsPath+'productbundle/');
	        //  angular.forEach(slatwallAngular.constantPaths, function(constantPath,key){
	        //      var constantKey = constantPath.charAt(0).toLowerCase()+constantPath.slice(1)+'PartialsPath';
	        //      var constantPartialsPath = _partialsPath+constantPath.toLowerCase()+'/';
	        //      $provide.constant(constantKey, constantPartialsPath);
	        //  });
	        $logProvider.debugEnabled($.slatwall.getConfig().debugFlag);
	        $filterProvider.register('likeFilter', function () {
	            return function (text) {
	                if (angular.isDefined(text) && angular.isString(text)) {
	                    return text.replace(new RegExp('%', 'g'), '');
	                }
	            };
	        });
	        $filterProvider.register('truncate', function () {
	            return function (input, chars, breakOnWord) {
	                if (isNaN(chars))
	                    return input;
	                if (chars <= 0)
	                    return '';
	                if (input && input.length > chars) {
	                    input = input.substring(0, chars);
	                    if (!breakOnWord) {
	                        var lastspace = input.lastIndexOf(' ');
	                        //get last space
	                        if (lastspace !== -1) {
	                            input = input.substr(0, lastspace);
	                        }
	                    }
	                    else {
	                        while (input.charAt(input.length - 1) === ' ') {
	                            input = input.substr(0, input.length - 1);
	                        }
	                    }
	                    return input + '...';
	                }
	                return input;
	            };
	        });
	        $httpProvider.interceptors.push('slatwallInterceptor');
	        console.log(hibachi_module_1.hibachimodule);
	        // route provider configuration
	        $routeProvider.when('/entity/:entityName/', {
	            template: function (params) {
	                var entityDirectiveExists = $injector.has('sw' + params.entityName + 'ListDirective');
	                if (entityDirectiveExists) {
	                    return '<sw-' + params.entityName.toLowerCase() + '-list>';
	                }
	                else {
	                    return '<sw-list></sw-list>';
	                }
	            },
	            controller: 'routerController'
	        }).when('/entity/:entityName/:entityID', {
	            template: function (params) {
	                var entityDirectiveExists = $injector.has('sw' + params.entityName + 'DetailDirective');
	                if (entityDirectiveExists) {
	                    return '<sw-' + params.entityName.toLowerCase() + '-detail>';
	                }
	                else {
	                    return '<sw-detail></sw-detail>';
	                }
	            },
	            controller: 'routerController'
	        }).otherwise({
	            //controller:'otherwiseController'        
	            templateUrl: $.slatwall.getConfig().baseURL + '/admin/client/js/partials/otherwise.html'
	        });
	    }])
	    .run(['$rootScope', '$filter', '$anchorScroll', '$slatwall', 'dialogService', 'observerService', 'utilityService', 'pathBuilderConfig', function ($rootScope, $filter, $anchorScroll, $slatwall, dialogService, observerService, utilityService, pathBuilderConfig) {
	        $anchorScroll.yOffset = 100;
	        $rootScope.openPageDialog = function (partial) {
	            dialogService.addPageDialog(pathBuilderConfig.buildPartialsPath(partial));
	        };
	        $rootScope.closePageDialog = function (index) {
	            dialogService.removePageDialog(index);
	        };
	        $rootScope.loadedResourceBundle = false;
	        $rootScope.loadedResourceBundle = $slatwall.hasResourceBundle();
	        $rootScope.buildUrl = $slatwall.buildUrl;
	        $rootScope.createID = utilityService.createID;
	        var rbListener = $rootScope.$watch('loadedResourceBundle', function (newValue, oldValue) {
	            if (newValue !== oldValue) {
	                $rootScope.$broadcast('hasResourceBundle');
	                rbListener();
	            }
	        });
	    }])
	    .service('slatwallInterceptor', slatwallinterceptor_1.SlatwallInterceptor)
	    .filter('entityRBKey', ['$slatwall', entityrbkey_1.EntityRBKey.Factory])
	    .filter('swcurrency', ['$sce', '$log', '$slatwall', swcurrency_1.SWCurrency.Factory]);
	exports.slatwalladminmodule = slatwalladminmodule;
	// ((): void => {
	//     var app = angular.module('slatwalladmin', ['hibachi','ngSlatwall','ngSlatwallModel','ui.bootstrap','ngAnimate','ngRoute','ngSanitize','ngCkeditor']);
	//     app.config(
	//         ["$provide",'$logProvider','$filterProvider','$httpProvider','$routeProvider','$injector','$locationProvider','datepickerConfig', 'datepickerPopupConfig',
	//         ($provide, $logProvider,$filterProvider,$httpProvider,$routeProvider,$injector,$locationProvider,datepickerConfig, datepickerPopupConfig) =>
	//      {
	//         datepickerConfig.showWeeks = false;
	//         datepickerConfig.format = 'MMM dd, yyyy hh:mm a';
	//             datepickerPopupConfig.toggleWeeksText = null;
	//         if(slatwallAngular.hashbang){
	//             $locationProvider.html5Mode( false ).hashPrefix('!');
	//         }
	//         //
	//         $provide.constant("baseURL", $.slatwall.getConfig().baseURL);
	//         var _partialsPath = $.slatwall.getConfig().baseURL + '/admin/client/partials/';
	//         $provide.constant("partialsPath", _partialsPath);
	//         $provide.constant("productBundlePartialsPath", _partialsPath+'productbundle/');
	//         angular.forEach(slatwallAngular.constantPaths, function(constantPath,key){
	//             var constantKey = constantPath.charAt(0).toLowerCase()+constantPath.slice(1)+'PartialsPath';
	//             var constantPartialsPath = _partialsPath+constantPath.toLowerCase()+'/';
	//             $provide.constant(constantKey, constantPartialsPath);
	//         });
	//         $logProvider.debugEnabled( $.slatwall.getConfig().debugFlag );
	//         $filterProvider.register('likeFilter',function(){
	//             return function(text){
	//                 if(angular.isDefined(text) && angular.isString(text)){
	//                     return text.replace(new RegExp('%', 'g'), '');
	//                 }
	//             };
	//         });
	//         $filterProvider.register('truncate',function(){
	//             return function (input, chars, breakOnWord) {
	//                 if (isNaN(chars)) return input;
	//                 if (chars <= 0) return '';
	//                 if (input && input.length > chars) {
	//                     input = input.substring(0, chars);
	//                     if (!breakOnWord) {
	//                         var lastspace = input.lastIndexOf(' ');
	//                         //get last space
	//                         if (lastspace !== -1) {
	//                             input = input.substr(0, lastspace);
	//                         }
	//                     }else{
	//                         while(input.charAt(input.length-1) === ' '){
	//                             input = input.substr(0, input.length -1);
	//                         }
	//                     }
	//                     return input + '...';
	//                 }
	//                 return input;
	//             };
	//         });
	//         $httpProvider.interceptors.push('slatwallInterceptor');
	//         // route provider configuration
	//         $routeProvider.when('/entity/:entityName/', {
	//             template: function(params){
	//                 var entityDirectiveExists = $injector.has('sw'+params.entityName+'ListDirective');
	//                 if(entityDirectiveExists){
	//                     return '<sw-'+params.entityName.toLowerCase()+'-list>';
	//                 }else{
	//                     return '<sw-list></sw-list>';
	//                 }
	//             },
	//             controller: 'routerController'
	//         }).when('/entity/:entityName/:entityID', {
	//             template: function(params){
	//                 var entityDirectiveExists = $injector.has('sw'+params.entityName+'DetailDirective');
	//                 if(entityDirectiveExists){
	//                     return '<sw-'+params.entityName.toLowerCase()+'-detail>';
	//                 }else{
	//                     return '<sw-detail></sw-detail>';
	//                 }
	//             },
	//             controller: 'routerController',
	//         }).otherwise({
	//             //controller:'otherwiseController'        
	//             templateUrl: $.slatwall.getConfig().baseURL + '/admin/client/js/partials/otherwise.html',
	//         });  
	//     }]).run(['$rootScope','$filter','$anchorScroll','$slatwall','dialogService','observerService','utilityService', ($rootScope,$filter,$anchorScroll,$slatwall,dialogService,observerService,utilityService) => {
	//         $anchorScroll.yOffset = 100;
	//         $rootScope.openPageDialog = function( partial ) {
	//             dialogService.addPageDialog( partial );
	//         };
	//         $rootScope.closePageDialog = function( index ) {
	//             dialogService.removePageDialog( index );
	//         };
	//         $rootScope.loadedResourceBundle = false;
	//         $rootScope.loadedResourceBundle = $slatwall.hasResourceBundle();
	//         $rootScope.buildUrl = $slatwall.buildUrl;
	//         $rootScope.createID = utilityService.createID;
	//         var rbListener = $rootScope.$watch('loadedResourceBundle',function(newValue,oldValue){
	//             if(newValue !== oldValue){
	//                 $rootScope.$broadcast('hasResourceBundle');
	//                 rbListener();
	//             }
	//         });
	//     }])
	// })();


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../typings/tsd.d.ts' />
	//import alertmodule = require('./alert/alert.module');
	var alert_module_1 = __webpack_require__(11);
	var collection_module_1 = __webpack_require__(15);
	var content_module_1 = __webpack_require__(90);
	var core_module_1 = __webpack_require__(16);
	var dialog_module_1 = __webpack_require__(95);
	var giftcard_module_1 = __webpack_require__(98);
	var pagination_module_1 = __webpack_require__(109);
	var product_module_1 = __webpack_require__(112);
	var productbundle_module_1 = __webpack_require__(114);
	var workflow_module_1 = __webpack_require__(120);
	var hibachimodule = angular.module('hibachi', [
	    alert_module_1.alertmodule.name,
	    core_module_1.coremodule.name,
	    collection_module_1.collectionmodule.name,
	    content_module_1.contentmodule.name,
	    dialog_module_1.dialogmodule.name,
	    giftcard_module_1.giftcardmodule.name,
	    pagination_module_1.paginationmodule.name,
	    product_module_1.productmodule.name,
	    productbundle_module_1.productbundlemodule.name,
	    workflow_module_1.workflowmodule.name
	]);
	exports.hibachimodule = hibachimodule;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	//controllers
	var alertcontroller_1 = __webpack_require__(12);
	//services
	var alertService_1 = __webpack_require__(13);
	var alertmodule = angular.module('hibachi.alert', [])
	    .controller('alertController', alertcontroller_1.AlertController)
	    .service('alertService', alertService_1.AlertService);
	exports.alertmodule = alertmodule;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var AlertController = (function () {
	    //@ngInject
	    function AlertController($scope, alertService) {
	        $scope.$id = "alertController";
	        $scope.alerts = alertService.getAlerts();
	    }
	    return AlertController;
	})();
	exports.AlertController = AlertController;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	//import Alert = require('../model/alert');
	var alert_1 = __webpack_require__(14);
	var AlertService = (function () {
	    function AlertService($timeout, alerts) {
	        var _this = this;
	        this.$timeout = $timeout;
	        this.alerts = alerts;
	        this.newAlert = function () {
	            return new alert_1.Alert();
	        };
	        this.get = function () {
	            return _this.alerts || [];
	        };
	        this.addAlert = function (alert) {
	            _this.alerts.push(alert);
	            _this.$timeout(function (alert) {
	                _this.removeAlert(alert);
	            }, 3500);
	        };
	        this.addAlerts = function (alerts) {
	            alerts.forEach(function (alert) {
	                _this.addAlert(alert);
	            });
	        };
	        this.removeAlert = function (alert) {
	            var index = _this.alerts.indexOf(alert, 0);
	            if (index != undefined) {
	                _this.alerts.splice(index, 1);
	            }
	        };
	        this.getAlerts = function () {
	            return _this.alerts;
	        };
	        this.formatMessagesToAlerts = function (messages) {
	            var alerts = [];
	            if (messages) {
	                for (var message in messages) {
	                    var alert = new alert.Alert();
	                    alert.msg = messages[message].message;
	                    alert.type = messages[message].messageType;
	                    alerts.push(alert);
	                    if (alert.type === 'success' || alert.type === 'error') {
	                        _this.$timeout(function () {
	                            alert.fade = true;
	                        }, 3500);
	                        alert.dismissable = false;
	                    }
	                    else {
	                        alert.fade = false;
	                        alert.dismissable = true;
	                    }
	                }
	            }
	            return alerts;
	        };
	        this.removeOldestAlert = function () {
	            _this.alerts.splice(0, 1);
	        };
	        this.alerts = [];
	    }
	    AlertService.$inject = [
	        '$timeout'
	    ];
	    return AlertService;
	})();
	exports.AlertService = AlertService;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	//model
	var Alert = (function () {
	    function Alert(msg, type) {
	        this.msg = msg;
	        this.type = type;
	    }
	    return Alert;
	})();
	exports.Alert = Alert;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	//modules
	var core_module_1 = __webpack_require__(16);
	//services
	var collectionconfigservice_1 = __webpack_require__(68);
	var collectionservice_1 = __webpack_require__(69);
	//controllers
	var collections_1 = __webpack_require__(70);
	var createcollection_1 = __webpack_require__(71);
	var confirmationcontroller_1 = __webpack_require__(72);
	//directives
	var swcollection_1 = __webpack_require__(73);
	var swaddfilterbuttons_1 = __webpack_require__(74);
	var swdisplayoptions_1 = __webpack_require__(75);
	var swdisplayitem_1 = __webpack_require__(76);
	var swcollectiontable_1 = __webpack_require__(77);
	var swcolumnitem_1 = __webpack_require__(78);
	var swconditioncriteria_1 = __webpack_require__(79);
	var swcriteria_1 = __webpack_require__(80);
	var swcriteriaboolean_1 = __webpack_require__(81);
	var swcriteriamanytomany_1 = __webpack_require__(82);
	var swcriteriamanytoone_1 = __webpack_require__(83);
	var swcriterianumber_1 = __webpack_require__(84);
	var swcriteriaonetomany_1 = __webpack_require__(85);
	var swcriteriastring_1 = __webpack_require__(86);
	var sweditfilteritem_1 = __webpack_require__(87);
	var swfiltergroups_1 = __webpack_require__(88);
	var swfilteritem_1 = __webpack_require__(89);
	var collectionmodule = angular.module('hibachi.collection', [core_module_1.coremodule.name])
	    .config([function () {
	    }]).run([function () {
	    }])
	    .constant('collectionPartialsPath', 'collection/components/')
	    .controller('collections', collections_1.CollectionController)
	    .controller('confirmationController', confirmationcontroller_1.ConfirmationController)
	    .controller('createCollection', createcollection_1.CreateCollection)
	    .factory('collectionConfigService', ['$slatwall', 'utilityService', function ($slatwall, utilityService) { return new collectionconfigservice_1.CollectionConfig($slatwall, utilityService); }])
	    .service('collectionService', collectionservice_1.CollectionService)
	    .directive('swCollection', swcollection_1.SWCollection.Factory())
	    .directive('swAddFilterButtons', swaddfilterbuttons_1.SWAddFilterButtons.Factory())
	    .directive('swDisplayOptions', swdisplayoptions_1.SWDisplayOptions.Factory())
	    .directive('swDisplayItem', swdisplayitem_1.SWDisplayItem.Factory())
	    .directive('swCollectionTable', swcollectiontable_1.SWCollectionTable.Factory())
	    .directive('swColumnItem', swcolumnitem_1.SWColumnItem.Factory())
	    .directive('swConditionCriteria', swconditioncriteria_1.SWConditionCriteria.Factory())
	    .directive('swCriteria', swcriteria_1.SWCriteria.Factory())
	    .directive('swCriteriaBoolean', swcriteriaboolean_1.SWCriteriaBoolean.Factory())
	    .directive('swCriteriaManyToMany', swcriteriamanytomany_1.SWCriteriaManyToMany.Factory())
	    .directive('swCriteriaManyToOne', swcriteriamanytoone_1.SWCriteriaManyToOne.Factory())
	    .directive('swCriteriaNumber', swcriterianumber_1.SWCriteriaNumber.Factory())
	    .directive('swCriteriaOneToMany', swcriteriaonetomany_1.SWCriteriaOneToMany.Factory())
	    .directive('swCriteriaString', swcriteriastring_1.SWCriteriaString.Factory())
	    .directive('swEditFilterItem', sweditfilteritem_1.SWEditFilterItem.Factory())
	    .directive('swFilterGroups', swfiltergroups_1.SWFilterGroups.Factory())
	    .directive('swFilterItem', swfilteritem_1.SWFilterItem.Factory());
	exports.collectionmodule = collectionmodule;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	//services
	var utilityservice_1 = __webpack_require__(17);
	var selectionservice_1 = __webpack_require__(19);
	var observerservice_1 = __webpack_require__(20);
	var formservice_1 = __webpack_require__(21);
	var metadataservice_1 = __webpack_require__(22);
	//controllers
	var globalsearch_1 = __webpack_require__(23);
	var otherwisecontroller_1 = __webpack_require__(24);
	var routercontroller_1 = __webpack_require__(25);
	//filters
	var percentage_1 = __webpack_require__(26);
	//directives
	//  components
	var swactioncaller_1 = __webpack_require__(27);
	var swtypeaheadsearch_1 = __webpack_require__(28);
	var swactioncallerdropdown_1 = __webpack_require__(29);
	var swcolumnsorter_1 = __webpack_require__(30);
	var swconfirm_1 = __webpack_require__(31);
	var swentityactionbar_1 = __webpack_require__(32);
	var swentityactionbarbuttongroup_1 = __webpack_require__(33);
	var swexpandablerecord_1 = __webpack_require__(34);
	var swlistingdisplay_1 = __webpack_require__(35);
	var swlistingcolumn_1 = __webpack_require__(36);
	var swlogin_1 = __webpack_require__(37);
	var swnumbersonly_1 = __webpack_require__(38);
	var swloading_1 = __webpack_require__(39);
	var swscrolltrigger_1 = __webpack_require__(40);
	var swrbkey_1 = __webpack_require__(41);
	var swoptions_1 = __webpack_require__(42);
	var swselection_1 = __webpack_require__(43);
	var swclickoutside_1 = __webpack_require__(44);
	var swdirective_1 = __webpack_require__(45);
	var swexportaction_1 = __webpack_require__(46);
	var swhref_1 = __webpack_require__(47);
	var swprocesscaller_1 = __webpack_require__(48);
	var swresizedimage_1 = __webpack_require__(49);
	var swsortable_1 = __webpack_require__(50);
	//  entity
	var swdetail_1 = __webpack_require__(51);
	var swlist_1 = __webpack_require__(52);
	//  validation
	var swvalidate_1 = __webpack_require__(53);
	var swvalidationminlength_1 = __webpack_require__(54);
	var swvalidationdatatype_1 = __webpack_require__(55);
	var swvalidationeq_1 = __webpack_require__(56);
	var swvalidationgte_1 = __webpack_require__(57);
	var swvalidationlte_1 = __webpack_require__(58);
	var swvalidationmaxlength_1 = __webpack_require__(59);
	var swvalidationmaxvalue_1 = __webpack_require__(60);
	var swvalidationminvalue_1 = __webpack_require__(61);
	var swvalidationneq_1 = __webpack_require__(62);
	var swvalidationnumeric_1 = __webpack_require__(63);
	var swvalidationregex_1 = __webpack_require__(64);
	var swvalidationrequired_1 = __webpack_require__(65);
	var swvalidationunique_1 = __webpack_require__(66);
	var swvalidationuniqueornull_1 = __webpack_require__(67);
	var PathBuilderConfig = (function () {
	    function PathBuilderConfig() {
	        var _this = this;
	        this.setBaseURL = function (baseURL) {
	            _this.baseURL = baseURL;
	        };
	        this.setBasePartialsPath = function (basePartialsPath) {
	            _this.basePartialsPath = basePartialsPath;
	        };
	        this.buildPartialsPath = function (componentsPath) {
	            if (angular.isDefined(_this.baseURL) && angular.isDefined(_this.basePartialsPath)) {
	                return _this.baseURL + _this.basePartialsPath + componentsPath;
	            }
	            else {
	                throw ('need to define baseURL and basePartialsPath in pathBuilderConfig. Inject pathBuilderConfig into module and configure it there');
	            }
	        };
	    }
	    return PathBuilderConfig;
	})();
	var coremodule = angular.module('hibachi.core', []).config(function () {
	}).constant('pathBuilderConfig', new PathBuilderConfig())
	    .constant('corePartialsPath', 'core/components/')
	    .constant('coreEntityPartialsPath', 'core/entity')
	    .constant('coreFormPartialsPath', 'core/form')
	    .constant('coreValidationPartialsPath', 'core/validation')
	    .service('utilityService', utilityservice_1.UtilityService)
	    .service('selectionService', selectionservice_1.SelectionService)
	    .service('observerService', observerservice_1.ObserverService)
	    .service('formService', formservice_1.FormService)
	    .service('metadataService', metadataservice_1.MetaDataService)
	    .controller('globalSearch', globalsearch_1.GlobalSearchController)
	    .controller('otherwiseController', otherwisecontroller_1.OtherWiseController)
	    .controller('routerController', routercontroller_1.RouterController)
	    .filter('percentage', [percentage_1.PercentageFilter.Factory])
	    .directive('swTypeahedSearch', swtypeaheadsearch_1.SWTypeaheadSearch.Factory())
	    .directive('swActionCaller', swactioncaller_1.SWActionCaller.Factory())
	    .directive('swActionCallerDropdown', swactioncallerdropdown_1.SWActionCallerDropdown.Factory())
	    .directive('swColumnSorter', swcolumnsorter_1.SWColumnSorter.Factory())
	    .directive('swConfirm', swconfirm_1.SWConfirm.Factory())
	    .directive('swEntityActionBar', swentityactionbar_1.SWEntityActionBar.Factory())
	    .directive('swEntityActionBarButtonGroup', swentityactionbarbuttongroup_1.SWEntityActionBarButtonGroup.Factory())
	    .directive('swExpandableRecord', swexpandablerecord_1.SWExpandableRecord.Factory())
	    .directive('swListingDisplay', swlistingdisplay_1.SWListingDisplay.Factory())
	    .directive('swListingColumn', swlistingcolumn_1.SWListingColumn.Factory())
	    .directive('swLogin', swlogin_1.SWLogin.Factory())
	    .directive('swNumbersOnly', swnumbersonly_1.SWNumbersOnly.Factory())
	    .directive('swLoading', swloading_1.SWLoading.Factory())
	    .directive('swScrollTrigger', swscrolltrigger_1.SWScrollTrigger.Factory())
	    .directive('swRbkey', swrbkey_1.SWRbKey.Factory())
	    .directive('swOptions', swoptions_1.SWOptions.Factory())
	    .directive('swSelection', swselection_1.SWSelection.Factory())
	    .directive('swClickOutside', swclickoutside_1.SWClickOutside.Factory())
	    .directive('swDirective', swdirective_1.SWDirective.Factory())
	    .directive('swExportAction', swexportaction_1.SWExportAction.Factory())
	    .directive('swHref', swhref_1.SWHref.Factory())
	    .directive('swProcessCaller', swprocesscaller_1.SWProcessCaller.Factory())
	    .directive('swresizedimage', swresizedimage_1.SWResizedImage.Factory())
	    .directive('sw:sortable', swsortable_1.SWSortable.Factory())
	    .directive('swDetail', swdetail_1.SWDetail.Factory())
	    .directive('swList', swlist_1.SWList.Factory())
	    .directive('swValidate', swvalidate_1.SWValidate.Factory())
	    .directive('swvalidationminlength', swvalidationminlength_1.SWValidationMinLength.Factory())
	    .directive('swvalidationdatatype', swvalidationdatatype_1.SWValidationDataType.Factory())
	    .directive('swvalidationeq', swvalidationeq_1.SWValidationEq.Factory())
	    .directive("swvalidationgte", swvalidationgte_1.SWValidationGte.Factory())
	    .directive("swvalidationlte", swvalidationlte_1.SWValidationLte.Factory())
	    .directive('swvalidationmaxlength', swvalidationmaxlength_1.SWValidationMaxLength.Factory())
	    .directive("swvalidationmaxvalue", swvalidationmaxvalue_1.SWValidationMaxValue.Factory())
	    .directive("swvalidationminvalue", swvalidationminvalue_1.SWValidationMinValue.Factory())
	    .directive("swvalidationneq", swvalidationneq_1.SWValidationNeq.Factory())
	    .directive("swvalidationnumeric", swvalidationnumeric_1.SWValidationNumeric.Factory())
	    .directive("swvalidationregex", swvalidationregex_1.SWValidationRegex.Factory())
	    .directive("swvalidationrequired", swvalidationrequired_1.SWValidationRequired.Factory())
	    .directive("swvalidationunique", swvalidationunique_1.SWValidationUnique.Factory())
	    .directive("swvalidationuniqueornull", swvalidationuniqueornull_1.SWValidationUniqueOrNull.Factory());
	exports.coremodule = coremodule;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/*services return promises which can be handled uniquely based on success or failure by the controller*/
	var baseservice_1 = __webpack_require__(18);
	var UtilityService = (function (_super) {
	    __extends(UtilityService, _super);
	    function UtilityService() {
	        var _this = this;
	        _super.call(this);
	        this.getQueryParamsFromUrl = function (url) {
	            // This function is anonymous, is executed immediately and 
	            // the return value is assigned to QueryString!
	            var query_string = {};
	            if (url && url.split) {
	                var spliturl = url.split('?');
	                if (spliturl.length) {
	                    url = spliturl[1];
	                    if (url && url.split) {
	                        var vars = url.split("&");
	                        if (vars && vars.length) {
	                            for (var i = 0; i < vars.length; i++) {
	                                var pair = vars[i].split("=");
	                                // If first entry with this name
	                                if (typeof query_string[pair[0]] === "undefined") {
	                                    query_string[pair[0]] = pair[1];
	                                }
	                                else if (typeof query_string[pair[0]] === "string") {
	                                    var arr = [query_string[pair[0]], pair[1]];
	                                    query_string[pair[0]] = arr;
	                                }
	                                else {
	                                    query_string[pair[0]].push(pair[1]);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	            return query_string;
	        };
	        this.ArrayFindByPropertyValue = function (arr, property, value) {
	            var currentIndex = -1;
	            arr.forEach(function (arrItem, index) {
	                if (arrItem[property] && arrItem[property] === value) {
	                    currentIndex = index;
	                }
	            });
	            return currentIndex;
	        };
	        this.listLast = function (list, delimiter) {
	            if (list === void 0) { list = ''; }
	            if (delimiter === void 0) { delimiter = ','; }
	            var listArray = list.split(delimiter);
	            return listArray[listArray.length - 1];
	        };
	        this.listRest = function (list, delimiter) {
	            if (list === void 0) { list = ''; }
	            if (delimiter === void 0) { delimiter = ","; }
	            var listArray = list.split(delimiter);
	            if (listArray.length) {
	                listArray.splice(0, 1);
	            }
	            return listArray.join(delimiter);
	        };
	        this.listFirst = function (list, delimiter) {
	            if (list === void 0) { list = ''; }
	            if (delimiter === void 0) { delimiter = ','; }
	            var listArray = list.split(delimiter);
	            return listArray[0];
	        };
	        this.listPrepend = function (list, substring, delimiter) {
	            if (list === void 0) { list = ''; }
	            if (delimiter === void 0) { delimiter = ','; }
	            var listArray = list.split(delimiter);
	            if (listArray.length) {
	                return substring + delimiter + list;
	            }
	            else {
	                return substring;
	            }
	        };
	        this.listAppend = function (list, substring, delimiter) {
	            if (list === void 0) { list = ''; }
	            if (delimiter === void 0) { delimiter = ','; }
	            var listArray = list.split(delimiter);
	            if (listArray.length) {
	                return list + delimiter + substring;
	            }
	            else {
	                return substring;
	            }
	        };
	        this.formatValue = function (value, formatType, formatDetails, entityInstance) {
	            if (angular.isUndefined(formatDetails)) {
	                formatDetails = {};
	            }
	            var typeList = ["currency", "date", "datetime", "pixels", "percentage", "second", "time", "truefalse", "url", "weight", "yesno"];
	            if (typeList.indexOf(formatType)) {
	                _this['format_' + formatType](value, formatDetails, entityInstance);
	            }
	            return value;
	        };
	        this.format_currency = function (value, formatDetails, entityInstance) {
	            if (angular.isUndefined) {
	                formatDetails = {};
	            }
	        };
	        this.format_date = function (value, formatDetails, entityInstance) {
	            if (angular.isUndefined) {
	                formatDetails = {};
	            }
	        };
	        this.format_datetime = function (value, formatDetails, entityInstance) {
	            if (angular.isUndefined) {
	                formatDetails = {};
	            }
	        };
	        this.format_pixels = function (value, formatDetails, entityInstance) {
	            if (angular.isUndefined) {
	                formatDetails = {};
	            }
	        };
	        this.format_yesno = function (value, formatDetails, entityInstance) {
	            if (angular.isUndefined) {
	                formatDetails = {};
	            }
	            if (Boolean(value) === true) {
	                return entityInstance.metaData.$$getRBKey("define.yes");
	            }
	            else if (value === false || value.trim() === 'No' || value.trim === 'NO' || value.trim() === '0') {
	                return entityInstance.metaData.$$getRBKey("define.no");
	            }
	        };
	        this.left = function (stringItem, count) {
	            return stringItem.substring(0, count);
	        };
	        this.right = function (stringItem, count) {
	            return stringItem.substring(stringItem.length - count, stringItem.length);
	        };
	        //this.utilityService.mid(propertyIdentifier,1,propertyIdentifier.lastIndexOf('.'));
	        this.mid = function (stringItem, start, count) {
	            var end = start + count;
	            return stringItem.substring(start, end);
	        };
	        this.replaceAll = function (stringItem, find, replace) {
	            return stringItem.replace(new RegExp(_this.escapeRegExp(find), 'g'), replace);
	        };
	        this.escapeRegExp = function (stringItem) {
	            return stringItem.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	        };
	        this.createID = function (count) {
	            var count = count || 26;
	            var text = "";
	            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	            for (var i = 0; i < count; i++)
	                text += possible.charAt(Math.floor(Math.random() * possible.length));
	            return text;
	        };
	        //list functions
	        this.arrayToList = function (array, delimiter) {
	            if (delimiter != null) {
	                return array.join(delimiter);
	            }
	            else {
	                return array.join();
	            }
	        };
	        this.listFind = function (list, value, delimiter) {
	            if (list === void 0) { list = ''; }
	            if (delimiter === void 0) { delimiter = ','; }
	            var splitString = list.split(delimiter);
	            var stringFound = -1;
	            for (var i = 0; i < splitString.length; i++) {
	                var stringPart = splitString[i];
	                if (stringPart === value) {
	                    stringFound = i;
	                }
	            }
	            return stringFound;
	        };
	        this.listLen = function (list, delimiter) {
	            if (list === void 0) { list = ''; }
	            if (delimiter === void 0) { delimiter = ','; }
	            var splitString = list.split(delimiter);
	            return splitString.length;
	        };
	        //This will enable you to sort by two separate keys in the order they are passed in
	        this.arraySorter = function (array, keysToSortBy) {
	            var arrayOfTypes = [], returnArray = [], firstKey = keysToSortBy[0];
	            if (angular.isDefined(keysToSortBy[1])) {
	                var secondKey = keysToSortBy[1];
	            }
	            for (var itemIndex in array) {
	                if (!(arrayOfTypes.indexOf(array[itemIndex][firstKey]) > -1)) {
	                    arrayOfTypes.push(array[itemIndex][firstKey]);
	                }
	            }
	            arrayOfTypes.sort(function (a, b) {
	                if (a < b) {
	                    return -1;
	                }
	                else if (a > b) {
	                    return 1;
	                }
	                else {
	                    return 0;
	                }
	            });
	            for (var typeIndex in arrayOfTypes) {
	                var tempArray = [];
	                for (var itemIndex in array) {
	                    if (array[itemIndex][firstKey] == arrayOfTypes[typeIndex]) {
	                        tempArray.push(array[itemIndex]);
	                    }
	                }
	                if (keysToSortBy[1] != null) {
	                    tempArray.sort(function (a, b) {
	                        if (a[secondKey] < b[secondKey]) {
	                            return -1;
	                        }
	                        else if (a[secondKey] > b[secondKey]) {
	                            return 1;
	                        }
	                        else {
	                            return 0;
	                        }
	                    });
	                }
	                for (var finalIndex in tempArray) {
	                    returnArray.push(tempArray[finalIndex]);
	                }
	            }
	            return returnArray;
	        };
	    }
	    return UtilityService;
	})(baseservice_1.BaseService);
	exports.UtilityService = UtilityService;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var BaseService = (function () {
	    function BaseService() {
	    }
	    return BaseService;
	})();
	exports.BaseService = BaseService;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/*services return promises which can be handled uniquely based on success or failure by the controller*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var baseservice_1 = __webpack_require__(18);
	var SelectionService = (function (_super) {
	    __extends(SelectionService, _super);
	    function SelectionService() {
	        var _this = this;
	        _super.call(this);
	        this._selection = {};
	        this.radioSelection = function (selectionid, selection) {
	            _this._selection[selectionid] = [];
	            _this._selection[selectionid].push(selection);
	        };
	        this.addSelection = function (selectionid, selection) {
	            if (angular.isUndefined(_this._selection[selectionid])) {
	                _this._selection[selectionid] = [];
	            }
	            _this._selection[selectionid].push(selection);
	        };
	        this.setSelection = function (selectionid, selections) {
	            _this._selection[selectionid] = selections;
	        };
	        this.removeSelection = function (selection, selectionid) {
	            if (angular.isUndefined(_this._selection[selectionid])) {
	                _this._selection[selectionid] = [];
	            }
	            var index = _this._selection[selectionid].indexOf(selection);
	            if (index > -1) {
	                _this._selection[selectionid].splice(index, 1);
	            }
	        };
	        this.hasSelection = function (selectionid, selection) {
	            if (angular.isUndefined(_this._selection[selectionid])) {
	                return false;
	            }
	            var index = _this._selection[selectionid].indexOf(selection);
	            if (index > -1) {
	                return true;
	            }
	        };
	        this.getSelections = function (selectionid) {
	            return _this._selection[selectionid];
	        };
	        this.clearSelection = function (selectionid) {
	            _this._selection[selectionid] = [];
	        };
	    }
	    return SelectionService;
	})(baseservice_1.BaseService);
	exports.SelectionService = SelectionService;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * @ngdoc service
	 * @name sdt.models:ObserverService
	 * @description
	 * # ObserverService
	 * Manages all events inside the application
	 *
	 */
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var baseservice_1 = __webpack_require__(18);
	var ObserverService = (function (_super) {
	    __extends(ObserverService, _super);
	    //@ngInject
	    function ObserverService(utilityService) {
	        var _this = this;
	        /**
	         * @ngdoc property
	         * @name ObserverService#observers
	         * @propertyOf sdt.models:ObserverService
	         * @description object to store all observers in
	         * @returns {object} object
	         */
	        _super.call(this);
	        this.utilityService = utilityService;
	        /* Declare methods */
	        /**
	         * @ngdoc method
	         * @name ObserverService#attach
	         * @methodOf sdt.models:ObserverService
	         * @param {function} callback the callback function to fire
	         * @param {string} event name of the event
	         * @param {string} id unique id for the object that is listening i.e. namespace
	         * @description adds events listeners
	         */
	        this.attach = function (callback, event, id) {
	            if (!id) {
	                id = _this.utilityService.createID();
	            }
	            if (!_this.observers[event]) {
	                _this.observers[event] = {};
	            }
	            if (!_this.observers[event][id])
	                _this.observers[event][id] = [];
	            _this.observers[event][id].push(callback);
	        };
	        /**
	         * @ngdoc method
	         * @name ObserverService#detachById
	         * @methodOf sdt.models:ObserverService
	         * @param {string} id unique id for the object that is listening i.e. namespace
	         * @description removes all events for a specific id from the observers object
	         */
	        this.detachById = function (id) {
	            for (var event in _this.observers) {
	                _this.detachByEventAndId(event, id);
	            }
	        };
	        /**
	         * @ngdoc method
	         * @name ObserverService#detachById
	         * @methodOf sdt.models:ObserverService
	         * @param {string} event name of the event
	         * @description removes removes all the event from the observer object
	         */
	        this.detachByEvent = function (event) {
	            if (event in _this.observers) {
	                delete _this.observers[event];
	            }
	        };
	        /**
	         * @ngdoc method
	         * @name ObserverService#detachByEventAndId
	         * @methodOf sdt.models:ObserverService
	         * @param {string} event name of the event
	         * @param {string} id unique id for the object that is listening i.e. namespace
	         * @description removes removes all callbacks for an id in a specific event from the observer object
	         */
	        this.detachByEventAndId = function (event, id) {
	            if (event in _this.observers) {
	                if (id in _this.observers[event]) {
	                    delete _this.observers[event][id];
	                }
	            }
	        };
	        /**
	         * @ngdoc method
	         * @name ObserverService#notify
	         * @methodOf sdt.models:ObserverService
	         * @param {string} event name of the event
	         * @param {string|object|array|number} parameters pass whatever your listener is expecting
	         * @description notifies all observers of a specific event
	         */
	        this.notify = function (event, parameters) {
	            for (var id in _this.observers[event]) {
	                angular.forEach(_this.observers[event][id], function (callback) {
	                    callback(parameters);
	                });
	            }
	        };
	        this.observers = {};
	    }
	    return ObserverService;
	})(baseservice_1.BaseService);
	exports.ObserverService = ObserverService;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var Form = (function () {
	    function Form(name, object, editing) {
	        this.$addControl = function (control) { };
	        this.$removeControl = function (control) { };
	        this.$setValidity = function (validationErrorKey, isValid, control) { };
	        this.$setDirty = function () { };
	        this.$setPristine = function () { };
	        this.$commitViewValue = function () { };
	        this.$rollbackViewValue = function () { };
	        this.$setSubmitted = function () { };
	        this.$setUntouched = function () { };
	        this.name = name;
	        this.object = object;
	        this.editing = editing;
	    }
	    return Form;
	})();
	var FormService = (function () {
	    function FormService($log) {
	        var _this = this;
	        this.$log = $log;
	        this.setPristinePropertyValue = function (property, value) {
	            _this._pristinePropertyValue[property] = value;
	        };
	        this.getPristinePropertyValue = function (property) {
	            return _this._pristinePropertyValue[property];
	        };
	        this.setForm = function (form) {
	            _this._forms[form.name] = form;
	        };
	        this.getForm = function (formName) {
	            return _this._forms[formName];
	        };
	        this.getForms = function () {
	            return _this._forms;
	        };
	        this.getFormsByObjectName = function (objectName) {
	            var forms = [];
	            for (var f in _this._forms) {
	                if (angular.isDefined(_this._forms[f].$$swFormInfo.object) && _this._forms[f].$$swFormInfo.object.metaData.className === objectName) {
	                    forms.push(_this._forms[f]);
	                }
	            }
	            return forms;
	        };
	        this.createForm = function (name, object, editing) {
	            var _form = new Form(name, object, editing);
	            _this.setForm(_form);
	            return _form;
	        };
	        this.resetForm = function (form) {
	            _this.$log.debug('resetting form');
	            _this.$log.debug(form);
	            for (var key in form) {
	                if (angular.isDefined(form[key])
	                    && typeof form[key].$setViewValue == 'function'
	                    && angular.isDefined(form[key].$viewValue)) {
	                    _this.$log.debug(form[key]);
	                    if (angular.isDefined(_this.getPristinePropertyValue(key))) {
	                        form[key].$setViewValue(_this.getPristinePropertyValue(key));
	                    }
	                    else {
	                        form[key].$setViewValue('');
	                    }
	                    form[key].$setUntouched(true);
	                    form[key].$render();
	                    _this.$log.debug(form[key]);
	                }
	            }
	            form.$submitted = false;
	            form.$setPristine();
	            form.$setUntouched();
	        };
	        this.$log = $log;
	        this._forms = {};
	        this._pristinePropertyValue = {};
	    }
	    FormService.$inject = ['$log'];
	    return FormService;
	})();
	exports.FormService = FormService;


/***/ },
/* 22 */
/***/ function(module, exports) {

	var MetaDataService = (function () {
	    function MetaDataService($filter, $log) {
	        var _this = this;
	        this.$filter = $filter;
	        this.$log = $log;
	        this.getPropertiesList = function () {
	            return _this._propertiesList;
	        };
	        this.getPropertiesListByBaseEntityAlias = function (baseEntityAlias) {
	            return _this._propertiesList[baseEntityAlias];
	        };
	        this.setPropertiesList = function (value, key) {
	            _this._propertiesList[key] = value;
	        };
	        this.formatPropertiesList = function (propertiesList, propertyIdentifier) {
	            var simpleGroup = {
	                $$group: 'simple'
	            };
	            propertiesList.data.push(simpleGroup);
	            var drillDownGroup = {
	                $$group: 'drilldown'
	            };
	            propertiesList.data.push(drillDownGroup);
	            var compareCollections = {
	                $$group: 'compareCollections'
	            };
	            propertiesList.data.push(compareCollections);
	            var attributeCollections = {
	                $$group: 'attribute'
	            };
	            propertiesList.data.push(attributeCollections);
	            for (var i in propertiesList.data) {
	                if (angular.isDefined(propertiesList.data[i].ormtype)) {
	                    if (angular.isDefined(propertiesList.data[i].attributeID)) {
	                        propertiesList.data[i].$$group = 'attribute';
	                    }
	                    else {
	                        propertiesList.data[i].$$group = 'simple';
	                    }
	                }
	                if (angular.isDefined(propertiesList.data[i].fieldtype)) {
	                    if (propertiesList.data[i].fieldtype === 'id') {
	                        propertiesList.data[i].$$group = 'simple';
	                    }
	                    if (propertiesList.data[i].fieldtype === 'many-to-one') {
	                        propertiesList.data[i].$$group = 'drilldown';
	                    }
	                    if (propertiesList.data[i].fieldtype === 'many-to-many' || propertiesList.data[i].fieldtype === 'one-to-many') {
	                        propertiesList.data[i].$$group = 'compareCollections';
	                    }
	                }
	                propertiesList.data[i].propertyIdentifier = propertyIdentifier + '.' + propertiesList.data[i].name;
	            }
	            //propertiesList.data = _orderBy(propertiesList.data,['displayPropertyIdentifier'],false);
	            //--------------------------------Removes empty lines from dropdown.
	            var temp = [];
	            for (var i = 0; i <= propertiesList.data.length - 1; i++) {
	                if (propertiesList.data[i].propertyIdentifier.indexOf(".undefined") != -1) {
	                    _this.$log.debug("removing: " + propertiesList.data[i].displayPropertyIdentifier);
	                    propertiesList.data[i].displayPropertyIdentifier = "hide";
	                }
	                else {
	                    temp.push(propertiesList.data[i]);
	                    _this.$log.debug(propertiesList.data[i]);
	                }
	            }
	            temp.sort;
	            propertiesList.data = temp;
	            _this.$log.debug("----------------------PropertyList\n\n\n\n\n");
	            propertiesList.data = _this._orderBy(propertiesList.data, ['propertyIdentifier'], false);
	            //--------------------------------End remove empty lines.
	        };
	        this.orderBy = function (propertiesList, predicate, reverse) {
	            return _this._orderBy(propertiesList, predicate, reverse);
	        };
	        this.$filter = $filter;
	        this.$log = $log;
	        this._propertiesList = {};
	        this._orderBy = $filter('orderBy');
	    }
	    MetaDataService.$inject = [
	        '$filter',
	        '$log'
	    ];
	    return MetaDataService;
	})();
	exports.MetaDataService = MetaDataService;


/***/ },
/* 23 */
/***/ function(module, exports) {

	var GlobalSearchController = (function () {
	    //@ngInject
	    function GlobalSearchController($scope, $log, $window, $timeout, $slatwall) {
	        $scope.keywords = '';
	        $scope.searchResultsOpen = false;
	        $scope.sidebarClass = 'sidebar';
	        $scope.loading = false; //Set loading wheel to false
	        $scope.resultsFound = true; // Set the results Found to true because no search has been done yet
	        $scope.searchResults = {
	            'product': {
	                'title': 'Products',
	                'resultNameFilter': function (data) {
	                    return data['productName'];
	                },
	                'results': [],
	                'id': function (data) {
	                    return data['productID'];
	                }
	            },
	            'brand': {
	                'title': $slatwall.getRBKey('entity.Brands'),
	                'resultNameFilter': function (data) {
	                    return data['brandName'];
	                },
	                'results': [],
	                'id': function (data) {
	                    return data['brandID'];
	                }
	            },
	            'account': {
	                'title': 'Accounts',
	                'resultNameFilter': function (data) {
	                    return data['firstName'] + ' ' + data['lastName'];
	                },
	                'results': [],
	                'id': function (data) {
	                    return data['accountID'];
	                }
	            },
	            'vendor': {
	                'title': 'Vendors',
	                'resultNameFilter': function (data) {
	                    return data['vendorName'];
	                },
	                'results': [],
	                'id': function (data) {
	                    return data['vendorID'];
	                }
	            }
	        };
	        var _timeoutPromise;
	        var _loadingCount = 0;
	        $scope.updateSearchResults = function () {
	            $scope.loading = true;
	            $scope.showResults();
	            if (_timeoutPromise) {
	                $timeout.cancel(_timeoutPromise);
	            }
	            _timeoutPromise = $timeout(function () {
	                // If no keywords, then set everything back to their defaults
	                if ($scope.keywords === '') {
	                    $scope.hideResults();
	                }
	                else {
	                    $scope.showResults();
	                    // Set the loadingCount to the number of AJAX Calls we are about to do
	                    _loadingCount = Object.keys($scope.searchResults).length;
	                    for (var entityName in $scope.searchResults) {
	                        (function (entityName) {
	                            var searchPromise = $slatwall.getEntity(entityName, { keywords: $scope.keywords, pageShow: 4, deferkey: 'global-search-' + entityName });
	                            searchPromise.then(function (data) {
	                                // Clear out the old Results
	                                $scope.searchResults[entityName].results = [];
	                                $scope.searchResults[entityName].title = $slatwall.getRBKey('entity.' + entityName.toLowerCase() + '_plural');
	                                // push in the new results
	                                for (var i in data.pageRecords) {
	                                    $scope.searchResults[entityName].results.push({
	                                        'name': $scope.searchResults[entityName].resultNameFilter(data.pageRecords[i]),
	                                        'link': '?slatAction=entity.detail' + entityName + '&' + entityName + 'ID=' + $scope.searchResults[entityName].id(data.pageRecords[i])
	                                    });
	                                }
	                                // Increment Down The Loading Count
	                                _loadingCount--;
	                                // If the loadingCount drops to 0, then we can update scope
	                                if (_loadingCount == 0) {
	                                    $scope.loading = false;
	                                    var _foundResults = false;
	                                    for (var _thisEntityName in $scope.searchResults) {
	                                        if ($scope.searchResults[_thisEntityName].results.length) {
	                                            _foundResults = true;
	                                            break;
	                                        }
	                                    }
	                                    $scope.resultsFound = _foundResults;
	                                }
	                            });
	                        })(entityName);
	                    }
	                }
	            }, 500);
	        };
	        $scope.showResults = function () {
	            $scope.searchResultsOpen = true;
	            $scope.sidebarClass = 'sidebar s-search-width';
	            $window.onclick = function (event) {
	                var _targetClassOfSearch = event.target.parentElement.offsetParent.classList.contains('sidebar');
	                if (!_targetClassOfSearch) {
	                    $scope.hideResults();
	                    $scope.$apply();
	                }
	            };
	        };
	        $scope.hideResults = function () {
	            $scope.searchResultsOpen = false;
	            $scope.sidebarClass = 'sidebar';
	            $scope.search.$setPristine();
	            $scope.keywords = "";
	            $window.onclick = null;
	            $scope.loading = false;
	            $scope.resultsFound = true;
	            for (var entityName in $scope.searchResults) {
	                $scope.searchResults[entityName].results = [];
	            }
	        };
	    }
	    return GlobalSearchController;
	})();
	exports.GlobalSearchController = GlobalSearchController;


/***/ },
/* 24 */
/***/ function(module, exports) {

	var OtherWiseController = (function () {
	    //@ngInject
	    function OtherWiseController($scope) {
	        $scope.$id = "otherwiseController";
	    }
	    return OtherWiseController;
	})();
	exports.OtherWiseController = OtherWiseController;


/***/ },
/* 25 */
/***/ function(module, exports) {

	var RouterController = (function () {
	    //@ngInject
	    function RouterController($scope, $routeParams, $location, $log, partialsPath, baseURL) {
	        $scope.$id = "routerController";
	        $scope.partialRoute = '';
	        $log.debug($routeParams);
	        $log.debug($location);
	        var path = $location.path();
	        $scope.controllerType = path.split('/')[1];
	        var type;
	        if ($scope.controllerType === 'entity') {
	            $scope.entityName = $routeParams.entityName;
	            if (angular.isDefined($routeParams.entityID)) {
	                $scope.entityID = $routeParams.entityID || '';
	            }
	        }
	    }
	    return RouterController;
	})();
	exports.RouterController = RouterController;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var PercentageFilter = (function () {
	    function PercentageFilter() {
	    }
	    PercentageFilter.Factory = function () {
	        return function (input, decimals, suffix) {
	            decimals = angular.isNumber(decimals) ? decimals : 3;
	            suffix = suffix || '%';
	            if (isNaN(input)) {
	                return '';
	            }
	            return Math.round(input * Math.pow(10, decimals + 2)) / Math.pow(10, decimals) + suffix;
	        };
	    };
	    return PercentageFilter;
	})();
	exports.PercentageFilter = PercentageFilter;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWActionCallerController = (function () {
	    //@ngInject
	    function SWActionCallerController($scope, $element, $templateRequest, $compile, corePartialsPath, utilityService, $slatwall, pathBuilderConfig) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$element = $element;
	        this.$templateRequest = $templateRequest;
	        this.$compile = $compile;
	        this.corePartialsPath = corePartialsPath;
	        this.utilityService = utilityService;
	        this.$slatwall = $slatwall;
	        this.init = function () {
	            //			this.class = this.utilityService.replaceAll(this.utilityService.replaceAll(this.getAction(),':',''),'.','') + ' ' + this.class;
	            _this.type = _this.type || 'link';
	            //			this.actionItem = this.getActionItem();
	            //			this.actionItemEntityName = this.getActionItemEntityName();
	            //			this.text = this.getText();
	            //			if(this.getDisabled()){
	            //				this.getDisabledText();
	            //			}else if(this.getConfirm()){
	            //				this.getConfirmText();
	            //			}
	            //
	            //			if(this.modalFullWidth && !this.getDisabled()){
	            //				this.class = this.class + " modalload-fullwidth";
	            //			}
	            //
	            //			if(this.modal && !this.getDisabled() && !this.modalFullWidth){
	            //				this.class = this.class + " modalload";
	            //			}
	            /*need authentication lookup by api to disable
	            <cfif not attributes.hibachiScope.authenticateAction(action=attributes.action)>
	                <cfset attributes.class &= " disabled" />
	            </cfif>
	            */
	        };
	        this.getAction = function () {
	            return _this.action || '';
	        };
	        this.getActionItem = function () {
	            return _this.utilityService.listLast(_this.getAction(), '.');
	        };
	        this.getActionItemEntityName = function () {
	            var firstFourLetters = _this.utilityService.left(_this.actionItem, 4);
	            var firstSixLetters = _this.utilityService.left(_this.actionItem, 6);
	            var minus4letters = _this.utilityService.right(_this.actionItem, 4);
	            var minus6letters = _this.utilityService.right(_this.actionItem, 6);
	            var actionItemEntityName = "";
	            if (firstFourLetters === 'list' && _this.actionItem.length > 4) {
	                actionItemEntityName = minus4letters;
	            }
	            else if (firstFourLetters === 'edit' && _this.actionItem.length > 4) {
	                actionItemEntityName = minus4letters;
	            }
	            else if (firstFourLetters === 'save' && _this.actionItem.length > 4) {
	                actionItemEntityName = minus4letters;
	            }
	            else if (firstSixLetters === 'create' && _this.actionItem.length > 6) {
	                actionItemEntityName = minus6letters;
	            }
	            else if (firstSixLetters === 'detail' && _this.actionItem.length > 6) {
	                actionItemEntityName = minus6letters;
	            }
	            else if (firstSixLetters === 'delete' && _this.actionItem.length > 6) {
	                actionItemEntityName = minus6letters;
	            }
	            return actionItemEntityName;
	        };
	        this.getTitle = function () {
	            //if title is undefined then use text
	            if (angular.isUndefined(_this.title) || !_this.title.length) {
	                _this.title = _this.getText();
	            }
	            return _this.title;
	        };
	        this.getTextByRBKeyByAction = function (actionItemType, plural) {
	            if (plural === void 0) { plural = false; }
	            var navRBKey = _this.$slatwall.getRBKey('admin.define.' + actionItemType + '_nav');
	            var entityRBKey = '';
	            var replaceKey = '';
	            if (plural) {
	                entityRBKey = _this.$slatwall.getRBKey('entity.' + _this.actionItemEntityName + '_plural');
	                replaceKey = '${itemEntityNamePlural}';
	            }
	            else {
	                entityRBKey = _this.$slatwall.getRBKey('entity.' + _this.actionItemEntityName);
	                replaceKey = '${itemEntityName}';
	            }
	            return _this.utilityService.replaceAll(navRBKey, replaceKey, entityRBKey);
	        };
	        this.getText = function () {
	            //if we don't have text then make it up based on rbkeys
	            if (angular.isUndefined(_this.text) || (angular.isDefined(_this.text) && !_this.text.length)) {
	                _this.text = _this.$slatwall.getRBKey(_this.utilityService.replaceAll(_this.getAction(), ":", ".") + '_nav');
	                var minus8letters = _this.utilityService.right(_this.text, 8);
	                //if rbkey is still missing. then can we infer it
	                if (minus8letters === '_missing') {
	                    var firstFourLetters = _this.utilityService.left(_this.actionItem, 4);
	                    var firstSixLetters = _this.utilityService.left(_this.actionItem, 6);
	                    var minus4letters = _this.utilityService.right(_this.actionItem, 4);
	                    var minus6letters = _this.utilityService.right(_this.actionItem, 6);
	                    if (firstFourLetters === 'list' && _this.actionItem.length > 4) {
	                        _this.text = _this.getTextByRBKeyByAction('list', true);
	                    }
	                    else if (firstFourLetters === 'edit' && _this.actionItem.length > 4) {
	                        _this.text = _this.getTextByRBKeyByAction('edit', false);
	                    }
	                    else if (firstFourLetters === 'save' && _this.actionItem.length > 4) {
	                        _this.text = _this.getTextByRBKeyByAction('save', false);
	                    }
	                    else if (firstSixLetters === 'create' && _this.actionItem.length > 6) {
	                        _this.text = _this.getTextByRBKeyByAction('create', false);
	                    }
	                    else if (firstSixLetters === 'detail' && _this.actionItem.length > 6) {
	                        _this.text = _this.getTextByRBKeyByAction('detail', false);
	                    }
	                    else if (firstSixLetters === 'delete' && _this.actionItem.length > 6) {
	                        _this.text = _this.getTextByRBKeyByAction('delete', false);
	                    }
	                }
	                if (_this.utilityService.right(_this.text, 8)) {
	                    _this.text = _this.$slatwall.getRBKey(_this.utilityService.replaceAll(_this.getAction(), ":", "."));
	                }
	            }
	            if (!_this.title || (_this.title && !_this.title.length)) {
	                _this.title = _this.text;
	            }
	            return _this.text;
	        };
	        this.getDisabled = function () {
	            //if item is disabled
	            if (angular.isDefined(_this.disabled) && _this.disabled) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        };
	        this.getDisabledText = function () {
	            if (_this.getDisabled()) {
	                //and no disabled text specified
	                if (angular.isUndefined(_this.disabledtext) || !_this.disabledtext.length) {
	                    var disabledrbkey = _this.utilityService.replaceAll(_this.action, ':', '.') + '_disabled';
	                    _this.disabledtext = _this.$slatwall.getRBKey(disabledrbkey);
	                }
	                //add disabled class
	                _this.class += " s-btn-disabled";
	                _this.confirm = false;
	                return _this.disabledtext;
	            }
	            return "";
	        };
	        this.getConfirm = function () {
	            if (angular.isDefined(_this.confirm) && _this.confirm) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        };
	        this.getConfirmText = function () {
	            if (_this.getConfirm()) {
	                if (angular.isUndefined(_this.confirmtext) && _this.confirmtext.length) {
	                    var confirmrbkey = _this.utilityService.replaceAll(_this.action, ':', '.') + '_confirm';
	                    _this.confirmtext = _this.$slatwall.getRBKey(confirmrbkey);
	                }
	                _this.class += " alert-confirm";
	                return _this.confirm;
	            }
	            return "";
	        };
	        this.$scope = $scope;
	        this.$element = $element;
	        this.$templateRequest = $templateRequest;
	        this.$compile = $compile;
	        this.$slatwall = $slatwall;
	        this.utilityService = utilityService;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.$templateRequest(this.pathBuilderConfig.buildPartialsPath(corePartialsPath) + "actioncaller.html").then(function (html) {
	            var template = angular.element(html);
	            _this.$element.parent().append(template);
	            $compile(template)($scope);
	            //need to perform init after promise completes
	            _this.init();
	        });
	    }
	    return SWActionCallerController;
	})();
	exports.SWActionCallerController = SWActionCallerController;
	var SWActionCaller = (function () {
	    function SWActionCaller(partialsPath, utiltiyService, $slatwall) {
	        this.partialsPath = partialsPath;
	        this.utiltiyService = utiltiyService;
	        this.$slatwall = $slatwall;
	        this.restrict = 'EA';
	        this.scope = {};
	        this.bindToController = {
	            action: "@",
	            text: "@",
	            type: "@",
	            queryString: "@",
	            title: "@",
	            'class': "@",
	            icon: "@",
	            iconOnly: "=",
	            name: "@",
	            confirm: "=",
	            confirmtext: "@",
	            disabled: "=",
	            disabledtext: "@",
	            modal: "=",
	            modalFullWidth: "=",
	            id: "@"
	        };
	        this.controller = SWActionCallerController;
	        this.controllerAs = "swActionCaller";
	        this.link = function (scope, element, attrs) {
	        };
	    }
	    SWActionCaller.Factory = function () {
	        var directive = function (partialsPath, utiltiyService, $slatwall) {
	            return new SWActionCaller(partialsPath, utiltiyService, $slatwall);
	        };
	        directive.$inject = [
	            'partialsPath',
	            'utilityService',
	            '$slatwall'
	        ];
	        return directive;
	    };
	    return SWActionCaller;
	})();
	exports.SWActionCaller = SWActionCaller;
	//angular.module('slatwalladmin').directive('swActionCaller',[() => new SWActionCaller()]);


/***/ },
/* 28 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWTypeaheadSearchController = (function () {
	    function SWTypeaheadSearchController($slatwall, $timeout, collectionConfigService) {
	        var _this = this;
	        this.$slatwall = $slatwall;
	        this.$timeout = $timeout;
	        this.collectionConfigService = collectionConfigService;
	        this.search = function (search) {
	            if (angular.isDefined(_this.modelBind)) {
	                _this.modelBind = search;
	            }
	            if (search.length > 2) {
	                if (_this._timeoutPromise) {
	                    _this.$timeout.cancel(_this._timeoutPromise);
	                }
	                _this._timeoutPromise = _this.$timeout(function () {
	                    if (_this.hideSearch) {
	                        _this.hideSearch = false;
	                    }
	                    _this.results = new Array();
	                    _this.typeaheadCollectionConfig.setKeywords(search);
	                    if (angular.isDefined(_this.filterGroupsConfig)) {
	                        //allows for filtering on search text
	                        var filterConfig = _this.filterGroupsConfig.replace("replaceWithSearchString", search);
	                        filterConfig = filterConfig.trim();
	                        _this.typeaheadCollectionConfig.loadFilterGroups(JSON.parse(filterConfig));
	                    }
	                    var promise = _this.typeaheadCollectionConfig.getEntity();
	                    promise.then(function (response) {
	                        if (angular.isDefined(_this.allRecords) && _this.allRecords == false) {
	                            _this.results = response.pageRecords;
	                        }
	                        else {
	                            _this.results = response.records;
	                        }
	                        //Custom method for gravatar on accounts (non-persistant-property)
	                        if (angular.isDefined(_this.results) && _this.entity == "Account") {
	                            angular.forEach(_this.results, function (account) {
	                                account.gravatar = "http://www.gravatar.com/avatar/" + md5(account.primaryEmailAddress_emailAddress.toLowerCase().trim());
	                            });
	                        }
	                    });
	                }, 500);
	            }
	            else {
	                _this.results = [];
	                _this.hideSearch = true;
	            }
	        };
	        this.addItem = function (item) {
	            if (!_this.hideSearch) {
	                _this.hideSearch = true;
	            }
	            if (angular.isDefined(_this.displayList)) {
	                _this.searchText = item[_this.displayList[0]];
	            }
	            if (angular.isDefined(_this.addFunction)) {
	                _this.addFunction({ item: item });
	            }
	        };
	        this.addButtonItem = function () {
	            if (!_this.hideSearch) {
	                _this.hideSearch = true;
	            }
	            if (angular.isDefined(_this.modelBind)) {
	                _this.searchText = _this.modelBind;
	            }
	            else {
	                _this.searchText = "";
	            }
	            if (angular.isDefined(_this.addButtonFunction)) {
	                _this.addButtonFunction({ searchString: _this.searchText });
	            }
	        };
	        this.closeThis = function (clickOutsideArgs) {
	            _this.hideSearch = true;
	            if (angular.isDefined(clickOutsideArgs)) {
	                for (var callBackAction in clickOutsideArgs.callBackActions) {
	                    clickOutsideArgs.callBackActions[callBackAction]();
	                }
	            }
	        };
	        this.typeaheadCollectionConfig = collectionConfigService.newCollectionConfig(this.entity);
	        this.typeaheadCollectionConfig.setDisplayProperties(this.properties);
	        if (angular.isDefined(this.propertiesToDisplay)) {
	            this.displayList = this.propertiesToDisplay.split(",");
	        }
	        if (angular.isDefined(this.allRecords)) {
	            this.typeaheadCollectionConfig.setAllRecords(this.allRecords);
	        }
	        else {
	            this.typeaheadCollectionConfig.setAllRecords(true);
	        }
	    }
	    SWTypeaheadSearchController.$inject = ["$slatwall", "$timeout", "collectionConfigService"];
	    return SWTypeaheadSearchController;
	})();
	exports.SWTypeaheadSearchController = SWTypeaheadSearchController;
	var SWTypeaheadSearch = (function () {
	    function SWTypeaheadSearch($slatwall, $timeout, collectionConfigService, corePartialsPath, pathBuilderConfig) {
	        this.$slatwall = $slatwall;
	        this.$timeout = $timeout;
	        this.collectionConfigService = collectionConfigService;
	        this.corePartialsPath = corePartialsPath;
	        this.restrict = "EA";
	        this.scope = {};
	        this.bindToController = {
	            entity: "@",
	            properties: "@",
	            propertiesToDisplay: "@?",
	            filterGroupsConfig: "@?",
	            placeholderText: "@?",
	            searchText: "=?",
	            results: "=?",
	            addFunction: "&?",
	            addButtonFunction: "&?",
	            hideSearch: "=",
	            modelBind: "=?",
	            clickOutsideArgs: "@"
	        };
	        this.controller = SWTypeaheadSearchController;
	        this.controllerAs = "swTypeaheadSearch";
	        this.link = function ($scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(corePartialsPath) + "typeaheadsearch.html";
	    }
	    SWTypeaheadSearch.Factory = function () {
	        var directive = function ($slatwall, $timeout, collectionConfigService, corePartialsPath, pathBuilderConfig) {
	            return new SWTypeaheadSearch($slatwall, $timeout, collectionConfigService, corePartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = ["$slatwall", "$timeout", "collectionConfigService", "corePartialsPath",
	            'pathBuilderConfig'];
	        return directive;
	    };
	    SWTypeaheadSearch.$inject = ["$slatwall", "$timeout", "collectionConfigService", "corePartialsPath",
	        'pathBuilderConfig'];
	    return SWTypeaheadSearch;
	})();
	exports.SWTypeaheadSearch = SWTypeaheadSearch;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWActionCallerDropdownController = (function () {
	    function SWActionCallerDropdownController() {
	        this.title = this.title || '';
	        this.icon = this.icon || 'plus';
	        this.type = this.type || 'button';
	        this.dropdownClass = this.dropdownClass || '';
	        this.dropdownId = this.dropdownId || '';
	        this.buttonClass = this.buttonClass || 'btn-primary';
	    }
	    return SWActionCallerDropdownController;
	})();
	exports.SWActionCallerDropdownController = SWActionCallerDropdownController;
	var SWActionCallerDropdown = (function () {
	    function SWActionCallerDropdown(corePartialsPath, pathBuilderConfig) {
	        this.corePartialsPath = corePartialsPath;
	        this.restrict = 'E';
	        this.scope = {};
	        this.transclude = true;
	        this.bindToController = {
	            title: "@",
	            icon: "@",
	            type: "=",
	            dropdownClass: "@",
	            dropdownId: "@",
	            buttonClass: "@"
	        };
	        this.controller = SWActionCallerDropdownController;
	        this.controllerAs = "swActionCallerDropdown";
	        this.link = function (scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(corePartialsPath) + 'actioncallerdropdown.html';
	    }
	    SWActionCallerDropdown.Factory = function () {
	        var directive = function (corePartialsPath, pathBuilderConfig) { return new SWActionCallerDropdown(corePartialsPath, pathBuilderConfig); };
	        directive.$inject = ['corePartialsPath', 'pathBuilderConfig'];
	        return directive;
	    };
	    return SWActionCallerDropdown;
	})();
	exports.SWActionCallerDropdown = SWActionCallerDropdown;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWColumnSorter = (function () {
	    function SWColumnSorter($log, observerService, corePartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'AE',
	            scope: {
	                column: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(corePartialsPath) + "columnsorter.html",
	            link: function (scope, element, attrs) {
	                var orderBy = {
	                    "propertyIdentifier": scope.column.propertyIdentifier
	                };
	                scope.sortAsc = function () {
	                    orderBy.direction = 'Asc';
	                    this.observerService.notify('sortByColumn', orderBy);
	                };
	                scope.sortDesc = function () {
	                    orderBy.direction = 'Desc';
	                    observerService.notify('sortByColumn', orderBy);
	                };
	            }
	        };
	    }
	    SWColumnSorter.Factory = function () {
	        var directive = function ($log, observerService, corePartialsPath, pathBuilderConfig) {
	            return new SWColumnSorter($log, observerService, corePartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            'observerService',
	            'corePartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWColumnSorter;
	})();
	exports.SWColumnSorter = SWColumnSorter;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * <------------------------------------------------------------------------------------------------------------------------------------>
	 *   This directive can be used to prompt the user with a confirmation dialog.
	 *
	 *   Example Usage 1:
	 *   <a swconfirm
	 *   						use-rb-key=true
	 * 							yes-text="define.yes"
	 * 							no-text="define.no"
	 * 							confirm-text="define.confirm"
	 * 							message-text="define.delete.message"
	 * 							callback="someFunction()">
	 *   </a>
	 *   Alternate Version (No Rbkeys):
	 *   <a swconfirm
	 *   						use-rb-key=false
	 * 							yes-text="Sure"
	 * 							no-text="Not Sure!"
	 * 							confirm-text="Sure"
	 * 							message-text="Are you sure?"
	 * 							callback="sure()">
	 *   </a>
	 *
	 *   Note: Because the template is dynamic, the following keywords can not be used anywhere in the text for this modal.
	 *
	 *   [yes] [no] [confirm] [message] [callback]
	 *
	 *   The above words in upper-case can be used - just not those words inside square brackets.
	 *   Note: Your callback function on-confirm should return true;
	 *<------------------------------------------------------------------------------------------------------------------------------------->
	 */
	var SWConfirm = (function () {
	    function SWConfirm($slatwall, $log, $compile, $modal, partialsPath) {
	        var buildConfirmationModal = function (simple, useRbKey, confirmText, messageText, noText, yesText) {
	            /* Keys */
	            var confirmKey = "[confirm]";
	            var messageKey = "[message]";
	            var noKey = "[no]";
	            var yesKey = "[yes]";
	            var swRbKey = "sw-rbkey=";
	            /* Values */
	            var confirmVal = "<confirm>";
	            var messageVal = "<message>";
	            var noVal = "<no>";
	            var yesVal = "<yes>";
	            /* Parse Tags */
	            var startTag = "\"'";
	            var endTag = "'\"";
	            var startParen = "'";
	            var endParen = "'";
	            var empty = "";
	            /* Modal String */
	            var parsedKeyString = "";
	            var finishedString = "";
	            //Figure out which version of this tag we are using
	            var templateString = "<div>" +
	                "<div class='modal-header'><a class='close' data-dismiss='modal' ng-click='cancel()'>×</a><h3 [confirm]><confirm></h3></div>" +
	                "<div class='modal-body' [message]>" + "<message>" + "</div>" +
	                "<div class='modal-footer'>" +
	                "<button class='btn btn-sm btn-default btn-inverse' ng-click='cancel()' [no]><no></button>" +
	                "<button class='btn btn-sm btn-default btn-primary' ng-click='fireCallback(callback)' [yes]><yes></button></div></div></div>";
	            /* Use RbKeys or Not? */
	            if (useRbKey === "true") {
	                $log.debug("Using RbKey? " + useRbKey);
	                /* Then decorate the template with the keys. */
	                confirmText = swRbKey + startTag + confirmText + endTag;
	                messageText = swRbKey + startTag + messageText + endTag;
	                yesText = swRbKey + startTag + yesText + endTag;
	                noText = swRbKey + startTag + noText + endTag;
	                parsedKeyString = templateString.replace(confirmKey, confirmText)
	                    .replace(messageText, messageText)
	                    .replace(noKey, noText)
	                    .replace(yesKey, yesText);
	                $log.debug(finishedString);
	                finishedString = parsedKeyString.replace(confirm, empty)
	                    .replace(messageVal, empty)
	                    .replace(noVal, empty)
	                    .replace(yesVal, empty);
	                $log.debug(finishedString);
	                return finishedString;
	            }
	            else {
	                /* Then decorate the template without the keys. */
	                $log.debug("Using RbKey? " + useRbKey);
	                parsedKeyString = templateString.replace(confirmVal, confirmText)
	                    .replace(messageVal, messageText)
	                    .replace(noVal, noText)
	                    .replace(yesVal, yesText);
	                finishedString = parsedKeyString.replace(confirmKey, empty)
	                    .replace(messageKey, empty)
	                    .replace(noKey, empty)
	                    .replace(yesKey, empty);
	                $log.debug(finishedString);
	                return finishedString;
	            }
	        };
	        return {
	            restrict: 'EA',
	            scope: {
	                callback: "&",
	                entity: "="
	            },
	            link: function (scope, element, attr) {
	                /* Grab the template and build the modal on click */
	                $log.debug("Modal is: ");
	                $log.debug($modal);
	                element.bind('click', function () {
	                    /* Default Values */
	                    var useRbKey = attr.useRbKey || "false";
	                    var simple = attr.simple || false;
	                    var yesText = attr.yesText || "define.yes";
	                    var noText = attr.noText || "define.no";
	                    var confirmText = attr.confirmText || "define.delete";
	                    var messageText = attr.messageText || "define.delete_message";
	                    var templateString = buildConfirmationModal(simple, useRbKey, confirmText, messageText, noText, yesText);
	                    var modalInstance = $modal.open({
	                        template: templateString,
	                        controller: 'confirmationController',
	                        scope: scope
	                    });
	                    /**
	                        * Handles the result - callback or dismissed
	                        */
	                    modalInstance.result.then(function (result) {
	                        $log.debug("Result:" + result);
	                        return true;
	                    }, function () {
	                        //There was an error
	                    });
	                }); //<--end bind
	            }
	        };
	    }
	    SWConfirm.Factory = function () {
	        var directive = function ($slatwall, $log, $compile, $modal, partialsPath) {
	            return new SWConfirm($slatwall, $log, $compile, $modal, partialsPath);
	        };
	        directive.$inject = ['$slatwall', '$log', '$compile', '$modal', 'partialsPath'];
	        return directive;
	    };
	    return SWConfirm;
	})();
	exports.SWConfirm = SWConfirm;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWEntityActionBarController = (function () {
	    function SWEntityActionBarController() {
	        this.init = function () {
	        };
	        this.init();
	    }
	    return SWEntityActionBarController;
	})();
	var SWEntityActionBar = (function () {
	    function SWEntityActionBar(corePartialsPath, pathBuilderConfig) {
	        this.corePartialsPath = corePartialsPath;
	        this.restrict = 'E';
	        this.scope = {};
	        this.transclude = true;
	        this.bindToController = {
	            /*Core settings*/
	            type: "@",
	            object: "=",
	            pageTitle: "@",
	            edit: "=",
	            /*Action Callers (top buttons)*/
	            showcancel: "=",
	            showcreate: "=",
	            showedit: "=",
	            showdelete: "=",
	            /*Basic Action Caller Overrides*/
	            createModal: "=",
	            createAction: "=",
	            createQueryString: "=",
	            backAction: "=",
	            backQueryString: "=",
	            cancelAction: "=",
	            cancelQueryString: "=",
	            deleteAction: "=",
	            deleteQueryString: "=",
	            /*Process Specific Values*/
	            processAction: "=",
	            processContext: "="
	        };
	        this.controller = SWEntityActionBarController;
	        this.controllerAs = "swEntityActionBar";
	        this.link = function (scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(corePartialsPath) + 'entityactionbar.html';
	    }
	    SWEntityActionBar.Factory = function () {
	        var directive = function (corePartialsPath, pathBuilderConfig) {
	            return new SWEntityActionBar(corePartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = ['corePartialsPath', 'pathBuilderConfig'];
	        return directive;
	    };
	    return SWEntityActionBar;
	})();
	exports.SWEntityActionBar = SWEntityActionBar;
	//	angular.module('slatwalladmin').directive('swEntityActionBar',['corePartialsPath',(corePartialsPath) => new SWEntityActionBar(corePartialsPath)]);


/***/ },
/* 33 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../..//typings/tsd.d.ts' />
	var SWEntityActionBarButtonGroupController = (function () {
	    function SWEntityActionBarButtonGroupController() {
	    }
	    return SWEntityActionBarButtonGroupController;
	})();
	var SWEntityActionBarButtonGroup = (function () {
	    function SWEntityActionBarButtonGroup(corePartialsPath, pathBuilderConfig) {
	        this.corePartialsPath = corePartialsPath;
	        this.restrict = 'E';
	        this.scope = {};
	        this.transclude = true;
	        this.bindToController = {};
	        this.controller = SWEntityActionBarButtonGroupController;
	        this.controllerAs = "swEntityActionBarButtonGroup";
	        this.link = function (scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(corePartialsPath) + 'entityactionbarbuttongroup.html';
	    }
	    SWEntityActionBarButtonGroup.Factory = function () {
	        var directive = function (corePartialsPath, pathBuilderConfig) {
	            return new SWEntityActionBarButtonGroup(corePartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = ['corePartialsPath',
	            'pathBuilderConfig'];
	        return directive;
	    };
	    return SWEntityActionBarButtonGroup;
	})();
	exports.SWEntityActionBarButtonGroup = SWEntityActionBarButtonGroup;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWExpandableRecordController = (function () {
	    function SWExpandableRecordController($timeout, utilityService, $slatwall, collectionConfigService) {
	        var _this = this;
	        this.$timeout = $timeout;
	        this.utilityService = utilityService;
	        this.$slatwall = $slatwall;
	        this.collectionConfigService = collectionConfigService;
	        this.childrenLoaded = false;
	        this.childrenOpen = false;
	        this.children = [];
	        this.toggleChild = function () {
	            _this.$timeout(function () {
	                _this.childrenOpen = !_this.childrenOpen;
	                if (!_this.childrenLoaded) {
	                    var childCollectionConfig = _this.collectionConfigService.newCollectionConfig(_this.entity.metaData.className);
	                    //set up parent
	                    var parentName = _this.entity.metaData.hb_parentPropertyName;
	                    var parentCFC = _this.entity.metaData[parentName].cfc;
	                    var parentIDName = _this.$slatwall.getEntityExample(parentCFC).$$getIDName();
	                    //set up child
	                    var childName = _this.entity.metaData.hb_childPropertyName;
	                    var childCFC = _this.entity.metaData[childName].cfc;
	                    var childIDName = _this.$slatwall.getEntityExample(childCFC).$$getIDName();
	                    childCollectionConfig.clearFilterGroups();
	                    childCollectionConfig.collection = _this.entity;
	                    childCollectionConfig.addFilter(parentName + '.' + parentIDName, _this.parentId);
	                    childCollectionConfig.setAllRecords(true);
	                    angular.forEach(_this.collectionConfig.columns, function (column) {
	                        childCollectionConfig.addColumn(column.propertyIdentifier, column.tilte, column);
	                    });
	                    angular.forEach(_this.collectionConfig.joins, function (join) {
	                        childCollectionConfig.addJoin(join);
	                    });
	                    childCollectionConfig.groupBys = _this.collectionConfig.groupBys;
	                    _this.collectionPromise = childCollectionConfig.getEntity();
	                    _this.collectionPromise.then(function (data) {
	                        _this.collectionData = data;
	                        _this.collectionData.pageRecords = _this.collectionData.pageRecords || _this.collectionData.records;
	                        if (_this.collectionData.pageRecords.length) {
	                            angular.forEach(_this.collectionData.pageRecords, function (pageRecord) {
	                                pageRecord.dataparentID = _this.recordID;
	                                pageRecord.depth = _this.recordDepth || 0;
	                                pageRecord.depth++;
	                                _this.children.push(pageRecord);
	                                _this.records.splice(_this.recordIndex + 1, 0, pageRecord);
	                            });
	                        }
	                        _this.childrenLoaded = true;
	                    });
	                }
	                angular.forEach(_this.children, function (child) {
	                    child.dataIsVisible = _this.childrenOpen;
	                });
	            });
	        };
	        this.$timeout = $timeout;
	        this.$slatwall = $slatwall;
	        this.utilityService = utilityService;
	        this.collectionConfigService = collectionConfigService;
	    }
	    SWExpandableRecordController.$inject = ['$timeout', 'utilityService', '$slatwall', 'collectionConfigService'];
	    return SWExpandableRecordController;
	})();
	var SWExpandableRecord = (function () {
	    function SWExpandableRecord($compile, $templateRequest, $timeout, corePartialsPath, utilityService, pathBuilderConfig) {
	        var _this = this;
	        this.$compile = $compile;
	        this.$templateRequest = $templateRequest;
	        this.$timeout = $timeout;
	        this.corePartialsPath = corePartialsPath;
	        this.utilityService = utilityService;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.restrict = 'EA';
	        this.scope = {};
	        this.bindToController = {
	            recordValue: "=",
	            link: "@",
	            expandable: "=",
	            parentId: "=",
	            entity: "=",
	            collectionConfig: "=",
	            records: "=",
	            recordIndex: "=",
	            recordDepth: "=",
	            childCount: "=",
	            autoOpen: "=",
	            multiselectIdPaths: "="
	        };
	        this.controller = SWExpandableRecordController;
	        this.controllerAs = "swExpandableRecord";
	        this.link = function (scope, element, attrs) {
	            if (scope.swExpandableRecord.expandable && scope.swExpandableRecord.childCount) {
	                if (scope.swExpandableRecord.recordValue) {
	                    var id = scope.swExpandableRecord.records[scope.swExpandableRecord.recordIndex][scope.swExpandableRecord.entity.$$getIDName()];
	                    if (scope.swExpandableRecord.multiselectIdPaths && scope.swExpandableRecord.multiselectIdPaths.length) {
	                        var multiselectIdPathsArray = scope.swExpandableRecord.multiselectIdPaths.split(',');
	                        angular.forEach(multiselectIdPathsArray, function (multiselectIdPath) {
	                            var position = _this.utilityService.listFind(multiselectIdPath, id, '/');
	                            var multiselectPathLength = multiselectIdPath.split('/').length;
	                            if (position !== -1 && position < multiselectPathLength - 1) {
	                                scope.swExpandableRecord.toggleChild();
	                            }
	                        });
	                    }
	                }
	                _this.$templateRequest(_this.pathBuilderConfig.buildPartialsPath(_this.corePartialsPath) + "expandablerecord.html").then(function (html) {
	                    var template = angular.element(html);
	                    //get autoopen reference to ensure only the root is autoopenable
	                    var autoOpen = angular.copy(scope.swExpandableRecord.autoOpen);
	                    scope.swExpandableRecord.autoOpen = false;
	                    template = _this.$compile(template)(scope);
	                    element.html(template);
	                    element.on('click', scope.swExpandableRecord.toggleChild);
	                    if (autoOpen) {
	                        scope.swExpandableRecord.toggleChild();
	                    }
	                });
	            }
	        };
	        this.$compile = $compile;
	        this.$templateRequest = $templateRequest;
	        this.corePartialsPath = corePartialsPath;
	        this.$timeout = $timeout;
	        this.utilityService = utilityService;
	        this.pathBuilderConfig = pathBuilderConfig;
	    }
	    SWExpandableRecord.Factory = function () {
	        var directive = function ($compile, $templateRequest, $timeout, corePartialsPath, utilityService, pathBuilderConfig) {
	            return new SWExpandableRecord($compile, $templateRequest, $timeout, corePartialsPath, utilityService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$compile',
	            '$templateRequest',
	            '$timeout',
	            'corePartialsPath',
	            'utilityService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    SWExpandableRecord.$inject = ['$compile', '$templateRequest', '$timeout', 'corePartialsPath', 'utilityService',
	        'pathBuilderConfig'];
	    return SWExpandableRecord;
	})();
	exports.SWExpandableRecord = SWExpandableRecord;


/***/ },
/* 35 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWListingDisplayController = (function () {
	    function SWListingDisplayController($scope, $element, $transclude, $timeout, $q, $slatwall, partialsPath, utilityService, collectionConfigService, paginationService, selectionService, observerService) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$element = $element;
	        this.$transclude = $transclude;
	        this.$timeout = $timeout;
	        this.$q = $q;
	        this.$slatwall = $slatwall;
	        this.partialsPath = partialsPath;
	        this.utilityService = utilityService;
	        this.collectionConfigService = collectionConfigService;
	        this.paginationService = paginationService;
	        this.selectionService = selectionService;
	        this.observerService = observerService;
	        this.allpropertyidentifiers = "";
	        this.allprocessobjectproperties = "false";
	        this.buttonGroup = [];
	        this.columns = [];
	        this.exampleEntity = "";
	        this.multiselectable = false;
	        this.searching = false;
	        this.selectable = false;
	        this.sortable = false;
	        this.intialSetup = function () {
	            //default search is available
	            if (angular.isUndefined(_this.hasSearch)) {
	                _this.hasSearch = true;
	            }
	            _this.paginator = _this.paginationService.createPagination();
	            _this.hasCollectionPromise = false;
	            if (angular.isUndefined(_this.getChildCount)) {
	                _this.getChildCount = false;
	            }
	            if (!_this.collection || !angular.isString(_this.collection)) {
	                _this.hasCollectionPromise = true;
	            }
	            else {
	                _this.collectionObject = _this.collection;
	                _this.collectionConfig = _this.collectionConfigService.newCollectionConfig(_this.collectionObject);
	            }
	            _this.setupDefaultCollectionInfo();
	            //if columns doesn't exist then make it
	            if (!_this.collectionConfig.columns) {
	                _this.collectionConfig.columns = [];
	            }
	            //if a collectionConfig was not passed in then we can run run swListingColumns
	            //this is performed early to populate columns with swlistingcolumn info
	            _this.$transclude = $transclude;
	            _this.$transclude(_this.$scope, function () { });
	            _this.setupColumns();
	            _this.exampleEntity = _this.$slatwall.newEntity(_this.collectionObject);
	            _this.collectionConfig.addDisplayProperty(_this.exampleEntity.$$getIDName(), undefined, { isVisible: false });
	            _this.initData();
	            _this.$scope.$watch('swListingDisplay.collectionPromise', function (newValue, oldValue) {
	                if (newValue) {
	                    _this.$q.when(_this.collectionPromise).then(function (data) {
	                        _this.collectionData = data;
	                        _this.setupDefaultCollectionInfo();
	                        _this.setupColumns();
	                        _this.collectionData.pageRecords = _this.collectionData.pageRecords || _this.collectionData.records;
	                        _this.paginator.setPageRecordsInfo(_this.collectionData);
	                        _this.searching = false;
	                    });
	                }
	            });
	            _this.tableID = 'LD' + _this.utilityService.createID();
	            //if getCollection doesn't exist then create it
	            if (angular.isUndefined(_this.getCollection)) {
	                _this.getCollection = _this.setupDefaultGetCollection();
	            }
	            _this.paginator.getCollection = _this.getCollection;
	            //this.getCollection();
	        };
	        this.setupDefaultCollectionInfo = function () {
	            if (_this.hasCollectionPromise) {
	                _this.collectionObject = _this.collection.collectionObject;
	                _this.collectionConfig = _this.collectionConfigService.newCollectionConfig(_this.collectionObject);
	                _this.collectionConfig.loadJson(_this.collection.collectionConfig);
	            }
	            _this.collectionConfig.setPageShow(_this.paginator.getPageShow());
	            _this.collectionConfig.setCurrentPage(_this.paginator.getCurrentPage());
	            //this.collectionConfig.setKeywords(this.paginator.keywords);
	        };
	        this.setupDefaultGetCollection = function () {
	            _this.collectionPromise = _this.collectionConfig.getEntity();
	            return function () {
	                _this.collectionConfig.setCurrentPage(_this.paginator.getCurrentPage());
	                _this.collectionConfig.setPageShow(_this.paginator.getPageShow());
	                _this.collectionConfig.getEntity().then(function (data) {
	                    _this.collectionData = data;
	                    _this.setupDefaultCollectionInfo();
	                    _this.setupColumns();
	                    _this.collectionData.pageRecords = _this.collectionData.pageRecords || _this.collectionData.records;
	                    _this.paginator.setPageRecordsInfo(_this.collectionData);
	                });
	            };
	        };
	        this.initData = function () {
	            _this.collectionConfig.setPageShow(_this.paginator.pageShow);
	            _this.collectionConfig.setCurrentPage(_this.paginator.currentPage);
	            //setup export action
	            if (angular.isDefined(_this.exportAction)) {
	                _this.exportAction = "/?slatAction=main.collectionExport&collectionExportID=";
	            }
	            //Setup Select
	            if (_this.selectFieldName && _this.selectFieldName.length) {
	                _this.selectable = true;
	                _this.tableclass = _this.utilityService.listAppend(_this.tableclass, 'table-select', ' ');
	                _this.tableattributes = _this.utilityService.listAppend(_this.tableattributes, 'data-selectfield="' + _this.selectFieldName + '"', ' ');
	            }
	            //Setup MultiSelect
	            if (_this.multiselectFieldName && _this.multiselectFieldName.length) {
	                _this.multiselectable = true;
	                _this.tableclass = _this.utilityService.listAppend(_this.tableclass, 'table-multiselect', ' ');
	                _this.tableattributes = _this.utilityService.listAppend(_this.tableattributes, 'data-multiselectpropertyidentifier="' + _this.multiselectPropertyIdentifier + '"', ' ');
	                //attach observer so we know when a selection occurs
	                _this.observerService.attach(_this.updateMultiselectValues, 'swSelectionToggleSelection', _this.collectionObject);
	            }
	            if (_this.multiselectable && !_this.columns.length) {
	                //check if it has an active flag and if so then add the active flag
	                if (_this.exampleEntity.metaData.activeProperty && !_this.hasCollectionPromise) {
	                    _this.collectionConfig.addFilter('activeFlag', 1);
	                }
	            }
	            //Look for Hierarchy in example entity
	            if (!_this.parentPropertyName || (_this.parentPropertyName && !_this.parentPropertyName.length)) {
	                if (_this.exampleEntity.metaData.hb_parentPropertyName) {
	                    _this.parentPropertyName = _this.exampleEntity.metaData.hb_parentPropertyName;
	                }
	            }
	            if (!_this.childPropertyName || (_this.childPropertyName && !_this.childPropertyName.length)) {
	                if (_this.exampleEntity.metaData.hb_childPropertyName) {
	                    _this.childPropertyName = _this.exampleEntity.metaData.hb_childPropertyName;
	                }
	            }
	            //Setup Hierachy Expandable
	            if (_this.parentPropertyName && _this.parentPropertyName.length) {
	                if (angular.isUndefined(_this.expandable)) {
	                    _this.expandable = true;
	                }
	                _this.tableclass = _this.utilityService.listAppend(_this.tableclass, 'table-expandable', ' ');
	                //add parent property root filter
	                if (!_this.hasCollectionPromise) {
	                    _this.collectionConfig.addFilter(_this.parentPropertyName + '.' + _this.exampleEntity.$$getIDName(), 'NULL', 'IS');
	                }
	                //this.collectionConfig.addDisplayProperty(this.exampleEntity.$$getIDName()+'Path',undefined,{isVisible:false});
	                //add children column
	                if (_this.childPropertyName && _this.childPropertyName.length) {
	                    if (_this.getChildCount || !_this.hasCollectionPromise) {
	                        _this.collectionConfig.addDisplayAggregate(_this.childPropertyName, 'COUNT', _this.childPropertyName + 'Count');
	                    }
	                }
	                _this.allpropertyidentifiers = _this.utilityService.listAppend(_this.allpropertyidentifiers, _this.exampleEntity.$$getIDName() + 'Path');
	                _this.tableattributes = _this.utilityService.listAppend(_this.tableattributes, 'data-parentidproperty=' + _this.parentPropertyName + '.' + _this.exampleEntity.$$getIDName(), ' ');
	                _this.collectionConfig.setAllRecords(true);
	            }
	            //            if(
	            //                !this.edit
	            //                && this.multiselectable
	            //                && (!this.parentPropertyName || !!this.parentPropertyName.length)
	            //                && (this.multiselectPropertyIdentifier && this.multiselectPropertyIdentifier.length)
	            //            ){
	            //                if(this.multiselectValues && this.multiselectValues.length){
	            //                    this.collectionConfig.addFilter(this.multiselectPropertyIdentifier,this.multiselectValues,'IN');
	            //                }else{
	            //                    this.collectionConfig.addFilter(this.multiselectPropertyIdentifier,'_','IN');
	            //                }
	            //            }
	            if (_this.multiselectIdPaths && _this.multiselectIdPaths.length) {
	                angular.forEach(_this.multiselectIdPaths.split(','), function (value) {
	                    var id = _this.utilityService.listLast(value, '/');
	                    _this.selectionService.addSelection('ListingDisplay', id);
	                });
	            }
	            if (_this.multiselectValues && _this.multiselectValues.length) {
	                //select all owned ids
	                angular.forEach(_this.multiselectValues.split(','), function (value) {
	                    _this.selectionService.addSelection('ListingDisplay', value);
	                });
	            }
	            //set defaults if value is not specified
	            //this.edit = this.edit || $location.edit
	            _this.processObjectProperties = _this.processObjectProperties || '';
	            _this.recordProcessButtonDisplayFlag = _this.recordProcessButtonDisplayFlag || true;
	            //this.collectionConfig = this.collectionConfig || this.collectionData.collectionConfig;
	            _this.norecordstext = _this.$slatwall.getRBKey('entity.' + _this.collectionObject + '.norecords');
	            //Setup Sortability
	            if (_this.sortProperty && _this.sortProperty.length) {
	            }
	            //Setup the admin meta info
	            _this.administrativeCount = 0;
	            //Detail
	            if (_this.recordDetailAction && _this.recordDetailAction.length) {
	                _this.administrativeCount++;
	                _this.adminattributes = _this.getAdminAttributesByType('detail');
	            }
	            //Edit
	            if (_this.recordEditAction && _this.recordEditAction.length) {
	                _this.administrativeCount++;
	                _this.adminattributes = _this.getAdminAttributesByType('edit');
	            }
	            //Delete
	            if (_this.recordDeleteAction && _this.recordDeleteAction.length) {
	                _this.administrativeCount++;
	                _this.adminattributes = _this.getAdminAttributesByType('delete');
	            }
	            //Add
	            if (_this.recordAddAction && _this.recordAddAction.length) {
	                _this.administrativeCount++;
	                _this.adminattributes = _this.getAdminAttributesByType('add');
	            }
	            //Process
	            // if(this.recordProcessAction && this.recordProcessAction.length && this.recordProcessButtonDisplayFlag){
	            //     this.administrativeCount++;
	            //     this.tableattributes = this.utilityService.listAppend(this.tableattributes, 'data-processcontext="'+this.recordProcessContext+'"', " ");
	            //     this.tableattributes = this.utilityService.listAppend(this.tableattributes, 'data-processentity="'+this.recordProcessEntity.metaData.className+'"', " ");
	            //     this.tableattributes = this.utilityService.listAppend(this.tableattributes, 'data-processentityid="'+this.recordProcessEntity.$$getID+'"', " ");
	            //     this.adminattributes = this.utilityService.listAppend(this.adminattributes, 'data-processaction="'+this.recordProcessAction+'"', " ");
	            //     this.adminattributes = this.utilityService.listAppend(this.adminattributes, 'data-processcontext="'+this.recordProcessContext+'"', " ");
	            //     this.adminattributes = this.utilityService.listAppend(this.adminattributes, 'data-processquerystring="'+this.recordProcessQueryString+'"', " ");
	            //     this.adminattributes = this.utilityService.listAppend(this.adminattributes, 'data-processupdatetableid="'+this.recordProcessUpdateTableID+'"', " ");
	            // }
	            //Setup the primary representation column if no columns were passed in
	            /*
	            <cfif not arrayLen(thistag.columns)>
	                <cfset arrayAppend(thistag.columns, {
	                    propertyIdentifier = thistag.exampleentity.getSimpleRepresentationPropertyName(),
	                    title = "",
	                    tdclass="primary",
	                    search = true,
	                    sort = true,
	                    filter = false,
	                    range = false,
	                    editable = false,
	                    buttonGroup = true
	                }) />
	            </cfif>
	            */
	            //Setup the list of all property identifiers to be used later
	            angular.forEach(_this.columns, function (column) {
	                //If this is a standard propertyIdentifier
	                if (column.propertyIdentifier) {
	                    //Add to the all property identifiers
	                    _this.allpropertyidentifiers = _this.utilityService.listAppend(_this.allpropertyidentifiers, column.propertyIdentifier);
	                    //Check to see if we need to setup the dynamic filters, etc
	                    //<cfif not len(column.search) || not len(column.sort) || not len(column.filter) || not len(column.range)>
	                    if (!column.searchable || !!column.searchable.length || !column.sort || !column.sort.length) {
	                        //Get the entity object to get property metaData
	                        var thisEntityName = _this.$slatwall.getLastEntityNameInPropertyIdentifier(_this.exampleEntity.metaData.className, column.propertyIdentifier);
	                        var thisPropertyName = _this.utilityService.listLast(column.propertyIdentifier, '.');
	                        var thisPropertyMeta = _this.$slatwall.getPropertyByEntityNameAndPropertyName(thisEntityName, thisPropertyName);
	                    }
	                }
	                else if (column.processObjectProperty) {
	                    column.searchable = false;
	                    column.sort = false;
	                    /*
	                    <cfset column.filter = false />
	                    <cfset column.range = false />
	                    */
	                    _this.allprocessobjectproperties = _this.utilityService.listAppend(_this.allprocessobjectproperties, column.processObjectProperty);
	                }
	                if (column.tdclass) {
	                    var tdclassArray = column.tdclass.split(' ');
	                    if (tdclassArray.indexOf("primary") >= 0 && _this.expandable) {
	                        _this.tableattributes = _this.utilityService.listAppend(_this.tableattributes, 'data-expandsortproperty=' + column.propertyIdentifier, " ");
	                        column.sort = false;
	                    }
	                }
	            });
	            //Setup a variable for the number of columns so that the none can have a proper colspan
	            _this.columnCount = _this.columns.length;
	            if (_this.selectable) {
	                _this.columnCount++;
	            }
	            if (_this.multiselectable) {
	                _this.columnCount++;
	            }
	            if (_this.sortable) {
	                _this.columnCount++;
	            }
	            if (_this.administrativeCount) {
	                _this.administrativeCount++;
	            }
	            //Setup table class
	            _this.tableclass = _this.tableclass || '';
	            _this.tableclass = _this.utilityService.listPrepend(_this.tableclass, 'table table-bordered table-hover', ' ');
	        };
	        this.setupColumns = function () {
	            //assumes no alias formatting
	            angular.forEach(_this.columns.reverse(), function (column) {
	                var lastEntity = _this.$slatwall.getLastEntityNameInPropertyIdentifier(_this.collectionObject, column.propertyIdentifier);
	                var title = _this.$slatwall.getRBKey('entity.' + lastEntity.toLowerCase() + '.' + _this.utilityService.listLast(column.propertyIdentifier, '.'));
	                if (angular.isUndefined(column.isVisible)) {
	                    column.isVisible = true;
	                }
	                _this.collectionConfig.addDisplayProperty(column.propertyIdentifier, title, column);
	            });
	            //if the passed in collection has columns perform some formatting
	            if (_this.hasCollectionPromise) {
	                //assumes alias formatting from collectionConfig
	                angular.forEach(_this.collectionConfig.columns, function (column) {
	                    var lastEntity = _this.$slatwall.getLastEntityNameInPropertyIdentifier(_this.collectionObject, _this.utilityService.listRest(column.propertyIdentifier, '.'));
	                    column.title = column.title || _this.$slatwall.getRBKey('entity.' + lastEntity.toLowerCase() + '.' + _this.utilityService.listLast(column.propertyIdentifier, '.'));
	                    if (angular.isUndefined(column.isVisible)) {
	                        column.isVisible = true;
	                    }
	                });
	            }
	        };
	        this.updateMultiselectValues = function () {
	            _this.multiselectValues = _this.selectionService.getSelections('ListingDisplay');
	        };
	        this.escapeRegExp = function (str) {
	            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	        };
	        this.replaceAll = function (str, find, replace) {
	            return str.replace(new RegExp(_this.escapeRegExp(find), 'g'), replace);
	        };
	        this.getPageRecordKey = function (propertyIdentifier) {
	            if (propertyIdentifier) {
	                var propertyIdentifierWithoutAlias = '';
	                if (propertyIdentifier.indexOf('_') === 0) {
	                    propertyIdentifierWithoutAlias = propertyIdentifier.substring(propertyIdentifier.indexOf('.') + 1, propertyIdentifier.length);
	                }
	                else {
	                    propertyIdentifierWithoutAlias = propertyIdentifier;
	                }
	                return _this.replaceAll(propertyIdentifierWithoutAlias, '.', '_');
	            }
	            return '';
	        };
	        this.getAdminAttributesByType = function (type) {
	            var recordActionName = 'record' + type.toUpperCase() + 'Action';
	            var recordActionPropertyName = recordActionName + 'Property';
	            var recordActionQueryStringName = recordActionName + 'QueryString';
	            var recordActionModalName = recordActionName + 'Modal';
	            _this.adminattributes = _this.utilityService.listAppend(_this.adminattributes, 'data-' + type + 'action="' + _this[recordActionName] + '"', " ");
	            if (_this[recordActionPropertyName] && _this[recordActionPropertyName].length) {
	                _this.adminattributes = _this.utilityService.listAppend(_this.adminattributes, 'data-' + type + 'actionproperty="' + _this[recordActionPropertyName] + '"', " ");
	            }
	            _this.adminattributes = _this.utilityService.listAppend(_this.adminattributes, 'data-' + type + 'querystring="' + _this[recordActionQueryStringName] + '"', " ");
	            _this.adminattributes = _this.utilityService.listAppend(_this.adminattributes, 'data-' + type + 'modal="' + _this[recordActionModalName] + '"', " ");
	        };
	        this.getExportAction = function () {
	            return _this.exportAction + _this.collectionID;
	        };
	        this.$q = $q;
	        this.$timeout = $timeout;
	        this.$slatwall = $slatwall;
	        this.$transclude = $transclude;
	        this.partialsPath = partialsPath;
	        this.utilityService = utilityService;
	        this.$scope = $scope;
	        this.$element = $element;
	        this.collectionConfigService = collectionConfigService;
	        this.paginationService = paginationService;
	        this.selectionService = selectionService;
	        this.observerService = observerService;
	        this.intialSetup();
	    }
	    SWListingDisplayController.$inject = ['$scope', '$element', '$transclude', '$timeout', '$q', '$slatwall', 'partialsPath', 'utilityService', 'collectionConfigService', 'paginationService', 'selectionService', 'observerService'];
	    return SWListingDisplayController;
	})();
	var SWListingDisplay = (function () {
	    function SWListingDisplay(corePartialsPath, observerService, pathBuilderConfig) {
	        this.corePartialsPath = corePartialsPath;
	        this.observerService = observerService;
	        this.restrict = 'E';
	        this.scope = {};
	        this.transclude = true;
	        this.bindToController = {
	            isRadio: "=",
	            //angularLink:true || false
	            angularLinks: "=",
	            /*required*/
	            collection: "=",
	            collectionConfig: "=",
	            getCollection: "&?",
	            collectionPromise: "=",
	            edit: "=",
	            /*Optional*/
	            title: "@",
	            /*Admin Actions*/
	            recordEditAction: "@",
	            recordEditActionProperty: "@",
	            recordEditQueryString: "@",
	            recordEditModal: "=",
	            recordEditDisabled: "=",
	            recordDetailAction: "@",
	            recordDetailActionProperty: "@",
	            recordDetailQueryString: "@",
	            recordDetailModal: "=",
	            recordDeleteAction: "@",
	            recordDeleteActionProperty: "@",
	            recordDeleteQueryString: "@",
	            recordAddAction: "@",
	            recordAddActionProperty: "@",
	            recordAddQueryString: "@",
	            recordAddModal: "=",
	            recordAddDisabled: "=",
	            recordProcessesConfig: "=",
	            /* record processes config is an array of actions. Example:
	            [
	            {
	                recordProcessAction:"@",
	                recordProcessActionProperty:"@",
	                recordProcessQueryString:"@",
	                recordProcessContext:"@",
	                recordProcessEntity:"=",
	                recordProcessEntityData:"=",
	                recordProcessUpdateTableID:"=",
	                recordProcessButtonDisplayFlag:"=",
	            }
	            ]
	            */
	            /*Hierachy Expandable*/
	            parentPropertyName: "@",
	            //booleans
	            expandable: "=",
	            expandableOpenRoot: "=",
	            /*Searching*/
	            searchText: "=",
	            /*Sorting*/
	            sortProperty: "@",
	            sortContextIDColumn: "@",
	            sortContextIDValue: "@",
	            /*Single Select*/
	            selectFiledName: "@",
	            selectValue: "@",
	            selectTitle: "@",
	            /*Multiselect*/
	            multiselectFieldName: "@",
	            multiselectPropertyIdentifier: "@",
	            multiselectIdPaths: "@",
	            multiselectValues: "@",
	            /*Helper / Additional / Custom*/
	            tableattributes: "@",
	            tableclass: "@",
	            adminattributes: "@",
	            /* Settings */
	            showheader: "=",
	            /* Basic Action Caller Overrides*/
	            createModal: "=",
	            createAction: "@",
	            createQueryString: "@",
	            exportAction: "@",
	            getChildCount: "=",
	            hasSearch: "="
	        };
	        this.controller = SWListingDisplayController;
	        this.controllerAs = "swListingDisplay";
	        this.link = function (scope, element, attrs, controller, transclude) {
	            scope.$on('$destroy', function () {
	                observerService.detachByID(scope.collection);
	            });
	        };
	        this.corePartialsPath = corePartialsPath;
	        this.observerService = observerService;
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(this.corePartialsPath) + 'listingdisplay.html';
	    }
	    SWListingDisplay.Factory = function () {
	        var directive = function (corePartialsPath, observerService, pathBuilderConfig) {
	            return new SWListingDisplay(corePartialsPath, observerService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            'corePartialsPath',
	            'observerService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    SWListingDisplay.$inject = ['corePartialsPath',
	        'observerService',
	        'pathBuilderConfig'];
	    return SWListingDisplay;
	})();
	exports.SWListingDisplay = SWListingDisplay;
	exports.SWListingDisplay = SWListingDisplay;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWListingColumnController = (function () {
	    function SWListingColumnController() {
	        var _this = this;
	        this.init = function () {
	            _this.editable = _this.editable || false;
	        };
	        this.init();
	    }
	    return SWListingColumnController;
	})();
	var SWListingColumn = (function () {
	    function SWListingColumn(utilityService) {
	        var _this = this;
	        this.utilityService = utilityService;
	        this.restrict = 'EA';
	        this.scope = true;
	        this.bindToController = {
	            propertyIdentifier: "@",
	            processObjectProperty: "@",
	            title: "@",
	            tdclass: "@",
	            search: "=",
	            sort: "=",
	            filter: "=",
	            range: "=",
	            editable: "=",
	            buttonGroup: "="
	        };
	        this.controller = SWListingColumnController;
	        this.controllerAs = "swListingColumn";
	        this.link = function (scope, element, attrs) {
	            var column = {
	                propertyIdentifier: scope.swListingColumn.propertyIdentifier,
	                processObjectProperty: scope.swListingColumn.processObjectProperty,
	                title: scope.swListingColumn.title,
	                tdclass: scope.swListingColumn.tdclass,
	                search: scope.swListingColumn.search,
	                sort: scope.swListingColumn.sort,
	                filter: scope.swListingColumn.filter,
	                range: scope.swListingColumn.range,
	                editable: scope.swListingColumn.editable,
	                buttonGroup: scope.swListingColumn.buttonGroup
	            };
	            if (_this.utilityService.ArrayFindByPropertyValue(scope.$parent.swListingDisplay.columns, 'propertyIdentifier', column.propertyIdentifier) === -1) {
	                scope.$parent.swListingDisplay.columns.push(column);
	            }
	        };
	    }
	    SWListingColumn.Factory = function () {
	        var directive = function (utilityService) {
	            return new SWListingColumn(utilityService);
	        };
	        directive.$inject = [
	            'utilityService'
	        ];
	        return directive;
	    };
	    SWListingColumn.$inject = ['utilityService'];
	    return SWListingColumn;
	})();
	exports.SWListingColumn = SWListingColumn;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWLoginController = (function () {
	    function SWLoginController($route, $log, $window, corePartialsPath, $slatwall, dialogService) {
	        var _this = this;
	        this.$route = $route;
	        this.$log = $log;
	        this.$window = $window;
	        this.corePartialsPath = corePartialsPath;
	        this.$slatwall = $slatwall;
	        this.dialogService = dialogService;
	        this.login = function () {
	            var loginPromise = _this.$slatwall.login(_this.account_login.data.emailAddress, _this.account_login.data.password);
	            loginPromise.then(function (loginResponse) {
	                if (loginResponse && loginResponse.data && loginResponse.data.token) {
	                    _this.$window.localStorage.setItem('token', loginResponse.data.token);
	                    _this.$route.reload();
	                    _this.dialogService.removeCurrentDialog();
	                }
	            });
	        };
	        this.$slatwall = $slatwall;
	        this.$window = $window;
	        this.$route = $route;
	        this.account_login = $slatwall.newEntity('Account_Login');
	    }
	    return SWLoginController;
	})();
	var SWLogin = (function () {
	    function SWLogin($route, $log, $window, corePartialsPath, $slatwall, dialogService, pathBuilderConfig) {
	        this.$route = $route;
	        this.$log = $log;
	        this.$window = $window;
	        this.corePartialsPath = corePartialsPath;
	        this.$slatwall = $slatwall;
	        this.dialogService = dialogService;
	        this.restrict = 'E';
	        this.scope = {};
	        this.bindToController = {};
	        this.controller = SWLoginController;
	        this.controllerAs = "SwLogin";
	        this.link = function (scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(this).corePartialsPath + '/login.html';
	    }
	    SWLogin.Factory = function () {
	        var directive = function ($route, $log, $window, corePartialsPath, $slatwall, dialogService, pathBuilderConfig) {
	            return new SWLogin($route, $log, $window, corePartialsPath, $slatwall, dialogService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$route',
	            '$log',
	            '$window',
	            'corePartialsPath',
	            '$slatwall',
	            'dialogService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWLogin;
	})();
	exports.SWLogin = SWLogin;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWNumbersOnly = (function () {
	    function SWNumbersOnly() {
	        this.restrict = "A";
	        this.require = "ngModel";
	        this.scope = {
	            ngModel: '=',
	            minNumber: '=?',
	            maxNumber: '=?'
	        };
	        this.link = function ($scope, element, attrs, modelCtrl) {
	            modelCtrl.$parsers.push(function (inputValue) {
	                var modelValue = modelCtrl.$modelValue;
	                if (inputValue != "" && !isNaN(Number(inputValue))) {
	                    if (angular.isDefined($scope.minNumber)) {
	                        if (Number(inputValue) >= $scope.minNumber || !angular.isDefined($scope.minNumber)) {
	                            modelCtrl.$setValidity("minNumber", true);
	                        }
	                        else if (angular.isDefined($scope.minNumber)) {
	                            modelCtrl.$setValidity("minNumber", false);
	                        }
	                    }
	                    if (angular.isDefined($scope.maxNumber)) {
	                        if (Number(inputValue) <= $scope.maxNumber || !angular.isDefined($scope.maxNumber)) {
	                            modelCtrl.$setValidity("maxNumber", true);
	                        }
	                        else if (angular.isDefined($scope.maxNumber)) {
	                            modelCtrl.$setValidity("maxNumber", false);
	                        }
	                    }
	                    if (modelCtrl.$valid) {
	                        modelValue = Number(inputValue);
	                    }
	                    else {
	                        modelValue = $scope.minNumber;
	                    }
	                }
	                return modelValue;
	            });
	        };
	    }
	    SWNumbersOnly.Factory = function () {
	        var directive = function () { return new SWNumbersOnly(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWNumbersOnly;
	})();
	exports.SWNumbersOnly = SWNumbersOnly;


/***/ },
/* 39 */
/***/ function(module, exports) {

	var SWLoading = (function () {
	    function SWLoading($log, corePartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'A',
	            transclude: true,
	            templateUrl: pathBuilderConfig.buildPartialsPath(corePartialsPath) + 'loading.html',
	            scope: {
	                swLoading: '='
	            },
	            link: function (scope, attrs, element) {
	            }
	        };
	    }
	    SWLoading.Factory = function () {
	        var directive = function ($log, corePartialsPath, pathBuilderConfig) {
	            return new SWLoading($log, corePartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            'corePartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWLoading;
	})();
	exports.SWLoading = SWLoading;


/***/ },
/* 40 */
/***/ function(module, exports) {

	var SWScrollTrigger = (function () {
	    function SWScrollTrigger($rootScope, $window, $timeout) {
	        return {
	            link: function (scope, elem, attrs) {
	                var checkWhenEnabled, handler, scrollDistance, scrollEnabled;
	                $window = angular.element($window);
	                scrollDistance = 0;
	                if (attrs.infiniteScrollDistance != null) {
	                    scope
	                        .$watch(attrs.infiniteScrollDistance, function (value) {
	                        return scrollDistance = parseInt(value, 10);
	                    });
	                }
	                scrollEnabled = true;
	                checkWhenEnabled = false;
	                if (attrs.infiniteScrollDisabled != null) {
	                    scope
	                        .$watch(attrs.infiniteScrollDisabled, function (value) {
	                        scrollEnabled = !value;
	                        if (scrollEnabled
	                            && checkWhenEnabled) {
	                            checkWhenEnabled = false;
	                            return handler();
	                        }
	                    });
	                }
	                handler = function () {
	                    var elementBottom, remaining, shouldScroll, windowBottom;
	                    windowBottom = $window.height()
	                        + $window.scrollTop();
	                    elementBottom = elem.offset().top
	                        + elem.height();
	                    remaining = elementBottom
	                        - windowBottom;
	                    shouldScroll = remaining <= $window
	                        .height()
	                        * scrollDistance;
	                    if (shouldScroll && scrollEnabled) {
	                        if ($rootScope.$$phase) {
	                            return scope
	                                .$eval(attrs.infiniteScroll);
	                        }
	                        else {
	                            return scope
	                                .$apply(attrs.infiniteScroll);
	                        }
	                    }
	                    else if (shouldScroll) {
	                        return checkWhenEnabled = true;
	                    }
	                };
	                $window.on('scroll', handler);
	                scope.$on('$destroy', function () {
	                    return $window.off('scroll', handler);
	                });
	                return $timeout((function () {
	                    if (attrs.infiniteScrollImmediateCheck) {
	                        if (scope
	                            .$eval(attrs.infiniteScrollImmediateCheck)) {
	                            return handler();
	                        }
	                    }
	                    else {
	                        return handler();
	                    }
	                }), 0);
	            }
	        };
	    }
	    SWScrollTrigger.Factory = function () {
	        var directive = function ($rootScope, $window, $timeout) {
	            return new SWScrollTrigger($rootScope, $window, $timeout);
	        };
	        directive.$inject = [
	            '$rootScope',
	            '$window',
	            '$timeout'
	        ];
	        return directive;
	    };
	    return SWScrollTrigger;
	})();
	exports.SWScrollTrigger = SWScrollTrigger;


/***/ },
/* 41 */
/***/ function(module, exports) {

	var SWRbKey = (function () {
	    function SWRbKey($slatwall, observerService, utilityService, $rootScope, $log) {
	        return {
	            restrict: 'A',
	            scope: {
	                swRbkey: "="
	            },
	            link: function (scope, element, attrs) {
	                var rbKeyValue = scope.swRbkey;
	                var bindRBKey = function () {
	                    if (angular.isDefined(rbKeyValue) && angular.isString(rbKeyValue)) {
	                        element.text($slatwall.getRBKey(rbKeyValue));
	                    }
	                };
	                if (!$slatwall.getRBLoaded()) {
	                    observerService.attach(bindRBKey, 'hasResourceBundle');
	                }
	                else {
	                    bindRBKey();
	                }
	            }
	        };
	    }
	    SWRbKey.Factory = function () {
	        var directive = function ($slatwall, observerService, utilityService, $rootScope, $log) {
	            return new SWRbKey($slatwall, observerService, utilityService, $rootScope, $log);
	        };
	        directive.$inject = [
	            '$slatwall',
	            'observerService',
	            'utilityService',
	            '$rootScope',
	            '$log',
	        ];
	        return directive;
	    };
	    return SWRbKey;
	})();
	exports.SWRbKey = SWRbKey;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWOptions = (function () {
	    function SWOptions($log, $slatwall, observerService, corePartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'AE',
	            scope: {
	                objectName: '@'
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(corePartialsPath) + "options.html",
	            link: function (scope, element, attrs) {
	                scope.swOptions = {};
	                scope.swOptions.objectName = scope.objectName;
	                //sets up drop down options via collections
	                scope.getOptions = function () {
	                    scope.swOptions.object = $slatwall['new' + scope.swOptions.objectName]();
	                    var columnsConfig = [
	                        {
	                            "propertyIdentifier": scope.swOptions.objectName.charAt(0).toLowerCase() + scope.swOptions.objectName.slice(1) + 'Name'
	                        },
	                        {
	                            "propertyIdentifier": scope.swOptions.object.$$getIDName()
	                        }
	                    ];
	                    $slatwall.getEntity(scope.swOptions.objectName, { allRecords: true, columnsConfig: angular.toJson(columnsConfig) })
	                        .then(function (value) {
	                        scope.swOptions.options = value.records;
	                        observerService.notify('optionsLoaded');
	                    });
	                };
	                scope.getOptions();
	                var selectFirstOption = function () {
	                    scope.swOptions.selectOption(scope.swOptions.options[0]);
	                };
	                observerService.attach(selectFirstOption, 'selectFirstOption', 'selectFirstOption');
	                //use by ng-change to record changes
	                scope.swOptions.selectOption = function (selectedOption) {
	                    scope.swOptions.selectedOption = selectedOption;
	                    observerService.notify('optionsChanged', selectedOption);
	                };
	            }
	        };
	    }
	    SWOptions.Factory = function () {
	        var directive = function ($log, $slatwall, observerService, corePartialsPath, pathBuilderConfig) {
	            return new SWOptions($log, $slatwall, observerService, corePartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            'observerService',
	            'corePartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWOptions;
	})();
	exports.SWOptions = SWOptions;


/***/ },
/* 43 */
/***/ function(module, exports) {

	var SWSelection = (function () {
	    function SWSelection($log, selectionService, observerService, corePartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(corePartialsPath) + "selection.html",
	            scope: {
	                selection: "=",
	                selectionid: "@",
	                id: "=",
	                isRadio: "=",
	                name: "@",
	                disabled: "="
	            },
	            link: function (scope, $element, $attrs) {
	                if (!scope.name) {
	                    scope.name = 'selection';
	                }
	                if (selectionService.hasSelection(scope.selectionid, scope.selection)) {
	                    scope.toggleValue = true;
	                }
	                scope.toggleSelection = function (toggleValue, selectionid, selection) {
	                    if (scope.isRadio) {
	                        selectionService.radioSelection(selectionid, selection);
	                        return;
	                    }
	                    if (toggleValue) {
	                        selectionService.addSelection(selectionid, selection);
	                    }
	                    else {
	                        selectionService.removeSelection(selectionid, selection);
	                    }
	                    observerService.notify('swSelectionToggleSelection', { selectionid: selectionid, selection: selection });
	                };
	            }
	        };
	    }
	    SWSelection.Factory = function () {
	        var directive = function ($log, selectionService, observerService, corePartialsPath, pathBuilderConfig) {
	            return new SWSelection($log, selectionService, observerService, corePartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            'selectionService',
	            'observerService',
	            'corePartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWSelection;
	})();
	exports.SWSelection = SWSelection;


/***/ },
/* 44 */
/***/ function(module, exports) {

	var SWClickOutside = (function () {
	    function SWClickOutside($document, $timeout) {
	        return {
	            restrict: 'A',
	            scope: {
	                swClickOutside: '&'
	            },
	            link: function ($scope, elem, attr) {
	                var classList = (attr.outsideIfNot !== undefined) ? attr.outsideIfNot.replace(', ', ',').split(',') : [];
	                if (attr.id !== undefined)
	                    classList.push(attr.id);
	                $document.on('click', function (e) {
	                    var i = 0, element;
	                    if (!e.target)
	                        return;
	                    for (element = e.target; element; element = element.parentNode) {
	                        var id = element.id;
	                        var classNames = element.className;
	                        if (id !== undefined) {
	                            for (i = 0; i < classList.length; i++) {
	                                if (id.indexOf(classList[i]) > -1 || classNames.indexOf(classList[i]) > -1) {
	                                    return;
	                                }
	                            }
	                        }
	                    }
	                    $timeout(function () {
	                        $scope.swClickOutside();
	                    });
	                });
	            }
	        };
	    }
	    SWClickOutside.Factory = function () {
	        var directive = function ($document, $timeout) {
	            return new SWClickOutside($document, $timeout);
	        };
	        directive.$inject = [
	            '$document', '$timeout'
	        ];
	        return directive;
	    };
	    return SWClickOutside;
	})();
	exports.SWClickOutside = SWClickOutside;


/***/ },
/* 45 */
/***/ function(module, exports) {

	var SWDirective = (function () {
	    function SWDirective($compile) {
	        return {
	            restrict: 'A',
	            replace: true,
	            scope: {
	                variables: "=",
	                directive: "="
	            },
	            link: function (scope, element, attrs) {
	                var template = '<span ' + scope.directive + ' ';
	                if (angular.isDefined(scope.variables)) {
	                    angular.forEach(scope.variables, function (value, key) {
	                        template += ' ' + key + '=' + value + ' ';
	                    });
	                }
	                template += +'>';
	                template += '</span>';
	                // Render the template.
	                element.html('').append($compile(template)(scope));
	            }
	        };
	    }
	    SWDirective.Factory = function () {
	        var directive = function ($compile) {
	            return new SWDirective($compile);
	        };
	        directive.$inject = [
	            '$compile'
	        ];
	        return directive;
	    };
	    return SWDirective;
	})();
	exports.SWDirective = SWDirective;


/***/ },
/* 46 */
/***/ function(module, exports) {

	var SWExportAction = (function () {
	    function SWExportAction($log, corePartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'A',
	            templateUrl: pathBuilderConfig.buildPartialsPath(corePartialsPath) + 'exportaction.html',
	            scope: {},
	            link: function (scope, element, attrs) {
	            }
	        };
	    }
	    SWExportAction.Factory = function () {
	        var directive = function ($log, corePartialsPath, pathBuilderConfig) {
	            return new SWExportAction($log, corePartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            'corePartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWExportAction;
	})();
	exports.SWExportAction = SWExportAction;


/***/ },
/* 47 */
/***/ function(module, exports) {

	var SWHref = (function () {
	    function SWHref() {
	        return {
	            restrict: 'A',
	            scope: {
	                swHref: "@"
	            },
	            link: function (scope, element, attrs) {
	                /*convert link to use hashbang*/
	                var hrefValue = attrs.swHref;
	                hrefValue = '?ng#!' + hrefValue;
	                element.attr('href', hrefValue);
	            }
	        };
	    }
	    SWHref.Factory = function () {
	        var directive = function () {
	            return new SWHref();
	        };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWHref;
	})();
	exports.SWHref = SWHref;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/// <reference path='../../../../../client/typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../../client/typings/tsd.d.ts' />
	var SWProcessCallerController = (function () {
	    function SWProcessCallerController($templateRequest, $compile, corePartialsPath, $scope, $element, $transclude, utilityService, pathBuilderConfig) {
	        var _this = this;
	        this.$templateRequest = $templateRequest;
	        this.$compile = $compile;
	        this.corePartialsPath = corePartialsPath;
	        this.$scope = $scope;
	        this.$element = $element;
	        this.$transclude = $transclude;
	        this.$templateRequest = $templateRequest;
	        this.$compile = $compile;
	        this.corePartialsPath = corePartialsPath;
	        this.utilityService = utilityService;
	        this.type = this.type || 'link';
	        this.queryString = this.queryString || '';
	        this.$scope = $scope;
	        this.$element = $element;
	        this.$transclude = this.$transclude;
	        this.$templateRequest(pathBuilderConfig.buildPartialsPath(this.corePartialsPath) + "processcaller.html").then(function (html) {
	            var template = angular.element(html);
	            _this.$element.parent().append(template);
	            $compile(template)(_this.$scope);
	        });
	    }
	    SWProcessCallerController.$inject = ['$templateRequest', '$compile', 'corePartialsPath', '$scope', '$element', '$transclude', 'utilityService',
	        'pathBuilderConfig'];
	    return SWProcessCallerController;
	})();
	var SWProcessCaller = (function () {
	    function SWProcessCaller(corePartialsPath, utilityService) {
	        this.corePartialsPath = corePartialsPath;
	        this.utilityService = utilityService;
	        this.restrict = 'E';
	        this.scope = {};
	        this.bindToController = {
	            action: "@",
	            entity: "@",
	            processContext: "@",
	            hideDisabled: "=",
	            type: "@",
	            queryString: "@",
	            text: "@",
	            title: "@",
	            'class': "@",
	            icon: "=",
	            iconOnly: "=",
	            submit: "=",
	            confirm: "=",
	            disabled: "=",
	            disabledText: "@",
	            modal: "="
	        };
	        this.controller = SWProcessCallerController;
	        this.controllerAs = "swProcessCaller";
	        this.link = function (scope, element, attrs) {
	        };
	        this.corePartialsPath = corePartialsPath;
	        this.utilityService = utilityService;
	    }
	    SWProcessCaller.Factory = function () {
	        var directive = function (corePartialsPath, utilityService) {
	            return new SWProcessCaller(corePartialsPath, utilityService);
	        };
	        directive.$inject = [
	            'corePartialsPath', 'utilityService'
	        ];
	        return directive;
	    };
	    SWProcessCaller.$inject = ['corePartialsPath', 'utilityService'];
	    return SWProcessCaller;
	})();
	exports.SWProcessCaller = SWProcessCaller;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/// <reference path='../../../../../client/typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../../client/typings/tsd.d.ts' />
	var SWResizedImage = (function () {
	    function SWResizedImage($http, $log, $q, $slatwall, corePartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            scope: {
	                orderItem: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(corePartialsPath) + "orderitem-image.html",
	            link: function (scope, element, attrs) {
	                var profileName = attrs.profilename;
	                var skuID = scope.orderItem.data.sku.data.skuID;
	                //Get the template.
	                //Call slatwallService to get the path from the image.
	                $slatwall.getResizedImageByProfileName(profileName, skuID)
	                    .then(function (response) {
	                    $log.debug('Get the image');
	                    $log.debug(response.data.resizedImagePaths[0]);
	                    scope.orderItem.imagePath = response.data.resizedImagePaths[0];
	                });
	            }
	        };
	    }
	    SWResizedImage.Factory = function () {
	        var directive = function ($http, $log, $q, $slatwall, corePartialsPath, pathBuilderConfig) {
	            return new SWResizedImage($http, $log, $q, $slatwall, corePartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$http', '$log', '$q', '$slatwall', 'corePartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWResizedImage;
	})();
	exports.SWResizedImage = SWResizedImage;


/***/ },
/* 50 */
/***/ function(module, exports) {

	var SWSortable = (function () {
	    function SWSortable(expression, compiledElement) {
	        return function (linkElement) {
	            var scope = this;
	            linkElement.sortable({
	                placeholder: "placeholder",
	                opacity: 0.8,
	                axis: "y",
	                update: function (event, ui) {
	                    // get model
	                    var model = scope.$apply(expression);
	                    // remember its length
	                    var modelLength = model.length;
	                    // rember html nodes
	                    var items = [];
	                    // loop through items in new order
	                    linkElement.children().each(function (index) {
	                        var item = $(this);
	                        // get old item index
	                        var oldIndex = parseInt(item.attr("sw:sortable-index"), 10);
	                        // add item to the end of model
	                        model.push(model[oldIndex]);
	                        if (item.attr("sw:sortable-index")) {
	                            // items in original order to restore dom
	                            items[oldIndex] = item;
	                            // and remove item from dom
	                            item.detach();
	                        }
	                    });
	                    model.splice(0, modelLength);
	                    // restore original dom order, so angular does not get confused
	                    linkElement.append.apply(linkElement, items);
	                    // notify angular of the change
	                    scope.$digest();
	                }
	            });
	        };
	    }
	    SWSortable.Factory = function () {
	        var directive = function (expression, compiledElement) { return new SWSortable(expression, compiledElement); };
	        directive.$inject = ['expression', 'compiledElement'];
	        return directive;
	    };
	    return SWSortable;
	})();
	exports.SWSortable = SWSortable;


/***/ },
/* 51 */
/***/ function(module, exports) {

	var SWDetail = (function () {
	    function SWDetail($location, $log, $slatwall, coreEntityPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(coreEntityPartialsPath) + '/detail.html',
	            link: function (scope, element, attr) {
	                scope.$id = "slatwallDetailController";
	                $log.debug('slatwallDetailController');
	                /*Sets the view dirty on save*/
	                scope.setDirty = function (entity) {
	                    angular.forEach(entity.forms, function (form) {
	                        form.$setSubmitted();
	                    });
	                };
	                var setupMetaData = function () {
	                    scope[scope.entityName.toLowerCase()] = scope.entity;
	                    scope.entity.metaData.$$getDetailTabs().then(function (value) {
	                        scope.detailTabs = value.data;
	                        $log.debug('detailtabs');
	                        $log.debug(scope.detailTabs);
	                    });
	                };
	                var propertyCasedEntityName = scope.entityName.charAt(0).toUpperCase() + scope.entityName.slice(1);
	                scope.tabPartialPath = coreEntityPartialsPath + 'entity/';
	                scope.getEntity = function () {
	                    if (scope.entityID === 'null') {
	                        scope.entity = $slatwall['new' + propertyCasedEntityName]();
	                        setupMetaData();
	                    }
	                    else {
	                        var entityPromise = $slatwall['get' + propertyCasedEntityName]({ id: scope.entityID });
	                        entityPromise.promise.then(function () {
	                            scope.entity = entityPromise.value;
	                            setupMetaData();
	                        });
	                    }
	                };
	                scope.getEntity();
	                scope.deleteEntity = function () {
	                    var deletePromise = scope.entity.$$delete();
	                    deletePromise.then(function () {
	                        $location.path('/entity/' + propertyCasedEntityName + '/');
	                    });
	                };
	                scope.allTabsOpen = false;
	            }
	        };
	    }
	    SWDetail.Factory = function () {
	        var directive = function ($location, $log, $slatwall, coreEntityPartialsPath, pathBuilderConfig) {
	            return new SWDetail($location, $log, $slatwall, coreEntityPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$location',
	            '$log',
	            '$slatwall',
	            'coreEntityPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWDetail;
	})();
	exports.SWDetail = SWDetail;


/***/ },
/* 52 */
/***/ function(module, exports) {

	var SWList = (function () {
	    function SWList($log, $slatwall, coreEntityPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(coreEntityPartialsPath) + '/list.html',
	            link: function (scope, element, attr) {
	                $log.debug('slatwallList init');
	                scope.getCollection = function () {
	                    var pageShow = 50;
	                    if (scope.pageShow !== 'Auto') {
	                        pageShow = scope.pageShow;
	                    }
	                    scope.entityName = scope.entityName.charAt(0).toUpperCase() + scope.entityName.slice(1);
	                    var collectionListingPromise = $slatwall.getEntity(scope.entityName, { currentPage: scope.currentPage, pageShow: pageShow, keywords: scope.keywords });
	                    collectionListingPromise.then(function (value) {
	                        scope.collection = value;
	                        scope.collectionConfig = angular.fromJson(scope.collection.collectionConfig);
	                    });
	                };
	                scope.getCollection();
	            }
	        };
	    }
	    SWList.Factory = function () {
	        var directive = function ($log, $slatwall, coreEntityPartialsPath, pathBuilderConfig) {
	            return new SWList($log, $slatwall, coreEntityPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            'coreEntityPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWList;
	})();
	exports.SWList = SWList;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * This validate directive will look at the current element, figure out the context (save, edit, delete) and
	 * validate based on that context as defined in the validation properties object.
	 */
	// 'use strict';
	// angular.module('slatwalladmin').directive('swValidate',
	// [ '$log','$slatwall', function($log, $slatwall) {
	var SWValidate = (function () {
	    function SWValidate($log, $slatwall) {
	        return {
	            restrict: "A",
	            require: '^ngModel',
	            link: function (scope, elem, attr, ngModel) {
	                //Define our contexts and validation property enums.
	                var ContextsEnum = {
	                    SAVE: { name: "save", value: 0 },
	                    DELETE: { name: "delete", value: 1 },
	                    EDIT: { name: "edit", value: 2 }
	                };
	                var ValidationPropertiesEnum = {
	                    REGEX: { name: "regex", value: 0 },
	                    MIN_VALUE: { name: "minValue", value: 1 },
	                    MAX_VALUE: { name: "maxValue", value: 2 },
	                    EQ: { name: "eq", value: 3 },
	                    NEQ: { name: "neq", value: 4 },
	                    UNIQUE: { name: "unique", value: 5 },
	                    LTE: { name: "lte", value: 6 },
	                    GTE: { name: "gte", value: 7 },
	                    MIN_LENGTH: { name: "minLength", value: 8 },
	                    MAX_LENGTH: { name: "maxLength", value: 9 },
	                    DATA_TYPE: { name: "dataType", value: 10 },
	                    REQUIRED: { name: "required", value: 11 }
	                };
	                scope.validationPropertiesEnum = ValidationPropertiesEnum;
	                scope.contextsEnum = ContextsEnum;
	                var myCurrentContext = scope.contextsEnum.SAVE; //We are only checking the save context right now.
	                var contextNamesArray = getNamesFromObject(ContextsEnum); //Convert for higher order functions.
	                var validationPropertiesArray = getNamesFromObject(ValidationPropertiesEnum); //Convert for higher order functions.
	                var validationObject = scope.propertyDisplay.object.validations.properties; //Get the scope validation object.
	                var errors = scope.propertyDisplay.errors;
	                var errorMessages = [];
	                var failFlag = 0;
	                /**
	                * Iterates over the validation object looking for the current elements validations, maps that to a validation function list
	                * and calls those validate functions. When a validation fails, an error is set, the elements border turns red.
	                */
	                function validate(name, context, elementValue) {
	                    var validationResults = {};
	                    validationResults = { "name": "name", "context": "context", "required": "required", "error": "none", "errorkey": "none" };
	                    for (var key in validationObject) {
	                        // Look for the current attribute in the
	                        // validation parameters.
	                        if (key === name || key === name + "Flag") {
	                            // Now that we have found the current
	                            // validation parameters, iterate
	                            // through them looking for
	                            // the required parameters that match
	                            // the current page context (save,
	                            // delete, etc.)
	                            for (var inner in validationObject[key]) {
	                                var required = validationObject[key][inner].required || "false"; // Get
	                                // the
	                                // required
	                                // value
	                                var context = validationObject[key][inner].contexts || "none"; // Get
	                                // the
	                                // element
	                                // context
	                                //Setup the validation results object to pass back to caller.
	                                validationResults = { "name": key, "context": context, "required": required, "error": "none", "errorkey": "none" };
	                                var elementValidationArr = map(checkHasValidationType, validationPropertiesArray, validationObject[key][inner]);
	                                //Iterate over the array and call the validate function if it has that property.
	                                for (var i = 0; i < elementValidationArr.length; i++) {
	                                    if (elementValidationArr[i] == true) {
	                                        if (validationPropertiesArray[i] === "regex" && elementValue !== "") {
	                                            //Get the regex string to match and send to validation function.
	                                            var re = validationObject[key][inner].regex;
	                                            var result = validate_RegExp(elementValue, re); //true if pattern match, fail otherwise.
	                                            if (result != true) {
	                                                errorMessages
	                                                    .push("Invalid input");
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["REGEX"].name;
	                                                validationResults.fail = true;
	                                            }
	                                            else {
	                                                errorMessages
	                                                    .push("Valid input");
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["REGEX"].name;
	                                                validationResults.fail = false;
	                                            }
	                                            return validationResults;
	                                        }
	                                        if (validationPropertiesArray[i] === "minValue") {
	                                            var validationMinValue = validationObject[key][inner].minValue;
	                                            $log.debug(validationMinValue);
	                                            var result = validate_MinValue(elementValue, validationMinValue);
	                                            $log.debug("e>v" + result + " :" + elementValue, ":" + validationMinValue);
	                                            if (result != true) {
	                                                errorMessages
	                                                    .push("Minimum value is: "
	                                                    + validationMinValue);
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["MIN_VALUE"].name;
	                                                validationResults.fail = true;
	                                            }
	                                            else {
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["MIN_VALUE"].name;
	                                                validationResults.fail = false;
	                                            }
	                                            return validationResults;
	                                        }
	                                        if (validationPropertiesArray[i] === "maxValue") {
	                                            var validationMaxValue = validationObject[key][inner].maxValue;
	                                            var result = validate_MaxValue(elementValue, validationMaxValue);
	                                            $log.debug("Max Value result is: " + result);
	                                            if (result != true) {
	                                                errorMessages
	                                                    .push("Maximum value is: "
	                                                    + validationMaxValue);
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["MAX_VALUE"].name;
	                                                validationResults.fail = true;
	                                            }
	                                            return validationResults;
	                                        }
	                                        if (validationPropertiesArray[i] === "minLength") {
	                                            var validationMinLength = validationObject[key][inner].minLength;
	                                            var result = validate_MinLength(elementValue, validationMinLength);
	                                            $log.debug("Min Length result is: " + result);
	                                            if (result != true) {
	                                                errorMessages
	                                                    .push("Minimum length must be: "
	                                                    + validationMinLength);
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["MIN_LENGTH"].name;
	                                                validationResults.fail = true;
	                                            }
	                                            return validationResults;
	                                        }
	                                        if (validationPropertiesArray[i] === "maxLength") {
	                                            var validationMaxLength = validationObject[key][inner].maxLength;
	                                            var result = validate_MaxLength(elementValue, validationMaxLength);
	                                            $log.debug("Max Length result is: " + result);
	                                            if (result != true) {
	                                                errorMessages
	                                                    .push("Maximum length is: "
	                                                    + validationMaxLength);
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["MAX_LENGTH"].name;
	                                                validationResults.fail = true;
	                                            }
	                                            return validationResults;
	                                        }
	                                        if (validationPropertiesArray[i] === "eq") {
	                                            var validationEq = validationObject[key][inner].eq;
	                                            var result = validate_Eq(elementValue, validationEq);
	                                            if (result != true) {
	                                                errorMessages
	                                                    .push("Must equal "
	                                                    + validationEq);
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["EQ"].name;
	                                                validationResults.fail = true;
	                                            }
	                                            return validationResults;
	                                        }
	                                        if (validationPropertiesArray[i] === "neq") {
	                                            var validationNeq = validationObject[key][inner].neq;
	                                            var result = validate_Neq(elementValue, validationNeq);
	                                            if (result != true) {
	                                                errorMessages
	                                                    .push("Must not equal: "
	                                                    + validationNeq);
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["NEQ"].name;
	                                                validationResults.fail = true;
	                                            }
	                                            return validationResults;
	                                        }
	                                        if (validationPropertiesArray[i] === "lte") {
	                                            var validationLte = validationObject[key][inner].lte;
	                                            var result = validate_Lte(elementValue, validationLte);
	                                            if (result != true) {
	                                                errorMessages
	                                                    .push("Must be less than "
	                                                    + validationLte);
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["LTE"].name;
	                                                validationResults.fail = true;
	                                            }
	                                            return validationResults;
	                                        }
	                                        if (validationPropertiesArray[i] === "gte") {
	                                            var validationGte = validationObject[key][inner].gte;
	                                            var result = validate_Gte(elementValue, validationGte);
	                                            if (result != true) {
	                                                errorMessages
	                                                    .push("Must be greater than: "
	                                                    + validationGte);
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = "invalid-" + ValidationPropertiesEnum["GTE"].name;
	                                                validationResults.fail = true;
	                                            }
	                                            return validationResults;
	                                        }
	                                        if (validationPropertiesArray[i] === "required") {
	                                            var validationRequire = validationObject[key][inner].require;
	                                            var result = validate_Required(elementValue, validationRequire);
	                                            if (result != true) {
	                                                errorMessages
	                                                    .push("Required");
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = ValidationPropertiesEnum["REQUIRED"].name;
	                                                validationResults.fail = true;
	                                            }
	                                            else {
	                                                errorMessages
	                                                    .push("Required");
	                                                validationResults.error = errorMessages[errorMessages.length - 1];
	                                                validationResults.errorkey = ValidationPropertiesEnum["REQUIRED"].name;
	                                                validationResults.fail = false;
	                                            }
	                                            return validationResults;
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    } //<---end validate.			
	                }
	                /**
	                * Function to map if we need a validation on this element.
	                */
	                function checkHasValidationType(validationProp, validationType) {
	                    if (validationProp[validationType] != undefined) {
	                        return true;
	                    }
	                    else {
	                        return false;
	                    }
	                }
	                /**
	                * Iterates over the properties object finding which types of validation are needed.
	                */
	                function map(func, array, obj) {
	                    var result = [];
	                    forEach(array, function (element) {
	                        result.push(func(obj, element));
	                    });
	                    return result;
	                }
	                /**
	                * Array iteration helper.
	                */
	                function forEach(array, action) {
	                    for (var i = 0; i < array.length; i++)
	                        action(array[i]);
	                }
	                /**
	                * Helper function to read all the names in our enums into an array that the higher order functions can use.
	                */
	                function getNamesFromObject(obj) {
	                    var result = [];
	                    for (var i in obj) {
	                        var name = obj[i].name || "stub";
	                        result.push(name);
	                    }
	                    return result;
	                }
	                /**
	                * Tests the value for a RegExp match given by the pattern string.
	                * Validates true if pattern match, false otherwise.
	                */
	                function validate_RegExp(value, pattern) {
	                    var regex = new RegExp(pattern);
	                    if (regex.test(value)) {
	                        return true;
	                    }
	                    return false;
	                }
	                /**
	                * Validates true if userValue >= minValue (inclusive)
	                */
	                function validate_MinValue(userValue, minValue) {
	                    return (userValue >= minValue);
	                }
	                /**
	                * Validates true if userValue <= maxValue (inclusive)
	                */
	                function validate_MaxValue(userValue, maxValue) {
	                    return (userValue <= maxValue) ? true : false;
	                }
	                /**
	                * Validates true if length of the userValue >= minLength (inclusive)
	                */
	                function validate_MinLength(userValue, minLength) {
	                    return (userValue.length >= minLength) ? true : false;
	                }
	                /**
	                * Validates true if length of the userValue <= maxLength (inclusive)
	                */
	                function validate_MaxLength(userValue, maxLength) {
	                    return (userValue.length <= maxLength) ? true : false;
	                }
	                /**
	                * Validates true if the userValue == eqValue
	                */
	                function validate_Eq(userValue, eqValue) {
	                    return (userValue == eqValue) ? true : false;
	                }
	                /**
	                * Validates true if the userValue != neqValue
	                */
	                function validate_Neq(userValue, neqValue) {
	                    return (userValue != neqValue) ? true : false;
	                }
	                /**
	                * Validates true if the userValue < decisionValue (exclusive)
	                */
	                function validate_Lte(userValue, decisionValue) {
	                    return (userValue < decisionValue) ? true : false;
	                }
	                /**
	                * Validates true if the userValue > decisionValue (exclusive)
	                */
	                function validate_Gte(userValue, decisionValue) {
	                    return (userValue > decisionValue) ? true : false;
	                }
	                /**
	                * Validates true if the userValue === property
	                */
	                function validate_EqProperty(userValue, property) {
	                    return (userValue === property) ? true : false;
	                }
	                /**
	                * Validates true if the given value is !NaN (Negate, Not a Number).
	                */
	                function validate_IsNumeric(value) {
	                    return !isNaN(value) ? true : false;
	                }
	                /**
	                * Validates true if the given userValue is empty and the field is required.
	                */
	                function validate_Required(property, userValue) {
	                    return (userValue == "" && property == true) ? true : false;
	                }
	                /**
	                * Handles the 'eager' validation on every key press.
	                */
	                ngModel.$parsers.unshift(function (value) {
	                    var name = elem.context.name; //Get the element name for the validate function.
	                    var currentValue = elem.val(); //Get the current element value to check validations against.
	                    var val = validate(name, myCurrentContext, currentValue) || {};
	                    //Check if field is required.				
	                    $log.debug(scope);
	                    $log.debug(val);
	                    ngModel.$setValidity(val.errorkey, !val.fail);
	                    return true;
	                }); //<---end $parsers
	                /**
	                * This handles 'lazy' validation on blur.
	                */
	                elem.bind('blur', function (e) {
	                });
	            }
	        };
	    }
	    SWValidate.Factory = function () {
	        var directive = function ($log, $slatwall) { return new SWValidate($log, $slatwall); };
	        directive.$inject = ['$log', '$slatwall'];
	        return directive;
	    };
	    return SWValidate;
	})();
	exports.SWValidate = SWValidate;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * Returns true if the user value is greater than the min length.
	 */
	/**
	 * Returns true if the user value is greater than the minimum value.
	 */
	var SWValidationMinLength = (function () {
	    function SWValidationMinLength($log) {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationminlength =
	                    function (modelValue, viewValue) {
	                        var constraintValue = attributes.swvalidationminlength;
	                        var userValue = viewValue || 0;
	                        if (parseInt(viewValue.length) >= parseInt(constraintValue)) {
	                            return true;
	                        }
	                        $log.debug('invalid min length');
	                        return false;
	                    };
	            }
	        };
	    }
	    SWValidationMinLength.Factory = function () {
	        var directive = function ($log) { return new SWValidationMinLength($log); };
	        directive.$inject = ['$log'];
	        return directive;
	    };
	    return SWValidationMinLength;
	})();
	exports.SWValidationMinLength = SWValidationMinLength;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * True if the data type matches the given data type.
	 */
	/**
	 * Validates true if the model value is a numeric value.
	 */
	var SWValidationDataType = (function () {
	    function SWValidationDataType() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                var MY_EMAIL_REGEXP = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+?\.[a-zA-Z]{2,3}$/;
	                ngModel.$validators.swvalidationdatatype =
	                    function (modelValue) {
	                        if (angular.isString(modelValue) && attributes.swvalidationdatatype === "string") {
	                            return true;
	                        }
	                        if (angular.isNumber(parseInt(modelValue)) && attributes.swvalidationdatatype === "numeric") {
	                            return true;
	                        }
	                        if (angular.isArray(modelValue) && attributes.swvalidationdatatype === "array") {
	                            return true;
	                        }
	                        if (angular.isDate(modelValue) && attributes.swvalidationdatatype === "date") {
	                            return true;
	                        }
	                        if (angular.isObject(modelValue) && attributes.swvalidationdatatype === "object") {
	                            return true;
	                        }
	                        if (attributes.swvalidationdatatype === 'email') {
	                            return MY_EMAIL_REGEXP.test(modelValue);
	                        }
	                        if (angular.isUndefined(modelValue && attributes.swvalidationdatatype === "undefined")) {
	                            return true;
	                        }
	                        return false;
	                    };
	            }
	        };
	    }
	    SWValidationDataType.Factory = function () {
	        var directive = function () {
	            return new SWValidationDataType();
	        };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationDataType;
	})();
	exports.SWValidationDataType = SWValidationDataType;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * SwValidationEQ: Validates true if the user value == the constraint value.
	 * @usage <input type='text' swvalidationgte='5' /> will validate false if the user enters
	 * value other than 5.
	 */
	var SWValidationEq = (function () {
	    function SWValidationEq() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationeq =
	                    function (modelValue, viewValue) {
	                        var constraintValue = attributes.swvalidationeq;
	                        if (modelValue === constraintValue) {
	                            return true;
	                        }
	                        else {
	                            return false;
	                        }
	                    }; //<--end function
	            } //<--end link
	        };
	    }
	    SWValidationEq.Factory = function () {
	        var directive = function () {
	            return new SWValidationEq();
	        };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationEq;
	})();
	exports.SWValidationEq = SWValidationEq;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * SwValidationGTE: Validates true if the user value >= to the constraint value.
	 * @usage <input type='text' swvalidationGte='5' /> will validate false if the user enters
	 * value less than OR equal to 5.
	 */
	var SWValidationGte = (function () {
	    function SWValidationGte() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationGte =
	                    function (modelValue, viewValue) {
	                        var constraintValue = attributes.swvalidationGte || 0;
	                        if (parseInt(modelValue) >= parseInt(constraintValue)) {
	                            return true; //Passes the validation
	                        }
	                        return false;
	                    }; //<--end function
	            } //<--end link
	        };
	    }
	    SWValidationGte.Factory = function () {
	        var directive = function () { return new SWValidationGte(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationGte;
	})();
	exports.SWValidationGte = SWValidationGte;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * SwValidationLTE: Validates true if the user value <= to the constraint value.
	 * @usage <input type='number' swvalidationlte='5000' /> will validate false if the user enters
	 * value greater than OR equal to 5,000.
	 */
	var SWValidationLte = (function () {
	    function SWValidationLte() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationlte =
	                    function (modelValue, viewValue) {
	                        var constraintValue = attributes.swvalidationlte;
	                        var userValue = viewValue || 0;
	                        if (parseInt(viewValue) <= parseInt(constraintValue)) {
	                            return true;
	                        }
	                        return false;
	                    };
	            }
	        };
	    }
	    SWValidationLte.Factory = function () {
	        var directive = function () { return new SWValidationLte(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationLte;
	})();
	exports.SWValidationLte = SWValidationLte;


/***/ },
/* 59 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * Returns true if the user value is greater than the max length.
	 */
	var SWValidationMaxLength = (function () {
	    function SWValidationMaxLength() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationmaxlength =
	                    function (modelValue, viewValue) {
	                        var constraintValue = attributes.swvalidationmaxlength;
	                        var userValue = viewValue || 0;
	                        if (parseInt(viewValue.length) >= parseInt(constraintValue)) {
	                            return true;
	                        }
	                        return false;
	                    };
	            }
	        };
	    }
	    SWValidationMaxLength.Factory = function () {
	        var directive = function () { return new SWValidationMaxLength(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationMaxLength;
	})();
	exports.SWValidationMaxLength = SWValidationMaxLength;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * Returns true if the user value is greater than the min value.
	 */
	var SWValidationMaxValue = (function () {
	    function SWValidationMaxValue() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationmaxvalue =
	                    function (modelValue, viewValue) {
	                        var constraintValue = attributes.swvalidationmaxvalue;
	                        var userValue = viewValue || 0;
	                        if (parseInt(viewValue) <= parseInt(constraintValue)) {
	                            return true;
	                        }
	                        return false;
	                    };
	            }
	        };
	    }
	    SWValidationMaxValue.Factory = function () {
	        var directive = function () { return new SWValidationMaxValue(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationMaxValue;
	})();
	exports.SWValidationMaxValue = SWValidationMaxValue;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * Returns true if the user value is greater than the minimum value.
	 */
	var SWValidationMinValue = (function () {
	    function SWValidationMinValue() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationminvalue =
	                    function (modelValue, viewValue) {
	                        var constraintValue = attributes.swvalidationminvalue;
	                        var userValue = viewValue || 0;
	                        if (parseInt(modelValue) >= parseInt(constraintValue)) {
	                            return true;
	                        }
	                        return false;
	                    };
	            }
	        };
	    }
	    SWValidationMinValue.Factory = function () {
	        var directive = function () { return new SWValidationMinValue(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationMinValue;
	})();
	exports.SWValidationMinValue = SWValidationMinValue;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 *  Validates true if the user value != the property value.
	 */
	var SWValidationNeq = (function () {
	    function SWValidationNeq() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationneq =
	                    function (modelValue) {
	                        if (modelValue != attributes.swvalidationneq) {
	                            return true;
	                        }
	                        return false;
	                    };
	            }
	        };
	    }
	    SWValidationNeq.Factory = function () {
	        var directive = function () { return new SWValidationNeq(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationNeq;
	})();
	exports.SWValidationNeq = SWValidationNeq;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * Validates true if the model value (user value) is a numeric value.
	 * @event This event fires on every change to an input.
	 */
	var SWValidationNumeric = (function () {
	    function SWValidationNumeric() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationnumeric =
	                    function (modelValue, viewValue) {
	                        //Returns true if this is not a number.
	                        if (!isNaN(viewValue)) {
	                            return true;
	                        }
	                        else {
	                            return false;
	                        }
	                    };
	            }
	        };
	    }
	    SWValidationNumeric.Factory = function () {
	        var directive = function () { return new SWValidationNumeric(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationNumeric;
	})();
	exports.SWValidationNumeric = SWValidationNumeric;


/***/ },
/* 64 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * Validates true if the model value matches a regex string.
	 */
	var SWValidationRegex = (function () {
	    function SWValidationRegex() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationregex =
	                    function (modelValue) {
	                        //Returns true if this user value (model value) does match the pattern
	                        var pattern = attributes.swvalidationregex;
	                        var regex = new RegExp(pattern);
	                        if (regex.test(modelValue)) {
	                            return true;
	                        }
	                        else {
	                            return false;
	                        }
	                    };
	            }
	        };
	    }
	    SWValidationRegex.Factory = function () {
	        var directive = function () { return new SWValidationRegex(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationRegex;
	})();
	exports.SWValidationRegex = SWValidationRegex;


/***/ },
/* 65 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * Returns true if the uservalue is empty and false otherwise
	 */
	var SWValidationRequired = (function () {
	    function SWValidationRequired() {
	        return {
	            restrict: "A",
	            require: "^ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$validators.swvalidationrequired =
	                    function (modelValue, viewValue) {
	                        var value = modelValue || viewValue;
	                        if (value) {
	                            return true;
	                        }
	                        return false;
	                    };
	            }
	        };
	    }
	    SWValidationRequired.Factory = function () {
	        var directive = function () { return new SWValidationRequired(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return SWValidationRequired;
	})();
	exports.SWValidationRequired = SWValidationRequired;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * Validates true if the given object is 'unique' and false otherwise.
	 */
	var SWValidationUnique = (function () {
	    function SWValidationUnique($http, $q, $slatwall, $log) {
	        return {
	            restrict: "A",
	            require: "ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$asyncValidators.swvalidationunique = function (modelValue, viewValue) {
	                    $log.debug('asyc');
	                    var deferred = $q.defer(), currentValue = modelValue || viewValue, key = scope.propertyDisplay.object.metaData.className, property = scope.propertyDisplay.property;
	                    //First time the asyncValidators function is loaded the
	                    //key won't be set  so ensure that we have
	                    //key and propertyName before checking with the server
	                    if (key && property) {
	                        $slatwall.checkUniqueValue(key, property, currentValue)
	                            .then(function (unique) {
	                            $log.debug('uniquetest');
	                            $log.debug(unique);
	                            if (unique) {
	                                deferred.resolve(); //It's unique
	                            }
	                            else {
	                                deferred.reject(); //Add unique to $errors
	                            }
	                        });
	                    }
	                    else {
	                        deferred.resolve(); //Ensure promise is resolved if we hit this
	                    }
	                    return deferred.promise;
	                };
	            }
	        };
	    }
	    SWValidationUnique.Factory = function () {
	        var directive = function ($http, $q, $slatwall, $log) { return new SWValidationUnique($http, $q, $slatwall, $log); };
	        directive.$inject = ['$http', '$q', '$slatwall', '$log'];
	        return directive;
	    };
	    return SWValidationUnique;
	})();
	exports.SWValidationUnique = SWValidationUnique;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	/**
	 * Validates true if the given object is 'unique' and false otherwise.
	 */
	var SWValidationUniqueOrNull = (function () {
	    function SWValidationUniqueOrNull($http, $q, $slatwall, $log) {
	        return {
	            restrict: "A",
	            require: "ngModel",
	            link: function (scope, element, attributes, ngModel) {
	                ngModel.$asyncValidators.swvalidationuniqueornull = function (modelValue, viewValue) {
	                    $log.debug('async');
	                    var deferred = $q.defer(), currentValue = modelValue || viewValue, key = scope.propertyDisplay.object.metaData.className, property = scope.propertyDisplay.property;
	                    //First time the asyncValidators function is loaded the
	                    //key won't be set  so ensure that we have
	                    //key and propertyName before checking with the server
	                    if (key && property) {
	                        $slatwall.checkUniqueOrNullValue(key, property, currentValue)
	                            .then(function (unique) {
	                            $log.debug('uniquetest');
	                            $log.debug(unique);
	                            if (unique) {
	                                deferred.resolve(); //It's unique
	                            }
	                            else {
	                                deferred.reject(); //Add unique to $errors
	                            }
	                        });
	                    }
	                    else {
	                        deferred.resolve(); //Ensure promise is resolved if we hit this
	                    }
	                    return deferred.promise;
	                };
	            }
	        };
	    }
	    SWValidationUniqueOrNull.Factory = function () {
	        var directive = function ($http, $q, $slatwall, $log) { return new SWValidationUniqueOrNull($http, $q, $slatwall, $log); };
	        directive.$inject = ['$http', '$q', '$slatwall', '$log'];
	        return directive;
	    };
	    return SWValidationUniqueOrNull;
	})();
	exports.SWValidationUniqueOrNull = SWValidationUniqueOrNull;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var Column = (function () {
	    function Column(propertyIdentifier, title, isVisible, isDeletable, isSearchable, isExportable, persistent, ormtype, attributeID, attributeSetObject) {
	        if (isVisible === void 0) { isVisible = true; }
	        if (isDeletable === void 0) { isDeletable = true; }
	        if (isSearchable === void 0) { isSearchable = true; }
	        if (isExportable === void 0) { isExportable = true; }
	        this.propertyIdentifier = propertyIdentifier;
	        this.title = title;
	        this.isVisible = isVisible;
	        this.isDeletable = isDeletable;
	        this.isSearchable = isSearchable;
	        this.isExportable = isExportable;
	        this.persistent = persistent;
	        this.ormtype = ormtype;
	        this.attributeID = attributeID;
	        this.attributeSetObject = attributeSetObject;
	    }
	    return Column;
	})();
	exports.Column = Column;
	var Filter = (function () {
	    function Filter(propertyIdentifier, value, comparisonOperator, logicalOperator, displayPropertyIdentifier, displayValue) {
	        this.propertyIdentifier = propertyIdentifier;
	        this.value = value;
	        this.comparisonOperator = comparisonOperator;
	        this.logicalOperator = logicalOperator;
	        this.displayPropertyIdentifier = displayPropertyIdentifier;
	        this.displayValue = displayValue;
	    }
	    return Filter;
	})();
	exports.Filter = Filter;
	var CollectionFilter = (function () {
	    function CollectionFilter(propertyIdentifier, displayPropertyIdentifier, displayValue, collectionID, criteria, fieldtype, readOnly) {
	        if (readOnly === void 0) { readOnly = false; }
	        this.propertyIdentifier = propertyIdentifier;
	        this.displayPropertyIdentifier = displayPropertyIdentifier;
	        this.displayValue = displayValue;
	        this.collectionID = collectionID;
	        this.criteria = criteria;
	        this.fieldtype = fieldtype;
	        this.readOnly = readOnly;
	    }
	    return CollectionFilter;
	})();
	exports.CollectionFilter = CollectionFilter;
	var Join = (function () {
	    function Join(associationName, alias) {
	        this.associationName = associationName;
	        this.alias = alias;
	    }
	    return Join;
	})();
	exports.Join = Join;
	var OrderBy = (function () {
	    function OrderBy(propertyIdentifier, direction) {
	        this.propertyIdentifier = propertyIdentifier;
	        this.direction = direction;
	    }
	    return OrderBy;
	})();
	exports.OrderBy = OrderBy;
	var CollectionConfig = (function () {
	    function CollectionConfig($slatwall, utilityService, baseEntityName, baseEntityAlias, columns, filterGroups, joins, orderBy, groupBys, id, currentPage, pageShow, keywords, allRecords) {
	        var _this = this;
	        if (filterGroups === void 0) { filterGroups = [{ filterGroup: [] }]; }
	        if (currentPage === void 0) { currentPage = 1; }
	        if (pageShow === void 0) { pageShow = 10; }
	        if (keywords === void 0) { keywords = ''; }
	        if (allRecords === void 0) { allRecords = false; }
	        this.$slatwall = $slatwall;
	        this.utilityService = utilityService;
	        this.baseEntityName = baseEntityName;
	        this.baseEntityAlias = baseEntityAlias;
	        this.columns = columns;
	        this.filterGroups = filterGroups;
	        this.joins = joins;
	        this.orderBy = orderBy;
	        this.groupBys = groupBys;
	        this.id = id;
	        this.currentPage = currentPage;
	        this.pageShow = pageShow;
	        this.keywords = keywords;
	        this.allRecords = allRecords;
	        this.clearFilterGroups = function () {
	            _this.filterGroups = [{ filterGroup: [] }];
	        };
	        this.newCollectionConfig = function (baseEntityName, baseEntityAlias) {
	            return new CollectionConfig(_this.$slatwall, _this.utilityService, baseEntityName, baseEntityAlias);
	        };
	        this.loadJson = function (jsonCollection) {
	            //if json then make a javascript object else use the javascript object
	            if (angular.isString(jsonCollection)) {
	                jsonCollection = angular.fromJson(jsonCollection);
	            }
	            _this.baseEntityAlias = jsonCollection.baseEntityAlias;
	            _this.baseEntityName = jsonCollection.baseEntityName;
	            if (angular.isDefined(jsonCollection.filterGroups)) {
	                _this.filterGroups = jsonCollection.filterGroups;
	            }
	            _this.columns = jsonCollection.columns;
	            _this.joins = jsonCollection.joins;
	            _this.keywords = jsonCollection.keywords;
	            _this.orderBy = jsonCollection.orderBy;
	            _this.groupBys = jsonCollection.groupBys;
	            _this.pageShow = jsonCollection.pageShow;
	            _this.allRecords = jsonCollection.allRecords;
	        };
	        this.loadFilterGroups = function (filterGroupsConfig) {
	            if (filterGroupsConfig === void 0) { filterGroupsConfig = [{ filterGroup: [] }]; }
	            _this.filterGroups = filterGroupsConfig;
	        };
	        this.loadColumns = function (columns) {
	            _this.columns = columns;
	        };
	        this.getCollectionConfig = function () {
	            return {
	                baseEntityAlias: _this.baseEntityAlias,
	                baseEntityName: _this.baseEntityName,
	                columns: _this.columns,
	                filterGroups: _this.filterGroups,
	                joins: _this.joins,
	                groupBys: _this.groupBys,
	                currentPage: _this.currentPage,
	                pageShow: _this.pageShow,
	                keywords: _this.keywords,
	                defaultColumns: (!_this.columns || !_this.columns.length),
	                allRecords: _this.allRecords
	            };
	        };
	        this.getEntityName = function () {
	            return _this.baseEntityName.charAt(0).toUpperCase() + _this.baseEntityName.slice(1);
	        };
	        this.getOptions = function () {
	            var options = {
	                columnsConfig: angular.toJson(_this.columns),
	                filterGroupsConfig: angular.toJson(_this.filterGroups),
	                joinsConfig: angular.toJson(_this.joins),
	                orderByConfig: angular.toJson(_this.orderBy),
	                groupBysConfig: angular.toJson(_this.groupBys),
	                currentPage: _this.currentPage,
	                pageShow: _this.pageShow,
	                keywords: _this.keywords,
	                defaultColumns: (!_this.columns || !_this.columns.length),
	                allRecords: _this.allRecords
	            };
	            if (angular.isDefined(_this.id)) {
	                options['id'] = _this.id;
	            }
	            return options;
	        };
	        this.debug = function () {
	            return _this;
	        };
	        this.formatPropertyIdentifier = function (propertyIdentifier, addJoin) {
	            if (addJoin === void 0) { addJoin = false; }
	            var _propertyIdentifier = _this.baseEntityAlias;
	            if (addJoin === true) {
	                _propertyIdentifier += _this.processJoin(propertyIdentifier);
	            }
	            else {
	                _propertyIdentifier += '.' + propertyIdentifier;
	            }
	            return _propertyIdentifier;
	        };
	        this.processJoin = function (propertyIdentifier) {
	            var _propertyIdentifier = '', propertyIdentifierParts = propertyIdentifier.split('.'), current_collection = _this.collection;
	            for (var i = 0; i < propertyIdentifierParts.length; i++) {
	                if ('cfc' in current_collection.metaData[propertyIdentifierParts[i]]) {
	                    current_collection = _this.$slatwall.getEntityExample(current_collection.metaData[propertyIdentifierParts[i]].cfc);
	                    _propertyIdentifier += '_' + propertyIdentifierParts[i];
	                    _this.addJoin(new Join(_propertyIdentifier.replace(/_/g, '.').substring(1), _this.baseEntityAlias + _propertyIdentifier));
	                }
	                else {
	                    _propertyIdentifier += '.' + propertyIdentifierParts[i];
	                }
	            }
	            return _propertyIdentifier;
	        };
	        this.addJoin = function (join) {
	            if (!_this.joins) {
	                _this.joins = [];
	            }
	            var joinFound = false;
	            angular.forEach(_this.joins, function (configJoin) {
	                if (configJoin.alias === join.alias) {
	                    joinFound = true;
	                }
	            });
	            if (!joinFound) {
	                _this.joins.push(join);
	            }
	        };
	        this.addAlias = function (propertyIdentifier) {
	            var parts = propertyIdentifier.split('.');
	            if (parts.length > 1 && parts[0] !== _this.baseEntityAlias) {
	                return _this.baseEntityAlias + '.' + propertyIdentifier;
	            }
	            return propertyIdentifier;
	        };
	        this.addColumn = function (column, title, options) {
	            if (title === void 0) { title = ''; }
	            if (options === void 0) { options = {}; }
	            if (!_this.columns || _this.utilityService.ArrayFindByPropertyValue(_this.columns, 'propertyIdentifier', column) === -1) {
	                var isVisible = true, isDeletable = true, isSearchable = true, isExportable = true, persistent, ormtype = 'string', lastProperty = column.split('.').pop();
	                var lastEntity = _this.$slatwall.getEntityExample(_this.$slatwall.getLastEntityNameInPropertyIdentifier(_this.baseEntityName, column));
	                if (angular.isUndefined(_this.columns)) {
	                    _this.columns = [];
	                }
	                if (!angular.isUndefined(options['isVisible'])) {
	                    isVisible = options['isVisible'];
	                }
	                if (!angular.isUndefined(options['isDeletable'])) {
	                    isDeletable = options['isDeletable'];
	                }
	                if (!angular.isUndefined(options['isSearchable'])) {
	                    isSearchable = options['isSearchable'];
	                }
	                if (!angular.isUndefined(options['isExportable'])) {
	                    isExportable = options['isExportable'];
	                }
	                if (angular.isUndefined(options['isExportable']) && !isVisible) {
	                    isExportable = false;
	                }
	                if (!angular.isUndefined(options['ormtype'])) {
	                    ormtype = options['ormtype'];
	                }
	                else if (lastEntity.metaData[lastProperty] && lastEntity.metaData[lastProperty].ormtype) {
	                    ormtype = lastEntity.metaData[lastProperty].ormtype;
	                }
	                if (angular.isDefined(lastEntity[lastProperty])) {
	                    persistent = lastEntity[lastProperty].persistent;
	                }
	                var columnObject = new Column(column, title, isVisible, isDeletable, isSearchable, isExportable, persistent, ormtype, options['attributeID'], options['attributeSetObject']);
	                if (options['aggregate']) {
	                    columnObject['aggregate'] = options['aggregate'],
	                        columnObject['aggregateAlias'] = title;
	                }
	                //add any non-conventional options
	                for (var key in options) {
	                    if (!columnObject[key]) {
	                        columnObject[key] = options[key];
	                    }
	                }
	                _this.columns.push(columnObject);
	            }
	        };
	        this.setDisplayProperties = function (propertyIdentifier, title, options) {
	            if (title === void 0) { title = ''; }
	            if (options === void 0) { options = {}; }
	            _this.addDisplayProperty = (propertyIdentifier, title, options);
	        };
	        this.addDisplayAggregate = function (propertyIdentifier, aggregateFunction, aggregateAlias, options) {
	            var column = {
	                propertyIdentifier: _this.formatPropertyIdentifier(propertyIdentifier, true),
	                title: _this.$slatwall.getRBKey("entity." + _this.baseEntityName + "." + propertyIdentifier),
	                aggregate: {
	                    aggregateFunction: aggregateFunction,
	                    aggregateAlias: aggregateAlias
	                }
	            };
	            angular.extend(column, options);
	            //Add columns
	            _this.addColumn(column.propertyIdentifier, undefined, column);
	        };
	        this.addGroupBy = function (groupByAlias) {
	            if (!_this.groupBys) {
	                _this.groupBys = '';
	            }
	            _this.groupBys = _this.utilityService.listAppend(_this.groupBys, groupByAlias);
	        };
	        this.addDisplayProperty = function (propertyIdentifier, title, options) {
	            if (title === void 0) { title = ''; }
	            if (options === void 0) { options = {}; }
	            var _DividedColumns = propertyIdentifier.trim().split(',');
	            var _DividedTitles = title.trim().split(',');
	            _DividedColumns.forEach(function (column, index) {
	                column = column.trim();
	                if (angular.isDefined(_DividedTitles[index]) && _DividedTitles[index].trim() != '') {
	                    title = _DividedTitles[index].trim();
	                }
	                else {
	                    title = _this.$slatwall.getRBKey("entity." + _this.baseEntityName + "." + column);
	                }
	                _this.addColumn(_this.formatPropertyIdentifier(column), title, options);
	            });
	        };
	        this.addFilter = function (propertyIdentifier, value, comparisonOperator, logicalOperator) {
	            if (comparisonOperator === void 0) { comparisonOperator = '='; }
	            //if filterGroups does not exists then set a default
	            if (!_this.filterGroups) {
	                _this.filterGroups = [{ filterGroup: [] }];
	            }
	            //if filterGroups is longer than 0 then we at least need to default the logical Operator to AND
	            if (_this.filterGroups[0].filterGroup.length && !logicalOperator)
	                logicalOperator = 'AND';
	            //create filter group
	            var filter = new Filter(_this.formatPropertyIdentifier(propertyIdentifier, true), value, comparisonOperator, logicalOperator, propertyIdentifier.split('.').pop(), value);
	            _this.filterGroups[0].filterGroup.push(filter);
	        };
	        this.addCollectionFilter = function (propertyIdentifier, displayPropertyIdentifier, displayValue, collectionID, criteria, fieldtype, readOnly) {
	            if (criteria === void 0) { criteria = 'One'; }
	            if (readOnly === void 0) { readOnly = false; }
	            _this.filterGroups[0].filterGroup.push(new CollectionFilter(_this.formatPropertyIdentifier(propertyIdentifier), displayPropertyIdentifier, displayValue, collectionID, criteria, fieldtype, readOnly));
	        };
	        //orderByList in this form: "property|direction" concrete: "skuName|ASC"
	        this.setOrderBy = function (orderByList) {
	            var orderBys = orderByList.split(',');
	            angular.forEach(orderBys, function (orderBy) {
	                _this.addOrderBy(orderBy);
	            });
	        };
	        this.addOrderBy = function (orderByString) {
	            if (!_this.orderBy) {
	                _this.orderBy = [];
	            }
	            var propertyIdentifier = _this.utilityService.listFirst(orderByString, '|');
	            var direction = _this.utilityService.listLast(orderByString, '|');
	            var orderBy = {
	                propertyIdentifier: _this.formatPropertyIdentifier(propertyIdentifier),
	                direction: direction
	            };
	            _this.orderBy.push(orderBy);
	        };
	        this.setCurrentPage = function (pageNumber) {
	            _this.currentPage = pageNumber;
	        };
	        this.setPageShow = function (NumberOfPages) {
	            _this.pageShow = NumberOfPages;
	        };
	        this.getPageShow = function () {
	            return _this.pageShow;
	        };
	        this.setAllRecords = function (allFlag) {
	            if (allFlag === void 0) { allFlag = false; }
	            _this.allRecords = allFlag;
	        };
	        this.setKeywords = function (keyword) {
	            _this.keywords = keyword;
	        };
	        this.setId = function (id) {
	            _this.id = id;
	        };
	        this.hasFilters = function () {
	            return (_this.filterGroups.length && _this.filterGroups[0].filterGroup.length);
	        };
	        this.clearFilters = function () {
	            _this.filterGroups = [{ filterGroup: [] }];
	        };
	        this.getEntity = function (id) {
	            if (angular.isDefined(id)) {
	                _this.setId(id);
	            }
	            return _this.$slatwall.getEntity(_this.baseEntityName, _this.getOptions());
	        };
	        if (angular.isDefined(this.baseEntityName)) {
	            this.collection = this.$slatwall.getEntityExample(this.baseEntityName);
	            if (angular.isUndefined(this.baseEntityAlias)) {
	                this.baseEntityAlias = '_' + this.baseEntityName.toLowerCase();
	            }
	        }
	    }
	    CollectionConfig.$inject = ['$slatwall', 'utilityService'];
	    return CollectionConfig;
	})();
	exports.CollectionConfig = CollectionConfig;


/***/ },
/* 69 */
/***/ function(module, exports) {

	var CollectionService = (function () {
	    function CollectionService($filter, $log) {
	        var _this = this;
	        this.$filter = $filter;
	        this.$log = $log;
	        this.get = function () {
	            return _this._pageDialogs || [];
	        };
	        //test
	        this.setFilterCount = function (count) {
	            _this.$log.debug('incrementFilterCount');
	            _this._filterCount = count;
	        };
	        this.getFilterCount = function () {
	            return _this._filterCount;
	        };
	        this.getColumns = function () {
	            return _this._collection.collectionConfig.columns;
	        };
	        this.getFilterPropertiesList = function () {
	            return _this._filterPropertiesList;
	        };
	        this.getFilterPropertiesListByBaseEntityAlias = function (baseEntityAlias) {
	            return _this._filterPropertiesList[baseEntityAlias];
	        };
	        this.setFilterPropertiesList = function (value, key) {
	            if (angular.isUndefined(_this._filterPropertiesList[key])) {
	                _this._filterPropertiesList[key] = value;
	            }
	        };
	        this.stringifyJSON = function (jsonObject) {
	            var jsonString = angular.toJson(jsonObject);
	            return jsonString;
	        };
	        this.removeFilterItem = function (filterItem, filterGroup) {
	            filterGroup.pop(filterGroup.indexOf(filterItem));
	        };
	        this.selectFilterItem = function (filterItem) {
	            if (filterItem.$$isClosed) {
	                for (var i in filterItem.$$siblingItems) {
	                    filterItem.$$siblingItems[i].$$isClosed = true;
	                    filterItem.$$siblingItems[i].$$disabled = true;
	                }
	                filterItem.$$isClosed = false;
	                filterItem.$$disabled = false;
	                filterItem.setItemInUse(true);
	            }
	            else {
	                for (var i in filterItem.$$siblingItems) {
	                    filterItem.$$siblingItems[i].$$disabled = false;
	                }
	                filterItem.$$isClosed = true;
	                filterItem.setItemInUse(false);
	            }
	        };
	        this.selectFilterGroupItem = function (filterGroupItem) {
	            if (filterGroupItem.$$isClosed) {
	                for (var i in filterGroupItem.$$siblingItems) {
	                    filterGroupItem.$$siblingItems[i].$$disabled = true;
	                }
	                filterGroupItem.$$isClosed = false;
	                filterGroupItem.$$disabled = false;
	            }
	            else {
	                for (var i in filterGroupItem.$$siblingItems) {
	                    filterGroupItem.$$siblingItems[i].$$disabled = false;
	                }
	                filterGroupItem.$$isClosed = true;
	            }
	            filterGroupItem.setItemInUse(!filterGroupItem.$$isClosed);
	        };
	        this.newFilterItem = function (filterItemGroup, setItemInUse, prepareForFilterGroup) {
	            if (angular.isUndefined(prepareForFilterGroup)) {
	                prepareForFilterGroup = false;
	            }
	            var filterItem = {
	                displayPropertyIdentifier: "",
	                propertyIdentifier: "",
	                comparisonOperator: "",
	                value: "",
	                $$disabled: false,
	                $$isClosed: true,
	                $$isNew: true,
	                $$siblingItems: filterItemGroup,
	                setItemInUse: setItemInUse
	            };
	            if (filterItemGroup.length !== 0) {
	                filterItem.logicalOperator = "AND";
	            }
	            if (prepareForFilterGroup === true) {
	                filterItem.$$prepareForFilterGroup = true;
	            }
	            filterItemGroup.push(filterItem);
	            _this.selectFilterItem(filterItem);
	        };
	        this.newFilterGroupItem = function (filterItemGroup, setItemInUse) {
	            var filterGroupItem = {
	                filterGroup: [],
	                $$disabled: "false",
	                $$isClosed: "true",
	                $$siblingItems: filterItemGroup,
	                $$isNew: "true",
	                setItemInUse: setItemInUse
	            };
	            if (filterItemGroup.length !== 0) {
	                filterGroupItem.logicalOperator = "AND";
	            }
	            filterItemGroup.push(filterGroupItem);
	            _this.selectFilterGroupItem(filterGroupItem);
	            _this.newFilterItem(filterGroupItem.filterGroup, setItemInUse, undefined);
	        };
	        this.transplantFilterItemIntoFilterGroup = function (filterGroup, filterItem) {
	            var filterGroupItem = {
	                filterGroup: [],
	                $$disabled: "false",
	                $$isClosed: "true",
	                $$isNew: "true"
	            };
	            if (angular.isDefined(filterItem.logicalOperator)) {
	                filterGroupItem.logicalOperator = filterItem.logicalOperator;
	                delete filterItem.logicalOperator;
	            }
	            filterGroupItem.setItemInUse = filterItem.setItemInUse;
	            filterGroupItem.$$siblingItems = filterItem.$$siblingItems;
	            filterItem.$$siblingItems = [];
	            filterGroup.pop(filterGroup.indexOf(filterItem));
	            filterItem.$$prepareForFilterGroup = false;
	            filterGroupItem.filterGroup.push(filterItem);
	            filterGroup.push(filterGroupItem);
	        };
	        this.formatFilterPropertiesList = function (filterPropertiesList, propertyIdentifier) {
	            _this.$log.debug('format Filter Properties List arguments 2');
	            _this.$log.debug(filterPropertiesList);
	            _this.$log.debug(propertyIdentifier);
	            var simpleGroup = {
	                $$group: 'simple',
	                displayPropertyIdentifier: '-----------------'
	            };
	            filterPropertiesList.data.push(simpleGroup);
	            var drillDownGroup = {
	                $$group: 'drilldown',
	                displayPropertyIdentifier: '-----------------'
	            };
	            filterPropertiesList.data.push(drillDownGroup);
	            var compareCollections = {
	                $$group: 'compareCollections',
	                displayPropertyIdentifier: '-----------------'
	            };
	            filterPropertiesList.data.push(compareCollections);
	            var attributeCollections = {
	                $$group: 'attribute',
	                displayPropertyIdentifier: '-----------------'
	            };
	            filterPropertiesList.data.push(attributeCollections);
	            for (var i in filterPropertiesList.data) {
	                if (angular.isDefined(filterPropertiesList.data[i].ormtype)) {
	                    if (angular.isDefined(filterPropertiesList.data[i].attributeID)) {
	                        filterPropertiesList.data[i].$$group = 'attribute';
	                    }
	                    else {
	                        filterPropertiesList.data[i].$$group = 'simple';
	                    }
	                }
	                if (angular.isDefined(filterPropertiesList.data[i].fieldtype)) {
	                    if (filterPropertiesList.data[i].fieldtype === 'id') {
	                        filterPropertiesList.data[i].$$group = 'simple';
	                    }
	                    if (filterPropertiesList.data[i].fieldtype === 'many-to-one') {
	                        filterPropertiesList.data[i].$$group = 'drilldown';
	                    }
	                    if (filterPropertiesList.data[i].fieldtype === 'many-to-many' || filterPropertiesList.data[i].fieldtype === 'one-to-many') {
	                        filterPropertiesList.data[i].$$group = 'compareCollections';
	                    }
	                }
	                filterPropertiesList.data[i].propertyIdentifier = propertyIdentifier + '.' + filterPropertiesList.data[i].name;
	            }
	            filterPropertiesList.data = _this._orderBy(filterPropertiesList.data, ['-$$group', 'propertyIdentifier'], false);
	        };
	        this.orderBy = function (propertiesList, predicate, reverse) {
	            return _this._orderBy(propertiesList, predicate, reverse);
	        };
	        this.$filter = $filter;
	        this.$log = $log;
	        this._collection = null;
	        this._collectionConfig = null;
	        this._filterPropertiesList = {};
	        this._filterCount = 0;
	        this._orderBy = $filter('orderBy');
	    }
	    CollectionService.$inject = [
	        '$filter', '$log'
	    ];
	    return CollectionService;
	})();
	exports.CollectionService = CollectionService;


/***/ },
/* 70 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var CollectionController = (function () {
	    //@ngInject
	    function CollectionController($scope, $location, $log, $timeout, $slatwall, collectionService, metadataService, selectionService, paginationService, collectionConfigService) {
	        //init values 
	        //$scope.collectionTabs =[{tabTitle:'PROPERTIES',isActive:true},{tabTitle:'FILTERS ('+filterCount+')',isActive:false},{tabTitle:'DISPLAY OPTIONS',isActive:false}];
	        $scope.$id = "collectionsController";
	        /*used til we convert to use route params*/
	        var QueryString = function () {
	            // This function is anonymous, is executed immediately and 
	            // the return value is assigned to QueryString!
	            var query_string = {};
	            var query = window.location.search.substring(1);
	            var vars = query.split("&");
	            for (var i = 0; i < vars.length; i++) {
	                var pair = vars[i].split("=");
	                // If first entry with this name
	                if (typeof query_string[pair[0]] === "undefined") {
	                    query_string[pair[0]] = pair[1];
	                }
	                else if (typeof query_string[pair[0]] === "string") {
	                    var arr = [query_string[pair[0]], pair[1]];
	                    query_string[pair[0]] = arr;
	                }
	                else {
	                    query_string[pair[0]].push(pair[1]);
	                }
	            }
	            return query_string;
	        }();
	        //get url param to retrieve collection listing
	        $scope.collectionID = QueryString.collectionID;
	        $scope.paginator = paginationService.createPagination();
	        $scope.appendToCollection = function () {
	            if ($scope.paginator.getPageShow() === 'Auto') {
	                $log.debug('AppendToCollection');
	                if ($scope.autoScrollPage < $scope.collection.totalPages) {
	                    $scope.autoScrollDisabled = true;
	                    $scope.autoScrollPage++;
	                    var collectionListingPromise = $slatwall.getEntity('collection', { id: $scope.collectionID, currentPage: $scope.paginator.autoScrollPage, pageShow: 50 });
	                    collectionListingPromise.then(function (value) {
	                        $scope.collection.pageRecords = $scope.collection.pageRecords.concat(value.pageRecords);
	                        $scope.autoScrollDisabled = false;
	                    }, function (reason) {
	                    });
	                }
	            }
	        };
	        $scope.keywords = "";
	        $scope.loadingCollection = false;
	        var searchPromise;
	        $scope.searchCollection = function () {
	            if (searchPromise) {
	                $timeout.cancel(searchPromise);
	            }
	            searchPromise = $timeout(function () {
	                $log.debug('search with keywords');
	                $log.debug($scope.keywords);
	                //Set current page here so that the pagination does not break when getting collection
	                $scope.paginator.setCurrentPage(1);
	                $scope.loadingCollection = true;
	                $scope.getCollection();
	            }, 500);
	        };
	        $scope.getCollection = function () {
	            var pageShow = 50;
	            if ($scope.paginator.getPageShow() !== 'Auto') {
	                pageShow = $scope.paginator.getPageShow();
	            }
	            //			$scope.currentPage = $scope.pagination.getCurrentPage();
	            var collectionListingPromise = $slatwall.getEntity('collection', { id: $scope.collectionID, currentPage: $scope.paginator.getCurrentPage(), pageShow: pageShow, keywords: $scope.keywords });
	            collectionListingPromise.then(function (value) {
	                $scope.collection = value;
	                $scope.paginator.setPageRecordsInfo($scope.collection);
	                $scope.collectionInitial = angular.copy($scope.collection);
	                if (angular.isUndefined($scope.collectionConfig)) {
	                    var test = collectionConfigService.newCollectionConfig();
	                    test.loadJson(value.collectionConfig);
	                    $scope.collectionConfig = test.getCollectionConfig();
	                }
	                //check if we have any filter Groups
	                if (angular.isUndefined($scope.collectionConfig.filterGroups)) {
	                    $scope.collectionConfig.filterGroups = [
	                        {
	                            filterGroup: []
	                        }
	                    ];
	                }
	                collectionService.setFilterCount(filterItemCounter());
	                $scope.loadingCollection = false;
	            }, function (reason) {
	            });
	            return collectionListingPromise;
	        };
	        $scope.paginator.getCollection = $scope.getCollection;
	        $scope.getCollection();
	        var unbindCollectionObserver = $scope.$watch('collection', function (newValue, oldValue) {
	            if (newValue !== oldValue) {
	                if (angular.isUndefined($scope.filterPropertiesList)) {
	                    $scope.filterPropertiesList = {};
	                    var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName($scope.collectionConfig.baseEntityAlias);
	                    filterPropertiesPromise.then(function (value) {
	                        metadataService.setPropertiesList(value, $scope.collectionConfig.baseEntityAlias);
	                        $scope.filterPropertiesList[$scope.collectionConfig.baseEntityAlias] = metadataService.getPropertiesListByBaseEntityAlias($scope.collectionConfig.baseEntityAlias);
	                        metadataService.formatPropertiesList($scope.filterPropertiesList[$scope.collectionConfig.baseEntityAlias], $scope.collectionConfig.baseEntityAlias);
	                    });
	                }
	                unbindCollectionObserver();
	            }
	        });
	        $scope.setCollectionForm = function (form) {
	            $scope.collectionForm = form;
	        };
	        $scope.collectionDetails = {
	            isOpen: false,
	            openCollectionDetails: function () {
	                $scope.collectionDetails.isOpen = true;
	            }
	        };
	        $scope.errorMessage = {};
	        var filterItemCounter = function (filterGroupArray) {
	            var filterItemCount = 0;
	            if (!angular.isDefined(filterGroupArray)) {
	                filterGroupArray = $scope.collectionConfig.filterGroups[0].filterGroup;
	            }
	            //Start out loop
	            for (var index in filterGroupArray) {
	                //If filter isn't new then increment the count
	                if (!filterGroupArray[index].$$isNew
	                    && !angular.isDefined(filterGroupArray[index].filterGroup)) {
	                    filterItemCount++;
	                }
	                else if (angular.isDefined(filterGroupArray[index].filterGroup)) {
	                    //Call function recursively
	                    filterItemCount += filterItemCounter(filterGroupArray[index].filterGroup);
	                }
	                else {
	                    break;
	                }
	            }
	            return filterItemCount;
	        };
	        $scope.saveCollection = function () {
	            $timeout(function () {
	                $log.debug('saving Collection');
	                var entityName = 'collection';
	                var collection = $scope.collection;
	                $log.debug($scope.collectionConfig);
	                if (isFormValid($scope.collectionForm)) {
	                    var collectionConfigString = collectionService.stringifyJSON($scope.collectionConfig);
	                    $log.debug(collectionConfigString);
	                    var data = angular.copy(collection);
	                    data.collectionConfig = collectionConfigString;
	                    //has to be removed in order to save transient correctly
	                    delete data.pageRecords;
	                    var saveCollectionPromise = $slatwall.saveEntity(entityName, collection.collectionID, data, 'save');
	                    saveCollectionPromise.then(function (value) {
	                        $scope.errorMessage = {};
	                        //Set current page here so that the pagination does not break when getting collection
	                        $scope.paginator.setCurrentPage(1);
	                        $scope.getCollection();
	                        $scope.collectionDetails.isOpen = false;
	                    }, function (reason) {
	                        //revert to original
	                        angular.forEach(reason.errors, function (value, key) {
	                            $scope.collectionForm[key].$invalid = true;
	                            $scope.errorMessage[key] = value[0];
	                        });
	                        //$scope.collection = angular.copy($scope.collectionInitial);
	                    });
	                }
	                collectionService.setFilterCount(filterItemCounter());
	            });
	        };
	        var isFormValid = function (angularForm) {
	            $log.debug('validateForm');
	            var formValid = true;
	            for (var field in angularForm) {
	                // look at each form input with a name attribute set
	                // checking if it is pristine and not a '$' special field
	                if (field[0] != '$') {
	                    // need to use formValid variable instead of formController.$valid because checkbox dropdown is not an input
	                    // and somehow formController didn't invalid if checkbox dropdown is invalid
	                    if (angularForm[field].$invalid) {
	                        formValid = false;
	                        for (var error in angularForm[field].$error) {
	                            if (error == 'required') {
	                                $scope.errorMessage[field] = 'This field is required';
	                            }
	                        }
	                    }
	                    if (angularForm[field].$pristine) {
	                        if (angular.isUndefined(angularForm[field].$viewValue)) {
	                            angularForm[field].$setViewValue("");
	                        }
	                        else {
	                            angularForm[field].$setViewValue(angularForm[field].$viewValue);
	                        }
	                    }
	                }
	            }
	            return formValid;
	        };
	        $scope.copyExistingCollection = function () {
	            $scope.collection.collectionConfig = $scope.selectedExistingCollection;
	        };
	        $scope.setSelectedExistingCollection = function (selectedExistingCollection) {
	            $scope.selectedExistingCollection = selectedExistingCollection;
	        };
	        $scope.setSelectedFilterProperty = function (selectedFilterProperty) {
	            $scope.selectedFilterProperty = selectedFilterProperty;
	        };
	        $scope.filterCount = collectionService.getFilterCount;
	        //export action
	        $scope.exportCollection = function () {
	            var url = '/?slatAction=main.collectionExport&collectionExportID=' + $scope.collectionID + '&downloadReport=1';
	            var data = { "ids": selectionService.getSelections('collectionSelection') };
	            var target = "downloadCollection";
	            $('body').append('<form action="' + url + '" method="post" target="' + target + '" id="postToIframe"></form>');
	            $.each(data, function (n, v) {
	                $('#postToIframe').append('<input type="hidden" name="' + n + '" value="' + v + '" />');
	            });
	            $('#postToIframe').submit().remove();
	        };
	    }
	    return CollectionController;
	})();
	exports.CollectionController = CollectionController;
	// 'use strict';
	// angular.module('slatwalladmin')
	// //using $location to get url params, this will probably change to using routes eventually
	// .controller('collections', [ 
	// 	'$scope',
	// '$location',
	// '$log',
	// '$timeout',
	// '$slatwall',
	// 'collectionService', 
	// 'metadataService',
	// 'selectionService',
	// 'paginationService',
	// 	function(
	// 		$scope,
	// $location,
	// $log,
	// $timeout,
	// $slatwall,
	// collectionService,
	// metadataService,
	// selectionService,
	// paginationService
	// 	){
	// 		
	// 	}
	// ]);


/***/ },
/* 71 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var CreateCollection = (function () {
	    //@ngInject
	    function CreateCollection($scope, $log, $timeout, $slatwall, collectionService, formService, metadataService, paginationService, dialogService, observerService, selectionService, collectionConfigService) {
	        $scope.params = dialogService.getCurrentDialog().params;
	        $scope.myCollection = collectionConfigService.newCollectionConfig($scope.params.entityName);
	        $scope.keywords = '';
	        $scope.paginator = paginationService.createPagination();
	        //$scope.isRadio = true;
	        //$scope.closeSaving = true;
	        $scope.newCollection = $slatwall.newCollection();
	        $scope.newCollection.data.collectionCode = $scope.params.entityName + "-" + new Date().valueOf();
	        $scope.newCollection.data.collectionObject = $scope.params.entityName;
	        if (angular.isDefined($scope.params.entityID)) {
	            $scope.newCollection.data.collectionID = $scope.params.entityID;
	            $timeout(function () {
	                $scope.newCollection.forms['form.createCollection'].$setDirty();
	            });
	        }
	        if (angular.isDefined($scope.params.collectionName)) {
	            $scope.newCollection.data.collectionName = $scope.params.collectionName;
	            $timeout(function () {
	                $scope.newCollection.forms['form.createCollection'].$setDirty();
	            });
	        }
	        $scope.saveCollection = function () {
	            $scope.myCollection.loadJson($scope.collectionConfig);
	            $scope.getCollection();
	        };
	        $scope.getCollection = function () {
	            $scope.closeSaving = true;
	            $scope.myCollection.setPageShow($scope.paginator.getPageShow());
	            $scope.myCollection.setCurrentPage($scope.paginator.getCurrentPage());
	            $scope.myCollection.setKeywords($scope.keywords);
	            var collectionOptions;
	            if (angular.isDefined($scope.params.entityID)) {
	                collectionOptions = {
	                    id: $scope.params.entityID,
	                    currentPage: $scope.paginator.getCurrentPage(),
	                    pageShow: $scope.paginator.getPageShow(),
	                    keywords: $scope.keywords
	                };
	            }
	            else {
	                collectionOptions = $scope.myCollection.getOptions();
	            }
	            $log.debug($scope.myCollection.getOptions());
	            var collectionListingPromise = $slatwall.getEntity($scope.myCollection.getEntityName(), collectionOptions);
	            collectionListingPromise.then(function (value) {
	                $scope.collection = value;
	                $scope.collection.collectionObject = $scope.myCollection.baseEntityName;
	                $scope.collectionInitial = angular.copy($scope.collection);
	                $scope.paginator.setRecordsCount($scope.collection.recordsCount);
	                $scope.paginator.setPageRecordsInfo($scope.collection);
	                if (angular.isUndefined($scope.myCollection.columns)) {
	                    var colConfig = angular.fromJson(value.collectionConfig);
	                    colConfig.baseEntityName = colConfig.baseEntityName.replace(new RegExp('^' + hibachiConfig.applicationKey, 'i'), '');
	                    $scope.myCollection.loadJson(colConfig);
	                }
	                if (angular.isUndefined($scope.collectionConfig)) {
	                    $scope.collectionConfig = $scope.myCollection.getCollectionConfig();
	                }
	                if (angular.isUndefined($scope.collectionConfig.filterGroups) || !$scope.collectionConfig.filterGroups.length) {
	                    $scope.collectionConfig.filterGroups = [
	                        {
	                            filterGroup: []
	                        }
	                    ];
	                }
	                collectionService.setFilterCount(filterItemCounter());
	                $scope.loadingCollection = false;
	                $scope.closeSaving = false;
	            }, function (reason) {
	            });
	            return collectionListingPromise;
	        };
	        $scope.paginator.collection = $scope.newCollection;
	        $scope.paginator.getCollection = $scope.getCollection;
	        var unbindCollectionObserver = $scope.$watch('collection', function (newValue, oldValue) {
	            if (newValue !== oldValue) {
	                if (angular.isUndefined($scope.filterPropertiesList)) {
	                    $scope.filterPropertiesList = {};
	                    var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName($scope.collectionConfig.baseEntityAlias);
	                    filterPropertiesPromise.then(function (value) {
	                        metadataService.setPropertiesList(value, $scope.collectionConfig.baseEntityAlias);
	                        $scope.filterPropertiesList[$scope.collectionConfig.baseEntityAlias] = metadataService.getPropertiesListByBaseEntityAlias($scope.collectionConfig.baseEntityAlias);
	                        metadataService.formatPropertiesList($scope.filterPropertiesList[$scope.collectionConfig.baseEntityAlias], $scope.collectionConfig.baseEntityAlias);
	                    });
	                }
	                unbindCollectionObserver();
	            }
	        });
	        var filterItemCounter = function (filterGroupArray) {
	            var filterItemCount = 0;
	            if (!angular.isDefined(filterGroupArray)) {
	                filterGroupArray = $scope.collectionConfig.filterGroups[0].filterGroup;
	            }
	            //Start out loop
	            for (var index in filterGroupArray) {
	                //If filter isn't new then increment the count
	                if (!filterGroupArray[index].$$isNew && !angular.isDefined(filterGroupArray[index].filterGroup)) {
	                    filterItemCount++;
	                }
	                else if (angular.isDefined(filterGroupArray[index].filterGroup)) {
	                    //Call function recursively
	                    filterItemCount += filterItemCounter(filterGroupArray[index].filterGroup);
	                }
	                else {
	                    break;
	                }
	            }
	            return filterItemCount;
	        };
	        $scope.getCollection();
	        $scope.copyExistingCollection = function () {
	            $scope.collection.collectionConfig = $scope.selectedExistingCollection;
	        };
	        $scope.setSelectedExistingCollection = function (selectedExistingCollection) {
	            $scope.selectedExistingCollection = selectedExistingCollection;
	        };
	        $scope.setSelectedFilterProperty = function (selectedFilterProperty) {
	            $scope.selectedFilterProperty = selectedFilterProperty;
	        };
	        $scope.loadingCollection = false;
	        var searchPromise;
	        $scope.searchCollection = function () {
	            if (searchPromise) {
	                $timeout.cancel(searchPromise);
	            }
	            searchPromise = $timeout(function () {
	                //$log.debug('search with keywords');
	                //$log.debug($scope.keywords);
	                //Set current page here so that the pagination does not break when getting collection
	                $scope.paginator.setCurrentPage(1);
	                $scope.loadingCollection = true;
	                $scope.getCollection();
	            }, 500);
	        };
	        $scope.filterCount = collectionService.getFilterCount;
	        //
	        $scope.hideExport = true;
	        $scope.saveNewCollection = function ($index) {
	            if ($scope.closeSaving)
	                return;
	            $scope.closeSaving = true;
	            if (!angular.isUndefined(selectionService.getSelections('collectionSelection'))
	                && (selectionService.getSelections('collectionSelection').length > 0)) {
	                $scope.collectionConfig.filterGroups[0].filterGroup = [
	                    {
	                        "displayPropertyIdentifier": $slatwall.getRBKey("entity." + $scope.myCollection.baseEntityName.toLowerCase() + "." + $scope.myCollection.collection.$$getIDName().toLowerCase()),
	                        "propertyIdentifier": $scope.myCollection.baseEntityAlias + "." + $scope.myCollection.collection.$$getIDName(),
	                        "comparisonOperator": "in",
	                        "value": selectionService.getSelections('collectionSelection').join(),
	                        "displayValue": selectionService.getSelections('collectionSelection').join(),
	                        "ormtype": "string",
	                        "fieldtype": "id",
	                        "conditionDisplay": "In List"
	                    }
	                ];
	            }
	            $scope.newCollection.data.collectionConfig = $scope.collectionConfig;
	            if (!$scope.newCollection.data.collectionConfig.baseEntityName.startsWith(hibachiConfig.applicationKey))
	                $scope.newCollection.data.collectionConfig.baseEntityName = hibachiConfig.applicationKey + $scope.newCollection.data.collectionConfig.baseEntityName;
	            $scope.newCollection.$$save().then(function () {
	                observerService.notify('addCollection', $scope.newCollection.data);
	                dialogService.removePageDialog($index);
	                $scope.closeSaving = false;
	            }, function () {
	                $scope.closeSaving = false;
	            });
	        };
	    }
	    return CreateCollection;
	})();
	exports.CreateCollection = CreateCollection;


/***/ },
/* 72 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var ConfirmationController = (function () {
	    //@ngInject
	    function ConfirmationController($scope, $log, $modalInstance) {
	        $scope.deleteEntity = function (entity) {
	            $log.debug("Deleting an entity.");
	            $log.debug($scope.entity);
	            this.close();
	        };
	        $scope.fireCallback = function (callbackFunction) {
	            callbackFunction();
	            this.close();
	        };
	        /**
	        * Closes the modal window
	        */
	        $scope.close = function () {
	            $modalInstance.close();
	        };
	        /**
	        * Cancels the modal window
	        */
	        $scope.cancel = function () {
	            $modalInstance.dismiss("cancel");
	        };
	    }
	    return ConfirmationController;
	})();
	exports.ConfirmationController = ConfirmationController;


/***/ },
/* 73 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWCollection = (function () {
	    //@ngInject
	    function SWCollection($http, $compile, $log, pathBuilderConfig, collectionPartialsPath, collectionService) {
	        return {
	            restrict: 'A',
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "collection.html",
	            link: function (scope, $element, $attrs) {
	                scope.tabsUniqueID = Math.floor(Math.random() * 999);
	                scope.toggleCogOpen = $attrs.toggleoption;
	                //Toggles open/close of filters and display options
	                scope.toggleFiltersAndOptions = function () {
	                    if (scope.toggleCogOpen === false) {
	                        scope.toggleCogOpen = true;
	                    }
	                    else {
	                        scope.toggleCogOpen = false;
	                    }
	                };
	            }
	        };
	    }
	    SWCollection.Factory = function () {
	        var directive = function ($http, $compile, $log, pathBuilderConfig, collectionPartialsPath, collectionService) {
	            return new SWCollection($http, $compile, $log, pathBuilderConfig, collectionPartialsPath, collectionService);
	        };
	        directive.$inject = [
	            '$http',
	            '$compile',
	            '$log',
	            'pathBuilderConfig',
	            'collectionPartialsPath',
	            'collectionService'
	        ];
	        return directive;
	    };
	    return SWCollection;
	})();
	exports.SWCollection = SWCollection;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWAddFilterButtons = (function () {
	    //@ngInject
	    function SWAddFilterButtons($http, $compile, $templateCache, collectionService, collectionPartialsPath, pathBuilderConfig) {
	        return {
	            require: '^swFilterGroups',
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "addfilterbuttons.html",
	            scope: {
	                itemInUse: "="
	            },
	            link: function (scope, element, attrs, filterGroupsController) {
	                scope.filterGroupItem = filterGroupsController.getFilterGroupItem();
	                scope.addFilterItem = function () {
	                    collectionService.newFilterItem(filterGroupsController.getFilterGroupItem(), filterGroupsController.setItemInUse);
	                };
	                scope.addFilterGroupItem = function () {
	                    collectionService.newFilterItem(filterGroupsController.getFilterGroupItem(), filterGroupsController.setItemInUse, true);
	                };
	            }
	        };
	    }
	    SWAddFilterButtons.Factory = function () {
	        var directive = function ($http, $compile, $templateCache, collectionService, collectionPartialsPath, pathBuilderConfig) {
	            return new SWAddFilterButtons($http, $compile, $templateCache, collectionService, collectionPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$http',
	            '$compile',
	            '$templateCache',
	            'collectionService',
	            'collectionPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWAddFilterButtons;
	})();
	exports.SWAddFilterButtons = SWAddFilterButtons;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWDisplayOptions = (function () {
	    //@ngInject
	    function SWDisplayOptions($http, $compile, $templateCache, $log, $slatwall, collectionService, pathBuilderConfig, collectionPartialsPath) {
	        return {
	            restrict: 'E',
	            transclude: true,
	            scope: {
	                orderBy: "=",
	                columns: '=',
	                propertiesList: "=",
	                saveCollection: "&",
	                baseEntityAlias: "=",
	                baseEntityName: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "displayoptions.html",
	            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
	                    $log.debug('display options initialize');
	                    this.removeColumn = function (columnIndex) {
	                        $log.debug('parent remove column');
	                        $log.debug($scope.columns);
	                        if ($scope.columns.length) {
	                            $scope.columns.splice(columnIndex, 1);
	                        }
	                    };
	                    this.getPropertiesList = function () {
	                        return $scope.propertiesList;
	                    };
	                    $scope.addDisplayDialog = {
	                        isOpen: false,
	                        toggleDisplayDialog: function () {
	                            $scope.addDisplayDialog.isOpen = !$scope.addDisplayDialog.isOpen;
	                        }
	                    };
	                    var getTitleFromPropertyIdentifier = function (propertyIdentifier) {
	                        var baseEntityCfcName = $scope.baseEntityName.replace('Slatwall', '').charAt(0).toLowerCase() + $scope.baseEntityName.replace('Slatwall', '').slice(1);
	                        var title = '';
	                        var propertyIdentifierArray = propertyIdentifier.split('.');
	                        var currentEntity;
	                        var currentEntityInstance;
	                        var prefix = 'entity.';
	                        angular.forEach(propertyIdentifierArray, function (propertyIdentifierItem, key) {
	                            //pass over the initial item
	                            if (key !== 0) {
	                                if (key === 1) {
	                                    currentEntityInstance = $slatwall['new' + $scope.baseEntityName.replace('Slatwall', '')]();
	                                    currentEntity = currentEntityInstance.metaData[propertyIdentifierArray[key]];
	                                    title += $slatwall.getRBKey(prefix + baseEntityCfcName + '.' + propertyIdentifierItem);
	                                }
	                                else {
	                                    var currentEntityInstance = $slatwall['new' + currentEntity.cfc.charAt(0).toUpperCase() + currentEntity.cfc.slice(1)]();
	                                    currentEntity = currentEntityInstance.metaData[propertyIdentifierArray[key]];
	                                    title += $slatwall.getRBKey(prefix + currentEntityInstance.metaData.className + '.' + currentEntity.name);
	                                }
	                                if (key < propertyIdentifierArray.length - 1) {
	                                    title += ' | ';
	                                }
	                            }
	                        });
	                        return title;
	                    };
	                    $scope.addColumn = function (selectedProperty, closeDialog) {
	                        $log.debug('add Column');
	                        $log.debug(selectedProperty);
	                        if (selectedProperty.$$group === 'simple' || 'attribute') {
	                            $log.debug($scope.columns);
	                            if (angular.isDefined(selectedProperty)) {
	                                var column = {
	                                    title: getTitleFromPropertyIdentifier(selectedProperty.propertyIdentifier),
	                                    propertyIdentifier: selectedProperty.propertyIdentifier,
	                                    isVisible: true,
	                                    isDeletable: true,
	                                    isSearchable: true,
	                                    isExportable: true
	                                };
	                                //only add attributeid if the selectedProperty is attributeid
	                                if (angular.isDefined(selectedProperty.attributeID)) {
	                                    column['attributeID'] = selectedProperty.attributeID;
	                                    column['attributeSetObject'] = selectedProperty.attributeSetObject;
	                                }
	                                if (angular.isDefined(selectedProperty.ormtype)) {
	                                    column['ormtype'] = selectedProperty.ormtype;
	                                }
	                                $scope.columns.push(column);
	                                $scope.saveCollection();
	                                if (angular.isDefined(closeDialog) && closeDialog === true) {
	                                    $scope.addDisplayDialog.toggleDisplayDialog();
	                                }
	                            }
	                        }
	                    };
	                    $scope.selectBreadCrumb = function (breadCrumbIndex) {
	                        //splice out array items above index
	                        var removeCount = $scope.breadCrumbs.length - 1 - breadCrumbIndex;
	                        $scope.breadCrumbs.splice(breadCrumbIndex + 1, removeCount);
	                        $scope.selectedPropertyChanged(null);
	                    };
	                    var unbindBaseEntityAlias = $scope.$watch('baseEntityAlias', function (newValue, oldValue) {
	                        if (newValue !== oldValue) {
	                            $scope.breadCrumbs = [{
	                                    entityAlias: $scope.baseEntityAlias,
	                                    cfc: $scope.baseEntityAlias,
	                                    propertyIdentifier: $scope.baseEntityAlias
	                                }];
	                            unbindBaseEntityAlias();
	                        }
	                    });
	                    $scope.selectedPropertyChanged = function (selectedProperty) {
	                        // drill down or select field?
	                        $log.debug('selectedPropertyChanged');
	                        $log.debug(selectedProperty);
	                        $scope.selectedProperty = selectedProperty;
	                    };
	                    jQuery(function ($) {
	                        var panelList = angular.element($element).children('ul');
	                        panelList.sortable({
	                            // Only make the .panel-heading child elements support dragging.
	                            // Omit this to make then entire <li>...</li> draggable.
	                            handle: '.s-pannel-name',
	                            update: function (event, ui) {
	                                var tempColumnsArray = [];
	                                $('.s-pannel-name', panelList).each(function (index, elem) {
	                                    var newIndex = $(elem).attr('j-column-index');
	                                    var columnItem = $scope.columns[newIndex];
	                                    tempColumnsArray.push(columnItem);
	                                });
	                                $scope.$apply(function () {
	                                    $scope.columns = tempColumnsArray;
	                                });
	                                $scope.saveCollection();
	                            }
	                        });
	                    });
	                    /*var unbindBaseEntityAlaisWatchListener = scope.$watch('baseEntityAlias',function(){
	                         $("select").selectBoxIt();
	                         unbindBaseEntityAlaisWatchListener();
	                    });*/
	                }]
	        };
	    }
	    SWDisplayOptions.Factory = function () {
	        var directive = function ($http, $compile, $templateCache, $log, $slatwall, collectionService, pathBuilderConfig, collectionPartialsPath) {
	            return new SWDisplayOptions($http, $compile, $templateCache, $log, $slatwall, collectionService, pathBuilderConfig, collectionPartialsPath);
	        };
	        directive.$inject = [
	            '$http',
	            '$compile',
	            '$templateCache',
	            '$log',
	            '$slatwall',
	            'collectionService',
	            'pathBuilderConfig',
	            'collectionPartialsPath'
	        ];
	        return directive;
	    };
	    return SWDisplayOptions;
	})();
	exports.SWDisplayOptions = SWDisplayOptions;


/***/ },
/* 76 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWDisplayItem = (function () {
	    //@ngInject
	    function SWDisplayItem($http, $compile, $templateCache, $log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	        return {
	            require: '^swDisplayOptions',
	            restrict: 'A',
	            scope: {
	                selectedProperty: "=",
	                propertiesList: "=",
	                breadCrumbs: "=",
	                selectedPropertyChanged: "&"
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "displayitem.html",
	            link: function (scope, element, attrs, displayOptionsController) {
	                scope.showDisplayItem = false;
	                scope.selectedDisplayOptionChanged = function (selectedDisplayOption) {
	                    var breadCrumb = {
	                        entityAlias: scope.selectedProperty.name,
	                        cfc: scope.selectedProperty.cfc,
	                        propertyIdentifier: scope.selectedProperty.propertyIdentifier
	                    };
	                    scope.breadCrumbs.push(breadCrumb);
	                    scope.selectedPropertyChanged({ selectedProperty: selectedDisplayOption });
	                };
	                scope.$watch('selectedProperty', function (selectedProperty) {
	                    if (angular.isDefined(selectedProperty)) {
	                        if (selectedProperty === null) {
	                            scope.showDisplayItem = false;
	                            return;
	                        }
	                        if (selectedProperty.$$group !== 'drilldown') {
	                            scope.showDisplayItem = false;
	                            return;
	                        }
	                        if (selectedProperty.$$group === 'drilldown') {
	                            if (angular.isUndefined(scope.propertiesList[selectedProperty.propertyIdentifier])) {
	                                var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName(selectedProperty.cfc);
	                                filterPropertiesPromise.then(function (value) {
	                                    metadataService.setPropertiesList(value, selectedProperty.propertyIdentifier);
	                                    scope.propertiesList[selectedProperty.propertyIdentifier] = metadataService.getPropertiesListByBaseEntityAlias(selectedProperty.propertyIdentifier);
	                                    metadataService.formatPropertiesList(scope.propertiesList[selectedProperty.propertyIdentifier], selectedProperty.propertyIdentifier);
	                                }, function (reason) {
	                                });
	                            }
	                        }
	                        scope.showDisplayItem = true;
	                    }
	                });
	            }
	        };
	    }
	    SWDisplayItem.Factory = function () {
	        var directive = function ($http, $compile, $templateCache, $log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	            return new SWDisplayItem($http, $compile, $templateCache, $log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$http',
	            '$compile',
	            '$templateCache',
	            '$log',
	            '$slatwall',
	            '$filter',
	            'collectionPartialsPath',
	            'collectionService',
	            'metadataService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWDisplayItem;
	})();
	exports.SWDisplayItem = SWDisplayItem;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWCollectionTable = (function () {
	    //ngInject
	    function SWCollectionTable($http, $compile, $log, pathBuilderConfig, collectionPartialsPath, paginationService, selectionService, $slatwall) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "collectiontable.html",
	            scope: {
	                collection: "=",
	                collectionConfig: "=",
	                isRadio: "=",
	                //angularLink:true || false
	                angularLinks: "="
	            },
	            link: function (scope, element, attrs) {
	                if (angular.isUndefined(scope.angularLinks)) {
	                    scope.angularLinks = false;
	                }
	                console.log('here');
	                console.log(scope.collection);
	                console.log($slatwall);
	                scope.collectionObject = $slatwall['new' + scope.collection.collectionObject]();
	                var escapeRegExp = function (str) {
	                    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	                };
	                scope.replaceAll = function (str, find, replace) {
	                    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
	                };
	                /*
	                 * Handles setting the key on the data.
	                 * */
	                angular.forEach(scope.collectionConfig.columns, function (column) {
	                    $log.debug("Config Key : " + column);
	                    column.key = column.propertyIdentifier.replace(/\./g, '_').replace(scope.collectionConfig.baseEntityAlias + '_', '');
	                });
	                scope.addSelection = function (selectionid, selection) {
	                    selectionService.addSelection(selectionid, selection);
	                };
	            }
	        };
	    }
	    SWCollectionTable.Factory = function () {
	        var directive = function ($http, $compile, $log, pathBuilderConfig, collectionPartialsPath, paginationService, selectionService, $slatwall) {
	            return new SWCollectionTable($http, $compile, $log, pathBuilderConfig, collectionPartialsPath, paginationService, selectionService, $slatwall);
	        };
	        directive.$inject = [
	            '$http',
	            '$compile',
	            '$log',
	            'pathBuilderConfig',
	            'collectionPartialsPath',
	            'paginationService',
	            'selectionService',
	            '$slatwall',
	        ];
	        return directive;
	    };
	    return SWCollectionTable;
	})();
	exports.SWCollectionTable = SWCollectionTable;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWColumnItem = (function () {
	    function SWColumnItem($compile, $templateCache, $log, $timeout, pathBuilderConfig, collectionService, collectionPartialsPath) {
	        return {
	            restrict: 'A',
	            require: "^swDisplayOptions",
	            scope: {
	                column: "=",
	                columns: "=",
	                columnIndex: "=",
	                saveCollection: "&",
	                propertiesList: "=",
	                orderBy: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "columnitem.html",
	            link: function (scope, element, attrs, displayOptionsController) {
	                scope.editingDisplayTitle = false;
	                scope.editDisplayTitle = function () {
	                    if (angular.isUndefined(scope.column.displayTitle)) {
	                        scope.column.displayTitle = scope.column.title;
	                    }
	                    if (!scope.column.displayTitle.length) {
	                        scope.column.displayTitle = scope.column.title;
	                    }
	                    scope.previousDisplayTitle = scope.column.displayTitle;
	                    scope.editingDisplayTitle = true;
	                };
	                scope.saveDisplayTitle = function () {
	                    var savePromise = scope.saveCollection();
	                    scope.editingDisplayTitle = false;
	                };
	                scope.cancelDisplayTitle = function () {
	                    scope.column.displayTitle = scope.previousDisplayTitle;
	                    scope.editingDisplayTitle = false;
	                };
	                $log.debug('displayOptionsController');
	                if (angular.isUndefined(scope.column.sorting)) {
	                    scope.column.sorting = {
	                        active: false,
	                        sortOrder: 'asc',
	                        priority: 0
	                    };
	                }
	                scope.toggleVisible = function (column) {
	                    $log.debug('toggle visible');
	                    if (angular.isUndefined(column.isVisible)) {
	                        column.isVisible = false;
	                    }
	                    column.isVisible = !column.isVisible;
	                    scope.saveCollection();
	                };
	                scope.toggleSearchable = function (column) {
	                    $log.debug('toggle searchable');
	                    if (angular.isUndefined(column.isSearchable)) {
	                        column.isSearchable = false;
	                    }
	                    column.isSearchable = !column.isSearchable;
	                    scope.saveCollection();
	                };
	                scope.toggleExportable = function (column) {
	                    $log.debug('toggle exporable');
	                    if (angular.isUndefined(column.isExportable)) {
	                        column.isExportable = false;
	                    }
	                    column.isExportable = !column.isExportable;
	                    scope.saveCollection();
	                };
	                var compareByPriority = function (a, b) {
	                    if (angular.isDefined(a.sorting) && angular.isDefined(a.sorting.priority)) {
	                        if (a.sorting.priority < b.sorting.priority) {
	                            return -1;
	                        }
	                        if (a.sorting.priority > b.sorting.priority) {
	                            return 1;
	                        }
	                    }
	                    return 0;
	                };
	                var updateOrderBy = function () {
	                    if (angular.isDefined(scope.columns)) {
	                        var columnsCopy = angular.copy(scope.columns);
	                        columnsCopy.sort(compareByPriority);
	                        scope.orderBy = [];
	                        angular.forEach(columnsCopy, function (column) {
	                            if (angular.isDefined(column.sorting) && column.sorting.active === true) {
	                                var orderBy = {
	                                    propertyIdentifier: column.propertyIdentifier,
	                                    direction: column.sorting.sortOrder
	                                };
	                                scope.orderBy.push(orderBy);
	                            }
	                        });
	                    }
	                };
	                scope.toggleSortable = function (column) {
	                    $log.debug('toggle sortable');
	                    if (angular.isUndefined(column.sorting)) {
	                        column.sorting = {
	                            active: true,
	                            sortOrder: 'asc',
	                            priority: 0
	                        };
	                    }
	                    if (column.sorting.active === true) {
	                        if (column.sorting.sortOrder === 'asc') {
	                            column.sorting.sortOrder = 'desc';
	                        }
	                        else {
	                            removeSorting(column);
	                            column.sorting.active = false;
	                        }
	                    }
	                    else {
	                        column.sorting.active = true;
	                        column.sorting.sortOrder = 'asc';
	                        column.sorting.priority = getActivelySorting().length;
	                    }
	                    updateOrderBy();
	                    scope.saveCollection();
	                };
	                var removeSorting = function (column, saving) {
	                    if (column.sorting.active === true) {
	                        for (var i in scope.columns) {
	                            if (scope.columns[i].sorting.active === true && scope.columns[i].sorting.priority > column.sorting.priority) {
	                                scope.columns[i].sorting.priority = scope.columns[i].sorting.priority - 1;
	                            }
	                        }
	                        column.sorting.priority = 0;
	                    }
	                    if (!saving) {
	                        updateOrderBy();
	                        scope.saveCollection();
	                    }
	                };
	                scope.prioritize = function (column) {
	                    if (column.sorting.priority === 1) {
	                        var activelySorting = getActivelySorting();
	                        for (var i in scope.columns) {
	                            if (scope.columns[i].sorting.active === true) {
	                                scope.columns[i].sorting.priority = scope.columns[i].sorting.priority - 1;
	                            }
	                        }
	                        column.sorting.priority = activelySorting.length;
	                    }
	                    else {
	                        for (var i in scope.columns) {
	                            if (scope.columns[i].sorting.active === true && scope.columns[i].sorting.priority === column.sorting.priority - 1) {
	                                scope.columns[i].sorting.priority = scope.columns[i].sorting.priority + 1;
	                            }
	                        }
	                        column.sorting.priority -= 1;
	                    }
	                    updateOrderBy();
	                    scope.saveCollection();
	                };
	                var getActivelySorting = function () {
	                    var activelySorting = [];
	                    for (var i in scope.columns) {
	                        if (scope.columns[i].sorting.active === true) {
	                            activelySorting.push(scope.columns[i]);
	                        }
	                    }
	                    return activelySorting;
	                };
	                scope.removeColumn = function (columnIndex) {
	                    $log.debug('remove column');
	                    $log.debug(columnIndex);
	                    removeSorting(scope.columns[columnIndex], true);
	                    displayOptionsController.removeColumn(columnIndex);
	                    updateOrderBy();
	                    scope.saveCollection();
	                };
	            }
	        };
	    }
	    SWColumnItem.Factory = function () {
	        var directive = function ($compile, $templateCache, $log, $timeout, pathBuilderConfig, collectionService, collectionPartialsPath) {
	            return new SWColumnItem($compile, $templateCache, $log, $timeout, pathBuilderConfig, collectionService, collectionPartialsPath);
	        };
	        directive.$inject = [
	            '$compile',
	            '$templateCache',
	            '$log',
	            '$timeout',
	            'pathBuilderConfig',
	            'collectionService',
	            'collectionPartialsPath'
	        ];
	        return directive;
	    };
	    return SWColumnItem;
	})();
	exports.SWColumnItem = SWColumnItem;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWConditionCriteria = (function () {
	    function SWConditionCriteria($http, $compile, $templateCache, $log, $slatwall, $filter, workflowPartialsPath, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	        /* Template info begin*/
	        var getTemplate = function (selectedFilterProperty) {
	            var template = '';
	            var templatePath = '';
	            if (angular.isUndefined(selectedFilterProperty.ormtype) && angular.isUndefined(selectedFilterProperty.fieldtype)) {
	                templatePath = pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "criteria.html";
	            }
	            else {
	                var criteriaormtype = selectedFilterProperty.ormtype;
	                var criteriafieldtype = selectedFilterProperty.fieldtype;
	                /*TODO: convert all switches to object literals*/
	                switch (criteriaormtype) {
	                    case 'boolean':
	                        templatePath = pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "criteriaboolean.html";
	                        break;
	                    case 'string':
	                        templatePath = pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "criteriastring.html";
	                        break;
	                    case 'timestamp':
	                        templatePath = pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "criteriadate.html";
	                        break;
	                    case 'big_decimal':
	                    case 'integer':
	                    case 'float':
	                        templatePath = pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "criterianumber.html";
	                        break;
	                }
	                switch (criteriafieldtype) {
	                    case "many-to-one":
	                        templatePath = pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "criteriamanytoone.html";
	                        break;
	                    case "many-to-many":
	                        templatePath = pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "criteriamanytomany.html";
	                        break;
	                    case "one-to-many":
	                        templatePath = pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "criteriaonetomany.html";
	                        break;
	                }
	            }
	            var templateLoader = $http.get(templatePath, { cache: $templateCache });
	            return templateLoader;
	        };
	        /* Template info end*/
	        /* Options info begin */
	        var getStringOptions = function (type) {
	            var stringOptions = [];
	            if (angular.isUndefined(type)) {
	                type = 'filter';
	            }
	            if (type == 'filter') {
	                stringOptions = [
	                    {
	                        display: "Equals",
	                        comparisonOperator: "="
	                    },
	                    {
	                        display: "Doesn't Equal",
	                        comparisonOperator: "<>"
	                    },
	                    {
	                        display: "Contains",
	                        comparisonOperator: "like",
	                        pattern: "%w%"
	                    },
	                    {
	                        display: "Doesn't Contain",
	                        comparisonOperator: "not like",
	                        pattern: "%w%"
	                    },
	                    {
	                        display: "Starts With",
	                        comparisonOperator: "like",
	                        pattern: "w%"
	                    },
	                    {
	                        display: "Doesn't Start With",
	                        comparisonOperator: "not like",
	                        pattern: "w%"
	                    },
	                    {
	                        display: "Ends With",
	                        comparisonOperator: "like",
	                        pattern: "%w"
	                    },
	                    {
	                        display: "Doesn't End With",
	                        comparisonOperator: "not like",
	                        pattern: "%w"
	                    },
	                    {
	                        display: "In List",
	                        comparisonOperator: "in"
	                    },
	                    {
	                        display: "Not In List",
	                        comparisonOperator: "not in"
	                    },
	                    {
	                        display: "Defined",
	                        comparisonOperator: "is not",
	                        value: "null"
	                    },
	                    {
	                        display: "Not Defined",
	                        comparisonOperator: "is",
	                        value: "null"
	                    }
	                ];
	                if (type === 'condition') {
	                    stringOptions = [
	                        {
	                            display: "Equals",
	                            comparisonOperator: "="
	                        },
	                        {
	                            display: "In List",
	                            comparisonOperator: "in"
	                        },
	                        {
	                            display: "Defined",
	                            comparisonOperator: "is not",
	                            value: "null"
	                        },
	                        {
	                            display: "Not Defined",
	                            comparisonOperator: "is",
	                            value: "null"
	                        }
	                    ];
	                }
	            }
	            return stringOptions;
	        };
	        var getBooleanOptions = function (type) {
	            var booleanOptions = [];
	            if (angular.isUndefined(type)) {
	                type = 'filter';
	            }
	            if (type === 'filter' || type === 'condition') {
	                booleanOptions = [
	                    {
	                        display: "True",
	                        comparisonOperator: "=",
	                        value: "True"
	                    },
	                    {
	                        display: "False",
	                        comparisonOperator: "=",
	                        value: "False"
	                    },
	                    {
	                        display: "Defined",
	                        comparisonOperator: "is not",
	                        value: "null"
	                    },
	                    {
	                        display: "Not Defined",
	                        comparisonOperator: "is",
	                        value: "null"
	                    }
	                ];
	            }
	            return booleanOptions;
	        };
	        var getDateOptions = function (type) {
	            var dateOptions = [];
	            if (angular.isUndefined(type)) {
	                type = 'filter';
	            }
	            if (type === 'filter') {
	                dateOptions = [
	                    {
	                        display: "Date",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'exactDate'
	                        }
	                    },
	                    {
	                        display: "In Range",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'range'
	                        }
	                    },
	                    {
	                        display: "Not In Range",
	                        comparisonOperator: "not between",
	                        dateInfo: {
	                            type: 'range'
	                        }
	                    },
	                    {
	                        display: "Today",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'd',
	                            measureCount: 0,
	                            behavior: 'toDate'
	                        }
	                    },
	                    {
	                        display: "Yesterday",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'd',
	                            measureCount: -1,
	                            behavior: 'toDate'
	                        }
	                    },
	                    {
	                        display: "This Week",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'w',
	                            behavior: 'toDate'
	                        }
	                    },
	                    {
	                        display: "This Month",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'm',
	                            behavior: 'toDate'
	                        }
	                    },
	                    {
	                        display: "This Quarter",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'q',
	                            behavior: 'toDate'
	                        }
	                    },
	                    {
	                        display: "This Year",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'y',
	                            behavior: 'toDate'
	                        }
	                    },
	                    {
	                        display: "Last N Hour(s)",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'h',
	                            measureTypeDisplay: 'Hours'
	                        }
	                    },
	                    {
	                        display: "Last N Day(s)",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'd',
	                            measureTypeDisplay: 'Days'
	                        }
	                    },
	                    {
	                        display: "Last N Week(s)",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'w',
	                            measureTypeDisplay: 'Weeks'
	                        }
	                    },
	                    {
	                        display: "Last N Month(s)",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'm',
	                            measureTypeDisplay: 'Months'
	                        }
	                    },
	                    {
	                        display: "Last N Quarter(s)",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'q',
	                            measureTypeDisplay: 'Quarters'
	                        }
	                    },
	                    {
	                        display: "Last N Year(s)",
	                        comparisonOperator: "between",
	                        dateInfo: {
	                            type: 'calculation',
	                            measureType: 'y',
	                            measureTypeDisplay: 'Years'
	                        }
	                    },
	                    {
	                        display: "Defined",
	                        comparisonOperator: "is not",
	                        value: "null"
	                    },
	                    {
	                        display: "Not Defined",
	                        comparisonOperator: "is",
	                        value: "null"
	                    }
	                ];
	            }
	            if (type === 'condition') {
	                dateOptions = [
	                    {
	                        display: "Defined",
	                        comparisonOperator: "is not",
	                        value: "null"
	                    },
	                    {
	                        display: "Not Defined",
	                        comparisonOperator: "is",
	                        value: "null"
	                    }
	                ];
	            }
	            return dateOptions;
	        };
	        var getNumberOptions = function (type) {
	            var numberOptions = [];
	            if (angular.isUndefined(type)) {
	                type = 'filter';
	            }
	            if (type == 'filter') {
	                numberOptions = [
	                    {
	                        display: "Equals",
	                        comparisonOperator: "="
	                    },
	                    {
	                        display: "Doesn't Equal",
	                        comparisonOperator: "<>"
	                    },
	                    {
	                        display: "In Range",
	                        comparisonOperator: "between",
	                        type: "range"
	                    },
	                    {
	                        display: "Not In Range",
	                        comparisonOperator: "not between",
	                        type: "range"
	                    },
	                    {
	                        display: "Greater Than",
	                        comparisonOperator: ">"
	                    },
	                    {
	                        display: "Greater Than Or Equal",
	                        comparisonOperator: ">="
	                    },
	                    {
	                        display: "Less Than",
	                        comparisonOperator: "<"
	                    },
	                    {
	                        display: "Less Than Or Equal",
	                        comparisonOperator: "<="
	                    },
	                    {
	                        display: "In List",
	                        comparisonOperator: "in"
	                    },
	                    {
	                        display: "Not In List",
	                        comparisonOperator: "not in"
	                    },
	                    {
	                        display: "Defined",
	                        comparisonOperator: "is not",
	                        value: "null"
	                    },
	                    {
	                        display: "Not Defined",
	                        comparisonOperator: "is",
	                        value: "null"
	                    }
	                ];
	            }
	            if (type === 'condition') {
	                numberOptions = [
	                    {
	                        display: "Equals",
	                        comparisonOperator: "="
	                    },
	                    {
	                        display: "Doesn't Equal",
	                        comparisonOperator: "<>"
	                    },
	                    {
	                        display: "Greater Than",
	                        comparisonOperator: ">"
	                    },
	                    {
	                        display: "Greater Than Or Equal",
	                        comparisonOperator: ">="
	                    },
	                    {
	                        display: "Less Than",
	                        comparisonOperator: "<"
	                    },
	                    {
	                        display: "Less Than Or Equal",
	                        comparisonOperator: "<="
	                    },
	                    {
	                        display: "In List",
	                        comparisonOperator: "in"
	                    },
	                    {
	                        display: "Defined",
	                        comparisonOperator: "is not",
	                        value: "null"
	                    },
	                    {
	                        display: "Not Defined",
	                        comparisonOperator: "is",
	                        value: "null"
	                    }
	                ];
	            }
	            return numberOptions;
	        };
	        var getOneToManyOptions = function (type) {
	            var oneToManyOptions = [];
	            if (angular.isUndefined(type)) {
	                type = 'filter';
	            }
	            if (type == 'filter') {
	                oneToManyOptions = [
	                    {
	                        display: "All Exist In Collection",
	                        comparisonOperator: "All"
	                    },
	                    {
	                        display: "None Exist In Collection",
	                        comparisonOperator: "None"
	                    },
	                    {
	                        display: "Some Exist In Collection",
	                        comparisonOperator: "One"
	                    }
	                ];
	            }
	            if (type === 'condition') {
	                oneToManyOptions = [];
	            }
	            return oneToManyOptions;
	        };
	        var getManyToManyOptions = function (type) {
	            var manyToManyOptions = [];
	            if (angular.isUndefined(type)) {
	                type = 'filter';
	            }
	            if (type == 'filter') {
	                manyToManyOptions = [
	                    {
	                        display: "All Exist In Collection",
	                        comparisonOperator: "All"
	                    },
	                    {
	                        display: "None Exist In Collection",
	                        comparisonOperator: "None"
	                    },
	                    {
	                        display: "Some Exist In Collection",
	                        comparisonOperator: "One"
	                    },
	                    {
	                        display: "Empty",
	                        comparisonOperator: "is",
	                        value: "null"
	                    },
	                    {
	                        display: "Not Empty",
	                        comparisonOperator: "is not",
	                        value: "null"
	                    }
	                ];
	            }
	            if (type === 'condition') {
	                manyToManyOptions = [
	                    {
	                        display: "Empty",
	                        comparisonOperator: "is",
	                        value: "null"
	                    },
	                    {
	                        display: "Not Empty",
	                        comparisonOperator: "is not",
	                        value: "null"
	                    }
	                ];
	            }
	            return manyToManyOptions;
	        };
	        var getManyToOneOptions = function (type) {
	            var manyToOneOptions = [];
	            if (angular.isUndefined(type)) {
	                type = 'filter';
	            }
	            if (type == 'filter') {
	                manyToOneOptions = {
	                    drillEntity: {},
	                    hasEntity: {
	                        display: "Defined",
	                        comparisonOperator: "is not",
	                        value: "null"
	                    },
	                    notHasEntity: {
	                        display: "Not Defined",
	                        comparisonOperator: "is",
	                        value: "null"
	                    }
	                };
	            }
	            return manyToOneOptions;
	        };
	        /* Options info end */
	        var linker = function (scope, element, attrs) {
	            /*show the user the value without % symbols as these are reserved*/
	            scope.$watch('selectedFilterProperty.criteriaValue', function (criteriaValue) {
	                if (angular.isDefined(criteriaValue)) {
	                    scope.selectedFilterProperty.criteriaValue = $filter('likeFilter')(criteriaValue);
	                }
	            });
	            scope.$watch('selectedFilterProperty', function (selectedFilterProperty) {
	                if (angular.isDefined(selectedFilterProperty)) {
	                    $log.debug('watchSelectedFilterProperty');
	                    $log.debug(scope.selectedFilterProperty);
	                    /*prepopulate if we have a comparison operator and value*/
	                    if (selectedFilterProperty === null) {
	                        return;
	                    }
	                    if (angular.isDefined(selectedFilterProperty.ormtype)) {
	                        switch (scope.selectedFilterProperty.ormtype) {
	                            case "boolean":
	                                scope.conditionOptions = getBooleanOptions();
	                                break;
	                            case "string":
	                                scope.conditionOptions = getStringOptions();
	                                scope.selectedConditionChanged = function (selectedFilterProperty) {
	                                    //scope.selectedFilterProperty.criteriaValue = '';
	                                    if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.value)) {
	                                        selectedFilterProperty.showCriteriaValue = false;
	                                    }
	                                    else {
	                                        selectedFilterProperty.showCriteriaValue = true;
	                                    }
	                                };
	                                break;
	                            case "timestamp":
	                                scope.conditionOptions = getDateOptions();
	                                scope.today = function () {
	                                    if (angular.isDefined(scope.selectedFilterProperty)) {
	                                        scope.selectedFilterProperty.criteriaRangeStart = new Date();
	                                        scope.selectedFilterProperty.criteriaRangeEnd = new Date();
	                                    }
	                                };
	                                scope.clear = function () {
	                                    scope.selectedFilterProperty.criteriaRangeStart = null;
	                                    scope.selectedFilterProperty.criteriaRangeEnd = null;
	                                };
	                                scope.openCalendarStart = function ($event) {
	                                    $event.preventDefault();
	                                    $event.stopPropagation();
	                                    scope.openedCalendarStart = true;
	                                };
	                                scope.openCalendarEnd = function ($event) {
	                                    $event.preventDefault();
	                                    $event.stopPropagation();
	                                    scope.openedCalendarEnd = true;
	                                };
	                                scope.formats = [
	                                    'dd-MMMM-yyyy',
	                                    'yyyy/MM/dd',
	                                    'dd.MM.yyyy',
	                                    'shortDate'];
	                                scope.format = scope.formats[1];
	                                scope.selectedConditionChanged = function (selectedFilterProperty) {
	                                    $log.debug('selectedConditionChanged Begin');
	                                    var selectedCondition = selectedFilterProperty.selectedCriteriaType;
	                                    //check whether condition is checking for null values in date
	                                    if (angular.isDefined(selectedCondition.dateInfo)) {
	                                        //is condition a calculation
	                                        if (selectedCondition.dateInfo.type === 'calculation') {
	                                            selectedCondition.showCriteriaStart = true;
	                                            selectedCondition.showCriteriaEnd = true;
	                                            selectedCondition.disableCriteriaStart = true;
	                                            selectedCondition.disableCriteriaEnd = true;
	                                            //if item is a calculation of an N number of measure display the measure and number input
	                                            if (angular.isUndefined(selectedCondition.dateInfo.behavior)) {
	                                                $log.debug('Not toDate');
	                                                selectedCondition.showNumberOf = true;
	                                                selectedCondition.conditionDisplay = 'Number of ' + selectedCondition.dateInfo.measureTypeDisplay + ' :';
	                                            }
	                                            else {
	                                                $log.debug('toDate');
	                                                var today = Date.parse('today');
	                                                var todayEOD = today.setHours(23, 59, 59, 999);
	                                                selectedFilterProperty.criteriaRangeEnd = todayEOD;
	                                                //get this Measure to date
	                                                switch (selectedCondition.dateInfo.measureType) {
	                                                    case 'd':
	                                                        var dateBOD = Date.parse('today').add(selectedCondition.dateInfo.measureCount).days();
	                                                        dateBOD.setHours(0, 0, 0, 0);
	                                                        selectedFilterProperty.criteriaRangeStart = dateBOD.getTime();
	                                                        break;
	                                                    case 'w':
	                                                        var firstDayOfWeek = Date.today().last().monday();
	                                                        selectedFilterProperty.criteriaRangeStart = firstDayOfWeek.getTime();
	                                                        break;
	                                                    case 'm':
	                                                        var firstDayOfMonth = Date.today().moveToFirstDayOfMonth();
	                                                        selectedFilterProperty.criteriaRangeStart = firstDayOfMonth.getTime();
	                                                        break;
	                                                    case 'q':
	                                                        var month = Date.parse('today').toString('MM');
	                                                        var year = Date.parse('today').toString('yyyy');
	                                                        var quarterMonth = (Math.floor(month / 3) * 3);
	                                                        var firstDayOfQuarter = new Date(year, quarterMonth, 1);
	                                                        selectedFilterProperty.criteriaRangeStart = firstDayOfQuarter.getTime();
	                                                        break;
	                                                    case 'y':
	                                                        var year = Date.parse('today').toString('yyyy');
	                                                        var firstDayOfYear = new Date(year, 0, 1);
	                                                        selectedFilterProperty.criteriaRangeStart = firstDayOfYear.getTime();
	                                                        break;
	                                                }
	                                            }
	                                        }
	                                        if (selectedCondition.dateInfo.type === 'range') {
	                                            selectedCondition.showCriteriaStart = true;
	                                            selectedCondition.showCriteriaEnd = true;
	                                            selectedCondition.disableCriteriaStart = false;
	                                            selectedCondition.disableCriteriaEnd = false;
	                                            selectedCondition.showNumberOf = false;
	                                        }
	                                        if (selectedCondition.dateInfo.type === 'exactDate') {
	                                            selectedCondition.showCriteriaStart = true;
	                                            selectedCondition.showCriteriaEnd = false;
	                                            selectedCondition.disableCriteriaStart = false;
	                                            selectedCondition.disableCriteriaEnd = true;
	                                            selectedCondition.showNumberOf = false;
	                                            selectedCondition.conditionDisplay = '';
	                                            selectedFilterProperty.criteriaRangeStart = new Date(selectedFilterProperty.criteriaRangeStart).setHours(0, 0, 0, 0);
	                                            selectedFilterProperty.criteriaRangeEnd = new Date(selectedFilterProperty.criteriaRangeStart).setHours(23, 59, 59, 999);
	                                        }
	                                    }
	                                    else {
	                                        selectedCondition.showCriteriaStart = false;
	                                        selectedCondition.showCriteriaEnd = false;
	                                        selectedCondition.showNumberOf = false;
	                                        selectedCondition.conditionDisplay = '';
	                                    }
	                                    $log.debug('selectedConditionChanged End');
	                                    $log.debug('selectedConditionChanged Result');
	                                    $log.debug(selectedCondition);
	                                    $log.debug(selectedFilterProperty);
	                                };
	                                scope.criteriaRangeChanged = function (selectedFilterProperty) {
	                                    var selectedCondition = selectedFilterProperty.selectedCriteriaType;
	                                    if (selectedCondition.dateInfo.type === 'calculation') {
	                                        var measureCount = selectedFilterProperty.criteriaNumberOf;
	                                        switch (selectedCondition.dateInfo.measureType) {
	                                            case 'h':
	                                                var today = Date.parse('today');
	                                                selectedFilterProperty.criteriaRangeEnd = today.getTime();
	                                                var todayXHoursAgo = Date.parse('today').add(-(measureCount)).hours();
	                                                selectedFilterProperty.criteriaRangeStart = todayXHoursAgo.getTime();
	                                                break;
	                                            case 'd':
	                                                var lastFullDay = Date.parse('today').add(-1).days();
	                                                lastFullDay.setHours(23, 59, 59, 999);
	                                                selectedFilterProperty.criteriaRangeEnd = lastFullDay.getTime();
	                                                var lastXDaysAgo = Date.parse('today').add(-(measureCount)).days();
	                                                selectedFilterProperty.criteriaRangeStart = lastXDaysAgo.getTime();
	                                                break;
	                                            case 'w':
	                                                var lastFullWeekEnd = Date.today().last().sunday();
	                                                lastFullWeekEnd.setHours(23, 59, 59, 999);
	                                                selectedFilterProperty.criteriaRangeEnd = lastFullWeekEnd.getTime();
	                                                var lastXWeeksAgo = Date.today().last().sunday().add(-(measureCount)).weeks();
	                                                selectedFilterProperty.criteriaRangeStart = lastXWeeksAgo.getTime();
	                                                break;
	                                            case 'm':
	                                                var lastFullMonthEnd = Date.today().add(-1).months().moveToLastDayOfMonth();
	                                                lastFullMonthEnd.setHours(23, 59, 59, 999);
	                                                selectedFilterProperty.criteriaRangeEnd = lastFullMonthEnd.getTime();
	                                                var lastXMonthsAgo = Date.today().add(-1).months().moveToLastDayOfMonth().add(-(measureCount)).months();
	                                                selectedFilterProperty.criteriaRangeStart = lastXMonthsAgo.getTime();
	                                                break;
	                                            case 'q':
	                                                var currentQuarter = Math.floor((Date.parse('today').getMonth() / 3));
	                                                var firstDayOfCurrentQuarter = new Date(Date.parse('today').getFullYear(), currentQuarter * 3, 1);
	                                                var lastDayOfPreviousQuarter = firstDayOfCurrentQuarter.add(-1).days();
	                                                lastDayOfPreviousQuarter.setHours(23, 59, 59, 999);
	                                                selectedFilterProperty.criteriaRangeEnd = lastDayOfPreviousQuarter.getTime();
	                                                var lastXQuartersAgo = new Date(Date.parse('today').getFullYear(), currentQuarter * 3, 1);
	                                                lastXQuartersAgo.add(-(measureCount * 3)).months();
	                                                selectedFilterProperty.criteriaRangeStart = lastXQuartersAgo.getTime();
	                                                break;
	                                            case 'y':
	                                                var lastFullYearEnd = new Date(new Date().getFullYear(), 11, 31).add(-1).years();
	                                                lastFullYearEnd.setHours(23, 59, 59, 999);
	                                                selectedFilterProperty.criteriaRangeEnd = lastFullYearEnd.getTime();
	                                                var lastXYearsAgo = new Date(new Date().getFullYear(), 11, 31).add(-(measureCount) - 1).years();
	                                                selectedFilterProperty.criteriaRangeStart = lastXYearsAgo.getTime();
	                                                break;
	                                        }
	                                    }
	                                    if (selectedCondition.dateInfo.type === 'exactDate') {
	                                        selectedFilterProperty.criteriaRangeStart = selectedFilterProperty.criteriaRangeStart.setHours(0, 0, 0, 0);
	                                        selectedFilterProperty.criteriaRangeEnd = new Date(selectedFilterProperty.criteriaRangeStart).setHours(23, 59, 59, 999);
	                                    }
	                                    if (selectedCondition.dateInfo.type === 'range') {
	                                        if (angular.isDefined(selectedFilterProperty.criteriaRangeStart)) {
	                                            selectedFilterProperty.criteriaRangeStart = new Date(selectedFilterProperty.criteriaRangeStart).setHours(0, 0, 0, 0);
	                                        }
	                                        if (angular.isDefined(selectedFilterProperty.criteriaRangeEnd)) {
	                                            selectedFilterProperty.criteriaRangeEnd = new Date(selectedFilterProperty.criteriaRangeEnd).setHours(23, 59, 59, 999);
	                                        }
	                                    }
	                                    $log.debug('criteriaRangeChanged');
	                                    $log.debug(selectedCondition);
	                                    $log.debug(selectedFilterProperty);
	                                };
	                                break;
	                            case "big_decimal":
	                            case "integer":
	                            case "float":
	                                scope.conditionOptions = getNumberOptions();
	                                scope.criteriaRangeChanged = function (selectedFilterProperty) {
	                                    var selectedCondition = selectedFilterProperty.selectedCriteriaType;
	                                };
	                                scope.selectedConditionChanged = function (selectedFilterProperty) {
	                                    selectedFilterProperty.showCriteriaValue = true;
	                                    //check whether the type is a range
	                                    if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.type)) {
	                                        selectedFilterProperty.showCriteriaValue = false;
	                                        selectedFilterProperty.selectedCriteriaType.showCriteriaStart = true;
	                                        selectedFilterProperty.selectedCriteriaType.showCriteriaEnd = true;
	                                    }
	                                    //is null or is not null
	                                    if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.value)) {
	                                        selectedFilterProperty.showCriteriaValue = false;
	                                    }
	                                };
	                                break;
	                        }
	                    }
	                    if (angular.isDefined(scope.selectedFilterProperty.fieldtype)) {
	                        switch (scope.selectedFilterProperty.fieldtype) {
	                            case "many-to-one":
	                                scope.conditionOptions = getManyToOneOptions(scope.comparisonType);
	                                $log.debug('many-to-one');
	                                $log.debug(scope.selectedFilterProperty);
	                                $log.debug(scope.filterPropertiesList);
	                                if (angular.isUndefined(scope.filterPropertiesList[scope.selectedFilterProperty.propertyIdentifier])) {
	                                    var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName(scope.selectedFilterProperty.cfc);
	                                    filterPropertiesPromise.then(function (value) {
	                                        scope.filterPropertiesList[scope.selectedFilterProperty.propertyIdentifier] = value;
	                                        metadataService.formatPropertiesList(scope.filterPropertiesList[scope.selectedFilterProperty.propertyIdentifier], scope.selectedFilterProperty.propertyIdentifier);
	                                    }, function (reason) {
	                                    });
	                                }
	                                break;
	                            case "many-to-many":
	                            case "one-to-many":
	                                scope.manyToManyOptions = getManyToManyOptions();
	                                scope.oneToManyOptions = getOneToManyOptions();
	                                var existingCollectionsPromise = $slatwall.getExistingCollectionsByBaseEntity(selectedFilterProperty.cfc);
	                                existingCollectionsPromise.then(function (value) {
	                                    scope.collectionOptions = value.data;
	                                    if (angular.isDefined(scope.workflowCondition.collectionID)) {
	                                        for (var i in scope.collectionOptions) {
	                                            if (scope.collectionOptions[i].collectionID === scope.workflowCondition.collectionID) {
	                                                scope.selectedFilterProperty.selectedCollection = scope.collectionOptions[i];
	                                            }
	                                        }
	                                        for (var i in scope.oneToManyOptions) {
	                                            if (scope.oneToManyOptions[i].comparisonOperator === scope.workflowCondition.criteria) {
	                                                scope.selectedFilterProperty.selectedCriteriaType = scope.oneToManyOptions[i];
	                                            }
	                                        }
	                                    }
	                                });
	                                break;
	                        }
	                    }
	                    $log.debug('workflowCondition');
	                    $log.debug(scope.workflowCondition);
	                    angular.forEach(scope.conditionOptions, function (conditionOption) {
	                        if (conditionOption.display == scope.workflowCondition.conditionDisplay) {
	                            scope.selectedFilterProperty.selectedCriteriaType = conditionOption;
	                            scope.selectedFilterProperty.criteriaValue = scope.workflowCondition.value;
	                            if (angular.isDefined(scope.selectedFilterProperty.selectedCriteriaType.dateInfo)
	                                && angular.isDefined(scope.workflowCondition.value)
	                                && scope.workflowCondition.value.length) {
	                                var dateRangeArray = scope.workflowCondition.value.split("-");
	                                scope.selectedFilterProperty.criteriaRangeStart = new Date(parseInt(dateRangeArray[0]));
	                                scope.selectedFilterProperty.criteriaRangeEnd = new Date(parseInt(dateRangeArray[1]));
	                            }
	                            if (angular.isDefined(scope.workflowCondition.criteriaNumberOf)) {
	                                scope.selectedFilterProperty.criteriaNumberOf = scope.workflowCondition.criteriaNumberOf;
	                            }
	                            if (angular.isDefined(scope.selectedConditionChanged)) {
	                                scope.selectedConditionChanged(scope.selectedFilterProperty);
	                            }
	                        }
	                    });
	                    $log.debug('templateLoader');
	                    $log.debug(selectedFilterProperty);
	                    var templateLoader = getTemplate(selectedFilterProperty);
	                    var promise = templateLoader.success(function (html) {
	                        element.html(html);
	                        $compile(element.contents())(scope);
	                    });
	                }
	            });
	            scope.selectedCriteriaChanged = function (selectedCriteria) {
	                $log.debug(selectedCriteria);
	                //update breadcrumbs as array of filterpropertylist keys
	                $log.debug(scope.selectedFilterProperty);
	                var breadCrumb = {
	                    entityAlias: scope.selectedFilterProperty.name,
	                    cfc: scope.selectedFilterProperty.cfc,
	                    propertyIdentifier: scope.selectedFilterProperty.propertyIdentifier
	                };
	                scope.workflowCondition.breadCrumbs.push(breadCrumb);
	                //populate editfilterinfo with the current level of the filter property we are inspecting by pointing to the new scope key
	                scope.selectedFilterPropertyChanged({ selectedFilterProperty: scope.selectedFilterProperty.selectedCriteriaType });
	                //update criteria to display the condition of the new critera we have selected
	            };
	        };
	        return {
	            restrict: 'A',
	            scope: {
	                workflowCondition: "=",
	                selectedFilterProperty: "=",
	                filterPropertiesList: "=",
	                selectedFilterPropertyChanged: "&"
	            },
	            link: linker
	        };
	    }
	    SWConditionCriteria.Factory = function () {
	        var directive = function ($http, $compile, $templateCache, $log, $slatwall, $filter, workflowPartialsPath, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	            return new SWConditionCriteria($http, $compile, $templateCache, $log, $slatwall, $filter, workflowPartialsPath, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$http',
	            '$compile',
	            '$templateCache',
	            '$log',
	            '$slatwall',
	            '$filter',
	            'workflowPartialsPath',
	            'collectionPartialsPath',
	            'collectionService',
	            'metadataService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWConditionCriteria;
	})();
	exports.SWConditionCriteria = SWConditionCriteria;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWCriteria = (function () {
	    function SWCriteria($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            scope: {
	                filterItem: "=",
	                selectedFilterProperty: "=",
	                filterPropertiesList: "=",
	                selectedFilterPropertyChanged: "&",
	                comparisonType: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + 'criteria.html',
	            link: function (scope, element, attrs) {
	            }
	        };
	    }
	    SWCriteria.Factory = function () {
	        var directive = function ($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	            return new SWCriteria($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            '$filter',
	            'collectionPartialsPath',
	            'collectionService',
	            'metadataService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWCriteria;
	})();
	exports.SWCriteria = SWCriteria;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWCriteriaBoolean = (function () {
	    function SWCriteriaBoolean($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + 'criteriaboolean.html',
	            link: function (scope, element, attrs) {
	                var getBooleanOptions = function (type) {
	                    if (angular.isUndefined(type)) {
	                        type = 'filter';
	                    }
	                    var booleanOptions = [];
	                    if (type === 'filter') {
	                        booleanOptions = [
	                            {
	                                display: "True",
	                                comparisonOperator: "=",
	                                value: "True"
	                            },
	                            {
	                                display: "False",
	                                comparisonOperator: "=",
	                                value: "False"
	                            },
	                            {
	                                display: "Defined",
	                                comparisonOperator: "is not",
	                                value: "null"
	                            },
	                            {
	                                display: "Not Defined",
	                                comparisonOperator: "is",
	                                value: "null"
	                            }
	                        ];
	                    }
	                    else if (type === 'condition') {
	                        booleanOptions = [
	                            {
	                                display: "True",
	                                comparisonOperator: "eq",
	                                value: "True"
	                            },
	                            {
	                                display: "False",
	                                comparisonOperator: "eq",
	                                value: "False"
	                            },
	                            {
	                                display: "Defined",
	                                comparisonOperator: "null",
	                                value: "False"
	                            },
	                            {
	                                display: "Not Defined",
	                                comparisonOperator: "null",
	                                value: "True"
	                            }
	                        ];
	                    }
	                    return booleanOptions;
	                };
	                scope.conditionOptions = getBooleanOptions(scope.comparisonType);
	                angular.forEach(scope.conditionOptions, function (conditionOption) {
	                    if (conditionOption.display == scope.filterItem.conditionDisplay) {
	                        scope.selectedFilterProperty.selectedCriteriaType = conditionOption;
	                        scope.selectedFilterProperty.criteriaValue = scope.filterItem.value;
	                        if (angular.isDefined(scope.selectedConditionChanged)) {
	                            scope.selectedConditionChanged(scope.selectedFilterProperty);
	                        }
	                    }
	                });
	            }
	        };
	    }
	    SWCriteriaBoolean.Factory = function () {
	        var directive = function ($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	            return new SWCriteriaBoolean($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            '$filter',
	            'collectionPartialsPath',
	            'collectionService',
	            'metadataService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWCriteriaBoolean;
	})();
	exports.SWCriteriaBoolean = SWCriteriaBoolean;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWCriteriaManyToMany = (function () {
	    function SWCriteriaManyToMany($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, dialogService, observerService, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + 'criteriamanytomany.html',
	            link: function (scope, element, attrs) {
	                scope.data = {};
	                scope.collectionOptionsOpen = false;
	                scope.toggleCollectionOptions = function (flag) {
	                    scope.collectionOptionsOpen = (!angular.isUndefined(flag)) ? flag : !scope.collectionOptionsOpen;
	                };
	                scope.selectCollection = function (collection) {
	                    scope.toggleCollectionOptions();
	                    scope.selectedFilterProperty.selectedCollection = collection;
	                };
	                scope.cleanSelection = function () {
	                    scope.toggleCollectionOptions(false);
	                    scope.data.collectionName = "";
	                    scope.selectedFilterProperty.selectedCollection = null;
	                };
	                var getManyToManyOptions = function (type) {
	                    if (angular.isUndefined(type)) {
	                        type = 'filter';
	                    }
	                    $log.debug('type', type);
	                    var manyToManyOptions = [];
	                    if (type == 'filter') {
	                        manyToManyOptions = [
	                            {
	                                display: "All Exist In Collection",
	                                comparisonOperator: "All"
	                            },
	                            {
	                                display: "None Exist In Collection",
	                                comparisonOperator: "None"
	                            },
	                            {
	                                display: "Some Exist In Collection",
	                                comparisonOperator: "One"
	                            },
	                            {
	                                display: "Empty",
	                                comparisonOperator: "is",
	                                value: "null"
	                            },
	                            {
	                                display: "Not Empty",
	                                comparisonOperator: "is not",
	                                value: "null"
	                            }
	                        ];
	                    }
	                    else if (type === 'condition') {
	                        manyToManyOptions = [];
	                    }
	                    return manyToManyOptions;
	                };
	                scope.manyToManyOptions = getManyToManyOptions(scope.comparisonType);
	                var existingCollectionsPromise = $slatwall.getExistingCollectionsByBaseEntity(scope.selectedFilterProperty.cfc);
	                existingCollectionsPromise.then(function (value) {
	                    scope.collectionOptions = value.data;
	                    if (angular.isDefined(scope.filterItem.collectionID)) {
	                        for (var i in scope.collectionOptions) {
	                            if (scope.collectionOptions[i].collectionID === scope.filterItem.collectionID) {
	                                scope.selectedFilterProperty.selectedCollection = scope.collectionOptions[i];
	                            }
	                        }
	                        for (var i in scope.manyToManyOptions) {
	                            if (scope.manyToManyOptions[i].comparisonOperator === scope.filterItem.criteria) {
	                                scope.selectedFilterProperty.selectedCriteriaType = scope.manyToManyOptions[i];
	                            }
	                        }
	                    }
	                });
	                function populateUI(collection) {
	                    scope.collectionOptions.push(collection);
	                    scope.selectedFilterProperty.selectedCollection = collection;
	                    scope.selectedFilterProperty.selectedCriteriaType = scope.manyToManyOptions[2];
	                }
	                observerService.attach(populateUI, 'addCollection', 'addCollection');
	                scope.selectedCriteriaChanged = function (selectedCriteria) {
	                    $log.debug(selectedCriteria);
	                    //update breadcrumbs as array of filterpropertylist keys
	                    $log.debug(scope.selectedFilterProperty);
	                    var breadCrumb = {
	                        entityAlias: scope.selectedFilterProperty.name,
	                        cfc: scope.selectedFilterProperty.cfc,
	                        propertyIdentifier: scope.selectedFilterProperty.propertyIdentifier,
	                        rbKey: $slatwall.getRBKey('entity.' + scope.selectedFilterProperty.cfc.replace('_', ''))
	                    };
	                    scope.filterItem.breadCrumbs.push(breadCrumb);
	                    //populate editfilterinfo with the current level of the filter property we are inspecting by pointing to the new scope key
	                    scope.selectedFilterPropertyChanged({ selectedFilterProperty: scope.selectedFilterProperty.selectedCriteriaType });
	                    //update criteria to display the condition of the new critera we have selected
	                };
	                scope.addNewCollection = function () {
	                    dialogService.addPageDialog('collection/criteriacreatecollection', {
	                        entityName: scope.selectedFilterProperty.cfc,
	                        collectionName: scope.data.collectionName
	                    });
	                    scope.cleanSelection();
	                };
	                scope.viewSelectedCollection = function () {
	                    dialogService.addPageDialog('collection/criteriacreatecollection', {
	                        entityName: 'collection',
	                        entityId: scope.selectedFilterProperty.selectedCollection.collectionID
	                    });
	                };
	            }
	        };
	    }
	    SWCriteriaManyToMany.Factory = function () {
	        var directive = function ($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, dialogService, observerService, pathBuilderConfig) {
	            return new SWCriteriaManyToMany($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, dialogService, observerService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            '$filter',
	            'collectionPartialsPath',
	            'collectionService',
	            'metadataService',
	            'dialogService',
	            'observerService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWCriteriaManyToMany;
	})();
	exports.SWCriteriaManyToMany = SWCriteriaManyToMany;


/***/ },
/* 83 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWCriteriaManyToOne = (function () {
	    function SWCriteriaManyToOne($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + 'criteriamanytoone.html',
	            link: function (scope, element, attrs) {
	                var getManyToOneOptions = function () {
	                    var manyToOneOptions = {
	                        drillEntity: {},
	                        hasEntity: {
	                            display: "Defined",
	                            comparisonOperator: "is not",
	                            value: "null"
	                        },
	                        notHasEntity: {
	                            display: "Not Defined",
	                            comparisonOperator: "is",
	                            value: "null"
	                        }
	                    };
	                    return manyToOneOptions;
	                };
	                scope.manyToOneOptions = getManyToOneOptions();
	                scope.conditionOptions = getManyToOneOptions();
	                $log.debug('many-to-one');
	                $log.debug(scope.selectedFilterProperty);
	                $log.debug(scope.filterPropertiesList);
	                scope.$watch('selectedFilterProperty', function (selectedFilterProperty) {
	                    if (angular.isUndefined(scope.filterPropertiesList[scope.selectedFilterProperty.propertyIdentifier])) {
	                        var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName(selectedFilterProperty.cfc);
	                        filterPropertiesPromise.then(function (value) {
	                            scope.filterPropertiesList[scope.selectedFilterProperty.propertyIdentifier] = value;
	                            metadataService.formatPropertiesList(scope.filterPropertiesList[scope.selectedFilterProperty.propertyIdentifier], scope.selectedFilterProperty.propertyIdentifier);
	                        }, function (reason) {
	                        });
	                    }
	                    scope.selectedCriteriaChanged = function (selectedCriteria) {
	                        $log.debug(selectedCriteria);
	                        $log.debug('changed');
	                        //update breadcrumbs as array of filterpropertylist keys
	                        $log.debug(scope.selectedFilterProperty);
	                        var breadCrumb = {
	                            entityAlias: scope.selectedFilterProperty.name,
	                            cfc: scope.selectedFilterProperty.cfc,
	                            propertyIdentifier: scope.selectedFilterProperty.propertyIdentifier,
	                            rbKey: $slatwall.getRBKey('entity.' + scope.selectedFilterProperty.cfc.replace('_', ''))
	                        };
	                        $log.debug('breadcrumb');
	                        $log.debug(breadCrumb);
	                        $log.debug(scope.filterItem.breadCrumbs);
	                        scope.filterItem.breadCrumbs.push(breadCrumb);
	                        //populate editfilterinfo with the current level of the filter property we are inspecting by pointing to the new scope key
	                        scope.selectedFilterPropertyChanged({ selectedFilterProperty: scope.selectedFilterProperty.selectedCriteriaType });
	                        //update criteria to display the condition of the new critera we have selected
	                        $log.debug(scope.selectedFilterProperty);
	                    };
	                });
	            }
	        };
	    }
	    SWCriteriaManyToOne.Factory = function () {
	        var directive = function ($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	            return new SWCriteriaManyToOne($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            '$filter',
	            'collectionPartialsPath',
	            'collectionService',
	            'metadataService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWCriteriaManyToOne;
	})();
	exports.SWCriteriaManyToOne = SWCriteriaManyToOne;
	// 'use strict';
	// angular.module('slatwalladmin')
	// .directive('swCriteriaManyToOne', [
	// 	'$log',
	// 	'$slatwall',
	// 	'$filter',
	// 	'collectionPartialsPath',
	// 	'collectionService',
	// 	'metadataService',
	// 	function(
	// 		$log,
	// 		$slatwall,
	// 		$filter,
	// 		collectionPartialsPath,
	// 		collectionService,
	// 		metadataService
	// 	){
	// 		return {
	// 			restrict: 'E',
	// 			templateUrl:collectionPartialsPath+'criteriamanytoone.html',
	// 			link: function(scope, element, attrs){
	// 				var getManyToOneOptions = function(){
	// 			    	var manyToOneOptions = {
	// 			            drillEntity:{},
	// 						hasEntity:{
	// 							display:"Defined",
	// 							comparisonOperator:"is not",
	// 							value:"null"
	// 						},
	// 						notHasEntity:{
	// 							display:"Not Defined",
	// 							comparisonOperator:"is",
	// 							value:"null"
	// 						}
	// 			    	};
	// 			    	return manyToOneOptions;
	// 			    };
	// 			    scope.manyToOneOptions = getManyToOneOptions();
	// 			    scope.conditionOptions = getManyToOneOptions();
	// 				$log.debug('many-to-one');
	// 				$log.debug(scope.selectedFilterProperty);
	// 				$log.debug(scope.filterPropertiesList);
	// 				scope.$watch('selectedFilterProperty',function(selectedFilterProperty){
	// 					if(angular.isUndefined(scope.filterPropertiesList[scope.selectedFilterProperty.propertyIdentifier])){
	// 						var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName(selectedFilterProperty.cfc);
	// 						filterPropertiesPromise.then(function(value){
	// 							scope.filterPropertiesList[scope.selectedFilterProperty.propertyIdentifier] = value;
	// 							metadataService.formatPropertiesList(scope.filterPropertiesList[scope.selectedFilterProperty.propertyIdentifier],scope.selectedFilterProperty.propertyIdentifier);
	// 						}, function(reason){
	// 						});
	// 					}
	// 					scope.selectedCriteriaChanged = function(selectedCriteria){
	// 						$log.debug(selectedCriteria);
	// 						$log.debug('changed');
	// 						//update breadcrumbs as array of filterpropertylist keys
	// 						$log.debug(scope.selectedFilterProperty);
	// 						var breadCrumb = {
	// 								entityAlias:scope.selectedFilterProperty.name,
	// 								cfc:scope.selectedFilterProperty.cfc,
	// 								propertyIdentifier:scope.selectedFilterProperty.propertyIdentifier,
	// 								rbKey:$slatwall.getRBKey('entity.'+scope.selectedFilterProperty.cfc.replace('_',''))
	// 						};
	// 						$log.debug('breadcrumb');
	// 						$log.debug(breadCrumb);
	// 						$log.debug(scope.filterItem.breadCrumbs);
	// 						scope.filterItem.breadCrumbs.push(breadCrumb);
	// 						//populate editfilterinfo with the current level of the filter property we are inspecting by pointing to the new scope key
	// 						scope.selectedFilterPropertyChanged({selectedFilterProperty:scope.selectedFilterProperty.selectedCriteriaType});
	// 						//update criteria to display the condition of the new critera we have selected
	// 						$log.debug(scope.selectedFilterProperty);
	// 					};
	// 				});
	// 			}
	// 		};
	// 	}
	// ]);


/***/ },
/* 84 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWCriteriaNumber = (function () {
	    function SWCriteriaNumber($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + 'criterianumber.html',
	            link: function (scope, element, attrs) {
	                var getNumberOptions = function (type) {
	                    if (angular.isUndefined(type)) {
	                        type = 'filter';
	                    }
	                    var numberOptions = [];
	                    if (type === 'filter') {
	                        numberOptions = [
	                            {
	                                display: "Equals",
	                                comparisonOperator: "="
	                            },
	                            {
	                                display: "Doesn't Equal",
	                                comparisonOperator: "<>"
	                            },
	                            {
	                                display: "In Range",
	                                comparisonOperator: "between",
	                                type: "range"
	                            },
	                            {
	                                display: "Not In Range",
	                                comparisonOperator: "not between",
	                                type: "range"
	                            },
	                            {
	                                display: "Greater Than",
	                                comparisonOperator: ">"
	                            },
	                            {
	                                display: "Greater Than Or Equal",
	                                comparisonOperator: ">="
	                            },
	                            {
	                                display: "Less Than",
	                                comparisonOperator: "<"
	                            },
	                            {
	                                display: "Less Than Or Equal",
	                                comparisonOperator: "<="
	                            },
	                            {
	                                display: "In List",
	                                comparisonOperator: "in"
	                            },
	                            {
	                                display: "Not In List",
	                                comparisonOperator: "not in"
	                            },
	                            {
	                                display: "Defined",
	                                comparisonOperator: "is not",
	                                value: "null"
	                            },
	                            {
	                                display: "Not Defined",
	                                comparisonOperator: "is",
	                                value: "null"
	                            }
	                        ];
	                    }
	                    else if (type === 'condition') {
	                        numberOptions = [
	                            {
	                                display: "Equals",
	                                comparisonOperator: "eq"
	                            },
	                            {
	                                display: "Doesn't Equal",
	                                comparisonOperator: "neq"
	                            },
	                            {
	                                display: "Defined",
	                                comparisonOperator: "null",
	                                value: "False"
	                            },
	                            {
	                                display: "Not Defined",
	                                comparisonOperator: "null",
	                                value: "True"
	                            }
	                        ];
	                    }
	                    return numberOptions;
	                };
	                scope.$watch('selectedFilterProperty.criteriaValue', function (criteriaValue) {
	                    if (angular.isDefined(criteriaValue)) {
	                        scope.selectedFilterProperty.criteriaValue = criteriaValue;
	                        $log.debug(scope.selectedFilterProperty);
	                    }
	                });
	                scope.conditionOptions = getNumberOptions(scope.comparisonType);
	                scope.criteriaRangeChanged = function (selectedFilterProperty) {
	                    var selectedCondition = selectedFilterProperty.selectedCriteriaType;
	                };
	                scope.selectedConditionChanged = function (selectedFilterProperty) {
	                    selectedFilterProperty.showCriteriaValue = true;
	                    //check whether the type is a range
	                    if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.type)) {
	                        selectedFilterProperty.showCriteriaValue = false;
	                        selectedFilterProperty.selectedCriteriaType.showCriteriaStart = true;
	                        selectedFilterProperty.selectedCriteriaType.showCriteriaEnd = true;
	                    }
	                    //is null or is not null
	                    if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.value)) {
	                        selectedFilterProperty.showCriteriaValue = false;
	                    }
	                };
	                angular.forEach(scope.conditionOptions, function (conditionOption) {
	                    $log.debug('populate');
	                    if (conditionOption.display == scope.filterItem.conditionDisplay) {
	                        scope.selectedFilterProperty.selectedCriteriaType = conditionOption;
	                        $log.debug(scope.filterItem);
	                        if (scope.filterItem.comparisonOperator === 'between' || scope.filterItem.comparisonOperator === 'not between') {
	                            var criteriaRangeArray = scope.filterItem.value.split('-');
	                            $log.debug(criteriaRangeArray);
	                            scope.selectedFilterProperty.criteriaRangeStart = parseInt(criteriaRangeArray[0]);
	                            scope.selectedFilterProperty.criteriaRangeEnd = parseInt(criteriaRangeArray[1]);
	                        }
	                        else {
	                            scope.selectedFilterProperty.criteriaValue = scope.filterItem.value;
	                        }
	                        if (angular.isDefined(scope.filterItem.criteriaNumberOf)) {
	                            scope.selectedFilterProperty.criteriaNumberOf = scope.filterItem.criteriaNumberOf;
	                        }
	                        if (angular.isDefined(scope.selectedConditionChanged)) {
	                            scope.selectedConditionChanged(scope.selectedFilterProperty);
	                        }
	                    }
	                });
	            }
	        };
	    }
	    SWCriteriaNumber.Factory = function () {
	        var directive = function ($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	            return new SWCriteriaNumber($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            '$filter',
	            'collectionPartialsPath',
	            'collectionService',
	            'metadataService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWCriteriaNumber;
	})();
	exports.SWCriteriaNumber = SWCriteriaNumber;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWCriteriaOneToMany = (function () {
	    function SWCriteriaOneToMany($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, dialogService, observerService, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + 'criteriaonetomany.html',
	            link: function (scope, element, attrs) {
	                scope.data = {};
	                scope.collectionOptionsOpen = false;
	                scope.toggleCollectionOptions = function (flag) {
	                    scope.collectionOptionsOpen = (!angular.isUndefined(flag)) ? flag : !scope.collectionOptionsOpen;
	                };
	                scope.selectCollection = function (collection) {
	                    scope.toggleCollectionOptions();
	                    scope.selectedFilterProperty.selectedCollection = collection;
	                };
	                scope.cleanSelection = function () {
	                    scope.toggleCollectionOptions(false);
	                    scope.data.collectionName = "";
	                    scope.selectedFilterProperty.selectedCollection = null;
	                };
	                var getOneToManyOptions = function (type) {
	                    if (angular.isUndefined(type)) {
	                        type = 'filter';
	                    }
	                    var oneToManyOptions = [];
	                    if (type == 'filter') {
	                        oneToManyOptions = [
	                            {
	                                display: "All Exist In Collection",
	                                comparisonOperator: "All"
	                            },
	                            {
	                                display: "None Exist In Collection",
	                                comparisonOperator: "None"
	                            },
	                            {
	                                display: "Some Exist In Collection",
	                                comparisonOperator: "One"
	                            }
	                        ];
	                    }
	                    else if (type === 'condition') {
	                        oneToManyOptions = [];
	                    }
	                    return oneToManyOptions;
	                };
	                $log.debug('onetomany');
	                $log.debug(scope.selectedFilterProperty);
	                scope.oneToManyOptions = getOneToManyOptions(scope.comparisonType);
	                var existingCollectionsPromise = $slatwall.getExistingCollectionsByBaseEntity(scope.selectedFilterProperty.cfc);
	                existingCollectionsPromise.then(function (value) {
	                    scope.collectionOptions = value.data;
	                    if (angular.isDefined(scope.filterItem.collectionID)) {
	                        for (var i in scope.collectionOptions) {
	                            if (scope.collectionOptions[i].collectionID === scope.filterItem.collectionID) {
	                                scope.selectedFilterProperty.selectedCollection = scope.collectionOptions[i];
	                            }
	                        }
	                        for (var i in scope.oneToManyOptions) {
	                            if (scope.oneToManyOptions[i].comparisonOperator === scope.filterItem.criteria) {
	                                scope.selectedFilterProperty.selectedCriteriaType = scope.oneToManyOptions[i];
	                            }
	                        }
	                    }
	                });
	                function populateUI(collection) {
	                    scope.collectionOptions.push(collection);
	                    scope.selectedFilterProperty.selectedCollection = collection;
	                    scope.selectedFilterProperty.selectedCriteriaType = scope.oneToManyOptions[2];
	                }
	                observerService.attach(populateUI, 'addCollection', 'addCollection');
	                scope.selectedCriteriaChanged = function (selectedCriteria) {
	                    $log.debug(selectedCriteria);
	                    //update breadcrumbs as array of filterpropertylist keys
	                    $log.debug(scope.selectedFilterProperty);
	                    var breadCrumb = {
	                        entityAlias: scope.selectedFilterProperty.name,
	                        cfc: scope.selectedFilterProperty.cfc,
	                        propertyIdentifier: scope.selectedFilterProperty.propertyIdentifier,
	                        rbKey: $slatwall.getRBKey('entity.' + scope.selectedFilterProperty.cfc.replace('_', '')),
	                        filterProperty: scope.selectedFilterProperty
	                    };
	                    scope.filterItem.breadCrumbs.push(breadCrumb);
	                    $log.debug('criteriaChanged');
	                    //$log.debug(selectedFilterPropertyChanged);
	                    $log.debug(scope.selectedFilterProperty);
	                    //populate editfilterinfo with the current level of the filter property we are inspecting by pointing to the new scope key
	                    scope.selectedFilterPropertyChanged({ selectedFilterProperty: scope.selectedFilterProperty.selectedCriteriaType });
	                    //update criteria to display the condition of the new critera we have selected
	                };
	                scope.addNewCollection = function () {
	                    dialogService.addPageDialog('collection/criteriacreatecollection', {
	                        entityName: scope.selectedFilterProperty.cfc,
	                        collectionName: scope.data.collectionName
	                    });
	                    scope.cleanSelection();
	                };
	                scope.viewSelectedCollection = function () {
	                    scope.toggleCollectionOptions();
	                    dialogService.addPageDialog('collection/criteriacreatecollection', {
	                        entityName: 'collection',
	                        entityId: scope.selectedFilterProperty.selectedCollection.collectionID
	                    });
	                };
	            }
	        };
	    }
	    SWCriteriaOneToMany.Factory = function () {
	        var directive = function ($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, dialogService, observerService, pathBuilderConfig) {
	            return new SWCriteriaOneToMany($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, dialogService, observerService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            '$filter',
	            'collectionPartialsPath',
	            'collectionService',
	            'metadataService',
	            'dialogService',
	            'observerService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWCriteriaOneToMany;
	})();
	exports.SWCriteriaOneToMany = SWCriteriaOneToMany;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWCriteriaString = (function () {
	    function SWCriteriaString($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + 'criteriastring.html',
	            link: function (scope, element, attrs) {
	                var getStringOptions = function (type) {
	                    if (angular.isUndefined(type)) {
	                        type = 'filter';
	                    }
	                    var stringOptions = [];
	                    if (type === 'filter') {
	                        stringOptions = [
	                            {
	                                display: "Equals",
	                                comparisonOperator: "="
	                            },
	                            {
	                                display: "Doesn't Equal",
	                                comparisonOperator: "<>"
	                            },
	                            {
	                                display: "Contains",
	                                comparisonOperator: "like",
	                                pattern: "%w%"
	                            },
	                            {
	                                display: "Doesn't Contain",
	                                comparisonOperator: "not like",
	                                pattern: "%w%"
	                            },
	                            {
	                                display: "Starts With",
	                                comparisonOperator: "like",
	                                pattern: "w%"
	                            },
	                            {
	                                display: "Doesn't Start With",
	                                comparisonOperator: "not like",
	                                pattern: "w%"
	                            },
	                            {
	                                display: "Ends With",
	                                comparisonOperator: "like",
	                                pattern: "%w"
	                            },
	                            {
	                                display: "Doesn't End With",
	                                comparisonOperator: "not like",
	                                pattern: "%w"
	                            },
	                            {
	                                display: "In List",
	                                comparisonOperator: "in"
	                            },
	                            {
	                                display: "Not In List",
	                                comparisonOperator: "not in"
	                            },
	                            {
	                                display: "Defined",
	                                comparisonOperator: "is not",
	                                value: "null"
	                            },
	                            {
	                                display: "Not Defined",
	                                comparisonOperator: "is",
	                                value: "null"
	                            }
	                        ];
	                    }
	                    else if (type === 'condition') {
	                        stringOptions = [
	                            {
	                                display: "Equals",
	                                comparisonOperator: "eq"
	                            },
	                            {
	                                display: "Doesn't Equal",
	                                comparisonOperator: "neq"
	                            },
	                            {
	                                display: "Defined",
	                                comparisonOperator: "null",
	                                value: "False"
	                            },
	                            {
	                                display: "Not Defined",
	                                comparisonOperator: "null",
	                                value: "True"
	                            }
	                        ];
	                    }
	                    return stringOptions;
	                };
	                //initialize values
	                scope.conditionOptions = getStringOptions(scope.comparisonType);
	                scope.inListArray = [];
	                if (angular.isDefined(scope.filterItem.value)) {
	                    scope.inListArray = scope.filterItem.value.split(',');
	                }
	                scope.newListItem = '';
	                //declare functions
	                scope.addToValueInListFormat = function (inListItem) {
	                    // Adds item into array
	                    scope.inListArray.push(inListItem);
	                    //set value field to the user generated list
	                    scope.filterItem.value = scope.inListArray.toString();
	                    scope.filterItem.displayValue = scope.inListArray.toString().replace(/,/g, ', ');
	                    scope.newListItem = '';
	                };
	                scope.removelistItem = function (argListIndex) {
	                    scope.inListArray.splice(argListIndex, 1);
	                    scope.filterItem.value = scope.inListArray.toString();
	                    scope.filterItem.displayValue = scope.inListArray.toString().replace(/,/g, ', ');
	                };
	                scope.clearField = function () {
	                    scope.newListItem = '';
	                };
	                scope.selectedConditionChanged = function (selectedFilterProperty) {
	                    //scope.selectedFilterProperty.criteriaValue = '';
	                    if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.value)) {
	                        selectedFilterProperty.showCriteriaValue = false;
	                    }
	                    else {
	                        if (selectedFilterProperty.selectedCriteriaType.comparisonOperator === 'in' || selectedFilterProperty.selectedCriteriaType.comparisonOperator === 'not in') {
	                            selectedFilterProperty.showCriteriaValue = false;
	                            scope.comparisonOperatorInAndNotInFlag = true;
	                        }
	                        else {
	                            selectedFilterProperty.showCriteriaValue = true;
	                        }
	                    }
	                };
	                scope.$watch('filterItem.value', function (criteriaValue) {
	                    //remove percents for like values
	                    if (angular.isDefined(scope.filterItem) && angular.isDefined(scope.filterItem.value)) {
	                        scope.filterItem.value = scope.filterItem.value.replace('%', '');
	                    }
	                });
	                scope.$watch('selectedFilterProperty', function (selectedFilterProperty) {
	                    if (angular.isDefined(selectedFilterProperty)) {
	                        angular.forEach(scope.conditionOptions, function (conditionOption) {
	                            if (conditionOption.display == scope.filterItem.conditionDisplay) {
	                                scope.selectedFilterProperty.selectedCriteriaType = conditionOption;
	                                scope.selectedFilterProperty.criteriaValue = scope.filterItem.value;
	                                if (angular.isDefined(scope.selectedConditionChanged)) {
	                                    scope.selectedConditionChanged(scope.selectedFilterProperty);
	                                }
	                            }
	                        });
	                    }
	                });
	            }
	        };
	    }
	    SWCriteriaString.Factory = function () {
	        var directive = function ($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	            return new SWCriteriaString($log, $slatwall, $filter, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            '$filter',
	            'collectionPartialsPath',
	            'collectionService',
	            'metadataService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWCriteriaString;
	})();
	exports.SWCriteriaString = SWCriteriaString;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWEditFilterItem = (function () {
	    function SWEditFilterItem($http, $compile, $templateCache, $log, $filter, $slatwall, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	        return {
	            require: '^swFilterGroups',
	            restrict: 'E',
	            scope: {
	                collectionConfig: "=",
	                filterItem: "=",
	                filterPropertiesList: "=",
	                saveCollection: "&",
	                removeFilterItem: "&",
	                filterItemIndex: "=",
	                comparisonType: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "editfilteritem.html",
	            link: function (scope, element, attrs, filterGroupsController) {
	                function daysBetween(first, second) {
	                    // Copy date parts of the timestamps, discarding the time parts.
	                    var one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
	                    var two = new Date(second.getFullYear(), second.getMonth(), second.getDate());
	                    // Do the math.
	                    var millisecondsPerDay = 1000 * 60 * 60 * 24;
	                    var millisBetween = two.getTime() - one.getTime();
	                    var days = millisBetween / millisecondsPerDay;
	                    // Round down.
	                    return Math.floor(days);
	                }
	                if (angular.isUndefined(scope.filterItem.breadCrumbs)) {
	                    scope.filterItem.breadCrumbs = [];
	                    if (scope.filterItem.propertyIdentifier === "") {
	                        scope.filterItem.breadCrumbs = [
	                            {
	                                rbKey: $slatwall.getRBKey('entity.' + scope.collectionConfig.baseEntityAlias.replace('_', '')),
	                                entityAlias: scope.collectionConfig.baseEntityAlias,
	                                cfc: scope.collectionConfig.baseEntityAlias,
	                                propertyIdentifier: scope.collectionConfig.baseEntityAlias
	                            }
	                        ];
	                    }
	                    else {
	                        var entityAliasArrayFromString = scope.filterItem.propertyIdentifier.split('.');
	                        entityAliasArrayFromString.pop();
	                        for (var i in entityAliasArrayFromString) {
	                            var breadCrumb = {
	                                rbKey: $slatwall.getRBKey('entity.' + scope.collectionConfig.baseEntityAlias.replace('_', '')),
	                                entityAlias: entityAliasArrayFromString[i],
	                                cfc: entityAliasArrayFromString[i],
	                                propertyIdentifier: entityAliasArrayFromString[i]
	                            };
	                            scope.filterItem.breadCrumbs.push(breadCrumb);
	                        }
	                    }
	                }
	                else {
	                    angular.forEach(scope.filterItem.breadCrumbs, function (breadCrumb, key) {
	                        if (angular.isUndefined(scope.filterPropertiesList[breadCrumb.propertyIdentifier])) {
	                            var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName(breadCrumb.cfc);
	                            filterPropertiesPromise.then(function (value) {
	                                metadataService.setPropertiesList(value, breadCrumb.propertyIdentifier);
	                                scope.filterPropertiesList[breadCrumb.propertyIdentifier] = metadataService.getPropertiesListByBaseEntityAlias(breadCrumb.propertyIdentifier);
	                                metadataService.formatPropertiesList(scope.filterPropertiesList[breadCrumb.propertyIdentifier], breadCrumb.propertyIdentifier);
	                                var entityAliasArrayFromString = scope.filterItem.propertyIdentifier.split('.');
	                                entityAliasArrayFromString.pop();
	                                entityAliasArrayFromString = entityAliasArrayFromString.join('.').trim();
	                                if (angular.isDefined(scope.filterPropertiesList[entityAliasArrayFromString])) {
	                                    for (var i in scope.filterPropertiesList[entityAliasArrayFromString].data) {
	                                        var filterProperty = scope.filterPropertiesList[entityAliasArrayFromString].data[i];
	                                        if (filterProperty.propertyIdentifier === scope.filterItem.propertyIdentifier) {
	                                            //selectItem from drop down
	                                            scope.selectedFilterProperty = filterProperty;
	                                            //decorate with value and comparison Operator so we can use it in the Condition section
	                                            scope.selectedFilterProperty.value = scope.filterItem.value;
	                                            scope.selectedFilterProperty.comparisonOperator = scope.filterItem.comparisonOperator;
	                                        }
	                                    }
	                                }
	                            });
	                        }
	                        else {
	                            var entityAliasArrayFromString = scope.filterItem.propertyIdentifier.split('.');
	                            entityAliasArrayFromString.pop();
	                            entityAliasArrayFromString = entityAliasArrayFromString.join('.').trim();
	                            if (angular.isDefined(scope.filterPropertiesList[entityAliasArrayFromString])) {
	                                for (var i in scope.filterPropertiesList[entityAliasArrayFromString].data) {
	                                    var filterProperty = scope.filterPropertiesList[entityAliasArrayFromString].data[i];
	                                    if (filterProperty.propertyIdentifier === scope.filterItem.propertyIdentifier) {
	                                        //selectItem from drop down
	                                        scope.selectedFilterProperty = filterProperty;
	                                        //decorate with value and comparison Operator so we can use it in the Condition section
	                                        scope.selectedFilterProperty.value = scope.filterItem.value;
	                                        scope.selectedFilterProperty.comparisonOperator = scope.filterItem.comparisonOperator;
	                                    }
	                                }
	                            }
	                        }
	                    });
	                }
	                if (angular.isUndefined(scope.filterItem.$$isClosed)) {
	                    scope.filterItem.$$isClosed = true;
	                }
	                scope.filterGroupItem = filterGroupsController.getFilterGroupItem();
	                scope.togglePrepareForFilterGroup = function () {
	                    scope.filterItem.$$prepareForFilterGroup = !scope.filterItem.$$prepareForFilterGroup;
	                };
	                //public functions
	                scope.selectBreadCrumb = function (breadCrumbIndex) {
	                    //splice out array items above index
	                    var removeCount = scope.filterItem.breadCrumbs.length - 1 - breadCrumbIndex;
	                    scope.filterItem.breadCrumbs.splice(breadCrumbIndex + 1, removeCount);
	                    $log.debug('selectBreadCrumb');
	                    $log.debug(scope.selectedFilterProperty);
	                    //scope.selectedFilterPropertyChanged(scope.filterItem.breadCrumbs[scope.filterItem.breadCrumbs.length -1].filterProperty);
	                    scope.selectedFilterPropertyChanged(null);
	                };
	                scope.selectedFilterPropertyChanged = function (selectedFilterProperty) {
	                    $log.debug('selectedFilterProperty');
	                    $log.debug(selectedFilterProperty);
	                    if (angular.isDefined(scope.selectedFilterProperty) && scope.selectedFilterProperty === null) {
	                        scope.selectedFilterProperty = {};
	                    }
	                    if (angular.isDefined(scope.selectedFilterProperty) && angular.isDefined(scope.selectedFilterProperty.selectedCriteriaType)) {
	                        delete scope.selectedFilterProperty.selectedCriteriaType;
	                    }
	                    if (angular.isDefined(scope.filterItem.value)) {
	                        delete scope.filterItem.value;
	                    }
	                    scope.selectedFilterProperty.showCriteriaValue = false;
	                    scope.selectedFilterProperty = selectedFilterProperty;
	                };
	                scope.addFilterItem = function () {
	                    collectionService.newFilterItem(filterGroupsController.getFilterGroupItem(), filterGroupsController.setItemInUse);
	                };
	                scope.cancelFilterItem = function () {
	                    $log.debug('cancelFilterItem');
	                    $log.debug(scope.filterItemIndex);
	                    //scope.deselectItems(scope.filterGroupItem[filterItemIndex]);
	                    scope.filterItem.setItemInUse(false);
	                    scope.filterItem.$$isClosed = true;
	                    for (var siblingIndex in scope.filterItem.$$siblingItems) {
	                        scope.filterItem.$$siblingItems[siblingIndex].$$disabled = false;
	                    }
	                    if (scope.filterItem.$$isNew === true) {
	                        scope.removeFilterItem({ filterItemIndex: scope.filterItemIndex });
	                    }
	                };
	                scope.saveFilter = function (selectedFilterProperty, filterItem, callback) {
	                    $log.debug('saveFilter begin');
	                    if (angular.isDefined(selectedFilterProperty.selectedCriteriaType) && angular.equals({}, selectedFilterProperty.selectedCriteriaType)) {
	                        return;
	                    }
	                    if (angular.isDefined(selectedFilterProperty) && angular.isDefined(selectedFilterProperty.selectedCriteriaType)) {
	                        //populate filterItem with selectedFilterProperty values
	                        filterItem.$$isNew = false;
	                        filterItem.propertyIdentifier = selectedFilterProperty.propertyIdentifier;
	                        filterItem.displayPropertyIdentifier = selectedFilterProperty.displayPropertyIdentifier;
	                        switch (selectedFilterProperty.ormtype) {
	                            case 'boolean':
	                                filterItem.comparisonOperator = selectedFilterProperty.selectedCriteriaType.comparisonOperator;
	                                filterItem.value = selectedFilterProperty.selectedCriteriaType.value;
	                                filterItem.displayValue = filterItem.value;
	                                break;
	                            case 'string':
	                                if (angular.isDefined(selectedFilterProperty.attributeID)) {
	                                    filterItem.attributeID = selectedFilterProperty.attributeID;
	                                    filterItem.attributeSetObject = selectedFilterProperty.attributeSetObject;
	                                }
	                                filterItem.comparisonOperator = selectedFilterProperty.selectedCriteriaType.comparisonOperator;
	                                //retrieving implied value or user input | ex. implied:prop is null, user input:prop = "Name"
	                                if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.value)) {
	                                    filterItem.value = selectedFilterProperty.selectedCriteriaType.value;
	                                    filterItem.displayValue = filterItem.value;
	                                }
	                                else {
	                                    //if has a pattern then we need to evaluate where to add % for like statement
	                                    if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.pattern)) {
	                                        filterItem.pattern = selectedFilterProperty.selectedCriteriaType.pattern;
	                                        filterItem.displayValue = filterItem.value;
	                                    }
	                                    else {
	                                        filterItem.value = filterItem.value;
	                                        if (angular.isUndefined(filterItem.displayValue)) {
	                                            filterItem.displayValue = filterItem.value;
	                                        }
	                                    }
	                                }
	                                break;
	                            //TODO:simplify timestamp and big decimal to leverage reusable function for null, range, and value
	                            case 'timestamp':
	                                //retrieving implied value or user input | ex. implied:prop is null, user input:prop = "Name"
	                                filterItem.comparisonOperator = selectedFilterProperty.selectedCriteriaType.comparisonOperator;
	                                //is it null or a range
	                                if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.value)) {
	                                    filterItem.value = selectedFilterProperty.selectedCriteriaType.value;
	                                    filterItem.displayValue = filterItem.value;
	                                }
	                                else {
	                                    if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.dateInfo.type) && selectedFilterProperty.selectedCriteriaType.dateInfo.type === 'calculation') {
	                                        var _daysBetween = daysBetween(new Date(selectedFilterProperty.criteriaRangeStart), new Date(selectedFilterProperty.criteriaRangeEnd));
	                                        filterItem.value = _daysBetween;
	                                        filterItem.displayValue = selectedFilterProperty.selectedCriteriaType.display;
	                                        if (angular.isDefined(selectedFilterProperty.criteriaNumberOf)) {
	                                            filterItem.criteriaNumberOf = selectedFilterProperty.criteriaNumberOf;
	                                        }
	                                    }
	                                    else {
	                                        var dateValueString = selectedFilterProperty.criteriaRangeStart + '-' + selectedFilterProperty.criteriaRangeEnd;
	                                        filterItem.value = dateValueString;
	                                        var formattedDateValueString = $filter('date')(angular.copy(selectedFilterProperty.criteriaRangeStart), 'MM/dd/yyyy @ h:mma') + '-' + $filter('date')(angular.copy(selectedFilterProperty.criteriaRangeEnd), 'MM/dd/yyyy @ h:mma');
	                                        filterItem.displayValue = formattedDateValueString;
	                                        if (angular.isDefined(selectedFilterProperty.criteriaNumberOf)) {
	                                            filterItem.criteriaNumberOf = selectedFilterProperty.criteriaNumberOf;
	                                        }
	                                    }
	                                }
	                                break;
	                            case 'big_decimal':
	                            case 'integer':
	                            case 'float':
	                                filterItem.comparisonOperator = selectedFilterProperty.selectedCriteriaType.comparisonOperator;
	                                //is null, is not null
	                                if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.value)) {
	                                    filterItem.value = selectedFilterProperty.selectedCriteriaType.value;
	                                }
	                                else {
	                                    if (angular.isUndefined(selectedFilterProperty.selectedCriteriaType.type)) {
	                                        filterItem.value = selectedFilterProperty.criteriaValue;
	                                    }
	                                    else {
	                                        var decimalValueString = selectedFilterProperty.criteriaRangeStart + '-' + selectedFilterProperty.criteriaRangeEnd;
	                                        filterItem.value = decimalValueString;
	                                    }
	                                }
	                                filterItem.displayValue = filterItem.value;
	                                break;
	                        }
	                        switch (selectedFilterProperty.fieldtype) {
	                            case 'many-to-one':
	                                filterItem.comparisonOperator = selectedFilterProperty.selectedCriteriaType.comparisonOperator;
	                                //is null, is not null
	                                if (angular.isDefined(selectedFilterProperty.selectedCriteriaType.value)) {
	                                    filterItem.value = selectedFilterProperty.selectedCriteriaType.value;
	                                }
	                                filterItem.displayValue = filterItem.value;
	                                break;
	                            case 'one-to-many':
	                            case 'many-to-many':
	                                filterItem.collectionID = selectedFilterProperty.selectedCollection.collectionID;
	                                filterItem.displayValue = selectedFilterProperty.selectedCollection.collectionName;
	                                filterItem.criteria = selectedFilterProperty.selectedCriteriaType.comparisonOperator;
	                                break;
	                        }
	                        if (angular.isUndefined(filterItem.displayValue)) {
	                            filterItem.displayValue = filterItem.value;
	                        }
	                        if (angular.isDefined(selectedFilterProperty.ormtype)) {
	                            filterItem.ormtype = selectedFilterProperty.ormtype;
	                        }
	                        if (angular.isDefined(selectedFilterProperty.fieldtype)) {
	                            filterItem.fieldtype = selectedFilterProperty.fieldtype;
	                        }
	                        for (var siblingIndex in filterItem.$$siblingItems) {
	                            filterItem.$$siblingItems[siblingIndex].$$disabled = false;
	                        }
	                        filterItem.conditionDisplay = selectedFilterProperty.selectedCriteriaType.display;
	                        //if the add to New group checkbox has been checked then we need to transplant the filter item into a filter group
	                        if (filterItem.$$prepareForFilterGroup === true) {
	                            collectionService.transplantFilterItemIntoFilterGroup(filterGroupsController.getFilterGroupItem(), filterItem);
	                        }
	                        //persist Config and 
	                        scope.saveCollection();
	                        $log.debug(selectedFilterProperty);
	                        $log.debug(filterItem);
	                        callback();
	                        $log.debug('saveFilter end');
	                    }
	                };
	            }
	        };
	    }
	    SWEditFilterItem.Factory = function () {
	        var directive = function ($http, $compile, $templateCache, $log, $filter, $slatwall, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig) {
	            return new SWEditFilterItem($http, $compile, $templateCache, $log, $filter, $slatwall, collectionPartialsPath, collectionService, metadataService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$http',
	            '$compile',
	            '$templateCache',
	            '$log',
	            '$filter',
	            '$slatwall',
	            'collectionPartialsPath',
	            'collectionService',
	            'metadataService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWEditFilterItem;
	})();
	exports.SWEditFilterItem = SWEditFilterItem;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWFilterGroups = (function () {
	    function SWFilterGroups($http, $compile, $templateCache, $log, collectionPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'EA',
	            scope: {
	                collectionConfig: "=",
	                filterGroupItem: "=",
	                filterPropertiesList: "=",
	                saveCollection: "&",
	                filterGroup: "=",
	                comparisonType: "@"
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "filtergroups.html",
	            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
	                    //if the filter group comparisontype is not specified, then assume we are doing filters
	                    if (!angular.isDefined($scope.comparisonType)) {
	                        $scope.comparisonType = 'filter';
	                    }
	                    $scope.itemInUse = false;
	                    $log.debug('collectionConfig');
	                    $log.debug($scope.collectionConfig);
	                    this.getFilterGroup = function () {
	                        return $scope.filterGroup;
	                    };
	                    this.getFilterGroupItem = function () {
	                        return $scope.filterGroupItem;
	                    };
	                    this.setItemInUse = function (booleanValue) {
	                        $scope.itemInUse = booleanValue;
	                    };
	                    this.getItemInUse = function () {
	                        return $scope.itemInUse;
	                    };
	                    this.saveCollection = function () {
	                        $scope.saveCollection();
	                    };
	                    $scope.deselectItems = function (filterItem) {
	                        for (var i in filterItem.$$siblingItems) {
	                            filterItem.$$siblingItems[i].$$disabled = false;
	                        }
	                    };
	                    this.removeFilterItem = function (filterItemIndex) {
	                        if (angular.isDefined(filterItemIndex)) {
	                            $scope.deselectItems($scope.filterGroupItem[filterItemIndex]);
	                            $scope.filterGroupItem[filterItemIndex].setItemInUse(false);
	                            //remove item
	                            $log.debug('removeFilterItem');
	                            $log.debug(filterItemIndex);
	                            $scope.filterGroupItem.splice(filterItemIndex, 1);
	                            //make sure first item has no logical operator if it exists
	                            if ($scope.filterGroupItem.length) {
	                                delete $scope.filterGroupItem[0].logicalOperator;
	                            }
	                            $log.debug('removeFilterItem');
	                            $log.debug(filterItemIndex);
	                            $scope.saveCollection();
	                        }
	                    };
	                    this.removeFilterGroupItem = function (filterGroupItemIndex) {
	                        //remove Item
	                        $scope.deselectItems($scope.filterGroupItem[filterGroupItemIndex]);
	                        $scope.filterGroupItem[filterGroupItemIndex].setItemInUse(false);
	                        $scope.filterGroupItem.splice(filterGroupItemIndex, 1);
	                        //make sure first item has no logical operator if it exists
	                        if ($scope.filterGroupItem.length) {
	                            delete $scope.filterGroupItem[0].logicalOperator;
	                        }
	                        $log.debug('removeFilterGroupItem');
	                        $log.debug(filterGroupItemIndex);
	                        $scope.saveCollection();
	                    };
	                }]
	        };
	    }
	    SWFilterGroups.Factory = function () {
	        var directive = function ($http, $compile, $templateCache, $log, collectionPartialsPath, pathBuilderConfig) {
	            return new SWFilterGroups($http, $compile, $templateCache, $log, collectionPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$http',
	            '$compile',
	            '$templateCache',
	            '$log',
	            'collectionPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWFilterGroups;
	})();
	exports.SWFilterGroups = SWFilterGroups;


/***/ },
/* 89 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWFilterItem = (function () {
	    function SWFilterItem($log, collectionService, collectionPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'A',
	            require: '^swFilterGroups',
	            scope: {
	                collectionConfig: "=",
	                filterItem: "=",
	                siblingItems: "=",
	                filterPropertiesList: "=",
	                filterItemIndex: "=",
	                saveCollection: "&",
	                comparisonType: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(collectionPartialsPath) + "filteritem.html",
	            link: function (scope, element, attrs, filterGroupsController) {
	                scope.baseEntityAlias = scope.collectionConfig.baseEntityAlias;
	                if (angular.isUndefined(scope.filterItem.$$isClosed)) {
	                    scope.filterItem.$$isClosed = true;
	                }
	                if (angular.isUndefined(scope.filterItem.$$disabled)) {
	                    scope.filterItem.$$disabled = false;
	                }
	                if (angular.isUndefined(scope.filterItem.siblingItems)) {
	                    scope.filterItem.$$siblingItems = scope.siblingItems;
	                }
	                scope.filterItem.setItemInUse = filterGroupsController.setItemInUse;
	                scope.selectFilterItem = function (filterItem) {
	                    collectionService.selectFilterItem(filterItem);
	                };
	                scope.removeFilterItem = function () {
	                    filterGroupsController.removeFilterItem(scope.filterItemIndex, filterGroupsController.getFilterGroupItem());
	                };
	                scope.filterGroupItem = filterGroupsController.getFilterGroupItem();
	                scope.logicalOperatorChanged = function (logicalOperatorValue) {
	                    $log.debug('logicalOperatorChanged');
	                    $log.debug(logicalOperatorValue);
	                    scope.filterItem.logicalOperator = logicalOperatorValue;
	                    filterGroupsController.saveCollection();
	                };
	            }
	        };
	    }
	    SWFilterItem.Factory = function () {
	        var directive = function ($log, collectionService, collectionPartialsPath, pathBuilderConfig) {
	            return new SWFilterItem($log, collectionService, collectionPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            'collectionService',
	            'collectionPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWFilterItem;
	})();
	exports.SWFilterItem = SWFilterItem;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	//services
	//filters
	//directives
	var swcontentbasic_1 = __webpack_require__(91);
	var swcontenteditor_1 = __webpack_require__(92);
	var swcontentlist_1 = __webpack_require__(93);
	var swcontentnode_1 = __webpack_require__(94);
	var contentmodule = angular.module('hibachi.content', []).config(function () {
	})
	    .constant('contentPartialsPath', 'content/components/')
	    .directive('swContentBasic', swcontentbasic_1.SWContentBasic.Factory())
	    .directive('swContentEditor', swcontenteditor_1.SWContentEditor.Factory())
	    .directive('swContentList', swcontentlist_1.SWContentList.Factory())
	    .directive('swContentNode', swcontentnode_1.SWContentNode.Factory());
	exports.contentmodule = contentmodule;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWContentBasic = (function () {
	    function SWContentBasic($log, $routeParams, $slatwall, formService, contentPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'EA',
	            templateUrl: pathBuilderConfig.buildPartialsPath(contentPartialsPath) + "contentbasic.html",
	            link: function (scope, element, attrs) {
	                if (!scope.content.$$isPersisted()) {
	                    if (angular.isDefined($routeParams.siteID)) {
	                        var sitePromise;
	                        var options = {
	                            id: $routeParams.siteID
	                        };
	                        sitePromise = $slatwall.getSite(options);
	                        sitePromise.promise.then(function () {
	                            var site = sitePromise.value;
	                            scope.content.$$setSite(site);
	                        });
	                    }
	                    else {
	                        var site = $slatwall.newSite();
	                        scope.content.$$setSite(site);
	                    }
	                    var parentContent;
	                    if (angular.isDefined($routeParams.parentContentID)) {
	                        var parentContentPromise;
	                        var options = {
	                            id: $routeParams.parentContentID
	                        };
	                        parentContentPromise = $slatwall.getContent(options);
	                        parentContentPromise.promise.then(function () {
	                            var parentContent = parentContentPromise.value;
	                            scope.content.$$setParentContent(parentContent);
	                            $log.debug('contenttest');
	                            $log.debug(scope.content);
	                        });
	                    }
	                    else {
	                        var parentContent = $slatwall.newContent();
	                        scope.content.$$setParentContent(parentContent);
	                    }
	                    var contentTemplateType = $slatwall.newType();
	                    scope.content.$$setContentTemplateType(contentTemplateType);
	                }
	                else {
	                    scope.content.$$getSite();
	                    scope.content.$$getParentContent();
	                    scope.content.$$getContentTemplateType();
	                }
	            }
	        };
	    }
	    SWContentBasic.Factory = function () {
	        var directive = function ($log, $routeParams, $slatwall, formService, contentPartialsPath, pathBuilderConfig) {
	            return new SWContentBasic($log, $routeParams, $slatwall, formService, contentPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$routeParams',
	            '$slatwall',
	            'formService',
	            'contentPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWContentBasic;
	})();
	exports.SWContentBasic = SWContentBasic;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWContentEditor = (function () {
	    function SWContentEditor($log, $location, $http, $slatwall, formService, contentPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'EA',
	            scope: {
	                content: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(contentPartialsPath) + "contenteditor.html",
	            link: function (scope, element, attrs) {
	                scope.editorOptions = CKEDITOR.editorConfig;
	                scope.onContentChange = function () {
	                    var form = formService.getForm('contentEditor');
	                    form.contentBody.$setDirty();
	                };
	                //                scope.saveContent = function(){
	                //                   var urlString = _config.baseURL+'/index.cfm/?slatAction=api:main.post';
	                //                   var params = {
	                //                        entityID:scope.content.contentID,
	                //                        templateHTML:scope.content.templateHTML,
	                //                        context:'saveTemplateHTML',
	                //                        entityName:'content'   
	                //                   }
	                //                   $http.post(urlString,
	                //                        {
	                //                            params:params
	                //                        }
	                //                    )
	                //                    .success(function(data){
	                //                    }).error(function(reason){
	                //                    });
	                //                }
	            }
	        };
	    }
	    SWContentEditor.Factory = function () {
	        var directive = function ($log, $location, $http, $slatwall, formService, contentPartialsPath, pathBuilderConfig) {
	            return new SWContentEditor($log, $location, $http, $slatwall, formService, contentPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$location',
	            '$http',
	            '$slatwall',
	            'formService',
	            'contentPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWContentEditor;
	})();
	exports.SWContentEditor = SWContentEditor;


/***/ },
/* 93 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWContentListController = (function () {
	    function SWContentListController($scope, $log, $timeout, $slatwall, paginationService, observerService, collectionConfigService) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$log = $log;
	        this.$timeout = $timeout;
	        this.$slatwall = $slatwall;
	        this.paginationService = paginationService;
	        this.observerService = observerService;
	        this.collectionConfigService = collectionConfigService;
	        this.openRoot = true;
	        this.$log.debug('slatwallcontentList init');
	        var pageShow = 50;
	        if (this.pageShow !== 'Auto') {
	            pageShow = this.pageShow;
	        }
	        this.pageShowOptions = [
	            { display: 10, value: 10 },
	            { display: 20, value: 20 },
	            { display: 50, value: 50 },
	            { display: 250, value: 250 }
	        ];
	        this.loadingCollection = false;
	        this.selectedSite;
	        this.orderBy;
	        var orderByConfig;
	        this.getCollection = function (isSearching) {
	            _this.collectionConfig = collectionConfigService.newCollectionConfig('Content');
	            var columnsConfig = [
	                //{"propertyIdentifier":"_content_childContents","title":"","isVisible":true,"isDeletable":true,"isSearchable":true,"isExportable":true,"ormtype":"string","aggregate":{"aggregateFunction":"COUNT","aggregateAlias":"childContentsCount"}},
	                {
	                    propertyIdentifier: '_content.contentID',
	                    isVisible: false,
	                    ormtype: 'id',
	                    isSearchable: true
	                },
	                {
	                    propertyIdentifier: '_content.urlTitlePath',
	                    isVisible: false,
	                    isSearchable: true
	                },
	                //need to get template via settings
	                {
	                    propertyIdentifier: '_content.allowPurchaseFlag',
	                    isVisible: true,
	                    ormtype: 'boolean',
	                    isSearchable: false
	                },
	                {
	                    propertyIdentifier: '_content.productListingPageFlag',
	                    isVisible: true,
	                    ormtype: 'boolean',
	                    isSearchable: false
	                },
	                {
	                    propertyIdentifier: '_content.activeFlag',
	                    isVisible: true,
	                    ormtype: 'boolean',
	                    isSearchable: false
	                }
	            ];
	            var options = {
	                currentPage: '1',
	                pageShow: '1',
	                keywords: _this.keywords
	            };
	            var column = {};
	            if (!isSearching || _this.keywords === '') {
	                _this.isSearching = false;
	                var filterGroupsConfig = [
	                    {
	                        "filterGroup": [
	                            {
	                                "propertyIdentifier": "parentContent",
	                                "comparisonOperator": "is",
	                                "value": 'null'
	                            }
	                        ]
	                    }
	                ];
	                column = {
	                    propertyIdentifier: '_content.title',
	                    isVisible: true,
	                    ormtype: 'string',
	                    isSearchable: true,
	                    tdclass: 'primary'
	                };
	                columnsConfig.unshift(column);
	            }
	            else {
	                _this.isSearching = true;
	                var filterGroupsConfig = [
	                    {
	                        "filterGroup": [
	                            {
	                                "propertyIdentifier": "excludeFromSearch",
	                                "comparisonOperator": "!=",
	                                "value": true
	                            }
	                        ]
	                    }
	                ];
	                column = {
	                    propertyIdentifier: '_content.title',
	                    isVisible: false,
	                    ormtype: 'string',
	                    isSearchable: true
	                };
	                columnsConfig.unshift(column);
	                var titlePathColumn = {
	                    propertyIdentifier: '_content.titlePath',
	                    isVisible: true,
	                    ormtype: 'string',
	                    isSearchable: false
	                };
	                columnsConfig.unshift(titlePathColumn);
	            }
	            //if we have a selected Site add the filter
	            if (angular.isDefined(_this.selectedSite)) {
	                var selectedSiteFilter = {
	                    logicalOperator: "AND",
	                    propertyIdentifier: "site.siteID",
	                    comparisonOperator: "=",
	                    value: _this.selectedSite.siteID
	                };
	                filterGroupsConfig[0].filterGroup.push(selectedSiteFilter);
	            }
	            if (angular.isDefined(_this.orderBy)) {
	                var orderByConfig = [];
	                orderByConfig.push(_this.orderBy);
	                options.orderByConfig = angular.toJson(orderByConfig);
	            }
	            angular.forEach(columnsConfig, function (column) {
	                _this.collectionConfig.addColumn(column.propertyIdentifier, column.title, column);
	            });
	            _this.collectionConfig.addDisplayAggregate('childContents', 'COUNT', 'childContentsCount', { isVisible: false, isSearchable: false, title: 'test' });
	            _this.collectionConfig.addDisplayProperty('site.siteID', undefined, {
	                isVisible: false,
	                ormtype: 'id',
	                isSearchable: false
	            });
	            _this.collectionConfig.addDisplayProperty('site.domainNames', undefined, {
	                isVisible: false,
	                isSearchable: true
	            });
	            angular.forEach(filterGroupsConfig[0].filterGroup, function (filter) {
	                _this.collectionConfig.addFilter(filter.propertyIdentifier, filter.value, filter.comparisonOperator, filter.logicalOperator);
	            });
	            _this.collectionListingPromise = _this.collectionConfig.getEntity();
	            _this.collectionListingPromise.then(function (value) {
	                _this.collection = value;
	                _this.collection.collectionConfig = _this.collectionConfig;
	                _this.firstLoad = true;
	                _this.loadingCollection = false;
	            });
	            _this.collectionListingPromise;
	        };
	        //this.getCollection(false);
	        this.keywords = "";
	        this.loadingCollection = false;
	        var searchPromise;
	        this.searchCollection = function () {
	            if (searchPromise) {
	                _this.$timeout.cancel(searchPromise);
	            }
	            searchPromise = $timeout(function () {
	                $log.debug('search with keywords');
	                $log.debug(_this.keywords);
	                $('.childNode').remove();
	                //Set current page here so that the pagination does not break when getting collection
	                _this.loadingCollection = true;
	                _this.getCollection(true);
	            }, 500);
	        };
	        var siteChanged = function (selectedSiteOption) {
	            _this.selectedSite = selectedSiteOption;
	            _this.openRoot = true;
	            _this.getCollection();
	        };
	        this.observerService.attach(siteChanged, 'optionsChanged', 'siteOptions');
	        var sortChanged = function (orderBy) {
	            _this.orderBy = orderBy;
	            _this.getCollection();
	        };
	        this.observerService.attach(sortChanged, 'sortByColumn', 'siteSorting');
	        var optionsLoaded = function () {
	            _this.observerService.notify('selectFirstOption');
	        };
	        this.observerService.attach(optionsLoaded, 'optionsLoaded', 'siteOptionsLoaded');
	    }
	    SWContentListController.$inject = [
	        '$scope',
	        '$log',
	        '$timeout',
	        '$slatwall',
	        'paginationService',
	        'observerService',
	        'collectionConfigService'
	    ];
	    return SWContentListController;
	})();
	var SWContentList = (function () {
	    function SWContentList(contentPartialsPath, observerService, pathBuilderConfig) {
	        this.restrict = 'E';
	        //public bindToController=true;
	        this.controller = SWContentListController;
	        this.controllerAs = "swContentList";
	        this.link = function (scope, element, attrs, controller, transclude) {
	            scope.$on('$destroy', function handler() {
	                this.observerService.detachByEvent('optionsChanged');
	                this.observerService.detachByEvent('sortByColumn');
	            });
	        };
	        this.observerService = observerService;
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(contentPartialsPath) + 'contentlist.html';
	    }
	    SWContentList.Factory = function () {
	        var directive = function (contentPartialsPath, observerService, pathBuilderConfig) {
	            return new SWContentList(contentPartialsPath, observerService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            'contentPartialsPath',
	            'observerService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWContentList;
	})();
	exports.SWContentList = SWContentList;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWContentNode = (function () {
	    function SWContentNode($log, $compile, $slatwall, contentPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'A',
	            scope: {
	                contentData: '=',
	                loadChildren: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(contentPartialsPath) + 'contentnode.html',
	            link: function (scope, element, attr) {
	                if (angular.isUndefined(scope.depth)) {
	                    scope.depth = 0;
	                }
	                if (angular.isDefined(scope.$parent.depth)) {
	                    scope.depth = scope.$parent.depth + 1;
	                }
	                var childContentColumnsConfig = [{
	                        propertyIdentifier: '_content.contentID',
	                        isVisible: false,
	                        isSearchable: false
	                    },
	                    {
	                        propertyIdentifier: '_content.title',
	                        isVisible: true,
	                        isSearchable: true
	                    },
	                    {
	                        propertyIdentifier: '_content.urlTitlePath',
	                        isVisible: true,
	                        isSearchable: true
	                    },
	                    {
	                        propertyIdentifier: '_content.site.siteID',
	                        isVisible: false,
	                        isSearchable: false
	                    },
	                    {
	                        propertyIdentifier: '_content.site.siteName',
	                        isVisible: true,
	                        isSearchable: true
	                    },
	                    {
	                        propertyIdentifier: '_content.site.domainNames',
	                        isVisible: true,
	                        isSearchable: true
	                    },
	                    //                            {
	                    //                                propertyIdentifier: '_content.contentTemplateFile',
	                    //                                persistent: false,
	                    //                                setting: true,
	                    //                                isVisible: true
	                    //                            },
	                    //need to get template via settings
	                    {
	                        propertyIdentifier: '_content.allowPurchaseFlag',
	                        isVisible: true,
	                        isSearchable: true
	                    }, {
	                        propertyIdentifier: '_content.productListingPageFlag',
	                        isVisible: true,
	                        isSearchable: true
	                    }, {
	                        propertyIdentifier: '_content.activeFlag',
	                        isVisible: true,
	                        isSearchable: true
	                    }
	                ];
	                var childContentOrderBy = [
	                    {
	                        "propertyIdentifier": "_content.sortOrder",
	                        "direction": "DESC"
	                    }
	                ];
	                scope.toggleChildContent = function (parentContentRecord) {
	                    if (angular.isUndefined(scope.childOpen) || scope.childOpen === false) {
	                        scope.childOpen = true;
	                        if (!scope.childrenLoaded) {
	                            scope.getChildContent(parentContentRecord);
	                        }
	                    }
	                    else {
	                        scope.childOpen = false;
	                    }
	                };
	                scope.getChildContent = function (parentContentRecord) {
	                    var childContentfilterGroupsConfig = [{
	                            "filterGroup": [{
	                                    "propertyIdentifier": "_content.parentContent.contentID",
	                                    "comparisonOperator": "=",
	                                    "value": parentContentRecord.contentID
	                                }]
	                        }];
	                    var collectionListingPromise = $slatwall.getEntity('Content', {
	                        columnsConfig: angular.toJson(childContentColumnsConfig),
	                        filterGroupsConfig: angular.toJson(childContentfilterGroupsConfig),
	                        orderByConfig: angular.toJson(childContentOrderBy),
	                        allRecords: true
	                    });
	                    collectionListingPromise.then(function (value) {
	                        parentContentRecord.children = value.records;
	                        var index = 0;
	                        angular.forEach(parentContentRecord.children, function (child) {
	                            child.site_domainNames = child.site_domainNames.split(",")[0];
	                            scope['child' + index] = child;
	                            element.after($compile('<tr class="childNode" style="margin-left:{{depth*15||0}}px" ng-if="childOpen"  sw-content-node data-content-data="child' + index + '"></tr>')(scope));
	                            index++;
	                        });
	                        scope.childrenLoaded = true;
	                    });
	                };
	                scope.childrenLoaded = false;
	                //if the children have never been loaded and we are not in search mode based on the title received
	                if (angular.isDefined(scope.loadChildren) && scope.loadChildren === true && !(scope.contentData.titlePath && scope.contentData.titlePath.trim().length)) {
	                    scope.toggleChildContent(scope.contentData);
	                }
	            }
	        };
	    }
	    SWContentNode.Factory = function () {
	        var directive = function ($log, $compile, $slatwall, contentPartialsPath, pathBuilderConfig) {
	            return new SWContentNode($log, $compile, $slatwall, contentPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$compile',
	            '$slatwall',
	            'contentPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWContentNode;
	})();
	exports.SWContentNode = SWContentNode;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	//services
	var dialogservice_1 = __webpack_require__(96);
	//controllers
	var pagedialog_1 = __webpack_require__(97);
	var dialogmodule = angular.module('hibachi.dialog', []).config(function () {
	})
	    .service('dialogService', dialogservice_1.DialogService)
	    .controller('pageDialog', pagedialog_1.PageDialogController)
	    .constant('dialogPartials', 'dialog/components/');
	exports.dialogmodule = dialogmodule;


/***/ },
/* 96 */
/***/ function(module, exports) {

	var DialogService = (function () {
	    function DialogService(pathBuilderConfig) {
	        var _this = this;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.get = function () {
	            return _this._pageDialogs || [];
	        };
	        this.addPageDialog = function (name, params) {
	            var newDialog = {
	                'path': name + '.html',
	                'params': params
	            };
	            _this._pageDialogs.push(newDialog);
	        };
	        this.removePageDialog = function (index) {
	            _this._pageDialogs.splice(index, 1);
	        };
	        this.getPageDialogs = function () {
	            return _this._pageDialogs;
	        };
	        this.removeCurrentDialog = function () {
	            _this._pageDialogs.splice(_this._pageDialogs.length - 1, 1);
	        };
	        this.getCurrentDialog = function () {
	            return _this._pageDialogs[_this._pageDialogs.length - 1];
	        };
	        this._pageDialogs = [];
	        this.pathBuilderConfig = pathBuilderConfig;
	    }
	    DialogService.$inject = [
	        'pathBuilderConfig'
	    ];
	    return DialogService;
	})();
	exports.DialogService = DialogService;


/***/ },
/* 97 */
/***/ function(module, exports) {

	var PageDialogController = (function () {
	    //@ngInject
	    function PageDialogController($scope, $location, $log, $anchorScroll, $slatwall, dialogService) {
	        $scope.$id = 'pageDialogController';
	        //get url param to retrieve collection listing
	        $scope.pageDialogs = dialogService.getPageDialogs();
	        $scope.scrollToTopOfDialog = function () {
	            $location.hash('/#topOfPageDialog');
	            $anchorScroll();
	        };
	        $scope.pageDialogStyle = { "z-index": 3000 };
	    }
	    return PageDialogController;
	})();
	exports.PageDialogController = PageDialogController;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	//modules
	var core_module_1 = __webpack_require__(16);
	//controllers
	var preprocessorderitem_addorderitemgiftrecipient_1 = __webpack_require__(99);
	//directives
	var swaddorderitemgiftrecipient_1 = __webpack_require__(100);
	var swgiftcardbalance_1 = __webpack_require__(102);
	var swgiftcarddetail_1 = __webpack_require__(103);
	var swgiftcardhistory_1 = __webpack_require__(104);
	var swgiftcardoverview_1 = __webpack_require__(105);
	var swgiftcardorderinfo_1 = __webpack_require__(106);
	var swgiftcardrecipientinfo_1 = __webpack_require__(107);
	var sworderitemgiftrecipientrow_1 = __webpack_require__(108);
	var giftcardmodule = angular.module('giftcard', [core_module_1.coremodule.name])
	    .config([function () {
	    }]).run([function () {
	    }])
	    .constant('giftCardPartialsPath', 'giftcard/components')
	    .controller('preprocessorderitem_addorderitemgiftrecipient', preprocessorderitem_addorderitemgiftrecipient_1.OrderItemGiftRecipientControl)
	    .directive('swAddOrderItemGiftRecipient', swaddorderitemgiftrecipient_1.SWAddOrderItemGiftRecipient.Factory())
	    .directive('swGiftCardBalance', swgiftcardbalance_1.SWGiftCardBalance.Factory())
	    .directive('swGiftCardOverview', swgiftcardoverview_1.SWGiftCardOverview.Factory())
	    .directive('swGiftCardDetail', swgiftcarddetail_1.SWGiftCardDetail.Factory())
	    .directive('swGiftCardHistory', swgiftcardhistory_1.SWGiftCardHistory.Factory())
	    .directive('swGiftCardRecipientInfo', swgiftcardrecipientinfo_1.SWGiftCardRecipientInfo.Factory())
	    .directive('swGiftCardOrderInfo', swgiftcardorderinfo_1.SWGiftCardOrderInfo.Factory())
	    .directive('swOrderItemGiftRecipientRow', sworderitemgiftrecipientrow_1.SWOrderItemGiftRecipientRow.Factory());
	exports.giftcardmodule = giftcardmodule;


/***/ },
/* 99 */
/***/ function(module, exports) {

	var OrderItemGiftRecipientControl = (function () {
	    function OrderItemGiftRecipientControl($scope, $slatwall) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$slatwall = $slatwall;
	        this.getUnassignedCountArray = function () {
	            var unassignedCountArray = new Array();
	            for (var i = 1; i <= _this.getUnassignedCount(); i++) {
	                unassignedCountArray.push(i);
	            }
	            return unassignedCountArray;
	        };
	        this.getAssignedCount = function () {
	            var assignedCount = 0;
	            angular.forEach(_this.orderItemGiftRecipients, function (orderItemGiftRecipient) {
	                assignedCount += orderItemGiftRecipient.quantity;
	            });
	            return assignedCount;
	        };
	        this.getUnassignedCount = function () {
	            var unassignedCount = _this.quantity;
	            angular.forEach(_this.orderItemGiftRecipients, function (orderItemGiftRecipient) {
	                unassignedCount -= orderItemGiftRecipient.quantity;
	            });
	            return unassignedCount;
	        };
	        this.orderItemGiftRecipients = $scope.orderItemGiftRecipients = [];
	        $scope.collection = {};
	        this.adding = false;
	        this.searchText = "";
	        var count = 1;
	        this.currentGiftRecipient = new slatwalladmin.GiftRecipient();
	    }
	    OrderItemGiftRecipientControl.$inject = ["$scope", "$slatwall"];
	    return OrderItemGiftRecipientControl;
	})();
	exports.OrderItemGiftRecipientControl = OrderItemGiftRecipientControl;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../../../client/typings/tsd.d.ts" />
	/// <reference path="../../../../../client/typings/slatwallTypeScript.d.ts" />
	var giftrecipient_1 = __webpack_require__(101);
	var SWAddOrderItemRecipientController = (function () {
	    function SWAddOrderItemRecipientController($slatwall) {
	        var _this = this;
	        this.$slatwall = $slatwall;
	        this.addGiftRecipientFromAccountList = function (account) {
	            var giftRecipient = new giftrecipient_1.GiftRecipient();
	            giftRecipient.firstName = account.firstName;
	            giftRecipient.lastName = account.lastName;
	            giftRecipient.email = account.primaryEmailAddress_emailAddress;
	            giftRecipient.account = true;
	            _this.orderItemGiftRecipients.push(giftRecipient);
	            _this.searchText = "";
	        };
	        this.getUnassignedCountArray = function () {
	            var unassignedCountArray = new Array();
	            for (var i = 1; i <= _this.getUnassignedCount(); i++) {
	                unassignedCountArray.push(i);
	            }
	            return unassignedCountArray;
	        };
	        this.getAssignedCount = function () {
	            var assignedCount = 0;
	            angular.forEach(_this.orderItemGiftRecipients, function (orderItemGiftRecipient) {
	                assignedCount += orderItemGiftRecipient.quantity;
	            });
	            return assignedCount;
	        };
	        this.getUnassignedCount = function () {
	            var unassignedCount = _this.quantity;
	            angular.forEach(_this.orderItemGiftRecipients, function (orderItemGiftRecipient) {
	                unassignedCount -= orderItemGiftRecipient.quantity;
	            });
	            return unassignedCount;
	        };
	        this.addGiftRecipient = function () {
	            _this.adding = false;
	            var giftRecipient = new giftrecipient_1.GiftRecipient();
	            angular.extend(giftRecipient, _this.currentGiftRecipient);
	            _this.orderItemGiftRecipients.push(giftRecipient);
	            _this.currentGiftRecipient = new giftrecipient_1.GiftRecipient();
	            _this.searchText = "";
	        };
	        this.startFormWithName = function (searchString) {
	            if (searchString === void 0) { searchString = _this.searchText; }
	            _this.adding = true;
	            if (searchString == "") {
	                _this.currentGiftRecipient.firstName = searchString;
	            }
	            else {
	                _this.currentGiftRecipient.firstName = searchString;
	                _this.searchText = "";
	            }
	        };
	        this.getTotalQuantity = function () {
	            var totalQuantity = 0;
	            angular.forEach(_this.orderItemGiftRecipients, function (orderItemGiftRecipient) {
	                totalQuantity += orderItemGiftRecipient.quantity;
	            });
	            return totalQuantity;
	        };
	        this.getMessageCharactersLeft = function () {
	            if (angular.isDefined(_this.currentGiftRecipient.giftMessage)) {
	                return 250 - _this.currentGiftRecipient.giftMessage.length;
	            }
	            else {
	                return 250;
	            }
	        };
	        this.adding = false;
	        this.searchText = "";
	        var count = 1;
	        this.currentGiftRecipient = new giftrecipient_1.GiftRecipient();
	        this.orderItemGiftRecipients = [];
	    }
	    SWAddOrderItemRecipientController.$inject = ["$slatwall"];
	    return SWAddOrderItemRecipientController;
	})();
	exports.SWAddOrderItemRecipientController = SWAddOrderItemRecipientController;
	var SWAddOrderItemGiftRecipient = (function () {
	    function SWAddOrderItemGiftRecipient($slatwall, giftCardPartialsPath, pathBuilderConfig) {
	        this.$slatwall = $slatwall;
	        this.giftCardPartialsPath = giftCardPartialsPath;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.restrict = "EA";
	        this.transclude = true;
	        this.scope = {};
	        this.bindToController = {
	            "quantity": "=",
	            "orderItemGiftRecipients": "=",
	            "adding": "=",
	            "searchText": "=",
	            "currentgiftRecipient": "="
	        };
	        this.controller = SWAddOrderItemRecipientController;
	        this.controllerAs = "addGiftRecipientControl";
	        this.link = function ($scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(giftCardPartialsPath) + "entity/OrderItemGiftRecipient/addorderitemgiftrecipient.html";
	    }
	    SWAddOrderItemGiftRecipient.Factory = function () {
	        var directive = function ($slatwall, giftCardPartialsPath, pathBuilderConfig) {
	            return new SWAddOrderItemGiftRecipient($slatwall, giftCardPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$slatwall',
	            'giftCardPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWAddOrderItemGiftRecipient;
	})();
	exports.SWAddOrderItemGiftRecipient = SWAddOrderItemGiftRecipient;


/***/ },
/* 101 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var GiftRecipient = (function () {
	    function GiftRecipient(firstName, lastName, email, giftMessage, quantity, account, editing) {
	        var _this = this;
	        this.reset = function () {
	            _this.firstName = null;
	            _this.lastName = null;
	            _this.email = null;
	            _this.account = null;
	            _this.editing = false;
	            _this.quantity = 1;
	        };
	        this.quantity = 1;
	        this.editing = false;
	        this.account = false;
	    }
	    return GiftRecipient;
	})();
	exports.GiftRecipient = GiftRecipient;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/// <reference path="../../../../../client/typings/tsd.d.ts" />
	/// <reference path="../../../../../client/typings/slatwallTypeScript.d.ts" />
	var SWGiftCardBalanceController = (function () {
	    function SWGiftCardBalanceController(collectionConfigService) {
	        var _this = this;
	        this.collectionConfigService = collectionConfigService;
	        this.init = function () {
	            _this.initialBalance = 0;
	            var totalDebit = 0;
	            var transactionConfig = _this.collectionConfigService.newCollectionConfig('GiftCardTransaction');
	            transactionConfig.setDisplayProperties("giftCardTransactionID, creditAmount, debitAmount, giftCard.giftCardID");
	            transactionConfig.addFilter('giftCard.giftCardID', _this.giftCard.giftCardID);
	            transactionConfig.setAllRecords(true);
	            var transactionPromise = transactionConfig.getEntity();
	            transactionPromise.then(function (response) {
	                _this.transactions = response.records;
	                angular.forEach(_this.transactions, function (transaction, index) {
	                    if (typeof transaction.creditAmount !== "string") {
	                        _this.initialBalance += transaction.creditAmount;
	                    }
	                    if (typeof transaction.debitAmount !== "string") {
	                        totalDebit += transaction.debitAmount;
	                    }
	                });
	                _this.currentBalance = _this.initialBalance - totalDebit;
	                _this.balancePercentage = ((_this.currentBalance / _this.initialBalance) * 100);
	            });
	        };
	        this.init();
	    }
	    SWGiftCardBalanceController.$inject = ["collectionConfigService"];
	    return SWGiftCardBalanceController;
	})();
	exports.SWGiftCardBalanceController = SWGiftCardBalanceController;
	var SWGiftCardBalance = (function () {
	    function SWGiftCardBalance(collectionConfigService, giftCardPartialsPath, pathBuilderConfig) {
	        this.collectionConfigService = collectionConfigService;
	        this.giftCardPartialsPath = giftCardPartialsPath;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.scope = {};
	        this.bindToController = {
	            giftCard: "=?",
	            transactions: "=?",
	            initialBalance: "=?",
	            currentBalance: "=?",
	            balancePercentage: "=?"
	        };
	        this.controller = SWGiftCardBalanceController;
	        this.controllerAs = "swGiftCardBalance";
	        this.link = function (scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(giftCardPartialsPath) + "/balance.html";
	        this.restrict = "EA";
	    }
	    SWGiftCardBalance.Factory = function () {
	        var directive = function (collectionConfigService, giftCardPartialsPath, pathBuilderConfig) {
	            return new SWGiftCardBalance(collectionConfigService, giftCardPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            'collectionConfigService',
	            'giftCardPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWGiftCardBalance;
	})();
	exports.SWGiftCardBalance = SWGiftCardBalance;


/***/ },
/* 103 */
/***/ function(module, exports) {

	/// <reference path="../../../../../client/typings/tsd.d.ts" />
	/// <reference path="../../../../../client/typings/slatwallTypeScript.d.ts" />
	var SWGiftCardDetailController = (function () {
	    function SWGiftCardDetailController(collectionConfigService) {
	        var _this = this;
	        this.collectionConfigService = collectionConfigService;
	        this.init = function () {
	            var giftCardConfig = _this.collectionConfigService.newCollectionConfig('GiftCard');
	            giftCardConfig.setDisplayProperties("giftCardID, giftCardCode, currencyCode, giftCardPin, expirationDate, ownerFirstName, ownerLastName, ownerEmailAddress, activeFlag, balanceAmount,  originalOrderItem.sku.product.productName, originalOrderItem.sku.product.productID, originalOrderItem.order.orderID, originalOrderItem.orderItemID, orderItemGiftRecipient.firstName, orderItemGiftRecipient.lastName, orderItemGiftRecipient.emailAddress, orderItemGiftRecipient.giftMessage");
	            giftCardConfig.addFilter('giftCardID', _this.giftCardId);
	            giftCardConfig.setAllRecords(true);
	            giftCardConfig.getEntity().then(function (response) {
	                _this.giftCard = response.records[0];
	            });
	        };
	        this.init();
	    }
	    SWGiftCardDetailController.$inject = ["collectionConfigService"];
	    return SWGiftCardDetailController;
	})();
	exports.SWGiftCardDetailController = SWGiftCardDetailController;
	var SWGiftCardDetail = (function () {
	    function SWGiftCardDetail(collectionConfigService, giftCardPartialsPath, pathBuilderConfig) {
	        this.collectionConfigService = collectionConfigService;
	        this.giftCardPartialsPath = giftCardPartialsPath;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.scope = {};
	        this.bindToController = {
	            giftCardId: "@",
	            giftCard: "=?"
	        };
	        this.controller = SWGiftCardDetailController;
	        this.controllerAs = "swGiftCardDetail";
	        this.link = function (scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(giftCardPartialsPath) + "/basic.html";
	        this.restrict = "E";
	    }
	    SWGiftCardDetail.Factory = function () {
	        var directive = function (collectionConfigService, giftCardPartialsPath, pathBuilderConfig) {
	            return new SWGiftCardDetail(collectionConfigService, giftCardPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            'collectionConfigService',
	            'giftCardPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWGiftCardDetail;
	})();
	exports.SWGiftCardDetail = SWGiftCardDetail;


/***/ },
/* 104 */
/***/ function(module, exports) {

	/// <reference path="../../../../../client/typings/tsd.d.ts" />
	/// <reference path="../../../../../client/typings/slatwallTypeScript.d.ts" />
	var SWGiftCardHistoryController = (function () {
	    function SWGiftCardHistoryController(collectionConfigService) {
	        var _this = this;
	        this.collectionConfigService = collectionConfigService;
	        this.init = function () {
	            var initialBalance = 0;
	            var totalDebit = 0;
	            var transactionConfig = _this.collectionConfigService.newCollectionConfig('GiftCardTransaction');
	            transactionConfig.setDisplayProperties("giftCardTransactionID, creditAmount, debitAmount, createdDateTime, giftCard.giftCardID, orderPayment.order.orderNumber, orderPayment.order.orderOpenDateTime");
	            transactionConfig.addFilter('giftCard.giftCardID', _this.giftCard.giftCardID);
	            transactionConfig.setAllRecords(true);
	            transactionConfig.setOrderBy("orderPayment.order.orderOpenDateTime");
	            var transactionPromise = transactionConfig.getEntity();
	            var emailBounceConfig = _this.collectionConfigService.newCollectionConfig('EmailBounce');
	            emailBounceConfig.setDisplayProperties("emailBounceID, rejectedEmailTo, rejectedEmailSendTime, relatedObject, relatedObjectID");
	            emailBounceConfig.addFilter('relatedObject', "giftCard");
	            emailBounceConfig.addFilter('relatedObjectID', _this.giftCard.giftCardID);
	            emailBounceConfig.setAllRecords(true);
	            emailBounceConfig.setOrderBy("rejectedEmailSendTime");
	            var emailBouncePromise = emailBounceConfig.getEntity();
	            emailBouncePromise.then(function (response) {
	                _this.bouncedEmails = response.records;
	            });
	            transactionPromise.then(function (response) {
	                _this.transactions = response.records;
	                var initialCreditIndex = _this.transactions.length - 1;
	                var initialBalance = _this.transactions[initialCreditIndex].creditAmount;
	                var currentBalance = initialBalance;
	                angular.forEach(_this.transactions, function (transaction, index) {
	                    if (typeof transaction.debitAmount !== "string") {
	                        transaction.debit = true;
	                        totalDebit += transaction.debitAmount;
	                    }
	                    else {
	                        if (index != initialCreditIndex) {
	                            currentBalance += transaction.creditAmount;
	                        }
	                        transaction.debit = false;
	                    }
	                    var tempCurrentBalance = currentBalance - totalDebit;
	                    transaction.balance = tempCurrentBalance;
	                    if (index == initialCreditIndex) {
	                        var emailSent = {
	                            emailSent: true,
	                            debit: false,
	                            sentAt: transaction.orderPayment_order_orderOpenDateTime,
	                            balance: initialBalance
	                        };
	                        var activeCard = {
	                            activated: true,
	                            debit: false,
	                            activeAt: transaction.orderPayment_order_orderOpenDateTime,
	                            balance: initialBalance
	                        };
	                        _this.transactions.splice(index, 0, activeCard);
	                        _this.transactions.splice(index, 0, emailSent);
	                        if (angular.isDefined(_this.bouncedEmails)) {
	                            angular.forEach(_this.bouncedEmails, function (email, bouncedEmailIndex) {
	                                email.bouncedEmail = true;
	                                email.balance = initialBalance;
	                                _this.transactions.splice(index, 0, email);
	                            });
	                        }
	                    }
	                });
	            });
	            var orderConfig = _this.collectionConfigService.newCollectionConfig('Order');
	            orderConfig.setDisplayProperties("orderID, orderNumber, orderOpenDateTime, account.firstName, account.lastName, account.accountID, account.primaryEmailAddress.emailAddress");
	            orderConfig.addFilter('orderID', _this.giftCard.originalOrderItem_order_orderID);
	            orderConfig.setAllRecords(true);
	            orderConfig.getEntity().then(function (response) {
	                _this.order = response.records[0];
	            });
	        };
	        this.init();
	    }
	    SWGiftCardHistoryController.$inject = ["collectionConfigService"];
	    return SWGiftCardHistoryController;
	})();
	exports.SWGiftCardHistoryController = SWGiftCardHistoryController;
	var SWGiftCardHistory = (function () {
	    function SWGiftCardHistory(collectionConfigService, giftCardPartialsPath, pathBuilderConfig) {
	        this.collectionConfigService = collectionConfigService;
	        this.giftCardPartialsPath = giftCardPartialsPath;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.scope = {};
	        this.bindToController = {
	            giftCard: "=?",
	            transactions: "=?",
	            bouncedEmails: "=?",
	            order: "=?"
	        };
	        this.controller = SWGiftCardHistoryController;
	        this.controllerAs = "swGiftCardHistory";
	        this.link = function (scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(giftCardPartialsPath) + "/history.html";
	        this.restrict = "EA";
	    }
	    SWGiftCardHistory.Factory = function () {
	        var directive = function (collectionConfigService, giftCardPartialsPath, pathBuilderConfig) {
	            return new SWGiftCardHistory(collectionConfigService, giftCardPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            'collectionConfigService',
	            'giftCardPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWGiftCardHistory;
	})();
	exports.SWGiftCardHistory = SWGiftCardHistory;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/// <reference path="../../../../../client/typings/tsd.d.ts" />
	/// <reference path="../../../../../client/typings/slatwallTypeScript.d.ts" />
	var SWGiftCardOverviewController = (function () {
	    function SWGiftCardOverviewController() {
	    }
	    return SWGiftCardOverviewController;
	})();
	exports.SWGiftCardOverviewController = SWGiftCardOverviewController;
	var SWGiftCardOverview = (function () {
	    function SWGiftCardOverview(giftCardPartialsPath, pathBuilderConfig) {
	        this.giftCardPartialsPath = giftCardPartialsPath;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.scope = {};
	        this.bindToController = {
	            giftCard: "=?"
	        };
	        this.controller = SWGiftCardOverviewController;
	        this.controllerAs = "swGiftCardOverview";
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(giftCardPartialsPath) + "/overview.html";
	        this.restrict = "EA";
	    }
	    SWGiftCardOverview.Factory = function () {
	        var directive = function (giftCardPartialsPath, pathBuilderConfig) {
	            return new SWGiftCardOverview(giftCardPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            'giftCardPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWGiftCardOverview;
	})();
	exports.SWGiftCardOverview = SWGiftCardOverview;


/***/ },
/* 106 */
/***/ function(module, exports) {

	/// <reference path="../../../../../client/typings/tsd.d.ts" />
	/// <reference path="../../../../../client/typings/slatwallTypeScript.d.ts" />
	var SWGiftCardOrderInfoController = (function () {
	    function SWGiftCardOrderInfoController(collectionConfigService) {
	        var _this = this;
	        this.collectionConfigService = collectionConfigService;
	        this.init = function () {
	            var orderConfig = _this.collectionConfigService.newCollectionConfig('Order');
	            orderConfig.setDisplayProperties("orderID, orderNumber, orderOpenDateTime, account.firstName, account.lastName");
	            orderConfig.addFilter('orderID', _this.giftCard.originalOrderItem_order_orderID);
	            orderConfig.setAllRecords(true);
	            orderConfig.getEntity().then(function (response) {
	                _this.order = response.records[0];
	            });
	        };
	        this.init();
	    }
	    SWGiftCardOrderInfoController.$inject = ["collectionConfigService"];
	    return SWGiftCardOrderInfoController;
	})();
	exports.SWGiftCardOrderInfoController = SWGiftCardOrderInfoController;
	var SWGiftCardOrderInfo = (function () {
	    function SWGiftCardOrderInfo(collectionConfigService, giftCardPartialsPath, pathBuilderConfig) {
	        this.collectionConfigService = collectionConfigService;
	        this.giftCardPartialsPath = giftCardPartialsPath;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.scope = {};
	        this.bindToController = {
	            giftCard: "=?",
	            order: "=?"
	        };
	        this.controller = SWGiftCardOrderInfoController;
	        this.controllerAs = "swGiftCardOrderInfo";
	        this.link = function (scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(giftCardPartialsPath) + "/orderinfo.html";
	        this.restrict = "EA";
	    }
	    SWGiftCardOrderInfo.Factory = function () {
	        var directive = function (collectionConfigService, giftCardPartialsPath, pathBuilderConfig) {
	            return new SWGiftCardOrderInfo(collectionConfigService, giftCardPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            'collectionConfigService',
	            'giftCardPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    SWGiftCardOrderInfo.$inject = ["collectionConfigService", "partialsPath"];
	    return SWGiftCardOrderInfo;
	})();
	exports.SWGiftCardOrderInfo = SWGiftCardOrderInfo;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/// <reference path="../../../../../client/typings/tsd.d.ts" />
	/// <reference path="../../../../../client/typings/slatwallTypeScript.d.ts" />
	var SWGiftCardRecipientInfoController = (function () {
	    function SWGiftCardRecipientInfoController() {
	    }
	    return SWGiftCardRecipientInfoController;
	})();
	exports.SWGiftCardRecipientInfoController = SWGiftCardRecipientInfoController;
	var SWGiftCardRecipientInfo = (function () {
	    function SWGiftCardRecipientInfo(giftCardPartialsPath, pathBuilderConfig) {
	        this.giftCardPartialsPath = giftCardPartialsPath;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.scope = {};
	        this.bindToController = {
	            giftCard: "=?"
	        };
	        this.controller = SWGiftCardRecipientInfoController;
	        this.controllerAs = "swGiftCardRecipientInfo";
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(giftCardPartialsPath) + "/recipientinfo.html";
	        this.restrict = "EA";
	    }
	    SWGiftCardRecipientInfo.Factory = function () {
	        var directive = function (giftCardPartialsPath, pathBuilderConfig) {
	            return new SWGiftCardRecipientInfo(giftCardPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            'giftCardPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWGiftCardRecipientInfo;
	})();
	exports.SWGiftCardRecipientInfo = SWGiftCardRecipientInfo;


/***/ },
/* 108 */
/***/ function(module, exports) {

	/// <reference path="../../../../../client/typings/tsd.d.ts" />
	/// <reference path="../../../../../client/typings/slatwallTypeScript.d.ts" />
	var SWOrderItemGiftRecipientRowController = (function () {
	    function SWOrderItemGiftRecipientRowController() {
	        var _this = this;
	        this.edit = function (recipient) {
	            angular.forEach(_this.recipients, function (recipient) {
	                recipient.editing = false;
	            });
	            if (!recipient.editing) {
	                recipient.editing = true;
	            }
	        };
	        this.delete = function (recipient) {
	            _this.recipients.splice(_this.recipients.indexOf(recipient), 1);
	        };
	        this.saveGiftRecipient = function (recipient) {
	            recipient.editing = false;
	        };
	        this.getQuantity = function () {
	            if (isNaN(_this.quantity)) {
	                return 0;
	            }
	            else {
	                return _this.quantity;
	            }
	        };
	        this.getUnassignedCount = function () {
	            var unassignedCount = _this.getQuantity();
	            angular.forEach(_this.recipients, function (recipient) {
	                unassignedCount -= recipient.quantity;
	            });
	            return unassignedCount;
	        };
	        this.getMessageCharactersLeft = function () {
	            if (angular.isDefined(_this.recipient.giftMessage)) {
	                return 250 - _this.recipient.giftMessage.length;
	            }
	            else {
	                return 250;
	            }
	        };
	        this.getUnassignedCountArray = function () {
	            var unassignedCountArray = new Array();
	            for (var i = 1; i <= _this.recipient.quantity + _this.getUnassignedCount(); i++) {
	                unassignedCountArray.push(i);
	            }
	            return unassignedCountArray;
	        };
	    }
	    return SWOrderItemGiftRecipientRowController;
	})();
	exports.SWOrderItemGiftRecipientRowController = SWOrderItemGiftRecipientRowController;
	var SWOrderItemGiftRecipientRow = (function () {
	    function SWOrderItemGiftRecipientRow(giftCardPartialsPath, pathBuilderConfig) {
	        var _this = this;
	        this.giftCardPartialsPath = giftCardPartialsPath;
	        this.pathBuilderConfig = pathBuilderConfig;
	        this.restrict = 'AE';
	        this.scope = {
	            recipient: "=",
	            recipients: "=",
	            quantity: "=",
	            index: "="
	        };
	        this.bindToController = {
	            recipient: "=",
	            recipients: "=",
	            quantity: "="
	        };
	        this.controller = SWOrderItemGiftRecipientRowController;
	        this.controllerAs = "giftRecipientRowControl";
	        this.init = function () {
	            _this.templateUrl = _this.pathBuilderConfig.buildPartialsPath(_this.giftCardPartialsPath) + "/orderitemgiftrecipientrow.html";
	        };
	        this.init();
	    }
	    SWOrderItemGiftRecipientRow.Factory = function () {
	        var directive = function (giftCardPartialsPath, pathBuilderConfig) {
	            return new SWOrderItemGiftRecipientRow(giftCardPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            'giftCardPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWOrderItemGiftRecipientRow;
	})();
	exports.SWOrderItemGiftRecipientRow = SWOrderItemGiftRecipientRow;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	/// <reference path="../../../typings/slatwallTypeScript.d.ts" />
	//services
	var paginationservice_1 = __webpack_require__(110);
	var swpaginationbar_1 = __webpack_require__(111);
	var core_module_1 = __webpack_require__(16);
	var paginationmodule = angular.module('hibachi.pagination', [core_module_1.coremodule.name])
	    .run([function () {
	    }])
	    .service('paginationService', paginationservice_1.PaginationService)
	    .directive('swPaginationBar', swpaginationbar_1.SWPaginationBar.Factory())
	    .constant('partialsPath', 'pagination/components/');
	exports.paginationmodule = paginationmodule;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/// <reference path="../../../../typings/tsd.d.ts" />
	/// <reference path="../../../../typings/slatwallTypeScript.d.ts" />
	/*collection service is used to maintain the state of the ui*/
	var Pagination = (function () {
	    //@ngInject
	    function Pagination(uuid) {
	        var _this = this;
	        this.uuid = uuid;
	        this.pageShow = 10;
	        this.currentPage = 1;
	        this.pageStart = 0;
	        this.pageEnd = 0;
	        this.recordsCount = 0;
	        this.totalPages = 0;
	        this.pageShowOptions = [
	            { display: 10, value: 10 },
	            { display: 20, value: 20 },
	            { display: 50, value: 50 },
	            { display: 250, value: 250 },
	            { display: "Auto", value: "Auto" }
	        ];
	        this.autoScrollPage = 1;
	        this.autoScrollDisabled = false;
	        this.getSelectedPageShowOption = function () {
	            return _this.selectedPageShowOption;
	        };
	        this.pageShowOptionChanged = function (pageShowOption) {
	            _this.setPageShow(pageShowOption.value);
	            _this.setCurrentPage(1);
	            _this.getCollection();
	        };
	        this.getTotalPages = function () {
	            return _this.totalPages;
	        };
	        this.setTotalPages = function (totalPages) {
	            _this.totalPages = totalPages;
	        };
	        this.getPageStart = function () {
	            return _this.pageStart;
	        };
	        this.setPageStart = function (pageStart) {
	            _this.pageStart = pageStart;
	        };
	        this.getPageEnd = function () {
	            return _this.pageEnd;
	        };
	        this.setPageEnd = function (pageEnd) {
	            _this.pageEnd = pageEnd;
	        };
	        this.getRecordsCount = function () {
	            return _this.recordsCount;
	        };
	        this.setRecordsCount = function (recordsCount) {
	            _this.recordsCount = recordsCount;
	        };
	        this.getPageShowOptions = function () {
	            return _this.pageShowOptions;
	        };
	        this.setPageShowOptions = function (pageShowOptions) {
	            _this.pageShowOptions = pageShowOptions;
	        };
	        this.getPageShow = function () {
	            return _this.pageShow;
	        };
	        this.setPageShow = function (pageShow) {
	            _this.pageShow = pageShow;
	        };
	        this.getCurrentPage = function () {
	            return _this.currentPage;
	        };
	        this.setCurrentPage = function (currentPage) {
	            _this.currentPage = currentPage;
	            _this.getCollection();
	        };
	        this.previousPage = function () {
	            if (_this.getCurrentPage() == 1)
	                return;
	            _this.setCurrentPage(_this.getCurrentPage() - 1);
	        };
	        this.nextPage = function () {
	            if (_this.getCurrentPage() < _this.getTotalPages()) {
	                _this.currentPage = _this.getCurrentPage() + 1;
	                _this.getCollection();
	            }
	        };
	        this.hasPrevious = function () {
	            return (_this.getPageStart() <= 1);
	        };
	        this.hasNext = function () {
	            return (_this.getPageEnd() === _this.getRecordsCount());
	        };
	        this.showPreviousJump = function () {
	            return (angular.isDefined(_this.getCurrentPage()) && _this.getCurrentPage() > 3);
	        };
	        this.showNextJump = function () {
	            return !!(_this.getCurrentPage() < _this.getTotalPages() - 3 && _this.getTotalPages() > 6);
	        };
	        this.previousJump = function () {
	            _this.setCurrentPage(_this.currentPage - 3);
	        };
	        this.nextJump = function () {
	            _this.setCurrentPage(_this.getCurrentPage() + 3);
	        };
	        this.showPageNumber = function (pageNumber) {
	            if (_this.getCurrentPage() >= _this.getTotalPages() - 3) {
	                if (pageNumber > _this.getTotalPages() - 6) {
	                    return true;
	                }
	            }
	            if (_this.getCurrentPage() <= 3) {
	                if (pageNumber < 6) {
	                    return true;
	                }
	            }
	            else {
	                var bottomRange = _this.getCurrentPage() - 2;
	                var topRange = _this.getCurrentPage() + 2;
	                if (pageNumber > bottomRange && pageNumber < topRange) {
	                    return true;
	                }
	            }
	            return false;
	        };
	        this.setPageRecordsInfo = function (collection) {
	            _this.setRecordsCount(collection.recordsCount);
	            if (_this.getRecordsCount() === 0) {
	                _this.setPageStart(0);
	            }
	            else {
	                _this.setPageStart(collection.pageRecordsStart);
	            }
	            _this.setPageEnd(collection.pageRecordsEnd);
	            _this.setTotalPages(collection.totalPages);
	            _this.totalPagesArray = [];
	            if (angular.isUndefined(_this.getCurrentPage()) || _this.getCurrentPage() < 5) {
	                var start = 1;
	                var end = (_this.getTotalPages() <= 10) ? _this.getTotalPages() + 1 : 10;
	            }
	            else {
	                var start = (!_this.showNextJump()) ? _this.getTotalPages() - 4 : _this.getCurrentPage() - 3;
	                var end = (_this.showNextJump()) ? _this.getCurrentPage() + 5 : _this.getTotalPages() + 1;
	            }
	            for (var i = start; i < end; i++) {
	                _this.totalPagesArray.push(i);
	            }
	        };
	        this.uuid = uuid;
	        this.selectedPageShowOption = this.pageShowOptions[0];
	    }
	    return Pagination;
	})();
	exports.Pagination = Pagination;
	var PaginationService = (function () {
	    function PaginationService(utilityService) {
	        var _this = this;
	        this.utilityService = utilityService;
	        //@ngInject
	        this.paginations = {};
	        this.createPagination = function () {
	            var uuid = _this.utilityService.createID(10);
	            _this.paginations[uuid] = new Pagination(uuid);
	            return _this.paginations[uuid];
	        };
	        this.getPagination = function (uuid) {
	            if (!uuid)
	                return;
	            return _this.paginations[uuid];
	        };
	    }
	    return PaginationService;
	})();
	exports.PaginationService = PaginationService;


/***/ },
/* 111 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	//import pagination = require('../services/paginationservice');
	//var PaginationService = pagination.PaginationService;
	//'use strict';
	var SWPaginationBarController = (function () {
	    //@ngInject
	    function SWPaginationBarController(paginationService) {
	        if (angular.isUndefined(this.paginator)) {
	            this.paginator = paginationService.createPagination();
	        }
	    }
	    return SWPaginationBarController;
	})();
	exports.SWPaginationBarController = SWPaginationBarController;
	var SWPaginationBar = (function () {
	    //@ngInject
	    function SWPaginationBar(pathBuilderConfig, partialsPath) {
	        this.restrict = 'E';
	        this.scope = {};
	        this.bindToController = {
	            paginator: "="
	        };
	        this.controller = SWPaginationBarController;
	        this.controllerAs = "swPaginationBar";
	        this.link = function (scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(partialsPath) + 'paginationbar.html';
	    }
	    SWPaginationBar.Factory = function () {
	        var directive = function (pathBuilderConfig, partialsPath) { return new SWPaginationBar(pathBuilderConfig, partialsPath); };
	        directive.$inject = ['pathBuilderConfig', 'partialsPath'];
	        return directive;
	    };
	    return SWPaginationBar;
	})();
	exports.SWPaginationBar = SWPaginationBar;
	//class SWPaginationBarFactory{
	//    public static getFactoryFor<T extends SWPaginationBar>(classType:Function):ng.IDirectiveFactory {
	//        var factory = (...args:any[]):T=>{
	//            var directive = <any>classType;
	//            return new directive(args);
	//        }
	//        
	//        factory.$inject = classType.$inject;
	//        return factory;
	//        // var directive: ng.IDirectiveFactory = 
	//        //                ($log:ng.ILogService, $timeout:ng.ITimeoutService, partialsPath, paginationService) => new SWPaginationBar( $log,  $timeout, partialsPath,  paginationService); 
	//        // directive.$inject = ['$log','$timeout','partialsPath','paginationService'];
	//        // return directive;
	//    }
	//}
	//angular.module('hibachi.pagination').directive('swPaginationBar',['$log','$timeout','partialsPath','paginationService',($log,$timeout,partialsPath,paginationService) => new SWPaginationBar($log,$timeout,partialsPath,paginationService)]);


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	//modules
	var core_module_1 = __webpack_require__(16);
	//services
	//controllers
	var preprocessproduct_create_1 = __webpack_require__(113);
	//filters
	//directives
	var productmodule = angular.module('hibachi.product', [core_module_1.coremodule.name]).config(function () {
	})
	    .constant('productPartialsPath', 'product/components/')
	    .controller('preprocessproduct_create', preprocessproduct_create_1.ProductCreateController);
	exports.productmodule = productmodule;


/***/ },
/* 113 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var ProductCreateController = (function () {
	    function ProductCreateController($scope, $element, $log, $slatwall, collectionConfigService, selectionService) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$element = $element;
	        this.$log = $log;
	        this.$slatwall = $slatwall;
	        this.collectionConfigService = collectionConfigService;
	        this.selectionService = selectionService;
	        this.$log.debug('init product_create controller');
	        //on select change get collection
	        this.$scope.preprocessproduct_createCtrl.productTypeChanged = function (selectedOption) {
	            _this.$scope.preprocessproduct_createCtrl.selectedOption = selectedOption;
	            _this.$scope.preprocessproduct_createCtrl.getCollection();
	            _this.selectionService.clearSelection('ListingDisplay');
	        };
	        this.$scope.preprocessproduct_createCtrl.getCollection = function () {
	            _this.collectionConfig = _this.collectionConfigService.newCollectionConfig('Option');
	            _this.collectionConfig.setDisplayProperties('optionGroup.optionGroupName,optionName', undefined, { isVisible: true });
	            _this.collectionConfig.addDisplayProperty('optionID', undefined, { isVisible: false });
	            //this.collectionConfig.addFilter('optionGroup.optionGroupID',$('input[name="currentOptionGroups"]').val(),'NOT IN')
	            _this.collectionConfig.addFilter('optionGroup.globalFlag', 1, '=');
	            _this.collectionConfig.addFilter('optionGroup.productTypes.productTypeID', _this.$scope.preprocessproduct_createCtrl.selectedOption.value, '=', 'OR');
	            _this.collectionConfig.setOrderBy('optionGroup.sortOrder|ASC,sortOrder|ASC');
	            _this.$scope.preprocessproduct_createCtrl.collectionListingPromise = _this.collectionConfig.getEntity();
	            _this.$scope.preprocessproduct_createCtrl.collectionListingPromise.then(function (data) {
	                _this.$scope.preprocessproduct_createCtrl.collection = data;
	                _this.$scope.preprocessproduct_createCtrl.collection.collectionConfig = _this.collectionConfig;
	            });
	        };
	        var jQueryOptions = $("select[name='product.productType.productTypeID']")[0];
	        this.$scope.preprocessproduct_createCtrl.options = [];
	        this.$scope.preprocessproduct_createCtrl.options.push({ label: this.$slatwall.getRBKey('processObject.Product_Create.selectProductType'), value: "" });
	        angular.forEach(jQueryOptions, function (jQueryOption) {
	            var option = {
	                label: jQueryOption.label,
	                value: jQueryOption.value
	            };
	            _this.$scope.preprocessproduct_createCtrl.options.push(option);
	        });
	        this.$scope.preprocessproduct_createCtrl.productTypeChanged(this.$scope.preprocessproduct_createCtrl.options[0]);
	    }
	    ProductCreateController.$inject = ["$scope", '$element', '$log', "$slatwall", "collectionConfigService", "selectionService"];
	    return ProductCreateController;
	})();
	exports.ProductCreateController = ProductCreateController;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	//modules
	var core_module_1 = __webpack_require__(16);
	//services
	var productbundleservice_1 = __webpack_require__(115);
	//controllers
	var create_bundle_controller_1 = __webpack_require__(116);
	//directives
	var swproductbundlegrouptype_1 = __webpack_require__(117);
	var swproductbundlegroups_1 = __webpack_require__(118);
	var swproductbundlegroup_1 = __webpack_require__(119);
	//filters
	var productbundlemodule = angular.module('hibachi.productbundle', [core_module_1.coremodule.name]).config(function () {
	})
	    .constant('productBundlePartialsPath', 'productbundle/components')
	    .service('productBundleService', productbundleservice_1.ProductBundleService)
	    .controller('create-bundle-controller', create_bundle_controller_1.CreateBundleController)
	    .directive('swProductBundleGroupType', swproductbundlegrouptype_1.SWProductBundleGroupType.Factory())
	    .directive('swProductBundleGrups', swproductbundlegroups_1.SWProductBundleGroups.Factory())
	    .directive('swProductBundleGroup', swproductbundlegroup_1.SWProductBundleGroup.Factory());
	exports.productbundlemodule = productbundlemodule;


/***/ },
/* 115 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var ProductBundleService = (function () {
	    function ProductBundleService($log, $slatwall, utilityService) {
	        var _this = this;
	        this.$log = $log;
	        this.$slatwall = $slatwall;
	        this.utilityService = utilityService;
	        this.decorateProductBundleGroup = function (productBundleGroup) {
	            productBundleGroup.data.$$editing = true;
	            var prototype = {
	                $$setMinimumQuantity: function (quantity) {
	                    if (quantity < 0 || quantity === null) {
	                        this.minimumQuantity = 0;
	                    }
	                    if (quantity > this.maximumQuantity) {
	                        this.maximumQuantity = quantity;
	                    }
	                },
	                $$setMaximumQuantity: function (quantity) {
	                    if (quantity < 1 || quantity === null) {
	                        this.maximumQuantity = 1;
	                    }
	                    if (this.maximumQuantity < this.minimumQuantity) {
	                        this.minimumQuantity = this.maximumQuantity;
	                    }
	                },
	                $$setActive: function (value) {
	                    this.active = value;
	                },
	                $$toggleEdit: function () {
	                    if (angular.isUndefined(this.$$editing) || this.$$editing === false) {
	                        this.$$editing = true;
	                    }
	                    else {
	                        this.$$editing = false;
	                    }
	                }
	            };
	            angular.extend(productBundleGroup.data, prototype);
	        };
	        this.formatProductBundleGroupFilters = function (productBundleGroupFilters, filterTerm) {
	            _this.$log.debug('FORMATTING PRODUCT BUNDLE FILTERs');
	            _this.$log.debug(productBundleGroupFilters);
	            _this.$log.debug(filterTerm);
	            if (filterTerm.value === 'sku') {
	                for (var i in productBundleGroupFilters) {
	                    productBundleGroupFilters[i].name = productBundleGroupFilters[i][filterTerm.value + 'Code'];
	                    productBundleGroupFilters[i].type = filterTerm.name;
	                    productBundleGroupFilters[i].entityType = filterTerm.value;
	                    productBundleGroupFilters[i].propertyIdentifier = '_sku.skuID';
	                }
	            }
	            else {
	                for (var i in productBundleGroupFilters) {
	                    productBundleGroupFilters[i].name = productBundleGroupFilters[i][filterTerm.value + 'Name'];
	                    productBundleGroupFilters[i].type = filterTerm.name;
	                    productBundleGroupFilters[i].entityType = filterTerm.value;
	                    if (filterTerm.value === 'brand' || filterTerm.value === 'productType') {
	                        productBundleGroupFilters[i].propertyIdentifier = '_sku.product.' + filterTerm.value + '.' + filterTerm.value + 'ID';
	                    }
	                    else {
	                        productBundleGroupFilters[i].propertyIdentifier = '_sku.' + filterTerm.value + '.' + filterTerm.value + 'ID';
	                    }
	                }
	            }
	            _this.$log.debug(productBundleGroupFilters);
	            return productBundleGroupFilters;
	        };
	        this.$log = $log;
	        this.$slatwall = $slatwall;
	        this.utilityService = utilityService;
	    }
	    ProductBundleService.$inject = [
	        '$log', '$slatwall', 'utilityService'
	    ];
	    return ProductBundleService;
	})();
	exports.ProductBundleService = ProductBundleService;


/***/ },
/* 116 */
/***/ function(module, exports) {

	var CreateBundleController = (function () {
	    //@ngInject
	    function CreateBundleController($scope, $location, $log, $rootScope, $window, $slatwall, dialogService, alertService, productBundleService, formService, productBundlePartialsPath) {
	        $scope.productBundlePartialsPath = productBundlePartialsPath;
	        var getParameterByName = function (name) {
	            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
	            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	        };
	        $scope.$id = "create-bundle-controller";
	        //if this view is part of the dialog section, call the inherited function
	        if (angular.isDefined($scope.scrollToTopOfDialog)) {
	            $scope.scrollToTopOfDialog();
	        }
	        var productID = getParameterByName('productID');
	        var productBundleConstructor = function () {
	            $log.debug($scope);
	            if (angular.isDefined($scope.product)) {
	                for (var form in $scope.product.forms) {
	                    formService.resetForm($scope.product.forms[form]);
	                }
	                if (angular.isDefined($scope.product.data.skus[0])) {
	                    for (var form in $scope.product.data.skus[0].forms) {
	                        formService.resetForm($scope.product.data.skus[0].forms[form]);
	                    }
	                }
	                if (angular.isDefined($scope.product.data.skus[0].data.productBundleGroups.selectedProductBundleGroup)) {
	                    for (var form in $scope.product.data.skus[0].data.productBundleGroups.selectedProductBundleGroup.forms) {
	                        formService.resetForm($scope.product.data.skus[0].data.productBundleGroups.selectedProductBundleGroup.forms[form]);
	                    }
	                }
	            }
	            $scope.product = $slatwall.newProduct();
	            var brand = $slatwall.newBrand();
	            var productType = $slatwall.newProductType();
	            $scope.product.$$setBrand(brand);
	            $scope.product.$$setProductType(productType);
	            $scope.product.$$addSku();
	            $scope.product.data.skus[0].data.productBundleGroups = [];
	        };
	        $scope.productBundleGroup;
	        if (angular.isDefined(productID) && productID !== '') {
	            var productPromise = $slatwall.getProduct({ id: productID });
	            productPromise.promise.then(function () {
	                $log.debug(productPromise.value);
	                productPromise.value.$$getSkus().then(function () {
	                    productPromise.value.data.skus[0].$$getProductBundleGroups().then(function () {
	                        $scope.product = productPromise.value;
	                        angular.forEach($scope.product.data.skus[0].data.productBundleGroups, function (productBundleGroup) {
	                            productBundleGroup.$$getProductBundleGroupType();
	                            productBundleService.decorateProductBundleGroup(productBundleGroup);
	                            productBundleGroup.data.$$editing = false;
	                        });
	                    });
	                });
	            }, productBundleConstructor());
	        }
	        else {
	            productBundleConstructor();
	        }
	        $scope.saveProductBundle = function (closeDialogIndex, saveAndNew) {
	            $scope.newSaving = true;
	            $log.debug($scope.newSaving);
	            $scope.dIndex = closeDialogIndex;
	            $scope.product.$$save().then(function () {
	                $log.debug("Turn off the loader after saving.");
	                $scope.newSaving = false;
	                $scope.closeSaving = true;
	                $rootScope.closePageDialog($scope.dIndex);
	                if (saveAndNew) {
	                    $rootScope.openPageDialog('productbundle/createproductbundle');
	                }
	            });
	        };
	    }
	    return CreateBundleController;
	})();
	exports.CreateBundleController = CreateBundleController;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWProductBundleGroupType = (function () {
	    function SWProductBundleGroupType($http, $log, $slatwall, formService, productBundlePartialsPath, productBundleService, pathBuilderConfig) {
	        return {
	            restrict: 'A',
	            templateUrl: pathBuilderConfig.buildPartialsPath(productBundlePartialsPath) + "productbundlegrouptype.html",
	            scope: {
	                productBundleGroup: "="
	            },
	            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
	                    $log.debug('productBundleGrouptype');
	                    $log.debug($scope.productBundleGroup);
	                    $scope.productBundleGroupTypes = {};
	                    $scope.$$id = "productBundleGroupType";
	                    $scope.productBundleGroupTypes.value = [];
	                    $scope.productBundleGroupTypes.$$adding = false;
	                    $scope.productBundleGroupType = {};
	                    if (angular.isUndefined($scope.productBundleGroup.data.productBundleGroupType)) {
	                        var productBundleGroupType = $slatwall.newType();
	                        var parentType = $slatwall.newType();
	                        parentType.data.typeID = '154dcdd2f3fd4b5ab5498e93470957b8';
	                        productBundleGroupType.$$setParentType(parentType);
	                        $scope.productBundleGroup.$$setProductBundleGroupType(productBundleGroupType);
	                    }
	                    /**
	                     * Sets the state to adding and sets the initial data.
	                     */
	                    $scope.productBundleGroupTypes.setAdding = function (isAdding) {
	                        $scope.productBundleGroupTypes.$$adding = isAdding;
	                        var productBundleGroupType = $slatwall.newType();
	                        var parentType = $slatwall.newType();
	                        parentType.data.typeID = '154dcdd2f3fd4b5ab5498e93470957b8';
	                        productBundleGroupType.$$setParentType(parentType);
	                        productBundleGroupType.data.typeName = $scope.productBundleGroup.data.productBundleGroupType.data.typeName;
	                        productBundleGroupType.data.typeDescription = '';
	                        productBundleGroupType.data.typeNameCode = '';
	                        angular.extend($scope.productBundleGroup.data.productBundleGroupType, productBundleGroupType);
	                        formService.getForm('form.addProductBundleGroupType').$setDirty();
	                    };
	                    $scope.showAddProductBundleGroupTypeBtn = false;
	                    /**
	                     * Handles looking up the keyword and populating the dropdown as a user types.
	                     */
	                    $scope.productBundleGroupTypes.getTypesByKeyword = function (keyword) {
	                        $log.debug('getTypesByKeyword');
	                        var filterGroupsConfig = '[' +
	                            ' {  ' +
	                            '"filterGroup":[  ' +
	                            ' {  ' +
	                            ' "propertyIdentifier":"_type.parentType.systemCode",' +
	                            ' "comparisonOperator":"=",' +
	                            ' "value":"productBundleGroupType",' +
	                            ' "ormtype":"string",' +
	                            ' "conditionDisplay":"Equals"' +
	                            '},' +
	                            '{' +
	                            '"logicalOperator":"AND",' +
	                            ' "propertyIdentifier":"_type.typeName",' +
	                            ' "comparisonOperator":"like",' +
	                            ' "ormtype":"string",' +
	                            ' "value":"%' + keyword + '%"' +
	                            '  }' +
	                            ' ]' +
	                            ' }' +
	                            ']';
	                        return $slatwall.getEntity('type', { filterGroupsConfig: filterGroupsConfig.trim() })
	                            .then(function (value) {
	                            $log.debug('typesByKeyword');
	                            $log.debug(value);
	                            $scope.productBundleGroupTypes.value = value.pageRecords;
	                            var myLength = keyword.length;
	                            if (myLength > 0) {
	                                $scope.showAddProductBundleGroupTypeBtn = true;
	                            }
	                            else {
	                                $scope.showAddProductBundleGroupTypeBtn = false;
	                            }
	                            return $scope.productBundleGroupTypes.value;
	                        });
	                    };
	                    /**
	                     * Handles user selection of the dropdown.
	                     */
	                    $scope.selectProductBundleGroupType = function ($item, $model, $label) {
	                        $scope.$item = $item;
	                        $scope.$model = $model;
	                        $scope.$label = $label;
	                        angular.extend($scope.productBundleGroup.data.productBundleGroupType.data, $item);
	                        var parentType = $slatwall.newType();
	                        parentType.data.typeID = '154dcdd2f3fd4b5ab5498e93470957b8';
	                        $scope.productBundleGroup.data.productBundleGroupType.$$setParentType(parentType);
	                        $scope.showAddProductBundleGroupTypeBtn = false;
	                    };
	                    /**
	                     * Closes the add screen
	                     */
	                    $scope.closeAddScreen = function () {
	                        $scope.productBundleGroupTypes.$$adding = false;
	                        $scope.showAddProductBundleGroupTypeBtn = false;
	                    };
	                    /**
	                     * Clears the type name
	                     */
	                    $scope.clearTypeName = function () {
	                        if (angular.isDefined($scope.productBundleGroup.data.productBundleGroupType)) {
	                            $scope.productBundleGroup.data.productBundleGroupType.data.typeName = '';
	                        }
	                    };
	                    /**
	                     * Saves product bundle group type
	                     */
	                    $scope.saveProductBundleGroupType = function () {
	                        //Gets the promise from save
	                        var promise = $scope.productBundleGroup.data.productBundleGroupType.$$save();
	                        promise.then(function (response) {
	                            //Calls close function
	                            if (promise.valid) {
	                                $scope.closeAddScreen();
	                            }
	                        });
	                    };
	                    //Sets up clickOutside Directive call back arguments
	                    $scope.clickOutsideArgs = {
	                        callBackActions: [$scope.closeAddScreen, $scope.clearTypeName]
	                    };
	                    /**
	                     * Works with swclickoutside directive to close dialog
	                     */
	                    $scope.closeThis = function (clickOutsideArgs) {
	                        //Check against the object state
	                        if (!$scope.productBundleGroup.data.productBundleGroupType.$$isPersisted()) {
	                            //Perform all callback actions
	                            for (var callBackAction in clickOutsideArgs.callBackActions) {
	                                clickOutsideArgs.callBackActions[callBackAction]();
	                            }
	                        }
	                    };
	                }]
	        };
	    }
	    SWProductBundleGroupType.Factory = function () {
	        var directive = function ($http, $log, $slatwall, formService, productBundlePartialsPath, productBundleService, pathBuilderConfig) {
	            return new SWProductBundleGroupType($http, $log, $slatwall, formService, productBundlePartialsPath, productBundleService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$http',
	            '$log',
	            '$slatwall',
	            'formService',
	            'productBundlePartialsPath',
	            'productBundleService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWProductBundleGroupType;
	})();
	exports.SWProductBundleGroupType = SWProductBundleGroupType;


/***/ },
/* 118 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var SWProductBundleGroups = (function () {
	    function SWProductBundleGroups($http, $log, $slatwall, metadataService, productBundlePartialsPath, productBundleService, pathBuilderConfig) {
	        return {
	            restrict: 'EA',
	            templateUrl: pathBuilderConfig.buildPartialsPath(productBundlePartialsPath) + "productbundlegroups.html",
	            scope: {
	                sku: "=",
	                productBundleGroups: "=",
	                addProductBundleGroup: "&"
	            },
	            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
	                    $scope.$id = 'productBundleGroups';
	                    $log.debug('productBundleGroups');
	                    $log.debug($scope.productBundleGroups);
	                    $scope.editing = $scope.editing || true;
	                    angular.forEach($scope.productBundleGroups, function (obj) {
	                        productBundleService.decorateProductBundleGroup(obj);
	                        obj.data.$$editing = false;
	                    });
	                    $scope.removeProductBundleGroup = function (index) {
	                        $scope.productBundleGroups.splice(index, 1);
	                        $log.debug("Deleting PBG #" + index);
	                        $log.debug($scope.productBundleGroups);
	                    };
	                    $scope.addProductBundleGroup = function () {
	                        var productBundleGroup = $scope.sku.$$addProductBundleGroup();
	                        productBundleService.decorateProductBundleGroup(productBundleGroup);
	                        $scope.sku.data.productBundleGroups.selectedProductBundleGroup = productBundleGroup;
	                    };
	                }]
	        };
	    }
	    SWProductBundleGroups.Factory = function () {
	        var directive = function ($http, $log, $slatwall, metadataService, productBundlePartialsPath, productBundleService, pathBuilderConfig) {
	            return new SWProductBundleGroups($http, $log, $slatwall, metadataService, productBundlePartialsPath, productBundleService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$http',
	            '$log',
	            '$slatwall',
	            'metadataService',
	            'productBundlePartialsPath',
	            'productBundleService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWProductBundleGroups;
	})();
	exports.SWProductBundleGroups = SWProductBundleGroups;


/***/ },
/* 119 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var CollectionFilterItem = (function () {
	    function CollectionFilterItem(name, type, displayPropertyIdentifier, propertyIdentifier, displayValue, value, comparisonOperator, logicalOperator) {
	        this.name = name;
	        this.type = type;
	        this.displayPropertyIdentifier = displayPropertyIdentifier;
	        this.propertyIdentifier = propertyIdentifier;
	        this.displayValue = displayValue;
	        this.value = value;
	        this.comparisonOperator = comparisonOperator;
	        this.logicalOperator = logicalOperator;
	    }
	    return CollectionFilterItem;
	})();
	var SWProductBundleGroupController = (function () {
	    function SWProductBundleGroupController($log, $timeout, collectionConfigService, productBundleService, metadataservice, utilityservice, $slatwall, productBundlePartialsPath) {
	        var _this = this;
	        this.$log = $log;
	        this.$timeout = $timeout;
	        this.collectionConfigService = collectionConfigService;
	        this.productBundleService = productBundleService;
	        this.metadataservice = metadataservice;
	        this.utilityservice = utilityservice;
	        this.$slatwall = $slatwall;
	        this.productBundlePartialsPath = productBundlePartialsPath;
	        this.openCloseAndRefresh = function () {
	            _this.showAdvanced = !_this.showAdvanced;
	            if (_this.productBundleGroup.data.skuCollectionConfig.filterGroups[_this.index].filterGroup.length) {
	                _this.getCollection();
	            }
	        };
	        this.deleteEntity = function (type) {
	            if (angular.isNumber(type)) {
	                _this.removeProductBundleGroupFilter(type);
	            }
	            else {
	                _this.removeProductBundleGroup(_this.index);
	            }
	        };
	        this.getCollection = function () {
	            _this.collectionConfig.getEntity().then(function (response) {
	                _this.collection = response;
	            });
	        };
	        this.increaseCurrentCount = function () {
	            if (angular.isDefined(_this.totalPages) && _this.totalPages != _this.currentPage) {
	                _this.currentPage++;
	            }
	            else {
	                _this.currentPage = 1;
	            }
	        };
	        this.resetCurrentCount = function () {
	            _this.currentPage = 1;
	        };
	        this.getFiltersByTerm = function (keyword, filterTerm) {
	            _this.loading = true;
	            _this.showAll = true;
	            var _loadingCount;
	            if (_this.timeoutPromise) {
	                _this.$timeout.cancel(_this.timeoutPromise);
	            }
	            _this.timeoutPromise = _this.$timeout(function () {
	                if (filterTerm.value === 'All') {
	                    _this.showAll = true;
	                    _this.productBundleGroupFilters.value = [];
	                    _loadingCount = _this.searchOptions.options.length - 1;
	                    for (var i in _this.searchOptions.options) {
	                        _this.$log.debug("INT");
	                        _this.$log.debug(i);
	                        if (i > 0) {
	                            var option = _this.searchOptions.options[i];
	                            (function (keyword, option) {
	                                var searchAllCollectionConfig = _this.collectionConfigService.newCollectionConfig(_this.searchOptions.options[i].value);
	                                searchAllCollectionConfig.setKeywords(keyword);
	                                searchAllCollectionConfig.setCurrentPage(_this.currentPage);
	                                searchAllCollectionConfig.setPageShow(_this.pageShow);
	                                //searchAllCollectionConfig.setAllRecords(true);
	                                searchAllCollectionConfig.getEntity().then(function (value) {
	                                    _this.recordsCount = value.recordsCount;
	                                    _this.pageRecordsStart = value.pageRecordsStart;
	                                    _this.pageRecordsEnd = value.pageRecordsEnd;
	                                    _this.totalPages = value.totalPages;
	                                    var formattedProductBundleGroupFilters = _this.productBundleService.formatProductBundleGroupFilters(value.pageRecords, option);
	                                    for (var j in formattedProductBundleGroupFilters) {
	                                        if (_this.productBundleGroup.data.skuCollectionConfig.filterGroups[_this.index].filterGroup.indexOf(formattedProductBundleGroupFilters[j]) == -1) {
	                                            _this.productBundleGroupFilters.value.push(formattedProductBundleGroupFilters[j]);
	                                            _this.$log.debug(formattedProductBundleGroupFilters[j]);
	                                        }
	                                    }
	                                    // Increment Down The Loading Count
	                                    _loadingCount--;
	                                    // If the loadingCount drops to 0, then we can update scope
	                                    if (_loadingCount == 0) {
	                                        //This sorts the array of objects by the objects' "type" property alphabetically
	                                        _this.productBundleGroupFilters.value = _this.utilityservice.arraySorter(_this.productBundleGroupFilters.value, ["type", "name"]);
	                                        _this.$log.debug(_this.productBundleGroupFilters.value);
	                                    }
	                                    _this.loading = false;
	                                });
	                            })(keyword, option);
	                        }
	                    }
	                }
	                else {
	                    _this.showAll = false;
	                    _this.searchCollectionConfig = _this.collectionConfigService.newCollectionConfig(filterTerm.value);
	                    _this.searchCollectionConfig.setKeywords(keyword);
	                    _this.searchCollectionConfig.setCurrentPage(_this.currentPage);
	                    _this.searchCollectionConfig.setPageShow(_this.pageShow);
	                    _this.searchCollectionConfig.getEntity().then(function (value) {
	                        _this.recordsCount = value.recordsCount;
	                        _this.pageRecordsStart = value.pageRecordsStart;
	                        _this.pageRecordsEnd = value.pageRecordsEnd;
	                        _this.totalPages = value.totalPages;
	                        _this.$log.debug('getFiltersByTerm');
	                        _this.$log.debug(value);
	                        _this.productBundleGroupFilters.value = _this.productBundleService.formatProductBundleGroupFilters(value.pageRecords, filterTerm) || [];
	                        _this.loading = false;
	                    });
	                }
	            }, 500);
	        };
	        this.addFilterToProductBundle = function (filterItem, include, index) {
	            var collectionFilterItem = new CollectionFilterItem(filterItem.name, filterItem.type, filterItem.type, filterItem.propertyIdentifier, filterItem[filterItem.entityType.charAt(0).toLowerCase() + filterItem.entityType.slice(1) + 'ID'], filterItem[filterItem.entityType.charAt(0).toLowerCase() + filterItem.entityType.slice(1) + 'ID']);
	            if (include === false) {
	                collectionFilterItem.comparisonOperator = '!=';
	            }
	            else {
	                collectionFilterItem.comparisonOperator = '=';
	            }
	            if (_this.productBundleGroup.data.skuCollectionConfig.filterGroups[_this.index].filterGroup.length > 0) {
	                collectionFilterItem.logicalOperator = 'OR';
	            }
	            //Adds filter item to designated filtergroup
	            _this.productBundleGroup.data.skuCollectionConfig.filterGroups[_this.index].filterGroup.push(collectionFilterItem);
	            //Removes the filter item from the left hand search result
	            _this.productBundleGroupFilters.value.splice(index, 1);
	            _this.productBundleGroup.forms[_this.formName].skuCollectionConfig.$setDirty();
	        };
	        this.removeProductBundleGroupFilter = function (index) {
	            //Pushes item back into array
	            _this.productBundleGroupFilters.value.push(_this.productBundleGroup.data.skuCollectionConfig.filterGroups[_this.index].filterGroup[index]);
	            //Sorts Array
	            _this.productBundleGroupFilters.value = _this.utilityservice.arraySorter(_this.productBundleGroupFilters.value, ["type", "name"]);
	            //Removes the filter item from the filtergroup
	            _this.productBundleGroup.data.skuCollectionConfig.filterGroups[_this.index].filterGroup.splice(index, 1);
	            _this.productBundleGroup.forms[_this.formName].skuCollectionConfig.$setDirty();
	        };
	        this.$id = 'productBundleGroup';
	        this.maxRecords = 10;
	        this.recordsCount = 0;
	        this.pageRecordsStart = 0;
	        this.pageRecordsEnd = 0;
	        this.showAll = false;
	        this.showAdvanced = false;
	        this.currentPage = 1;
	        this.pageShow = 10;
	        /*this.skuCollectionConfig = {
	            baseEntityName:"Sku",
	            baseEntityAlias:"_sku",
	            collectionConfig:this.productBundleGroup.data.skuCollectionConfig,
	            collectionObject:'Sku'
	        };*/
	        this.searchOptions = {
	            options: [
	                {
	                    name: "All",
	                    value: "All"
	                },
	                {
	                    name: "Product Type",
	                    value: "productType"
	                },
	                {
	                    name: "Brand",
	                    value: "brand"
	                },
	                {
	                    name: "Products",
	                    value: "product"
	                },
	                {
	                    name: "Skus",
	                    value: "sku"
	                }
	            ],
	            selected: {
	                name: "All",
	                value: "All"
	            },
	            setSelected: function (searchOption) {
	                _this.searchOptions.selected = searchOption;
	                _this.getFiltersByTerm(_this.productBundleGroupFilters.keyword, searchOption);
	            }
	        };
	        this.navigation = {
	            value: 'Basic',
	            setValue: function (value) {
	                _this.value = value;
	            }
	        };
	        this.filterTemplatePath = this.productBundlePartialsPath + "productBundle/productbundlefilter.html";
	        this.productBundleGroupFilters = {};
	        this.productBundleGroupFilters.value = [];
	        if (angular.isUndefined(this.productBundleGroup.productBundleGroupFilters)) {
	            this.productBundleGroup.productBundleGroupFilters = [];
	        }
	        if (!angular.isDefined(this.productBundleGroup.data.skuCollectionConfig.filterGroups[this.index])) {
	            this.productBundleGroup.data.skuCollectionConfig.filterGroups[this.index] = {};
	            this.productBundleGroup.data.skuCollectionConfig.filterGroups[this.index].filterGroup = [];
	        }
	        var options = {
	            filterGroupsConfig: this.productBundleGroup.data.skuCollectionConfig.filterGroups[this.index].filterGroup,
	            columnsConfig: this.productBundleGroup.data.skuCollectionConfig.columns
	        };
	        this.collectionConfig = collectionConfigService.newCollectionConfig('Sku');
	        this.collectionConfig.loadFilterGroups(options.filterGroupsConfig);
	        this.collectionConfig.loadColumns(options.columnsConfig);
	        this.collectionConfig.setAllRecords(true);
	        this.getCollection();
	    }
	    SWProductBundleGroupController.$inject = ["$log", "$timeout", "collectionConfigService", "productBundleService", "metadataService", "utilityService", "$slatwall", "productBundlePartialsPath"];
	    return SWProductBundleGroupController;
	})();
	var SWProductBundleGroup = (function () {
	    function SWProductBundleGroup($log, $timeout, collectionConfigService, productBundleService, metadataservice, utilityservice, $slatwall, productBundlePartialsPath, pathBuilderConfig) {
	        this.$log = $log;
	        this.$timeout = $timeout;
	        this.collectionConfigService = collectionConfigService;
	        this.productBundleService = productBundleService;
	        this.metadataservice = metadataservice;
	        this.utilityservice = utilityservice;
	        this.$slatwall = $slatwall;
	        this.productBundlePartialsPath = productBundlePartialsPath;
	        this.restrict = "EA";
	        this.scope = {};
	        this.bindToController = {
	            productBundleGroup: "=",
	            index: "=",
	            addProductBundleGroup: "&",
	            removeProductBundleGroup: "&",
	            formName: "@"
	        };
	        this.controller = SWProductBundleGroupController;
	        this.controllerAs = "swProductBundleGroup";
	        this.link = function ($scope, element, attrs) {
	        };
	        this.templateUrl = pathBuilderConfig.buildPartialsPath(productBundlePartialsPath) + "productbundle/productbundlegroup.html";
	    }
	    SWProductBundleGroup.Factory = function () {
	        var directive = function ($log, $timeout, collectionConfigService, productBundleService, metadataService, utilityService, $slatwall, productBundlePartialsPath, pathBuilderConfig) {
	            return new SWProductBundleGroup($log, $timeout, collectionConfigService, productBundleService, metadataService, utilityService, $slatwall, productBundlePartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            "$log", "$timeout", "collectionConfigService", "productBundleService", "metadataService", "utilityService", "$slatwall", "productBundlePartialsPath",
	            "pathBuilderConfig"
	        ];
	        return directive;
	    };
	    SWProductBundleGroup.$inject = ["$http", "$slatwall", "$log", "$timeout", "collectionConfigService", "productBundleService", "metadataService", "utilityService", "$slatwall", "productBundlePartialsPath"];
	    return SWProductBundleGroup;
	})();
	exports.SWProductBundleGroup = SWProductBundleGroup;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	//services
	var workflowconditionservice_1 = __webpack_require__(121);
	//directives
	var swadmincreatesuperuser_1 = __webpack_require__(122);
	var swworkflowbasic_1 = __webpack_require__(123);
	var swworkflowcondition_1 = __webpack_require__(124);
	var swworkflowconditiongroupitem_1 = __webpack_require__(125);
	var swworkflowconditiongroups_1 = __webpack_require__(126);
	var swworkflowtask_1 = __webpack_require__(127);
	var swworkflowtaskactions_1 = __webpack_require__(128);
	var swworkflowtasks_1 = __webpack_require__(129);
	var swworkflowtrigger_1 = __webpack_require__(130);
	var swworkflowtriggers_1 = __webpack_require__(131);
	//filters
	var workflowmodule = angular.module('hibachi.workflow', []).config(function () {
	})
	    .constant('workflowPartialsPath', 'components/workflow')
	    .service('workflowConditionService', workflowconditionservice_1.WorkflowConditionService)
	    .directive('swAdminCreateSuperUser', swadmincreatesuperuser_1.SWAdminCreateSuperUser.Factory())
	    .directive('swWorkflowBasic', swworkflowbasic_1.SWWorkflowBasic.Factory())
	    .directive('swWorkflowCondition', swworkflowcondition_1.SWWorkflowCondition.Factory())
	    .directive('swWorkflowCondition', swworkflowconditiongroupitem_1.SWWorkflowConditionGroupItem.Factory())
	    .directive('swWorkflowCondition', swworkflowconditiongroups_1.SWWorkflowConditionGroups.Factory())
	    .directive('swWorkflowCondition', swworkflowtask_1.SWWorkflowTask.Factory())
	    .directive('swWorkflowCondition', swworkflowtaskactions_1.SWWorkflowTaskActions.Factory())
	    .directive('swWorkflowCondition', swworkflowtasks_1.SWWorkflowTasks.Factory())
	    .directive('swWorkflowCondition', swworkflowtrigger_1.SWWorkflowTrigger.Factory())
	    .directive('swWorkflowCondition', swworkflowtriggers_1.SWWorkflowTriggers.Factory());
	exports.workflowmodule = workflowmodule;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../../typings/tsd.d.ts' />
	var WorkflowCondition = (function () {
	    function WorkflowCondition() {
	        this.propertyIdentifer = "";
	        this.comparisonOperator = "";
	        this.value = "";
	        this.displayPropertyIdentifier = "";
	        this.$$disabled = false;
	        this.$$isClosed = true;
	        this.$$isNew = true;
	    }
	    return WorkflowCondition;
	})();
	exports.WorkflowCondition = WorkflowCondition;
	var WorkflowConditionGroupItem = (function () {
	    function WorkflowConditionGroupItem() {
	        this.workflowConditionGroup = [];
	    }
	    return WorkflowConditionGroupItem;
	})();
	exports.WorkflowConditionGroupItem = WorkflowConditionGroupItem;
	var WorkflowConditionService = (function () {
	    function WorkflowConditionService($log, $slatwall, alertService) {
	        var _this = this;
	        this.$log = $log;
	        this.newWorkflowCondition = function () {
	            return new WorkflowCondition;
	        };
	        this.addWorkflowCondition = function (groupItem, condition) {
	            _this.$log.debug('addWorkflowCondition');
	            _this.$log.debug(groupItem);
	            _this.$log.debug(condition);
	            if (groupItem.length >= 1) {
	                condition.logicalOperator = 'AND';
	            }
	            groupItem.push(condition);
	        };
	        this.newWorkflowConditionGroupItem = function () {
	            return new WorkflowConditionGroupItem;
	        };
	        this.addWorkflowConditionGroupItem = function (group, groupItem) {
	            group.push(groupItem);
	        };
	    }
	    WorkflowConditionService.$inject = ["$log", "$slatwall", "alertService"];
	    return WorkflowConditionService;
	})();
	exports.WorkflowConditionService = WorkflowConditionService;


/***/ },
/* 122 */
/***/ function(module, exports) {

	var SWAdminCreateSuperUser = (function () {
	    function SWAdminCreateSuperUser($log, $slatwall, workflowPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            scope: {},
	            templateUrl: pathBuilderConfig.buildPartialsPath(workflowPartialsPath) + "admincreatesuperuser.html",
	            link: function (scope, element, attrs) {
	                scope.Account_SetupInitialAdmin = $slatwall.newAccount_SetupInitialAdmin();
	            }
	        };
	    }
	    SWAdminCreateSuperUser.Factory = function () {
	        var directive = function ($log, $slatwall, workflowPartialsPath, pathBuilderConfig) {
	            return new SWAdminCreateSuperUser($log, $slatwall, workflowPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            'workflowPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWAdminCreateSuperUser;
	})();
	exports.SWAdminCreateSuperUser = SWAdminCreateSuperUser;


/***/ },
/* 123 */
/***/ function(module, exports) {

	var SWWorkflowBasic = (function () {
	    function SWWorkflowBasic($log, $location, $slatwall, formService, workflowPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'A',
	            scope: {
	                workflow: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(workflowPartialsPath)
	                + "workflowbasic.html",
	            link: function (scope, element, attrs) {
	            }
	        };
	    }
	    SWWorkflowBasic.Factory = function () {
	        var directive = function ($log, $location, $slatwall, formService, workflowPartialsPath, pathBuilderConfig) {
	            return new SWWorkflowBasic($log, $location, $slatwall, formService, workflowPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$location',
	            '$slatwall',
	            'formService',
	            'workflowPartialsPath', ,
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWWorkflowBasic;
	})();
	exports.SWWorkflowBasic = SWWorkflowBasic;


/***/ },
/* 124 */
/***/ function(module, exports) {

	var SWWorkflowCondition = (function () {
	    function SWWorkflowCondition($log, $location, $slatwall, formService, metadataService, workflowPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            scope: {
	                workflowCondition: "=",
	                workflowConditionIndex: "=",
	                workflow: "=",
	                filterPropertiesList: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(workflowPartialsPath) + "workflowcondition.html",
	            link: function (scope, element, attrs) {
	                $log.debug('workflowCondition init');
	                $log.debug(scope);
	                scope.selectBreadCrumb = function (breadCrumbIndex) {
	                    //splice out array items above index
	                    var removeCount = scope.filterItem.breadCrumbs.length - 1 - breadCrumbIndex;
	                    scope.filterItem.breadCrumbs.splice(breadCrumbIndex + 1, removeCount);
	                    scope.selectedFilterPropertyChanged(null);
	                };
	                scope.selectedFilterPropertyChanged = function (selectedFilterProperty) {
	                    $log.debug('selectedFilterProperty');
	                    $log.debug(selectedFilterProperty);
	                    scope.selectedFilterProperty = selectedFilterProperty;
	                };
	                if (angular.isUndefined(scope.workflowCondition.breadCrumbs)) {
	                    scope.workflowCondition.breadCrumbs = [];
	                    if (scope.workflowCondition.propertyIdentifier === "") {
	                        scope.workflowCondition.breadCrumbs = [
	                            {
	                                entityAlias: scope.workflow.data.workflowObject,
	                                cfc: scope.workflow.data.workflowObject,
	                                propertyIdentifier: scope.workflow.data.workflowObject
	                            }
	                        ];
	                    }
	                    else {
	                        var entityAliasArrayFromString = scope.workflowCondition.propertyIdentifier.split('.');
	                        entityAliasArrayFromString.pop();
	                        for (var i in entityAliasArrayFromString) {
	                            var breadCrumb = {
	                                entityAlias: entityAliasArrayFromString[i],
	                                cfc: entityAliasArrayFromString[i],
	                                propertyIdentifier: entityAliasArrayFromString[i]
	                            };
	                            scope.workflowCondition.breadCrumbs.push(breadCrumb);
	                        }
	                    }
	                }
	                else {
	                    angular.forEach(scope.workflowCondition.breadCrumbs, function (breadCrumb, key) {
	                        if (angular.isUndefined(scope.filterPropertiesList[breadCrumb.propertyIdentifier])) {
	                            var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName(breadCrumb.cfc);
	                            filterPropertiesPromise.then(function (value) {
	                                metadataService.setPropertiesList(value, breadCrumb.propertyIdentifier);
	                                scope.filterPropertiesList[breadCrumb.propertyIdentifier] = metadataService.getPropertiesListByBaseEntityAlias(breadCrumb.propertyIdentifier);
	                                metadataService.formatPropertiesList(scope.filterPropertiesList[breadCrumb.propertyIdentifier], breadCrumb.propertyIdentifier);
	                                var entityAliasArrayFromString = scope.workflowCondition.propertyIdentifier.split('.');
	                                entityAliasArrayFromString.pop();
	                                entityAliasArrayFromString = entityAliasArrayFromString.join('.').trim();
	                                if (angular.isDefined(scope.filterPropertiesList[entityAliasArrayFromString])) {
	                                    for (var i in scope.filterPropertiesList[entityAliasArrayFromString].data) {
	                                        var filterProperty = scope.filterPropertiesList[entityAliasArrayFromString].data[i];
	                                        if (filterProperty.propertyIdentifier === scope.workflowCondition.propertyIdentifier) {
	                                            //selectItem from drop down
	                                            scope.selectedFilterProperty = filterProperty;
	                                            //decorate with value and comparison Operator so we can use it in the Condition section
	                                            scope.selectedFilterProperty.value = scope.workflowCondition.value;
	                                            scope.selectedFilterProperty.comparisonOperator = scope.workflowCondition.comparisonOperator;
	                                        }
	                                    }
	                                }
	                            });
	                        }
	                        else {
	                            var entityAliasArrayFromString = scope.workflowCondition.propertyIdentifier.split('.');
	                            entityAliasArrayFromString.pop();
	                            entityAliasArrayFromString = entityAliasArrayFromString.join('.').trim();
	                            if (angular.isDefined(scope.filterPropertiesList[entityAliasArrayFromString])) {
	                                for (var i in scope.filterPropertiesList[entityAliasArrayFromString].data) {
	                                    var filterProperty = scope.filterPropertiesList[entityAliasArrayFromString].data[i];
	                                    if (filterProperty.propertyIdentifier === scope.workflowCondition.propertyIdentifier) {
	                                        //selectItem from drop down
	                                        scope.selectedFilterProperty = filterProperty;
	                                        //decorate with value and comparison Operator so we can use it in the Condition section
	                                        scope.selectedFilterProperty.value = scope.workflowCondition.value;
	                                        scope.selectedFilterProperty.comparisonOperator = scope.workflowCondition.comparisonOperator;
	                                    }
	                                }
	                            }
	                        }
	                    });
	                }
	            }
	        };
	    }
	    SWWorkflowCondition.Factory = function () {
	        var directive = function ($log, $location, $slatwall, formService, metadataService, workflowPartialsPath, pathBuilderConfig) {
	            return new SWWorkflowCondition($log, $location, $slatwall, formService, metadataService, workflowPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$location',
	            '$slatwall',
	            'formService',
	            'metadataService',
	            'workflowPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWWorkflowCondition;
	})();
	exports.SWWorkflowCondition = SWWorkflowCondition;


/***/ },
/* 125 */
/***/ function(module, exports) {

	var SWWorkflowConditionGroupItem = (function () {
	    function SWWorkflowConditionGroupItem($log, $location, $slatwall, formService, workflowPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            templateUrl: pathBuilderConfig.buildPartialsPath(workflowPartialsPath) + "workflowconditiongroupitem.html",
	            link: function (scope, element, attrs) {
	            }
	        };
	    }
	    SWWorkflowConditionGroupItem.Factory = function () {
	        var directive = function ($log, $location, $slatwall, formService, workflowPartialsPath, pathBuilderConfig) {
	            return new ($log,
	                $location,
	                $slatwall,
	                formService,
	                workflowPartialsPath,
	                pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$location',
	            '$slatwall',
	            'formService',
	            'workflowPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWWorkflowConditionGroupItem;
	})();
	exports.SWWorkflowConditionGroupItem = SWWorkflowConditionGroupItem;


/***/ },
/* 126 */
/***/ function(module, exports) {

	var SWWorkflowConditionGroups = (function () {
	    function SWWorkflowConditionGroups($log, workflowConditionService, workflowPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            scope: {
	                workflowConditionGroupItem: "=",
	                workflowConditionGroup: "=",
	                workflow: "=",
	                filterPropertiesList: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(workflowPartialsPath) + "workflowconditiongroups.html",
	            link: function (scope, element, attrs) {
	                $log.debug('workflowconditiongroups init');
	                scope.addWorkflowCondition = function () {
	                    $log.debug('addWorkflowCondition');
	                    var workflowCondition = workflowConditionService.newWorkflowCondition();
	                    workflowConditionService.addWorkflowCondition(scope.workflowConditionGroupItem, workflowCondition);
	                };
	                scope.addWorkflowGroupItem = function () {
	                    $log.debug('addWorkflowGrouptItem');
	                    var workflowConditionGroupItem = workflowConditionService.newWorkflowConditionGroupItem();
	                    workflowConditionService.addWorkflowConditionGroupItem(scope.workflowConditionItem, workflowConditionGroupItem);
	                };
	            }
	        };
	    }
	    SWWorkflowConditionGroups.Factory = function () {
	        var directive = function ($log, workflowConditionService, workflowPartialsPath, pathBuilderConfig) {
	            return new SWWorkflowConditionGroups($log, workflowConditionService, workflowPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            'workflowConditionService',
	            'workflowPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWWorkflowConditionGroups;
	})();
	exports.SWWorkflowConditionGroups = SWWorkflowConditionGroups;


/***/ },
/* 127 */
/***/ function(module, exports) {

	var SWWorkflowTask = (function () {
	    function SWWorkflowTask($log, $location, $timeout, $slatwall, metadataService, collectionService, workflowPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            scope: {
	                workflowTask: "=",
	                workflowTasks: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(workflowPartialsPath) + "workflowtask.html",
	            link: function (scope, element, attrs) {
	                scope.removeWorkflowTask = function (workflowTask) {
	                    var deletePromise = workflowTask.$$delete();
	                    deletePromise.then(function () {
	                        if (workflowTask === scope.workflowTasks.selectedTask) {
	                            delete scope.workflowTasks.selectedTask;
	                        }
	                        scope.workflowTasks.splice(workflowTask.$$index, 1);
	                        for (var i in scope.workflowTasks) {
	                            scope.workflowTasks[i].$$index = i;
	                        }
	                    });
	                };
	            }
	        };
	    }
	    SWWorkflowTask.Factory = function () {
	        var directive = function ($log, $location, $timeout, $slatwall, metadataService, collectionService, workflowPartialsPath, pathBuilderConfig) {
	            return new SWWorkflowTask($log, $location, $timeout, $slatwall, metadataService, collectionService, workflowPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$location',
	            '$timeout',
	            '$slatwall',
	            'metadataService',
	            'collectionService',
	            'workflowPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWWorkflowTask;
	})();
	exports.SWWorkflowTask = SWWorkflowTask;


/***/ },
/* 128 */
/***/ function(module, exports) {

	var SWWorkflowTaskActions = (function () {
	    function SWWorkflowTaskActions($log, $slatwall, metadataService, collectionService, workflowPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'AE',
	            scope: {
	                workflowTask: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(workflowPartialsPath) + "workflowtaskactions.html",
	            link: function (scope, element, attrs) {
	                $log.debug('Workflow Task Actions Init');
	                $log.debug(scope.workflowTask);
	                scope.openActions = false;
	                /**
	                    * Returns the correct object based on the selected object type.
	                    */
	                var getObjectByActionType = function (workflowTaskAction) {
	                    if (workflowTaskAction.data.actionType === 'email') {
	                        workflowTaskAction.$$getEmailTemplate();
	                    }
	                    else if (workflowTaskAction.data.actionType === 'print') {
	                        workflowTaskAction.$$getPrintTemplate();
	                    }
	                };
	                /**
	                    * --------------------------------------------------------------------------------------------------------
	                    * Returns workflow task action, and saves them to the scope variable workflowtaskactions
	                    * --------------------------------------------------------------------------------------------------------
	                    */
	                scope.getWorkflowTaskActions = function () {
	                    /***
	                    Note:
	                    This conditional is checking whether or not we need to be retrieving to
	                    items all over again. If we already have them, we won't make another
	                    trip to the database.
	                    
	                ***/
	                    if (angular.isUndefined(scope.workflowTask.data.workflowTaskActions)) {
	                        var workflowTaskPromise = scope.workflowTask.$$getWorkflowTaskActions();
	                        workflowTaskPromise.then(function () {
	                            scope.workflowTaskActions = scope.workflowTask.data.workflowTaskActions;
	                            angular.forEach(scope.workflowTaskActions, function (workflowTaskAction) {
	                                getObjectByActionType(workflowTaskAction);
	                            });
	                            $log.debug(scope.workflowTaskActions);
	                        });
	                    }
	                    else {
	                        scope.workflowTaskActions = scope.workflowTask.data.workflowTaskActions;
	                    }
	                    if (angular.isUndefined(scope.workflowTask.data.workflowTaskActions)) {
	                        scope.workflowTask.data.workflowTaskActions = [];
	                        scope.workflowTaskActions = scope.workflowTask.data.workflowTaskActions;
	                    }
	                };
	                scope.getWorkflowTaskActions(); //Call get
	                /**
	                    * --------------------------------------------------------------------------------------------------------
	                    * Saves the workflow task actions by calling the objects $$save method.
	                    * @param taskAction
	                    * --------------------------------------------------------------------------------------------------------
	                    */
	                scope.saveWorkflowTaskAction = function (taskAction, context) {
	                    $log.debug("Context: " + context);
	                    $log.debug("saving task action and parent task");
	                    $log.debug(taskAction);
	                    var savePromise = scope.workflowTaskActions.selectedTaskAction.$$save();
	                    savePromise.then(function () {
	                        var taSavePromise = taskAction.$$save;
	                        //Clear the form by adding a new task action if 'save and add another' otherwise, set save and set finished
	                        if (context == 'add') {
	                            $log.debug("Save and New");
	                            scope.addWorkflowTaskAction(taskAction);
	                            scope.finished = false;
	                        }
	                        else if (context == "finish") {
	                            scope.finished = true;
	                        }
	                    });
	                }; //<--end save
	                /**
	                    * Sets the editing state to show/hide the edit screen.
	                    */
	                scope.setHidden = function (task) {
	                    if (!angular.isObject(task)) {
	                        task = {};
	                    }
	                    if (angular.isUndefined(task.hidden)) {
	                        task.hidden = false;
	                    }
	                    else {
	                        $log.debug("setHidden()", "Setting Hide Value To " + !task.hidden);
	                        task.hidden = !task.hidden;
	                    }
	                };
	                /**
	                    * --------------------------------------------------------------------------------------------------------
	                    * Adds workflow action items by calling the workflowTask objects $$addWorkflowTaskAction() method
	                    * and sets the result to scope.
	                    * @param taskAction
	                    * --------------------------------------------------------------------------------------------------------
	                    */
	                scope.addWorkflowTaskAction = function (taskAction) {
	                    var workflowTaskAction = scope.workflowTask.$$addWorkflowTaskAction();
	                    scope.selectWorkflowTaskAction(workflowTaskAction);
	                    $log.debug(scope.workflow);
	                };
	                /**
	                    * --------------------------------------------------------------------------------------------------------
	                    * Selects a new task action and populates the task action properties.
	                    * --------------------------------------------------------------------------------------------------------
	                    */
	                scope.selectWorkflowTaskAction = function (workflowTaskAction) {
	                    $log.debug("Selecting new task action for editing: ");
	                    $log.debug(workflowTaskAction);
	                    scope.finished = false;
	                    scope.workflowTaskActions.selectedTaskAction = undefined;
	                    var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName(scope.workflowTask.data.workflow.data.workflowObject);
	                    filterPropertiesPromise.then(function (value) {
	                        scope.filterPropertiesList = {
	                            baseEntityName: scope.workflowTask.data.workflow.data.workflowObject,
	                            baseEntityAlias: "_" + scope.workflowTask.data.workflow.data.workflowObject
	                        };
	                        metadataService.setPropertiesList(value, scope.workflowTask.data.workflow.data.workflowObject);
	                        scope.filterPropertiesList[scope.workflowTask.data.workflow.data.workflowObject] = metadataService.getPropertiesListByBaseEntityAlias(scope.workflowTask.data.workflow.data.workflowObject);
	                        metadataService.formatPropertiesList(scope.filterPropertiesList[scope.workflowTask.data.workflow.data.workflowObject], scope.workflowTask.data.workflow.data.workflowObject);
	                        scope.workflowTaskActions.selectedTaskAction = workflowTaskAction;
	                    });
	                };
	                /**
	                    * Overrides the confirm directive method deleteEntity. This is needed for the modal popup.
	                    */
	                scope.deleteEntity = function (entity) {
	                    scope.removeWorkflowTaskAction(entity);
	                };
	                /**
	                    * --------------------------------------------------------------------------------------------------------
	                    * Removes a workflow task action by calling the selected tasks $$delete method
	                    * and reindexes the list.
	                    * --------------------------------------------------------------------------------------------------------
	                    */
	                scope.removeWorkflowTaskAction = function (workflowTaskAction) {
	                    var deletePromise = workflowTaskAction.$$delete();
	                    deletePromise.then(function () {
	                        if (workflowTaskAction === scope.workflowTaskActions.selectedTaskAction) {
	                            delete scope.workflowTaskActions.selectedTaskAction;
	                        }
	                        $log.debug("removeWorkflowTaskAction");
	                        $log.debug(workflowTaskAction);
	                        scope.workflowTaskActions.splice(workflowTaskAction.$$actionIndex, 1);
	                        for (var i in scope.workflowTaskActions) {
	                            scope.workflowTaskActions[i].$$actionIndex = i;
	                        }
	                    });
	                };
	            }
	        };
	    }
	    SWWorkflowTaskActions.Factory = function () {
	        var directive = function ($log, $slatwall, metadataService, collectionService, workflowPartialsPath, pathBuilderConfig) {
	            return new SWWorkflowTaskActions($log, $slatwall, metadataService, collectionService, workflowPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            'metadataService',
	            'collectionService',
	            'workflowPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWWorkflowTaskActions;
	})();
	exports.SWWorkflowTaskActions = SWWorkflowTaskActions;


/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Handles adding, editing, and deleting Workflows Tasks.
	 */
	var SWWorkflowTasks = (function () {
	    function SWWorkflowTasks($log, $location, $slatwall, metadataService, collectionService, workflowPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'A',
	            scope: {
	                workflow: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(workflowPartialsPath) + "workflowtasks.html",
	            link: function (scope, element, attrs) {
	                scope.workflowPartialsPath = workflowPartialsPath;
	                scope.propertiesList = {};
	                function logger(context, message) {
	                    $log.debug("SwWorkflowTasks :" + context + " : " + message);
	                }
	                /**
	                 * Sets workflowTasks on the scope by populating with $$getWorkflowTasks()
	                 */
	                scope.getWorkflowTasks = function () {
	                    logger("getWorkflowTasks", "Retrieving items");
	                    logger("getWorkflowTasks", "Workflow Tasks");
	                    $log.debug(scope.workflowTasks);
	                    /***
	                       Note:
	                       This conditional is checking whether or not we need to be retrieving to
	                       items all over again. If we already have them, we won't make another
	                       trip to the database.
	                       
	                     ***/
	                    if (angular.isUndefined(scope.workflow.data.workflowTasks)) {
	                        var workflowTasksPromise = scope.workflow.$$getWorkflowTasks();
	                        workflowTasksPromise.then(function () {
	                            scope.workflowTasks = scope.workflow.data.workflowTasks;
	                        });
	                    }
	                    else {
	                        logger("getWorkflowTasks", "Retrieving cached Items");
	                        scope.workflowTasks = scope.workflow.data.workflowTasks;
	                    }
	                    if (angular.isUndefined(scope.workflow.data.workflowTasks)) {
	                        //Reset the workflowTasks.
	                        logger("getWorkflowTasks", "workflowTasks is undefined.");
	                        scope.workflow.data.workflowTasks = [];
	                        scope.workflowTasks = scope.workflow.data.workflowTasks;
	                    }
	                };
	                scope.getWorkflowTasks(); //call tasks
	                /**
	                 * Sets the editing state to show/hide the edit screen.
	                 */
	                scope.setHidden = function (task) {
	                    if (!angular.isObject(task) || angular.isUndefined(task.hidden)) {
	                        task.hidden = false;
	                    }
	                    else {
	                        logger("setHidden()", "Setting Hide Value To " + !task.hidden);
	                        task.hidden = !task.hidden;
	                    }
	                };
	                /**
	                 * Add a workflow task and logs the result.
	                 */
	                scope.addWorkflowTask = function () {
	                    var newWorkflowTask = scope.workflow.$$addWorkflowTask();
	                    logger("var newWorkflowTask", newWorkflowTask);
	                    scope.selectWorkflowTask(newWorkflowTask);
	                };
	                /**
	                  * Watches the select for changes.
	                  */
	                scope.$watch('workflowTasks.selectedTask.data.workflow.data.workflowObject', function (newValue, oldValue) {
	                    logger("scope.$watch", "Change Detected " + newValue + " from " + oldValue);
	                    if ((newValue !== oldValue && angular.isDefined(scope.workflowTasks.selectedTask))) {
	                        logger("scope.$watch", "Change to " + newValue);
	                        scope.workflowTasks.selectedTask.data.taskConditionsConfig.baseEntityAlias = newValue;
	                        scope.workflowTasks.selectedTask.data.taskConditionsConfig.baseEntityName = newValue;
	                    }
	                });
	                /**
	                   * --------------------------------------------------------------------------------------------------------
	                   * Saves the workflow task by calling the objects $$save method.
	                   * @param task
	                   * --------------------------------------------------------------------------------------------------------
	                   */
	                scope.saveWorkflowTask = function (task, context) {
	                    scope.done = true;
	                    $log.debug("Context: " + context);
	                    $log.debug("saving task");
	                    $log.debug(scope.workflowTasks.selectedTask);
	                    var savePromise = scope.workflowTasks.selectedTask.$$save();
	                    savePromise.then(function () {
	                        if (context === 'add') {
	                            logger("SaveWorkflowTask", "Save and New");
	                            scope.addWorkflowTask();
	                            //scope.setHidden(scope.workflowTasks.selectedTask);
	                            scope.finished = true;
	                        }
	                        else if (context == "finish") {
	                            scope.finished = false;
	                        }
	                    });
	                    scope.setHidden(scope.workflowTasks.selectedTask);
	                }; //<--end save*/
	                /**
	                 * Select a workflow task.
	                 */
	                scope.selectWorkflowTask = function (workflowTask) {
	                    scope.done = false;
	                    logger("selectWorkflowTask", "selecting a workflow task");
	                    $log.debug(workflowTask);
	                    scope.finished = false;
	                    scope.workflowTasks.selectedTask = undefined;
	                    var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName(scope.workflow.data.workflowObject);
	                    filterPropertiesPromise.then(function (value) {
	                        scope.filterPropertiesList = {
	                            baseEntityName: scope.workflow.data.workflowObject,
	                            baseEntityAlias: "_" + scope.workflow.data.workflowObject
	                        };
	                        metadataService.setPropertiesList(value, scope.workflow.data.workflowObject);
	                        scope.filterPropertiesList[scope.workflow.data.workflowObject] = metadataService.getPropertiesListByBaseEntityAlias(scope.workflow.data.workflowObject);
	                        metadataService.formatPropertiesList(scope.filterPropertiesList[scope.workflow.data.workflowObject], scope.workflow.data.workflowObject);
	                        scope.workflowTasks.selectedTask = workflowTask;
	                    });
	                };
	                /* Does a delete of the property using delete */
	                scope.softRemoveTask = function (workflowTask) {
	                    logger("SoftRemoveTask", "calling delete");
	                    if (workflowTask === scope.workflowTasks.selectedTask) {
	                        delete scope.workflowTasks.selectedTask;
	                    }
	                    scope.removeIndexFromTasks(workflowTask.$$index);
	                    scope.reindexTaskList();
	                };
	                /* Does an API call delete using $$delete */
	                scope.hardRemoveTask = function (workflowTask) {
	                    logger("HardRemoveTask", "$$delete");
	                    var deletePromise = workflowTask.$$delete();
	                    deletePromise.then(function () {
	                        if (workflowTask === scope.workflowTasks.selectedTask) {
	                            delete scope.workflowTasks.selectedTask;
	                        }
	                        scope.removeIndexFromTasks(workflowTask.$$index);
	                        scope.reindexTaskList();
	                    });
	                };
	                /*Override the delete entity in the confirmation controller*/
	                scope.deleteEntity = function (entity) {
	                    scope.hardRemoveTask(entity);
	                };
	                /* Re-indexes the task list */
	                scope.reindexTaskList = function () {
	                    for (var i in scope.workflowTasks) {
	                        logger("ReIndexing the list", i);
	                        scope.workflowTasks[i].$$index = i;
	                    }
	                };
	                /* Removes the tasks index from the tasks array */
	                scope.removeIndexFromTasks = function (index) {
	                    logger("RemoveIndexFromTasks", index);
	                    scope.workflowTasks.splice(index, 1);
	                };
	            }
	        };
	    }
	    SWWorkflowTasks.Factory = function () {
	        var directive = function ($log, $location, $slatwall, metadataService, collectionService, workflowPartialsPath, pathBuilderConfig) {
	            return new SWWorkflowTasks($log, $location, $slatwall, metadataService, collectionService, workflowPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$location',
	            '$slatwall',
	            'metadataService',
	            'collectionService',
	            'workflowPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWWorkflowTasks;
	})();
	exports.SWWorkflowTasks = SWWorkflowTasks;


/***/ },
/* 130 */
/***/ function(module, exports) {

	var SWWorkflowTrigger = (function () {
	    function SWWorkflowTrigger($log, $slatwall, metadataService, workflowPartialsPath, pathBuilderConfig) {
	        return {
	            restrict: 'A',
	            replace: true,
	            scope: {
	                workflowTrigger: "=",
	                workflowTriggers: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(workflowPartialsPath) + "workflowtrigger.html",
	            link: function (scope, element, attrs) {
	                $log.debug('workflow trigger init');
	                /**
	                 * Selects the current workflow trigger.
	                 */
	                scope.selectWorkflowTrigger = function (workflowTrigger) {
	                    $log.debug('SelectWorkflowTriggers');
	                    scope.done = false;
	                    $log.debug(workflowTrigger);
	                    scope.finished = false;
	                    scope.workflowTriggers.selectedTrigger = undefined;
	                    var filterPropertiesPromise = $slatwall.getFilterPropertiesByBaseEntityName(scope.workflowTrigger.data.workflow.data.workflowObject);
	                    filterPropertiesPromise.then(function (value) {
	                        scope.filterPropertiesList = {
	                            baseEntityName: scope.workflowTrigger.data.workflow.data.workflowObject,
	                            baseEntityAlias: "_" + scope.workflowTrigger.data.workflow.data.workflowObject
	                        };
	                        metadataService.setPropertiesList(value, scope.workflowTrigger.data.workflow.data.workflowObject);
	                        scope.filterPropertiesList[scope.workflowTrigger.data.workflow.data.workflowObject] = metadataService.getPropertiesListByBaseEntityAlias(scope.workflowTrigger.data.workflow.data.workflowObject);
	                        metadataService.formatPropertiesList(scope.filterPropertiesList[scope.workflowTrigger.data.workflow.data.workflowObject], scope.workflowTrigger.data.workflow.data.workflowObject);
	                        scope.workflowTriggers.selectedTrigger = workflowTrigger;
	                    });
	                };
	                /**
	                 * Overrides the delete function for the confirmation modal. Delegates to the normal delete method.
	                 */
	                scope.deleteEntity = function (entity) {
	                    $log.debug("Delete Called");
	                    $log.debug(entity);
	                    scope.deleteTrigger(entity);
	                };
	                /**
	                 * Hard deletes a workflow trigger
	                 */
	                scope.deleteTrigger = function (workflowTrigger) {
	                    var deleteTriggerPromise = $slatwall.saveEntity('WorkflowTrigger', workflowTrigger.data.workflowTriggerID, {}, 'Delete');
	                    deleteTriggerPromise.then(function (value) {
	                        $log.debug('deleteTrigger');
	                        scope.workflowTriggers.splice(workflowTrigger.$$index, 1);
	                    });
	                };
	                /**
	                 * Sets the editing state to show/hide the edit screen.
	                 */
	                scope.setHidden = function (trigger) {
	                    if (!angular.isObject(trigger) || angular.isUndefined(trigger.hidden)) {
	                        trigger.hidden = false;
	                    }
	                    else {
	                        $log.debug("setHidden()", "Setting Hide Value To " + !trigger.hidden);
	                        trigger.hidden = !trigger.hidden;
	                    }
	                };
	            }
	        };
	    }
	    SWWorkflowTrigger.Factory = function () {
	        var directive = function ($log, $slatwall, metadataService, workflowPartialsPath, pathBuilderConfig) {
	            return new SWWorkflowTrigger($log, $slatwall, metadataService, workflowPartialsPath, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$slatwall',
	            'metadataService',
	            'workflowPartialsPath',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWWorkflowTrigger;
	})();
	exports.SWWorkflowTrigger = SWWorkflowTrigger;


/***/ },
/* 131 */
/***/ function(module, exports) {

	var SWWorkflowTriggers = (function () {
	    function SWWorkflowTriggers($log, $location, $slatwall, workflowPartialsPath, formService, pathBuilderConfig) {
	        return {
	            restrict: 'E',
	            scope: {
	                workflow: "="
	            },
	            templateUrl: pathBuilderConfig.buildPartialsPath(workflowPartialsPath) + "workflowtriggers.html",
	            link: function (scope, element, attrs, formController) {
	                $log.debug('Workflow triggers init');
	                scope.$id = 'swWorkflowTriggers';
	                /**
	                 * Retrieves the workflow triggers.
	                 */
	                scope.getWorkflowTriggers = function () {
	                    /***
	                       Note:
	                       This conditional is checking whether or not we need to be retrieving to
	                       items all over again. If we already have them, we won't make another
	                       trip to the database.
	                       
	                    ***/
	                    if (angular.isUndefined(scope.workflow.data.workflowTriggers)) {
	                        var workflowTriggersPromise = scope.workflow.$$getWorkflowTriggers();
	                        workflowTriggersPromise.then(function () {
	                            scope.workflowTriggers = scope.workflow.data.workflowTriggers;
	                            $log.debug('workflowtriggers');
	                            $log.debug(scope.workflowTriggers);
	                            /* resets the workflow trigger */
	                            if (angular.isUndefined(scope.workflow.data.workflowTriggers)) {
	                                scope.workflow.data.workflowTriggers = [];
	                                scope.workflowTriggers = scope.workflow.data.workflowTriggers;
	                            }
	                            angular.forEach(scope.workflowTriggers, function (workflowTrigger, key) {
	                                $log.debug('trigger');
	                                $log.debug(workflowTrigger);
	                                if (workflowTrigger.data.triggerType === 'Schedule') {
	                                    workflowTrigger.$$getSchedule();
	                                    workflowTrigger.$$getScheduleCollection();
	                                } //<---end if
	                            }); //<---end forEach
	                        }); //<---end workflow triggers promise
	                    }
	                    else {
	                        //Use the cached versions.
	                        scope.workflowTriggers = scope.workflow.data.workflowTriggers;
	                    } //<---end else
	                };
	                scope.getWorkflowTriggers(); //call triggers
	                scope.showCollections = false;
	                scope.collections = [];
	                scope.getCollectionByWorkflowObject = function () {
	                    var filterGroupsConfig = '[' +
	                        '{' +
	                        '"filterGroup":[' +
	                        '{' +
	                        '"propertyIdentifier":"_collection.collectionObject",' +
	                        '"comparisonOperator":"=",' +
	                        '"value":"' + scope.workflow.data.workflowObject + '"' +
	                        '}' +
	                        ']' +
	                        '}' +
	                        ']';
	                    var collectionsPromise = $slatwall.getEntity('Collection', { filterGroupsConfig: filterGroupsConfig });
	                    collectionsPromise.then(function (value) {
	                        $log.debug('getcollections');
	                        scope.collections = value.pageRecords;
	                        $log.debug(scope.collections);
	                    });
	                };
	                scope.searchEvent = {
	                    name: ''
	                };
	                /**
	                 * Watches for changes in the event
	                 */
	                scope.showEventOptions = false;
	                scope.eventOptions = [];
	                scope.$watch('searchEvent.name', function (newValue, oldValue) {
	                    if (newValue !== oldValue) {
	                        scope.getEventOptions(scope.workflow.data.workflowObject);
	                    }
	                });
	                /**
	                 * Retrieves the event options for a workflow trigger item.
	                 */
	                scope.getEventOptions = function (objectName) {
	                    if (!scope.eventOptions.length) {
	                        var eventOptionsPromise = $slatwall.getEventOptions(objectName);
	                        eventOptionsPromise.then(function (value) {
	                            $log.debug('getEventOptions');
	                            scope.eventOptions = value.data;
	                            $log.debug(scope.eventOptions.name);
	                        });
	                    }
	                    scope.showEventOptions = !scope.showEventOptions;
	                };
	                /**
	                 * Saves the workflow triggers.
	                 */
	                scope.saveWorkflowTrigger = function (context) {
	                    var saveWorkflowTriggerPromise = scope.workflowTriggers.selectedTrigger.$$save();
	                    saveWorkflowTriggerPromise.then(function () {
	                        //Clear the form by adding a new task action if 'save and add another' otherwise, set save and set finished
	                        if (context == 'add') {
	                            $log.debug("Save and New");
	                            scope.addWorkflowTrigger();
	                            scope.finished = false;
	                        }
	                        else if (context == "finish") {
	                            scope.finished = true;
	                        }
	                    });
	                };
	                /**
	                 * Changes the selected trigger value.
	                 */
	                scope.selectEvent = function (eventOption) {
	                    $log.debug("SelectEvent");
	                    $log.debug(eventOption);
	                    //Needs to clear old and set new.
	                    scope.workflowTriggers.selectedTrigger.data.triggerEvent = eventOption.value;
	                    if (eventOption.entityName == scope.workflow.data.workflowObject) {
	                        scope.workflowTriggers.selectedTrigger.data.objectPropertyIdentifier = '';
	                    }
	                    else {
	                        scope.workflowTriggers.selectedTrigger.data.objectPropertyIdentifier = eventOption.entityName;
	                    }
	                    scope.searchEvent.name = eventOption.name;
	                    $log.debug(eventOption);
	                    $log.debug(scope.workflowTriggers);
	                };
	                /**
	                 * Selects a new collection.
	                 */
	                scope.selectCollection = function (collection) {
	                    $log.debug('selectCollection');
	                    scope.workflowTriggers.selectedTrigger.data.scheduleCollection = collection;
	                    scope.showCollections = false;
	                };
	                /**
	                 * Removes a workflow trigger
	                 */
	                scope.removeWorkflowTrigger = function (workflowTrigger) {
	                    if (workflowTrigger === scope.workflowTriggers.selectedTrigger) {
	                        delete scope.workflowTriggers.selectedTrigger;
	                    }
	                    scope.workflowTriggers.splice(workflowTrigger.$$index, 1);
	                };
	                scope.setAsEvent = function (workflowTrigger) {
	                    //add event,  clear schedule
	                };
	                scope.setAsSchedule = function (workflowTrigger) {
	                };
	                /**
	                 * Adds a workflow trigger.
	                 */
	                scope.addWorkflowTrigger = function () {
	                    $log.debug('addWorkflowTrigger');
	                    var newWorkflowTrigger = scope.workflow.$$addWorkflowTrigger();
	                    scope.workflowTriggers.selectedTrigger = newWorkflowTrigger;
	                    $log.debug(scope.workflowTriggers);
	                };
	            }
	        };
	    }
	    SWWorkflowTriggers.Factory = function () {
	        var directive = function ($log, $location, $slatwall, workflowPartialsPath, formService, pathBuilderConfig) {
	            return new SWWorkflowTriggers($log, $location, $slatwall, workflowPartialsPath, formService, pathBuilderConfig);
	        };
	        directive.$inject = [
	            '$log',
	            '$location',
	            '$slatwall',
	            'workflowPartialsPath',
	            'formService',
	            'pathBuilderConfig'
	        ];
	        return directive;
	    };
	    return SWWorkflowTriggers;
	})();
	exports.SWWorkflowTriggers = SWWorkflowTriggers;


/***/ },
/* 132 */
/***/ function(module, exports) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	var SlatwallInterceptor = (function () {
	    function SlatwallInterceptor($location, $window, $q, $log, $injector, alertService, baseURL, dialogService, utilityService) {
	        var _this = this;
	        this.$location = $location;
	        this.$window = $window;
	        this.$q = $q;
	        this.$log = $log;
	        this.$injector = $injector;
	        this.alertService = alertService;
	        this.baseURL = baseURL;
	        this.dialogService = dialogService;
	        this.utilityService = utilityService;
	        this.urlParam = null;
	        this.authHeader = 'Authorization';
	        this.authPrefix = 'Bearer ';
	        this.request = function (config) {
	            _this.$log.debug('request');
	            //bypass interceptor rules when checking template cache
	            if (config.url.charAt(0) !== '/') {
	                return config;
	            }
	            if (config.method == 'GET' && config.url.indexOf('.html') > 0 && config.url.indexOf('admin/client/partials') > 0) {
	                //all partials are bound to instantiation key
	                config.url = config.url + '?instantiationKey=' + $.slatwall.getConfig().instantiationKey;
	                return config;
	            }
	            config.cache = true;
	            config.headers = config.headers || {};
	            if (_this.$window.localStorage.getItem('token') && _this.$window.localStorage.getItem('token') !== "undefined") {
	                config.headers.Authorization = 'Bearer ' + _this.$window.localStorage.getItem('token');
	            }
	            var queryParams = _this.utilityService.getQueryParamsFromUrl(config.url);
	            if (config.method == 'GET' && (queryParams.slatAction && queryParams.slatAction === 'api:main.get')) {
	                _this.$log.debug(config);
	                config.method = 'POST';
	                config.data = {};
	                var data = {};
	                if (angular.isDefined(config.params)) {
	                    data = config.params;
	                }
	                var params = {};
	                params.serializedJsonData = angular.toJson(data);
	                params.context = "GET";
	                config.data = $.param(params);
	                delete config.params;
	                config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	            }
	            return config;
	        };
	        this.requestError = function (rejection) {
	            _this.$log.debug('requestError');
	            return _this.$q.reject(rejection);
	        };
	        this.response = function (response) {
	            _this.$log.debug('response');
	            console.log(response);
	            if (response.data.messages) {
	                var alerts = _this.alertService.formatMessagesToAlerts(response.data.messages);
	                _this.alertService.addAlerts(alerts);
	            }
	            return response;
	        };
	        this.responseError = function (rejection) {
	            _this.$log.debug('responseReject');
	            if (angular.isDefined(rejection.status) && rejection.status !== 404 && rejection.status !== 403 && rejection.status !== 401) {
	                if (rejection.data && rejection.data.messages) {
	                    var alerts = _this.alertService.formatMessagesToAlerts(rejection.data.messages);
	                    _this.alertService.addAlerts(alerts);
	                }
	                else {
	                    var message = {
	                        msg: 'there was error retrieving data',
	                        type: 'error'
	                    };
	                    _this.alertService.addAlert(message);
	                }
	            }
	            if (rejection.status === 401) {
	                // handle the case where the user is not authenticated
	                if (rejection.data && rejection.data.messages) {
	                    //var deferred = $q.defer(); 
	                    var $http = _this.$injector.get('$http');
	                    if (rejection.data.messages[0].message === 'timeout') {
	                        //open dialog
	                        _this.dialogService.addPageDialog('preprocesslogin', {});
	                    }
	                    else if (rejection.data.messages[0].message === 'invalid_token') {
	                        return $http.get(_this.baseURL + '/index.cfm/api/auth/login').then(function (loginResponse) {
	                            _this.$window.localStorage.setItem('token', loginResponse.data.token);
	                            rejection.config.headers = rejection.config.headers || {};
	                            rejection.config.headers.Authorization = 'Bearer ' + _this.$window.localStorage.getItem('token');
	                            return $http(rejection.config).then(function (response) {
	                                return response;
	                            });
	                        }, function (rejection) {
	                            return rejection;
	                        });
	                    }
	                }
	            }
	            return rejection;
	        };
	        this.$location = $location;
	        this.$window = $window;
	        this.$q = $q;
	        this.$log = $log;
	        this.$injector = $injector;
	        this.alertService = alertService;
	        this.baseURL = baseURL;
	        this.dialogService = dialogService;
	        this.utilityService = utilityService;
	    }
	    SlatwallInterceptor.Factory = function ($location, $window, $q, $log, $injector, alertService, baseURL, dialogService, utilityService) {
	        return new SlatwallInterceptor($location, $window, $q, $log, $injector, alertService, baseURL, dialogService, utilityService);
	    };
	    SlatwallInterceptor.$inject = ['$location', '$window', '$q', '$log', '$injector', 'alertService', 'baseURL', 'dialogService', 'utilityService'];
	    return SlatwallInterceptor;
	})();
	exports.SlatwallInterceptor = SlatwallInterceptor;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	/// <reference path="../../typings/slatwallTypeScript.d.ts" />
	var hibachi_module_1 = __webpack_require__(10);
	var ngSlatwall = angular.module('ngSlatwall', [hibachi_module_1.hibachimodule.name]);
	var slatwallservice_1 = __webpack_require__(134);
	var ngslatwallmodule = angular.module('ngSlatwall').provider('$slatwall', slatwallservice_1.$Slatwall);
	exports.ngslatwallmodule = ngslatwallmodule;


/***/ },
/* 134 */
/***/ function(module, exports) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	var SlatwallService = (function () {
	    //@ngInject
	    function SlatwallService($window, $q, $http, $timeout, $log, $rootScope, $location, $anchorScroll, utilityService, formService, _config, _jsEntities, _jsEntityInstances) {
	        var _this = this;
	        this.$window = $window;
	        this.$q = $q;
	        this.$http = $http;
	        this.$timeout = $timeout;
	        this.$log = $log;
	        this.$rootScope = $rootScope;
	        this.$location = $location;
	        this.$anchorScroll = $anchorScroll;
	        this.utilityService = utilityService;
	        this.formService = formService;
	        this._config = _config;
	        this._jsEntities = _jsEntities;
	        this._jsEntityInstances = _jsEntityInstances;
	        this._resourceBundle = {};
	        this._resourceBundleLastModified = '';
	        this._loadingResourceBundle = false;
	        this._loadedResourceBundle = false;
	        this._deferred = {};
	        this.buildUrl = function (action, queryString) {
	            //actionName example: slatAction. defined in FW1 and populated to config
	            var actionName = _this.getConfigValue('action');
	            var baseUrl = _this.getConfigValue('baseURL');
	            queryString = queryString || '';
	            if (angular.isDefined(queryString) && queryString.length) {
	                if (queryString.indexOf('&') !== 0) {
	                    queryString = '&' + queryString;
	                }
	            }
	            return baseUrl + '?' + actionName + '=' + action + queryString;
	        };
	        this.getJsEntities = function () {
	            return _this._jsEntities;
	        };
	        this.setJsEntities = function (jsEntities) {
	            _this._jsEntities = jsEntities;
	        };
	        this.getJsEntityInstances = function () {
	            return _this._jsEntityInstances;
	        };
	        this.setJsEntityInstances = function (jsEntityInstances) {
	            _this._jsEntityInstances = jsEntityInstances;
	        };
	        this.getEntityExample = function (entityName) {
	            return _this._jsEntityInstances[entityName];
	        };
	        this.getEntityMetaData = function (entityName) {
	            return _this._jsEntityInstances[entityName].metaData;
	        };
	        this.getPropertyByEntityNameAndPropertyName = function (entityName, propertyName) {
	            return _this.getEntityMetaData(entityName)[propertyName];
	        };
	        this.getPrimaryIDPropertyNameByEntityName = function (entityName) {
	            return _this.getEntityMetaData(entityName).$$getIDName();
	        };
	        this.getEntityHasPropertyByEntityName = function (entityName, propertyName) {
	            return angular.isDefined(_this.getEntityMetaData(entityName)[propertyName]);
	        };
	        this.getPropertyIsObjectByEntityNameAndPropertyIdentifier = function (entityName, propertyIdentifier) {
	            var lastEntity = _this.getLastEntityNameInPropertyIdentifier(entityName, propertyIdentifier);
	            var entityMetaData = _this.getEntityMetaData(lastEntity);
	            return angular.isDefined(entityMetaData[_this.utilityService.listLast(propertyIdentifier, '.')].cfc);
	        };
	        this.getLastEntityNameInPropertyIdentifier = function (entityName, propertyIdentifier) {
	            if (!entityName) {
	                throw ('no entity name supplied');
	            }
	            //strip alias if it exists
	            if (propertyIdentifier.charAt(0) === '_') {
	                propertyIdentifier = _this.utilityService.listRest(propertyIdentifier, '.');
	            }
	            if (propertyIdentifier.split('.').length > 1) {
	                var propertiesStruct = _this.getEntityMetaData(entityName);
	                if (!propertiesStruct[_this.utilityService.listFirst(propertyIdentifier, '.')]
	                    || !propertiesStruct[_this.utilityService.listFirst(propertyIdentifier, '.')].cfc) {
	                    throw ("The Property Identifier " + propertyIdentifier + " is invalid for the entity " + entityName);
	                }
	                var currentEntityName = _this.utilityService.listLast(propertiesStruct[_this.utilityService.listFirst(propertyIdentifier, '.')].cfc, '.');
	                var currentPropertyIdentifier = _this.utilityService.right(propertyIdentifier, propertyIdentifier.length - (_this.utilityService.listFirst(propertyIdentifier, '.').length + 1));
	                return _this.getLastEntityNameInPropertyIdentifier(currentEntityName, currentPropertyIdentifier);
	            }
	            return entityName;
	        };
	        //service method used to transform collection data to collection objects based on a collectionconfig
	        this.populateCollection = function (collectionData, collectionConfig) {
	            //create array to hold objects
	            var entities = [];
	            //loop over all collection data to create objects
	            var slatwallService = _this;
	            angular.forEach(collectionData, function (collectionItemData, key) {
	                //create base Entity
	                var entity = slatwallService['new' + collectionConfig.baseEntityName.replace('Slatwall', '')]();
	                //populate entity with data based on the collectionConfig
	                angular.forEach(collectionConfig.columns, function (column, key) {
	                    //get objects base properties
	                    var propertyIdentifier = column.propertyIdentifier.replace(collectionConfig.baseEntityAlias.toLowerCase() + '.', '');
	                    var propertyIdentifierArray = propertyIdentifier.split('.');
	                    var propertyIdentifierKey = propertyIdentifier.replace(/\./g, '_');
	                    var currentEntity = entity;
	                    angular.forEach(propertyIdentifierArray, function (property, key) {
	                        if (key === propertyIdentifierArray.length - 1) {
	                            //if we are on the last item in the array
	                            if (angular.isObject(collectionItemData[propertyIdentifierKey]) && currentEntity.metaData[property].fieldtype === 'many-to-one') {
	                                var relatedEntity = slatwallService['new' + currentEntity.metaData[property].cfc]();
	                                relatedEntity.$$init(collectionItemData[propertyIdentifierKey][0]);
	                                currentEntity['$$set' + currentEntity.metaData[property].name.charAt(0).toUpperCase() + currentEntity.metaData[property].name.slice(1)](relatedEntity);
	                            }
	                            else if (angular.isArray(collectionItemData[propertyIdentifierKey]) && (currentEntity.metaData[property].fieldtype === 'one-to-many')) {
	                                angular.forEach(collectionItemData[propertyIdentifierKey], function (arrayItem, key) {
	                                    var relatedEntity = slatwallService['new' + currentEntity.metaData[property].cfc]();
	                                    relatedEntity.$$init(arrayItem);
	                                    currentEntity['$$add' + currentEntity.metaData[property].singularname.charAt(0).toUpperCase() + currentEntity.metaData[property].singularname.slice(1)](relatedEntity);
	                                });
	                            }
	                            else {
	                                currentEntity.data[property] = collectionItemData[propertyIdentifierKey];
	                            }
	                        }
	                        else {
	                            var propertyMetaData = currentEntity.metaData[property];
	                            if (angular.isUndefined(currentEntity.data[property])) {
	                                if (propertyMetaData.fieldtype === 'one-to-many') {
	                                    relatedEntity = [];
	                                }
	                                else {
	                                    relatedEntity = slatwallService['new' + propertyMetaData.cfc]();
	                                }
	                            }
	                            else {
	                                relatedEntity = currentEntity.data[property];
	                            }
	                            currentEntity['$$set' + propertyMetaData.name.charAt(0).toUpperCase() + propertyMetaData.name.slice(1)](relatedEntity);
	                            currentEntity = relatedEntity;
	                        }
	                    });
	                });
	                entities.push(entity);
	            });
	            return entities;
	        };
	        /*basic entity getter where id is optional, returns a promise*/
	        this.getDefer = function (deferKey) {
	            return _this._deferred[deferKey];
	        };
	        this.cancelPromise = function (deferKey) {
	            var deferred = _this.getDefer(deferKey);
	            if (angular.isDefined(deferred)) {
	                deferred.resolve({ messages: [{ messageType: 'error', message: 'User Cancelled' }] });
	            }
	        };
	        this.newEntity = function (entityName) {
	            return new _this._jsEntities[entityName];
	        };
	        /*basic entity getter where id is optional, returns a promise*/
	        this.getEntity = function (entityName, options) {
	            /*
	                *
	                * getEntity('Product', '12345-12345-12345-12345');
	                * getEntity('Product', {keywords='Hello'});
	                *
	                */
	            if (angular.isUndefined(options)) {
	                options = {};
	            }
	            if (angular.isDefined(options.deferKey)) {
	                _this.cancelPromise(options.deferKey);
	            }
	            var params = {};
	            if (typeof options === 'string') {
	                var urlString = _this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.get&entityName=' + entityName + '&entityID=' + options;
	            }
	            else {
	                params['P:Current'] = options.currentPage || 1;
	                params['P:Show'] = options.pageShow || 10;
	                params.keywords = options.keywords || '';
	                params.columnsConfig = options.columnsConfig || '';
	                params.filterGroupsConfig = options.filterGroupsConfig || '';
	                params.joinsConfig = options.joinsConfig || '';
	                params.orderByConfig = options.orderByConfig || '';
	                params.groupBysConfig = options.groupBysConfig || '';
	                params.isDistinct = options.isDistinct || false;
	                params.propertyIdentifiersList = options.propertyIdentifiersList || '';
	                params.allRecords = options.allRecords || '';
	                params.defaultColumns = options.defaultColumns || true;
	                params.processContext = options.processContext || '';
	                var urlString = _this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.get&entityName=' + entityName;
	            }
	            var deferred = _this.$q.defer();
	            if (angular.isDefined(options.id)) {
	                urlString += '&entityId=' + options.id;
	            }
	            /*var transformRequest = (data) => {
	    
	                return data;
	            };
	            //check if we are using a service to transform the request
	            if(angular.isDefined(options.transformRequest)) => {
	                transformRequest=options.trasformRequest;
	            }*/
	            var transformResponse = function (data) {
	                if (angular.isString(data)) {
	                    data = JSON.parse(data);
	                }
	                return data;
	            };
	            //check if we are using a service to transform the response
	            if (angular.isDefined(options.transformResponse)) {
	                transformResponse = function (data) {
	                    var data = JSON.parse(data);
	                    if (angular.isDefined(data.records)) {
	                        data = options.transformResponse(data.records);
	                    }
	                    return data;
	                };
	            }
	            _this.$http.get(urlString, {
	                params: params,
	                timeout: deferred.promise,
	                //transformRequest:transformRequest,
	                transformResponse: transformResponse
	            })
	                .success(function (data) {
	                deferred.resolve(data);
	            }).error(function (reason) {
	                deferred.reject(reason);
	            });
	            if (options.deferKey) {
	                _this._deferred[options.deferKey] = deferred;
	            }
	            return deferred.promise;
	        };
	        this.getResizedImageByProfileName = function (profileName, skuIDs) {
	            var deferred = _this.$q.defer();
	            return _this.$http.get(_this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.getResizedImageByProfileName&profileName=' + profileName + '&skuIDs=' + skuIDs)
	                .success(function (data) {
	                deferred.resolve(data);
	            }).error(function (reason) {
	                deferred.reject(reason);
	            });
	        };
	        this.getEventOptions = function (entityName) {
	            var deferred = _this.$q.defer();
	            var urlString = _this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.getEventOptionsByEntityName&entityName=' + entityName;
	            _this.$http.get(urlString)
	                .success(function (data) {
	                deferred.resolve(data);
	            }).error(function (reason) {
	                deferred.reject(reason);
	            });
	            return deferred.promise;
	        };
	        this.checkUniqueOrNullValue = function (object, property, value) {
	            return _this.$http.get(_this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.getValidationPropertyStatus&object=' + object + '&propertyidentifier=' + property +
	                '&value=' + escape(value)).then(function (results) {
	                return results.data.uniqueStatus;
	            });
	        };
	        this.checkUniqueValue = function (object, property, value) {
	            return _this.$http.get(_this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.getValidationPropertyStatus&object=' + object + '&propertyidentifier=' + property +
	                '&value=' + escape(value)).then(function (results) {
	                return results.data.uniqueStatus;
	            });
	        };
	        this.getPropertyDisplayData = function (entityName, options) {
	            var deferred = _this.$q.defer();
	            var urlString = _this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.getPropertyDisplayData&entityName=' + entityName;
	            var params = {};
	            params.propertyIdentifiersList = options.propertyIdentifiersList || '';
	            _this.$http.get(urlString, { params: params })
	                .success(function (data) {
	                deferred.resolve(data);
	            }).error(function (reason) {
	                deferred.reject(reason);
	            });
	            return deferred.promise;
	        };
	        this.getPropertyDisplayOptions = function (entityName, options) {
	            var deferred = _this.$q.defer();
	            var urlString = _this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.getPropertyDisplayOptions&entityName=' + entityName;
	            var params = {};
	            params.property = options.property || '';
	            if (angular.isDefined(options.argument1)) {
	                params.argument1 = options.argument1;
	            }
	            _this.$http.get(urlString, { params: params })
	                .success(function (data) {
	                deferred.resolve(data);
	            }).error(function (reason) {
	                deferred.reject(reason);
	            });
	            return deferred.promise;
	        };
	        this.saveEntity = function (entityName, id, params, context) {
	            //$log.debug('save'+ entityName);
	            var deferred = _this.$q.defer();
	            var urlString = _this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.post';
	            if (angular.isDefined(entityName)) {
	                params.entityName = entityName;
	            }
	            if (angular.isDefined(id)) {
	                params.entityID = id;
	            }
	            if (angular.isDefined(context)) {
	                params.context = context;
	            }
	            _this.$http({
	                url: urlString,
	                method: 'POST',
	                data: $.param(params),
	                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	            })
	                .success(function (data) {
	                deferred.resolve(data);
	            }).error(function (reason) {
	                deferred.reject(reason);
	            });
	            return deferred.promise;
	        };
	        this.getExistingCollectionsByBaseEntity = function (entityName) {
	            var deferred = _this.$q.defer();
	            var urlString = _this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.getExistingCollectionsByBaseEntity&entityName=' + entityName;
	            _this.$http.get(urlString)
	                .success(function (data) {
	                deferred.resolve(data);
	            }).error(function (reason) {
	                deferred.reject(reason);
	            });
	            return deferred.promise;
	        };
	        this.getFilterPropertiesByBaseEntityName = function (entityName) {
	            var deferred = _this.$q.defer();
	            var urlString = _this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.getFilterPropertiesByBaseEntityName&EntityName=' + entityName;
	            _this.$http.get(urlString)
	                .success(function (data) {
	                deferred.resolve(data);
	            }).error(function (reason) {
	                deferred.reject(reason);
	            });
	            return deferred.promise;
	        };
	        this.getRBLoaded = function () {
	            return _this._loadedResourceBundle;
	        };
	        this.hasResourceBundle = function () {
	            ////$log.debug('hasResourceBundle');
	            ////$log.debug(this._loadedResourceBundle);
	            if (!_this._loadingResourceBundle && !_this._loadedResourceBundle) {
	                _this._loadingResourceBundle = true;
	                //$log.debug(this.getConfigValue('rbLocale').split('_'));
	                var localeListArray = _this.getConfigValue('rbLocale').split('_');
	                var rbPromise;
	                var rbPromises = [];
	                rbPromise = _this.getResourceBundle(_this.getConfigValue('rbLocale'));
	                rbPromises.push(rbPromise);
	                if (localeListArray.length === 2) {
	                    //$log.debug('has two');
	                    rbPromise = _this.getResourceBundle(localeListArray[0]);
	                    rbPromises.push(rbPromise);
	                }
	                if (localeListArray[0] !== 'en') {
	                    //$log.debug('get english');
	                    _this.getResourceBundle('en_us');
	                    _this.getResourceBundle('en');
	                }
	                _this.$q.all(rbPromises).then(function (data) {
	                    _this.$rootScope.loadedResourceBundle = true;
	                    _this._loadingResourceBundle = false;
	                    _this._loadedResourceBundle = true;
	                }, function (error) {
	                    _this.$rootScope.loadedResourceBundle = true;
	                    _this._loadingResourceBundle = false;
	                    _this._loadedResourceBundle = true;
	                });
	            }
	            return _this._loadedResourceBundle;
	        };
	        this.login = function (emailAddress, password) {
	            var deferred = _this.$q.defer();
	            var urlString = _this.getConfig().baseURL + '/index.cfm/api/auth/login';
	            var params = {
	                emailAddress: emailAddress,
	                password: password
	            };
	            return _this.$http.get(urlString, { params: params }).success(function (response) {
	                deferred.resolve(response);
	            }).error(function (response) {
	                deferred.reject(response);
	            });
	        };
	        this.getResourceBundle = function (locale) {
	            var deferred = _this.$q.defer();
	            var locale = locale || _this.getConfig().rbLocale;
	            if (_this._resourceBundle[locale]) {
	                return _this._resourceBundle[locale];
	            }
	            var urlString = _this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.getResourceBundle&instantiationKey=' + _this.getConfig().instantiationKey + '&locale=' + locale;
	            _this.$http({
	                url: urlString,
	                method: "GET"
	            }).success(function (response, status, headersGetter) {
	                _this._resourceBundle[locale] = response.data;
	                deferred.resolve(response);
	            }).error(function (response) {
	                _this._resourceBundle[locale] = {};
	                deferred.reject(response);
	            });
	            return deferred.promise;
	        };
	        this.getCurrencies = function () {
	            var deferred = _this.$q.defer();
	            var urlString = _this.getConfig().baseURL + '/index.cfm/?slatAction=api:main.getCurrencies&instantiationKey=' + _this.getConfig().instantiationKey;
	            _this.$http.get(urlString).success(function (response) {
	                deferred.resolve(response);
	            }).error(function (response) {
	                deferred.reject(response);
	            });
	            return deferred.promise;
	        };
	        this.rbKey = function (key, replaceStringData) {
	            ////$log.debug('rbkey');
	            ////$log.debug(key);
	            ////$log.debug(this.getConfig().rbLocale);
	            var keyValue = _this.getRBKey(key, _this.getConfig().rbLocale);
	            ////$log.debug(keyValue);
	            return keyValue;
	        };
	        this.getRBKey = function (key, locale, checkedKeys, originalKey) {
	            ////$log.debug('getRBKey');
	            ////$log.debug('loading:'+this._loadingResourceBundle);
	            ////$log.debug('loaded'+this._loadedResourceBundle);
	            if (!_this._loadingResourceBundle && _this._loadedResourceBundle) {
	                key = key.toLowerCase();
	                checkedKeys = checkedKeys || "";
	                locale = locale || 'en_us';
	                ////$log.debug('locale');
	                ////$log.debug(locale);
	                var keyListArray = key.split(',');
	                ////$log.debug('keylistAray');
	                ////$log.debug(keyListArray);
	                if (keyListArray.length > 1) {
	                    var keyValue = "";
	                    for (var i = 0; i < keyListArray.length; i++) {
	                        keyValue = _this.getRBKey(keyListArray[i], locale, keyValue);
	                        //$log.debug('keyvalue:'+keyValue);
	                        if (keyValue.slice(-8) != "_missing") {
	                            break;
	                        }
	                    }
	                    return keyValue;
	                }
	                var bundle = _this.getResourceBundle(locale);
	                //$log.debug('bundle');
	                //$log.debug(bundle);
	                if (!bundle.then) {
	                    if (angular.isDefined(bundle[key])) {
	                        //$log.debug('rbkeyfound:'+bundle[key]);
	                        return bundle[key];
	                    }
	                    var checkedKeysListArray = checkedKeys.split(',');
	                    checkedKeysListArray.push(key + '_' + locale + '_missing');
	                    checkedKeys = checkedKeysListArray.join(",");
	                    if (angular.isUndefined(originalKey)) {
	                        originalKey = key;
	                    }
	                    //$log.debug('originalKey:'+key);
	                    //$log.debug(checkedKeysListArray);
	                    var localeListArray = locale.split('_');
	                    //$log.debug(localeListArray);
	                    if (localeListArray.length === 2) {
	                        bundle = _this.getResourceBundle(localeListArray[0]);
	                        if (angular.isDefined(bundle[key])) {
	                            //$log.debug('rbkey found:'+bundle[key]);
	                            return bundle[key];
	                        }
	                        checkedKeysListArray.push(key + '_' + localeListArray[0] + '_missing');
	                        checkedKeys = checkedKeysListArray.join(",");
	                    }
	                    var keyDotListArray = key.split('.');
	                    if (keyDotListArray.length >= 3
	                        && keyDotListArray[keyDotListArray.length - 2] === 'define') {
	                        var newKey = key.replace(keyDotListArray[keyDotListArray.length - 3] + '.define', 'define');
	                        //$log.debug('newkey1:'+newKey);
	                        return _this.getRBKey(newKey, locale, checkedKeys, originalKey);
	                    }
	                    else if (keyDotListArray.length >= 2 && keyDotListArray[keyDotListArray.length - 2] !== 'define') {
	                        var newKey = key.replace(keyDotListArray[keyDotListArray.length - 2] + '.', 'define.');
	                        //$log.debug('newkey:'+newKey);
	                        return _this.getRBKey(newKey, locale, checkedKeys, originalKey);
	                    }
	                    //$log.debug(localeListArray);
	                    if (localeListArray[0] !== "en") {
	                        return _this.getRBKey(originalKey, 'en', checkedKeys);
	                    }
	                    return checkedKeys;
	                }
	            }
	            return '';
	        };
	        this.getConfig = function () {
	            return _this._config;
	        };
	        this.getConfigValue = function (key) {
	            return _this._config[key];
	        };
	        this.setConfigValue = function (key, value) {
	            _this._config[key] = value;
	        };
	        this.setConfig = function (config) {
	            _this._config = config;
	        };
	        this.$window = $window;
	        this.$q = $q;
	        this.$http = $http;
	        this.$timeout = $timeout;
	        this.$log = $log;
	        this.$rootScope = $rootScope;
	        this.$location = $location;
	        this.$anchorScroll = $anchorScroll;
	        this.utilityService = utilityService;
	        this.formService = formService;
	        this._config = _config;
	        this._jsEntities = _jsEntities;
	        this._jsEntityInstances = _jsEntityInstances;
	    }
	    SlatwallService.$inject = ['$window', '$q', '$http', '$timeout', '$log', '$rootScope', '$location', '$anchorScroll', 'utilityService', 'formService'];
	    return SlatwallService;
	})();
	exports.SlatwallService = SlatwallService;
	var $Slatwall = (function () {
	    function $Slatwall() {
	        var _this = this;
	        this._config = {};
	        this.angular = angular;
	        this.setJsEntities = function (jsEntities) {
	            _this._jsEntities = jsEntities;
	        };
	        this.getConfig = function () {
	            return _this._config;
	        };
	        this.getConfigValue = function (key) {
	            return _this._config[key];
	        };
	        this.setConfigValue = function (key, value) {
	            _this._config[key] = value;
	        };
	        this.setConfig = function (config) {
	            _this._config = config;
	        };
	        this._config = {
	            dateFormat: 'MM/DD/YYYY',
	            timeFormat: 'HH:MM',
	            rbLocale: '',
	            baseURL: '',
	            applicationKey: 'Slatwall',
	            debugFlag: true,
	            instantiationKey: '84552B2D-A049-4460-55F23F30FE7B26AD'
	        };
	        if (slatwallAngular.slatwallConfig) {
	            angular.extend(this._config, slatwallAngular.slatwallConfig);
	        }
	        this.$get.$inject = [
	            '$window',
	            '$q',
	            '$http',
	            '$timeout',
	            '$log',
	            '$rootScope',
	            '$location',
	            '$anchorScroll',
	            'utilityService',
	            'formService'
	        ];
	    }
	    $Slatwall.prototype.$get = function ($window, $q, $http, $timeout, $log, $rootScope, $location, $anchorScroll, utilityService, formService) {
	        return new SlatwallService($window, $q, $http, $timeout, $log, $rootScope, $location, $anchorScroll, utilityService, formService, this.getConfig(), this._jsEntities, this._jsEntityInstances);
	    };
	    return $Slatwall;
	})();
	exports.$Slatwall = $Slatwall;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/tsd.d.ts" />
	/// <reference path="../../typings/slatwallTypeScript.d.ts" />
	var ngslatwall_module_1 = __webpack_require__(133);
	var hibachi_module_1 = __webpack_require__(10);
	var ngslatwallmodelmodule = angular.module('ngSlatwallModel', [hibachi_module_1.hibachimodule.name, ngslatwall_module_1.ngslatwallmodule.name]).config(['$provide', function ($provide) {
	        $provide.decorator('$slatwall', [
	            "$delegate",
	            '$http',
	            '$timeout',
	            '$log',
	            '$rootScope',
	            '$location',
	            '$anchorScroll',
	            '$q',
	            'utilityService',
	            'formService',
	            function ($delegate, $http, $timeout, $log, $rootScope, $location, $anchorScroll, $q, utilityService, formService) {
	                var _deferred = {};
	                var _config = {
	                    dateFormat: 'MM/DD/YYYY',
	                    timeFormat: 'HH:MM',
	                    rbLocale: '',
	                    baseURL: '/',
	                    applicationKey: 'Slatwall',
	                    debugFlag: true,
	                    instantiationKey: '84552B2D-A049-4460-55F23F30FE7B26AD'
	                };
	                if (slatwallAngular.slatwallConfig) {
	                    angular.extend(_config, slatwallAngular.slatwallConfig);
	                }
	                var _jsEntities = {};
	                var _jsEntityInstances = {};
	                var entities = slatwallAngular.modelConfig.entities, validations = slatwallAngular.modelConfig.validations, defaultValues = slatwallAngular.modelConfig.defaultValues;
	                angular.forEach(entities, function (entity) {
	                    $delegate['get' + entity.className] = function (options) {
	                        var entityInstance = $delegate.newEntity(entity.className);
	                        var entityDataPromise = $delegate.getEntity(entity.className, options);
	                        entityDataPromise.then(function (response) {
	                            if (angular.isDefined(response.processData)) {
	                                entityInstance.$$init(response.data);
	                                var processObjectInstance = $delegate['new' + entity.className + '_' + options.processContext.charAt(0).toUpperCase() + options.processContext.slice(1)]();
	                                processObjectInstance.$$init(response.processData);
	                                processObjectInstance.data[entity.className.charAt(0).toLowerCase() + entity.className.slice(1)] = entityInstance;
	                                entityInstance.processObject = processObjectInstance;
	                            }
	                            else {
	                                entityInstance.$$init(response);
	                            }
	                        });
	                        return {
	                            promise: entityDataPromise,
	                            value: entityInstance
	                        };
	                    };
	                    $delegate['get' + entity.className] = function (options) {
	                        var entityInstance = $delegate.newEntity(entity.className);
	                        var entityDataPromise = $delegate.getEntity(entity.className, options);
	                        entityDataPromise.then(function (response) {
	                            if (angular.isDefined(response.processData)) {
	                                entityInstance.$$init(response.data);
	                                var processObjectInstance = $delegate['new' + entity.className + options.processContext.charAt(0).toUpperCase() + options.processContext.slice(1)]();
	                                processObjectInstance.$$init(response.processData);
	                                processObjectInstance.data[entity.className.charAt(0).toLowerCase() + entity.className.slice(1)] = entityInstance;
	                                entityInstance.processObject = processObjectInstance;
	                            }
	                            else {
	                                entityInstance.$$init(response);
	                            }
	                        });
	                        return {
	                            promise: entityDataPromise,
	                            value: entityInstance
	                        };
	                    };
	                    $delegate['new' + entity.className] = function () {
	                        return $delegate.newEntity(entity.className);
	                    };
	                    entity.isProcessObject = entity.className.indexOf('_') >= 0;
	                    _jsEntities[entity.className] = function () {
	                        this.validations = validations[entity.className];
	                        this.metaData = entity;
	                        this.metaData.className = entity.className;
	                        if (entity.hb_parentPropertyName) {
	                            this.metaData.hb_parentPropertyName = entity.hb_parentPropertyName;
	                        }
	                        if (entity.hb_childPropertyName) {
	                            this.metaData.hb_childPropertyName = entity.hb_childPropertyName;
	                        }
	                        this.metaData.$$getRBKey = function (rbKey, replaceStringData) {
	                            return $delegate.rbKey(rbKey, replaceStringData);
	                        };
	                        this.metaData.$$getPropertyTitle = function (propertyName) {
	                            return _getPropertyTitle(propertyName, this);
	                        };
	                        this.metaData.$$getPropertyHint = function (propertyName) {
	                            return _getPropertyHint(propertyName, this);
	                        };
	                        this.metaData.$$getManyToManyName = function (singularname) {
	                            var metaData = this;
	                            for (var i in metaData) {
	                                if (metaData[i].singularname === singularname) {
	                                    return metaData[i].name;
	                                }
	                            }
	                        };
	                        this.metaData.$$getPropertyFieldType = function (propertyName) {
	                            return _getPropertyFieldType(propertyName, this);
	                        };
	                        this.metaData.$$getPropertyFormatType = function (propertyName) {
	                            return _getPropertyFormatType(propertyName, this);
	                        };
	                        this.metaData.$$getDetailTabs = function () {
	                            var deferred = $q.defer();
	                            var urlString = _config.baseURL + '/index.cfm/?slatAction=api:main.getDetailTabs&entityName=' + this.className;
	                            var detailTabs = [];
	                            $http.get(urlString)
	                                .success(function (data) {
	                                deferred.resolve(data);
	                            }).error(function (reason) {
	                                deferred.reject(reason);
	                            });
	                            return deferred.promise;
	                        };
	                        this.$$getFormattedValue = function (propertyName, formatType) {
	                            return _getFormattedValue(propertyName, formatType, this);
	                        };
	                        this.data = {};
	                        this.modifiedData = {};
	                        var jsEntity = this;
	                        if (entity.isProcessObject) {
	                            (function (entity) {
	                                _jsEntities[entity.className].prototype = {
	                                    $$getID: function () {
	                                        return '';
	                                    },
	                                    $$getIDName: function () {
	                                        var IDNameString = '';
	                                        return IDNameString;
	                                    }
	                                };
	                            })(entity);
	                        }
	                        angular.forEach(entity, function (property) {
	                            if (angular.isObject(property) && angular.isDefined(property.name)) {
	                                if (angular.isDefined(defaultValues[entity.className][property.name])) {
	                                    jsEntity.data[property.name] = defaultValues[entity.className][property.name];
	                                }
	                            }
	                        });
	                    };
	                    _jsEntities[entity.className].prototype = {
	                        $$getPropertyByName: function (propertyName) {
	                            return this['$$get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1)]();
	                        },
	                        $$isPersisted: function () {
	                            if (this.$$getID() === '') {
	                                return false;
	                            }
	                            else {
	                                return true;
	                            }
	                        },
	                        $$init: function (data) {
	                            _init(this, data);
	                        },
	                        $$save: function () {
	                            return _save(this);
	                        },
	                        $$delete: function () {
	                            var deletePromise = _delete(this);
	                            return deletePromise;
	                        },
	                        $$getValidationsByProperty: function (property) {
	                            return _getValidationsByProperty(this, property);
	                        },
	                        $$getValidationByPropertyAndContext: function (property, context) {
	                            return _getValidationByPropertyAndContext(this, property, context);
	                        },
	                        $$getTitleByPropertyIdentifier: function (propertyIdentifier) {
	                            if (propertyIdentifier.split('.').length > 1) {
	                                var listFirst = utilityService.listFirst(propertyIdentifier, '.');
	                                var relatedEntityName = this.metaData[listFirst].cfc;
	                                var exampleEntity = $delegate.newEntity(relatedEntityName);
	                                return exampleEntity = exampleEntity.$$getTitleByPropertyIdentifier(propertyIdentifier.replace(listFirst, ''));
	                            }
	                            return this.metaData.$$getPropertyTitle(propertyIdentifier);
	                        },
	                        $$getMetaData: function (propertyName) {
	                            if (propertyName === undefined) {
	                                return this.metaData;
	                            }
	                            else {
	                                if (angular.isDefined(this.metaData[propertyName].name) && angular.isUndefined(this.metaData[propertyName].nameCapitalCase)) {
	                                    this.metaData[propertyName].nameCapitalCase = this.metaData[propertyName].name.charAt(0).toUpperCase() + this.metaData[propertyName].name.slice(1);
	                                }
	                                if (angular.isDefined(this.metaData[propertyName].cfc) && angular.isUndefined(this.metaData[propertyName].cfcProperCase)) {
	                                    this.metaData[propertyName].cfcProperCase = this.metaData[propertyName].cfc.charAt(0).toLowerCase() + this.metaData[propertyName].cfc.slice(1);
	                                }
	                                return this.metaData[propertyName];
	                            }
	                        }
	                    };
	                    angular.forEach(entity, function (property) {
	                        if (angular.isObject(property) && angular.isDefined(property.name)) {
	                            if (angular.isUndefined(property.persistent)) {
	                                if (angular.isDefined(property.fieldtype)) {
	                                    if (['many-to-one'].indexOf(property.fieldtype) >= 0) {
	                                        _jsEntities[entity.className].prototype['$$get' + property.name.charAt(0).toUpperCase() + property.name.slice(1)] = function () {
	                                            var thisEntityInstance = this;
	                                            if (angular.isDefined(this['$$get' + this.$$getIDName().charAt(0).toUpperCase() + this.$$getIDName().slice(1)]())) {
	                                                var options = {
	                                                    columnsConfig: angular.toJson([
	                                                        {
	                                                            "propertyIdentifier": "_" + this.metaData.className.toLowerCase() + "_" + property.name
	                                                        }
	                                                    ]),
	                                                    joinsConfig: angular.toJson([
	                                                        {
	                                                            "associationName": property.name,
	                                                            "alias": "_" + this.metaData.className.toLowerCase() + "_" + property.name
	                                                        }
	                                                    ]),
	                                                    filterGroupsConfig: angular.toJson([{
	                                                            "filterGroup": [
	                                                                {
	                                                                    "propertyIdentifier": "_" + this.metaData.className.toLowerCase() + "." + this.$$getIDName(),
	                                                                    "comparisonOperator": "=",
	                                                                    "value": this.$$getID()
	                                                                }
	                                                            ]
	                                                        }]),
	                                                    allRecords: true
	                                                };
	                                                var collectionPromise = $delegate.getEntity(entity.className, options);
	                                                collectionPromise.then(function (response) {
	                                                    for (var i in response.records) {
	                                                        var entityInstance = $delegate.newEntity(thisEntityInstance.metaData[property.name].cfc);
	                                                        //Removed the array index here at the end of local.property.name.
	                                                        if (angular.isArray(response.records[i][property.name])) {
	                                                            entityInstance.$$init(response.records[i][property.name][0]);
	                                                        }
	                                                        else {
	                                                            entityInstance.$$init(response.records[i][property.name]); //Shouldn't have the array index'
	                                                        }
	                                                        thisEntityInstance['$$set' + property.name.charAt(0).toUpperCase() + property.name.slice(1)](entityInstance);
	                                                    }
	                                                });
	                                                return collectionPromise;
	                                            }
	                                            return null;
	                                        };
	                                        _jsEntities[entity.className].prototype['$$set' + property.name.charAt(0).toUpperCase() + property.name.slice(1)] = function (entityInstance) {
	                                            var thisEntityInstance = this;
	                                            var metaData = this.metaData;
	                                            var manyToManyName = '';
	                                            if (property.name === 'parent' + this.metaData.className) {
	                                                var childName = 'child' + this.metaData.className;
	                                                manyToManyName = entityInstance.metaData.$$getManyToManyName(childName);
	                                            }
	                                            else {
	                                                manyToManyName = entityInstance.metaData.$$getManyToManyName(metaData.className.charAt(0).toLowerCase() + this.metaData.className.slice(1));
	                                            }
	                                            if (angular.isUndefined(thisEntityInstance.parents)) {
	                                                thisEntityInstance.parents = [];
	                                            }
	                                            thisEntityInstance.parents.push(thisEntityInstance.metaData[property.name]);
	                                            if (angular.isDefined(manyToManyName)) {
	                                                if (angular.isUndefined(entityInstance.children)) {
	                                                    entityInstance.children = [];
	                                                }
	                                                var child = entityInstance.metaData[manyToManyName];
	                                                ;
	                                                if (entityInstance.children.indexOf(child) === -1) {
	                                                    entityInstance.children.push(child);
	                                                }
	                                                if (angular.isUndefined(entityInstance.data[manyToManyName])) {
	                                                    entityInstance.data[manyToManyName] = [];
	                                                }
	                                                entityInstance.data[manyToManyName].push(thisEntityInstance);
	                                            }
	                                            thisEntityInstance.data[property.name] = entityInstance;
	                                        };
	                                    }
	                                    else if (['one-to-many', 'many-to-many'].indexOf(property.fieldtype) >= 0) {
	                                        _jsEntities[entity.className].prototype['$$add' + property.singularname.charAt(0).toUpperCase() + property.singularname.slice(1)] = function () {
	                                            var entityInstance = $delegate.newEntity(this.metaData[property.name].cfc);
	                                            var metaData = this.metaData;
	                                            if (metaData[property.name].fieldtype === 'one-to-many') {
	                                                entityInstance.data[metaData[property.name].fkcolumn.slice(0, -2)] = this;
	                                            }
	                                            else if (metaData[property.name].fieldtype === 'many-to-many') {
	                                                var manyToManyName = entityInstance.metaData.$$getManyToManyName(metaData.className.charAt(0).toLowerCase() + this.metaData.className.slice(1));
	                                                if (angular.isUndefined(entityInstance.data[manyToManyName])) {
	                                                    entityInstance.data[manyToManyName] = [];
	                                                }
	                                                entityInstance.data[manyToManyName].push(this);
	                                            }
	                                            if (angular.isDefined(metaData[property.name])) {
	                                                if (angular.isDefined(entityInstance.metaData[metaData[property.name].fkcolumn.slice(0, -2)])) {
	                                                    if (angular.isUndefined(entityInstance.parents)) {
	                                                        entityInstance.parents = [];
	                                                    }
	                                                    entityInstance.parents.push(entityInstance.metaData[metaData[property.name].fkcolumn.slice(0, -2)]);
	                                                }
	                                                if (angular.isUndefined(this.children)) {
	                                                    this.children = [];
	                                                }
	                                                var child = metaData[property.name];
	                                                if (this.children.indexOf(child) === -1) {
	                                                    this.children.push(child);
	                                                }
	                                            }
	                                            if (angular.isUndefined(this.data[property.name])) {
	                                                this.data[property.name] = [];
	                                            }
	                                            this.data[property.name].push(entityInstance);
	                                            return entityInstance;
	                                        };
	                                        _jsEntities[entity.className].prototype['$$get' + property.name.charAt(0).toUpperCase() + property.name.slice(1)] = function () {
	                                            var thisEntityInstance = this;
	                                            if (angular.isDefined(this['$$get' + this.$$getIDName().charAt(0).toUpperCase() + this.$$getIDName().slice(1)])) {
	                                                var options = {
	                                                    filterGroupsConfig: angular.toJson([{
	                                                            "filterGroup": [
	                                                                {
	                                                                    "propertyIdentifier": "_" + property.cfc.toLowerCase() + "." + property.fkcolumn.replace('ID', '') + "." + this.$$getIDName(),
	                                                                    "comparisonOperator": "=",
	                                                                    "value": this.$$getID()
	                                                                }
	                                                            ]
	                                                        }]),
	                                                    allRecords: true
	                                                };
	                                                var collectionPromise = $delegate.getEntity(property.cfc, options);
	                                                collectionPromise.then(function (response) {
	                                                    for (var i in response.records) {
	                                                        var entityInstance = thisEntityInstance['$$add' + thisEntityInstance.metaData[property.name].singularname.charAt(0).toUpperCase() + thisEntityInstance.metaData[property.name].singularname.slice(1)]();
	                                                        entityInstance.$$init(response.records[i]);
	                                                        if (angular.isUndefined(thisEntityInstance[property.name])) {
	                                                            thisEntityInstance[property.name] = [];
	                                                        }
	                                                        thisEntityInstance[property.name].push(entityInstance);
	                                                    }
	                                                });
	                                                return collectionPromise;
	                                            }
	                                        };
	                                    }
	                                    else {
	                                        if (['id'].indexOf(property.fieldtype) >= 0) {
	                                            _jsEntities[entity.className].prototype['$$getID'] = function () {
	                                                //this should retreive id from the metadata
	                                                return this.data[this.$$getIDName()];
	                                            };
	                                            _jsEntities[entity.className].prototype['$$getIDName'] = function () {
	                                                var IDNameString = property.name;
	                                                return IDNameString;
	                                            };
	                                        }
	                                        _jsEntities[entity.className].prototype['$$get' + property.name.charAt(0).toUpperCase() + property.name.slice(1)] = function () {
	                                            return this.data[property.name];
	                                        };
	                                    }
	                                }
	                                else {
	                                    _jsEntities[entity.className].prototype['$$get' + property.name.charAt(0).toUpperCase() + property.name.slice(1)] = function () {
	                                        return this.data[property.name];
	                                    };
	                                }
	                            }
	                        }
	                    });
	                });
	                $delegate.setJsEntities(_jsEntities);
	                angular.forEach(_jsEntities, function (jsEntity) {
	                    var jsEntityInstance = new jsEntity;
	                    _jsEntityInstances[jsEntityInstance.metaData.className] = jsEntityInstance;
	                });
	                $delegate.setJsEntityInstances(_jsEntityInstances);
	                var _init = function (entityInstance, data) {
	                    for (var key in data) {
	                        if (key.charAt(0) !== '$' && angular.isObject(form[key]) && angular.isDefined(entityInstance.metaData[key])) {
	                            var propertyMetaData = entityInstance.metaData[key];
	                            if (angular.isDefined(propertyMetaData) && angular.isDefined(propertyMetaData.hb_formfieldtype) && propertyMetaData.hb_formfieldtype === 'json') {
	                                if (data[key].trim() !== '') {
	                                    entityInstance.data[key] = angular.fromJson(data[key]);
	                                }
	                            }
	                            else {
	                                entityInstance.data[key] = data[key];
	                            }
	                        }
	                    }
	                };
	                var _getPropertyTitle = function (propertyName, metaData) {
	                    var propertyMetaData = metaData[propertyName];
	                    if (angular.isDefined(propertyMetaData['hb_rbkey'])) {
	                        return metaData.$$getRBKey(propertyMetaData['hb_rbkey']);
	                    }
	                    else if (angular.isUndefined(propertyMetaData['persistent'])) {
	                        if (angular.isDefined(propertyMetaData['fieldtype'])
	                            && angular.isDefined(propertyMetaData['cfc'])
	                            && ["one-to-many", "many-to-many"].indexOf(propertyMetaData.fieldtype) > -1) {
	                            return metaData.$$getRBKey("entity." + metaData.className.toLowerCase() + "." + propertyName + ',entity.' + propertyMetaData.cfc + '_plural');
	                        }
	                        else if (angular.isDefined(propertyMetaData.fieldtype)
	                            && angular.isDefined(propertyMetaData.cfc)
	                            && ["many-to-one"].indexOf(propertyMetaData.fieldtype) > -1) {
	                            return metaData.$$getRBKey("entity." + metaData.className.toLowerCase() + '.' + propertyName.toLowerCase() + ',entity.' + propertyMetaData.cfc);
	                        }
	                        return metaData.$$getRBKey('entity.' + metaData.className.toLowerCase() + '.' + propertyName.toLowerCase());
	                    }
	                    else if (metaData.isProcessObject) {
	                        if (angular.isDefined(propertyMetaData.fieldtype)
	                            && angular.isDefined(propertyMetaData.cfc)
	                            && ["one-to-many", "many-to-many"].indexOf(propertyMetaData.fieldtype) > -1) {
	                            return metaData.$$getRBKey('processObject.' + metaData.className.toLowerCase() + '.' + propertyName.toLowerCase() + ',entity.' + propertyMetaData.cfc.toLowerCase() + '_plural');
	                        }
	                        else if (angular.isDefined(propertyMetaData.fieldtype)
	                            && angular.isDefined(propertyMetaData.cfc)) {
	                            return metaData.$$getRBKey('processObject.' + metaData.className.toLowerCase() + '.' + propertyName.toLowerCase() + ',entity.' + propertyMetaData.cfc.toLowerCase());
	                        }
	                        return metaData.$$getRBKey('processObject.' + metaData.className.toLowerCase() + '.' + propertyName.toLowerCase());
	                    }
	                    return metaData.$$getRBKey('object.' + metaData.className.toLowerCase() + '.' + propertyName.toLowerCase());
	                };
	                var _getPropertyHint = function (propertyName, metaData) {
	                    var propertyMetaData = metaData[propertyName];
	                    var keyValue = '';
	                    if (angular.isDefined(propertyMetaData['hb_rbkey'])) {
	                        keyValue = metaData.$$getRBKey(propertyMetaData['hb_rbkey'] + '_hint');
	                    }
	                    else if (angular.isUndefined(propertyMetaData['persistent']) || (angular.isDefined(propertyMetaData['persistent']) && propertyMetaData['persistent'] === true)) {
	                        keyValue = metaData.$$getRBKey('entity.' + metaData.className.toLowerCase() + '.' + propertyName.toLowerCase() + '_hint');
	                    }
	                    else {
	                        keyValue = metaData.$$getRBKey('object.' + metaData.className.toLowerCase() + '.' + propertyName.toLowerCase());
	                    }
	                    if (keyValue.slice(-8) !== '_missing') {
	                        return keyValue;
	                    }
	                    return '';
	                };
	                var _getPropertyFieldType = function (propertyName, metaData) {
	                    var propertyMetaData = metaData[propertyName];
	                    if (angular.isDefined(propertyMetaData['hb_formfieldtype'])) {
	                        return propertyMetaData['hb_formfieldtype'];
	                    }
	                    if (angular.isUndefined(propertyMetaData.fieldtype) || propertyMetaData.fieldtype === 'column') {
	                        var dataType = "";
	                        if (angular.isDefined(propertyMetaData.ormtype)) {
	                            dataType = propertyMetaData.ormtype;
	                        }
	                        else if (angular.isDefined(propertyMetaData.type)) {
	                            dataType = propertyMetaData.type;
	                        }
	                        if (["boolean", "yes_no", "true_false"].indexOf(dataType) > -1) {
	                            return "yesno";
	                        }
	                        else if (["date", "timestamp"].indexOf(dataType) > -1) {
	                            return "dateTime";
	                        }
	                        else if ("array" === dataType) {
	                            return "select";
	                        }
	                        else if ("struct" === dataType) {
	                            return "checkboxgroup";
	                        }
	                        else if (propertyName.indexOf('password') > -1) {
	                            return "password";
	                        }
	                    }
	                    else if (angular.isDefined(propertyMetaData.fieldtype) && propertyMetaData.fieldtype === 'many-to-one') {
	                        return 'select';
	                    }
	                    else if (angular.isDefined(propertyMetaData.fieldtype) && propertyMetaData.fieldtype === 'one-to-many') {
	                        return 'There is no property field type for one-to-many relationship properties, which means that you cannot get a fieldtype for ' + propertyName;
	                    }
	                    else if (angular.isDefined(propertyMetaData.fieldtype) && propertyMetaData.fieldtype === 'many-to-many') {
	                        return "listingMultiselect";
	                    }
	                    return "text";
	                };
	                var _getPropertyFormatType = function (propertyName, metaData) {
	                    var propertyMetaData = metaData[propertyName];
	                    if (angular.isDefined(propertyMetaData['hb_formattype'])) {
	                        return propertyMetaData['hb_formattype'];
	                    }
	                    else if (angular.isUndefined(propertyMetaData.fieldtype) || propertyMetaData.fieldtype === 'column') {
	                        var dataType = "";
	                        if (angular.isDefined(propertyMetaData.ormtype)) {
	                            dataType = propertyMetaData.ormtype;
	                        }
	                        else if (angular.isDefined(propertyMetaData.type)) {
	                            dataType = propertyMetaData.type;
	                        }
	                        if (["boolean", "yes_no", "true_false"].indexOf(dataType) > -1) {
	                            return "yesno";
	                        }
	                        else if (["date", "timestamp"].indexOf(dataType) > -1) {
	                            return "dateTime";
	                        }
	                        else if (["big_decimal"].indexOf(dataType) > -1 && propertyName.slice(-6) === 'weight') {
	                            return "weight";
	                        }
	                        else if (["big_decimal"].indexOf(dataType) > -1) {
	                            return "currency";
	                        }
	                    }
	                    return 'none';
	                };
	                var _isSimpleValue = function (value) {
	                    if (angular.isString(value) || angular.isNumber(value)
	                        || angular.isDate(value) || value === false || value === true) {
	                        return true;
	                    }
	                    else {
	                        return false;
	                    }
	                };
	                var _getFormattedValue = function (propertyName, formatType, entityInstance) {
	                    var value = entityInstance.$$getPropertyByName(propertyName);
	                    if (angular.isUndefined(formatType)) {
	                        formatType = entityInstance.metaData.$$getPropertyFormatType(propertyName);
	                    }
	                    if (formatType === "custom") {
	                    }
	                    else if (formatType === "rbkey") {
	                        if (angular.isDefined(value)) {
	                            return entityInstance.$$getRBKey('entity.' + entityInstance.metaData.className.toLowerCase() + '.' + propertyName.toLowerCase() + '.' + value);
	                        }
	                        else {
	                            return '';
	                        }
	                    }
	                    if (angular.isUndefined(value)) {
	                        var propertyMeta = entityInstance.metaData[propertyName];
	                        if (angular.isDefined(propertyMeta['hb_nullRBKey'])) {
	                            return entityInstance.$$getRbKey(propertyMeta['hb_nullRBKey']);
	                        }
	                        return "";
	                    }
	                    else if (_isSimpleValue(value)) {
	                        var formatDetails = {};
	                        if (angular.isDefined(entityInstance.data['currencyCode'])) {
	                            formatDetails.currencyCode = entityInstance.$$getCurrencyCode();
	                        }
	                        return utilityService.formatValue(value, formatType, formatDetails, entityInstance);
	                    }
	                };
	                var _delete = function (entityInstance) {
	                    var entityName = entityInstance.metaData.className;
	                    var entityID = entityInstance.$$getID();
	                    var context = 'delete';
	                    var deletePromise = $delegate.saveEntity(entityName, entityID, {}, context);
	                    return deletePromise;
	                };
	                var _setValueByPropertyPath = function (obj, path, value) {
	                    var a = path.split('.');
	                    var context = obj;
	                    var selector;
	                    var myregexp = /([a-zA-Z]+)(\[(\d)\])+/; // matches:  item[0]
	                    var match = null;
	                    for (var i = 0; i < a.length - 1; i += 1) {
	                        match = myregexp.exec(a[i]);
	                        if (match !== null)
	                            context = context[match[1]][match[3]];
	                        else
	                            context = context[a[i]];
	                    }
	                    // check for ending item[xx] syntax
	                    match = myregexp.exec([a[a.length - 1]]);
	                    if (match !== null)
	                        context[match[1]][match[3]] = value;
	                    else
	                        context[a[a.length - 1]] = value;
	                };
	                var _getValueByPropertyPath = function (obj, path) {
	                    var paths = path.split('.'), current = obj, i;
	                    for (i = 0; i < paths.length; ++i) {
	                        if (current[paths[i]] == undefined) {
	                            return undefined;
	                        }
	                        else {
	                            current = current[paths[i]];
	                        }
	                    }
	                    return current;
	                };
	                var _addReturnedIDs = function (returnedIDs, entityInstance) {
	                    for (var key in returnedIDs) {
	                        if (angular.isArray(returnedIDs[key])) {
	                            var arrayItems = returnedIDs[key];
	                            var entityInstanceArray = entityInstance.data[key];
	                            for (var i in arrayItems) {
	                                var arrayItem = arrayItems[i];
	                                var entityInstanceArrayItem = entityInstance.data[key][i];
	                                _addReturnedIDs(arrayItem, entityInstanceArrayItem);
	                            }
	                        }
	                        else if (angular.isObject(returnedIDs[key])) {
	                            for (var k in returnedIDs[key]) {
	                                _addReturnedIDs(returnedIDs[key][k], entityInstance.data[key][k]);
	                            }
	                        }
	                        else {
	                            entityInstance.data[key] = returnedIDs[key];
	                        }
	                    }
	                };
	                var _save = function (entityInstance) {
	                    var deferred = $q.defer();
	                    $timeout(function () {
	                        //$log.debug('save begin');
	                        //$log.debug(entityInstance);
	                        var entityID = entityInstance.$$getID();
	                        var modifiedData = _getModifiedData(entityInstance);
	                        //$log.debug('modifiedData complete');
	                        //$log.debug(modifiedData);
	                        //timeoutPromise.valid = modifiedData.valid;
	                        if (modifiedData.valid) {
	                            var params = {};
	                            params.serializedJsonData = angular.toJson(modifiedData.value);
	                            //if we have a process object then the context is different from the standard save
	                            var entityName = '';
	                            var context = 'save';
	                            if (entityInstance.metaData.isProcessObject === 1) {
	                                var processStruct = modifiedData.objectLevel.metaData.className.split('_');
	                                entityName = processStruct[0];
	                                context = processStruct[1];
	                            }
	                            else {
	                                entityName = modifiedData.objectLevel.metaData.className;
	                            }
	                            var savePromise = $delegate.saveEntity(entityName, entityInstance.$$getID(), params, context);
	                            savePromise.then(function (response) {
	                                var returnedIDs = response.data;
	                                if (angular.isDefined(response.SUCCESS) && response.SUCCESS === true) {
	                                    _addReturnedIDs(returnedIDs, modifiedData.objectLevel);
	                                    deferred.resolve(returnedIDs);
	                                }
	                                else {
	                                    deferred.reject(angular.isDefined(response.messages) ? response.messages : response);
	                                }
	                            }, function (reason) {
	                                deferred.reject(reason);
	                            });
	                        }
	                        else {
	                            //select first, visible, and enabled input with a class of ng-invalid
	                            var target = $('input.ng-invalid:first:visible:enabled');
	                            //$log.debug('input is invalid');
	                            //$log.debug(target);
	                            target.focus();
	                            var targetID = target.attr('id');
	                            $anchorScroll();
	                            deferred.reject('input is invalid');
	                        }
	                    });
	                    //return timeoutPromise;
	                    return deferred.promise;
	                    /*




	                    */
	                };
	                var _getModifiedData = function (entityInstance) {
	                    var modifiedData = {};
	                    modifiedData = getModifiedDataByInstance(entityInstance);
	                    return modifiedData;
	                };
	                var getObjectSaveLevel = function (entityInstance) {
	                    var objectLevel = entityInstance;
	                    var entityID = entityInstance.$$getID();
	                    angular.forEach(entityInstance.parents, function (parentObject) {
	                        if (angular.isDefined(entityInstance.data[parentObject.name]) && entityInstance.data[parentObject.name].$$getID() === '' && (angular.isUndefined(entityID) || !entityID.trim().length)) {
	                            var parentEntityInstance = entityInstance.data[parentObject.name];
	                            var parentEntityID = parentEntityInstance.$$getID();
	                            if (parentEntityID === '' && parentEntityInstance.forms) {
	                                objectLevel = getObjectSaveLevel(parentEntityInstance);
	                            }
	                        }
	                    });
	                    return objectLevel;
	                };
	                var validateObject = function (entityInstance) {
	                    var modifiedData = {};
	                    var valid = true;
	                    var forms = entityInstance.forms;
	                    //$log.debug('process base level data');
	                    for (var f in forms) {
	                        var form = forms[f];
	                        form.$setSubmitted(); //Sets the form to submitted for the validation errors to pop up.
	                        if (form.$dirty && form.$valid) {
	                            for (var key in form) {
	                                //$log.debug('key:'+key);
	                                if (key.charAt(0) !== '$' && angular.isObject(form[key])) {
	                                    var inputField = form[key];
	                                    if (angular.isDefined(inputField.$valid) && inputField.$valid === true && inputField.$dirty === true) {
	                                        if (angular.isDefined(entityInstance.metaData[key])
	                                            && angular.isDefined(entityInstance.metaData[key].hb_formfieldtype)
	                                            && entityInstance.metaData[key].hb_formfieldtype === 'json') {
	                                            modifiedData[key] = angular.toJson(form[key].$modelValue);
	                                        }
	                                        else {
	                                            modifiedData[key] = form[key].$modelValue;
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                        else {
	                            if (!form.$valid) {
	                                valid = false;
	                            }
	                        }
	                    }
	                    modifiedData[entityInstance.$$getIDName()] = entityInstance.$$getID();
	                    //$log.debug(modifiedData);
	                    //$log.debug('process parent data');
	                    if (angular.isDefined(entityInstance.parents)) {
	                        for (var p in entityInstance.parents) {
	                            var parentObject = entityInstance.parents[p];
	                            var parentInstance = entityInstance.data[parentObject.name];
	                            if (angular.isUndefined(modifiedData[parentObject.name])) {
	                                modifiedData[parentObject.name] = {};
	                            }
	                            var forms = parentInstance.forms;
	                            for (var f in forms) {
	                                var form = forms[f];
	                                form.$setSubmitted();
	                                if (form.$dirty && form.$valid) {
	                                    for (var key in form) {
	                                        if (key.charAt(0) !== '$' && angular.isObject(form[key])) {
	                                            var inputField = form[key];
	                                            if (angular.isDefined(inputField) && angular.isDefined(inputField.$valid) && inputField.$valid === true && inputField.$dirty === true) {
	                                                if (angular.isDefined(parentInstance.metaData[key])
	                                                    && angular.isDefined(parentInstance.metaData[key].hb_formfieldtype)
	                                                    && parentInstance.metaData[key].hb_formfieldtype === 'json') {
	                                                    modifiedData[parentObject.name][key] = angular.toJson(form[key].$modelValue);
	                                                }
	                                                else {
	                                                    modifiedData[parentObject.name][key] = form[key].$modelValue;
	                                                }
	                                            }
	                                        }
	                                    }
	                                }
	                                else {
	                                    if (!form.$valid) {
	                                        valid = false;
	                                    }
	                                }
	                            }
	                            modifiedData[parentObject.name][parentInstance.$$getIDName()] = parentInstance.$$getID();
	                        }
	                    }
	                    //$log.debug(modifiedData);
	                    //$log.debug('begin child data');
	                    var childrenData = validateChildren(entityInstance);
	                    //$log.debug('child Data');
	                    //$log.debug(childrenData);
	                    angular.extend(modifiedData, childrenData);
	                    return {
	                        valid: valid,
	                        value: modifiedData
	                    };
	                };
	                var validateChildren = function (entityInstance) {
	                    var data = {};
	                    if (angular.isDefined(entityInstance.children) && entityInstance.children.length) {
	                        data = getDataFromChildren(entityInstance);
	                    }
	                    return data;
	                };
	                var processChild = function (entityInstance, entityInstanceParent) {
	                    var data = {};
	                    var forms = entityInstance.forms;
	                    for (var f in forms) {
	                        var form = forms[f];
	                        angular.extend(data, processForm(form, entityInstance));
	                    }
	                    if (angular.isDefined(entityInstance.children) && entityInstance.children.length) {
	                        var childData = getDataFromChildren(entityInstance);
	                        angular.extend(data, childData);
	                    }
	                    if (angular.isDefined(entityInstance.parents) && entityInstance.parents.length) {
	                        var parentData = getDataFromParents(entityInstance, entityInstanceParent);
	                        angular.extend(data, parentData);
	                    }
	                    return data;
	                };
	                var processParent = function (entityInstance) {
	                    var data = {};
	                    if (entityInstance.$$getID() !== '') {
	                        data[entityInstance.$$getIDName()] = entityInstance.$$getID();
	                    }
	                    //$log.debug('processParent');
	                    //$log.debug(entityInstance);
	                    var forms = entityInstance.forms;
	                    for (var f in forms) {
	                        var form = forms[f];
	                        data = angular.extend(data, processForm(form, entityInstance));
	                    }
	                    return data;
	                };
	                var processForm = function (form, entityInstance) {
	                    //$log.debug('begin process form');
	                    var data = {};
	                    form.$setSubmitted();
	                    for (var key in form) {
	                        if (key.charAt(0) !== '$' && angular.isObject(form[key])) {
	                            var inputField = form[key];
	                            if (angular.isDefined(inputField) && angular.isDefined(inputField) && inputField.$valid === true && inputField.$dirty === true) {
	                                if (angular.isDefined(entityInstance.metaData[key]) && angular.isDefined(entityInstance.metaData[key].hb_formfieldtype) && entityInstance.metaData[key].hb_formfieldtype === 'json') {
	                                    data[key] = angular.toJson(form[key].$modelValue);
	                                }
	                                else {
	                                    data[key] = form[key].$modelValue;
	                                }
	                            }
	                        }
	                    }
	                    data[entityInstance.$$getIDName()] = entityInstance.$$getID();
	                    //$log.debug('process form data');
	                    //$log.debug(data);
	                    return data;
	                };
	                var getDataFromParents = function (entityInstance, entityInstanceParent) {
	                    var data = {};
	                    for (var c in entityInstance.parents) {
	                        var parentMetaData = entityInstance.parents[c];
	                        if (angular.isDefined(parentMetaData)) {
	                            var parent = entityInstance.data[parentMetaData.name];
	                            if (angular.isObject(parent) && entityInstanceParent !== parent && parent.$$getID() !== '') {
	                                if (angular.isUndefined(data[parentMetaData.name])) {
	                                    data[parentMetaData.name] = {};
	                                }
	                                var parentData = processParent(parent);
	                                //$log.debug('parentData:'+parentMetaData.name);
	                                //$log.debug(parentData);
	                                angular.extend(data[parentMetaData.name], parentData);
	                            }
	                            else {
	                            }
	                        }
	                    }
	                    ;
	                    return data;
	                };
	                var getDataFromChildren = function (entityInstance) {
	                    var data = {};
	                    //$log.debug('childrenFound');
	                    //$log.debug(entityInstance.children);
	                    for (var c in entityInstance.children) {
	                        var childMetaData = entityInstance.children[c];
	                        var children = entityInstance.data[childMetaData.name];
	                        //$log.debug(childMetaData);
	                        //$log.debug(children);
	                        if (angular.isArray(entityInstance.data[childMetaData.name])) {
	                            if (angular.isUndefined(data[childMetaData.name])) {
	                                data[childMetaData.name] = [];
	                            }
	                            angular.forEach(entityInstance.data[childMetaData.name], function (child, key) {
	                                //$log.debug('process child array item')
	                                var childData = processChild(child, entityInstance);
	                                //$log.debug('process child return');
	                                //$log.debug(childData);
	                                data[childMetaData.name].push(childData);
	                            });
	                        }
	                        else {
	                            if (angular.isUndefined(data[childMetaData.name])) {
	                                data[childMetaData.name] = {};
	                            }
	                            var child = entityInstance.data[childMetaData.name];
	                            //$log.debug('begin process child');
	                            var childData = processChild(child, entityInstance);
	                            //$log.debug('process child return');
	                            //$log.debug(childData);
	                            angular.extend(data, childData);
	                        }
	                    }
	                    //$log.debug('returning child data');
	                    //$log.debug(data);
	                    return data;
	                };
	                var getModifiedDataByInstance = function (entityInstance) {
	                    var modifiedData = {};
	                    var objectSaveLevel = getObjectSaveLevel(entityInstance);
	                    //$log.debug('objectSaveLevel : ' + objectSaveLevel );
	                    var valueStruct = validateObject(objectSaveLevel);
	                    //$log.debug('validateObject data');
	                    //$log.debug(valueStruct.value);
	                    modifiedData = {
	                        objectLevel: objectSaveLevel,
	                        value: valueStruct.value,
	                        valid: valueStruct.valid
	                    };
	                    return modifiedData;
	                };
	                var _getValidationsByProperty = function (entityInstance, property) {
	                    return entityInstance.validations.properties[property];
	                };
	                var _getValidationByPropertyAndContext = function (entityInstance, property, context) {
	                    var validations = _getValidationsByProperty(entityInstance, property);
	                    for (var i in validations) {
	                        var contexts = validations[i].contexts.split(',');
	                        for (var j in contexts) {
	                            if (contexts[j] === context) {
	                                return validations[i];
	                            }
	                        }
	                    }
	                };
	                return $delegate;
	            }]);
	    }]);
	exports.ngslatwallmodelmodule = ngslatwallmodelmodule;


/***/ },
/* 136 */
/***/ function(module, exports) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	var EntityRBKey = (function () {
	    function EntityRBKey() {
	    }
	    //@ngInject
	    EntityRBKey.Factory = function ($slatwall) {
	        return function (text) {
	            if (angular.isDefined(text) && angular.isString(text)) {
	                text = text.replace('_', '').toLowerCase();
	                text = $slatwall.getRBKey('entity.' + text);
	            }
	            return text;
	        };
	    };
	    return EntityRBKey;
	})();
	exports.EntityRBKey = EntityRBKey;


/***/ },
/* 137 */
/***/ function(module, exports) {

	/// <reference path='../../../typings/slatwallTypescript.d.ts' />
	/// <reference path='../../../typings/tsd.d.ts' />
	var SWCurrency = (function () {
	    function SWCurrency() {
	    }
	    // public $slatwall;
	    // public realFilter = (value,decimalPlace):string=> {
	    //     // REAL FILTER LOGIC, DISREGARDING PROMISES
	    //     if(!angular.isDefined(data)){
	    //         $log.debug("Please provide a valid currencyCode, swcurrency defaults to $");
	    //         data="$";
	    //     }
	    //     if(angular.isDefined(value)){
	    //         if(angular.isDefined(decimalPlace)){
	    //             value = parseFloat(value.toString()).toFixed(decimalPlace) 
	    //         } else { 
	    //             value = parseFloat(value.toString()).toFixed(2)
	    //         }
	    //     }
	    //     return data + value;
	    // }
	    // public filterStub = (value:string, currencyCode:string, decimalPlace:number)=> {
	    //     if( data === null ) {
	    //         if( !serviceInvoked ) {
	    //             serviceInvoked = true;
	    //                 $slatwall.getCurrencies().then((currencies)=>{
	    //                 var result = currencies.data;
	    //                 data = result[currencyCode];
	    //             });
	    //         }
	    //         return "-";
	    //     }
	    //     else 
	    //     return realFilter(value,decimalPlace);
	    // }
	    //@ngInject
	    SWCurrency.Factory = function ($sce, $log, $slatwall) {
	        // var data = null, serviceInvoked = false;
	        // var filterStub = this.filterStub;
	        // filterStub.$stateful = true;
	        // return filterStub;  
	        return function (value, currencyCode, decimalPlace) {
	            var data = null, serviceInvoked = false;
	            function realFilter(value, decimalPlace) {
	                // REAL FILTER LOGIC, DISREGARDING PROMISES
	                if (!angular.isDefined(data)) {
	                    $log.debug("Please provide a valid currencyCode, swcurrency defaults to $");
	                    data = "$";
	                }
	                if (angular.isDefined(value)) {
	                    if (angular.isDefined(decimalPlace)) {
	                        value = parseFloat(value.toString()).toFixed(decimalPlace);
	                    }
	                    else {
	                        value = parseFloat(value.toString()).toFixed(2);
	                    }
	                }
	                return data + value;
	            }
	            function filterStub(value, currencyCode, decimalPlace) {
	                this.$stateful = true;
	                if (data === null) {
	                    if (!serviceInvoked) {
	                        serviceInvoked = true;
	                        $slatwall.getCurrencies().then(function (currencies) {
	                            var result = currencies.data;
	                            data = result[currencyCode];
	                        });
	                    }
	                    return "-";
	                }
	                else
	                    return realFilter(value, decimalPlace);
	            }
	            return filterStub;
	        };
	    };
	    return SWCurrency;
	})();
	exports.SWCurrency = SWCurrency;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/tsd.d.ts" />
	/// <reference path="../../../typings/slatwallTypeScript.d.ts" />
	var alert_module_1 = __webpack_require__(11);
	var loggermodule = angular.module('logger', [alert_module_1.alertmodule.name])
	    .run([function () {
	    }]);
	exports.loggermodule = loggermodule;
	//.factory('$exceptionHandler', ['$injector', ($injector) => new ExceptionHandler($injector)]);;


/***/ }
/******/ ]);