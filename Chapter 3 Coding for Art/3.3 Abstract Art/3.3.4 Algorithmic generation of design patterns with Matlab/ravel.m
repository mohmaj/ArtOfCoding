% Ravels a matrix in column-major order.
%
%   y = ravel( x )
%
% Input:
%   x = any matrix
% Output:
%   y = x raveled into a vector in column-major order

function y = ravel( x )
   n = numel( x ) ;
   y = reshape( x , 1 , n ) ;
end