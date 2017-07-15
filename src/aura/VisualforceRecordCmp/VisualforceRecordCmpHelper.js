({
    /**
     * Handles receiving message event posted from visualforce page.
     * Expect JSON data "{ 'recordId' : 'xxx', 'action' : 'refresh' }"
     */
    handleMessage : function( component, event ) {

        try {

            if ( event.data && event.data.indexOf( 'recordId' ) > -1 && event.data.indexOf( 'action' ) > -1 ) {

                var recordId = component.get( 'v.recordId' );
                var data = JSON.parse( event.data );

                if ( data.recordId === recordId && data.action === 'refresh' ) {
                    $A.get( 'e.force:refreshView' ).fire();
                }

            }

        } catch( e ) {

            console.error( e );

        }

    }
})