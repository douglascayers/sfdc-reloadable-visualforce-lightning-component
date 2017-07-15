({
    /**
     * Adds event listeners for when the iframe'd Visualforce page
     * posts messages indicating its embedded Flow has finished.
     */
    doInit : function( component, event, helper ) {

        // https://developer.salesforce.com/blogs/developer-relations/2017/01/lightning-visualforce-communication.html

        window.addEventListener( 'message', function( evt ) {
            helper.handleMessage( component, evt );
        });

        window.addEventListener( 'onmessage', function( evt ) {
            helper.handleMessage( component, evt );
        });

    },

    /**
     * Handles event when the underlying record has changed.
     * Lightning Data Service calls this function.
     */
	handleRecordUpdated : function( component, event, helper ) {

        try {

            var recordId = component.get( 'v.recordId' );
            var vfPageName = component.get( 'v.vfPageName' );

            // reload iframe
            var flowFrame = document.getElementById( 'flowFrame' );
            flowFrame.src = '/apex/' + vfPageName + '?id=' + recordId;

        } catch ( e ) {

            console.error( e );

        }

	}
})