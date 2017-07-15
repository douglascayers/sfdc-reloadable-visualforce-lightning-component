({
	handleRecordUpdated : function( component, event, helper ) {

        try {

            // reload iframe
            var flowFrame = document.getElementById( 'flowFrame' );
            flowFrame.src = flowFrame.src;

        } catch ( e ) {

            console.error( e );

        }

	}
})