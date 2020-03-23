function y = reverse( x )

% Reverses a vector
%
%   y = reverse( x )
%
% Input:
%   x = vector to be reversed
%
% Output:
%   y = reversed vector

  x = rowvec( x ) ;
  
  y = x( end:-1:1 ) ;
  
end

% www.eng-tips.com/viewthread.cfm!qid14992&page=5