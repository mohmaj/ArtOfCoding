%   y = xrandv( n , p )
%
% Input:
%   n = length of the output vector
%   p = approximate fraction of 1's in y (0<p<1)
% Output:
%   y = length-n random vector of 1's and 0's

function y = xrandv( n , p )
   y = ( rand( 1 , n ) > 1 - p ) == 1 ;
end

