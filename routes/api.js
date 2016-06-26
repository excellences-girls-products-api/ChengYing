/**
 * Created by chenying on 16-5-30.
 */
var express = require ( 'express' );
var router = express . Router ();

router . get ( '/images' , function ( req , res ) {
    res . sendfile('./views/post.html') ;
});
router . post ( '/images' , function ( req , res ) {
    res . sendfile('./views/post.html') ;
});
router . put ( '/imagesput' , function ( req , res ) {
    res . sendfile('./views/put.html') ;
});
router . delete ( '/imagesdelete' , function ( req , res ) {
    res . sendfile('./views/delete.html') ;
});

module . exports = router ;