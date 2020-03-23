function T = scaleadj( T )
   I = 255 ;
   D = 0.5 ;
   K = size( T ) ;
   T = T - repmat( min( T ) , [ K( 1 ) , 1 ] ) ;
   T = ravel( transpose( T ) ) ;
   K = I / max( T ) ;
   T = floor( D + ( T * K ) ) ;
end

