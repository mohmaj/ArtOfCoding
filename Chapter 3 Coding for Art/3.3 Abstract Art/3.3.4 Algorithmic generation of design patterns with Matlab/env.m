function y = env( amp , dur , sr )

% Generates a multi-segment linear envelope. The envelope can be applied
% to a signal with mul or vca.
%
%   y = env( amp , dur , sr )
%
% Inputs:
%   amp = vector containing the amplitudes at the end of each segment
%         (starting amplitude is always 0)
%   dur = vector containing the durations of the segments
%   sr  = sample rate in samples per second
%
% Output:
%   y   = vector of samples of the specified envelope

  if length( amp ) == length( dur )
    n = length( amp ) ;
    start = 0 ;
    a = 1 ;
    y = zeros( 1 , sum( floor( dur * sr ) ) ) ;
    for i = ( 1:n )
        nsamples = floor( dur(i) * sr ) ;
        b = a + nsamples - 1 ;
        finish = amp( i ) ;
        step = ( finish - start ) / nsamples ;
        y(a:b) = linspace( start , finish - step , b - a + 1 ) ;
        a = b + 1 ;
        start = finish ;
    end
  else
    error( 'lengths of amp and dur arrays do not match' ) ;
  end

end