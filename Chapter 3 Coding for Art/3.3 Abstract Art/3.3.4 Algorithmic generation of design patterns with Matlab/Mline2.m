function Mline2( T , str )
%
% Mline2 draws bold, double-width lines. It works best for shapes when the
% "reps" argument is 2, and for xshapes when the "length" argument is <= 8.
% Mline is not recommended for use with autoshapes and autoxshapes.
%
   T = [ T , T( [ 1 , 2 ] ) ] ;
   S = size( T ) ;
   npoints = floor( S / 2 ) ;
   npoints = npoints( 2 ) ;
   T = transpose( reshape( T , 2 , npoints ) ) ;
   X = T( : , 1 ) + 10 ;
   Y = T( : , 2 ) + 10 ;
   plot( X , Y , 'k-' , 'LineWidth' , 2 )
   axis equal
   axis square
   axis off
   title( str )
end

