function y = fm_instr( cf , cm , mi , amp , dur , sr )

% Implements an FM instrument. The amp argument specifies the amplitudes of
% a single multi-segment linear envelope, which is applied both to output
% amplitude and modulation index. The modulating frequency is obtained
% by c:m ratio. See FMDemo for a demonstration of the use of fm_instr.
%
%   y = fm_instr( cf , cm , mi , amp , dur , sr )
%
% Inputs:
%   cf  = carrier frequency in Hz.
%   cm  = c:m ratio
%   mi  = modulation index
%   amp = array of ending amplitudes of envelope segments (start is always 0)
%   dur = array of segment durations in seconds
%   sr  = sample rate in samples per second
%
% Output
%   y   = the instrument tone

  n = sum( floor( dur * sr ) ) ;             % number of samples
%
% set carrier and modulating signal
%
  t = ( 0:n-1 ) / sr ;                       % time initialization
  c = 2 * pi * cf * t ;                      % generate carrier
  mf = cf / cm;                              % compute modulation frequency
%
% apply linear envelope to c and m
%
  linen = env( amp , dur , sr ) ;            % generate linear envelope
  m = mi * linen .* cos( 2 * pi * mf * t ) ; % generate modulating signal
%
% generate frequency modulated tone
%
  y = linen .* sin( c + m ) ;

end