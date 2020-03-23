function y = rowvec( x )

% Converts any valid sample-array format to the standard Toolkit row
% vector format. Stereo matrices are reduced to a mono sum. Output is
% normalized to the range [-1,+1].
%
%   y = rowvec( x )
%
% Input:
%    x = array of samples (row or column vector, or Nx2 matrix)
%
% Output:
%    y = normalized row vector of samples

  [ rows , cols ] = size( x ) ;
  if rows == 1     % mono row vector
      y = x ;
  elseif cols == 1 % mono column vector
      y = x' ;
  elseif cols == 2 % stereo
      [ left , right ] = destereo( x ) ;
      y = left + right ;
  else
      error( 'invalid sample array format' ) ;
  end
  y = y / max( abs( y ) ) ;
  
end