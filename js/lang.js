var lang = new Lang();

lang.dynamic('th', 'js/langpack/th.json');

lang.init({
	/**
	 * The default language of the page / app.
	 * @type String
	 * @required 
	 */
	defaultLang: 'en',
	
	/**
	 * The current language to set the page to.
	 * @type String
	 * @optional 
	 */
	currentLang: 'en',
	
	/**
	 * This object is only required if you want to override the default
	 * settings for cookies.
	 */
	cookie: {
		/**
		 * Overrides the default cookie name to something else. The default
		 * is "langCookie".
		 * @type String
		 * @optional
		 */
		name: 'langCookie',
		
		expiry: 365,
		path: '/'
	},
	 
	/**
	 * If true, cookies will override the "currentLang" option if the
	 * cookie is set. You usually shouldn't need to specify this option
	 * at all unless your JavaScript lang.init() method is being
	 * dynamically generated by PHP or other server-side processor.
	 * @type Boolean
	 * @optional 
	 */
	allowCookieOverride: true
});