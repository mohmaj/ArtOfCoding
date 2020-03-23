function autoxrand( n )
%
% Generates a series of xshapes-like figures from random bit-strings.
%
% Input:
%   n - the desired number of figures
%
   rng( 'shuffle' ) ;
   for i = 1 : n
       sym = floor( 26 * rand( 1 , 1 ) ) + 5 ;
       r = 4 .^ [ 2 , 3 , 4 ] ;
       i = ceil( rand( 1 , 1 ) * 3 ) ;
       len = r( i ) ;
       p = rand( 1 , 1 ) ;
       xrand( sym , len , p ) ;
       pause( 2 )
   end
end

