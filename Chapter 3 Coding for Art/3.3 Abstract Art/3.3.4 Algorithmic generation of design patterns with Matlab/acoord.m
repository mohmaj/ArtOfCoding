function T = acoord( T )
   D = 0.5 ;
   T = cumsum( T ) ;
   I = 255 ;
   T = ( T * I ) + D ;
   T = floor( T ) ;
end

