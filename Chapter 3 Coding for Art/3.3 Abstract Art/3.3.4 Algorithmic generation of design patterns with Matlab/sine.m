function y = sine( freq , dur , sr )

% Generates samples of a sine tone of specified frequency and duration
%
%   y = sine( freq , dur , sr )
%
% Inputs:
%   freq = frequency in Hz.
%   dur  = duration in seconds
%   sr   = sample rate in samples per second
%
% Output:
%   y    = vector of sine tone samples

  n = ceil( sr * dur ) ;          % number of samples to be generated
  t = ( 0 : n - 1 ) / sr ;        % generate time increments
  y = sin( 2 * pi * freq * t ) ;  % generate sine wave
  
end