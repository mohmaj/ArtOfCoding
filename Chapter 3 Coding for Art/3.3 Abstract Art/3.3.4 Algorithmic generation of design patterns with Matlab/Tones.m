function Tones( string , sym )
 dur = 0.08333333 ;
 sr = 44100 ;
 base = 440 ;
 twochan = 1 ; % 0 = no stereo ; 1 = "concert hall"
 s = cumsum( 2 .* ( string - 0.5 ) ) ;
 f = base * ( 2 .^ ( s / sym ) ) ;
 nyq = sr / 2 ;
 sub = 16 ;
 n = floor( dur * sr ) ;
 z = [] ;
 w = hann( n ) ;
 prev = 0 ;
 for i = 1 : length( string )
     if f( i ) > nyq
         wave = sine( tanh( f( i ) / nyq ) * f ( i ) , dur , sr ) ;
     elseif f( i ) < sub
         wave = sine( sub + f( i ) , dur , sr ) ;
     elseif string( i ) > prev
         wave = fm_instr(f(i),1.5,4,[0.25,0.5,1,1,0.33,0.16,0],[0.033,0.033,0.033,0.5,0.02,0.02,0.02],sr);
     elseif string( i ) < prev
         wave = fm_instr(f(i),1,5,[1,0.75,0.7,0],[0.1,0.1,0.3,0.1],sr);
     else
         dur = 1 / ( log( f ( i ) ) / log( 2 ) ) ;
         wave = sine( f( i ) , dur , sr ) ;
     end
     [ a , b ] = trim2( w , wave ) ;
     grain = a .* b ;
     z = [ z , grain ] ;
     prev = string( i ) ;
 end
 if twochan
    h = stereo( z , sr ) ; % concert hall
    sound( h , sr ) ; 
 else
%
%  Un-comment ONE of the following to get the desired audio effect
%    z = unidelay( z , .5 , 0 , 1 , .05 , sr ) ;   % pre-delay
    z = unidelay( z , 1 , .175 , 0 , .4 , sr ) ;  % echo
%    z = unidelay( z , 1 , .7 , 0 , .09 , sr ) ;   % retro spring reverb
%    z = unidelay( z , 1 , .92 , 0 , .001 , sr ) ; % comb-filtered resonator 1
%    z = unidelay( z , 1 , .95 , 0 , .01 , sr ) ;  % comb-filtered resonator 2
%    z = unidelay( z , 1 , .5 , .3 , .4 , sr ) ;   % liquid echoes
%
    h = z / max( abs( z ) ) ;
    out = fadein( fadeout( h , 1 , sr ) , 1 , sr ) ;
    out = [ zeros( 1 , floor( sr / 10 ) ) , out ] ;
    sound( out , sr ) ;
end