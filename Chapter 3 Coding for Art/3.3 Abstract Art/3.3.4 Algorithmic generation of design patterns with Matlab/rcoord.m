function T = rcoord( B , M , K , sym )
   D = 0.5 ;
   I = [ 1 + floor( sym * D ) , 1 ] ;
   T = repmat( B , 1 , floor( K / length( B ) ) ) ;
   T = T * 1 ;
   T( T == 0 ) = I( 1 ) ;
   T = cumsum( T ) ; 
   T = rotr( T ) - 1 ;
   T = mod( T , sym ) + 1 ;
   T = M( T , : , 1 ) ;
end

