function Mpoints( T , str )
%
% This is the standard function for displaying the framework of points
% computed by shapes and xshapes (and for autoshapes and autoxshapes, which
% use shapes and xshapes).
%
   T = [ T , T( [ 1 , 2 ] ) ] ;
   S = size( T ) ;
   npoints = floor( S / 2 ) ;
   npoints = npoints( 2 ) ;
   T = transpose( reshape( T , 2 , npoints ) ) ;
   X = T( : , 1 ) + 10 ;
   Y = T( : , 2 ) + 10 ;
   plot( X , Y , 'k.' )
   axis equal
   axis square
   axis off
   title( str )
end