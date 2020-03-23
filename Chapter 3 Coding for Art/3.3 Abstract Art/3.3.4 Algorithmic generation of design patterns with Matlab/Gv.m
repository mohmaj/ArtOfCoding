% Creates Langlet's Gv matrix
%
%   y = Gv( n )
%
% Input:
%   n = order of Gv (a square matrix)
% Output:
%   y = Gv matrix of the specified order

function y = Gv( n )
   y = fliplr( G( n ) ) == 1 ;
end