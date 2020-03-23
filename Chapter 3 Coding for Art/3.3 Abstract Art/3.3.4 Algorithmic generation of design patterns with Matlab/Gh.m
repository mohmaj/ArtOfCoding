% Creates Langlet's Gh matrix
%
%   y = Gh( n )
%
% Input:
%   n = order of Gh (a square matrix)
% Output:
%   y = Gh matrix of the specified order

function y = Gh( n )
   y = flipud( G( n ) ) == 1 ;
end