% Recursive divide-and-conquer version of the Cognitive transform. For 
% arrays of 16384 or more elements, the speed advantage of this function
% over the other versions of the Cognitive transform becomes increasingly
% significant. 

function y = rcog( s )
   if length( s ) > 4
       left = rcog( lhalf( s ) ) ;
       right = rcog( rhalf( s ) ) ;
       y = horzcat( xor( left , right ) , right ) ;
   else
       m = Gh( 2 ) ;
       left = bmp( lhalf( s ) , m ) ;
       right = bmp( rhalf( s ) , m ) ;
       y = horzcat( xor( left , right ) , right ) ;
   end
end