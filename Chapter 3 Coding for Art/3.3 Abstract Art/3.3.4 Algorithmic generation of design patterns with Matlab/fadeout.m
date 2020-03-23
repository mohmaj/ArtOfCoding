function y = fadeout( h , dur , sr )
   n = floor( dur * sr ) ;
   lenh = length( h ) ;
   if n > lenh
       y = h ;
   else
       w = expdecay( dur , 8 , sr ) ;
       i = lenh - n + 1 : lenh ;
       h( i ) = w .* h( i ) ;
       y = h ;
   end
end

