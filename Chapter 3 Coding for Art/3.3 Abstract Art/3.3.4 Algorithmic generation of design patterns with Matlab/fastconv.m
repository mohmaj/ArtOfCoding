function cxy = fastconv( x , y )

% fast convolution of vectors x and y
%
%   cxy = fastconv( x , y )
%
% Inputs:
%   x = input vector (typically an impulse response)
%   y = input vector (typically sound samples)
%
% Output:
%   cxy = x convolved with y

  x = rowvec( x ) ;
  y = rowvec( y ) ;
  
 % Determine the nonzero lengths.
 
  Ny = length( y ) ; 
  Nx = length( x ) ; 
  M = Nx + Ny - 1 ;
  for Ly = Ny : -1 : 1
    if y( Ly ) ~= 0
      break
    end
  end
  for Lx = Nx : -1 : 1
    if x( Lx ) ~= 0
      break
    end
  end
%
% Lengthen y and x if need be.  L=transform length.
%  
  L = Nx ;
  if ( Ly > L - Lx )
    x = [ x , zeros( 1 , Ly - ( L - Lx ) ) ] ;
    L = L + Ly - ( L - Lx ) ;
  end
  if ( L > Ny )
    y = [ y , zeros( 1 , L - Ny ) ] ;
  end
%
% Do the convolution.
%
  X = fft( x , L ) ;
  Y = fft( y , L ) ;
  cxy = real( ifft( X  .*  Y , L ) ) ;
  if ( length( cxy ) < M )
    cxy = [ cxy , zeros( 1 , M - length( cxy ) ) ] ;
  end
  cxy = cxy( 1:M ) ;
  cxy = cxy / max( abs( cxy ) ) ;
  
end

% Samuel D. Stearns and Ruth A. David. "Signal Processing Algorithms in
% MATLAB. Prentice-Hall, 1969. (function "spconv" on CD)