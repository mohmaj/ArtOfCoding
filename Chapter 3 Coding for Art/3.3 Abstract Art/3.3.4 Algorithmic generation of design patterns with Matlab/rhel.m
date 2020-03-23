% Recursive divide-and-conquer version of the Helical transform. For arrays
% of 16384 or more elements, the speed advantage of this function over the
% other versions of the Helical transform becomes increasingly significant.
% The length of the vector to be transformed must be a power of two.

function y = rhel( s )
   if length( s ) > 4
       left = rhel( lhalf( s ) ) ;
       right = rhel( rhalf( s ) ) ;
       y = horzcat( left , xor( left , right ) ) ;
   else
       m = Gv( 2 ) ;
       left = bmp( lhalf( s ) , m ) ;
       right = bmp( rhalf( s ) , m ) ;
       y = horzcat( left , xor( left , right ) ) ;
   end
end