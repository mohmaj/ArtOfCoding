% Converts a decimal number to a length-n vector of 1's and 0's
% representing the corresponding binary number
%
%   y = d2b( x , n )
%
% Input:
%   x = decimal number to be converted
%   n = number of bits in the binary representation of x
% Output:
%   y = vector representing x as a binary number

function y = d2b( x , n )
   y = abs( dec2bin( x , n ) ) - 48 ;
   y = horzcat( y , zeros( n - length( y ) ) ) ;
end