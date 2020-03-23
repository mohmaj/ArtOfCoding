function y = fadein( h , dur , sr )
   n = floor( dur * sr ) ;
   lenh = length( h ) ;
   if n > lenh
       y = h ;
   else
       w = expattack( dur , 8 , sr ) ;
       i = 1 : n ;
       h( i ) = w .* h( i ) ;
       y = h ;
   end
end


