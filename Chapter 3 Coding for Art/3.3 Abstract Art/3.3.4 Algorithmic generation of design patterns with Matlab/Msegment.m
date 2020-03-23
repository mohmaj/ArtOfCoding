function Msegment( T  , str )
%
% Msegment is "under construction." It is intended to be a replacement for
% Mplot, but the quality of the figures it generates is still
% unsatisfactory 
%
 T = horzcat( T , T( [ 1 , 2 ] ) ) ;
 Tmax = 1 + max( T ) ;
 M = zeros( Tmax , Tmax ) ;
 while length( T ) >= 4
     y0 = T( 1 ) ;
     y1 = T( 3 ) ;
     x0 = T( 2 ) ;
     x1 = T( 4 ) ;
     xdiff = x1 - x0 ;
     ydiff = y1 - y0 ;
     npts = max( [ abs( xdiff ) , abs( ydiff ) ] ) ;
     xrange = round( linspace( x0 , x1 , npts ) ) ;
     yrange = round( linspace( y0 , y1 , npts ) ) ;
     for i = 1 : npts
        i0 = xrange( i ) + 1 ;
        i1 = yrange( i ) + 1 ;
        M( i0 , i1 ) = 1 ;
     end
     T = T( 3 : end ) ;
 end
 imdisplay( M , str ) ;